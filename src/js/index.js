//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/home.jsx";

//render your react application
var seconds = 0;
setInterval(() => {
	ReactDOM.render(
		<Counter seconds={seconds} />,
		document.querySelector("#app")
	);
	seconds++;
}, 1000);
