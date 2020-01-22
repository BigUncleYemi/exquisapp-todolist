import React from "react";
import $ from "jquery";

function TodoInputModal(props) {
  const [title, handleTitle] = React.useState("");
  const [desc, handleDesc] = React.useState("");
  const [date, handleDate] = React.useState("");
  const [time, handleTime] = React.useState("");
  const submitTodo = e => {
    if (!title && !date && !time) return alert("fill the required field");
    const data = {
      title,
      desc,
      date,
      time
    };
    props.addTodo(data);
    $("#TodoInputModal").modal("hide");
  };

  return (
    <div
      className="modal fade"
      id="TodoInputModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="TodoInputModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="form">
        <div className="modal-content">
          <div className="modal-body">
            <div style={{ padding: "30px 20px" }}>
              <div className="form-group">
                <label htmlFor="titleTodo">Title</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="todoTitle"
                  onChange={e => handleTitle(e.target.value)}
                  aria-describedby="title of Todo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="DateTodo">Date</label>
                <input
                  required
                  type="date"
                  className="form-control"
                  id="todoDate"
                  onChange={e => handleDate(e.target.value)}
                  aria-describedby="date of Todo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="TimeTodo">Time</label>
                <input
                  required
                  type="time"
                  className="form-control"
                  id="todoTime"
                  onChange={e => handleTime(e.target.value)}
                  aria-describedby="time of Todo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="descTodo">Description/Notes </label>
                <textarea
                  rows={5}
                  type="text"
                  className="form-control"
                  id="todoDesc"
                  onChange={e => handleDesc(e.target.value)}
                  aria-describedby="Desc of Todo"
                />
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-danger mx-1 shadow"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark mx-1 shadow"
                  onClick={e => submitTodo(e)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoInputModal;
