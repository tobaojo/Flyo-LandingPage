import AccessAnywhere from '../assets/icon-access-anywhere.svg';
import Security from '../assets/icon-security.svg';
import Collaboration from '../assets/icon-collaboration.svg';
import Files from '../assets/icon-any-file.svg';
import { useAnimate, useInView } from 'motion/react';
import { useEffect } from 'react';

const Features = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  // useEffect(() => {
  //   async function animateElements() {
  //     if (isInView) {
  //       await animate(scope.current, { opacity: 1, y: -30 }, { duration: 0.3 });
  //     }
  //   }
  //   animateElements();
  // }, [animate, isInView, scope]);

  useEffect(() => {
    if (isInView) {
      animate([
        [scope.current.children[0], { opacity: 1, y: -10 }, { delay: 0.1 }],
        [scope.current.children[1], { opacity: 1, y: -10 }, { delay: 0.3 }],
        [scope.current.children[2], { opacity: 1, y: -10 }, { delay: 0.5 }],
        [scope.current.children[3], { opacity: 1, y: -10 }, { delay: 0.7 }],
      ]);
    }
  }, [animate, isInView, scope]);

  return (
    <div
      ref={scope}
      className="open-sans grid grid-cols-1 md:grid-cols-2 text-white items-center gap-y-[5rem] md:gap-[10rem] mt-10 z-20 px-7 mx-auto "
    >
      <div className="item-1 flex flex-col space-y-4 justify-center text-center md:w-[21.875rem] opacity-0 translate-y-3.5 hover:scale-[102%]">
        <img src={AccessAnywhere} alt="" className="mx-auto" />
        <h3 className="raleway font-semibold">Access your files, anywhere</h3>
        <p>
          The ability to use a smartphone, tablet, or computer to access your account means your files follow you
          everywhere.
        </p>
      </div>
      <div className="flex flex-col space-y-4 justify-center text-center md:w-[21.875rem] opacity-0 translate-y-3.5 hover:scale-[102%]">
        <img src={Security} alt="" className="mx-auto" />
        <h3 className="raleway font-semibold"> Security you can trust</h3>
        <p>
          2-factor authentication and user-controlled encryption are just a couple of the security features we allow to
          help secure your files.
        </p>
      </div>
      <div className="flex flex-col space-y-4 justify-center text-center md:w-[21.875rem] opacity-0 translate-y-3.5 hover:scale-[102%]">
        <img src={Collaboration} alt="" className="mx-auto" />
        <h3 className="raleway font-semibold">Real-time collaboration</h3>
        <p>
          Securely share files and folders with friends, family and colleagues for live collaboration.No email
          attachments required.
        </p>
      </div>
      <div className=" flex flex-col space-y-4 justify-center text-center md:w-[21.875rem] opacity-0 translate-y-3.5 hover:scale-[102%]">
        <img src={Files} alt="" className="mx-auto" />
        <h3 className="raleway font-semibold"> Store any type of file</h3>
        <p>
          Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to
          be securely stored and shared
        </p>
      </div>
    </div>
  );
};

export default Features;
