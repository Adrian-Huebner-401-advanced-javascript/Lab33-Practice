import React from 'react';
import ReactDOM from 'react-dom';
import SettingContextWrapper from '../src/components/settings/site-context';

import App from './app.js';

class Main extends React.Component {
  render() {
    return (
      <SettingContextWrapper>
        <App />
      </SettingContextWrapper>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);