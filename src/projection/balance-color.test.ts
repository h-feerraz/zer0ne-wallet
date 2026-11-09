import { describe, it, expect } from 'vitest'
import { balanceColor } from './balance-color'

describe('balance color', () => {
  it('is red when the balance is below zero', () => {
    expect(balanceColor(-1)).toBe('red')
  })
})
