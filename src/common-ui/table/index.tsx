import { ReactNode, createContext, useContext } from 'react';

interface TableContextType {
  columns: string;
}

interface TableProps {
  columns: string;
  children: ReactNode;
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

const TableContext = createContext<TableContextType>(null!);

function Table({ columns, children }: TableProps) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="border border-solid border-neutral-border rounded-large overflow-hidden">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }: HeaderProps) {
  const { columns } = useContext(TableContext);

  return (
    <div
      style={{ gridTemplateColumns: columns }}
      className={`grid gap-8 py-4 px-8 bg-neutral-background border-b border-solid border-neutral-border`}
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
  const { columns } = useContext(TableContext);

  return (
    <div
      style={{ gridTemplateColumns: columns }}
      className={`grid gap-8 py-4 px-8 border-b last:border-b-0 border-solid border-neutral-border`}
    >
      {children}
    </div>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
