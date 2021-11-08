import { gql } from 'apollo-boost'

export const getContinentsQuery = gql`
	{
		children: continents {
			name
			code
			children: countries {
				name
				code
				children: languages {
					name
					code
				}
			}
		}
	}
`
