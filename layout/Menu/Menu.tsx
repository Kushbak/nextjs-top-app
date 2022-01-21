import cn from 'classnames'
import { useContext } from 'react'
import { AppContext } from '../../context/app.context'
import { FirstLevelMenuItem } from '../../interfaces/menu.interface'
import { TopLevelCategory } from '../../interfaces/page.interface'
import CoursesIcon from './icons/coursesIcon.svg'
import BooksIcon from './icons/booksIcon.svg'
import ServicesIcon from './icons/servicesIcon.svg'
import ProductsIcon from './icons/productsIcon.svg'
import styles from './Menu.module.css'

const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        route: 'courses',
        name: 'Курсы',
        icon: <CoursesIcon />,
        id: TopLevelCategory.Courses
    },
    {
        route: 'books',
        name: 'Книги',
        icon: <BooksIcon />,
        id: TopLevelCategory.Books
    },
    {
        route: 'services',
        name: 'Сервисы',
        icon: <ServicesIcon />,
        id: TopLevelCategory.Services
    },
    {
        route: 'products',
        name: 'Продукты',
        icon: <ProductsIcon />,
        id: TopLevelCategory.Products
    },
]

const Menu = () => {
    const { menu, firstCategory, setMenu } = useContext(AppContext)

    const buildFirstLevelMenu = () => {
        return (
            <>
                {firstLevelMenu.map(menu => (
                    <div key={menu.route}>
                        <a href={`/${menu.route}`}>
                            <div className={cn(styles.menuItem, { [styles.menuItem_active]: menu.id === firstCategory })}>
                                {menu.icon}
                                <span>
                                    {menu.name}
                                </span>
                            </div>
                        </a>
                        {menu.id === firstCategory && buildSecondLevelMenu()}
                    </div>
                ))}
            </>
        )
    }

    const buildSecondLevelMenu = () => {
        return (
            <div className={styles.secondLevel}>

            </div>
        )
    }

    const buildThirdLevelMenu = () => {
        return (
            <></>
        )
    }

    return (
        <div>
            <ul>
                {menu.map(item => <li key={item._id.secondCategory}>{item._id.secondCategory}</li>)}
            </ul>
        </div>
    )
}

export default Menu
