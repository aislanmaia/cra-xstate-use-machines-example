import React, { useState } from "react";
import { useMachine } from "use-machine";
import { assign } from "xstate/lib/actions";
import machineConfig from "./machine";

const incAction = assign(context => ({ counter: context.counter + 1 }));

const AppContext = React.createContext({
  machine: {},
  authState: "login",
  logout: () => {},
  user: {}
});

export const AppProvider = props => {
  console.log("executing AppProvider...")
  
  const machine = useMachine(machineConfig, {
    actions: {
      incAction: incAction,
      sideEffect: () => console.log("sideEffect"),
      setUser: (_ctx, evt) => setUser({ username: evt.username }),
      unsetUser: (_ctx, evt) => setUser({})
    }
  });
  const [user, setUser] = useState({});
  const [error, /*setError*/] = useState(undefined);

  console.log("machine", machine)

  // implemented in the childs
  // const sendTick = () => {
  //   machine.send("Tick");
  // };

  // passed into the childs
  const logout = e => {
    e.preventDefault();
    machine.send({ type: "LOGOUT" });
  };

  return (
    <AppContext.Provider value={{ machine, user, logout, error }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext