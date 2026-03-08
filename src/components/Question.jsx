import { useState } from "react";

const Question = ({ onYes }) => {
  const [noClicks, setNoClicks] = useState(0);
  const [floating, setFloating] = useState(false);
  const [pos, setPos] = useState({ top: "50%", left: "50%" });

  const handleNoHover = () => {
    setNoClicks((n) => n + 1);

    // No ko temporarily hide karo
    setFloating(false);

    // thodi der baad random jagah pop karo
    setTimeout(() => {
      const top = Math.random() * 60 + 20;
      const left = Math.random() * 60 + 20;

      setPos({
        top: `${top}%`,
        left: `${left}%`,
      });

      setFloating(true);
    }, 300);
  };

  return (
    <div className="flex-1 flex items-center justify-center relative px-10 py-20">

      {/* Question Card */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-[3rem] p-14 shadow-2xl text-center max-w-xl w-full">

        <h2 className="text-4xl font-semibold text-gray-700 mb-14">
        Alright, I’ll give you one chance to escape… press ‘Leave me alone’. But if you press other button, it means you’re mine.
        </h2>

        {/* Button Area */}
        <div className="relative h-40 flex items-center justify-center gap-10">

          {/* YES BUTTON (stable) */}
          <button
            onClick={onYes}
            className="px-12 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-2xl font-medium shadow-lg hover:scale-105 transition-all duration-300 z-10"
          >
            okay i am yours❤️
          </button>

          {/* NO BUTTON — initial side-by-side, moves away on hover */}
          {noClicks === 0 && (
            <span
              role="button"
              onMouseEnter={handleNoHover}
              className="px-12 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-2xl font-medium shadow-lg transition-all duration-300 cursor-default select-none"
            >
              Leave Me Alone 😤
            </span>
          )}

          {/* NO BUTTON — floating version, moves away on hover */}
          {noClicks > 0 && floating && (
            <span
              role="button"
              onMouseEnter={handleNoHover}
              style={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                transform: "translate(-50%, -50%)",
              }}
              className="px-12 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-2xl font-medium shadow-lg transition-all duration-300 cursor-default select-none"
            >
              Leave Me Alone 😤
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
