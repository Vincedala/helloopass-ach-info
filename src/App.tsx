import React, { useState } from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { EconomicCellsPage } from './components/EconomicCellsPage';
import { CommunityTradingPage } from './components/CommunityTradingPage';
import { DeveloperPage } from './components/DeveloperPage';
import { BNPLPage } from './components/BNPLPage';
import { ConnectCommunitiesPage } from './components/ConnectCommunitiesPage';
import { CommunitiesPage } from './components/CommunitiesPage';
import { ArchitecturePage } from './components/ArchitecturePage';
import AutomatedClearingHousePage from './components/AutomatedClearingHousePage';
import { Dashboard } from './components/Dashboard';
import { ShopPage } from './components/ShopPage';
import { OnlinePaymentPage } from './components/OnlinePaymentPage';
import Footer from './components/Footer';

export type ViewState = 
  | 'landing' 
  | 'economic-cells' 
  | 'community-trading' 
  | 'developers' 
  | 'bnpl' 
  | 'connect-communities' 
  | 'communities' 
  | 'architecture' 
  | 'dashboard'
  | 'automated-clearing-house'
  | 'shop'
  | 'online-payment';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage onEnterApp={() => setCurrentView('dashboard')} />;
      case 'economic-cells':
        return <EconomicCellsPage />;
      case 'community-trading':
        return <CommunityTradingPage />;
      case 'developers':
        return <DeveloperPage />;
      case 'bnpl':
        return <BNPLPage />;
      case 'connect-communities':
        return <ConnectCommunitiesPage />;
      case 'communities':
        return <CommunitiesPage />;
      case 'architecture':
        return <ArchitecturePage />;
      case 'automated-clearing-house':
        return <AutomatedClearingHousePage />;
      case 'dashboard':
        return <Dashboard />;
      case 'shop':
        return <ShopPage />;
      case 'online-payment':
        return <OnlinePaymentPage />;
      default:
        return <LandingPage onEnterApp={() => setCurrentView('dashboard')} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 overflow-x-hidden selection:bg-[#008752]/30">
      <Navbar setView={setCurrentView} currentView={currentView} />
      <main>
        {renderView()}
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;