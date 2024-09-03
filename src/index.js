import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import CurrencyCalculator from "./CurrrencyCalculator";
// import StarRating from "./StartRating";
// import MyStar from "./MyStar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <CurrencyCalculator /> */}

    {/* <Test /> */}
  </React.StrictMode>
);

// { <StarRating
//       maxRating={5}
//       messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
//     />

//  <StarRating size={24} color="red" className="test" defaultRating={2} />}
