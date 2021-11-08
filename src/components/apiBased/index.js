import { useEffect, useState } from 'react'
import { graphql } from 'react-apollo'
import { getContinentsQuery } from '../../api/graphQLQueries'
import Hoc from '../../HOC'
import TreeController from '../tree'

export const ApiBasedController = ({ data }) => {
	const [continents, setContinents] = useState([])
	const TreeComponent = Hoc(TreeController, continents)

	useEffect(() => {
		if (!data.loading) {
			setContinents(data.children)
		}
	}, [data])

	return <TreeComponent />
}

export default graphql(getContinentsQuery)(ApiBasedController)
