import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../../components/App'

describe('Add Transactions', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() => 
      Promise.resolve({
        json: () => Promise.resolve([]),
        ok: true
      })
    )
  })

  it('adds a new transaction', async () => {
    render(<App />)
    

    expect(global.fetch).toHaveBeenCalled()
  })
})