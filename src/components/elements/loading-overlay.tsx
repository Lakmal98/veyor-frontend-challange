import React from "react";

interface IProps {
  message: string;
}

export default function LoadingOverlay({ message }: Readonly<IProps>) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl p-4 min-w-full text-center">
        {message}
      </div>
    </div>
  );
}
