import RegistrationForm from "@/app/components/RegistrationForm";
import Head from "next/head";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Register</title>
      </Head>
      <RegistrationForm />
    </div>
  );
};

export default Register;
