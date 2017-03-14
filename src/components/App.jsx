'use strict';

import React from 'react';
import ReactDom from 'react-dom';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h5 className="title">Hello, my calculater. </h5>
      </div>
    );
  }
});

//最终渲染
ReactDom.render((
  <App />
), document.getElementById('app'));
