import React, { Component } from 'react'


class Chirp extends Component {
    constructor (props){
        super(props)
        //this.state {
            //chirpMessage : " "
            //username: " "
        //}
        
    }
 render(){   
 return (
    

     <div className="text-center">
         Try to Chirp!
    <br>
    </br>
<input type= {Text} placeholder = "Username"></input>
<br>
</br>
<textarea placeholder = "EnterChirpHere"></textarea>
<br>
</br>
<button> Send chirp!</button>  
    <div className="card">
  <div className="card-body">
    <h5 className="card-title"> Addi </h5>
    <p className="card-text">WHATTUPP</p>
   <button className="btn btn-primary">Go To Profile</button>
  </div>
  </div>
  <br>
  </br>
  <div className="card">
  <div className="card-body">
    <h5 className="card-title"> Garrett </h5>
    <p className="card-text">What's popping</p>
   <button className="btn btn-primary">Go To Profile</button>
  </div>
  </div>
  <br>
  </br>
  <div className="card">
  <div className="card-body">
    <h5 className="card-title"> Lucia </h5>
    <p className="card-text">Howdy</p>
   <button className="btn btn-primary">Go To Profile</button>
   </div>
   </div>
   <br>
   </br>
</div>

 )
 }
}

export default Chirp