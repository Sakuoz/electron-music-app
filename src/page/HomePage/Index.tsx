import React from 'react'
import { Title } from './Title'
import { Banner } from './Banner'
import { RecommendSongList } from './RecommendSongList'
import { LatestMusic } from './LatestMusic'
import { ExclusiveMv } from './ExclusiveMv'
import { RecommendMv } from './RecommendMv'

export const Recommend = () => {
  return (
    <div>
      <Banner />
      <Title title="每日推荐" />
      <RecommendSongList />
      <Title title="最新歌曲" />
      <LatestMusic />
      <Title title="独家放送" />
      <ExclusiveMv />
      <Title title="推荐MV" />
      <RecommendMv />
    </div>
  )
}
