'use strict';

import React from 'react';
import ReactDom from 'react-dom';

const App = () => (
  <div>
    <div className = "pannel">
    	<Title />
			<Content />
    </div>
    <CopyRight />
  </div>
);

const Title = () => (
	<div id="title" className = "title text-center">
		<h4>
			<b>CALCULATOR</b>
		</h4>
	</div>
)

const CopyRight = () => (
	<div className = "copy-right">
	Designed & Coded by ElevenBeans
	</div>
)

var Content = React.createClass({

	render: function(){
		return (
			<div>
				<Display />
				<Buttons />
			</div>
		)
	}
});

var Buttons = React.createClass({
	
	render: function(){
		return (
			<div id="buttons">
	      <button className="red" value="ac">AC</button>
	      <button className="red" value="ce">CE</button>
	      <button value="/">÷</button>
	      <button value="*">x</button>

	      <button className="white" value="7">7</button>
	      <button className="white" value="8">8</button>
	      <button className="white" value="9">9</button>
	      <button value="-">-</button>

	      <button className="white" value="4">4</button>
	      <button className="white" value="5">5</button>
	      <button className="white" value="6">6</button>
	      <button value="+">+</button>


	      <button className="white" value="1">1</button>
	      <button className="white" value="2">2</button>
	      <button className="white" value="3">3</button>
	      <button className="invisible">N</button>

	      <button id="zeroButton" value="0">0</button>
	      <button value=".">.</button>
	      <button className="equalButton red" id="equalButton" value="=">=</button>
			</div>
		)
	}
});

var Display = React.createClass({

	render: function(){
		return (
			<div id="entrybox" className="text-right">
				<div id="entry">
					<p id="answer">0</p>
				</div>
			</div>
		)
	}
});


// 最终渲染
ReactDom.render((
  <App />
), document.getElementById('app'));
