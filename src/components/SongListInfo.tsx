import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { imageCover, mainColor, overflowX } from '../plugins/style'
import { Artists } from '../components/Artists'
import { Icon } from 'antd'
import moment from 'moment'
import _ from 'lodash'

interface IProps {
  songListInfo: {
    coverImgUrl: string
    name: string
  }
  type: string
}

interface IAlubm {
  songListInfo: {
    coverImgUrl: string
    name: string
    artists: Array<object>
    publishTime: number
  }
  type: string
}

interface ISongList {
  songListInfo: {
    coverImgUrl: string
    name: string
    tags: Array<string>
    trackCount: string
    playCount: number
    description: string
  }
  type: string
}

export const SongListInfo = ({ songListInfo, type, id }: any) => {
  const [showMoreInfo, toggleShowMoreInfo] = useState(false)

  useEffect(() => {
    toggleShowMoreInfo(false)
  }, [id])

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: '40px'
      }}
    >
      <div
        css={{
          ...imageCover('200px', '200px'),
          backgroundImage: `url(${
            type === 'album' ? songListInfo.picUrl : songListInfo.coverImgUrl
          })`,
          borderRadius: '5px',
          marginRight: '30px'
        }}
      />
      <div
        css={{
          flex: '1',
          overflow: 'hidden'
        }}
      >
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px'
          }}
        >
          <span
            css={{
              color: mainColor,
              border: `1px solid ${mainColor}`,
              borderRadius: '4px',
              padding: '0 5px',
              marginRight: '10px',
              fontSize: '12px'
            }}
          >
            {type === 'album' ? '专辑' : '歌单'}
          </span>
          <h2
            css={{
              margin: '0'
            }}
          >
            {songListInfo.name}
          </h2>
        </div>
        {type === 'album' ? (
          <div
            css={{
              fontSize: '12px'
            }}
          >
            <div
              css={{
                display: 'flex',
                marginBottom: '5px'
              }}
            >
              歌手：
              <Artists artists={songListInfo.artists} />
            </div>
            <span>
              时间：{moment(songListInfo.publishTime).format('YYYY-MM-DD')}
            </span>
          </div>
        ) : (
          <div
            css={{
              fontSize: '12px'
            }}
          >
            <div
              css={{
                display: 'flex',
                alignItems: 'center',
                margin: '20px 0'
              }}
            >
              <img
                css={{
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%'
                }}
                src={_.get(songListInfo.creator, 'avatarUrl')}
                alt="用户头像"
              />
              <span
                css={{
                  color: '#1890ff',
                  margin: '0 10px'
                }}
              >
                {_.get(songListInfo.creator, 'nickname')}
              </span>
              {moment(songListInfo.createTime).format('YYYY-MM-DD')}创建
            </div>
            <div>
              <span>
                标签：
                {songListInfo.tags.map((tag: any, index: number) => {
                  return (
                    <React.Fragment key={index}>
                      <Link
                        to={`/tag/${tag}`}
                        css={{
                          color: '#1890ff!important'
                        }}
                      >
                        {tag}
                      </Link>
                      {index + 1 === songListInfo.tags.length ? null : (
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
              </span>
            </div>
            <div
              css={{
                margin: '5px 0'
              }}
            >
              <span
                css={{
                  marginRight: '10px'
                }}
              >
                歌曲数：{songListInfo.trackCount}
              </span>
              <span>播放数：{songListInfo.playCount}</span>
            </div>
            <div
              css={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flex: '1'
              }}
            >
              <p
                css={{
                  ...overflowX(),
                  whiteSpace: showMoreInfo ? 'pre-wrap' : 'nowrap'
                }}
              >
                简介：{songListInfo.description}
              </p>
              <button
                css={{
                  border: 'none',
                  backgroundColor: 'inherit',
                  marginLeft: '20px'
                }}
                onClick={() => toggleShowMoreInfo(!showMoreInfo)}
              >
                <Icon type={showMoreInfo ? 'caret-up' : 'caret-down'} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
