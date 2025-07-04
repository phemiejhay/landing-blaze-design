
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-6">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <span className="text-xl">𝕏</span>
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              Terms
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Built with ❤️ by indie devs for indie builders
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2024 OutreachOS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
