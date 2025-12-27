import RouteConfig from "./route/RouteConfig";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'var(--color-surface)',
            color: 'var(--color-text-primary)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            fontSize: '14px',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: '#FFFFFF',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#FFFFFF',
            },
          },
        }}
      />
      <BrowserRouter>
        <ScrollToTop />
        <RouteConfig />
      </BrowserRouter>
    </>
  );
}

export default App;
