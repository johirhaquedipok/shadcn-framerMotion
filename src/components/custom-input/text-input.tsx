import { FormControl } from "@/components/ui/form";

type Props = {
  children: JSX.Element;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
};

const TextInput = ({ leftIcon, rightIcon, children }: Props) => {
  return (
    <div className=" flex items-center relative">
      {leftIcon ? leftIcon : null}
      <FormControl>{children}</FormControl>
      {rightIcon ? leftIcon : null}
    </div>
  );
};

export default TextInput;
