import React from 'react';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  /** Which variant look would you like to use */
  variant: 'primary' | 'secondary';
  /** Provide a text for the button */
  children: React.ReactNode;
}

/** This is a special button */
export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'lightblue' : 'lightpink',
      }}
    >
      {children}
    </button>
  );
};
