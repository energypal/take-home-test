import React from "react";
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-2 text-center fixed bottom-0 w-full">
      <p className="text-sm text-gray-400">
        &copy; Copyright {currentYear} EnergyPal.com, All Rights Reserved.
        Privacy Policy. Terms of Service.
      </p>
    </footer>
  );
}
