import "../styles/wizardstyles.scss";
import { Link } from "react-router-dom";
import wizard1 from "../wizard_files/assets/wizard1.jpg";
import wizard2 from "../wizard_files/assets/wizard2.jpg";
import wizard3 from "../wizard_files/assets/wizard3.jpg";
import wizard4 from "../wizard_files/assets/wizard4.jpg";
import wizard6 from "../wizard_files/assets/wizard6.jpg";
import wizard7 from "../wizard_files/assets/wizard7.jpg";

function Wizards() {
  return (
    <div className="wizwrap">
      <h1>Wizards Making Magic!</h1>

      <div className="imagewrap">
        <div className="row1">
          <div className="counterwidget">
            {/* <h2>Counter Widget</h2> */}
            <div className="wizard2">
              <img src={wizard2} alt="assets/wizard2.jpg" />
            </div>
            <div>
              <Link to="/wizard_files/counter">Counter</Link>
            </div>
          </div>

          <div className="colorchangerwidget">
            {/* <h2>Color Changer Widget</h2> */}
            <div className="wizard3">
              <img src={wizard3} alt="assets/wizard3.jpg" />
            </div>
            <div>
              <Link to="/wizard_files/colorchanger">Color Changer</Link>
            </div>
          </div>
        </div>

        <div className="row2">
          <div className="fontsize">
            {/* <h2>Font Size</h2> */}
            <div className="wizard1">
              <img src={wizard1} alt="assets/wizard1.jpg" />
            </div>
            <div>
              <Link to="/wizard_files/fontsize">FontSize</Link>
            </div>
          </div>
          <div className="weather">
            {/* <h2>Weather Widget</h2> */}
            <div className="wizard3">
              <img src={wizard4} alt="assets/wizard4.jpg" />
            </div>
            <div>
              <Link to="/wizard_files/weather">Weather</Link>
            </div>
          </div>
        </div>

        <div className="row3">
          <div className="hideaway">
            {/* <h2>HideAway Widget</h2> */}
            <div className="wizard3">
              <img src={wizard6} alt="assets/wizard6.jpg" />
            </div>
            <div>
              <Link to="/wizard_files/hideaway">HideAway</Link>
            </div>
          </div>

          <div className="swappi">
            {/* <h2>Font Size</h2> */}
            <div className="wizard7">
              <img src={wizard7} alt="assets/wizard7.jpg" />
            </div>
            <div>
              <Link to="/wizard_files/swappi">Swappi</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Wizards;
