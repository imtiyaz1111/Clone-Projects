import Header from "./components/Header/Header";
import { Data } from "./Data";
import Card from "./components/Card/Card";
function App() {
  return (
    <div className="App">
     <Header/>
     <div style={{ display: "flex", flexWrap: "wrap" }}>
            {Data.map((item) => (
              <Card
                image={item.image}
                name={item.name}
                rating={item.rating}
                actualPrice={item.actualPrice}
                offerPrice={item.offerPrice}
              />
            ))}
          </div>
    </div>
  );
}

export default App;
