import { Link } from 'react-router-dom';

const navItems = [
  { title: 'Home', url: '/' },
  { title: 'About me', url: '/aboutme' },
  { title: 'Projects', url: '/projects' },
];

function Navbar() {
  return (
    <nav className="relative h-12 flex items-center px-4 bg-black z-10">
      <div className="absolute left-4">
        <span className="text-lg font-semibold text-white select-none">Evaldas/32Butterfly</span>
      </div>
      <div className="mx-auto flex space-x-4">
      {navItems.map((item) => (
        <Link 
          to={item.url} 
          className="rounded-lg px-3 py-2 text-white font-medium hover:bg-red-600 hover:text-white">{item.title}
        </Link>
      ))}
      </div>
    </nav>
  );
}

export default Navbar;