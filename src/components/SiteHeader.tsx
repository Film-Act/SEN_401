import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Brand from './Brand'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="site-header"><div className="container nav-wrap"><Brand /><button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav className={`main-nav ${open ? 'nav-open' : ''}`}><NavLink onClick={close} to="/">Home</NavLink><NavLink onClick={close} to="/discover">Discover talent</NavLink><NavLink onClick={close} to="/opportunities">Opportunities</NavLink><a onClick={close} href="/#about">About</a><div className="mobile-actions"><Link className="button button-quiet" to="/login" onClick={close}>Log in</Link><Link className="button button-dark" to="/register" onClick={close}>Join the network <span>↗</span></Link></div></nav><div className="nav-actions"><Link className="nav-login" to="/login">Log in</Link><Link className="button button-dark button-small" to="/register">Join the network <span>↗</span></Link></div></div></header>
}
