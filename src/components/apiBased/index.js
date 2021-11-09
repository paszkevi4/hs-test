import { useEffect, useState } from 'react'
import { graphql } from 'react-apollo'
import { getContinentsQuery } from '../../api/graphQLQueries'
import Hoc from '../../HOC'
import TreeController from '../tree'

export const ApiBasedController = ({ data }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [continents, setContinents] = useState([])
	const TreeComponent = Hoc(TreeController, continents)

	useEffect(() => {
		setIsLoading(data.loading)
		if (!data.loading) {
			setContinents(data.children)
		}
	}, [data])

	return <div>{isLoading ? <h2>Loading...</h2> : <TreeComponent />}</div>
}

export default graphql(getContinentsQuery)(ApiBasedController)
