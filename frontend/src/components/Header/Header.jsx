import { NavLink } from "react-router-dom";

const nav__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/login',
    display: 'Login'
  }
];

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-full py-4">
      <nav className="flex justify-between items-center px-6">
        <div className="text-2xl font-bold">Quiz Platform</div>
        <ul className="flex space-x-6">
          {nav__links.map((link, index) => (
            <li key={index} className="hover:text-yellow-300 transition duration-300 cursor-pointer">
              <NavLink to={link.path}>{link.display}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
