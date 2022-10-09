//Third Party Imports
import React from 'react';


interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: React.ReactNode
  onPress?: (event?: any) => void
}

export const Button = (props: IButton) => {
  const {children, onPress, ...buttonProps} = props;
  const baseClasses = "";
  const cssClasses = buttonProps.className ? buttonProps.className.toString() + baseClasses : baseClasses;

  return(
    <button {...buttonProps} className={cssClasses} onClick={onPress}>
      {children}
    </button>
  );
}