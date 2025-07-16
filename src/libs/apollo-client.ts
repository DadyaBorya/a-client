import { ApolloClient, InMemoryCache } from '@apollo/client'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

const httpLink = createUploadLink({
	uri: process.env.NEXT_PUBLIC_SERVER_URL,
	credentials: 'include',
	headers: {
		'Apollo-Require-Preflight': 'true'
	}
})

export const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
	defaultOptions: {
		query: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all'
		},
		watchQuery: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all'
		}
	}
})
