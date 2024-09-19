import "./App.css";
import ContentWrap from "./components/ContentWrap";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ContentWrap />
      <Footer />
    </div>
  );
};

export default App;
