import type { NextPage } from 'next'
import { P, Title, Button, Tag } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Title tag='h1'>Title</Title>
      <Button appearance='primary' arrow='right'>Узнать подробнее</Button>
      <Button appearance='ghost'  arrow='down'>Читать отзывы</Button>
      <P size='large'>Large</P>
      <P size='middle'>middle</P>
      <P size='small'>small</P>
      <Tag size='small' href='#' color='red'>Red</Tag>
      <Tag size='small' href='#' color='green'>Green</Tag>
      <Tag size='small' href='#' color='ghost'>Ghost</Tag>
      <Tag size='small' href='#' color='primary'>Primary</Tag>
    </div>
  )
}

export default Home
