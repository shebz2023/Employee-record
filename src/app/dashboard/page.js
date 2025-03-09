import SelectRole from "@/components/selectRole";
import { TableEmployee } from "@/components/TableEmployees";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

export default function DashboardPage() {
  return (
    <div>
      <div className=" w-full flex justify-between p-4">
        <p className="font-semibold text-xl">Employees</p>
        <button className="bg-green-400 text-white px-10 py-1 ">Add New</button>
      </div>
      <div className=" w-full flex justify-between p-8">
        <p className="font-semibold text-xl">Josh Bakery Ventures</p>
        <p className="fonte-semibold text-sm ">62,Bod thomas ,Lagos</p>
      </div>
      <div className="flex m-6 justify-between">
        <div className="flex gap-2">
          <SelectRole />
          <button className="bg-green-400 text-white px-6 py-1 ">Change</button>
          <SelectRole />
        </div>
        <div className="text-sm flex gap-2">
          <p>1 of 2</p>
          <FaChevronCircleLeft color="green" />
          <FaChevronCircleRight color="green" />
        </div>
      </div>
      <TableEmployee />
    </div>
  );
}
