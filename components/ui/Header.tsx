export default function Header({
  tag = "TAGLINE",
  title = "TITLE",
  subtitle = "SUBTITLE",
  description = "Description goes here...",
  gradient = "from-yellow-400 via-orange-500 to-red-500", // default gradient
}) {
  return (
    <div
      className="text-center mb-10"
    >
      <div className="inline-flex items-center gap-3 px-3 py-1.5 md:px-6 md:py-3 rounded-full bg-glass text-white font-semibold mb-4 md:mb-6">
        <div className={`md:w-3 md:h-3 w-2 h-2 bg-gradient-to-r ${gradient} rounded-full animate-pulse`}></div>
        <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent text-sm`}>
          {tag}
        </span>
      </div>
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-white mb-3 md:mb-6">
        <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {title}
        </span>
        <span className="text-white/90"> {subtitle}</span>
      </h1>
      <p className="md:text-xl text-sm text-white/70 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
