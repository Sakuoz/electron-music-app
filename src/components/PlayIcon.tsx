import { MyIcon } from '../plugins/myIcon'
import { mainColor } from '../plugins/style'

export const PlayIcon = ({
  bottom = '10px',
  right = '10px',
  width = '30px',
  height = '30px',
  opacity = 0,
  isCenter = false
}) => {
  return (
    <div
      className="play-icon"
      css={{
        position: 'absolute',
        bottom: bottom,
        right: right,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        opacity: opacity,
        transition: 'all, 0.5s',
        transform: isCenter ? 'translate(50%, 50%)' : 'none'
      }}
    >
      <MyIcon style={{ fontSize: '10px', color: mainColor }} type="icon-play" />
    </div>
  )
}
