import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function Input({ type = 'text', className = '',placeholder='', isFocused = false,isStep=false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            step={isStep ? "0.01" : ""}
            className={
                "py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 shadow-sm " +
                className
            }
            placeholder={placeholder}
            ref={input}
        />
    );
});
