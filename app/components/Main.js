import React from "react";


function Main() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/images/chat-background.jpg')" }}
      >
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Z-Chat</h1>
            <p className="text-lg mb-8">
              Connect with friends and family effortlessly.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Z-Chat?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <svg
                className="text-blue-500 w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zM9 19a2 2 0 002-2h2a2 2 0 002 2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mt-4">
                Real-time Messaging
              </h3>
              <p>Experience instant messaging with no delays.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <svg
                className="text-blue-500 w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 11.414V8m0 0h6"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mt-4">Group Chats</h3>
              <p>
                Easily create and join group chats with your friends and family.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <svg
                className="text-blue-500 w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 14v6m-3-3c0 1.657-4.082 3-7.5 3S3 20.657 3 19a2 2 0 012-2h12a2 2 0 012 2v-6a2 2 0 012-2h10M1 8a2 2 0 012-2h2m3 12a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mt-4">
                User-Friendly Interface
              </h3>
              <p>
                Enjoy a clean and intuitive interface for a seamless chat
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Join the Z-Chat Community Today!
          </h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer (Optional) */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Z-Chat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Main;
