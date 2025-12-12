import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import ChefHatLogo from "../components/ChefHatLogo";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Sai email hoặc mật khẩu");
      return;
    }
    setError("");
    navigate("/home");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Background Gradient SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 390 844"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="nostimo-gradient"
            x1="361.214"
            y1="1442.5"
            x2="359.786"
            y2="-242.554"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.283654" stopColor="#FFDC50" stopOpacity="0.94" />
            <stop offset="1" stopColor="#DD6B00" />
          </linearGradient>
        </defs>
        <path
          d="M814.513 1441.45C883.191 1419.57 948.508 861.071 948.508 861.071L947.573 -243.051L-228 -242.056L-227.024 910.422C-227.024 910.422 -136.492 1384.38 -62.059 1401.9C18.8511 1420.94 40.5891 862.153 121.06 910.127C187.308 949.623 195.952 1433.97 262.292 1401.62C320.782 1373.11 318.972 942.532 377.376 909.91C447.388 870.804 454.539 1451.2 524.97 1441.7C592.907 1432.53 595.841 922.295 663.753 909.668C735.17 896.388 743.196 1464.17 814.513 1441.45Z"
          fill="url(#nostimo-gradient)"
        />
      </svg>

      {/* Decorative ellipse */}
      <div className="absolute -top-32 -left-6 w-96 h-48 bg-white/20 rounded-full blur-3xl" />

      {/* Food icons decoration */}
      <div className="absolute top-0 left-0 right-0 h-64 opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 390 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" stroke="#C4A962" strokeWidth="2" fill="none">
            <circle cx="50" cy="50" r="8" />
            <path d="M100 40 L100 60 M90 50 L110 50" />
            <rect x="150" y="40" width="20" height="20" rx="2" />
            <circle cx="220" cy="50" r="12" />
            <path d="M280 45 L280 55 L290 55" />
            <circle cx="340" cy="50" r="10" />
          </g>
        </svg>
      </div>

      {/* Status bar */}
      <div className="relative z-10 bg-white px-5 py-3 flex justify-between items-center">
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
          <svg
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
            stroke="#391713"
            strokeWidth="2"
          >
            <path d="M1 10C1 10 4 3 10 3C16 3 19 10 19 10C19 10 16 17 10 17C4 17 1 10 1 10Z" />
            <circle cx="10" cy="10" r="3" />
          </svg>
          <svg className="w-6 h-5" viewBox="0 0 24 20" fill="#391713">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path
              d="M22 5 L24 4 L24 16 L22 15 Z"
              fill="#391713"
              stroke="#391713"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pt-32">
        {/* Logo */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
            <ChefHatLogo size={120} />
          </div>
          <h1
            className="text-7xl text-nostimo-brown mb-2"
            style={{ fontFamily: "Jomhuria, serif" }}
          >
            Nostimo
          </h1>
          <p
            className="text-xl text-nostimo-brown"
            style={{ fontFamily: "'Josefin Sans', sans-serif" }}
          >
            Nấu ăn ngon mỗi ngày
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
          <h2 className="text-2xl font-medium text-nostimo-brown text-center mb-6">
            Đăng nhập
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-nostimo-peach/70 rounded-2xl px-5 py-4 text-nostimo-brown-medium placeholder:text-nostimo-brown-medium/70 focus:outline-none focus:ring-2 focus:ring-nostimo-orange/50"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-nostimo-peach/70 rounded-2xl px-5 py-4 pr-12 text-nostimo-brown-medium placeholder:text-nostimo-brown-medium/70 focus:outline-none focus:ring-2 focus:ring-nostimo-orange/50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-nostimo-brown-medium"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="text-nostimo-brown-medium text-sm font-medium"
              >
                Quên mật khẩu?
              </button>
            </div>

            {error && (
              <p className="text-nostimo-error text-sm font-medium">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-nostimo-orange hover:bg-nostimo-orange-dark text-white font-medium text-lg rounded-2xl py-3 transition-colors"
            >
              Đăng nhập
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-nostimo-gray">Chưa có tài khoản? </span>
            <Link
              to="/signup"
              className="text-nostimo-orange font-medium hover:underline"
            >
              Đăng ký ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
