import { clsx } from "clsx";

export const Sidebar = ({ categories, activeId, onChange }) => {
  return (
    <aside className="w-64 fixed inset-y-0 left-0 bg-surface border-r border-border overflow-y-auto flex flex-col z-10">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold text-text">Dev Dashboard</h2>
        <span className="inline-block mt-2 px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-md uppercase tracking-wider">
          Enterprise Mode
        </span>
      </div>
      
      <nav className="flex-1 py-6 px-4 space-y-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={clsx(
              "w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
              activeId === cat.id
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                : "text-muted hover:text-text hover:bg-background"
            )}
          >
            {cat.title}
          </button>
        ))}
      </nav>
    </aside>
  );
};
