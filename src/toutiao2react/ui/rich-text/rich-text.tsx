import onekit_bahavior from '../../behaviors/onekit_bahavior'
import toutiao_behavior from '../../behaviors/toutiao_behavior'
const oneutil: any = require('oneutil')

@toutiao_behavior
class RichText extends onekit_bahavior {
  constructor(props: any) {
    super(props)
    this.state = {
      html: ''
    }
  }

  componentDidMount() {
    const resu = RichText.nodes2html(this.props.nodes)
    this.setState({
      html: resu
    })
  }

  static getDerivedStateFromProps(props: any, state: any) {
    if (RichText.nodes2html(props.nodes) !== state.html) {
      return {
        html: RichText.nodes2html(props.nodes)
      }
    }
    return null
  }

  static nodes2html(state: any) {
    const html = oneutil.STRING.replace(typeof (state) == 'string' ? state : oneutil.HTML.nodes2html(state))
    return html
  }

  render() {
    return (
      <>
        <div
          className={this.state.onekitClass}
          id={this.state.onekitId}
          dangerouslySetInnerHTML={{ __html: this.state.html }}>
        </div>
      </>
    )
  }
}

export default RichText