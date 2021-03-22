import { Container } from "./styles";

export function TransactionsTable() {

  const transactions = [1, 2, 3]

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr>
              <td>Desenvolviento de website</td>
              <td className={transaction === 2 ? 'withdraw' : 'deposit'}>
                {transaction === 2 && '-'} R$12.000
              </td>
              <td>Desenvolvimento</td>
              <td>20/02/2021</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}