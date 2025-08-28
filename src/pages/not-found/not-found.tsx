import "./not-found.module.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">Page Not Found</p>
      <a href="/signin" className="notfound-button">
        Go to Login
      </a>
    </div>
  );
}
