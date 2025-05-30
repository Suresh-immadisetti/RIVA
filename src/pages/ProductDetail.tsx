import { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft, ChevronRight, Info, ChevronLeft, ChevronRight as RightIcon } from 'lucide-react';
import { products, Product } from '../data/products';

const ProductDetail = () => {
  const { id, category } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        navigate('/products', { replace: true });
      }
    }
    window.scrollTo(0, 0);
  }, [id, navigate]);

  // Auto slide functionality
  useEffect(() => {
    if (!product || !autoPlay) return;

    intervalRef.current = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % product.images.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [product, autoPlay]);

  const handlePrevImage = () => {
    setAutoPlay(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentImageIndex(prev => (prev === 0 ? product!.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setAutoPlay(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentImageIndex(prev => (prev + 1) % product!.images.length);
  };

  const handleImageSelect = (index: number) => {
    setAutoPlay(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentImageIndex(index);
  };

  const handleWhatsAppInquiry = () => {
    if (product) {
      const text = `Hello RIVA Power Solutions, I'm interested in the ${product.name}. Could you please provide more information?`;
      window.open(`https://wa.me/916300021355?text=${encodeURIComponent(text)}`, '_blank');
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/placeholder-product.jpg';
    target.className = 'w-full h-full object-contain bg-gray-100 p-4';
  };

  if (!product) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-slate-700 mb-2">Product not found</h3>
            <p className="text-slate-600 mb-6">The product you're looking for might have been removed or doesn't exist.</p>
            <Link to="/products" className="btn-primary">
              Browse All Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Get related products (same category, different product)
  const relatedProducts = products.filter(
    p => p.category.toLowerCase().replace(/\s+/g, '-') === category && p.id !== product.id
  ).slice(0, 3);

  // Function to format category for display
  const formatCategoryName = (cat: string | undefined) => {
    if (!cat) return '';
    return cat
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
      .replace(/Atms/i, "ATM's");
  };

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-white py-3 border-b border-slate-200">
        <div className="container-custom">
          <div className="flex items-center text-sm overflow-x-auto whitespace-nowrap">
            <Link to="/" className="text-slate-500 hover:text-primary-700">Home</Link>
            <ChevronRight size={14} className="mx-2 text-slate-400" />
            <Link to="/products" className="text-slate-500 hover:text-primary-700">Products</Link>
            <ChevronRight size={14} className="mx-2 text-slate-400" />
            <Link to={`/products/${category}`} className="text-slate-500 hover:text-primary-700">
              {formatCategoryName(category)}
            </Link>
            <ChevronRight size={14} className="mx-2 text-slate-400" />
            <span className="text-slate-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="section bg-white pt-8 pb-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="sticky top-24 self-start"
            >
              {/* Main Image with Navigation */}
              <div className="relative mb-4 aspect-square bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src={product.images[currentImageIndex]} 
                  alt={`${product.name} - View ${currentImageIndex + 1}`} 
                  className="w-full h-full object-contain p-6"
                  onError={handleImageError}
                  loading="lazy"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 rounded-full p-2 shadow-md transition-all hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 rounded-full p-2 shadow-md transition-all hover:scale-110"
                  aria-label="Next image"
                >
                  <RightIcon size={24} />
                </button>
                
                {/* Auto-play toggle */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <button 
                    onClick={() => setAutoPlay(!autoPlay)}
                    className={`px-3 py-1 text-xs rounded-full ${autoPlay ? 'bg-primary-600 text-white' : 'bg-white/80 text-slate-700'}`}
                  >
                    {autoPlay ? 'Pause' : 'Play'} Auto View
                  </button>
                </div>
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="grid grid-cols-6 gap-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageSelect(index)}
                    className={`aspect-square rounded-md overflow-hidden border-2 flex items-center justify-center bg-gray-50 transition-all ${
                      currentImageIndex === index ? 'border-primary-500 scale-105' : 'border-transparent hover:border-slate-300'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img 
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-contain p-1"
                      onError={handleImageError}
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
            
            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                  {formatCategoryName(category)}
                </span>
                <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-slate-900 mb-4">{product.name}</h1>
              
              <p className="text-lg text-slate-700 mb-6">{product.description}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <Info size={12} />
                      </span>
                      <div>
                        <span className="text-slate-700 font-medium">{feature.name}</span>
                        {feature.description && (
                          <p className="text-slate-500 text-sm mt-1">{feature.description}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4 mb-8">
                <button 
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center justify-center space-x-2 transition"
                >
                  <MessageCircle size={18} />
                  <span>Inquire on WhatsApp</span>
                </button>
                
                <Link 
                  to={`/contact/email?product=${encodeURIComponent(product.name)}`}
                  className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md flex items-center justify-center space-x-2 transition"
                >
                  <span>Email Inquiry</span>
                </Link>
              </div>
              
              {product.specifications && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Specifications</h3>
                  <div className="bg-slate-50 rounded-md border border-slate-200 overflow-hidden">
                    <table className="w-full">
                      <tbody>
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <tr key={key} className="border-b border-slate-200 last:border-b-0">
                            <td className="py-3 px-4 text-slate-700 font-medium">{key}</td>
                            <td className="py-3 px-4 text-slate-600">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Need assistance?</span> Our team is available to help you choose the right product for your requirements. 
                  Contact us for technical specifications and more information.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-8">
            <Link 
              to={`/products/${category}`}
              className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium"
            >
              <ArrowLeft size={16} className="mr-2" />
              <span>Back to {formatCategoryName(category)}</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="card overflow-hidden group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Link 
                    to={`/products/${relatedProduct.category.toLowerCase().replace(/\s+/g, '-')}/${relatedProduct.id}`} 
                    className="block"
                  >
                    <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name} 
                        className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                        onError={handleImageError}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-3 mb-3">
                        {relatedProduct.description}
                      </p>
                      <div className="flex items-center text-primary-700 font-medium text-sm">
                        <span>View Details</span>
                        <ChevronRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;