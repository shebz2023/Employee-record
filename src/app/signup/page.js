import SingUpForm from "@/components/SignUpForm";
import { Poppins } from "next/font/google";

// Load the Poppins font with optional configuration
const poppins = Poppins({
  weight: "300", // Specify the weight (e.g., '400', '700', etc.)
  subsets: ["latin"], // Specify the subsets you want to load
});

export default function LoginPage() {
  return (
    <div className={`w-screen h-screen flex ${poppins.className}`}>
      <div className="relative w-1/2 h-screen">
        <img src="/Model.png" alt="Side Image" className="object-cover" />
        <div className="w-full h-fit absolute top-4/5">
          <div className="flex items-center flex-col gap-4 text-white">
            <p className="font-bold">No hazzles</p>
            <p className="px-20 tracking-widest">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              and typesetting industry.
            </p>

            <div className="flex gap-2 items-center justify-center">
              <div className="relative rounded-full size-4 border border-white flex justify-center items-center">
                <div className="absolute rounded-full size-3 bg-green-400" />
              </div>
              <div className="rounded-full size-3 bg-amber-50" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 ml-10">
        <div className="ml-10">
          <p className="text-3xl font-bold pt-15">Create Your Free account</p>
          <p className="text-sm mt-4">
            Already registered? <span className="text-green-500">Sign in</span>
          </p>
        </div>
        <SingUpForm />
        <div className="flex justify-between text-xs mt-10">
          <p className="">
            By signing you agree to our{" "}
            <span className="text-green-400">terms </span>
            and
            <span className="text-green-400"> Privacy Policy</span>
          </p>
          <p>copyright 2025 allrights reselved</p>
        </div>
      </div>
    </div>
  );
}
