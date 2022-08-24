import desktopDivider from "./assets/pattern-divider-desktop.svg";
import mobileDivider from "./assets/pattern-divider-mobile.svg";
import "./style.css";


function App() {
  return (
    <div className="App">
      <p className="advice-number">Advice #177013</p>
      <p className="advice-text">"Lorem ipsum dolor sit amet ut caliquid nam voluptate quas tempora dicta?"</p>
      <img 
      srcSet={`${mobileDivider} 295w, ${desktopDivider} 444w`} alt="divider"
      sizes="(max-width: 600px) 295px, 444px"
      src={mobileDivider} />
      <button className="refresh-button"></button>
    </div>
  );
}

export default App;
