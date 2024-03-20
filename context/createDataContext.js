import { createContext, useMemo, useReducer } from "react";

export default (reducer, initialState, actions) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundedActions = useMemo(() => ({}), []);

    for (const key of Object.keys(actions)) {
      boundedActions[key] = actions[key](dispatch);
    }
    const value = useMemo(
      () => ({ state, ...boundedActions }),
      [state, boundedActions]
    );
    console.log(value);
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return [Context, Provider];
};
