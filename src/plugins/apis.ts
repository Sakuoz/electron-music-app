import http from './axios'

// 登陆
export const login = async (phone: string, password: string) => {
  const data: any = await http.get(
    `/login/cellphone?phone=${phone}&password=${password}`
  )

  localStorage.account = JSON.stringify(data.profile)
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
