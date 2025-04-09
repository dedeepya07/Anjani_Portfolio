import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <motion.a 
              href="#home" 
              className="text-2xl font-bold inline-block mb-4"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Portfolio
            </motion.a>
            <p className="text-muted-foreground max-w-md">
              A passionate full-stack developer and UI/UX designer with a focus on creating elegant,
              functional, and user-centered digital experiences.
            </p>
            
            <div className="mt-6 flex gap-4">
              {[
                { icon: "fab fa-github", href: "https://github.com" },
                { icon: "fab fa-linkedin", href: "https://linkedin.com" },
                { icon: "fab fa-twitter", href: "https://twitter.com" },
                { icon: "fab fa-instagram", href: "https://instagram.com" },
                { icon: "fab fa-dribbble", href: "https://dribbble.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:text-primary transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        const offset = 80;
                        const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt"></i>
                <span>San Francisco, California</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                <a href="mailto:alex@example.com" className="hover:text-primary transition-colors">
                  alex@example.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone"></i>
                <a href="tel:+14155552671" className="hover:text-primary transition-colors">
                  +1 (415) 555-2671
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-globe"></i>
                <a href="https://alexjohnson.dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  alexjohnson.dev
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>© {currentYear} Alex Johnson. All Rights Reserved.</p>
          <p className="mt-2 text-sm">
            Designed and built with <span className="text-red-500">❤</span> using React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
