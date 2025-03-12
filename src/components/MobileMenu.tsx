import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col p-4">
      <div className="flex justify-between items-center mb-8">
        <Link
          to="/"
          className="text-[#2e7d32] text-2xl font-bold"
          onClick={onClose}
        >
          Arbor
        </Link>
        <button onClick={onClose} className="text-[#2e7d32]">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="flex flex-col space-y-6">
        <Link
          to="/"
          className="text-[#2a2a2a] text-xl font-semibold py-2 border-b border-gray-100"
          onClick={onClose}
        >
          Home
        </Link>
        <Link
          to="/services"
          className="text-[#2a2a2a] text-xl font-semibold py-2 border-b border-gray-100"
          onClick={onClose}
        >
          Services
        </Link>
        <Link
          to="/solutions"
          className="text-[#2a2a2a] text-xl font-semibold py-2 border-b border-gray-100"
          onClick={onClose}
        >
          Solutions
        </Link>
        <Link
          to="/about"
          className="text-[#2a2a2a] text-xl font-semibold py-2 border-b border-gray-100"
          onClick={onClose}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-[#2a2a2a] text-xl font-semibold py-2 border-b border-gray-100"
          onClick={onClose}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
