import React, { useState } from "react";

//include images into your bundle

//create your first component

const Counter = (props) => {
	let [seconds, setSeconds] = useState(0);
	setInterval(function () {
		setSeconds(seconds + 1);
	}, 1000);
	return (
		<div className="bigcounter">
			<div className="number">{Math.floor(seconds / 100) % 10}</div>
			<div className="number">{Math.floor(seconds / 10) % 10}</div>
			<div className="number">{Math.floor(seconds / 1) % 10}</div>
		</div>
	);
};

export default Counter;
