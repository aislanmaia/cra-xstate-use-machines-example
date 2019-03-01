export default {
  initial: "loggedOut",
  context: {
    counter: 0
  },
  states: {
    Off: {
      on: {
        Tick: {
          target: "On",
          actions: ["incAction", "sideEffect"]
        }
      }
    },
    On: {
      on: {
        Tick: {
          target: "Off",
          actions: "incAction"
        }
      }
    },
    loggedOut: {
      on: {
        SUBMIT: "loading",
        Tick: {
          target: "On",
          actions: ["incAction"]
        }
      }
    },
    loading: {
      on: {
        SUCCESS: "loggedIn",
        FAIL: "loggedOut"
      }
    },
    loggedIn: {
      onEntry: ["setUser"],
      onExit: ["unsetUser"],
      on: {
        LOGOUT: "loggedOut"
      }
    }
  }
};
