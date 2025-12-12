import { ArrowLeft, MessageCircle, Bookmark, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

export default function RecipeDetail() {
  const navigate = useNavigate();

  const ingredients = [
    "bột mì đa dụng 200g",
    "baking soda 1/2 thìa cafe",
    "muối 1/2 thìa cafe",
    "bơ lạt 170g",
    "đường nâu 150g",
    "đường trắng 50g",
    "trứng gà 1 quả",
    "vanila 1 ống",
  ];

  const steps = [
    "Trộn khô: bột mì + baking soda + muối",
    "Đánh bơ và đường: bơ +đường nâu + đường trắng đánh bông",
    "Thêm trứng, vanila socola chip trộn đều",
    "Ủ bột trong tủ lạnh 30-60p",
    "Nướng ở nhiệt độ 175 độ C, từ 10-12p",
  ];

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

      {/* Header */}
      <div className="text-center py-6 border-b relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft size={24} className="text-nostimo-brown" />
        </button>
        <h1
          className="text-6xl text-nostimo-brown"
          style={{ fontFamily: "Jomhuria, serif" }}
        >
          Nostimo
        </h1>
      </div>

      <div className="overflow-y-auto">
        {/* Author Info */}
        <div className="flex items-center gap-3 px-4 py-3 border-b">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
            alt="Author"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="text-sm font-['ABeeZee']">vtp_nuu</span>
        </div>

        {/* Recipe Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80"
            alt="Bánh cookie"
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Recipe Info */}
        <div className="px-4 py-4 space-y-3 bg-white rounded-t-3xl -mt-6 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 text-sm">
                <MessageCircle size={18} />
                <span className="font-['ABeeZee']">123</span>
              </button>
              <button>
                <Bookmark size={20} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FCD53F" stroke="#FCD53F" />
                ))}
              </div>
              <span className="text-sm font-['ABeeZee']">5.0</span>
            </div>
          </div>

          <h2 className="text-2xl font-['ABeeZee'] font-semibold">
            Bánh cookie
          </h2>
          <p className="text-sm text-gray-600 font-['ABeeZee']">
            23 đánh giá
          </p>

          {/* Ingredients */}
          <div className="pt-4">
            <h3 className="text-xl font-['ABeeZee'] font-semibold mb-3">
              Nguyên liệu:
            </h3>
            <ul className="space-y-2">
              {ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="text-sm font-['ABeeZee'] text-gray-800 flex items-start"
                >
                  <span className="mr-2">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="pt-6">
            <h3 className="text-xl font-['ABeeZee'] font-semibold mb-3">
              Cách làm:
            </h3>
            <ol className="space-y-3">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className="text-sm font-['ABeeZee'] text-gray-800 flex items-start"
                >
                  <span className="mr-3 font-semibold text-nostimo-orange min-w-[20px]">
                    {index + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <BottomNav activeTab="home" />
    </div>
  );
}
