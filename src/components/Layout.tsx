import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CustomCursor } from '@/components/CustomCursor'
import { LoadingScreen } from '@/components/LoadingScreen'
import { FloatingPetals } from '@/components/FloatingPetals'

export default function Layout() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a1a2f]">
      <LoadingScreen />
      <CustomCursor />
      <FloatingPetals />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}
