'use client'

import { ApolloProvider } from '@apollo/client'
import { PropsWithChildren } from 'react'

import { client } from '@/shared/apollo-client'

export function ApolloClientProvider({ children }: PropsWithChildren<unknown>) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}
