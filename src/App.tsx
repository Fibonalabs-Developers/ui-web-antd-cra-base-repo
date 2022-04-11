import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SWRConfig } from 'swr';
import fetcher from './lib/swr';
import AboutPage from './pages/About';
import HomePage from './pages/Home';

function App() {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        refreshInterval: 0,
        fetcher: (url: string) => fetcher(url),
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </SWRConfig>
  );
}

export default App;
