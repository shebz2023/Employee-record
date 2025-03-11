'use client'; 

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/login');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex w-screen text-neutral-400 justify-center items-center px-20">
        <p className="tracking-wider font-thin text-sm">
          Streamline your workforce with our{" "}
          <span className="text-green-400 text-lg"> Employee Management </span>
          Employee Management System—designed to simplify HR tasks, enhance
          productivity, and foster seamless collaboration. From attendance
          tracking and performance evaluations to payroll management and team
          communication, our platform empowers businesses to focus on what truly
          matters: growth and employee satisfaction.
        </p>
      </div>
      <button
        className="bg-green-400 py-2 px-6 cursor-pointer hover:bg-green-500 duration-300"
        onClick={handleClick}
      >
        Start Now
      </button>
    </div>
  );
}
