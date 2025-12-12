import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Bookmark, Star } from "lucide-react";
import BottomNav from "../components/BottomNav";

interface Recipe {
  id: number;
  title: string;
  category: string;
  image: string;
  author: string;
  authorAvatar: string;
  comments: number;
  rating: number;
  reviews: number;
}

export default function Home() {
  const navigate = useNavigate();
  const [recipes] = useState<Recipe[]>([
    {
      id: 1,
      title: "Bánh cookie",
      category: "Công thức",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
      author: "vtp_nuu",
      authorAvatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      comments: 123,
      rating: 5.0,
      reviews: 23,
    },
    {
      id: 2,
      title: "Bánh mì",
      category: "Món chính",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      author: "bnhi",
      authorAvatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      comments: 89,
      rating: 4.8,
      reviews: 15,
    },
  ]);

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
      <div className="text-center py-6 border-b">
        <h1
          className="text-6xl text-nostimo-brown"
          style={{ fontFamily: "Jomhuria, serif" }}
        >
          Nostimo
        </h1>
      </div>

      {/* Recipe Feed */}
      <div className="divide-y">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white">
            {/* Author Info */}
            <div className="flex items-center gap-3 px-4 py-3">
              <img
                src={recipe.authorAvatar}
                alt={recipe.author}
                className="w-9 h-9 rounded-full object-cover"
              />
              <span
                className="text-sm font-['ABeeZee']"
                style={{ textTransform: "lowercase" }}
              >
                {recipe.author}
              </span>
            </div>

            {/* Recipe Image */}
            <div className="relative">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-72 object-cover"
              />
            </div>

            {/* Recipe Info */}
            <div className="px-4 py-3 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-1 text-sm">
                    <MessageCircle size={18} />
                    <span className="font-['ABeeZee']">{recipe.comments}</span>
                  </button>
                  <button>
                    <Bookmark size={20} />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="#FCD53F"
                        stroke="#FCD53F"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-['ABeeZee']">
                    {recipe.rating}
                  </span>
                </div>
              </div>

              <h3
                className="text-xl font-['ABeeZee'] cursor-pointer hover:text-nostimo-orange"
                onClick={() => navigate(`/recipe/${recipe.id}`)}
              >
                {recipe.title}
              </h3>
              <p className="text-sm text-gray-700 font-['ABeeZee']">
                {recipe.category}
              </p>
              <p className="text-sm text-gray-600 font-['ABeeZee']">
                {recipe.reviews} đánh giá
              </p>
            </div>
          </div>
        ))}
      </div>

      <BottomNav activeTab="home" />
    </div>
  );
}
