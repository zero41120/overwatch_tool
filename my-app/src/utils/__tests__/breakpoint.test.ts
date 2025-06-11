import { calculateBreakpoints } from '../breakpoint'

describe('calculateBreakpoints', () => {
  it('computes decreasing shots with higher percent', () => {
    const rows = calculateBreakpoints(10, 1, 20, 0, false)
    const shots = rows.map(r => r.shots)
    expect(shots[0]).toBeGreaterThan(shots[shots.length - 1])
  })

  it('handles zero damage without infinite loop', () => {
    const rows = calculateBreakpoints(0, 1, 20, 0, false)
    expect(rows[0].shots).toBe(Infinity)
  })
})
