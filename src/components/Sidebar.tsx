import SidebarItems from "./SidebarItems";
import React from "react";

export default function Sidebar() {
  const sideBarMenu: SideBarItem[] = [
    {
      title: "Main",
      navItems: [
        {
          name: "Overview",
          img: "./img/overview.svg",
          isActive: true,
          url: "/#",
        },
      ],
    },
    {
      title: "Payments",
      navItems: [
        {
          name: "All Payments",
          img: "./img/wallet-43.svg",
          isActive: false,
          url: "/#",
        },
        {
          name: "Reconcilled Payments",
          img: "./img/wallet.svg",
          isActive: false,
          url: "/#",
        },
        {
          name: "Un - Reconcilled Payments",
          img: "./img/wallets.svg",
          isActive: false,
          url: "/#",
        },
        {
          name: "Manual Settlement",
          img: "./img/ic_fiber_manual_record_48px.svg",
          isActive: false,
          url: "/#",
        },
      ],
    },
    {
      title: "Orders",
      navItems: [
        {
          name: "All Orders",
          img: "./img/Group 7.1.svg",
          isActive: false,
          url: "/#",
        },
        {
          name: "Pending Orders",
          img: "./img/Group 7.svg",
          isActive: false,
          url: "/#",
        },
        {
          name: "Reconcilled Orders",
          img: "./img/Group 7.2.svg",
          isActive: false,
          url: "/#",
        },
      ],
    },
    {
      title: "",
      navItems: [
        {
          name: "Merchant Profile",
          img: "./img/single-01 2.svg",
          isActive: false,
          url: "/#",
        },
      ],
    },
  ];

  return (
    <div className="w-[260px] h-screen flex flex-col  bg-white sticky top-16">
      <div className="flex flex-1 flex-col gap-8">
        <div className="flex justify-center mt-8">
          <button
            className="w-[163px] h-[33px] text-[12px] font-sans font-bold1234
         bg-brand-green rounded-[30px] text-white"
          >
            GENERATE INVOICE
          </button>
        </div>
        {sideBarMenu &&
          sideBarMenu.map(({ navItems, title }, index) => (
            <React.Fragment
              key={index}
            >
             <SidebarItems navItems={navItems} title={title}/>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}
