import React from "react";
import $ from "jquery";
import moment from "moment";

function TodoCard({ item, deleteTodo, editItem, viewItem }) {
  return (
    <div className="card shadow border-0">
      <div
        className="position-absolute mt-2 d-flex align-items-baseline"
        style={{ right: "0" }}
      >
        {item.edited && (
          <p className="card-text">
            <small className="text-muted">edited</small>
          </p>
        )}
        <button
          onClick={e => {
            editItem(item);
            $("#EditTodoInputModal").modal("show");
          }}
          type="button"
          title="edit"
          className="btn bg-transparent border-0 btn-light m-2 p-0"
        >
          &#9998;
        </button>
        <button
          onClick={e => deleteTodo(item)}
          type="button"
          title="delete"
          className="btn bg-transparent border-0 btn-light m-2 p-0"
        >
          &#128465;
        </button>
        <button
          onClick={e => {
            viewItem(item._id);
            $("#EditTodoInputModal").modal("show");
          }}
          type="button"
          title="view"
          className="btn bg-transparent border-0 btn-light m-2 p-0"
        >
          &#128065;
        </button>
      </div>
      <div className="card-body mt-4 mb-2">
        <h5 className="card-title font-weight-bold">{item.title}</h5>
        <p className="card-text">{item.desc}</p>
        <p className="card-text">
          <small className="text-muted">
            {moment(item.date).format("MMMM Do YYYY")}, {item.time.toString()}
          </small>
        </p>
      </div>
    </div>
  );
}

export default TodoCard;
