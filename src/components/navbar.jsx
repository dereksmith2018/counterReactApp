import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
        <a class="navbar-brand" href="#">
          Total Count{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.onIncrement}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;

//stateless functional component

// const Navebar = (props) => {

//         return (
//           <nav className="navbar navbar-light bg-light">
//             <a class="navbar-brand" href="#">
//               Navbar{" "}
//               <span className="badge badge-pill badge-secondary">
//                 {props.totalCounters}
//               </span>
//             </a>
//           </nav>
//         );
// }
// export default Navebar;
