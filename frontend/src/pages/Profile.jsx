import React from "react";
import MyOrdersPage from "./MyOdersPage";


const Profile = () => {
  const handleLogout = () => {
    console.log("Logging out...");
    // Add your logout logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0">
          
          {/* --- LEFT SECTION: User Info Sidebar --- */}
          <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6 h-fit bg-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">John Doe</h1>
            <p className="text-lg text-gray-600 mb-4">john@example.com</p>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>

          {/* --- RIGHT SECTION: Orders Table --- */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrdersPage />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;