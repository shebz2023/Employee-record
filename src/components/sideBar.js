import { CiBoxList } from "react-icons/ci";
import { HiUsers } from "react-icons/hi";
import { FiCreditCard } from "react-icons/fi";

export default function SideBar() {
  return (
    <div className="w-16 flex flex-col gap-14 pt-5 items-center text-neutral-500">
      <button>
        <CiBoxList size={28} />
      </button>
      <button>
        <HiUsers size={28} />
      </button>
      <button>
        <FiCreditCard size={28} />
      </button>
    </div>
  );
}
