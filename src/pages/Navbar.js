import { Link } from 'react-router-dom';
import { useState } from 'react';

const navItems = [
  { title: 'Home', url: '/' },
  { title: 'About me', url: '/aboutme' },
  { title: 'Projects', url: '/projects' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative h-12 flex items-center px-4 bg-black z-10 justify-center ">
      <div className="absolute left-4">
        <span className="text-lg font-semibold text-white select-none">Evaldas/32Butterfly</span>
      </div>

      {/* Make it so that navbar is only visible on large screens (Above 768px) */}
      <div className="hidden mx-auto md:flex space-x-4 max-w-max">
      {navItems.map((item) => (
        <Link 
          to={item.url} 
          className="rounded-lg px-3 py-2 text-white font-medium hover:bg-red-600 hover:text-white">{item.title}
        </Link>
      ))}
      </div>

      <button className="md:hidden text-2xl text-white" onClick={() => setMenuOpen(!menuOpen)}> ☰ </button>

      {menuOpen && (
        <div className="md:hidden flex flex-col px-4 pb-4 space-y-2 border-t border-red-600">
          {navItems.map((item) => (
            <Link 
              key={item.title}
              to={item.url}
              className="rounded-lg px-3 py-2 font-medium hover:bg-red-600 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}

    </nav>
  );
}

export default Navbar;