import React, { LegacyRef, forwardRef } from 'react';

import {
  BUTTON,
  ROUNDED,
  SPACING,
  TEXT_ALIGN,
  TEXT_ALIGN_VARIANTS,
  XPADDING_VARIANT,
  YPADDING_VARIANT,
} from 'entities/tailwind';

export interface ButtonComponentProps {
  fill?: boolean;
  onClick?: () => void;
  label?: string | React.ReactNode;
  isLoading?: boolean;
  variant?: BUTTON;
  align?: TEXT_ALIGN;
  salt?: React.ComponentProps<'div'>['className'];
  noPadding?: boolean;
  yPadding?: SPACING;
  xPadding?: SPACING;
  rounded?: ROUNDED;
  height?: React.ComponentProps<'div'>['className'];
  width?: React.ComponentProps<'div'>['className'];
}

const ROUNDED_VARIANT: Record<ROUNDED, string> = {
  [ROUNDED.NONE]: 'rounded-none',
  [ROUNDED.RESET]: '',
  [ROUNDED.SMALL]: 'rounded-sm',
  [ROUNDED.MEDIUM]: 'rounded-md',
  [ROUNDED.NORMAL]: 'rounded',
  [ROUNDED.LARGE]: 'rounded-lg',
  [ROUNDED.XL]: 'rounded-xl',
  [ROUNDED.XXL]: 'rounded-2xl',
  [ROUNDED.XXXL]: 'rounded-3xl',
  [ROUNDED.FULL]: 'rounded-full',
};

const BUTTON_VARIANT: Record<BUTTON, string> = {
  [BUTTON.primary]: 'bg-primary text-white',
  [BUTTON.secondary]: 'bg-secondary text-white',
  [BUTTON.reset]: '',
};

const Button = forwardRef(
  (props: ButtonComponentProps, ref: LegacyRef<HTMLButtonElement>) => {
    const {
      fill,
      isLoading,
      label,
      onClick,
      variant,
      align,
      salt,
      noPadding,
      yPadding,
      xPadding,
      rounded,
      height,
      width,
      ...etc
    } = props;

    const renderButtonContent = () => {
      if (isLoading) {
        if (variant) {
          const getLoaderColor = (buttonType: BUTTON | string): string => {
            switch (buttonType) {
              case BUTTON.primary:
                return 'dark:text-gray-100';
              case BUTTON.reset:
                return 'dark:text-gray-300';
              case BUTTON.secondary:
                return 'dark:text-gray-300';
              default:
                return 'dark:text-gray-100';
            }
          };

          const outlineColor = getLoaderColor(variant);

          return (
            <div role="status" className="flex items-center justify-center">
              <svg
                aria-hidden="true"
                className={`max-h-[1.6rem] animate-spin text-gray-200 ${outlineColor} fill-rose-300`}
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading ...</span>
            </div>
          );
        }

        return (
          <div>
            <div role="status" className="flex items-center justify-center">
              <svg
                aria-hidden="true"
                className="max-h-[1.6rem] animate-spin fill-rose-300 text-gray-200 dark:text-gray-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        );
      }
      return label;
    };

    // Border Radius
    const borderRounded =
      rounded !== undefined ? ROUNDED_VARIANT[rounded] : ROUNDED_VARIANT[ROUNDED.XXXL];

    // Paddings
    const buttonYPadding =
      yPadding !== undefined
        ? YPADDING_VARIANT[yPadding]
        : YPADDING_VARIANT[SPACING.extraSmall];
    const buttonXPadding =
      xPadding !== undefined
        ? XPADDING_VARIANT[xPadding]
        : XPADDING_VARIANT[SPACING.large];
    const buttonPadding = noPadding ? '' : `${buttonXPadding} ${buttonYPadding}`;

    // Button Color
    const buttonColor =
      variant === undefined ? BUTTON_VARIANT[BUTTON.primary] : BUTTON_VARIANT[variant];

    const buttonHeight = height ?? 'h-fit'; // Button Area -> Height

    const buttonWidth = width ?? 'min-w-fit'; // Button Area -> Width
    const buttonFullWidth = fill ? 'w-full' : buttonWidth;
    const buttonArea = `${buttonHeight} ${buttonFullWidth}`; // Button Area - Width x Height

    // Button Spacing
    const buttonSpacing = `${buttonArea} ${buttonPadding.trim()}`;

    // Button Text Alignment
    const buttonTextAlignment =
      align === undefined
        ? TEXT_ALIGN_VARIANTS[TEXT_ALIGN.center]
        : TEXT_ALIGN_VARIANTS[align];

    // Custom Tailwind Styles
    const addOn = salt !== undefined ? salt.trim() : '';

    // Final Classname
    const newClassname = [
      buttonSpacing.trim(),
      buttonColor.trim(),
      buttonTextAlignment,
      borderRounded.trim(),
      addOn.trim(),
    ].join(' ');

    return (
      <button
        type="button"
        ref={ref}
        className={variant === BUTTON.reset ? addOn.trim() : newClassname}
        onClick={onClick}
        disabled={isLoading}
        {...etc}
      >
        {renderButtonContent()}
      </button>
    );
  },
);

Button.defaultProps = {
  fill: false,
  isLoading: false,
  label: 'Button Label',
  onClick: () => null,
  variant: BUTTON.primary,
  align: TEXT_ALIGN.center,
  salt: undefined,
  noPadding: false,
  yPadding: undefined,
  xPadding: undefined,
  rounded: undefined,
  height: undefined,
  width: undefined,
};

export default Button;
