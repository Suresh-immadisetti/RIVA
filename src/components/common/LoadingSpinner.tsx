const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-primary-600 animate-spin"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-4 border-b-4 border-secondary-400 animate-spin" style={{animationDuration: '1.5s'}}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;