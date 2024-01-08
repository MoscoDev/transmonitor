import { useEffect, useState } from "react"
import { getUserProfile } from "../services/profile.service"

export default function Header() {
    const [profile, setProfile] = useState<UserProfile>(getUserProfile());
    useEffect(() => {
     const userProfile =   getUserProfile()
    
      return () => {
        setProfile(userProfile)
      }
    }, [profile])
    
  return (
    <div className="h-16 bg-white w-screen flex py-4 sticky top-0 justify-between shadow-lg shadow-[#2a292912] z-30">
      <div className="left flex gap-x-6">
        <div className="w-[260px] flex item-center">
          <h1 className="text-brand-blue px-10 text-2xl font-extrabold font-sans">
            TransMonitor
          </h1>
        </div>
        <div className="search flex items-center gap-2">
          <img src="./img/Search.svg" alt="search icon" />
          <input
            type="text"
            name="search"
            id="search"
            className="px-3 py-2 bg-transparent focus-visible:border-b-brand-blue focus-visible:border-none focus-visible:outline-none placeholder:text-base placeholder:font-normal "
            placeholder="search..."
          />
        </div>
      </div>
      <div className="right flex gap-x-2 items-center pr-10">
        <div className="flex items-center gap-12">
          <div className="flex item-center gap-10">
            <a
              href="/#"
              className="text-brand-nav-color  px-3 text-sm font-segoe"
            >
              Support
            </a>
            <a
              href="/#"
              className="text-brand-nav-color px-3 text-sm font-segoe"
            >
              FAQ
            </a>
            <a
              href="/#"
              className="text-brand-nav-color px-3 text-sm font-segoe"
            >
              <div className="relative">
                <img src="./img/bell.svg" alt="notifications" />

                <span className="absolute top-[-8px] right-[-8px] bg-brand-blue rounded-full text-white w-[15px] h-[15px] flex items-center justify-center text-xs">
                  {profile?.notification}
                </span>
              </div>
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col ">
              <small className="text-brand-nav-color px-3 text-xs text-end font-segoe">
                Hello
              </small>
              <a
                href="/#"
                className="text-brand-nav-color px-3 text-sm font-segoe"
              >
                {profile?.firstname + " " + profile?.lastname}
              </a>
            </div>
            <img src={profile?.pic} alt="profile" className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
