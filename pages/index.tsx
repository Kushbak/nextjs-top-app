import axios from 'axios'
import type { GetStaticProps } from 'next'
import { useState } from 'react'
import { P, Title, Button, Tag, Rating } from '../components'
import { MenuItem } from '../interfaces/menu.interface'
import { withLayout } from '../layout/Layout'

const Home = ({ menu }: HomeProps) => {
  const [rating, setRating] = useState<number>(4)
  return (
    <div>
      <Title tag='h1'>Title</Title>
      <Button appearance='primary' arrow='right'>Узнать подробнее</Button>
      <Button appearance='ghost' arrow='down'>Читать отзывы</Button>
      <P size='large'>Large</P>
      <P size='middle'>middle</P>
      <P size='small'>small</P>
      <Tag size='small' href='#' color='red'>Red</Tag>
      <Tag size='small' href='#' color='green'>Green</Tag>
      <Tag size='small' href='#' color='ghost'>Ghost</Tag>
      <Tag size='small' href='#' color='primary'>Primary</Tag>
      <Rating rating={rating} setRating={setRating} isEditable />
      <ul>
        {menu.map(item => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios
    .post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
      {
        firstCategory
      }
    )
  
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
} 