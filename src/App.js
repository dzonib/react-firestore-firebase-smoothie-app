import React, { Component } from 'react'
import db from './firebase/init'

class App extends Component {

  state = {
    smoothies: []
  }

  componentDidMount() {
    db.collection('smoothies').get().then((snapshot) => {
      snapshot.forEach( smoothie => {
        let smoothi = {
          ...smoothie.data(),
          id: smoothie.id
        }
        console.log(smoothi)
        this.setState(() => ({
          smoothies: this.state.smoothies.concat(smoothi)
        }))
      })
    })
    setTimeout(() => {
      console.log(this.state.smoothies)
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
      </div>
    );
  }
}

export default App;
