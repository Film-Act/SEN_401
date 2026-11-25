import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function NotFoundPage(){return <main className="not-found"><span className="section-kicker">SCENE NOT FOUND · 404</span><h1>This page missed<br/><em>its cue.</em></h1><p>Let’s get you back to the story.</p><Link className="button button-accent" to="/"><ArrowLeft size={16}/> Back to Film_ACT</Link></main>}
