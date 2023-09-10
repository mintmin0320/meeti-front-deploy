import { ColorProvider } from './ColorContext';
import { MinutesProvider } from './MinutesContext';

const Providers = ({ children }) => (
  <ColorProvider>
    <MinutesProvider>
      {children}
    </MinutesProvider>
  </ColorProvider>
);

export default Providers;