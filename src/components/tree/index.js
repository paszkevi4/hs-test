import './tree.css'

const TreeController = ({ data, toggleIsOpen, getIsOpen }) => {
	const printTree = (itemsToRender) => {
		return itemsToRender.map((item) => {
			return (
				<li key={item.code}>
					<p
						className='list-item__name'
						onClick={() => toggleIsOpen(item)}
					>
						{item.name}
					</p>
					{item?.children?.length && getIsOpen(item.name) ? (
						<ul>{printTree(item.children)}</ul>
					) : null}
				</li>
			)
		})
	}

	return (
		<div className='tree'>
			<ul className='tree-container'>
				{data && data.length > 0 && printTree(data)}
			</ul>
		</div>
	)
}

export default TreeController
