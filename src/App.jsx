import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [task, setTask] = useState([]);


  const submitHandler=(e)=>{
    e.preventDefault();

    const copyTask =[...task];
    copyTask.push({title,detail})
    setTask(copyTask);

    setTitle('');
    setDetail('');
  }
  
  const deleteNote=(idx)=>{
    const copyTask =[...task];
    copyTask.splice([idx],1);
    setTask(copyTask)
  }

  return (
    <div className='flex w-full min-h-screen  bg-black'>
      {/* form input texts here */}
      <div className='w-full h-full p-5 flex md:flex-row  flex-col gap-5' >
        <div className='w-full md:w-1/2 h-full'>
        <h1 className='text-3xl pb-3 text-white font-bold'>Add Notes</h1>
        <form onSubmit={(e)=>{
          submitHandler(e);
        }} className='w-full flex flex-col gap-3' action="submit">

          <input onChange={(e)=>{
            setTitle(e.target.value)
          }}
           className='bg-black text-white border-2 border-white p-3' type="text" value={title}
           placeholder='Enter Notes Heading' />

          <textarea onChange={(e)=>{
            setDetail(e.target.value)
          }}
           className='bg-black text-white border-2 p-3 border-white h-30 mb-3' name="text" value={detail} placeholder='Write Details here' ></textarea>
          <button className='bg-white text-black p-4 rounded-2xl active:scale-95'>Add Note</button>
        </form>
        </div>
        {/* Right Section */}
        <div className='w-1/2 sm:px-2 px-0  border-white '>
        <h1 className='text-3xl pb-3 text-white font-bold'>Recent Notes</h1>
        <div className='md:w-full w-screen flex flex-wrap flex-row overflow-y-auto '>
        {/* Card here */}
        {task.map(function(elem ,idx){
          return <div key={idx}>
        <div className='w-60 h-65 bg-[url(\components\notes2.png)] relative'>
          <div className='w-full h-full bg-cover'>
              <img className='absolute' src="src\components\notes2.png" alt="" />
              <div className='py-8 px-5 z-10 absolute'>
              <h1 className='text-lg pt-1 leading-5 mb-3 font-bold'>{elem.title}</h1>
            <p className='text-gray-600 leading-5'>{elem.detail}</p>
              </div>
            </div>
            <div className='absolute z-20 bottom-17 flex justify-center align-center w-full'>
            <button onClick={()=>{
              deleteNote(idx);
            }} className='absolute active:scale-95  text-white  bg-red-500 font-bold text-xl  px-9 rounded-lg py-1'>Delete</button>
            </div>
          </div> 
        </div>
        })}
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default App