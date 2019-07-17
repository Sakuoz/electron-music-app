import http from './axios'

// 登陆
export const login = async (phone: string, password: string) => {
  const data: any = await http.get(
    `/login/cellphone?phone=${phone}&password=${password}`
  )

  // 存入本地
  localStorage.account = JSON.stringify(data.profile)
}

// 喜欢音乐
export const like = async (id: number, likeStatus = true) => {
  const data: any = await http.get(`/like?id=${id}&like=${likeStatus}`)

  return data
}

// 获取用户歌单列表
export const getUserSongList = async (userId: string) => {
  const data: any = await http.get(`/user/playlist?uid=${userId}`)

  return data
}

// 获取每日推荐歌单
export const getRecommendDailySongList = async () => {
  const data: any = await http.get('/recommend/resource')

  return data
}

// 获取每日推荐歌曲
export const getRecommendDailySongs = async () => {
  const data: any = await http.get('/recommend/songs')

  return data
}

// 获取专辑详情
export const getAlbumDetail = async (id: number) => {
  const data: any = await http.get(`/album?id=${id}`)

  return data
}

// 获取歌单详情
export const getSongListDetail = async (id: number) => {
  const data: any = await http.get(`/playlist/detail?id=${id}`)

  return data
}

// 获取首页 banner 图
export const getBanner = async () => {
  const data: any = await http.get('/banner?type=0')

  return data
}

// 获取最新音乐
export const getLatestMusic = async () => {
  const data: any = await http.get('/personalized/newsong')

  return data
}

// 获取独家放送
export const getExclusiveMv = async () => {
  const data: any = await http.get('/personalized/privatecontent')

  return data
}

// 获取独家放送
export const getRecommendMv = async () => {
  const data: any = await http.get('/personalized/mv')

  return data
}
