import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";

export default function TaskManagementLanding() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Logo />
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Task Management System
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-xl mx-auto">
            Streamline your workflow and boost productivity with our intuitive
            task management platform.
          </p>

          <Link
            href={"/auth/login"}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-[.525rem] shadow-md transition duration-300 transform hover:-translate-y-1"
          >
            Login
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className=" text-gray-300 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
