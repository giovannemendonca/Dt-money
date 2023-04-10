import * as S from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from './hooks/useSammary'

export function Summary() {
  const { summary } = useSummary()
  
  return (
    <S.SummaryContainer>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>R$ {priceFormatter.format(summary.income)}</strong>
      </S.SummaryCard>

      <S.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>R$ {priceFormatter.format(summary.outcome)}</strong>
      </S.SummaryCard>
      <S.SummaryCard variation="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>
        <strong>R$ {priceFormatter.format(summary.total)}</strong>
      </S.SummaryCard>
    </S.SummaryContainer>
  )
}
