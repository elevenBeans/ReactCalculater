'use strict';

import React from 'react';
import ReactDom from 'react-dom';

const App = () => (
    <div>
        <div className="pannel">
            <Title />
            <Content />
        </div>
        <CopyRight />
    </div>
);

const Title = () => (
    <div id="title" className="title text-center">
        <b>CALCULATOR</b>
    </div>
);

var Content = React.createClass({
    getInitialState: function() {
        return {
            valueStr: '',
            result: '0'
        };
    },
    finalValue: function(arrTotal) {
        var result = 0;
        // debugger
        for (var i = 0; arrTotal.length > 1; i++) {
            if (arrTotal.indexOf('*') == -1 &&
                arrTotal.indexOf('/') == -1) {
                break;
            }
            switch (arrTotal[i]) {
            
            // 每次需要删除已计算元素 并在删除位置插入结果
            case '*':
                result = arrTotal[i - 1] * arrTotal[i + 1];
                arrTotal.splice(i - 1, 3);
                arrTotal.splice(i - 1, 0, result);
                i = 0;
                break;
            case '/':
                result = arrTotal[i - 1] / arrTotal[i + 1];
                arrTotal.splice(i - 1, 3);
                arrTotal.splice(i - 1, 0, result);
                i = 0;
                break;
            default:
                break;
            }
        }

        for (var i = 0; arrTotal.length > 1; i++) {
            if (arrTotal.indexOf('+') == -1 &&
				arrTotal.indexOf('-') == -1) {
                break;
            }
            switch (arrTotal[i]) {
            case '+':
                result = arrTotal[i - 1] + arrTotal[i + 1];
                arrTotal.splice(i - 1, 3);
                arrTotal.splice(i - 1, 0, result);
                i = 0;
                break;
            case '-':
                result = arrTotal[i - 1] - arrTotal[i + 1];
                arrTotal.splice(i - 1, 3);
                arrTotal.splice(i - 1, 0, result);
                i = 0;
                break;
            default:
                break;
            }
        }
        return result;
    },

    calculate: function(arr1, arr2) {
        console.log('arr1:',arr1);
        console.log('arr2:',arr2);

        var arrTotal = [];

        arr2 = arr2.filter(function(item){
            return item !== undefined;
        })

        for (var i = 0; i < arr2.length; i++) {
            arrTotal.push(arr2[i]);
            arrTotal.push(arr1[i]);
        }

        arrTotal = arrTotal.filter(function(item) {
            return item;
        }).map(function(item) {
            return /\d+/.test(item) ? parseFloat(item) : item;
        });

        // console.log('digital:', arrTotal);

        console.log('all:', arrTotal);

        return this.finalValue(arrTotal);
    },
    valueStrToResult: function(str) {
        var regSymbol = /\+|\-|\*|\//ig;
        var regNumber = /\d+\.\d+|\d+/ig;
        var numArr = str.split(regSymbol);
        var symbolArr = str.split(regNumber);

        return this.calculate(numArr, symbolArr);
    },
    getResult: function(value) {
        console.log('asdf:', value);

        var _valueStr = this.state.valueStr;

        if (value === '=') {
            this.setState({
                valueStr: '',
                result: this.valueStrToResult(_valueStr) // to be riched
            });
            return false;
        } else if (value === 'ac') {
            this.setState({
            valueStr: '',
            result: 0
        });
            return false;
        }

        this.setState({
            valueStr: _valueStr + value,
            result: _valueStr + value
        });
    },
    render: function() {
        return (
			<div>
				<Display result = {this.state.result} />
				<Buttons setValue = {this.getResult} />
			</div>
        );
    }
});

var Display = React.createClass({
    render: function() {
        return (
			<div id="entrybox" className="text-right">
				<div id="entry">
					<p id="answer"> {this.props.result} </p>
				</div>
			</div>
        );
    }
});

var Buttons = React.createClass({
    clickHandler: function(e) {
        this.props.setValue(e.target.value);
    },
    render: function() {
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
        );
    }
});

const CopyRight = () => (
	<div className="copy-right">
		Designed & Coded by ElevenBeans
	</div>
);

// 最终渲染
ReactDom.render((
	<App />
), document.getElementById('app'));
