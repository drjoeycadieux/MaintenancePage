export default function Hero() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Welcome to My Landing Page
        </h1>
        <p className="mt-4 text-lg text-center text-gray-600">
          This is a simple landing page built with Next.js and Tailwind CSS.
        </p>
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
