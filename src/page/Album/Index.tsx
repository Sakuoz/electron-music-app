import { useState, useEffect } from 'react'
import { getAlbumDetail } from '../../plugins/apis'
import { SongsTable } from '../../components/SongsTable'
import { SongListInfo } from '../../components/SongListInfo'

interface IProps {
  match: {
    params: {
      id: number
    }
  }
  history: any
}

export const Album = ({ match, history }: IProps) => {
  const [albumDetail, setAlbumDetail] = useState({
    coverImgUrl: '',
    name: '',
    artists: [],
    publishTime: 0
  })

  const [albumSongs, setAlbumSongs] = useState([])

  useEffect(() => {
    console.log(1)
    history.listen((route: any) => {
      console.log(route, 111)
    })

    getAlbumDetail(match.params.id).then(({ album, songs }) => {
      setAlbumDetail(album)

      const formatAlbumSongs = songs.map((song: any) => {
        return {
          album: song.al,
          artists: song.ar,
          duration: song.dt,
          ...song
        }
      })

      setAlbumSongs(formatAlbumSongs)
    })
  }, [match.params.id])

  return (
    <div>
      <SongListInfo
        songListInfo={albumDetail}
        type="album"
        id={match.params.id}
      />
      <SongsTable songs={albumSongs} />
    </div>
  )
}
