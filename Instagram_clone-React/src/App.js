
import Login from "./Components/Login/Login";
import Midlle from "./Components/Midllebar/Midlle";
import Rightsidebar from "./Components/Rightsidebar/Rightsidebar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useStateValue } from "./Context/StateProvider";

function App() {
  const [{user}, dispatch]=useStateValue();
  return (
    <>
     {
      !user ?(<Login/>) :
      (
        <div className="App">
        <div className="app-body">
          <Sidebar/>
          <Midlle/>
          <Rightsidebar/>
        </div>
      </div>
      )
    }
    </>
   
   
  );
}

export default App;
