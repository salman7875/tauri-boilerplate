import AuthFooter from "../../component/core/auth/auth-footer";
import AuthForm from "../../component/core/auth/auth-form";
import AuthHeader from "../../component/core/auth/auth-header";
import AuthLayout from "../../component/core/auth/auth-layout";

export default function SigninPage() {
  return (
    <AuthLayout>
      <AuthHeader />
      <AuthForm />
      <AuthFooter />
    </AuthLayout>
  );
}
