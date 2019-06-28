// 主题色
export const mainColor = '#c3463a'

// 单行文字溢出隐藏
export const overflowX = (): any => {
  return {
    maxWidth: '100%',
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
}

// 多行文字溢出隐藏
export const overflowMultiLine = (): any => {
  return {
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical'
  }
}

// 背景图自适应
export const imageCover = (width = '100%', height: string) => {
  return {
    width: width,
    paddingBottom: height,
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  }
}
