import { FormControl } from "@/components/ui/form";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { HiOutlineLockClosed } from "react-icons/hi2";

type Props = {
  children: JSX.Element;
};

const CustomTextInput = ({ children }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  // password toggle handle
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className=" flex items-center relative">
      <HiOutlineLockClosed className="absolute ml-2 h-6 w-6 text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" />
      <FormControl>{children}</FormControl>

      <button
        type="button"
        onClick={togglePassword}
        className="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto"
      >
        {showPassword ? (
          <EyeOpenIcon className="mx-3 h-5 w-5 text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" />
        ) : (
          <EyeClosedIcon className="mx-3 h-5 w-5 text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" />
        )}
      </button>
    </div>
  );
};

export default CustomTextInput;
