const Footer = () => {
  return (
    <footer className="bg-deep-moss text-enamel">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-inter font-bold text-lg mb-4">ExamPortal</h4>
            <p className="font-inter font-medium text-enamel/80">
              Providing secure and reliable online examination solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-inter font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="font-inter font-medium text-enamel/80 hover:text-burnt-orange transition">About</a></li>
              <li><a href="/contact" className="font-inter font-medium text-enamel/80 hover:text-burnt-orange transition">Contact</a></li>
              <li><a href="/help" className="font-inter font-medium text-enamel/80 hover:text-burnt-orange transition">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-inter font-bold text-lg mb-4">Contact</h4>
            <ul className="font-inter font-medium text-enamel/80 space-y-2">
              <li>support@examportal.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-enamel/20 mt-8 pt-8 text-center">
          <p className="font-inter font-medium text-enamel/60">&copy; 2024 ExamPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;