/* @vitest-environment jsdom */
import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ItemCard from '../ItemCard'

describe('ItemCard', () => {
  it('calls onAvoid when button clicked', () => {
    const onAvoid = vi.fn()
    const { getByLabelText } = render(
      <ItemCard
        title="Sword"
        rarity="common"
        content={[]}
        price="100"
        showAvoidButton
        onAvoid={onAvoid}
      />
    )
    fireEvent.click(getByLabelText('Avoid Sword'))
    expect(onAvoid).toHaveBeenCalled()
  })
})
