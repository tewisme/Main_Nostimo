import { Home, Search, Plus, Award, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BottomNavProps {
  activeTab: "home" | "search" | "add" | "awards" | "profile";
}

export default function BottomNav({ activeTab }: BottomNavProps) {
  const tabs = [
    { id: "home", icon: Home, path: "/home", label: "Home" },
    { id: "search", icon: Search, path: "/search", label: "Search" },
    { id: "add", icon: Plus, path: "/add", label: "Add" },
    { id: "awards", icon: Award, path: "/awards", label: "Awards" },
    { id: "profile", icon: User, path: "/profile", label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-nostimo-orange h-14 flex items-center justify-around shadow-lg">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <Link
            key={tab.id}
            to={tab.path}
            className="flex items-center justify-center w-full h-full relative"
          >
            {isActive && (
              <div className="absolute -top-3 w-10 h-10 rounded-full bg-nostimo-yellow-light/50 flex items-center justify-center shadow-lg" />
            )}
            <Icon
              size={24}
              className={`${
                isActive ? "relative z-10" : ""
              } text-white stroke-[2]`}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Link>
        );
      })}
    </nav>
  );
}
