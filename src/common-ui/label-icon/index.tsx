interface LabelIconProps {
  backgroundColor: string;
}

function LabelIcon({ backgroundColor }: LabelIconProps) {
  return <div style={{ backgroundColor }} className="w-5 h-5 rounded-full" />;
}
export default LabelIcon;
