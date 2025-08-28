import "../../../pages/signin/signin-page.module.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-layout">
      <div className="auth-card">{children}</div>
    </div>
  );
}
