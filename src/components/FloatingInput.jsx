import { useId } from "react";


export function FloatingTextarea({
  label,
  value,
  onChange,
  rows = 3,
  error,
}) {
  const id = useId();

  return (
    <div className="relative w-full">
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`
          peer w-full rounded-xl
          border px-4 pt-5 pb-2 text-sm
          outline-none transition resize-none
          ${
            error
              ? "border-red-500 focus:ring-red-100 focus:border-red-500"
              : "border-gray-300 focus:border-green-500 focus:ring-green-100"
          }
          focus:ring-2
        `}
      />

      <label
        htmlFor={id}
        className={`
          absolute left-3 px-1 bg-white transition-all
          pointer-events-none
          ${
            value
              ? "-top-2 text-xs"
              : "top-2 text-sm"
          }
          ${
            error
              ? "text-red-500"
              : "text-gray-500 peer-focus:text-green-600"
          }
          peer-focus:-top-2 peer-focus:text-xs
        `}
      >
        {label}
      </label>

      {error && (
        <p className="absolute right-3 top-3 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}



export function FloatingInput({
  label,
  value,
  onChange,
  type = "text",
  error,
}) {
  const id = useId();

  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`
          peer w-full rounded-xl
          border px-4 pt-5 pb-2 text-sm
          outline-none transition
          ${
            error
              ? "border-red-500 focus:ring-red-100 focus:border-red-500"
              : "border-gray-300 focus:border-green-500 focus:ring-green-100"
          }
          focus:ring-2
        `}
      />

      <label
        htmlFor={id}
        className={`
          absolute left-3 px-1 bg-white transition-all
          pointer-events-none
          ${
            value
              ? "-top-2 text-xs"
              : "top-2 text-sm"
          }
          ${
            error
              ? "text-red-500"
              : "text-gray-500 peer-focus:text-green-600"
          }
          peer-focus:-top-2 peer-focus:text-xs
        `}
      >
        {label}
      </label>

      {error && (
        <p className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
