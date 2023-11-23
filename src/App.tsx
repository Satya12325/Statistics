import { useEffect, useState } from "react";
import WineStatistics from "./components/Table";
import Data from './data.json';
import { WineData } from "./utils/interfaces";
import GammaTable from "./components/Gamma";
function App() {
  const [wineData, setWineData] = useState<WineData[]>([]);
  useEffect(() => {
    // Fetch data from the JSON file
    // fetch('src/Wine-D')
    //   .then((response) => response.json())
    //   .then((data) => setWineData(data))
    //   .catch((error) => console.error('Error fetching data:', error));
    setWineData(Data)
    console.log(wineData,Data)
  }, []); // Empty dependency array ensures the effect runs only once


  return <div className="App">
    <WineStatistics wineData={wineData} />
    <GammaTable wineData={wineData} />
  </div>

}

export default App;
