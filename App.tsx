
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store, RootState } from './store/store';
import { ProfileHeader } from './components/ProfileHeader';
import { LinkCard } from './components/LinkCard';

const MainContent: React.FC = () => {
  const links = useSelector((state: RootState) => state.links.links);

  return (
    <div className="min-h-screen bg-zinc-300 flex items-center justify-center p-0">
      {/* Central Content Container - Square edges, mobile-width on desktop, white background */}
      <div className="w-full max-w-md h-screen md:h-[90vh] bg-white relative flex flex-col overflow-hidden shadow-2xl border-x border-zinc-400/10">
        
        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-10 pb-24">
          <ProfileHeader />
          
          <div className="space-y-1">
            {links.map((link) => (
              <LinkCard key={link.id} item={link} />
            ))}
          </div>

          {/* Footer Watermark */}
          
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainContent />
    </Provider>
  );
};

export default App;
