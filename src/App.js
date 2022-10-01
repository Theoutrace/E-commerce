import "./App.css";
import Body from "./Layout/body/Body";
import Footer from "./Layout/footer/Footer";
import Header from "./Layout/header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Body/>
      <footer className='footer-container'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
