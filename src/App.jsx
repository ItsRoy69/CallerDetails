import React, { useEffect, useState } from "react";
import Header from "./constants/header/Header";
import Overview from "./components/overview/Overview";
import SideBar from "./constants/sidebar/SideBar";
import Transaction from "./components/transactions/Transactions";

export default function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 650);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="flex">
      {isSmallScreen ? (
        <div className="flex items-center justify-center h-screen w-screen">
          <p className="text-red-500">Sorry, no responsiveness.</p>
        </div>
      ) : (
        <>
          <div className="sticky inset-0 w-[224px] bg-[#1e2640] h-screen text-[#ccc]">
            <SideBar />
          </div>
          <div className="flex-1 overflow-auto">
            <Header />
            <Overview />
            <Transaction />
          </div>
        </>
      )}
    </main>
  );
}
