import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { MagnifyingGlass } from 'phosphor-react'
import * as S from './styles'

const searchSchema = z.object({
  search: z.string(),
})

type searchFormInputs = z.infer<typeof searchSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormInputs>({
    resolver: zodResolver(searchSchema),
  })

  function handlerSearchTransactions(data: searchFormInputs) {
    console.log(data)
  }
  return (
    <S.SearchFormContainer onSubmit={handleSubmit(handlerSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('search')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </S.SearchFormContainer>
  )
}
