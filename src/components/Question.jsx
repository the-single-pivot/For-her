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
    <div className="flex-1 flex items-center justify-center relative px-4 py-10 md:px-10 md:py-20 overflow-hidden">

      {/* Question Card */}
      <div className="relative bg-white/92 backdrop-blur-xl rounded-card md:rounded-card-lg p-6 md:p-14 shadow-card border border-pink-200/10 text-center max-w-xl w-full">

        <h2 className="text-[1.0625rem] sm:text-2xl md:text-4xl font-semibold text-text-primary mb-8 md:mb-12 leading-relaxed tracking-tight">
        Alright, I’ll give you one chance to escape… press ‘Leave me alone’. But if you press other button, it means you’re mine.
        </h2>

        {/* Button Area - taller on mobile for touch targets */}
        <div className="relative min-h-[140px] md:h-40 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-10">

          {/* YES BUTTON (stable) */}
          <button
            onClick={onYes}
            className="px-8 py-3.5 md:px-10 md:py-4 bg-gradient-to-br from-[#34d399] to-accent-emerald text-white rounded-full text-[1.0625rem] md:text-xl font-semibold shadow-btn-emerald hover:shadow-btn-emerald-hover hover:scale-[1.03] active:scale-[0.98] transition-all duration-smooth ease-smooth z-10 min-h-[48px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-purple focus-visible:outline-offset-2"
          >
            okay i am yours❤️
          </button>

          {/* NO BUTTON — initial side-by-side, moves away on hover/touch */}
          {noClicks === 0 && (
            <span
              role="button"
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              className="px-8 py-3.5 md:px-10 md:py-4 bg-gradient-to-br from-accent-pink to-accent-rose text-white rounded-full text-[1.0625rem] md:text-xl font-semibold shadow-btn-pink cursor-default select-none min-h-[48px] inline-flex items-center justify-center"
            >
              Leave Me Alone 😤
            </span>
          )}

          {/* NO BUTTON — floating version, moves away on hover/touch */}
          {noClicks > 0 && floating && (
            <span
              role="button"
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              style={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                transform: "translate(-50%, -50%)",
              }}
              className="px-8 py-3.5 md:px-10 md:py-4 bg-gradient-to-br from-accent-pink to-accent-rose text-white rounded-full text-[1.0625rem] md:text-xl font-semibold shadow-btn-pink cursor-default select-none min-h-[48px] inline-flex items-center justify-center touch-none"
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
