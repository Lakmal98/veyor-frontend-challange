interface IProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

export default function ConfirmationDialog({
  isOpen,
  onConfirm,
  onCancel,
  message,
}: Readonly<IProps>) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 sm:p-6 rounded-md shadow-lg w-50 max-w-md">
        <h3 className="text-base sm:text-lg mb-4">{message}</h3>
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="bg-gray-300 text-black p-2 rounded-md mr-2 w-20 sm:w-24 hover:bg-gray-400"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white p-2 rounded-md w-20 sm:w-24 hover:bg-red-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
