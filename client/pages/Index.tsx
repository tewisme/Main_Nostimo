import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChefHatLogo from "../components/ChefHatLogo";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-nostimo-yellow to-nostimo-orange-dark">
      <div className="text-center">
        <div className="w-48 h-48 mx-auto rounded-full bg-white flex items-center justify-center shadow-2xl mb-8">
          <ChefHatLogo size={140} />
        </div>
        <h1
          className="text-8xl text-white mb-2"
          style={{ fontFamily: "Jomhuria, serif" }}
        >
          Nostimo
        </h1>
      </div>
    </div>
  );
}
