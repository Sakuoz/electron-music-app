import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { imageCover, overflowMultiLine } from '../../plugins/style'
import { getExclusiveMv } from '../../plugins/apis'

interface mv {
  id: number
  picUrl: string
  copywriter: string
}

export const ExclusiveMv = () => {
  const [exclusiveMv, setExclusiveMv] = useState([])

  useEffect(() => {
    getExclusiveMv().then(({ result }) => {
      setExclusiveMv(result)
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
        {exclusiveMv.map((mv: mv) => {
          return (
            <li
              key={mv.id}
              css={{
                flex: 1,
                marginRight: '15px',
                '&:last-child': {
                  marginRight: '0'
                }
              }}
            >
              <Link to={`mv/${mv.id}`}>
                <div
                  css={{
                    ...imageCover('100%', '55%'),
                    backgroundImage: `url('${mv.picUrl}')`,
                    borderRadius: '5px'
                  }}
                />
              </Link>
              <Link to={`mv/${mv.id}`}>
                <p
                  css={{
                    ...overflowMultiLine(),
                    marginTop: '5px',
                    lineHeight: '18px',
                    minHeight: '36px',
                    color: '#333'
                  }}
                >
                  {mv.copywriter}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
