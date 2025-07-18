import { Link } from 'react-router-dom';

const navItems = [
  { title: 'Home', url: '/' },
  { title: 'About me', url: '/aboutme' },
  { title: 'Projects', url: '/projects' },
];

function Navbar() {
  return (
    <nav className="relative h-12 flex items-center px-4">
      <div className="absolute left-4">
        <a className="text-lg font-semibold text-slate-800">Evaldas/32Butterfly</a>
      </div>
      <div className="mx-auto flex space-x-4">
      {navItems.map((item) => (
        <Link 
          to={item.url} 
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{item.title}
        </Link>
      ))}
      </div>
    </nav>
  );
}

export default Navbar;