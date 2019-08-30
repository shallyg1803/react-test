import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  render() {
    // let x=1;
    // let y=2;
    return (
      <div>
        <Header />
        <button>Add</button>
        <div>
          <span>Name</span><br />
          <span>Phone</span>
        </div>
      </div>
 //   <label htmlFor="name">Name:</label>
      //   <input type="text" id="name" placeholder="Type Here" defaultValue={x+y} />
    
      // <div>
      //   <p>ReactJs</p>
      // </div>
      // React.createElement("div", null,
      // React.createElement("p",null, "ReactJs")
    );
  }
}

export default App;