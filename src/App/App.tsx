import React from 'react';
import logo from '../logo.svg';
import './App.scss';
import html from './appHtml';
import { ExampleService } from '../services/exampleService';

interface AppState {
  title: string;
  description: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      title: 'Welcome to React',
      description: 'This is a sample app.',
    };

    ExampleService.someValue.subscribe((value) => {
      if (!value) return;

      this.setState({ description: value });
    });
  }

  componentDidMount() {
    // ExampleService.getTodosById(1).then((response) => {
    //   console.log(response);
    // });
  }

  timedUpdate() {
    setTimeout(() => {
      ExampleService.updateSomeValue('Updated value to show an example of a service call! ' + Date.now());
    }, 5000);
  }

  render() {
    const { title, description } = this.state;
    // this.timedUpdate();

    const items = [
      { name: 'item 1', id: 1 },
      { name: 'item 2', id: 2 },
      { name: 'item 3', id: 3 },
    ];

    return html({ title, description, logo, items });
  }
}

export default App;