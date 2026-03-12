import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button"> & {
  success?: boolean;
  error?: boolean;
  className?: string;
  variant?: 'default' | 'outline';
};

export default function Button({
  variant = 'default',
  className,
  success,
  error,
  ...props
}: ButtonProps) {
  const defaultClassName = "bg-primary-color cursor-pointer hover:bg-secundary-color text-white text-sm px-5 py-2 rounded-md transition-all duration-150"
  const outlineClassName = "bg-transparent border border-primary-color text-primary-color cursor-pointer hover:bg-transparent text-sm px-5 py-2 rounded-md transition-all duration-150"
  const variantClassname = variant === "default" ? defaultClassName : outlineClassName
  return (
    <button
      data-success={success}
      data-error={error}
      className={twMerge(
        variantClassname,
        className,
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}
