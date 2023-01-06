import "./App.css";
import UpperContainer from "./components/UpperContainer";
import MainContainer from "./components/MainContainer";
import CardContainer from "./components/CardContainer";
import LastContainer from "./components/LastContainer";

function App() {
  return (
    <div className="App">
      <div className="upper-pan">
        <UpperContainer />
      </div>
      <div className="main-container">
        <MainContainer />
      </div>
      <div className="card-container">
        <CardContainer />
      </div>
      <div className="last-container">
        <LastContainer />
      </div>
    </div>
  );
}

export default App;
