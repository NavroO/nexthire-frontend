import Head from "next/head";
import RegistrationForm from "../components/RegistrationForm";

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
