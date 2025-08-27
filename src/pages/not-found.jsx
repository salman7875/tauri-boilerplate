export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="mt-4 text-lg text-gray-600">Page Not Found</p>
      <a
        href="/signin"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-2 text-white shadow hover:bg-blue-700"
      >
        Go to Login
      </a>
    </div>
  );
}
