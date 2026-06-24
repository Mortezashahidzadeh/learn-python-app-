import { lessons } from '../data/lessons';
import { UserProgress } from '../store/progress';

interface Props {
  progress: UserProgress;
  onStartLesson: (id: number) => void;
  onGoToLessons: () => void;
}

export default function HomeScreen({ progress, onStartLesson, onGoToLessons }: Props) {
  const totalLessons = lessons.length;
  const completed = progress.completedLessons.length;
  const percent = Math.round((completed / totalLessons) * 100);

  // Next uncompleted lesson
  const nextLesson = lessons.find(l => !progress.completedLessons.includes(l.id));

  const levelMap = {
    'مبتدی': { color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/30' },
    'متوسط': { color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/30' },
    'پیشرفته': { color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/30' },
  };

  const xpLevel = Math.floor(progress.xp / 500) + 1;
  const xpInLevel = progress.xp % 500;

  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-700 via-purple-700 to-violet-800 p-5 mx-0">
        <div className="absolute top-0 right-0 text-8xl opacity-10 -mt-2 -mr-2">🐍</div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">👋</span>
            <h1 className="text-white font-bold text-xl">سلام، برنامه‌نویس!</h1>
          </div>
          <p className="text-indigo-200 text-sm mb-3">پایتون را از صفر تا صد یاد بگیر</p>

          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-1">
            <span className="text-white text-xs font-medium">پیشرفت کلی</span>
            <span className="text-indigo-200 text-xs">{completed}/{totalLessons} درس</span>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-emerald-300 rounded-full transition-all duration-700"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="text-indigo-200 text-xs mt-1 block">{percent}% تکمیل شده</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3 text-center">
          <div className="text-2xl mb-1">⚡</div>
          <div className="text-white font-bold text-lg">{progress.xp}</div>
          <div className="text-slate-400 text-xs">امتیاز XP</div>
        </div>
        <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3 text-center">
          <div className="text-2xl mb-1">🏆</div>
          <div className="text-white font-bold text-lg">سطح {xpLevel}</div>
          <div className="text-slate-400 text-xs">سطح شما</div>
        </div>
        <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3 text-center">
          <div className="text-2xl mb-1">✅</div>
          <div className="text-white font-bold text-lg">{completed}</div>
          <div className="text-slate-400 text-xs">درس کامل</div>
        </div>
      </div>

      {/* XP Progress */}
      <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4">
        <div className="flex justify-between mb-2">
          <span className="text-slate-300 text-sm font-medium">سطح {xpLevel} → سطح {xpLevel + 1}</span>
          <span className="text-indigo-400 text-sm">{xpInLevel}/500 XP</span>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full transition-all"
            style={{ width: `${(xpInLevel / 500) * 100}%` }}
          />
        </div>
      </div>

      {/* Next Lesson CTA */}
      {nextLesson && (
        <div className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-500/40 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-400 text-lg">▶️</span>
            <span className="text-white font-semibold">ادامه یادگیری</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-bold text-lg">{nextLesson.emoji} {nextLesson.title}</div>
              <div className="text-slate-400 text-sm">{nextLesson.duration} • {nextLesson.level}</div>
            </div>
            <button
              onClick={() => onStartLesson(nextLesson.id)}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              شروع
            </button>
          </div>
        </div>
      )}

      {/* Quick Access Lessons */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white font-bold text-lg">دروس اخیر</h2>
          <button onClick={onGoToLessons} className="text-indigo-400 text-sm">همه دروس ←</button>
        </div>
        <div className="flex flex-col gap-2">
          {lessons.slice(0, 5).map(lesson => {
            const isDone = progress.completedLessons.includes(lesson.id);
            const style = levelMap[lesson.level];
            return (
              <button
                key={lesson.id}
                onClick={() => onStartLesson(lesson.id)}
                className="flex items-center gap-3 bg-slate-800/60 border border-slate-700 rounded-xl p-3 text-right hover:border-indigo-500/50 transition-all active:scale-98"
              >
                <span className="text-2xl">{lesson.emoji}</span>
                <div className="flex-1 text-right">
                  <div className="flex items-center gap-2 justify-end">
                    {isDone && <span className="text-green-400 text-xs">✓ تمام شد</span>}
                    <span className="text-white font-medium text-sm">{lesson.title}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-end mt-1">
                    <span className="text-slate-400 text-xs">{lesson.duration}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${style.bg} ${style.color}`}>
                      {lesson.level}
                    </span>
                  </div>
                </div>
                <span className="text-slate-500 text-sm">{isDone ? '🔄' : '▶'}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tip of day */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <div className="text-amber-400 font-semibold text-sm mb-1">نکته روز</div>
            <p className="text-slate-300 text-sm">
              در پایتون همه چیز شیء است! حتی اعداد، رشته‌ها و توابع هم شیء هستند. این همان قدرت OOP پایتون است.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
