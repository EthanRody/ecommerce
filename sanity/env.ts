export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-06-03'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const NEXT_PUBLIC_SANITY_TOKEN = 'skhNZaFwpuBdM3NGBcaFz9YFTYLPM9IoNi9CaVRlqNzLXaWUl84EgOam9xDBjNsevt6jbmo9LGA8gafP5YaQ0cOa7Qj3ijzPZYaUDqWU9MJzlEcAW2f5mtZxRhYJtVQPJiMSjOiBHuOJuJljiCGZx46xR2h802mNyj1fzbuc5bNyjmekgIsq'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
