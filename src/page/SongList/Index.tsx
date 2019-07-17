import { useState, useEffect } from 'react'
import { getSongListDetail } from '../../plugins/apis'
import { SongsTable } from '../../components/SongsTable'
import { SongListInfo } from '../../components/SongListInfo'

interface IProps {
  match: {
    params: {
      id: number
    }
  }
}

export const SongList = ({ match }: IProps) => {
  const [songListDetail, setSongListDetail] = useState({
    coverImgUrl: '',
    name: '',
    tags: [],
    trackCount: '',
    playCount: 0,
    description: ''
  })

  const [songListSongs, setSongListSongs] = useState([])

  useEffect(() => {
    getSongListDetail(match.params.id).then(({ playlist }) => {
      setSongListDetail(playlist)

      const formatAlbumSongs = playlist.tracks.map((song: any) => {
        return {
          album: song.al,
          artists: song.ar,
          duration: song.dt,
          ...song
        }
      })

      setSongListSongs(formatAlbumSongs)
    })
  }, [match.params.id])

  return (
    <div>
      <SongListInfo
        songListInfo={songListDetail}
        type="songList"
        id={match.params.id}
      />
      <SongsTable songs={songListSongs} />
    </div>
  )
}
