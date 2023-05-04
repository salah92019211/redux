import "./App.css";
import react, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, completeTodo ,updateTodo} from "./actions/TodoAction";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const todos = useSelector((state) => state.todoReducer);
  const [task, setTask] = useState("");
  const [editTask, setEditTask] = useState("");
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="add a task .. "
          onChange={(e) => setTask(e.target.value)}
        /><div className="boutons">
        <button onClick={() => dispatch(addTodo(task))}>add a task</button>
        <button onClick={() => setFilter("all")}>all</button>
        <button onClick={() => setFilter("done")}>done</button>
        <button onClick={() => setFilter("undone")}>undone</button></div>
        {filter === "all"
          ? todos.map((el) => (
              <div>
                {console.log(el)}
                <div className="task">
                <h2>{el.title}</h2></div>
                <div className="tab">
                <Button variant="primary" onClick={handleShow}>
                  update{" "}
                </Button>

                <Modal show={show} onHide={handleClose}>
                 
                  <Modal.Body>
                    <input
                      type="text"
                      placeholder=" .. "
                      onChange={(e) => setEditTask(e.target.value)}
                    />{" "}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={()=>{dispatch(updateTodo(editTask,el.id));handleClose()}}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                <button onClick={() => dispatch(deleteTodo(el.id))}>
                  delete
                </button>
                <button onClick={() => dispatch(completeTodo(el.id))}>
                  {el.complete ? "done" : "undone"}
                </button>
              </div></div>
            ))
          : filter === "done"
          ? todos
              .filter((el) => el.complete === true)
              .map((el) => (
                <div>
                  <h2>{el.title}</h2>
                  <button onClick={() => dispatch(deleteTodo(el.id))}>
                    delete
                  </button>
                  <button onClick={() => dispatch(completeTodo(el.id))}>
                    {el.complete ? "done" : "undone"}
                  </button>
                </div>
              ))
          : todos
              .filter((el) => el.complete === false)
              .map((el) => (
                <div>
                  <h2>{el.title}</h2>
                  <button onClick={() => dispatch(deleteTodo(el.id))}>
                    delete
                  </button>
                  <button onClick={() => dispatch(completeTodo(el.id))}>
                    {el.complete ? "done" : "undone"}
                  </button>
                </div>
              ))}
      </header>
    </div>
  );
}

export default App;
