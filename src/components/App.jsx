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
			<b>CALCULATOR</b>
	</div>
);

var Content = React.createClass({

	getInitialState: function(){
		return{
			valueStr: '',
			result: '0'
		}
	},
	valueStrToResult: function(str){

	},
	getResult: function(value){
		console.log('asdf:',value);
		
		var _valueStr = this.state.valueStr;
		
		if(value == '='){
			this.setState({
				valueStr: '',
				result: _valueStr.replace(/\+/ig,'')
			});
			return false;
		} else if (value == 'ac'){
			this.setState({result: 0});
			return false;
		}
		
		this.setState({
			valueStr: _valueStr + value,
			result: _valueStr + value
		});

	},
	render: function(){
		return (
			<div>
				<Display result = {this.state.result}/>
				<Buttons setValue = {this.getResult}/>
			</div>
		)
	}
});

var Display = React.createClass({

	render: function(){
		return (
			<div id="entrybox" className="text-right">
				<div id="entry">
					<p id="answer"> {this.props.result} </p>
				</div>
			</div>
		)
	}
});

var Buttons = React.createClass({

	clickHandler: function(e){
		this.props.setValue(e.target.value);
	},
	render: function(){
		return (
			<div id="buttons">
	      <button onClick={this.clickHandler} className="red" value="ac">AC</button>
	      <button onClick={this.clickHandler} value="/">÷</button>
	      <button onClick={this.clickHandler} value="*">x</button>
	      <button onClick={this.clickHandler} value="-">-</button>

	      <button onClick={this.clickHandler} className="white" value="8">8</button>
	      <button onClick={this.clickHandler} className="white" value="9">9</button>
	      <button onClick={this.clickHandler} className="white" value="7">7</button>
	      <button onClick={this.clickHandler} value="+">+</button>

	      <button onClick={this.clickHandler} className="white" value="5">5</button>
	      <button onClick={this.clickHandler} className="white" value="6">6</button>
	      <button onClick={this.clickHandler} className="white" value="4">4</button>

	      <button onClick={this.clickHandler} className="invisible">N</button>

	      <button onClick={this.clickHandler} className="white" value="2">2</button>
	      <button onClick={this.clickHandler} className="white" value="3">3</button>
	      <button onClick={this.clickHandler} className="white" value="1">1</button>

	      <button onClick={this.clickHandler} id="zeroButton" value="0">0</button>
	      <button onClick={this.clickHandler} value=".">.</button>
	      <button onClick={this.clickHandler} className="equalButton red" id="equalButton" value="=">=</button>
			</div>
		)
	}
});

const CopyRight = () => (
	<div className = "copy-right">
		Designed & Coded by ElevenBeans
	</div>
);

// 最终渲染
ReactDom.render((
  <App />
), document.getElementById('app'));
