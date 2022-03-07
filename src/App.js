import logo from "./logo.svg";
import "./App.css";
import AddUser from "../src/components/Users/AddUser";
import UserList from "../src/components/Users/UserList";
const App = (props) => {
  return <div className="App">
    <AddUser></AddUser>
  </div>;
};

export default App;
