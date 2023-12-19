import { Children, ReactNode } from 'react';

interface SideBarProps {
  children: ReactNode;
}

function SideBar({ children }: SideBarProps) {
  return (
    <div className="border border-neutral-background-bold divide-y divide-inherit rounded-large overflow-hidden h-fit">
      {Children.map(children, (child) => (
        <div className="flex flex-col gap-4 p-8 bg-neutral-background-strong">
          {child}
        </div>
      ))}
    </div>
  );
}
export default SideBar;
