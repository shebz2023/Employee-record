"use client";
import { Input } from "antd";
export default function SingUpForm() {
  return (
    <div className="h-2/3 flex flex-col gap-5 px-[18%] mt-14">
      <div className="flex gap-3">
        <div className="">
          <label className="text-neutral-600 text-sm">First Name</label>
          <Input placeholder="joshua" />
        </div>
        <div>
          <label className="text-neutral-600 text-sm">Last Name</label>
          <Input placeholder="Bakare" />
        </div>
      </div>
      <label className="text-neutral-600 text-sm">Email</label>
      <Input placeholder="josh.bakery@gmail.com" />
      <label className="text-neutral-600 text-sm">Password</label>
      <Input placeholder="*********************" />
      <div className="flex justify-end">
        <button className="bg-green-500 py-2 px-7 text-white cursor-pointer hover:bg-green-600 duration-300">
          Continue
        </button>
      </div>
    </div>
  );
}
