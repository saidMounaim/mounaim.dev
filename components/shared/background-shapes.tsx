export function BackgroundShapes() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-300/30 dark:bg-teal-700/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-300/30 dark:bg-cyan-700/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-300/30 dark:bg-emerald-700/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
    </div>
  );
}
