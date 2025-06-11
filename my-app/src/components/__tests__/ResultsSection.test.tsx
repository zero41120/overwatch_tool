/* @vitest-environment jsdom */
import "@testing-library/jest-dom"
import React from 'react'
import { render } from '@testing-library/react'
import ResultsSection from '../ResultsSection'
import type { Item, ResultCombo } from '../../types'

const eqItems: Item[] = [
  { id: '1', name: 'Sword', cost: 100, tab: 'weapon', rarity: 'common', attributes: [] }
]
const results: ResultCombo = {
  score: 10,
  cost: 50,
  items: [{ id: '2', name: 'Shield', cost: 50, tab: 'armor', rarity: 'rare', attributes: [] }],
  breakdown: [{ type: 'AP', sum: 5, contrib: 5 }]
}

const alternatives: ResultCombo[] = [
  { score: 8, cost: 40, items: [], breakdown: [] }
]

describe('ResultsSection', () => {
  it('renders placeholder when no results', () => {
    const { getByText } = render(
      <ResultsSection eqItems={[]} eqCost={0} cash={0} results={null} alternatives={[]} />
    )
    expect(getByText('No results yet')).toBeInTheDocument()
  })

  it('shows result details', () => {
    const { getByText } = render(
      <ResultsSection eqItems={eqItems} eqCost={100} cash={200} results={results} alternatives={alternatives} />
    )
    expect(getByText('Final Build')).toBeInTheDocument()
    expect(getByText('Alternative Builds')).toBeInTheDocument()
    expect(getByText('Cost: 40')).toBeInTheDocument()
  })
})
