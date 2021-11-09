import React from 'react';
import Board from "./Board.js";
import Postit from "./Postit.js";

class App extends React.Component {
    constructor (props){
      super (props);
      this.state = {
        title: "",
        postits: [],
      }
    }
    handleChangeTitle = (event)=>{
      this.setState({
        title: event.target.value,
      })
    }
    submit = () =>{
      let postit = <Postit 
        name = {this.state.title}
        items = {[]}
        date = {new Date().toLocaleString()}
      />
      this.state.postits.push(postit);
      
      this.setState({
        title: "",
        postits: this.state.postits,
      })
    } 

    removePost (x) {
      let newList = this.state.postits.filter((item, i) => i!==x)
      this.setState( {
        postits: newList,
      })
    }

    render(){
      return <div>
          <div>
            <input 
              value= {this.state.title} 
              type="text" placeholder="Titulo do Postit"
              onChange= {this.handleChangeTitle}
            />
            <button name="Submit" onClick={this.submit} >Submit</button>
          </div>
          <div>
          <ul>
              {this.state.postits.map((postit, x)=>
              <li key={x}>{postit}<button name="remove" onClick={()=> {this.removePost(x)}}>Remove Post</button></li> 
              )}
              
          </ul>
          </div>
        </div>
    }
  }
  
  export default App;