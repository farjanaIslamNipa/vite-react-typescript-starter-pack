import {ButtonHTMLAttributes, DetailedHTMLProps, forwardRef} from 'react';
import cn from '../../utils/cn';

type TRef = HTMLButtonElement;
type TVariant = 'outlinedPill' | 'solidPill' | 'outline'
type TButtonOptions = {
  variant?: TVariant
}
type TButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>& TButtonOptions ;


const Button = forwardRef<TRef, TButton>(({ className, variant = 'outline', children, ...rest }, ref) => {

  const getVariant = (variant : TVariant) => {
    switch (variant) {
      case 'outline':
        return 'btn-outline';
      case 'outlinedPill':
        return 'btn-outlined-pill';
      case 'solidPill':
        return 'btn-solid-pill';
      default:
        return 'btn-solid'
    }
  }
  return (
    <button {...rest} ref={ref} className={cn(getVariant(variant), className)}>
      { children }
    </button>
  );
});

export default Button;