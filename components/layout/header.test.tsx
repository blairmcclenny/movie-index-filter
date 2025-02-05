import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './header'
 
test('Page', () => {
  render(<Header />)
  expect(screen.getByRole('heading', { level: 1, name: /Moving Pictures/i })).toBeDefined()
})