export type AccountType = 'actor' | 'filmmaker'
export interface Actor {
  id: string; name: string; role: string; location: string; age: string; bio: string
  skills: string[]; experience: string; image: string; projects: string[]; languages: string[]
}
export interface Opportunity {
  id: string; title: string; production: string; type: string; location: string; pay: string
  posted: string; description: string; skills: string[]; image: string; filmmaker: string
}
