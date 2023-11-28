import { ComponentPropsWithoutRef } from 'react';

interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {}

function Checkbox({ ...rest }: CheckboxProps) {
  return <input type="checkbox" {...rest} />;
}
export default Checkbox;
