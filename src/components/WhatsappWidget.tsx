// components/WhatsAppWidget.tsx
"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/233550000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed flex items-center text-white gap-x-2 bottom-6 right-6 bg-green-600 p-2 px-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
    >
      <FaWhatsapp className="w-6 h-6 text-white" />
      Chat with us
    </a>
  );
}
