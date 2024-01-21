import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import loginSchema from "../../validations/login-validation";

export default function LoginContent() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, actions) => {
      try {
        // Kullanıcı giriş yap
        await signInWithEmailAndPassword(auth, values.email, values.password);
        // Formu resetle
        formik.resetForm();
        // Başarılı kayıt mesajını göster
        toast.success(
          "Login was successful, you are directed to the home page "
        );
        // /login sayfasına yönlendir
        setTimeout(() => {
          navigate("/");
        }, 2500);
      } catch (error) {
        toast.error("Registration error:", error.code, error.message);
      }
    },
  });

  return (
    <div className="flex flex-col justify-center items-center h-[500px] p-2 bg-gray-100">
      <div className="bg-white w-full sm:w-96 p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-8 text-center block">3legant.</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="email"
            placeholder="Email Address"
            className="border p-2 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="text-red-500 text-xs ">{formik.errors.email}</span>
          ) : null}

          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <span className="text-red-500 text-xs ">
              {formik.errors.password}
            </span>
          ) : null}

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition-all"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?
          <Link to={"/register"} className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
