import './App.css'
import Router from './router'
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './layout';
import JotaiProvider from './utils/jotai/JotaiProvider';

function App() {
  return (
    <BrowserRouter>
      <JotaiProvider>
        <AppLayout>
          <Router />
        </AppLayout>
      </JotaiProvider>
    </BrowserRouter>
  )
}

export default App
