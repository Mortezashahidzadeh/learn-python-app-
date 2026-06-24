import { lessons } from '../data/lessons';
import { UserProgress } from '../store/progress';

interface Props {
  progress: UserProgress;
  onReset: () => void;
}

export default function ProfileScreen({ progress, onReset }: Props) {
  const totalLessons = lessons.length;
  const completed = progress.completedLessons.length;
  const percent = Math.round((completed / totalLessons) * 100);
  const xpLevel = Math.floor(progress.xp / 500) + 1;
  const xpInLevel = progress.xp % 500;

  const avgScore = completed > 0
    ? Math.round(
        Object.values(progress.quizScores).reduce((a, b) => a + b, 0) /
        Object.values(progress.quizScores).length
      )
    : 0;

  const handleReset = () => {
    if (window.confirm('مطمئنی؟ همه پیشرفت‌هایت پاک می‌شود!')) {
      onReset();
    }
  };

  const installInstructions = [
    { step: 1, text: 'سایت را در مرورگر Chrome اندروید باز کن' },
    { step: 2, text: 'روی ⋮ (سه نقطه بالا) کلیک کن' },
    { step: 3, text: '"افزودن به صفحه اصلی" یا "Install App" را انتخاب کن' },
    { step: 4, text: 'روی "نصب" ضربه بزن' },
    { step: 5, text: 'اپ روی هوم‌اسکرین نصب می‌شود! 🎉' },
  ];

  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-indigo-800/40 to-purple-800/40 border border-indigo-700/30 rounded-2xl p-5 text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl mx-auto mb-3">
          🐍
        </div>
        <h2 className="text-white font-bold text-xl">پایتون‌کار</h2>
        <p className="text-slate-400 text-sm mt-1">سطح {xpLevel} • {progress.xp} XP</p>

        {/* Level Progress */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>سطح {xpLevel}</span>
            <span>{xpInLevel}/500 XP</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full transition-all duration-700"
              style={{ width: `${(xpInLevel / 500) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: '📚', label: 'دروس تکمیل شده', value: `${completed}/${totalLessons}` },
          { icon: '📊', label: 'میانگین امتیاز', value: `${avgScore}%` },
          { icon: '⚡', label: 'کل XP', value: progress.xp },
          { icon: '🔖', label: 'بوک‌مارک', value: progress.bookmarks.length },
        ].map((stat, i) => (
          <div key={i} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-white font-bold text-xl">{stat.value}</div>
            <div className="text-slate-400 text-xs">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Overall Progress */}
      <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
        <div className="flex justify-between mb-2">
          <span className="text-indigo-400 font-bold text-sm">{percent}% پیشرفت</span>
          <span className="text-slate-400 text-sm">پیشرفت کلی دوره</span>
        </div>
        <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-700"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          {['مبتدی', 'متوسط', 'پیشرفته'].map((level, i) => (
            <div key={i} className="text-center">
              <div className="text-xs text-slate-500">{level}</div>
              <div className="text-white font-bold text-sm">
                {lessons.filter(l => l.level === level && progress.completedLessons.includes(l.id)).length}/
                {lessons.filter(l => l.level === level).length}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Install Guide */}
      <div className="bg-green-900/20 border border-green-700/40 rounded-2xl p-4">
        <h3 className="text-green-400 font-bold text-base mb-3 flex items-center gap-2">
          📱 نصب روی اندروید
        </h3>
        <div className="flex flex-col gap-2">
          {installInstructions.map(item => (
            <div key={item.step} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-green-700/50 text-green-300 text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                {item.step}
              </span>
              <p className="text-green-200 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 bg-green-800/20 rounded-lg p-3">
          <p className="text-green-300 text-xs">
            💡 این اپ یک Progressive Web App (PWA) است. بدون اینترنت هم کار می‌کند!
          </p>
        </div>
      </div>

      {/* Roadmap */}
      <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
        <h3 className="text-white font-bold mb-3">🗺️ مسیر یادگیری</h3>
        <div className="flex flex-col gap-1">
          {[
            { label: 'مبانی پایتون', lessons: '۱-۶', done: completed >= 6 },
            { label: 'توابع و ساختارها', lessons: '۷-۹', done: completed >= 9 },
            { label: 'OOP و فایل‌ها', lessons: '۱۰-۱۲', done: completed >= 12 },
            { label: 'ماژول‌ها و پروژه', lessons: '۱۳-۱۵', done: completed >= 15 },
          ].map((stage, i) => (
            <div key={i} className="flex items-center gap-3 py-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                stage.done ? 'bg-green-500 text-white' : 'bg-slate-700 text-slate-400'
              }`}>
                {stage.done ? '✓' : i + 1}
              </div>
              <div className="flex-1">
                <div className={`font-medium text-sm ${stage.done ? 'text-white' : 'text-slate-400'}`}>
                  {stage.label}
                </div>
                <div className="text-slate-500 text-xs">دروس {stage.lessons}</div>
              </div>
              {stage.done && <span className="text-green-400 text-xs">✅ کامل</span>}
            </div>
          ))}
        </div>
      </div>

      {/* App Info */}
      <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4 text-center">
        <div className="text-3xl mb-2">🐍</div>
        <div className="text-white font-bold">پایتون یاد بگیر</div>
        <div className="text-slate-400 text-sm">نسخه ۱.۰.۰ • PWA</div>
        <div className="text-slate-500 text-xs mt-1">ساخته شده با ❤️ برای یادگیرندگان فارسی‌زبان</div>
      </div>

      {/* Reset Button */}
      <button
        onClick={handleReset}
        className="w-full bg-red-900/30 border border-red-700/40 hover:bg-red-900/50 text-red-400 font-medium py-3 rounded-xl transition-colors"
      >
        🗑️ پاک کردن پیشرفت
      </button>
    </div>
  );
}
