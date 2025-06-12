/* @vitest-environment jsdom */
import "@testing-library/jest-dom"
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'
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
      <Provider store={store}>
        <ResultsSection eqItems={[]} eqCost={0} cash={0} results={null} alternatives={[]} />
      </Provider>
    )
    expect(getByText('No results yet')).toBeInTheDocument()
  })

  it('shows result details', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ResultsSection eqItems={eqItems} eqCost={100} cash={200} results={results} alternatives={alternatives} />
      </Provider>
    )
    const list = getByText('Final Build').nextElementSibling as HTMLUListElement
    expect(list).toHaveClass('grid')
    expect(list).toHaveClass('grid-cols-1')
    expect(list).toHaveClass('sm:grid-cols-2')
    expect(list).toHaveClass('lg:grid-cols-3')
    expect(getByText('Alternative Builds')).toBeInTheDocument()
    expect(getByText('Cost: 40')).toBeInTheDocument()
  })

  it('adds item to avoid list on click', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <ResultsSection eqItems={eqItems} eqCost={100} cash={200} results={results} alternatives={[]} />
      </Provider>
    )
    fireEvent.click(getByLabelText('Avoid Shield'))
    const state = store.getState()
    expect(state.input.present.avoid).toContain('2')
    expect(state.input.present.avoidEnabled).toBe(true)
  })
})
