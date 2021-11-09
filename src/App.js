import React from 'react';
import Board from "./Board.js";
import Postit from "./Postit.js";

class App extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            title: "",
            postits: [],
        };
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
    }

    submit = () => {
        this.setState(function(state) {
            state.postits.push(<Postit 
                name={state.title}
                date={new Date().toLocaleString()}
            />);
            return {
                title: "",
                postits: state.postits,
            };
        });
    } 

    removePost (x) {
        this.setState(function(state) {
            let newList = state.postits.filter((item, i) => i !== x);
            return {
                postits: newList,
            };
        });
    }

    render(){
        return <div>
            <div>
                <input type="text" placeholder="Titulo do Postit"
                    value={this.state.title} 
                    onChange={this.handleChangeTitle}
                />
                <button name="Submit" onClick={this.submit} >Submit</button>
            </div>
            <div>
                <ul>
                    {this.state.postits.map((postit, x) =>
                        <li key={"postit"+x}>
                            {postit}
                            <button name="remove" onClick={() => this.removePost(x)}>
                                Remove Post
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    }
}
  
export default App;
