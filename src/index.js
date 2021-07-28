import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import '@ant-design/pro-card/dist/card.less';
import './index.less';


import App from "./App";

ReactDOM.render(
    <div className="main">
        <App />
    </div>,
  document.getElementById('root')
);

