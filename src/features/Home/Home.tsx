import { Main } from '../../components/Main'
import { useVacations } from './hooks'

export function Home() {
  const { data, isLoading, isError } = useVacations()

  if (isLoading) return <Main>loading...</Main>

  if (isError) return <Main>ERROR</Main>

  return <Main>home page</Main>
}
