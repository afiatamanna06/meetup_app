import './App.css';
import Banner from './components/Banner';
import ItWorks from './components/ItWorks';
import Main from './components/Main';
import Popular from './components/Popular';
import Upcomming from './components/Upcomming';

function App() {
  return (
    <div className="App">
      <Banner />
      <Main />
      <ItWorks />
      <Upcomming />
      <Popular />
    </div>
  );
}

export default App;
