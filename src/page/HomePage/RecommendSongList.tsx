import { useEffect, useState } from 'react'
import { getRecommendDailySongList } from '../../plugins/apis'
import { imageCover, overflowMultiLine } from '../../plugins/style'
import { Link } from 'react-router-dom'
import { MyIcon } from '../../plugins/myIcon'
import { PlayIcon } from '../../components/PlayIcon'
import moment from 'moment'

interface IPlayCount {
  playCount: number
}

export const PlayCount = ({ playCount }: IPlayCount) => {
  return (
    <div
      css={{
        position: 'absolute',
        top: '0',
        right: '5px',
        display: 'flex',
        alignItems: 'center',
        color: '#fff'
      }}
    >
      <MyIcon style={{ fontSize: '10px', color: '#fff' }} type="icon-play-o" />
      <span
        css={{
          marginLeft: '5px'
        }}
      >
        {Number(playCount) < 99999
          ? playCount
          : `${Math.floor(Number(playCount) / 10000)}万`}
      </span>
    </div>
  )
}

export const RecommendSongList = () => {
  const [recommendSongLists, setRecommendSongList] = useState([])

  useEffect(() => {
    getRecommendDailySongList().then(({ recommend }) => {
      setRecommendSongList(recommend)
    })
  }, [])

  return (
    <div>
      <ul
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          '& li': {
            width: 'calc(20% - 10px)',
            margin: '0 10px 10px 0',
            '& > a > div': {
              marginBottom: '10px'
            },
            '& p': {
              marginBottom: '0'
            },
            '&:nth-of-type(5), &:nth-of-type(10)': {
              marginRight: '0'
            },
            a: {
              color: '#333'
            }
          }
        }}
      >
        <li>
          <Link to="/daily_song">
            <div
              css={{
                position: 'relative',
                borderRadius: '5px',
                overflow: 'hidden',
                '&:hover': {
                  '.play-icon, .describe': {
                    opacity: 1
                  }
                }
              }}
            >
              <div
                css={{
                  backgroundImage: `url('http://img5.cache.netease.com/ent/2016/3/17/20160317152055e235e_550.jpg')`,
                  ...imageCover('100%', '100%'),
                  filter: 'blur(10px)'
                }}
              />
              <div
                css={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-50px',
                  marginLeft: '-50px'
                }}
              >
                <MyIcon
                  style={{ fontSize: '100px', color: '#fff' }}
                  type="icon-calendar"
                />
                <h1
                  css={{
                    position: 'absolute',
                    top: '60%',
                    left: '50%',
                    color: '#fff',
                    margin: '0',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {moment().date()}
                </h1>
              </div>
              <p
                className="describe"
                css={{
                  position: 'absolute',
                  top: '0',
                  width: '100%',
                  padding: '10px',
                  margin: '0',
                  color: '#fff',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  opacity: 0,
                  transition: 'all, 0.5s'
                }}
              >
                根据您的音乐口味生成每日更新
              </p>
              <PlayIcon />
            </div>
          </Link>
          <Link to="/daily_songlist">
            <p>每日歌曲推荐</p>
          </Link>
        </li>
        {recommendSongLists.slice(0, 9).map((recommendSongList: any) => {
          return (
            <li key={recommendSongList.id}>
              <Link to={`/song_list/${recommendSongList.id}`}>
                <div
                  css={{
                    position: 'relative',
                    borderRadius: '5px',
                    backgroundImage: `url('${recommendSongList.picUrl}')`,
                    ...imageCover('100%', '100%'),
                    '&:hover': {
                      '.play-icon': {
                        opacity: 1
                      }
                    }
                  }}
                >
                  <PlayCount playCount={recommendSongList.playcount} />
                  <PlayIcon />
                </div>
              </Link>
              <Link to={`/songlist?id=${recommendSongList.id}`}>
                <p
                  css={{
                    ...overflowMultiLine()
                  }}
                >
                  {recommendSongList.name}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
