import './App.css';
import Banner from './components/Banner';
import Connected from './components/Connected';
import Footerbottom from './components/Footerbottom';
import ItWorks from './components/ItWorks';
import Main from './components/Main';
import Popular from './components/Popular';
import Stories from './components/Stories';
import Upcomming from './components/Upcomming';
import imageBg from './assets/bg.svg'
import { Box } from '@chakra-ui/layout';

function App() {
  return (
    <div className="App">
      <Box pos='absolute' left='0' top='0' right='0'>
        <Banner />
        <Main />
        <ItWorks />
        <Upcomming />
        <Popular />
        <Connected />
        <Stories />
        <Footerbottom />
      </Box>
    </div>
  );
}

export default App;
