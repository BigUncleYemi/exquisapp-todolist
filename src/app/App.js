import React from "react";
import "../asset/css/App.css";
import EditTodoInputModal from "./components/EditTodoInputModal";
import TodoInputModal from "./components/TodoInputModal";
import TodoCard from "./components/TodoCard";

function App() {
  const [loading, setLoading] = React.useState(false);
  const [newTodo, handleNewTodo] = React.useState("");
  const [todoList, handleTodo] = React.useState([]);
  async function fetchTodoList() {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:4908/list`);
      const results = await response.json();
      console.log(results);
      handleTodo(results.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchTodoList();
  }, [newTodo]);

  const AddTodo = async todoItem => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:4908/list/new`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(todoItem)
      });
      const results = await response.json();
      handleNewTodo(results.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const EditTodo = async (todoItem, id) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:4908/list/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(todoItem)
      });
      const results = await response.json();
      handleNewTodo(results.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const deleteTodo = async item => {
    const { _id } = item;
    if (window.confirm("are you sure you want to delete this?") !== true)
      return;
    setLoading(true);
    try {
      const newTodo = todoList.filter(item => item._id !== _id);
      handleTodo(newTodo);
      const response = await fetch(`http://localhost:4908/list/${_id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      const results = await response.json();
      console.log(results);
      handleNewTodo(results.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const getTodo = async id => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:4908/list/${id}`);
      const results = await response.json();
      console.log(results);
      handleNewTodo(results.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div
      className="container-fluid position-relative p-0"
      style={{ minHeight: "100vh" }}
    >
      {loading && (
        <div className="progress">
          <div
            className="progress-bar bg-primary w-100 progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      )}
      <div className="row my-3">
        <div className="col-sm-12 text-left  shadow-sm">
          <h1 className="font-weight-light px-4 py-3">Exquisapp Todolist</h1>
        </div>
      </div>
      <EditTodoInputModal item={newTodo} editTodo={EditTodo} />
      <TodoInputModal addTodo={AddTodo} />
      <div className="card-columns px-5 py-4">
        {todoList.map((item, i) => (
          <div key={i} className="py-2">
            <TodoCard
              item={item}
              deleteTodo={deleteTodo}
              editItem={handleNewTodo}
              viewItem={getTodo}
            />
          </div>
        ))}
      </div>
      <div className="add-todo">
        <button
          type="button"
          data-toggle="modal"
          data-target="#TodoInputModal"
          title="edit"
          className="btn bg-transparent border-0 btn-light m-2 px-3 py-2 rounded-circle shadow"
        >
          &#43;
        </button>
      </div>
    </div>
  );
}

export default App;
