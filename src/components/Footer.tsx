import logo from '../assets/logo.svg';
import LocationIcon from '../assets/icon-location.svg';
import PhoneIcon from '../assets/icon-phone.svg';
import MailIcon from '../assets/icon-email.svg';

const Footer = () => {
  const footerLinks1 = ['About Us', 'Jobs', 'Press', 'Blog'];
  const footerLinks2 = ['Contact', 'Terms', 'Privacy'];
  return (
    <div className="w-full h-full bg-navy-950 text-white flex flex-col p-10 pt-60 overflow-hidden">
      <div className="space-y-8 flex flex-col md:flex-row justify-between">
        <div className="space-y-3 w-8/8 md:w-1/2">
          <img src={logo} alt="Fylo logo" className="w-[5rem]" />
          <div className="flex flex-row space-x-5 items-start">
            <img src={LocationIcon} alt="" />
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error odio ratione optio alias quos,
              perferendis magni.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-row space-x-5 items-center">
            <img src={PhoneIcon} alt="" />
            <p>+1-543-123-4567</p>
          </div>
          <div className="flex flex-row space-x-5 items-center">
            <img src={MailIcon} alt="" />
            <p>example@email.com</p>
          </div>
        </div>

        <ul className="space-y-3">
          {footerLinks1.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
        <ul className="space-y-3">
          {footerLinks2.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
