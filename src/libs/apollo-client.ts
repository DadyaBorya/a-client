import {
	ApolloCache,
	ApolloClient,
	NormalizedCacheObject
} from '@apollo/client'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

const emptyCacheObj = {}
class VoidCache extends ApolloCache<NormalizedCacheObject> {
	read(options) {
		return null
	}
	write(options) {
		return undefined
	}
	diff(options) {
		return {}
	}
	watch(watch) {
		return () => {}
	}
	async reset() {}
	evict(options) {
		return false
	}
	restore(data) {
		return this
	}
	extract(optimistic) {
		return emptyCacheObj
	}
	removeOptimistic(id) {}
	batch(options) {
		return undefined as any
	}
	performTransaction(update, optimisticId) {}
	recordOptimisticTransaction(transaction, optimisticId) {}
	transformDocument(document) {
		return document
	}
	transformForLink(document) {
		return document
	}
	identify(object) {
		return undefined
	}
	gc() {
		return [] as string[]
	}
	modify(options) {
		return false
	}
	readQuery(options, optimistic?) {
		return null
	}
	readFragment(options, optimistic?) {
		return null
	}
	writeQuery(opts) {
		return undefined
	}
	writeFragment(opts) {
		return undefined
	}
	updateQuery(options, update) {
		return null
	}
	updateFragment(options, update) {
		return null
	}
}

const httpLink = createUploadLink({
	uri: process.env.NEXT_PUBLIC_SERVER_URL,
	credentials: 'include',
	headers: {
		'Apollo-Require-Preflight': 'true'
	}
})

export const client = new ApolloClient({
	link: httpLink,
	cache: new VoidCache(),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'ignore'
		},
		query: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all'
		}
	}
})
