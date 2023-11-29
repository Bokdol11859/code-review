import { ReactNode, createContext, useContext } from 'react';

interface TableContextType {
  columns: string;
  size: keyof typeof sizes;
}

interface TableProps {
  columns: string;
  children: ReactNode;
  size: keyof typeof sizes;
}

interface HeaderProps {
  children: ReactNode;
}

interface BodyProps<T> {
  data: T[] | undefined;
  render: (item: T) => ReactNode;
}

interface RowProps {
  children: ReactNode;
}

const sizes = {
  S: ' gap-2 py-2 px-4 ',
  L: ' gap-8 py-4 px-8 ',
};

const TableContext = createContext<TableContextType>(null!);

function Table({ columns, children, size }: TableProps) {
  return (
    <TableContext.Provider value={{ columns, size }}>
      <div className="border border-solid border-neutral-border rounded-large overflow-hidden">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }: HeaderProps) {
  const { columns, size } = useContext(TableContext);

  return (
    <div
      style={{ gridTemplateColumns: columns }}
      className={`grid ${sizes[size]} bg-neutral-background border-b border-solid border-neutral-border`}
    >
      {children}
    </div>
  );
}

function Body<T>({ data, render }: BodyProps<T>) {
  if (!data || data.length === 0)
    return <p className="text-center m-6">표시할 항목이 없습니다</p>;

  return <div className="bg-neutral-background-strong">{data.map(render)}</div>;
}

function Row({ children }: RowProps) {
  const { columns, size } = useContext(TableContext);

  return (
    <div
      style={{ gridTemplateColumns: columns }}
      className={`grid ${sizes[size]} border-b last:border-b-0 border-solid border-neutral-border bg-neutral-background-strong`}
    >
      {children}
    </div>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
