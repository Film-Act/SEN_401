import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowUpRight, BadgeCheck, Clapperboard, Film, MapPin, MessageCircle, Play, Plus } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { actors } from '../data/mockData'

export default function ProfilePage() {
  const { id } = useParams()
  const actor = actors.find(item => item.id === id) || actors[0]
  const [connected, setConnected] = useState(false)
  const [reel, setReel] = useState(false)
  const [editing, setEditing] = useState(false)
  const [savedBio, setSavedBio] = useState(actor.bio)
  const [draftBio, setDraftBio] = useState(actor.bio)

  useEffect(() => {
    const value = localStorage.getItem(`filmact-bio-${actor.id}`) || actor.bio
    setSavedBio(value)
    setDraftBio(value)
  }, [actor.id, actor.bio])

  const saveBio = (event: React.FormEvent) => {
    event.preventDefault()
    localStorage.setItem(`filmact-bio-${actor.id}`, draftBio)
    setSavedBio(draftBio)
    setEditing(false)
  }

  return <main className="profile-page"><div className="container profile-container">
    <Link className="back-link" to="/discover"><ArrowLeft size={16}/> Back to talent</Link>
    <div className="profile-cover"><img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=85" alt="Film set cover"/><span>FILM_ACT · CREATIVE DIRECTORY</span></div>
    <section className="profile-overview"><img className="profile-avatar" src={actor.image} alt={actor.name}/><div className="profile-main-info"><span className="eyebrow">ACTOR PROFILE <BadgeCheck size={15}/></span><h1>{actor.name}</h1><p>{actor.role}</p><span className="location-line"><MapPin size={15}/>{actor.location}</span></div><div className="profile-actions"><button className="button button-outline" onClick={()=>{setDraftBio(savedBio);setEditing(!editing)}}>{editing?'Cancel':'Edit profile'}</button><button className={`button ${connected?'button-outline':'button-accent'}`} onClick={()=>setConnected(!connected)}>{connected?<><BadgeCheck size={16}/> Interest noted</>:<>Connect <Plus size={16}/></>}</button><button className="button button-outline" onClick={()=>setConnected(true)}><MessageCircle size={16}/> Contact</button></div></section>
    <div className="profile-separator"/>
    {editing&&<form className="profile-edit-form" onSubmit={saveBio}><label htmlFor="profile-bio-edit">Professional introduction</label><textarea id="profile-bio-edit" value={draftBio} onChange={e=>setDraftBio(e.target.value)} maxLength={400} rows={4} required/><div><span>Saved in this browser only</span><button className="button button-accent" type="submit">Save changes</button></div></form>}
    <div className="profile-columns"><div className="profile-primary">
      <section className="profile-block"><div className="profile-block-heading"><div><span className="section-kicker">01 · THE INTRO</span><h2>A little about me</h2></div></div><p className="profile-bio">{savedBio}</p><div className="profile-facts"><div><span>EXPERIENCE</span><b>{actor.experience}</b></div><div><span>AGE RANGE</span><b>{actor.age}</b></div><div><span>LANGUAGES</span><b>{actor.languages.join(', ')}</b></div></div></section>
      <section className="profile-block"><div className="profile-block-heading"><div><span className="section-kicker">02 · THE CRAFT</span><h2>Skills & strengths</h2></div></div><div className="profile-skill-list">{actor.skills.map(skill=><span key={skill} className="profile-skill">{skill}<BadgeCheck size={14}/></span>)}</div></section>
      <section className="profile-block"><div className="profile-block-heading"><div><span className="section-kicker">03 · THE WORK</span><h2>Selected projects</h2></div><button className="text-link" onClick={()=>setReel(true)}>View demo reel <ArrowUpRight size={15}/></button></div><div className="filmography-list">{actor.projects.map((project,index)=><div className="filmography-item" key={project}><span className="film-index">0{index+1}</span><span className="film-icon"><Film size={17}/></span><div><b>{project}</b><small>{['Feature film','Short film','Stage production'][index%3]}</small></div><ArrowUpRight size={16}/></div>)}</div></section>
    </div><aside className="profile-aside"><div className="reel-card"><div className="reel-visual"><div className="reel-pattern">{Array.from({length:14},(_,index)=><i key={index}/>)}</div><button aria-label="Play demo reel" onClick={()=>setReel(true)} className="reel-play"><Play size={19} fill="currentColor"/></button><span>DEMO REEL · 02:34</span></div><div className="reel-copy"><b>On camera, in character.</b><p>A quick look at my recent work and range.</p><button onClick={()=>setReel(true)} className="text-link">Watch reel <ArrowUpRight size={15}/></button></div></div><div className="profile-note"><span className="profile-note-icon"><Clapperboard size={18}/></span><h3>Making something?</h3><p>I'm open to the right stories and the right people.</p><span className="available-label"><i/> OPEN TO OPPORTUNITIES</span></div><div className="profile-contact"><span className="section-kicker">BASED IN</span><p><MapPin size={15}/>{actor.location}</p><span className="section-kicker">WORKS IN</span><p>Film · Television · Stage</p></div></aside></div>
  </div>{reel&&<div className="modal-backdrop" onClick={()=>setReel(false)}><div className="demo-modal" onClick={event=>event.stopPropagation()}><button className="modal-close" onClick={()=>setReel(false)}>×</button><div className="demo-placeholder"><Play size={33}/><p>Demo reel preview</p><small>Sample portfolio media · Playback simulated</small></div></div></div>}</main>
}
