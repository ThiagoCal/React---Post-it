import React from 'react';

class Postit extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            newItemName: "",
            items: [],
        };
    }
    
    handleChangenewItemNameName = (event) => {
        this.setState({
            newItemName: event.target.value,
            items: this.state.items,
        });
    }

    submit = () => {
        this.setState(function(state) {
            state.items.push({ 
                name: state.newItemName,
                date: new Date().toLocaleString(),
            });
            return {
                newItemName: "",
                items: state.items,
            };
        });
    }

    removeItem = (x) => {
        this.setState(function(state) {
            let newList = state.items.filter((item, i) => i !== x);
            return {
                items: newList,
            };
        });
    }

    render () {
        return <div>
            <h1>{this.props.name}</h1>
            <p>Criado em: {this.props.date}</p>
            <ul>
                {this.state.items.map((item, i) =>
                    <li key={"item"+i}>
                        <div>
                            <p>
                                {item.name}
                                <button name="remove" onClick={() => this.removeItem(i)}>
                                    -
                                </button>
                            </p> 
                        </div>
                        <span>{item.date}</span>
                    </li> 
                )}
            </ul>
          
            <input type="text" placeholder="Bullet do Postit"
                value={this.state.newItemName}
                onChange={this.handleChangenewItemNameName}/>
            <button name="Submit" onClick={this.submit} >Submit</button>
        </div>
    }
}

export default Postit;
