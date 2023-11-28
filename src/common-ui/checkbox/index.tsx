import { ComponentPropsWithoutRef } from 'react';

interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {}

function Checkbox({ checked, onChange }: CheckboxProps) {
  return <input type="checkbox" checked={checked} onChange={onChange} />;
}
export default Checkbox;
