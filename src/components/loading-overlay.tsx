import React from "react";

interface IProps {
  message: string;
}

export default function LoadingOverlay({ message }: IProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="text-white text-xl">{message}</div>
    </div>
  );
}
