import { useEffect, useRef } from 'react'
import './RosterBuilding.css'

// Each NPC is one role in the crew system, positioned by hand (left/bottom
// as % of the building image) rather than laid out by CSS — the building
// image has real rooms drawn into it, so positions have to match the art.
const NPCS = [
  { id: 'forge-dev', left: '6.4%', bottom: '28.5%', bobDelay: '0.1s', skin: '#ffdbac', hair: '#7fe07a', shirt: '#4f7d4a', pants: '#2f4e2c', hairStyle: 'short' },
  { id: 'forge-ux', left: '10.6%', bottom: '28.3%', bobDelay: '0.3s', skin: '#f1c27d', hair: '#ffd166', shirt: '#2f9e9e', pants: '#1d6363', hairStyle: 'long' },
  { id: 'forge-brand', left: '15.1%', bottom: '28.1%', bobDelay: '0.5s', skin: '#e0ac69', hair: '#ffd166', shirt: '#c2508a', pants: '#7a2f57', hairStyle: 'bun' },
  { id: 'forge-architect', left: '20.6%', bottom: '28.4%', bobDelay: '0.7s', skin: '#c68642', hair: '#9fd8ff', shirt: '#4c6fa5', pants: '#2e4468', hairStyle: 'short' },
  { id: 'forge-qa', left: '26%', bottom: '27.7%', bobDelay: '0.9s', skin: '#8d5524', hair: '#ffd23f', shirt: '#c1443a', pants: '#7a2a22', hairStyle: 'long' },
  { id: 'forge-devops', left: '32.1%', bottom: '27.9%', bobDelay: '1.1s', skin: '#ffdbac', hair: '#ffd166', shirt: '#e08a3d', pants: '#8c5424', hairStyle: 'bun' },
  { id: 'forge-pm', left: '37.3%', bottom: '27.7%', bobDelay: '1.3s', skin: '#f1c27d', hair: '#ff8c69', shirt: '#6b4fa0', pants: '#402f60', hairStyle: 'short' },
  { id: 'tpl-investigator', left: '73.4%', bottom: '27.3%', bobDelay: '0.2s', skin: '#e0ac69', hair: '#d4e157', shirt: '#2e3a6b', pants: '#1a2140', hairStyle: 'long' },
  { id: 'tpl-architect', left: '79.2%', bottom: '27.5%', bobDelay: '0.4s', skin: '#c68642', hair: '#7fd4d8', shirt: '#2a5a5e', pants: '#163336', hairStyle: 'bun' },
  { id: 'tpl-integrator', left: '83.9%', bottom: '27.3%', bobDelay: '0.6s', skin: '#8d5524', hair: '#6ee0a8', shirt: '#2e5a4a', pants: '#1a332b', hairStyle: 'short' },
  { id: 'tpl-operator', left: '88.7%', bottom: '27.5%', bobDelay: '0.8s', skin: '#ffdbac', hair: '#b88fe8', shirt: '#4a3a6b', pants: '#2a1f3f', hairStyle: 'long' },
  { id: 'tpl-sentinel', left: '94.9%', bottom: '27.2%', bobDelay: '1s', skin: '#f1c27d', hair: '#8fb3e8', shirt: '#2f3a52', pants: '#1a2130', hairStyle: 'bun' },
  { id: 'friday', left: '88.2%', bottom: '72.2%', bobDelay: '0.15s', skin: '#e0ac69', hair: '#8fd9e8', shirt: '#e8b84b', pants: '#a67f2e', hairStyle: 'short' },
  { id: 'darkling', left: '11.6%', bottom: '72.6%', bobDelay: '0.45s', skin: '#c68642', hair: '#b06fe8', shirt: '#232042', pants: '#131226', hairStyle: 'long' },
  { id: 'recon-po', left: '6.1%', bottom: '51.6%', bobDelay: '0.25s', skin: '#8d5524', hair: '#ffdd88', shirt: '#c98a3d', pants: '#8a5c26', hairStyle: 'bun' },
  { id: 'recon-data', left: '25.6%', bottom: '51.6%', bobDelay: '0.55s', skin: '#ffdbac', hair: '#6ee7b7', shirt: '#4a6b7a', pants: '#2c4048', hairStyle: 'short' },
  { id: 'recon-design', left: '35.7%', bottom: '51.6%', bobDelay: '0.85s', skin: '#f1c27d', hair: '#ff9ecb', shirt: '#7a5ba0', pants: '#493768', hairStyle: 'long' },
  { id: 'recon-functional', left: '71.2%', bottom: '51.7%', bobDelay: '1.05s', skin: '#e0ac69', hair: '#c9e07a', shirt: '#6b7d4a', pants: '#3f4a2c', hairStyle: 'bun' },
  { id: 'recon-market', left: '79.8%', bottom: '51.6%', bobDelay: '1.25s', skin: '#c68642', hair: '#ffb648', shirt: '#c1573a', pants: '#7a3420', hairStyle: 'short' },
  { id: 'recon-feasibility', left: '91.3%', bottom: '51.3%', bobDelay: '1.45s', skin: '#8d5524', hair: '#b8d4e0', shirt: '#6a7a8a', pants: '#3f4a54', hairStyle: 'long' },
  { id: 'analyst', left: '11%', bottom: '3.6%', bobDelay: '0.35s', skin: '#ffdbac', hair: '#e8735a', shirt: '#d9a441', pants: '#8c6a28', hairStyle: 'bun' },
  { id: 'chronicler', left: '81.4%', bottom: '3.5%', bobDelay: '0.65s', skin: '#f1c27d', hair: '#e8d4a0', shirt: '#a68a5a', pants: '#6b5636', hairStyle: 'short' },
]

const LABELS = [
  { text: 'CHIEF OF STAFF', left: '88.9%', top: '10.5%' },
  { text: 'NIGHT AGENT', left: '21.6%', top: '10.5%' },
  { text: 'PO', left: '9%', top: '29.6%' },
  { text: 'DATA', left: '22.4%', top: '29.3%' },
  { text: 'DESIGN', left: '36.3%', top: '29.5%' },
  { text: 'FUNCTIONAL', left: '70.8%', top: '29.7%' },
  { text: 'MARKET', left: '79.8%', top: '29.5%' },
  { text: 'FEASIBILITY', left: '90.9%', top: '29.9%' },
  { text: 'FORGE', left: '21.9%', top: '50.4%' },
  { text: 'NIGHTWATCH', left: '82.6%', top: '50.8%' },
  { text: 'ANALYST', left: '9%', top: '75%' },
  { text: 'CHRONICLER', left: '82%', top: '75%' },
]

const STATUS_PHRASES = {
  idle: ['Zzz...', 'Just resting...', 'Taking a break...', 'Hmm...'],
  working: ['Working...', 'Getting productive...', 'On it...', 'Focused...'],
}

function Npc({ npc }) {
  const bubbleRef = useRef(null)

  useEffect(() => {
    let timeoutId
    let working = Math.random() < 0.45

    const setPhrase = () => {
      if (!bubbleRef.current) return
      const list = STATUS_PHRASES[working ? 'working' : 'idle']
      bubbleRef.current.textContent = list[Math.floor(Math.random() * list.length)]
    }

    const tick = () => {
      working = Math.random() < 0.45
      setPhrase()
      timeoutId = setTimeout(tick, 4500 + Math.random() * 5000)
    }

    setPhrase()
    const startDelay = 800 + Math.random() * 2000
    timeoutId = setTimeout(tick, startDelay)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div
      className="npc"
      style={{
        left: npc.left,
        bottom: npc.bottom,
        '--bob-delay': npc.bobDelay,
        '--skin': npc.skin,
        '--hair': npc.hair,
        '--shirt': npc.shirt,
        '--pants': npc.pants,
      }}
    >
      <div className={`hair-style-${npc.hairStyle}`} />
      <div className="head" />
      <div className="torso" />
      <div className="legs" />
      <div className="bubble" ref={bubbleRef} />
    </div>
  )
}

// The pixel-art office cutaway showing every role in the crew system, one
// building, floor by floor. Deliberately not re-themed with the rest of the
// site (it's a fixed night-office scene, not something that should re-skin
// under light/dark) — same reasoning as the original Artifact build.
export default function RosterBuilding() {
  const shellRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const shell = shellRef.current
    if (!shell) return

    const lift = document.createElement('div')
    lift.className = 'lift-car'
    lift.style.left = '49.5%'
    lift.style.top = '6px'
    shell.appendChild(lift)

    let rafId
    const loop = (now) => {
      const shellHeight = shell.offsetHeight
      const liftHeightPx = shellHeight * 0.045
      const maxTop = shellHeight - liftHeightPx - 6
      const t = (Math.sin(now * 0.0003) + 1) / 2
      lift.style.top = `${6 + t * (maxTop - 6)}px`
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafId)
      lift.remove()
    }
  }, [])

  return (
    <div className="roster-embed">
      <div className="building-title">GINO&rsquo;S AGENTIC LTD.</div>
      <div className="building-shell" ref={shellRef}>
        {NPCS.map((npc) => (
          <Npc key={npc.id} npc={npc} />
        ))}
        <div className="nightwatch-tint" style={{ left: '65.5%', top: '49%', width: '33.75%', height: '23.4%' }} />
        {LABELS.map((label) => (
          <div key={label.text} className="room-title" style={{ left: label.left, top: label.top }}>
            {label.text}
          </div>
        ))}
      </div>
    </div>
  )
}
