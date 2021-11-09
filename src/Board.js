import React from 'react';




class Board extends React.Component {

  constructor (props){
    super (props);
    this.state = {
      postits: props.postits,
    }
  }
    removePost (i) {
      this.state.postits.splice(i, 1);
      this.setState( {
        postits: this.state.postits,
      })
    }
    render(){
      return <div>
        <ul>
             {this.state.postits.map((postit, i)=>
             <li key={i}>{postit}<button name="remove" onClick={()=> {this.removePost(i)}}>Remove Post</button></li> 
             )}
            
          </ul>
      </div>
    }
  }

  export default Board;