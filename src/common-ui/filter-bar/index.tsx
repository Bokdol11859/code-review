import {
  ReactNode,
  createContext,
  useContext,
  useState,
  ComponentProps,
  ChangeEvent,
  forwardRef,
} from 'react';

interface FilterContextType {
  isFocused: boolean;
  focus: () => void;
  blur: () => void;
}

const FilterBarContext = createContext<FilterContextType>(null!);

interface FilterBarProps {
  children: ReactNode;
}

interface SearchFilterProps {
  children: ReactNode;
}

interface InputProps extends ComponentProps<'input'> {}

function FilterBar({ children }: FilterBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  function focus() {
    setIsFocused(true);
  }

  function blur() {
    setIsFocused(false);
  }

  return (
    <FilterBarContext.Provider value={{ isFocused, focus, blur }}>
      <div className="flex w-[600px] h-10 border border-solid border-neutral-border rounded-regular overflow-hidden">
        {children}
      </div>
    </FilterBarContext.Provider>
  );
}

function SearchFilter({ children }: SearchFilterProps) {
  const { isFocused } = useContext(FilterBarContext);

  return (
    <div
      className={`flex items-center h-full ${
        isFocused ? 'bg-neutral-background-strong' : 'bg-neutral-background'
      } text-neutral-text-weak`}
    >
      {children}
    </div>
  );
}

function Divider() {
  return <div className="bg-neutral-border w-px h-full" />;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { isFocused, focus, blur } = useContext(FilterBarContext);
  const [inputValue, setInputValue] = useState('');

  function handleFocus() {
    if (!inputValue && props.placeholder) {
      setInputValue(props.placeholder);
    }
    focus();
  }

  function handleBlur() {
    blur();
    setInputValue('');
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <div
      className={`flex justify-center items-center gap-2 grow ${
        isFocused
          ? 'bg-neutral-background-strong'
          : 'bg-neutral-background-bold'
      }`}
    >
      <img src="/public/search.svg" alt="검색" className="w-4 h-4" />
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={inputValue}
        onChange={handleChange}
        className={`w-[400px] h-full focus:outline-none bg-inherit placeholder:text-neutral-text-weak ${
          isFocused
            ? 'bg-neutral-background-strong text-neutral-text-strong'
            : 'bg-neutral-background-bold text-neutral-text-weak'
        }`}
        ref={ref}
        {...props}
      />
    </div>
  );
});
FilterBar.SearchFilter = SearchFilter;
FilterBar.Divider = Divider;
FilterBar.Input = Input;

export default FilterBar;
