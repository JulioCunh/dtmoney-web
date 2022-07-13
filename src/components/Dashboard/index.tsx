import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTalbe';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
