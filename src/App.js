import { Fragment } from 'react';
import './App.css';


import AppNavBar from './components/AppNavBar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <Fragment>
      <AppNavBar />
      <Banner />
      <AboutMe />
      <Projects />
      <Footer />
    </Fragment>
  );
}

export default App;
