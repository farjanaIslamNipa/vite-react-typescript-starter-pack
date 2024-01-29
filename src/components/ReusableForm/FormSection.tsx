import {useContext} from "react";
import cn from "../../utils/cn";
import {FormElementContext} from "../../pages/ModalHome";

export const FormSection = ({ children }) => {
  const {double} = useContext(FormElementContext)
  return (
    <div className={cn('grid grid-cols-1 gap-5', {
      'md:grid-cols-2' : double
    })}>
      { children }
    </div>
  );
};