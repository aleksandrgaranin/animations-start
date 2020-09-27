import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    showModal: false,
    showBlog: false
  }
  
  openModal = () => {
    this.setState({showModal: true})
  }
  
  closeModal = () => {
    this.setState({showModal: false})
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button  className="Button"  onClick={()=> this.setState(prevState => ({showBlog: !prevState.showBlog}))}>toggle</button>
        <br></br>
        <Transition 
          in={this.state.showBlog} 
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          {state => (
            <div            
              style={{
                backgroundColor: 'red',
                width: '100px',
                height: '100px',
                margin: 'auto',
                transition: 'opacity 1s ease-out',
                opacity: state ==='exiting' ? 0 : 1
            }}/>  
          )}
                
        </Transition>        
         
            <Modal show = {this.state.showModal} closed={this.closeModal}/>
       
        <Backdrop show = {this.state.showModal}/>
        <button className="Button" onClick={this.openModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
