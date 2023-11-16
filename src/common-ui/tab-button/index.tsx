import { Children, Fragment } from 'react';

interface TabProps {
  children: React.ReactNode;
}

function TabButton({ children }: TabProps) {
  const childrenArray = Children.toArray(children);
  const divisionLine = <div className="bg-neutral-border w-px" />;

  return (
    <div className="inline-flex justify-center align-middle border border-neutral-border bg-neutral-background rounded-regular">
      {childrenArray.map((child, index) => (
        <Fragment key={index}>
          {child}
          {index < childrenArray.length - 1 && divisionLine}
        </Fragment>
      ))}
    </div>
  );
}
export default TabButton;
