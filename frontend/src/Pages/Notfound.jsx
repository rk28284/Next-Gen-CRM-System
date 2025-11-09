import React from "react";

export default function Notfound() {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-xl w-full text-center">
                <div
                    role="img"
                    aria-label="Sad document"
                    className="mx-auto mb-8 w-40 h-40 rounded-full bg-white shadow-md flex items-center justify-center"
                >
           
                    <svg
                        className="w-20 h-20 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5M14.25 9.75l-4.5 4.5M12 3v18" />
                    </svg>
                </div>

                <h1 className="text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
                    404
                </h1>

                <p className="mt-4 text-2xl font-semibold text-gray-800">Page not found</p>
                <p className="mt-2 text-gray-500">
                    The page you are looking for doesn't exist or has been moved.
                </p>

                <div className="mt-6 flex items-center justify-center gap-3">
                    <a
                        href="/"
                        className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Go to home
                    </a>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center px-4 py-2 rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Go back
                    </button>
                </div>
            </div>
        </main>
    );
}