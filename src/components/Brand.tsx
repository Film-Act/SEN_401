import { Clapperboard } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Brand({ light = false }: { light?: boolean }) {
  return <Link className={`brand ${light ? 'brand-light' : ''}`} to="/" aria-label="Film_ACT home"><span className="brand-mark"><Clapperboard size={19} strokeWidth={2.2} /></span><span>Film<span className="brand-accent">_ACT</span></span></Link>
}
