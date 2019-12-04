import React from 'react';
import { SettingContext } from '../settings/site-context.js'

class Content extends React.Component {
  static contextType = SettingContext;
  render (){
    return (
      <div>
        <button onClick={this.context.decrement}> - </button>
        {this.context.counter}
        <button onClick={this.context.increment}> + </button>
      </div>
    );
  };
}

export default Content;