import Chai from "./chai";

function App() {
  const adjective = "fun";
  return (
    <>
      <Chai />
      {/* You can only add evaluated expressions as props */}
      <h1>react is {adjective}</h1>
    </>
  );
}

export default App;
