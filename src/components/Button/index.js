import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder29: "rounded-radius29",
  RoundedBorder13: "rounded-radius13",
  icbRoundedBorder12: "rounded-radius12",
};
const variants = {
  FillWhiteA700: "bg-white_A700 text-indigo_500",
  FillIndigo500: "bg-indigo_500 text-white_A700",
  icbFillBluegray50: "bg-bluegray_50",
};
const sizes = {
  sm: "lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] p-[19px]",
  smIcn: "3xl:p-[10px] p-[12px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder29",
    "RoundedBorder13",
    "icbRoundedBorder12",
  ]),
  variant: PropTypes.oneOf([
    "FillWhiteA700",
    "FillIndigo500",
    "icbFillBluegray50",
  ]),
  size: PropTypes.oneOf(["sm", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "icbRoundedBorder12",
  variant: "icbFillBluegray50",
  size: "smIcn",
};

export { Button };
