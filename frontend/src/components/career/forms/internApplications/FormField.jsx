/* eslint-disable react/prop-types */

const FormField = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  options,
  rows,
  accept,
  required = true,
  ref,
}) => {
  const baseClasses =
    "w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-secondary dark:bg-dark-bg text-primary dark:text-dark-text font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 placeholder:text-text-secondary/40 dark:placeholder:text-dark-textSecondary/40";

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-primary dark:text-dark-text font-heading font-bold text-sm uppercase tracking-wider"
      >
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${baseClasses} min-h-[120px] resize-none`}
          rows={rows || 4}
          required={required}
        />
      ) : type === "select" ? (
        <div className="relative">
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={`${baseClasses} appearance-none cursor-pointer`}
            required={required}
          >
            {options.map((option) => (
              <option 
                key={option.value} 
                value={option.value}
                className="bg-secondary dark:bg-dark-bg text-primary dark:text-dark-text"
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary/60">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      ) : type === "file" ? (
        <div className="group relative">
          <input
            id={id}
            name={name}
            type="file"
            accept={accept}
            onChange={onChange}
            ref={ref}
            className="hidden"
            required={required}
          />
          <label
            htmlFor={id}
            className={`${baseClasses} flex items-center justify-center border-dashed cursor-pointer group-hover:border-accent group-hover:bg-accent/5`}
          >
            <span className="text-text-secondary dark:text-dark-textSecondary">
              {value ? value.name : placeholder || "Click to upload file"}
            </span>
          </label>
        </div>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseClasses}
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;
