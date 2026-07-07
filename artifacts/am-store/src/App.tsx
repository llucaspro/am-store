import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { useState, useEffect } from 'react';

import Home from '@/pages/Home';
import Colecao from '@/pages/Colecao';
import Sobre from '@/pages/Sobre';
import Contato from '@/pages/Contato';
import NotFound from '@/pages/not-found';
import { LoginSplash } from '@/pages/LoginSplash';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/colecao" component={Colecao} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/contato" component={Contato} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [hasEntered, setHasEntered] = useState<boolean | null>(null);

  useEffect(() => {
    const entered = localStorage.getItem('am-store-entered');
    if (entered) {
      setHasEntered(true);
    } else {
      setHasEntered(false);
    }
  }, []);

  if (hasEntered === null) {
    return <div className="min-h-screen bg-black" />; // prevent flash
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {!hasEntered && (
          <LoginSplash onEnter={() => {
            localStorage.setItem('am-store-entered', 'true');
            setHasEntered(true);
          }} />
        )}
        
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
