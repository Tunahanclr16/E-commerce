import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import validationSchema from "../../validations/register-validation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function RegisterContent() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      displayName: "", // Eklediğimiz displayName alanı
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      try {
        // Kullanıcı kaydını oluştur
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        // Kullanıcı adını güncelle
        await updateProfile(userCredential.user, { displayName: values.displayName });
        // Formu resetle
        formik.resetForm();
        console.log("Registration successful!");
      } catch (error) {
        console.error("Registration error:", error.code, error.message);
      }
    },
  });
  return (
    <div className="flex flex-col justify-center items-center h-[500px] p-2 bg-gray-100">
      <div className="bg-white w-full sm:w-96 p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-8 text-center block">3legant.</h2>
        <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e) }} className="flex flex-col gap-4">
        <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
          />
          {formik.touched.name && formik.errors.name ? (
            <span className="text-red-500 text-xs ">{formik.errors.name}</span>
          ) : null}

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
            <span className="text-red-500 text-xs ">{formik.errors.password}</span>
          ) : null}

<button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition-all"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
