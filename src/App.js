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
import { Image } from '@chakra-ui/image'

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
      <Box pos='relative' top='0' bottom='0' left='0' right='0' zIndex='-1' height='100vh'>
        <Image src={imageBg} objectFit='cover' w='80%' sizes='300' m='auto'></Image>
      </Box>
    </div>
  );
}

export default App;
