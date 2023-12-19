interface RadioButtonProps {
  checked: boolean;
}

function RadioButton({ checked }: RadioButtonProps) {
  return checked ? (
    <img src="/public/check-on-circle.svg" alt="미선택된 옵션" />
  ) : (
    <img src="/public/check-off-circle.svg" alt="선택된 옵션" />
  );
}
export default RadioButton;
