import { useState } from 'react'

function App() {
  const [inp, setInp] = useState('')
  const [taskList,setTaskList]=useState([])
  const [task,setTask]=useState('')
  const [dTaskList,setDTasklist]=useState([])

  const fun=()=>{
    if(task.length!==0){
    let x=[...taskList,task]
    setTaskList(x);    
    console.log(taskList)
    setInp('')
    setTask('')
    }
  }
  const tfun=(e)=>{
    setTask(e.target.value)
    setInp(e.target.value)
  }
  
  const dfun=(i)=>{
    let arr=[...taskList]
    let drr=[...dTaskList,arr[i]]
    setDTasklist(drr)
    arr.splice(i,1)
    setTaskList(arr)
  }

  const kfun=(e)=>{
    console.log(e.key)
    if(e.key==="Enter"){
     fun()
        }
  }

  const dtfun=(i)=>{
    let dar=[...dTaskList]
    dar.splice(i,1)
    setDTasklist(dar)
  }
  const clfun=()=>{
    let clal=[]
    setDTasklist(clal)
  }

  return (
    <>
    
    <div className='bg-zinc-900 h-full w-full pt-24 pb-12 min-h-screen flex'>
      <div>
      <h1 className='text-white pl-36 font-black text-9xl text-red-800 mb-12 text-red-700'>TODO List</h1>
      <h1 className='text-white pl-56 font-black text-7xl text-red-00 mb-12'>{taskList.length===0?"no task to do":taskList.length===1?"1 task to do":taskList.length+" tasks to do"}</h1>
      <input className='outline w-60 h-12  ml-96 rounded-lg pl-3' onChange={tfun} value={inp} onKeyDown={kfun}/>
      <button className='bg-red-600 text-white h-12 w-36 ml-6 rounded-full font-black' onClick={fun}>Click Here</button>
      <ul className='text-white ml-96'>
        {
          taskList.map((v,i)=><li className='text-xl outline w-80 mt-3 p-3 flex rounded-md' key={i}><p className='text-red-600 font-black'>{i+1}.</p>    &emsp;    {v} <button className='ml-36 bg-red-600 w-12 rounded-full py-3' onClick={()=>dfun(i)}>X</button></li>)
        }
      </ul>
      </div>
      <div className=''>
        <h1 className='text-gray-400 pl-56 font-black text-7xl text-red-00 mb-12'>{dTaskList.length===0?'':dTaskList.length===1?'Deleted Task':'Deleted Tasks'}</h1>
      <ul className='text-white ml-96'>
        {
          dTaskList.map((v,i)=><li className='text-xl outline w-80 mt-3 p-3 flex rounded-md text-gray-400' key={i}><p className='text-gray-400 font-black'>{i+1}.</p>    &emsp;    {v} <button className='ml-36 bg-gray-400 w-12 rounded-full py-3 text-white' onClick={()=>dtfun(i)}>X</button></li>)
        }
        {
          dTaskList.length===0?'':<button className='mt-3 p-3 bg-gray-400 rounded-lg' onClick={clfun}>CLEAR ALL</button>

        }
      </ul>
      </div>
      </div>
    </>
  )
}

export default App
