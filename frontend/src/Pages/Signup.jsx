import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/AuthReducer/action";

export const Signup = () => {
   const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "Sales Executive", 
    employeeId: "",
    
  });
console.log(auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(form));
  };


  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="border px-4 py-2 rounded focus:outline-none focus:ring"
          required
        />
        <input
          type="text"
          name="employeeId"
          value={form.employeeId}
          onChange={handleChange}
          placeholder="Employee ID"
          className="border px-4 py-2 rounded focus:outline-none focus:ring"
          required
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="border px-4 py-2 rounded focus:outline-none focus:ring"
          required
        >
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Sales Executive">Sales Executive</option>
        </select>
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
          className="bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700"
          disabled={auth.isLoading}
        >
          {auth.isLoading ? "Signing up..." : "Sign Up"}
        </button>
        {auth.isError && (
          <p className="text-red-600">Registration failed. Please try again.</p>
        )}
      </form>
    </div>
  )
}





