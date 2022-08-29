import React from "react";
import { Link } from "react-router-dom";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter-wrapper">
      <h1>{count}</h1>

      <button className="cbutton" onClick={() => setCount(count + 1)}>
        Add
      </button>
      <button className="cbutton" onClick={() => setCount(count - 1)}>
        Subtract
      </button>

      <div className="move-button">
        <Link to="/wizards">
          <button className="back-wizards">Back</button>
        </Link>
      </div>
    </div>
  );
}

// export default class Counter extends Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(amt) {
//     this.setState((state, props) => ({
//       count: amt ? state.count + amt : 0,
//     }));
//   }

//   render() {
//     return (
//       <div className="counter-wrapper">
//         <div className="counter">
//           <h2>Counter Widget</h2>
//           <div>
//             <h4>{this.state.count}</h4>
//             <button onClick={() => this.handleClick(-1)}>Decrease</button>
//             <button onClick={() => this.handleClick(0)}>Reset</button>
//             <button onClick={() => this.handleClick(1)}>Increase</button>
//           </div>
//         </div>
//
//       </div>
//     );
//   }
// }
