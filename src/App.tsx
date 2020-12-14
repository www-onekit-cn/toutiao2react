import React from 'react'
// import tt from './toutiao2react/tt'
import Text from './toutiao2react/ui/text/index'

type Myprops = {
  value: String
}

class App extends React.Component<Myprops, any> {
  constructor(prop: any) {
    super(prop)
    this.state = {
      value: '这是王野未写的TypeScript'
    }
    this.handleCick = this.handleCick.bind(this)
  }

  handleCick() {
    this.setState({
      value: 'onekit'
    })
  }

  render() {
    return (
      <div>
        <Text decode={false}>{this.state.value}</Text>
        <button onClick={this.handleCick}>BUTTON</button>
      </div>

    )
  }
}

export default App;
