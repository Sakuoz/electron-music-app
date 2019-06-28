import { Icon } from 'antd'

interface IProps {
  title: string
}

export const Title = ({ title }: IProps) => {
  return (
    <h3
      css={{
        margin: '40px 0 15px'
      }}
    >
      {title}
      <Icon type="right" />
    </h3>
  )
}
