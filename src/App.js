import show_items from './showItems.js'
import Hero from './components/Hero.jsx';
import Main from './components/Main.jsx';
import Showcase from './components/Showcase.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return <div>
    <Hero/>
    <Main/>
    <Showcase imgObject={show_items}/>
    <Footer/>
  </div>
}

export default App;
