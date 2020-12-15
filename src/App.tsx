import React from 'react'
// import tt from './toutiao2react/tt'
// import Text from './toutiao2react/ui/text/index'
import RichText from './toutiao2react/ui/rich-text/index'

type Myprops = {
  value: String
}

class App extends React.Component<Myprops, any> {
  constructor(prop: any) {
    super(prop)
    this.state = {
      value: '这是王野未写的TypeScript',
      htmlsnip: `<h1>王野未</h1>`,
      nodes: [{
        name: 'div',
        attrs: {
          class: 'div_class',
          style: 'line-height: 60px; color: red;'
        },
        children: [{
          type: 'text',
          text: 'You never know what you\'re gonna get.'
        }]
      }]
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
        <RichText nodes={this.state.nodes} />
        <button onClick={this.handleCick}>BUTTON</button>
      </div>

    )
  }
}

export default App;
