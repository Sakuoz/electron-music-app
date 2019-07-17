import { useState, useEffect } from 'react'
import { MyIcon } from '../../plugins/myIcon'
import { mainColor } from '../../plugins/style'
import { getRecommendDailySongs } from '../../plugins/apis'
import { SongsTable } from '../../components/SongsTable'
import moment from 'moment'

export const DailySong = () => {
  const [recommendDailySongs, setRecommendDailySongs] = useState([])

  useEffect(() => {
    getRecommendDailySongs().then(({ recommend }) => {
      setRecommendDailySongs(recommend)
    })
  }, [])

  return (
    <div>
      <div
        css={{
          display: 'flex'
        }}
      >
        <div
          css={{
            position: 'relative',
            marginRight: '30px'
          }}
        >
          <MyIcon
            style={{ fontSize: '100px', color: mainColor }}
            type="icon-calendar"
          />
          <h1
            css={{
              position: 'absolute',
              top: '60%',
              left: '50%',
              color: mainColor,
              fontSize: '40px',
              margin: '0',
              transform: 'translate(-50%, -50%)'
            }}
          >
            {moment().date()}
          </h1>
        </div>
        <div>
          <h2
            css={{
              margin: '10px 0 0'
            }}
          >
            每日歌曲推荐
          </h2>
          <p
            css={{
              fontSize: '12px',
              color: '#999'
            }}
          >
            根据你的音乐口味生成，每天6:00更新
          </p>
        </div>
      </div>
      <SongsTable songs={recommendDailySongs} />
    </div>
  )
}
