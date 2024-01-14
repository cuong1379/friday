import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'node:querystring'

type RedirectOptions = {
  query?: ParsedUrlQueryInput
  keepSlug?: boolean
  keepQuery?: boolean
  routerOptions?: any
}

export const useRedirect = () => {
  const router = useRouter()
  const slug = router.query.subpath?.toString()

  const redirect = (
    pathname: string,
    options: RedirectOptions = { keepSlug: true, keepQuery: true }
  ) => {
    const keepSlug = options.keepSlug ?? true
    const keepQuery = options.keepQuery ?? true
    const routerQuery = { ...router.query }
    if (routerQuery) {
      delete routerQuery.subpath
      delete routerQuery.collection_path
      delete routerQuery.type
    }
    router.push(
      {
        pathname: keepSlug ? `${slug ? `/${slug}` : ''}${pathname}` : pathname,
        query: keepQuery ? { ...routerQuery, ...options.query } : { ...options.query }
      },
      undefined,
      options.routerOptions
    )
  }

  return redirect
}
