import React, { Component } from 'react'
//xu ly su kien voi props , state
export default class VAD_EventForm3 extends Component {
    constructor(props){
        super(props);
        // tao doi tuong du lieu thong qua state
        this.state = {
            name: " Vũ Anh Dương ",
            job: " Student "
        }
    }
    // ham xu ly su kien change name
    handleChangeName = ()=>{
        this.setState({
            name:" K22CNT2-ReactJS "
        })
    }
    
    handleChangeJob = ()=>{
        this.setState({
            job:" Công nghệ phần mềm "
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2>Thay đổi dữ liệu trong state</h2>
        <p>Dữ liệu:{this.state.name}-{this.state.job}</p>
        <button onClick={this.handleChangeName}>Thay đổi name</button>
        <button onClick={this.handleChangeJob}>Thay đổi job</button>
      </div>
    )
  }
}
