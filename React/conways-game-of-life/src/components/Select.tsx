export function Select({
  value,
  onChange,
  children,
  label,
}: {
  value: number;
  label: string;
  onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="flex items-center justify-center h-8 px-2 transition ease-in bg-gray-700 rounded shadow-md cursor-pointer group hover:bg-gray-800 disabled:opacity-50">
      <select
        className="transition ease-in bg-gray-700 cursor-pointer group-hover:bg-gray-800"
        aria-label={label}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
    </label>
  );
}
