import onekit_bahavior from '../../behaviors/onekit_bahavior'
import toutiao_behavior from '../../behaviors/toutiao_behavior'

@toutiao_behavior
class View extends onekit_bahavior {
  constructor(props: any) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <>
        <div>{this.props.children}</div>
      </>
    )
  }
}
export default View