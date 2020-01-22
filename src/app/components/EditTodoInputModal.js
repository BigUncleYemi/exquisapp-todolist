import React from "react";
import $ from "jquery";

function EditTodoInputModal({ item, editTodo }) {
  const [title, handleTitle] = React.useState("");
  const [desc, handleDesc] = React.useState("");
  const [date, handleDate] = React.useState("");
  const [time, handleTime] = React.useState("");
  React.useEffect(() => {
    handleTitle(item.title || "");
    handleDesc(item.desc || "");
    handleDate(item.date || "");
    handleTime(item.time || "");
  }, [item]);
  const submitTodo = e => {
    if (!title && !date && !time) return alert("fill the required field");
    const data = {
      title,
      desc,
      date,
      time,
      edited: true
    };
    editTodo(data, item._id);
    $("#EditTodoInputModal").modal("hide");
  };

  return (
    <div
      className="modal fade"
      id="EditTodoInputModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="EditTodoInputModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="form">
        <div className="modal-content">
          <div className="modal-body">
            <div style={{ padding: "30px 20px" }}>
              <div className="form-group">
                <label htmlFor="EditTitleTodo">Title</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="editTodoTitle"
                  onChange={e => handleTitle(e.target.value)}
                  value={title}
                  aria-describedby="edit title of Todo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="EditDateTodo">Date</label>
                <input
                  required
                  type="date"
                  className="form-control"
                  id="editTodoDate"
                  onChange={e => handleDate(e.target.value)}
                  value={date}
                  aria-describedby="edit date of Todo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="EditTimeTodo">Time</label>
                <input
                  required
                  type="time"
                  className="form-control"
                  id="editTodoTime"
                  onChange={e => handleTime(e.target.value)}
                  value={time}
                  aria-describedby="edit time of Todo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="EditDescTodo">Description/Notes </label>
                <textarea
                  rows={5}
                  type="text"
                  className="form-control"
                  id="editTodoDesc"
                  onChange={e => handleDesc(e.target.value)}
                  value={desc}
                  aria-describedby="edit Desc of Todo"
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

export default EditTodoInputModal;
