import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import MainTableContainer from './containers/MainTableContainer'
import AngajatiData from './mock_data/angajati.json'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  isUserAuthenticated = () => {
    return false;
  }

  getEmployeesData = () => {
    //fetch from API
    return AngajatiData
  }

  render() {

    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Employees Management Platform</h1>
          </header>
          <p className="App-intro">
            Built with Java, Spring, React, and Material-UI.
          </p>
            {!this.isUserAuthenticated() ? <RaisedButton label="Log In" /> : null}
          <MainTableContainer
              employeesData={this.getEmployeesData()}
          />
        </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
