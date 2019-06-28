import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { imageCover, overflowX } from '../../plugins/style'
import { getRecommendMv } from '../../plugins/apis'
import { PlayCount } from './RecommendSongList'

interface mv {
  id: number
  picUrl: string
  name: string
  playCount: number
  artists: Array<() => void>
}

export const RecommendMv = () => {
  const [recommendMv, setRecommendMv] = useState([])

  useEffect(() => {
    getRecommendMv().then(({ result }) => {
      setRecommendMv(result)
    })
  }, [])

  return (
    <div>
      <ul
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {recommendMv.map((mv: mv) => {
          return (
            <li
              key={mv.id}
              css={{
                flex: 1,
                marginRight: '15px',
                overflow: 'hidden',
                '&:last-child': {
                  marginRight: '0'
                }
              }}
            >
              <Link to={`mv/${mv.id}`}>
                <div
                  css={{
                    position: 'relative',
                    borderRadius: '5px',
                    backgroundImage: `url('${mv.picUrl}')`,
                    ...imageCover('100%', '55%')
                  }}
                >
                  <PlayCount playCount={mv.playCount} />
                </div>
              </Link>
              <Link to={`mv/${mv.id}`}>
                <p
                  css={{
                    ...overflowX(),
                    margin: '5px 0 0',
                    color: '#333'
                  }}
                >
                  {mv.name}
                </p>
              </Link>
              <div
                css={{
                  ...overflowX(),
                  fontSize: '12px'
                }}
              >
                {mv.artists.map((artist: any, index: number) => {
                  return (
                    <React.Fragment key={artist.id}>
                      <Link
                        css={{
                          color: '#999',
                          '&:hover': {
                            color: '#333'
                          }
                        }}
                        to={`artist/${artist.id}`}
                      >
                        {artist.name}
                      </Link>
                      {index + 1 === mv.artists.length ? null : (
                        <span
                          css={{
                            margin: '0 5px'
                          }}
                        >
                          /
                        </span>
                      )}
                    </React.Fragment>
                  )
                })}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
