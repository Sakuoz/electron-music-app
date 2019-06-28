import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MyIcon } from '../../plugins/myIcon'
import { Button } from 'antd'
import { overflowX } from '../../plugins/style'
import { getUserSongList, login } from '../../plugins/apis'

const currentUser = JSON.parse(localStorage.account || '{}')

export const SideNav = () => {
  const [isActive, setActive] = useState('/')
  const [navs, setNavs] = useState([
    {
      title: '',
      url: '',
      children: [
        {
          name: '发现音乐',
          url: '/',
          iconName: 'icon-logo'
        },
        {
          name: '私人FM',
          url: '/fm',
          iconName: 'icon-fm'
        },
        {
          name: '视频',
          url: '/mv',
          iconName: 'icon-mv'
        },
        {
          name: '朋友',
          url: '/friends',
          iconName: 'icon-friends'
        }
      ]
    },
    {
      title: '我的音乐',
      url: '',
      children: [
        {
          name: 'iTunes音乐',
          url: '/itunes',
          iconName: 'icon-itunes'
        },
        {
          name: '下载管理',
          url: '/download',
          iconName: 'icon-download'
        },
        {
          name: '我的音乐云盘',
          url: '/cloud',
          iconName: 'icon-cloud'
        },
        {
          name: '我的收藏',
          url: '/favorite',
          iconName: 'icon-favorite'
        }
      ]
    },
    {
      title: '创建的歌单',
      url: '',
      children: []
    },
    {
      title: '收藏的歌单',
      url: '',
      children: []
    }
  ])

  useEffect(() => {
    if (!currentUser.userId) return
    // 过滤歌单
    getUserSongList(currentUser.userId).then(({ playlist }) => {
      playlist.forEach((item: any) => {
        if (item.creator.userId === currentUser.userId) {
          navs[2].children.push({
            name: item.name,
            iconName: 'icon-song-list',
            url: `songlist?id=${item.id}`
          })
        } else {
          navs[3].children.push({
            name: item.name,
            iconName: 'icon-song-list',
            url: `songlist?id=${item.id}`
          })
        }
      })

      setNavs(navs.slice(0))
    })
  }, [])

  return (
    <div
      css={{
        width: '20%',
        height: '100vh',
        borderRight: '2px solid rgb(250, 250, 250)',
        overflow: 'scroll'
      }}
    >
      <div>
        <Button onClick={() => login('13227575515', 'q2894821')} type="primary">
          登陆
        </Button>
        <ul
          css={{
            '& li': {
              '&:hover': {
                backgroundColor: '#f8f8f8'
              },
              a: {
                display: 'flex',
                alignItems: 'center',
                padding: '10px 10px 10px 20px',
                i: {
                  marginRight: '10px'
                }
              }
            }
          }}
        >
          {navs.map(nav => {
            return (
              <div key={nav.title}>
                <span
                  css={{
                    color: '#a2a2a2',
                    marginLeft: '24px',
                    fontSize: '12px'
                  }}
                >
                  {nav.title}
                </span>
                {nav.children.length ? (
                  nav.children.map(child => {
                    return (
                      <li
                        onClick={() => setActive(child.url)}
                        css={() => {
                          const activeColor =
                            child.url === isActive ? '#c3463a' : '#444'
                          const activeBorderColor =
                            child.url === isActive ? '#c3463a' : '#fff'

                          return {
                            borderLeft: `4px solid ${activeBorderColor}`,
                            a: {
                              color: activeColor
                            }
                          }
                        }}
                        key={child.url}
                      >
                        <Link to={`${child.url}`}>
                          <MyIcon type={child.iconName} />
                          <span
                            css={{
                              ...overflowX()
                            }}
                          >
                            {child.name}
                          </span>
                        </Link>
                      </li>
                    )
                  })
                ) : (
                  <div>暂无</div>
                )}
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
