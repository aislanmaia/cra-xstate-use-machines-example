import React, { useState, useContext } from "react";
import AppContext from "./AppContext";
import OtherChild from "./OtherChild"

export default props => {
  const { machine } = useContext(AppContext);
  // const { machine } = props
  const [inputName, setInputName] = useState("");

  const handleInputName = event => {
    setInputName(event.target.value);
  };

  const login = event => {
    event.preventDefault();
    machine.send("SUBMIT");
    setTimeout(
      () =>
        inputName
          ? machine.send({ type: "SUCCESS", username: inputName })
          : machine.send({
              type: "FAIL",
              error: "Uh oh, you must enter your name!"
            }),
      2000
    );
  };

  return (
    <>
      <form onSubmit={e => login(e)}>
        <label htmlFor="inputName">
          <span>Your name:</span>
          <input
            id="inputName"
            name="inputName"
            type="text"
            value={inputName}
            onChange={handleInputName}
          />
        </label>
        <input
          type="submit"
          value={machine.state.matches("loading") ? "Logging in..." : "Login"}
          disabled={machine.state.matches("loading") ? true : false}
        />
      </form>
      <div>
        <div>Child state: {machine.state.matches("Off") ? "Off" : "On"}</div>
        <div>Child count: {machine.context.counter}</div>
        <OtherChild />
      </div>
    </>
  );
};
