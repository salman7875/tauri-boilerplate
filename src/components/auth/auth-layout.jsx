export default function AuthLayout({ children }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl border border-gray-200">
        {children}
      </div>
    </div>
  );
}
