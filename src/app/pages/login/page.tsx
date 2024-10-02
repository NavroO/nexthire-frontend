import LoginForm from "@/app/components/LoginForm";
import Head from "next/head";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm />
    </div>
  );
};

export default Register;
