import React, { useEffect, useState } from 'react'
import { getLatestMusic } from '../../plugins/apis'
import { overflowX, mainColor } from '../../plugins/style'
import { MyIcon } from '../../plugins/myIcon'
import { PlayIcon } from '../../components/PlayIcon'

export const LatestMusic = () => {
  const [latestMusic, setLatestMusic] = useState([])

  useEffect(() => {
    getLatestMusic().then(({ result }) => {
      setLatestMusic(result)
    })
  }, [])

  return (
    <div>
      <ul
        css={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {latestMusic.map((music: any, index: number) => {
          return (
            <li
              key={music.id}
              css={{
                display: 'flex',
                alignItems: 'center',
                width: 'calc(50% - 20px)',
                padding: '10px',
                borderBottom: '1px solid #f7f7f7',
                marginRight: '40px',
                '&:nth-of-type(even)': {
                  marginRight: '0'
                },
                '&:nth-of-type(1), &:nth-of-type(2)': {
                  borderTop: '1px solid #f7f7f7'
                },
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
            >
              <div
                css={{
                  position: 'relative'
                }}
              >
                <img
                  css={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '5px'
                  }}
                  src={music.song.album.picUrl}
                  alt="歌曲图片"
                />
                <PlayIcon
                  bottom="50%"
                  right="50%"
                  opacity={1}
                  width="25px"
                  height="25px"
                  isCenter
                />
              </div>

              <span
                css={{
                  padding: '0 10px',
                  color: '#e9e9e9',
                  fontSize: '14px'
                }}
              >
                {index < 9 ? `0${index + 1}` : `${index + 1}`}
              </span>

              <div
                css={{
                  flex: '1',
                  overflow: 'hidden',
                  marginRight: '10px'
                }}
              >
                <p
                  css={{
                    marginBottom: '10px',
                    ...overflowX()
                  }}
                >
                  {music.name}
                  {music.song.alias.length
                    ? music.song.alias.map((item: string, index: number) => {
                        return (
                          <span
                            css={{
                              color: '#9d9d9d'
                            }}
                            key={index}
                          >
                            ({item})
                          </span>
                        )
                      })
                    : null}
                </p>
                <div
                  css={{
                    fontSize: '12px'
                  }}
                >
                  {music.song.artists.map((artist: any, index: number) => {
                    return (
                      <span key={artist.id}>
                        {artist.name}
                        {index + 1 === music.song.artists.length ? null : (
                          <span
                            css={{
                              margin: '0 5px'
                            }}
                          >
                            /
                          </span>
                        )}
                      </span>
                    )
                  })}
                </div>
              </div>

              <MyIcon
                style={{
                  fontSize: '18px',
                  color: mainColor
                }}
                type="icon-mv-square"
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
