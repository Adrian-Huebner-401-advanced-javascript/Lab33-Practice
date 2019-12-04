import React from 'react';

export const SettingContext = React.createContext();

class SettingContextWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      increment: this.increment,
      decrement: this.decrement
    }
  }
  increment = () => {
    const counter = this.state.counter;

    this.setState({counter: counter + 1})
  }

  decrement = () => {
    const counter = this.state.counter;

    this.setState({counter: counter - 1})
  }

  render () {
    return (
      <SettingContext.Provider value={this.state}>
        {this.props.children}
      </SettingContext.Provider>
    )
  }
}

export default SettingContextWrapper;
