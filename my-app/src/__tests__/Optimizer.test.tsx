/* @vitest-environment jsdom */
import '@testing-library/jest-dom'
import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'
import Optimizer from '../Optimizer'

it('applies wider grid at xl screens', async () => {
  const { container } = render(
    <Provider store={store}>
      <Optimizer />
    </Provider>
  )
  await waitFor(() => {
    expect(container.querySelector('.max-w-7xl.grid')).toBeInTheDocument()
  })
  const grid = container.querySelector('.max-w-7xl.grid')
  expect(grid?.className).toContain('xl:grid-cols-[2fr_3fr]')
})
