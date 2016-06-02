import ReactDOM from 'react-dom';
import React from 'react';
import {Button,Icon, Checkbox} from 'antd';

/*import 'antdcss';
import './define.css';*/

function onChange(e) {
    console.log(e.target.checked);
}
ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="dashed">Dashed</Button>
    <Icon type="apple" />
    <Checkbox defaultChecked={false} onChange={onChange}>Checkbox</Checkbox>
  </div>,
  document.getElementById('root')
);