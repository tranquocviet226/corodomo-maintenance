export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen justify-center items-center px-6 py-24 w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8770ff] to-[#ff7eda] rounded-full blur-lg opacity-50 animate-pulse"></div>
            <div className="relative bg-white dark:bg-slate-800 p-6 rounded-full shadow-xl">
              <svg
                className="w-16 h-16 text-[#8770ff]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="bg-gradient-to-r from-[#8770ff] via-[#a770ff] to-[#ff7eda] bg-clip-text text-transparent text-5xl md:text-7xl font-bold leading-tight tracking-tight animate-gradient">
            We&apos;re Under Maintenance
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xl md:text-2xl font-medium">
            Corodomo hiện đang bảo trì
          </p>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto space-y-4 pt-4">
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
            We&apos;re making some improvements to serve you better. Our team is working hard to bring you an enhanced experience.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Chúng tôi đang cải thiện dịch vụ để phục vụ bạn tốt hơn. Đội ngũ của chúng tôi đang nỗ lực mang đến trải nghiệm tuyệt vời hơn.
          </p>
        </div>

        {/* Status indicator */}
        <div className="flex items-center justify-center gap-3 pt-8">
          <div className="relative flex items-center gap-3">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8770ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#8770ff]"></span>
            </span>
            <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">
              Working on updates...
            </span>
          </div>
        </div>

        {/* Additional info */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800 max-w-xl mx-auto">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            Expected to be back soon. Thank you for your patience! 🚀
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-sm mt-2">
            Dự kiến sẽ quay lại sớm. Cảm ơn sự kiên nhẫn của bạn!
          </p>
        </div>
      </div>
    </main>
  );
}
