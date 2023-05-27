import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TextArea from "./components/TextArea";
import Login from "./components/Login";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img
          src="https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560"
          className="logo"
          alt="Vite logo"
        />
      </div>
      <h1>Learn JS</h1>

      <p className="info">Prueba de Vite + React + Zustand</p>
      <Counter />
      <TextArea />
      <Login />
    </>
  );
}

export default App;
