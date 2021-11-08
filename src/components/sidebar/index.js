import { NavLink } from 'react-router-dom'
import './sidebar.css'

const SidebarButton = ({ name, to }) => {
	return (
		<div className='sidebar__button_container'>
			<NavLink to={to}>
				<div className='sidebar__button'>
					<p>{name}</p>
				</div>
			</NavLink>
		</div>
	)
}

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<SidebarButton name='API-based' to='api' />
			<SidebarButton name='Generated' to='generated' />
		</div>
	)
}

export default Sidebar
