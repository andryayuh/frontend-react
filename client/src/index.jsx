import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{dog: 'jango'}, {cat: 'coco'}]
    };
  }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>My App</h1>
        <List>{this.state.data}</List>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));