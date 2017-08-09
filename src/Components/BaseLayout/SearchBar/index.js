import React, {Component} from 'react';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentString: ""
    };
  }

  handleChange = e => {
    this.state.currentString = e.target.value;
  }

  sendData = e => {
    this.props.handleSubmit(this.state.currentString);
  }
  
  render(){
    return (
      <div>
        <form>
          <input type="text" value = {this.change.currentString} onChange={this.handleChange}/>
          <button type="submit" onClick={this.sendData}>Search</button>
          </form>
      </div>
    );
  }
}
