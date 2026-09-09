import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import Chapter01, { Chapter02, Chapter03 } from './components/Chapters01-03';
import Chapter04 from './components/Chapter04';
import Chapter05 from './components/Chapter05';
import Chapter06 from './components/Chapter06';
import ResearchLibrary from './components/ResearchLibrary';
import { Menu, X, BookOpen } from 'lucide-react';

const navItems = [
  { id: 'chapter-01', label: 'Opportunity' },
  { id: 'chapter-02', label: 'Pattern' },
  { id: 'chapter-03', label: 'Shift' },
  { id: 'chapter-04', label: 'System' },
  { id: 'chapter-05', label: 'Demo' },
  { id: 'chapter-06', label: 'Test' },
];

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // IntersectionObserver for scroll-spy
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (!el) return;
      sectionRefs.current.set(item.id, el);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(item.id);
            }
          });
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  // Simple scroll detection for nav background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when library is open
  useEffect(() => {
    if (libraryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [libraryOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#08090a] text-[#f5f5f7]">
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#6366f1] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold tracking-tight">
                <span className="text-[#6366f1]">MJ</span>
                <span className="text-[#52525b] hidden sm:inline ml-1.5">Content Lab</span>
              </span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    activeSection === item.id
                      ? 'text-[#f5f5f7] bg-[#1e1f23]'
                      : 'text-[#71717a] hover:text-[#a1a1aa]'
                  } ${item.id === 'chapter-04' || item.id === 'chapter-05' ? 'text-[#818cf8] hover:text-[#a78bfa]' : ''}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="w-px h-4 bg-[#2a2b30] mx-2" />
              <button
                onClick={() => setLibraryOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#71717a] hover:text-[#a1a1aa] rounded-md hover:bg-[#1e1f23] transition-all"
              >
                <BookOpen size={12} />
                Evidence
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setLibraryOpen(true)}
                className="p-2 rounded-lg hover:bg-[#1e1f23] transition-colors"
                aria-label="Open research library"
              >
                <BookOpen size={16} className="text-[#71717a]" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-[#1e1f23] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-[#1e1f23] overflow-hidden bg-[#0a0b0d]"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="block w-full text-left px-3 py-2 text-sm text-[#a1a1aa] hover:text-[#f5f5f7] hover:bg-[#1e1f23] rounded-md transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main content */}
      <main>
        <Hero />
        
        <div className="chapter-divider" />
        <Chapter01 />
        
        <div className="chapter-divider" />
        <Chapter02 />
        
        <div className="chapter-divider" />
        <Chapter03 />
        
        <div className="chapter-divider" />
        <Chapter04 />
        
        <div className="chapter-divider" />
        <Chapter05 />
        
        <div className="chapter-divider" />
        <Chapter06 />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1e1f23] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-sm font-semibold text-[#f5f5f7]">
                MR JUNIOR — Content Opportunity Lab
              </div>
              <p className="mt-2 text-xs text-[#52525b] max-w-md">
                Prepared as an independent public-data case study. All observations are based on publicly available information.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.youtube.com/@mrjuniorofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#71717a] hover:text-[#a1a1aa] transition-colors"
              >
                YouTube Channel
              </a>
              <button
                onClick={() => setLibraryOpen(true)}
                className="text-xs text-[#71717a] hover:text-[#a1a1aa] transition-colors"
              >
                Research Library
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Research Library Drawer */}
      <ResearchLibrary isOpen={libraryOpen} onClose={() => setLibraryOpen(false)} />
    </div>
  );
}

export default App;
