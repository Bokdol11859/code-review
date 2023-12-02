interface LabelProps {
  children: React.ReactNode;
  textColor: string;
  backgroundColor: string;
}

function Label({ children, textColor, backgroundColor }: LabelProps) {
  return (
    <div
      style={{
        color: textColor,
        backgroundColor: backgroundColor,
      }}
      className="px-4 rounded-[50px]"
    >
      {children}
    </div>
  );
}
export default Label;
