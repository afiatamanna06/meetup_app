import './App.css';
import Banner from './components/Banner';
import Connected from './components/Connected';
import ItWorks from './components/ItWorks';
import Main from './components/Main';
import Popular from './components/Popular';
import Stories from './components/Stories';
import Upcomming from './components/Upcomming';

function App() {
  return (
    <div className="App">
      <Banner />
      <Main />
      <ItWorks />
      <Upcomming />
      <Popular />
      <Connected />
      <Stories />
    </div>
  );
}

export default App;
