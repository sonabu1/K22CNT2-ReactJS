import React, { Component } from 'react'

export default class VAD_EventForm4 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Vũ Dương"
        }
    }

    handleGetname =()=>{
        alert(this.props.name);
        this.setState({
            name:this.props.name
        })
    }
  render() {
    return (
      <div className='alert alert-info'>
            <h2>Lấy dữ liệu từ props</h2>
            <button onClick={this.handleGetname}>Get name</button>
            <h2>Welcome to , {this.state.name}</h2>
      </div>
    )
  }
}
