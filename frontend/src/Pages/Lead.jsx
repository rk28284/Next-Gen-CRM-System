import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLead, getLeads } from "../Redux/LeadReducer/action";

export const Lead = () => {
  const dispatch = useDispatch();
  const { leads, isLoading, isError } = useSelector((state) => state.leadReducer);
console.log(leads);

  useEffect(() => {
    dispatch(getLeads());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      dispatch(deleteLead(id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Lead Management</h1>

      {isLoading && <p className="text-blue-500">Loading leads...</p>}
      {isError && <p className="text-red-500">Failed to load leads, please try again.</p>}

      {!isLoading && !isError && leads.length === 0 && (
        <p className="text-gray-600">No leads found. Please add some leads.</p>
      )}

      {!isLoading && leads.length > 0 && (
        <table className="min-w-full bg-white rounded shadow overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-gray-700 font-semibold">Title</th>
              <th className="px-6 py-3 text-left text-gray-700 font-semibold">Email</th>
              <th className="px-6 py-3 text-left text-gray-700 font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-gray-700 font-semibold">Owner</th>
              <th className="px-6 py-3 text-center text-gray-700 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.title} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{lead.title}</td>
                <td className="px-6 py-4">{lead.email}</td>
                <td className="px-6 py-4">{lead.status}</td>
                <td className="px-6 py-4">{lead.owner}</td>
                <td className="px-6 py-4 text-center space-x-4">
                  {/* Placeholder buttons for Edit and Delete */}
                  <button className="text-blue-600 hover:text-blue-800 underline">
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 underline"
                    onClick={() => handleDelete(lead._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
