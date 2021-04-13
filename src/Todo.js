import React from "react";
import "./Todo.css";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import db from "./firebase";

const Todo = (props) => {
  return (
    <div>
      <List className="todo__list">
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary="Dummy deadline ⏰"
          />
        </ListItem>
        <Button
          onClick={(e) => db.collection("todos").doc(props.todo.id).delete()}
        >
          ☠️Delete me
        </Button>
      </List>
    </div>
  );
};

export default Todo;
