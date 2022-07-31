import Modal from 'react-modal';
import { useState } from 'react';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactcionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar" />
      </button>

      <Container>
        <h1>Cadastrar transação</h1>

        <input placeholder="titulo" />
        <input type="number" placeholder="valor" />
        <TransactcionTypeContainer>
          <button
            type="button"
            onClick={() => {
              setType('deposit');
            }}
          >
            <img src={incomeImg} alt="Income" />
            <span>Entrada</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setType('withdraw');
            }}
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Saída</span>
          </button>
        </TransactcionTypeContainer>
        <input placeholder="categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
