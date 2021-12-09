import "./App.css";
import Header from "./Header";
import { Todos } from "./Todos";
import { Footer } from "./Footer";
import { Addtodo } from "./Addtodo";
import { About } from "./About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  let initodo;
  if (localStorage.getItem("todos") === null) {
    initodo = [];
  } else {
    initodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("Hi i am ondelete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    // localStorage.getItem("todos");
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno = 0;
    if (todos.length === 0) {
      sno++;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function Home() {
    return (
      <>
        <Addtodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
      </>
    );
  }
  return (
    <>
      <Router>
        <Header title="My Todos List" searchbar={false} />
        <Routes>
          <Route exact path="/About" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
