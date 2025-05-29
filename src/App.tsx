import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import WhatsAppPopup from './components/common/WhatsAppPopup';
import Chatbot from './components/common/Chatbot';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const ContactEmail = lazy(() => import('./pages/ContactEmail'));
const ContactWhatsApp = lazy(() => import('./pages/ContactWhatsApp'));

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/products/:category/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/email" element={<ContactEmail />} />
            <Route path="/contact/whatsapp" element={<ContactWhatsApp />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppPopup />
      <Chatbot />
    </div>
  );
}

export default App;