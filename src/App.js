import './App.css'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import Sidebar from './components/sidebar'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import ApiBasedController from './components/apiBased'
import GeneratedController from './components/generated'

const client = new ApolloClient({
	uri: 'https://countries.trevorblades.com/',
})

function App() {
	return (
		<ApolloProvider client={client}>
			<HashRouter>
				<div className='App'>
					<Sidebar />
					<Switch>
						<Route path='/api' component={ApiBasedController} />
						<Route
							path='/generated'
							component={GeneratedController}
						/>
						<Redirect to='/api' />
					</Switch>
				</div>
			</HashRouter>
		</ApolloProvider>
	)
}

export default App
