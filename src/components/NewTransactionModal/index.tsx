import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <S.Overlay>
        <S.Content>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <S.CloseButton>
            <X size={24} />
          </S.CloseButton>
          <form>
            <input placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />

            <S.TransactionType>
              <S.TransactionTypeButton variant="encome"  value='encome'>
                <ArrowCircleUp size={24} />
                Entrada
              </S.TransactionTypeButton>
              <S.TransactionTypeButton variant="outcome" value='outcome'>
                <ArrowCircleDown size={24} />
                Saída
              </S.TransactionTypeButton>
            </S.TransactionType>

            <button type="submit">Cadastrar</button>
          </form>
        </S.Content>
      </S.Overlay>
    </Dialog.Portal>
  )
}
