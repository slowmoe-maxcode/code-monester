import React from "react";
const variantClasses = {
  h1: "font-normal lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px]",
  h2: "font-normal lg:text-[13px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px]",
  h3: "font-normal lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px]",
  h4: "font-normal lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px]",
  h5: "font-normal xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] lg:text-[9px]",
  h6: "font-normal 3xl:text-[10px] text-[12px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
