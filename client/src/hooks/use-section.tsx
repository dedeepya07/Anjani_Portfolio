import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SectionContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  lastActiveSection: string;
}

const SectionContext = createContext<SectionContextType>({
  activeSection: 'home',
  setActiveSection: () => {},
  lastActiveSection: '',
});

export function SectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState('home');
  const [lastActiveSection, setLastActiveSection] = useState('');

  // Track section changes for transitions
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;
      
      // Find which section is currently in view
      let current = '';
      sections.forEach(section => {
        const sectionElement = section as HTMLElement;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionId = sectionElement.getAttribute('id') || '';
        
        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
          current = sectionId;
        }
      });
      
      if (current && current !== activeSection) {
        setLastActiveSection(activeSection);
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);
  
  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection, lastActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  return useContext(SectionContext);
}