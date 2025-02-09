import { SelectOptionsType } from "@/libs";

interface SelectProps {
  options: SelectOptionsType[];
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isDisabled?: boolean;
}

export const Select = ({
  options,
  defaultValue,
  onChange,
  isDisabled = false,
}: SelectProps) => {
  return (
    <div className="relative inline-block w-48">
      <select
        disabled={isDisabled}
        onChange={onChange}
        defaultValue={defaultValue}
        className="block w-full h-8 px-4 py-1 pr-8 leading-tight text-gray-300 border rounded-lg shadow appearance-none bg-system-purple10 border-system-purple20 focus:outline-none focus:shadow-outline"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-4 h-4 fill-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};
