import React, { useContext } from "react";
import AppContext from "./AppContext";

export default function OtherChild() {
  const { machine } = useContext(AppContext);

  function sendTick() {
    machine.send("Tick");
  }
  function getOtherChildState() {
    const currentState = machine.state.value;
    if (currentState === "loggedOut") {
      return "---";
    } else {
      if (currentState === "On") {
        return "On";
      } else {
        return "Off";
      }
    }
  }
  return (
    <div>
      <div>OtherChild state: {getOtherChildState()}</div>
      <div>OtherChild count: {machine.context.counter}</div>
      <button onClick={sendTick}>Tick 2</button>
    </div>
  );
}
