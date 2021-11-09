import React from 'react';

class Postit extends React.Component {
    constructor (props){
      super (props);
      this.state = {
        itemName: "",
        items: [],
        
      }
    }
    handleChangeItem = (event)=>{
      this.setState({
        itemName: event.target.value,
      })
    }
    submit = ()=>{
      this.state.items.push({ 
        name: this.state.itemName,
        date: new Date().toLocaleString(),
      });
      this.setState({
        items: this.state.items,
        itemName: "",
      })
    }
    removeItem = (x) =>{
      let newList = this.state.items.filter((item, i) => i!==x)
      this.setState( {
        postits: newList,
      })
    }
    render () {
      return <div>
          
          <h1> {this.props.name}</h1>
          <p>Criado em: {this.props.date}</p>
          <ul>
             {this.state.items.map((item, i)=>
             <li key={this.props.name+i}>
               <div>
                 <p> {item.name}<button name="remove" onClick={()=> {this.removeItem(i)}}>-</button></p> 
               </div>
               <span>{item.date}</span>
               
             </li> 
             )}
            
          </ul>
          
            <input 
            value= {this.state.itemName} 
            type="text" placeholder="Bullet do Postit"
            onChange= {this.handleChangeItem}
          />
          <button name="Submit" onClick={this.submit} >Submit</button>
        </div> 
    }
  }

  export default Postit;