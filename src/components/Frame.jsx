const Frame = ({ image, text, onNext }) => {
  return (
    <div className="relative flex-1 flex items-center justify-center px-4 py-8 md:px-10 md:py-16 overflow-hidden">

      {/* soft decorative background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#f9a8d4] rounded-full blur-80 opacity-35 pointer-events-none"></div>
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[#e9d5ff] rounded-full blur-80 opacity-35 pointer-events-none"></div>

      {/* main layout */}
      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* LEFT : IMAGE FRAME */}
        <div className="flex justify-center order-2 md:order-1">
          <div className="w-full max-w-[340px] h-[280px] sm:max-w-[400px] sm:h-[360px] md:max-w-[440px] md:h-[560px] bg-white/92 backdrop-blur-xl rounded-card md:rounded-card-lg shadow-card border border-pink-200/10 p-4 md:p-6 flex items-center justify-center transition-all duration-smooth hover:shadow-card-hover hover:-translate-y-0.5">
            <img
              src={image}
              alt="memory"
              className="w-full h-full object-contain rounded-xl md:rounded-[1.5rem]"
            />
          </div>
        </div>

        {/* RIGHT : TEXT CARD */}
        <div className="bg-white/92 backdrop-blur-xl rounded-card md:rounded-card-lg p-6 md:p-12 shadow-card border border-pink-200/10 order-1 md:order-2">
          <p className="text-xl sm:text-2xl md:text-4xl font-medium text-text-primary leading-relaxed mb-8 md:mb-10 whitespace-pre-line tracking-tight">
            {text}
          </p>

          <button
            onClick={onNext}
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 md:py-4 bg-gradient-to-br from-accent-pink to-accent-rose text-white rounded-full text-[1.0625rem] md:text-xl font-semibold shadow-btn-pink hover:shadow-btn-pink-hover hover:scale-[1.03] active:scale-[0.98] transition-all duration-smooth ease-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-purple focus-visible:outline-offset-2"
          >
            Next 💖
          </button>
        </div>

      </div>
    </div>
  );
};

export default Frame;
