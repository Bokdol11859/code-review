import {
  ComponentProps,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  useState,
} from 'react';

interface InputProps extends ComponentProps<'textarea'> {
  label: string;
}

const TextArea = forwardRef(
  (
    { label, id, ...rest }: InputProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const [isFouced, setIsFocused] = useState(false);

    const isInputValue = rest.value;

    function handleFocus(e: FocusEvent<HTMLTextAreaElement>) {
      rest.onFocus?.(e);
      setIsFocused(true);
    }

    function handleBlur(e: FocusEvent<HTMLTextAreaElement>) {
      rest.onBlur?.(e);
      setIsFocused(false);
    }

    return (
      <div
        className={
          'flex items-center p-4 rounded-medium h-14 flex-col relative' +
          `${
            isFouced
              ? ' bg-neutral-background-strong border border-neutral-border-active'
              : ' bg-neutral-background-bold border border-neutral-background-bold'
          }` +
          ` ${rest.className}`
        }
      >
        <label
          htmlFor={id}
          className={
            'flex items-center  cursor-text text-neutral-text focus:text-neutral-text-weak w-full' +
            ` ${!rest.value && !isFouced ? 'text-M' : ''}` +
            ` ${isInputValue || isFouced ? 'text-S' : ''}`
          }
        >
          {label}
        </label>

        <textarea
          {...rest}
          id={id}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full bg-inherit focus:outline-none text-neutral-text-strong text-M grow resize-none"
        />

        <div className="flex gap-2 absolute bottom-4 right-4">
          <span className="text-neutral-text-weak text-S">{`띄어쓰기 포함 ${
            (rest.value as string).length
          }자`}</span>

          <img src="/public/grip.svg" alt="그립" className="w-5 h-5" />
        </div>
      </div>
    );
  }
);

export default TextArea;
