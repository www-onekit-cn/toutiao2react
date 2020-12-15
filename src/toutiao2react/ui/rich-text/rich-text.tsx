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

  static getDerivedStateFromProps(props: any, state: any) {

    if (RichText.nodes2html(props.nodes, props.space) !== state.html) {
      return {
        html: RichText.nodes2html(props.nodes, props.space)
      }
    }
    return null
  }

  public static nodes2html(state: any, space: string): string {
    const html = oneutil.STRING.replace(typeof (state) == 'string' ? state : oneutil.HTML.nodes2html(state), '', `&${space};`)
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