export default function Success() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center text-white">
      <div className="text-center max-w-md px-4">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold mb-4">You&apos;re In!</h1>
        <p className="text-gray-400 mb-8">Your membership is active. Welcome to XCamModels.</p>
        <a
          href="/"
          className="px-6 py-3 rounded-2xl bg-pink-500 hover:bg-pink-600 font-semibold"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
