import React, { useState } from "react";
import Button from "./UI/Button";
import "./CourseInput.css";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>What's on your mind today? 😃</label>
        <GrammarlyEditorPlugin
          clientId={process.env.REACT_APP_GRAMMARLY_CLIENT_ID}
          style={{ width: "100%" }}
        >
          <input
            type="text"
            placeholder="Start from today..."
            onChange={goalInputChangeHandler}
          />
        </GrammarlyEditorPlugin>
      </div>
      <Button type="submit">Post</Button>
    </form>
  );
};

export default CourseInput;
