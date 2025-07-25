import Illustration from '../assets/illustration-intro.png';
import GetStartedBtn from './GetStartedButton';
import { useAnimate, useInView } from 'motion/react';
import { useEffect } from 'react';

const Hero = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1, y: -30 }, { duration: 0.8, ease: 'easeOut' });
    }
  }, [animate, isInView, scope]);
  return (
    <div
      ref={scope}
      className="relative flex flex-col items-center text-white bg-navy-850 antialiased space-y-[3rem] overflow-hidden z-20 w-full px-7 opacity-0 translate-y-10"
    >
      <img src={Illustration} alt="main-illustration" className="w-[19rem] self-center z-10" />
      <div className="text-block flex flex-col text-center space-y-[1.5rem] z-10">
        <h1 className="raleway font-bold text-[1.25rem] md:w-4/6 mx-auto md:text-[2.5rem]">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="open-sans text-[0.875rem] w-[18.5rem] self-center md:text-[1.25rem] md:w-[33rem]">
          Fylo stores all your most important files in one secure location. Access them wherever you need, share and
          collaborate with friends, family, and co-workers.
        </p>
      </div>
      <GetStartedBtn />
      <div className="absolute inset-0 top-60  h-full bg-[url('/bg-curvy-mobile.svg')] md:bg-[url('/bg-curvy-desktop.svg')] bg-no-repeat md:bg-cover bg-center -z-10"></div>
    </div>
  );
};

export default Hero;
