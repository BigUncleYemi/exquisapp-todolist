import React from "react";
import $ from "jquery";
import "../asset/css/App.css";
import moment from 'moment'

function EditTodoInputModal({item, editTodo }) {
  const [title, handleTitle] = React.useState("");
  const [desc, handleDesc] = React.useState("");
  const [date, handleDate] = React.useState("");
  const [time, handleTime] = React.useState("");
  React.useEffect(() => {
    handleTitle(item.title || "");
    handleDesc(item.desc || "");
    handleDate(item.date || "");
    handleTime(item.time || "");
  },[item])
  const submitTodo = e => {
    if (!title && !date && !time) return alert("fill the required field");
    const data = {
      title,
      desc,
      date,
      time,
      edited: true,
    };
    editTodo(data, item._id);
    $("#EditTodoInputModal").modal("hide");
  }

  return (
    <div className="modal fade" id="EditTodoInputModal" tabIndex="-1" role="dialog" aria-labelledby="EditTodoInputModalTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="form">
        <div className="modal-content">
          <div className="modal-body">
            <div style={{ padding: "30px 20px" }}>
              <div className="form-group">
                <label htmlFor="EditTitleTodo">Title</label>
                <input required type="text" className="form-control" id="editTodoTitle" onChange={e => handleTitle(e.target.value)} value={title} aria-describedby="edit title of Todo" />
              </div>
              <div className="form-group">
                <label htmlFor="EditDateTodo">Date</label>
                <input required type="date" className="form-control" id="editTodoDate" onChange={e => handleDate(e.target.value)} value={date} aria-describedby="edit date of Todo" />
              </div>
              <div className="form-group">
                <label htmlFor="EditTimeTodo">Time</label>
                <input required type="time" className="form-control" id="editTodoTime" onChange={e => handleTime(e.target.value)} value={time} aria-describedby="edit time of Todo" />
              </div>
              <div className="form-group">
                <label htmlFor="EditDescTodo">Description/Notes </label>
                <textarea rows={5} type="text" className="form-control" id="editTodoDesc" onChange={e => handleDesc(e.target.value)} value={desc} aria-describedby="edit Desc of Todo" />
              </div>
              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-danger mx-1 shadow" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-outline-dark mx-1 shadow" onClick={e => submitTodo(e)}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TodoInputModal(props) {
  const [title, handleTitle] = React.useState('');
  const [desc, handleDesc] = React.useState('');
  const [date, handleDate] = React.useState('');
  const [time, handleTime] = React.useState('');
  const submitTodo = e => {
    if (!title && !date && !time) return alert("fill the required field");
    const data = {
      title,
      desc,
      date,
      time,
    };
    props.addTodo(data);
    $("#TodoInputModal").modal("hide");
  }

  return (
    <div className="modal fade" id="TodoInputModal" tabIndex="-1" role="dialog" aria-labelledby="TodoInputModalTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="form">
        <div className="modal-content">
          <div className="modal-body">
            <div style={{ padding: "30px 20px" }}>
              <div className="form-group">
                <label htmlFor="titleTodo">Title</label>
                <input required type="text" className="form-control" id="todoTitle" onChange={e => handleTitle(e.target.value)} aria-describedby="title of Todo" />
              </div>
              <div className="form-group">
                <label htmlFor="DateTodo">Date</label>
                <input required type="date" className="form-control" id="todoDate" onChange={e => handleDate(e.target.value)} aria-describedby="date of Todo" />
              </div>
              <div className="form-group">
                <label htmlFor="TimeTodo">Time</label>
                <input required type="time" className="form-control" id="todoTime" onChange={e => handleTime(e.target.value)} aria-describedby="time of Todo" />
              </div>
              <div className="form-group">
                <label htmlFor="descTodo">Description/Notes </label>
                <textarea rows={5} type="text" className="form-control" id="todoDesc" onChange={e => handleDesc(e.target.value)} aria-describedby="Desc of Todo" />
              </div>
              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-danger mx-1 shadow" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-outline-dark mx-1 shadow" onClick={e => submitTodo(e)}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TodoCard({item, deleteTodo, editItem, viewItem}) {
  return (
    <div className="card shadow border-0">
      <div className="position-absolute mt-2 d-flex align-items-baseline" style={{ right: "0" }}>
        {item.edited && <p className="card-text"><small className="text-muted">edited</small></p>}
        <button onClick={e => {editItem(item); $("#EditTodoInputModal").modal("show")}} type="button" title="edit" className="btn bg-transparent border-0 btn-light m-2 p-0">&#9998;</button>
        <button onClick={e => deleteTodo(item)} type="button" title="delete" className="btn bg-transparent border-0 btn-light m-2 p-0">&#128465;</button>
        <button onClick={e => { viewItem(item._id); $("#EditTodoInputModal").modal("show")}} type="button" title="view" className="btn bg-transparent border-0 btn-light m-2 p-0">&#128065;</button>
      </div>
      <div className="card-body mt-4 mb-2">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.desc}</p>
        <p className="card-text"><small className="text-muted">{moment(item.date).format('MMMM Do YYYY')}, {item.time.toString()}</small></p>
      </div>
    </div>
  )
}

function App() {
  const [loading, setLoading] = React.useState(false);
  const [newTodo, handleNewTodo] = React.useState("");
  const [todoList, handleTodo] = React.useState([]);
  async function fetchTodoList() {
    try {
      setLoading(true);
      const response = await fetch(
        `http://127.0.0.1:3000/list`
      );
      const results = await response.json();
      console.log(results)
      handleTodo(results.data);
        setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchTodoList()
  }, [newTodo])
  
  const AddTodo = async todoItem => {
    setLoading(true);
      try {
        const response = await fetch(`http://127.0.0.1:3000/list/new`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(todoItem)
        })
        const results = await response.json();
        handleNewTodo(results.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
  }

  const EditTodo = async (todoItem, id) => {
    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:3000/list/${id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todoItem)
      })
      const results = await response.json();
      handleNewTodo(results.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  const deleteTodo = async (item) => {
    const { _id } = item;
    if (window.confirm("are you sure you want to delete this?") !== true) return;
    setLoading(true);
      try {
        const newTodo = todoList.filter(item => item._id !== _id);
        handleTodo(newTodo)
        const response = await fetch(`http://127.0.0.1:3000/list/${_id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        })
        const results = await response.json();
        console.log(results);
        handleNewTodo(results.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
  }
  
  const getTodo = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://127.0.0.1:3000/list/${id}`
      );
      const results = await response.json();
      console.log(results)
      handleNewTodo(results.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  
  return (
    <div className="container-fluid position-relative" style={{ minHeight: "100vh" }}>
      {loading && <div className="progress">
        <div className="progress-bar bg-primary w-100 progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" 
        />
      </div>}
      <EditTodoInputModal item={newTodo} editTodo={EditTodo}  />
      <TodoInputModal addTodo={AddTodo} />
      <div className="card-columns p-5">
        {todoList.map((item, i) => (
          <div key={i} className="py-2">
            <TodoCard item={item} deleteTodo={deleteTodo} editItem={handleNewTodo} viewItem={getTodo} />
          </div>
        ))}
      </div>
      <div className="add-todo">
        <button type="button" data-toggle="modal" data-target="#TodoInputModal" title="edit" className="btn bg-transparent border-0 btn-light m-2 px-3 py-2 rounded-circle shadow">&#43;</button>
      </div>
    </div>
  );
}


export default App;
