/* eslint no-console:0, react/no-multi-comp:0 */

import Animate from 'react-animation-group';
import React from 'react';
import ReactDOM from 'react-dom';

import './assets/index.less';

class Demo extends React.Component {
  state = {
    enter: true,
  }

  toggleAnimate = () => {
    this.setState({
      enter: !this.state.enter,
    });
  }

  render() {
    const style = {
      display: this.state.enter ? 'block' : 'none',
      marginTop: '20px',
      width: '200px',
      height: '200px',
      backgroundColor: 'red',
    };
    return (
      <div>
        <button onClick={this.toggleAnimate}>toggle</button>
        <Animate
          component=""
          transitionName="fade"
        >
          {this.state.enter ? <div key="1" style={style}/> : null}
        </Animate>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
