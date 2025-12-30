import React from 'react';
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HomePage } from './components/pages/HomePage'
import { LoginPage } from './components/pages/LoginPage'
import { ColoringPage } from './components/pages/ColoringPage'
import { StoriesPage } from './components/pages/StoriesPage'
import { StorePage } from './components/pages/StorePage'
import { GamesPage } from './components/pages/GamesPage'
import { ContactPage } from './components/pages/ContactPage'
import { PrivacyPage } from './components/pages/PrivacyPage'
import { TermsPage } from './components/pages/TermsPage'

import { initSupabase } from './lib/supabase';

function App({ supabaseUrl, supabaseAnonKey }) {
  initSupabase(supabaseUrl, supabaseAnonKey);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gati-bg relative overflow-x-hidden">
        {/* Background Watermark Gatisaurio */}
        <div className="fixed -bottom-20 -right-20 md:-bottom-40 md:-right-40 w-[500px] h-[500px] md:w-[800px] md:h-[800px] pointer-events-none z-0 opacity-5 mix-blend-multiply">
          <img src="/img/personajes/burbujasaurio.svg" alt="Fondo" className="w-full h-full object-contain transform -rotate-12" />
        </div>

        <Navbar />
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/coloring" element={<ColoringPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/juegos" element={<GamesPage />} />
            <Route path="/tienda" element={<StorePage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/privacidad" element={<PrivacyPage />} />
            <Route path="/terminos" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
