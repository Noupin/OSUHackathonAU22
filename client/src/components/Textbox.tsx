//Third Party Imports
import React from 'react';


export interface ITextBox extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  type: string
  placeholder: string
}

export const TextBox = (props: ITextBox) => {
  const {onBlur, type, placeholder, ...textboxProps} = props;
  const cssClasses = textboxProps.className?.toString() + " textbox";


  return (
    <input {...textboxProps} className={cssClasses} type={type} placeholder={placeholder} onBlur={onBlur}/>
  );
}