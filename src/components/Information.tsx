import StayProductive from '../assets/illustration-stay-productive.png';
import Arrow from '../assets/icon-arrow.svg';
import { useAnimate, useInView } from 'motion/react';
import { useEffect } from 'react';

const Information = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate([[scope.current.children[0].children[0], { opacity: 1, x: 850 }, { duration: 0.8, delay: 1 }]]);
      animate([[scope.current.children[0].children[1], { opacity: 1 }, { duration: 0.8, delay: 1.3 }]]);
    }
  }, [animate, isInView, scope]);

  return (
    <div ref={scope} className="flex flex-col text-white antialiased space-y-[3rem] mt-10 text-left open-sans p-7">
      <div className="w-full max-w-6xl mx-auto md:flex md:flex-row items-center justify-between ">
        <img src={StayProductive} alt="" className="mx-auto md:mx-0 opacity-0 -translate-x-210" />
        <div className="mt-6 md:mt-0 md:ml-10 opacity-0">
          <h3 className="raleway font-bold text-[1rem]">Stay Productive, Wherever you are</h3>
          <div>
            <p>
              Never let location be an issue when accessing your files. Fylo has you covered for all of your file
              storage needs
            </p>
            <br />
            <p>
              Securely share files and folders with friends, family and colleagues for live collaboration. No email
              attachments required.
            </p>
            <br />
            <a
              href="#"
              className="flex flex-col text-cyan-500 w-4/6 md:w-3/6 max-w-3/6 self-start hover:text-white hover:border-b-white"
            >
              <div className="flex flex-row space-x-3">
                <span className="">See how Fylo works</span>
                <img src={Arrow} alt="Arrow icon" className="w-[1.5rem] " />
              </div>
              <div className="border-b border-teal-200 w-6/8"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
