import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Filter, X } from 'lucide-react';
import { products, Product } from '../data/products';

type Category = {
  id: string;
  name: string;
  description?: string;
};

const getCategories = (): Category[] => {
  const categoryMap = new Map<string, Category>();

  products.forEach((product) => {
    if (!categoryMap.has(product.category)) {
      categoryMap.set(product.category, {
        id: product.category,
        name: product.category.charAt(0).toUpperCase() + product.category.slice(1).replace(/-/g, ' '),
      });
    }
  });

  return [
    { id: 'all', name: 'All Products', description: 'Explore our complete range of water purification solutions' },
    ...Array.from(categoryMap.values()),
  ];
};

const Products = () => {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>(category || 'all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const categories: Category[] = getCategories();

  useEffect(() => {
    if (category && category !== 'all') {
      setActiveCategory(category);
      setFilteredProducts(products.filter(p => p.category === category));
    } else {
      setActiveCategory('all');
      setFilteredProducts(products);
    }
  }, [category]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    navigate(`/products/${categoryId === 'all' ? '' : categoryId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/placeholder-product.jpg';
    target.className = 'w-full h-full object-contain bg-gray-100 p-4';
  };

  return (
    <div className="pt-16">
      {/* Banner */}
      <section className="relative h-[40vh] flex items-center bg-gradient-to-r from-primary-900 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/banner-bg.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="container-custom relative z-10 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            {activeCategory === 'all' ? 'Our Products' : 
              categories.find(c => c.id === activeCategory)?.name || 'Products'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto"
          >
            {activeCategory === 'all' 
              ? 'Explore our complete range of water purification solutions'
              : categories.find(c => c.id === activeCategory)?.description || 'Browse our quality products'}
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-6 sticky top-16 shadow-sm z-30">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-800">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
            </h2>
            <button className="md:hidden btn-outline" onClick={() => setIsFilterOpen(!isFilterOpen)}>
              <Filter size={18} className="mr-2" />
              <span>Filter</span>
            </button>
            <div className="hidden md:flex space-x-2">
              {categories.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === cat.id 
                      ? 'bg-primary-700 text-white' 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {isFilterOpen && (
            <div className="md:hidden mt-4 bg-slate-50 p-4 rounded-md">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Filter by Category</h3>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X size={18} />
                </button>
              </div>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => {
                      handleCategoryChange(cat.id);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeCategory === cat.id 
                        ? 'bg-primary-700 text-white' 
                        : 'bg-white text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Product Grid */}
      <section className="section bg-slate-50 pt-8">
        <div className="container-custom">
          {filteredProducts.length > 0 ? (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map(product => (
                <motion.div 
                  key={product.id} 
                  variants={itemVariants} 
                  className="card overflow-hidden group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link to={`/products/${product.category}/${product.id}`} className="block">
                    <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                        onError={handleImageError}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-primary-900 mb-1">{product.name}</h3>
                      <p className="text-slate-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex items-center text-sm text-slate-500">
                        <span>View details</span>
                        <ArrowRight size={14} className="ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-700 mb-4">No products found in this category.</p>
              <button 
                onClick={() => handleCategoryChange('all')}
                className="btn-primary"
              >
                Browse All Products
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;