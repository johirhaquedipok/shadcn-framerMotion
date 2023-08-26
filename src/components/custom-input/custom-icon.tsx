import { cn } from "@/lib/utils";
import React, { Fragment } from "react";

const CustomIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, as, ...props }, ref) => {
  const As = as ?? Fragment;
  return (
    <As
      ref={ref}
      className={cn(
        "absolute ml-2 h-6 w-6 text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400",
        className
      )}
      {...props}
    />
  );
});
CustomIcon.displayName = "CustomIcon";
export default CustomIcon;
