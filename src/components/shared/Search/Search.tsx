import { FC, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface SearchProps extends React.ComponentPropsWithoutRef<"input"> {
  onInputChange: (value: string) => void;
  placeholder?: string;
}

export const Search: FC<SearchProps> = (props: SearchProps) => {
  const { placeholder = "", onInputChange, ...inputProps } = props;

  const [state, setState] = useState<string>("");

  const handleChange = useDebouncedCallback((value: string) => {
    onInputChange(value);
  }, 400);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState(value);
    handleChange(value);
  };

  return (
    <div className="relative w-full">
      <input
        className="w-full rounded-sm border-b border-black px-10 py-1 uppercase outline-none"
        onChange={handleInputChange}
        value={state}
        placeholder={placeholder}
        {...inputProps}
      />
      <div className="absolute left-3 top-0 mr-3 mt-2">
        <FaMagnifyingGlass />
      </div>
    </div>
  );
};
