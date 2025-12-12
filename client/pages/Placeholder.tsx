import { useLocation } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import ChefHatLogo from "../components/ChefHatLogo";

interface PlaceholderProps {
  activeTab: "home" | "search" | "add" | "awards" | "profile";
}

export default function Placeholder({ activeTab }: PlaceholderProps) {
  const location = useLocation();
  const pageName = location.pathname.slice(1) || "page";

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Status bar */}
      <div className="bg-white px-5 py-3 flex justify-between items-center border-b">
        <span className="text-nostimo-brown-dark text-sm font-medium font-['League_Spartan']">
          16:04
        </span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {[14, 16, 18, 20].map((height, i) => (
              <div
                key={i}
                className="w-1 bg-nostimo-brown-dark rounded-sm"
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="text-center py-6 border-b">
        <h1
          className="text-6xl text-nostimo-brown"
          style={{ fontFamily: "Jomhuria, serif" }}
        >
          Nostimo
        </h1>
      </div>

      {/* Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="text-center px-6">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-nostimo-yellow to-nostimo-orange flex items-center justify-center p-4">
            <ChefHatLogo size={80} />
          </div>
          <h2 className="text-2xl font-semibold text-nostimo-brown mb-2 capitalize">
            {pageName} Page
          </h2>
          <p className="text-nostimo-brown-medium mb-6">
            This page is coming soon. Continue prompting to add content here!
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-nostimo-orange/10 rounded-full text-nostimo-orange text-sm">
            <span>🚧</span>
            <span>Under Construction</span>
          </div>
        </div>
      </div>

      <BottomNav activeTab={activeTab} />
    </div>
  );
}
