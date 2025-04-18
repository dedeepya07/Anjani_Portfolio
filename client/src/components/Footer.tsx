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
              A passionate Computer Science and Data Science student with a focus on creating innovative
              solutions using machine learning, data analysis, and modern web technologies.
            </p>
            
            <div className="mt-6 flex gap-4">
              {[
                { icon: "fab fa-github", href: "https://github.com/dedeepya07", name: "GitHub" },
                { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/anjani-dedeepya-siripurapu-a2a202281/", name: "LinkedIn" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full hover:text-primary hover:bg-primary/10 transition-colors flex items-center gap-2"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`${social.icon} text-lg`}></i>
                  <span className="text-sm font-medium">{social.name}</span>
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
                { name: "Achievements", href: "#achievements" },
                { name: "Certifications", href: "#certifications" },
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
                <span>Visakhapatnam, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                <a href="mailto:siripurapuanjani@gmail.com" className="hover:text-primary transition-colors">
                  siripurapuanjani@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-school"></i>
                <span>NSRIT, Visakhapatnam</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-graduation-cap"></i>
                <span>B.Tech CSE (Data Science)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>© {currentYear} Anjani Dedeepya Siripurapu. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
