import { useEffect, useState } from "react";
import celebration from "../assets/images/celebration.png";

const FinalScreen = ({ onReplay }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center relative px-4 py-10 md:px-10 md:py-20 overflow-auto">
      <div
        className={`bg-white/92 backdrop-blur-xl rounded-card md:rounded-card-lg p-6 md:p-14 shadow-card border border-pink-200/10 text-center max-w-2xl w-full ${
          show ? "animate-fade-scale-in" : "opacity-0 scale-95"
        }`}
      >
        {/* Celebration Image */}
        <img
          src={celebration}
          alt="celebration"
          className="w-full max-h-[200px] md:max-h-[300px] object-contain mb-6 md:mb-10"
        />

        {/* Final Message */}
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold text-text-primary mb-4 md:mb-6 tracking-tight">
        i knew you will choose me 🥹💖
        </h1>

        <p className="text-lg md:text-2xl text-accent-rose font-medium mb-8 md:mb-10">
          Thanks for tolerating my cringe❤️
        </p>

        {/* Replay */}
        <button
          onClick={onReplay}
          className="px-8 py-3.5 md:px-10 md:py-4 bg-gradient-to-br from-accent-purple to-accent-pink text-white rounded-full text-[1.0625rem] md:text-xl font-semibold shadow-btn-purple hover:shadow-btn-purple-hover hover:scale-[1.03] active:scale-[0.98] transition-all duration-smooth ease-smooth min-h-[48px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-purple focus-visible:outline-offset-2"
        >
          Replay 🔁
        </button>
      </div>
    </div>
  );
};

export default FinalScreen;
