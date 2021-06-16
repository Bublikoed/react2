
import './App.css';
import Header from './components/header.jsx';
import Sidebar from './components/aside.jsx';
import MainContent from './components/main-content.jsx';
import './reset.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className='main-wrapper'>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}





export default App;

