import React from 'react'

export default function VAD_EventForm2() {
    // dinh nghia xu ly su kien
    const eventHandleClick1 = (content)=>{
        console.log("======================");
        console.log(content);
        console.log("======================");
    }
  return (
    <div className='alert alert-success'>
        <h2>Event Demo - Function Component</h2>
        <button onClick={eventHandleClick1("Vũ Anh Dương")}>Gọi khi render</button>
        <button onClick={()=>eventHandleClick1("K22CNT2-ReactJS")}>Gọi khi click</button>
    </div>
  )
}
