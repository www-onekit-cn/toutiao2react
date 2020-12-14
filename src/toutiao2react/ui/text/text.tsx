import onekit_bahavior from '../../behaviors/onekit_bahavior'
import toutiao_behavior from '../../behaviors/toutiao_behavior'
const oneutil: any = require('oneutil')

@toutiao_behavior
class Text extends onekit_bahavior {
  constructor(props: any) {
    super(props)
    this.state = {
      html: Text.computed(props, this),
      space: props.space || false,
      decode: props.decode || false
    }

    Text.computed = Text.computed.bind(this)
  }

  static computed(props: any, state: any) {
    let htmlstr: string = props.children || ''
    if (state.space) {
      htmlstr = oneutil.STRING.replace(htmlstr, ' ', `&${htmlstr};`)
    }
    if (state.decode) {
      htmlstr = htmlstr.replace(/&amp;/g, "&amp;&amp;");
      htmlstr = htmlstr.replace(/&lt;/g, "&amp;&lt;");
      htmlstr = htmlstr.replace(/&gt;/g, "&amp;&gt;");
      htmlstr = htmlstr.replace(/&nbsp;/g, "&amp;nbsp;");
      htmlstr = htmlstr.replace(/&#39;/g, "&amp;&#39;");
      htmlstr = htmlstr.replace(/&quot;/g, "&amp;&quot;");
    }
    return htmlstr
  }

  static getDerivedStateFromProps(props: any, state: any) {
    if (props.decode !== state.decode) {
      return {
        decode: props.decode
      }
    }
    if (props.space !== state.space) {
      return {
        space: props.space
      }
    }
    if (props.chilren !== state.html) {
      return {
        html: Text.computed(props, state)
      }
    }
    return null
  }

  render() {
    return (
      <>
        <div
          className={this.state.onekitClass}
          id={this.state.onekitId}
        >
          {this.state.html}
        </div>
      </>
    )
  }
}

export default Text