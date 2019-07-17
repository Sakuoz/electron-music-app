import { Artists } from '../components/Artists'
import { Link } from 'react-router-dom'
import { message } from 'antd'
import { MyIcon } from '../plugins/myIcon'
import { overflowX } from '../plugins/style'
import { like } from '../plugins/apis'
import moment from 'moment'

interface IProps {
  songs: Array<object>
}

export const SongsTable = ({ songs }: IProps) => {
  function setLikeStatus(id: number) {
    like(id).then(() => {
      message.success('已添加到我喜欢的音乐')
    })
  }

  return (
    <div
      css={{
        margin: '0 -40px'
      }}
    >
      <table
        css={{
          width: '100%',
          tableLayout: 'fixed'
        }}
      >
        <thead>
          <tr>
            <th
              css={{
                width: '60px'
              }}
            />
            <th
              css={{
                width: '40px'
              }}
            />
            <th
              css={{
                width: '35%'
              }}
            >
              音乐标题
            </th>
            <th
              css={{
                width: '15%'
              }}
            >
              歌手
            </th>
            <th
              css={{
                width: '30%'
              }}
            >
              专辑
            </th>
            <th
              css={{
                width: '100px'
              }}
            >
              时长
            </th>
          </tr>
        </thead>
        <tbody
          css={{
            td: {
              ...overflowX(),
              padding: '10px 5px 10px 0'
            },
            'tr:nth-of-type(odd)': {
              backgroundColor: '#fafafa'
            }
          }}
        >
          {songs.map((song: any, index) => {
            return (
              <tr key={song.id}>
                <td
                  css={{
                    textAlign: 'right',
                    color: '#d2d2d2'
                  }}
                >
                  {index < 9 ? `0${index + 1}` : `${index + 1}`}
                </td>
                <td
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '41px',
                    padding: '0 10px'
                  }}
                >
                  <MyIcon
                    style={{ fontSize: '18px' }}
                    type="icon-favorite-o"
                    onClick={() => setLikeStatus(song.id)}
                  />
                </td>
                <td>{song.name}</td>
                <td>
                  <Artists artists={song.artists} />
                </td>
                <td>
                  <Link
                    to={`/album/${song.album.id}`}
                    css={{
                      color: '#333'
                    }}
                  >
                    {song.album.name}
                  </Link>
                </td>
                <td
                  css={{
                    color: '#d2d2d2'
                  }}
                >
                  {moment(song.duration).format('mm:ss')}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
