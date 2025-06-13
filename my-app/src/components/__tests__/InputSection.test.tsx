/* @vitest-environment jsdom */
import "@testing-library/jest-dom"
import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { vi } from 'vitest'
import store from '../../store'
import type { Item } from '../../types'
import InputSection from '../input_view/InputSection'

const heroes = ['Tracer', 'Mercy']
const attrTypes = ['AP', 'WP']
const items: Item[] = []

describe('InputSection', () => {
  it('calls onSubmit when form is valid', () => {
    const onSubmit = vi.fn()
    const validate = vi.fn(() => true)
    const { container } = render(
      <Provider store={store}>
        <InputSection heroes={heroes} attrTypes={attrTypes} filteredItems={items} onSubmit={onSubmit} validate={validate} />
      </Provider>
    )
    fireEvent.submit(container.querySelector('form')!)
    expect(validate).toHaveBeenCalled()
    expect(onSubmit).toHaveBeenCalled()
  })

  it('does not submit when validate fails', () => {
    const onSubmit = vi.fn()
    const validate = vi.fn(() => false)
    const { container } = render(
      <Provider store={store}>
        <InputSection heroes={heroes} attrTypes={attrTypes} filteredItems={items} onSubmit={onSubmit} validate={validate} />
      </Provider>
    )
    fireEvent.submit(container.querySelector('form')!)
    expect(onSubmit).not.toHaveBeenCalled()
  })
})
