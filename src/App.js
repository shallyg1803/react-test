import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  render() {
    // let x=1;
    // let y=2;
    let Subscribers = [
      {
        id: 1,
        name: "Shally",
        phone: "9999999999"
      },
      {
        id: 2,
        name: "ShallyG",
        phone: "9999999999"
      }
    ]
    return (
      <div>
        <Header />
        <div  className="component-body-container">
        <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span><br />
          <span className="grid-item phone-heading">Phone</span>        
        </div>
        {
          Subscribers.map(sub =>{
            return <div key={sub.id} className="grid-container">
            <span className="grid-item">{sub.name}</span><br />
            <span className="grid-item">{sub.phone}</span><br />
          </div>
          })
        }
       
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