import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/action";


export const Login = () => {
      const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const [form, setForm] = useState({ email: "", password: "" });
console.log(auth);

   const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  return (
 <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border px-4 py-2 rounded focus:outline-none focus:ring"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="border px-4 py-2 rounded focus:outline-none focus:ring"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700"
          disabled={auth.isLoading}
        >
          {auth.isLoading ? "Logging in..." : "Login"}
        </button>
        {auth.isError && (
          <p className="text-red-600">Login failed. Please try again.</p>
        )}
      </form>
    </div>
  );
};
