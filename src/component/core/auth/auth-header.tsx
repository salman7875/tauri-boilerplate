import "../../../pages/signin/signin-page.module.css";

export default function AuthHeader() {
  return (
    <div className="auth-header">
      <div className="auth-logo">
        <span className="auth-logo-text">C</span>
      </div>
      <h1 className="auth-title">Company Portal</h1>
      <p className="auth-subtitle">Please sign in to continue</p>
    </div>
  );
}
