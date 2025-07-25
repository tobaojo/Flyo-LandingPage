import Card from './Card';
import users from '../users.json';
import { useAnimate, useInView } from 'motion/react';
import { useEffect } from 'react';
import type { AnimationSequence } from 'motion';

const Testimonials = () => {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      const animations: AnimationSequence = Array.from(scope.current.children).map((child, index) => {
        return [child, { opacity: 1 }, { duration: 0.5, delay: index * 0.3 }];
      });

      animate(animations);
    }
  }, [animate, isInView, scope]);

  return (
    <div ref={scope} className="p-7 mb-7 flex flex-col md:flex-row md:space-x-5 m-0 mx-auto ">
      {users.map((user, index) => {
        return <Card key={index} user={user} />;
      })}
    </div>
  );
};

export default Testimonials;
