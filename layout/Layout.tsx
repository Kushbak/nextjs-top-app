import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import { Props } from './Layout.props'
import Sidebar from './Sidebar/Sidebar'
import styles from './Layout.module.css'
import { AppContextProvider, IAppContext } from '../context/app.context'

const Layout = ({ children }: Props) => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <main className={styles.main}>
                {children}
            </main>
            <Footer className={styles.footer} />
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: React.FC<T>) => {
    return (props: T) => (
        <AppContextProvider firstCategory={props.firstCategory} menu={props.menu} >
            <Layout>
                <Component {...props} />
            </Layout>
        </AppContextProvider>
    )
}

export default Layout
