import AuthLayout from "../components/auth/auth-layout";
import AuthHeader from "../components/auth/auth-header";
import AuthForm from "../components/auth/auth-form";
import AuthFooter from "../components/auth/auth-footer";

export default function Signin() {
  return (
    <AuthLayout>
      <AuthHeader />
      <AuthForm />
      <AuthFooter />
    </AuthLayout>
  );
}
