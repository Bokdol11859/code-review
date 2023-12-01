import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const WINDOW_WIDTH = 240;

interface Position {
  x: number;
  y: number;
}

interface MenuContextType {
  openedId: string;
  open: (id: string) => void;
  close: () => void;
  position: Position;
  setPosition: Dispatch<SetStateAction<Position>>;
}

interface MenuProps {
  children: ReactNode;
}

interface OpenButtonProps {
  id: string;
  children: ReactNode;
  windowPosition: 'left' | 'center' | 'right';
}

interface WindowProps {
  id: string;
  children: ReactNode;
}

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

const MenuContext = createContext<MenuContextType>(null!);

function Menus({ children }: MenuProps) {
  const [openedId, setOpenedId] = useState('');
  const [position, setPosition] = useState<Position>(null!);

  const open = (id: string) => setOpenedId(id);
  const close = () => setOpenedId('');

  return (
    <MenuContext.Provider
      value={{ openedId, open, close, position, setPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function OpenButton({ id, children, windowPosition }: OpenButtonProps) {
  const { openedId, open, close, setPosition } = useContext(MenuContext);

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const rect = (e.target as HTMLDivElement)
      .closest(`#${id}`)
      ?.getBoundingClientRect();

    let x = rect!.x;
    if (windowPosition === 'center') x -= (WINDOW_WIDTH - rect!.width) / 2;
    if (windowPosition === 'right') x -= WINDOW_WIDTH - rect!.width;
    const y = rect!.y + rect!.height + 8;

    setPosition({ x, y });

    !openedId || openedId !== id ? open(id) : close();
  }

  return (
    <div id={id} onClick={handleClick}>
      {children}
    </div>
  );
}

function Window({ id, children }: WindowProps) {
  const { openedId, position, close } = useContext(MenuContext);
  const windowRef = useOutsideClick<HTMLDivElement>(close);

  if (openedId !== id) return null;

  return createPortal(
    <div
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: `${WINDOW_WIDTH}px`,
      }}
      className={`fixed`}
      ref={windowRef}
    >
      {children}
    </div>,
    document.body
  );
}

function Button({ onClick, children }: ButtonProps) {
  const { close } = useContext(MenuContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <button onClick={handleClick} className="text-start">
      {children}
    </button>
  );
}

Menus.OpenButton = OpenButton;
Menus.Window = Window;
Menus.Button = Button;

export default Menus;
