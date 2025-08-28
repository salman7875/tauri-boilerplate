import "../../../pages/signin/signin-page.module.css";

export default function AuthFooter() {
  return (
    <p className="auth-footer">
      © {new Date().getFullYear()} Your Company. All rights reserved.
    </p>
  );
}
