import React from "react";
import "../asset/css/App.css";

function TodoInputModal(props) {
  return (
    <div className="modal fade" id="TodoInputModal" tabIndex="-1" role="dialog" aria-labelledby="TodoInputModalTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="form">
        <div className="modal-content">
          <div className="modal-body">
            <form style={{ padding: "30px 20px" }}>
              <div className="form-group">
                <label htmlFor="titleTodo">Title</label>
                <input required type="text" className="form-control" id="todoTitle" onChange={e => {}} aria-describedby="title of Todo" />
              </div>
              <div className="form-group">
                <label htmlFor="DateTodo">Date</label>
                <input required type="date" className="form-control" id="todoDate" onChange={e => {}} aria-describedby="date of Todo" />
              </div>
              <div className="form-group">
                <label htmlFor="TimeTodo">Time</label>
                <input required type="time" className="form-control" id="todoTime" onChange={e => {}} aria-describedby="time of Todo" />
              </div>
              <div className="form-group">
                <label htmlFor="descTodo">Description/Notes </label>
                <textarea rows={5} type="text" className="form-control" id="todoDesc" onChange={e => {}} aria-describedby="Desc of Todo" />
              </div>
              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-danger mx-1 shadow" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-outline-dark mx-1 shadow">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

function TodoCard(props) {
  return (
    <div className="card shadow border-0">
      <div className="position-absolute mt-2 d-flex align-items-baseline" style={{ right: "0" }}>
        <p className="card-text"><small className="text-muted">edited</small></p>
        <button type="button" title="edit" className="btn bg-transparent border-0 btn-light m-2 p-0">&#9998;</button>
        <button type="button" title="delete" className="btn bg-transparent border-0 btn-light m-2 p-0">&#128465;</button>
      </div>
      <div className="card-body mt-4 mb-2">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <p className="card-text"><small className="text-muted">Wednesday, 22 January 2020 (WAT) 01:04</small></p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="container-fluid position-relative" style={{ minHeight: "100vh" }}>
      <TodoInputModal/>
      <div className="row p-5">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <TodoCard />
        </div>
      </div>
      <div className="add-todo">
        <button type="button" data-toggle="modal" data-target="#TodoInputModal" title="edit" className="btn bg-transparent border-0 btn-light m-2 px-3 py-2 rounded-circle shadow">&#43;</button>
      </div>
    </div>
  );
}


export default App;
