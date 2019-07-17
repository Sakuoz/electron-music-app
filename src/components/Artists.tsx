import React from 'react'
import { Link } from 'react-router-dom'
import { overflowX } from '../plugins/style'

export const Artists = ({ artists }: any) => {
  return (
    <div
      css={{
        fontSize: '12px',
        ...overflowX()
      }}
    >
      {artists.map((artist: any, index: number) => {
        return (
          // 没有歌手信息时，id 返回为 0，因此会出现相同 key 的情况，固使用 index 来设置 key
          <React.Fragment key={index}>
            <Link
              onClick={e => {
                if (artist.id === 0) {
                  e.preventDefault()
                }
              }}
              to={`/artist/${artist.id}`}
            >
              {artist.name}
            </Link>
            {index + 1 === artists.length ? null : (
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
  )
}
