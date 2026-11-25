import { Route, Routes } from 'react-router-dom'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import DiscoveryPage from './pages/DiscoveryPage'
import ProfilePage from './pages/ProfilePage'
import OpportunitiesPage from './pages/OpportunitiesPage'
import OpportunityDetailsPage from './pages/OpportunityDetailsPage'
import DashboardPage from './pages/DashboardPage'
import NotFoundPage from './pages/NotFoundPage'

function PublicLayout({ children }: { children: React.ReactNode }) { return <><SiteHeader />{children}<SiteFooter /></> }
export default function App() {
  return <Routes>
    <Route path="/" element={<PublicLayout><LandingPage /></PublicLayout>} />
    <Route path="/register" element={<PublicLayout><AuthPage mode="register" /></PublicLayout>} />
    <Route path="/login" element={<PublicLayout><AuthPage mode="login" /></PublicLayout>} />
    <Route path="/discover" element={<PublicLayout><DiscoveryPage /></PublicLayout>} />
    <Route path="/actors/:id" element={<PublicLayout><ProfilePage /></PublicLayout>} />
    <Route path="/opportunities" element={<PublicLayout><OpportunitiesPage /></PublicLayout>} />
    <Route path="/opportunities/:id" element={<PublicLayout><OpportunityDetailsPage /></PublicLayout>} />
    <Route path="/dashboard" element={<DashboardPage role="actor" />} />
    <Route path="/filmmaker" element={<DashboardPage role="filmmaker" />} />
    <Route path="*" element={<PublicLayout><NotFoundPage /></PublicLayout>} />
  </Routes>
}
