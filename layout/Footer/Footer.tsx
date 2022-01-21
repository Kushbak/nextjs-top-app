import { Props } from './Footer.props'
import cn from 'classnames'
import styles from './Footer.module.css'

const Footer = ({ className, ...props}: Props) => {
    return (
        <div className={cn(className, styles.footer)} {...props}>
            <p>OwlTop © 2020 - 2021 Все права защищены</p>
            <a href="#">Пользовательское соглашение</a>
            <a href="#">Политика конфиденциальности</a>
        </div>
    )
}

export default Footer
