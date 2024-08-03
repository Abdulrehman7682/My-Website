import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TodosPage() {
  const [allTodos, setAllTodos] = useState([]);
  const [updateTodo,setUpdateTodo] = useState({});

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    setAllTodos(todos);
  }, []);

  const handleEdit = (id) => {
    const todoToEdit = allTodos.find((todo) => todo.userid === id);
    setUpdateTodo(todoToEdit || {});
  };
  
 
  const handleSave = ()=>{
    if (updateTodo) {
      const updatedTodos = allTodos.map((todo) =>
        todo.userid === updateTodo.userid ? updateTodo : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setAllTodos(updatedTodos);
      setUpdateTodo({}); // Reset the state
    }
  }

  const handleDelete = (id) => {
    const filteredTodos = allTodos.filter((todo) => todo.userid !== id);
    localStorage.setItem('todos', JSON.stringify(filteredTodos));
    setAllTodos(filteredTodos);
  }
  return (
    <>
      <Header />
      <main className='bg-white'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1 className='text-center text-success mb-5'>Show all todos in table</h1>
              <div style={{ textAlign: 'right' }}>
                <Link to='/addTodos' className='btn btn-info mb-4' id='button'>
                  Add Todo
                </Link>
              </div>
              <div className='table-responsive'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Location</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Date Created</th>
                      <th>User-Id</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allTodos.map((todo, index) => (
                      <tr key={index}>
                        <th scope='row'>{index + 1}</th>
                        <td>{todo.title}</td>
                        <td>{todo.location}</td>
                        <td>{todo.description}</td>
                        <td>{todo.date}</td>
                        <td>{todo.status}</td>
                        <td>{todo.dateCreated}</td>
                        <td>{todo.userid}</td>
                        <td>
                          <button
                            type='button'
                            className='btn btn-info'
                            data-bs-toggle='modal'
                            data-bs-target='#exampleModalEdit'
                          onClick={() => handleEdit(todo.userid)}
                          >
                            Edit
                          </button>
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Delete
                          </button>
                          {/* Delete Model */}
                          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Modal</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  Are you sure you want to delete this todo
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>handleDelete(todo.userid)}>Yes</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Edit Model */}
                          <div class="modal fade" id="exampleModalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Modal</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  <input type="text" placeholder='Type Your Title' className='form-control my-3' name='title' 
                                    value={updateTodo.title || ''} onChange={(e) => setUpdateTodo({ ...updateTodo, title: e.target.value })}
                            />
                                  <input type="text" placeholder='Type Your Location' className='form-control my-3' name='location' 
                                    value={updateTodo.location || ''} onChange={(e) => setUpdateTodo({ ...updateTodo, location: e.target.value })}
                            />
                                  <input type="text" placeholder='Type Your Description' className='form-control my-3' name='description' 
                                    value={updateTodo.description || ''} onChange={(e) => setUpdateTodo({ ...updateTodo, description: e.target.value })}
                            />
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleSave}>Yes</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
