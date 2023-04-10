import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { MagnifyingGlass } from 'phosphor-react'
import * as S from './styles'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const searchSchema = z.object({
  search: z.string(),
})

type searchFormInputs = z.infer<typeof searchSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormInputs>({
    resolver: zodResolver(searchSchema),
  })

  async function handlerSearchTransactions(data: searchFormInputs) {
    await fetchTransactions(data.search)
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
