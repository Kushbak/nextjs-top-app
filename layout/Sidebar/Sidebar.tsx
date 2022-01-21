import Menu from '../Menu/Menu'
import { Props } from './Sidebar.props'

const Sidebar = (props: Props) => {
    return (
        <div {...props}>
            <Menu />
        </div>
    )
}

export default Sidebar
