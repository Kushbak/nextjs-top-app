import axios from 'axios'
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useState } from 'react'
import { MenuItem } from '../../interfaces/menu.interface'
import { TopPageModel } from '../../interfaces/page.interface'
import { ProductModel } from '../../interfaces/product.interface'
import { withLayout } from '../../layout/Layout'
import { ParsedUrlQuery } from 'node:querystring'

const firstCategory = 0
const Course = ({ menu, page, products }: CourseProps) => {
    return (
        <>{products?.length}</>
    )
}

export default withLayout(Course)

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu } = await axios
        .post<MenuItem[]>(
            process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
            { firstCategory }
        )
    return {
        paths: menu.flatMap(item => item.pages.map(p => '/courses/' + p.alias)),
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) return {
        notFound: true
    }

    const { data: menu } = await axios
        .post<MenuItem[]>(
            process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
            { firstCategory }
        )

    const { data: page } = await axios
        .get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias)

    const { data: products } = await axios
        .post<ProductModel[]>(
            process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
            { category: page.category, limit: 10 }
        )

    return {
        props: {
            firstCategory,
            page,
            products,
            menu,
        }
    }
}

interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[]
    firstCategory: number
    page: TopPageModel,
    products: ProductModel[]
} 