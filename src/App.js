import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import BookContainer from "./components/bookContainer";
import HookBookContainer from './components/HookBookContainer'
function App() {
  return (
    <Provider store={store}> 
      <BookContainer  />
      <HookBookContainer/>
    </Provider>
  );
}
export default App;


// STORE- The store holds the whole state tree og our application.
// The only way to change state inside it is  to dispatch a action  on it.

// PROVIDER- provider makes the redux store available to any nested component 
// that have been wrapped in the connect()function.
