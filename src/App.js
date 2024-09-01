import "./App.css";
import Action from "./components/button";
import MainComponent from "./components/Main";
function App() {
  return (
    <div className="App">
      <div className="InsideApp">
        <MainComponent />
        <div className="button">
          <Action title={"Request Account"} />
        </div>
      </div>
    </div>
  );
}

export default App;
