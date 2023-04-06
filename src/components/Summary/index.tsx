import React from 'react'
import * as S from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

export function Summary() {
  return (
    <S.SummaryContainer>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>

      <S.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>
      <S.SummaryCard variation='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>
        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>
    </S.SummaryContainer>
  )
}
