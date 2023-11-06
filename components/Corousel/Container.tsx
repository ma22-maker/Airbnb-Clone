'use client';

interface FunProps {
  children: React.ReactNode
};
// sticky top-20 z-10
const Container: React.FC<FunProps> = ({ children }) => {
  return ( 
    <div
      className="w-full bg-white max-w-[2520px]
      mx-auto
      xl:px-20 
      md:px-10
      sm:px-2
      px-4"
    >
      {children}
    </div>
   );
}
 
export default Container;