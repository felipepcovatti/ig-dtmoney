import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: string
  title: string
  amount: number
  type: 'deposit' | 'widtraw'
  category: string
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    api.get('transactions').then(response => {
      setTransactions(response.data.transactions)
    })
  }, [])

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