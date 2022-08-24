import { useEffect, useState } from "react";
import desktopDivider from "./assets/pattern-divider-desktop.svg";
import mobileDivider from "./assets/pattern-divider-mobile.svg";
import "./style.css";


function App() {
  const [advice, set_advice] = useState({id: 0, advice: ''});
  const [adviceCount, set_count] = useState(0);

  useEffect(() => {
    async function get_advice() {
      let response;

      try {
        response = await fetch("https://api.adviceslip.com/advice");
        response = await response.json();

        set_advice(response.slip);
      }
      catch (error) {
        console.log(error);
        set_advice({id: 177013, advice: "Something went wrong, check your internet connection and try again..."});
      }
    }

    get_advice();
  }, [adviceCount]);

  function refresh() {
    set_count(prevCount => prevCount + 1);
  }

  return (
    <div className="App">
      <p className="advice-number">Advice #{advice.id}</p>
      <p className="advice-text">"{advice.advice}"</p>
      <img 
      srcSet={`${mobileDivider} 295w, ${desktopDivider} 444w`} alt="divider"
      sizes="(max-width: 600px) 295px, 444px"
      src={mobileDivider} />
      <button className="refresh-button" onClick={refresh}></button>
    </div>
  );
}

export default App;
