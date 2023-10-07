import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 font-mono text-black p-4 rounded-xl">
        Tailwind Test
      </h1>
      <Card username="Delba" />
      <Card username="Sophie" />
    </>
  );
}

export default App;
