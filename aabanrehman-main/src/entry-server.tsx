import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { TooltipProvider } from './components/ui/tooltip';
import { PortfolioRoutes } from './App';
import { projects, certificates, profile, services, projectSlug } from './content';

// Render the same routes at build time: crawlers and visitors receive real content
// before JavaScript loads, without introducing a production application server.
export const render = (url: string) => renderToString(<StaticRouter location={url}><TooltipProvider><PortfolioRoutes /></TooltipProvider></StaticRouter>);
export const content = { projects, certificates, profile, services, projectSlug };
