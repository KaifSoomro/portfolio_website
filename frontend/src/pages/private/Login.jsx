export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] px-4">
    

      <div className="absolute w-50 h-50 md:w-100 md:h-100 bg-pink-500/20 blur-[120px] rounded-full top-10 left-10 animate-pulse"></div>

      <div className="absolute w-50 h-50 md:w-100 md:h-100 bg-purple-600/20 blur-[120px] rounded-full bottom-10 right-10 animate-pulse"></div>

      <div className="relative w-full max-w-md">
        <div className="p-0.5 rounded-2xl bg-linear-to-r from-purple-500 via-pink-500 to-purple-500">
          <div className="bg-[#0f0f17] rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white text-center mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-400 text-center mb-6">
              Login to continue your journey
            </p>

            <form className="space-y-4">
              <div>
                <label className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-1 px-4 py-3 rounded-xl bg-black/40 text-white border border-gray-700 focus:outline-none focus:border-pink-500 transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full mt-1 px-4 py-3 rounded-xl bg-black/40 text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full relative overflow-hidden py-3 rounded-xl font-semibold text-white
                bg-linear-to-r from-purple-600 via-pink-500 to-purple-600
                hover:scale-[1.02] active:scale-[0.98] transition duration-300
                shadow-[0_0_25px_rgba(236,72,153,0.4)]"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
