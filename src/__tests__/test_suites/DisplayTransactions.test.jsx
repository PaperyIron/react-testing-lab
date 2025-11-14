import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import App from '../../components/App'

describe('Display Transactions', () => {
  beforeEach(() => {
    const mockTransactions = [
      { id: "1", date: "2019-12-01", description: "Paycheck", category: "Income", amount: 1000 }
    ]
    global.setFetchResponse(mockTransactions)
  })

  it('displays transactions on startup', async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen.getByText("Paycheck")).toBeInTheDocument()
    })
  })
})