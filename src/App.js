import React, { Component } from 'react';
import Products from './components/products';

class App extends Component {
  render() {
    return (
      <Products products={this.state.products} />
    )
  }

  state = {
    products: []
  };

  componentDidMount() {
    fetch('https://staticwebappwolfgang.azurewebsites.net/api/Function1')
      .then(res => res.json())
      .then((data) => {
        this.setState({ products: data })
      })
      .catch(console.log)
  }
}

export default App;