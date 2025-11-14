import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../components/App'

describe('Search Transactions', () => {
  beforeEach(() => {
    const mockTransactions = [
      { id: "1", date: "2019-12-01", description: "Paycheck", category: "Income", amount: 1000 },
      { id: "2", date: "2019-12-02", description: "Groceries", category: "Food", amount: -50 }
    ]
    global.setFetchResponse(mockTransactions)
  })

  it('filters transactions based on search', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    await waitFor(() => expect(screen.getByText("Paycheck")).toBeInTheDocument())
    
    await user.type(screen.getByPlaceholderText(/Search/i), 'Groceries')
    
    expect(screen.queryByText("Paycheck")).not.toBeInTheDocument()
    expect(screen.getByText("Groceries")).toBeInTheDocument()
  })
})