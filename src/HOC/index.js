import { useState, createContext } from 'react'
export const Context = createContext()

const Hoc = (HocComponent, data) => {
	const HocedComponent = (props) => {
		const [openedNodes, setOpenedNodes] = useState([])

		const toggleIsOpen = (item) => {
			if (!item.children || !item.children.length) {
				setOpenedNodes([])
				return
			}
			const isOpen = openedNodes.includes(item.name)
			if (isOpen) {
				setOpenedNodes((prevOpenedNodes) =>
					prevOpenedNodes.filter((nodeId) => nodeId !== item.name),
				)
			} else {
				setOpenedNodes((prevOpenedNodes) => [
					...prevOpenedNodes,
					item.name,
				])
			}
		}

		const getIsOpen = (name) => {
			return openedNodes.includes(name)
		}

		return (
			<Context.Provider
				value={{
					getIsOpen,
					toggleIsOpen,
				}}
			>
				<HocComponent data={data} {...props} />
			</Context.Provider>
		)
	}
	return HocedComponent
}

export default Hoc
