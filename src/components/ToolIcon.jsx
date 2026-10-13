import { getToolById } from '../data/tools';

// One tool icon in a round chip with the hover/focus pop-up showing its name.
// Used wherever tools appear as icons only (home "My Stack", case-study headers).
// `className` styles the chip (size, background, shadow); extra props (e.g. data-*) go on the chip.
export default function ToolIcon({ id, className = '', iconClassName = 'w-5 h-5', ...rest }) {
  const tool = getToolById(id);
  if (!tool) return null;

  return (
    <div className={`group relative flex items-center justify-center rounded-pill cursor-pointer ${className}`} {...rest}>
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2.5 py-1 font-grotesk text-xs font-medium text-text-inverse opacity-0 transition-opacity duration-150 group-hover:opacity-100"
      >
        {tool.name}
      </span>
      <img src={tool.icon} alt={tool.name} width={24} height={24} className={`object-contain ${iconClassName}`} />
    </div>
  );
}
