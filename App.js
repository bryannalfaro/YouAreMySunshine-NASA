import React, { useReducer, useEffect } from "react";
import StackNavigator from "./src/navigation/stackNavigator";
import Store from './src/navigation/store'

const reducer = (state, action) => {
  switch (action.type) {
    case "LOCATED":
      return {
        lat: action.lat,
        lon: action.lon,
      };
    default:
      return state;
  }
};

const value = {
  lat: null,
  lon: null
}

const App = () => {
  const [store, dispatch] = useReducer(reducer, value)
  return (
    <Store.Provider value={{ store, dispatch }}>
      <StackNavigator />
    </Store.Provider>
  )
}

export default App;
