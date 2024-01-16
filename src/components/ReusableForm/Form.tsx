
import {TForm} from "../../types";
import cn from "../../utils/cn";

export const Form = ({ children, onSubmit, double }: TForm) => {

  return (
    <form onSubmit={onSubmit} className={cn('border w-full max-w-5xl p-5 mx-auto', {
      'max-w-5xl' : double,
      'max-w-md' : !double
    })}>
      { children }
    </form>
  );
};

