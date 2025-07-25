import type { User } from '../types';

interface CardProps {
  user: User;
}

const Card = ({ user }: CardProps) => {
  return (
    <div className="open-sans antialiased bg-navy-800 p-5 text-white rounded-lg my-5 space-y-3.5 font-light tracking-wide md:w-[22.5rem] opacity-0 hover:shadow-xl hover:scale-[102%]">
      <p className="text-sm/7">{user.message}</p>
      <div className="flex flex-row space-x-4 items-center">
        <img src={`/${user.userimg}`} alt="" className="w-1/8 rounded-full" />
        <div className="flex flex-col space-y-0">
          <h4 className="font-bold">{user.name}</h4>
          <span className="text-[0.738rem]">{user.title}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
