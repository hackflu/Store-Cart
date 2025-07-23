import { X } from "lucide-react";
type CartBlockProp = {
    isOpen : boolean
    close : ()=>void
}
export function CartBlock({isOpen , close} : CartBlockProp) {
    console.log(isOpen)
    return (
        <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between p-3">
            <span>Menu</span>
            <button>
                <X size={35} onClick={close}/>
            </button>
        </div>
      </div>
    );
}

