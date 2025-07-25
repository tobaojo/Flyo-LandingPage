import logo from '../assets/logo.svg';

const Navbar = () => {
  const navLinks = ['Features', 'Team', 'Sign In'];

  return (
    <div className="raleway flex flex-row text-white justify-between text-[0.75rem] md:text-[1rem] antialiased space-y-[3rem] z-30 p-7">
      <img src={logo} alt="Fylo logo" className="w-[5rem]" />
      <ul className="flex flex-row gap-[1.5rem]">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
