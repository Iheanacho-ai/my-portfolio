import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'


import Header from './components/header/header';
import About from './components/about/about';
import SmallPrint from './components/small-print/small-print';
import Services from './components/services/services';
import SimpleSlider from './components/projects/projects';
import Blog from './components/blog/blog';
import Footer from './components/footer/footer';

import './App.css';

library.add(fab, faEnvelopeOpenText, faDesktop, faEdit, faMicrophoneAlt, faChevronCircleRight );




function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <SmallPrint/>
      <Services/>
      <SimpleSlider/>
      <Blog/>
      <Footer/>
    </div>
  );
}



export default App;
