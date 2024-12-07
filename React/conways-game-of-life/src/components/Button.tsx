export function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center h-8 px-4 transition ease-in bg-gray-700 rounded-full shadow-md hover:bg-gray-800"
    >
      {children}
    </button>
  );
}
