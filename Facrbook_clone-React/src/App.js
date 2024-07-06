import  Login from "./component/Login/Login";
import Feed from "./component/Feed/Feed";
import Header from "./component/Header/Header";
import Rightsidebar from "./component/Rightsidebar/Rightsidebar";
import Sidebar from "./component/Sidebar/Sidebar";
import { useStateValue } from "./Context/StateProvider";


function App() {
  const [{user}, dispatch]=useStateValue();
  return (
    <>
    {
      !user ? (<Login/>) :
      (
        <div className="App">
        <Header/>
        <div className="app_body">
        <Sidebar/>
        <Feed/>
        <Rightsidebar/>
        </div> 
        </div>
      )
    }
    

   
    </>
    );
}

export default App;
