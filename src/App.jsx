import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import data from "./data.jsx";

function App() {
  const cards = data.map((items) => {
    return (
      <Card 
      {...items}
      />
    )
  })
  console.log(cards);
  
  return (
    <>
      <Navbar />
      <main>
      {cards}
      </main>

    </>
  )
}

export default App
