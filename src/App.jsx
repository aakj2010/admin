import './css/sb-admin-2.css';
import Card from './Card';
import Dashboard from './Dashboard';
import SideBar from './SideBar';
import TopBar from './TopBar';

function App() {
  return (
    <div id="wrapper">
      <SideBar></SideBar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id='content'>
        <TopBar></TopBar>
        <Dashboard></Dashboard>
       
        </div>
      </div>
    </div>
  );
}

export default App;
