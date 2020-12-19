import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'


import Header from './components/header/header';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Blog from './components/blog/blog';
import Footer from './components/footer/footer';
import './App.css';

library.add(fab, faEnvelopeOpenText );




function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
