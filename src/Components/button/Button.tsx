import type { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "danger" | "success" | "warning";

type TButton = ComponentProps<"button"> & {
  variant: TVariant;
};

function Button({ variant, children, ...rest }: TButton) {
  // Create ClassName based on variant
  let clsName: string;
  switch (variant) {
    case "primary":
      clsName = "bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors duration-300 cursor-pointer";
      break;
    case "secondary":
      clsName = "bg-gray-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-gray-600 transition-colors duration-300 cursor-pointer";
      break;
    case "danger":
      clsName = "bg-red-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-red-600 transition-colors duration-300 cursor-pointer";
      break;
    case "success":
      clsName = "bg-green-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-green-600 transition-colors duration-300 cursor-pointer";
      break;
    case "warning":
      clsName = "bg-yellow-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-yellow-600 transition-colors duration-300 cursor-pointer";
      break;
    default:
      clsName = "bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors duration-300 cursor-pointer"; // default to primary color
  }

  return (
    <button
      {...rest}
      className={clsName}
    >
      {children}
    </button>
  );
}

export default Button;
