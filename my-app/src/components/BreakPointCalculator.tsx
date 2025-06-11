import { useState } from 'react'

import { calculateBreakpoints } from '../utils/breakpoint'
import type { BreakPointResult } from '../utils/breakpoint'

export default function BreakPointCalculator() {
  const [collapsed, setCollapsed] = useState(true)
  const [damage, setDamage] = useState(10)
  const [bullets, setBullets] = useState(1)
  const [hp, setHp] = useState(100)
  const [armor, setArmor] = useState(0)
  const [penetrate, setPenetrate] = useState(false)
  const [rows, setRows] = useState<BreakPointResult[]>([])
  const onCalc = () => {
    setRows(calculateBreakpoints(damage, bullets, hp, armor, penetrate))
  }

  const finiteRows = rows.filter(r => Number.isFinite(r.shots))
  const maxShots = Math.max(...finiteRows.map(r => r.shots), 1)
  const points = finiteRows
    .map(r => {
      const x = r.percent
      const y = 100 - (r.shots / maxShots) * 100
      return `${x},${y}`
    })
    .join(' ')

  return (
    <div className="bg-white rounded-xl shadow-lg">
      <button
        className="w-full text-left p-4 font-bold text-xl border-b"
        onClick={() => setCollapsed(!collapsed)}
      >
        Break Point Damage Calculator
      </button>
      {!collapsed && (
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <label className="space-y-1">
              <span className="block text-sm">Damage per Bullet</span>
              <input type="number" value={damage} onChange={e => setDamage(Number(e.target.value))} className="w-full border rounded p-1" />
            </label>
            <label className="space-y-1">
              <span className="block text-sm">Bullets per Shot</span>
              <input type="number" value={bullets} onChange={e => setBullets(Number(e.target.value))} className="w-full border rounded p-1" />
            </label>
            <label className="space-y-1">
              <span className="block text-sm">Enemy HP</span>
              <input type="number" value={hp} onChange={e => setHp(Number(e.target.value))} className="w-full border rounded p-1" />
            </label>
            <label className="space-y-1">
              <span className="block text-sm">Enemy Armor</span>
              <input type="number" value={armor} onChange={e => setArmor(Number(e.target.value))} className="w-full border rounded p-1" />
            </label>
            <label className="flex items-center space-x-2 mt-6">
              <input type="checkbox" checked={penetrate} onChange={e => setPenetrate(e.target.checked)} />
              <span>Using armor penetration item</span>
            </label>
          </div>
          <button onClick={onCalc} className="bg-indigo-600 text-white px-4 py-1 rounded">Calculate</button>
          {rows.length > 0 && (
            <>
              <div className="h-64">
                <svg viewBox="0 0 100 100" className="w-full h-full bg-gray-50">
                  <polyline fill="none" stroke="teal" strokeWidth="2" points={points} />
                </svg>
              </div>
              <table className="w-full text-sm mt-4 border" >
                <thead>
                  <tr>
                    <th className="border px-2 py-1">Damage %</th>
                    <th className="border px-2 py-1">Shots</th>
                    <th className="border px-2 py-1">Accumulated Damage</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, idx) => {
                    const prev = idx > 0 ? rows[idx - 1].shots : r.shots
                    const highlight = r.shots < prev
                    return (
                      <tr key={r.percent} className={highlight ? 'bg-yellow-100' : ''}>
                        <td className="border px-2 py-1">{r.percent}%</td>
                        <td className="border px-2 py-1">{r.shots}</td>
                        <td className="border px-2 py-1">{r.totalDamage.toFixed(1)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </>
          )}
        </div>
      )}
    </div>
  )
}
