import { Link } from "react-router-dom";




export default function SidebarItems({ navItems, title }: SideBarItem) {
  return (
    <div className="flex flex-col w-full text-brand-nav-color text-xs">
      <div className="mb-2">
        <p className="text-brand-nav-color px-10">{title}</p>
      </div>
      <div className="flex flex-col justify-center">
        {navItems &&
          navItems.map(({ img, isActive, name, url }, index) => (
            <Link
              to={"/#"}
              className={`flex px-10 gap-2 text-left p-3 mb-1 items-center hover:bg-brand-blue/10 transition-colors ease-in-out duration-300 transform ${
                isActive && "border-l-4 border-brand-blue bg-brand-blue/10 "
              }`}
              key={index}
            >
              <img src={img} alt={name} />
              <span>{name}</span>
            </Link>
          ))}
      </div>
    </div>
  );
}
