import * as S from './styles'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <S.TransactionsContainer>

        <SearchForm />

        <S.TransactionsTable>
          <tbody>
            <tr>
              <td width={'50%'}>Desenvolvimento de site</td>
              <td>
                <S.PriceHighlight variant="income">
                  R$ 12.000,00
                </S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width={'50%'}>Aluguel do apartamento</td>
              <td>
                <S.PriceHighlight variant="outcome">
                  - R$ 1.200,00
                </S.PriceHighlight>
              </td>
              <td>Casa</td>
              <td>27/03/2022</td>
            </tr>
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  )
}
