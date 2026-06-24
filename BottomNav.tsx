

type Tab = 'home' | 'lessons' | 'quiz' | 'profile';

interface Props {
  active: Tab;
  onChange: (tab: Tab) => void;
}

const tabs: { id: Tab; icon: string; label: string }[] = [
  { id: 'home', icon: '🏠', label: 'خانه' },
  { id: 'lessons', icon: '📚', label: 'دروس' },
  { id: 'quiz', icon: '🧩', label: 'آزمون' },
  { id: 'profile', icon: '👤', label: 'پروفایل' },
];

export default function BottomNav({ active, onChange }: Props) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700 safe-area-pb">
      <div className="flex items-center justify-around py-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 ${
              active === tab.id
                ? 'text-indigo-400 scale-110'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <span className="text-2xl">{tab.icon}</span>
            <span className="text-xs font-medium">{tab.label}</span>
            {active === tab.id && (
              <div className="w-1 h-1 rounded-full bg-indigo-400" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
