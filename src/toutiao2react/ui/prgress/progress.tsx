import onekit_bahavior from '../../behaviors/onekit_bahavior'
import toutiao_behavior from '../../behaviors/toutiao_behavior'

@toutiao_behavior
class Progress extends onekit_bahavior {
  constructor(props: any) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <>
        <div className="onekit_progress">
          <div className="onekit_progress_bar">
            <div className="onekit_progress_inner_bar">

            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Progress

