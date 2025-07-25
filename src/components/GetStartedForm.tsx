import { useEffect, useState } from 'react';
import { useAnimate, useInView } from 'motion/react';

const GetStartedForm = () => {
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState(false);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1, y: -30 }, { duration: 1, delay: 3 });
    }
  }, [animate, isInView, scope]);

  const validateInput = (text: string) => {
    if (!text.includes('@') || text === '' || text.length <= 0) {
      setError(true);
    } else {
      setInputText('');
      setError(false);
    }
  };

  return (
    <div
      ref={scope}
      className="relative open-sans flex flex-col antialiased bg-navy-850 text-white rounded-lg -mb-30 space-y-4 shadow-2xl p-12 justify-center mx-auto w-[85%] md:md:w-[54rem] opacity-0 translate-y-20"
    >
      <h3 className="text-center font-bold text-[1.25rem]">Get early access today</h3>
      <p className="text-center">
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
        our support team would be happy to help you.
      </p>
      <div className="relative flex flex-col md:flex-row md:space-x-10 space-y-2 md:space-y-0 items-center">
        <input
          type="text"
          placeholder="email@example.com"
          className="bg-white p-[1rem] self-center rounded-full w-5/6 md:w-6/8 text-navy-850 placeholder-gray-400 text-center"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        {error && <small className="md:absolute top-15 text-red-500 font-bold">Error, please check your email</small>}
        <button
          className="open-sans rounded-full py-[1rem] px-[1rem] w-5/6  md:w-4/8 self-center
  bg-linear-to-br from-[#63E1D9] to-[#34A0CD] hover:from-[#63E1D9] hover:to-[#63E1D9] hover:cursor-pointer hover:shadow-[0_0_20px_#63E1D9] transition-shadow duration-300"
          onClick={() => validateInput(inputText)}
        >
          Get Started For Free
        </button>
      </div>
    </div>
  );
};

export default GetStartedForm;
