import * as S from './styles'
import logoImg from '../../assets/logo.svg'

export function Header() {

  return(
    <S.Container>
      <S.HeaderContent>
        <img src={logoImg} alt="" />
        <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
      </S.HeaderContent>
    </S.Container>
  )
}
