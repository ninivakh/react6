import React from 'react';
import ReactDOM from "react-dom/client";
import Footer from './footer';
import Header from './header';

class App extends React.Component {
  handleClick = () => {
    window.alert('Thank you, world');
  };

  render() {
    return (
      <div className="App">
        <Header />

        <div>
          <button onClick={this.handleClick}>Click Me!</button>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);