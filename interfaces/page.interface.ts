export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export interface TopPageAdvantage {
    _id: string
    title: string
    description: string
}

export interface HhData {
    _id: string
    juniorSalary: number
    middleSalary: number
    seniorSalary: number
    updatedAt: Date
}

export interface TopPageModel {
    tags: string[]
    _id: string
    secondCategory: string
    alias: string
    title: string
    category: string
    seoText: string
    tagsTitle: string
    metaTitle: string
    metaDescription: string
    firstCategory: number
    advantages: TopPageAdvantage[]
    createdAt: Date
    updatedAt: Date
    __v: number
    hh: HhData
}