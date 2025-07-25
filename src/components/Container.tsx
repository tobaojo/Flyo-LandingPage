import type React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return <div className=" flex flex-col  z-20 h-auto ">{children}</div>;
};

export default Container;
