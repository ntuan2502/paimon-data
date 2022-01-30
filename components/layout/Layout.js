import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [router]);

  return (
    <div className="flex select-none">
      <div className="hidden lg:flex sticky top-0 left-0 bottom-0 z-50">
        <Sidebar />
      </div>
      <div className="w-full overflow-auto">
        <div className="flex lg:p-2 lg:hidden">
          <XIcon
            className={`fixed top-2 left-2 z-50 block h-8 w-8 cursor-pointer text-white ${
              !open && "hidden"
            }`}
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <MenuIcon
            className={`fixed top-2 left-2 h-8 w-8 cursor-pointer ${
              open && "hidden"
            }`}
            aria-hidden="true"
            onClick={() => setOpen(true)}
          />
          {open && (
            <div className="absolute w-full h-full z-40">
              <Sidebar />
            </div>
          )}
        </div>
        <div className={`pt-10 lg:pt-0 ${open && "hidden"}`}>{children}</div>
      </div>
    </div>
  );
}
