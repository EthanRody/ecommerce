import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, NEXT_PUBLIC_SANITY_TOKEN } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: NEXT_PUBLIC_SANITY_TOKEN,
})

export async function sanityFetch({ query, params = {} }) {
  return await client.fetch(query, params);
}