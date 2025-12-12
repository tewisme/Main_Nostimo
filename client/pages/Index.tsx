import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-nostimo-yellow to-nostimo-orange-dark">
      <div className="text-center">
        <div className="w-48 h-48 mx-auto rounded-full bg-white flex items-center justify-center shadow-2xl mb-8">
          <svg
            width="140"
            height="140"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="60"
              cy="50"
              rx="35"
              ry="30"
              fill="url(#chef-hat-gradient)"
            />
            <path
              d="M30 50 Q30 65 35 70 L85 70 Q90 65 90 50"
              fill="#F5DEB3"
              stroke="#874609"
              strokeWidth="3"
            />
            <text
              x="60"
              y="75"
              textAnchor="middle"
              fill="#874609"
              fontSize="28"
              fontWeight="bold"
              fontFamily="Jomhuria"
            >
              N
            </text>
            <defs>
              <linearGradient
                id="chef-hat-gradient"
                x1="30"
                y1="20"
                x2="90"
                y2="50"
              >
                <stop offset="0%" stopColor="#F4A460" />
                <stop offset="100%" stopColor="#FFB347" />
              </linearGradient>
            </defs>
          </svg>
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
