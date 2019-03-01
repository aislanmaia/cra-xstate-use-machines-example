import React, { useContext } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
// import Child from "./Child";
import AppContext from "./AppContext";
// import {useMachine} from 'use-machine'
// import machineConfig from './machine'

export default () => {
  const { machine, error } = useContext(AppContext);
  // console.log("context: ", context);
  console.log("executing App component...");
  // const [user, setUser] = useState({});

  // implemented in the AppProvider from AppContext
  // const machine = useMachine(machineConfig, {
  //   actions: {
  //     // incAction: incAction,
  //     sideEffect: () => console.log("sideEffect"),
  //     setUser: (_ctx, evt) => setUser({ username: evt.username }),
  //     unsetUser: (_ctx, evt) => setUser({})
  //   }
  // });

  return (
    <div className="w5">
      <div className="mb2">{error}</div>
      {machine.state.matches("loggedIn") ? (
        <Dashboard />
      ) : (
        <Login />
      )}
    </div>
  );
};
