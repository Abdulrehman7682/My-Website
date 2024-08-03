import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddTodos() {
  const [title,setTitle] = useState("")
  const [location,setLocation] = useState("")
  const [description,setDescription] = useState("")
  const [date,setDate] = useState("")
  let Navigate = useNavigate()
  const handleAddTodo = (e) =>{
    function getTodos(){
        let todos = localStorage.getItem("todos");
        return todos ? JSON.parse(todos) : [] ;
    }
    let todos = getTodos()
   e.preventDefault();
   if(!title){
    alert("PLease add your title")
    return;
   }
   if(!location){
    alert("Please add your location")
    return;
   }
   if(!description){
    alert("Please add your description")
    return;
   }
   if(!date){
    alert("Please add your date")
    return;
   }
   let todo = {
    title,
    location,
    description,
    date,
    userid : todos.length + 1,
    status : "inCompleted",
    dateCreated : new Date().getTime()
   }

   todos.push(todo)
   alert("Todo has been successfully added")
   localStorage.setItem("todos",JSON.stringify(todos))
   Navigate("/todos")
  }

  return (
    <main>
          <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card p-4 text-center">
                            <form onSubmit={handleAddTodo}>
                                <h2 className='mb-4'>Create New Todo</h2>
                                <div>
                                    <input type="text" placeholder='Type Your Title' className='form-control my-4' name='title' value={title}
                                    onChange={(e)=>setTitle(e.target.value)} />
                                </div>
                                <div>
                                    <input type="location" placeholder='Type Your Location' className='form-control my-4' name='location' value={location} 
                                    onChange={(e)=>setLocation(e.target.value)}/>
                                </div>
                                <div>
                                    <textarea type="text" placeholder='Type Your Description ' className='form-control my-4' name='description' value={description} 
                                    onChange={(e)=>setDescription(e.target.value)}/>
                                </div>
                                    <input type="date" className='form-control my-4' name='date' value={date}
                                    onChange={(e)=>setDate(e.target.value)}/>
                                <div/>
                                <button className='btn btn-success'>Add Todo</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </main>
  )
}
