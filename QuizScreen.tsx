
import { lessons } from '../data/lessons';
import { UserProgress } from '../store/progress';

interface Props {
  progress: UserProgress;
  onStartLesson: (id: number) => void;
}

export default function QuizScreen({ progress, onStartLesson }: Props) {


  const completedLessons = lessons.filter(l => progress.completedLessons.includes(l.id));
  const avgScore = completedLessons.length > 0
    ? Math.round(
        completedLessons.reduce((sum, l) => sum + (progress.quizScores[l.id] || 0), 0) / completedLessons.length
      )
    : 0;

  const handleRandomQuiz = () => {
    if (lessons.length > 0) {
      const random = lessons[Math.floor(Math.random() * lessons.length)];
      onStartLesson(random.id);
    }
  };

  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 border border-purple-700/30 rounded-2xl p-5">
        <h1 className="text-white font-bold text-xl mb-1">🧩 آزمون‌ها</h1>
        <p className="text-slate-400 text-sm">دانش خود را آزمایش کن</p>
        <div className="flex gap-4 mt-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{completedLessons.length}</div>
            <div className="text-slate-400 text-xs">آزمون داده</div>
          </div>
          <div className="w-px bg-slate-700" />
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{avgScore}%</div>
            <div className="text-slate-400 text-xs">میانگین امتیاز</div>
          </div>
          <div className="w-px bg-slate-700" />
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-400">{progress.xp}</div>
            <div className="text-slate-400 text-xs">امتیاز XP</div>
          </div>
        </div>
      </div>

      {/* Random Quiz */}
      <button
        onClick={handleRandomQuiz}
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-2xl p-5 text-right transition-all shadow-lg shadow-purple-500/30 active:scale-98"
      >
        <div className="text-3xl mb-2">🎲</div>
        <div className="font-bold text-lg">آزمون تصادفی</div>
        <div className="text-purple-200 text-sm mt-1">یک درس تصادفی برای مرور انتخاب کن</div>
      </button>

      {/* Achievement Badges */}
      <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
        <h3 className="text-white font-bold mb-3">🏅 دستاوردها</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: '🐣', title: 'تازه‌کار', desc: 'اولین درس', unlocked: completedLessons.length >= 1 },
            { icon: '📖', title: 'دانش‌آموز', desc: '5 درس', unlocked: completedLessons.length >= 5 },
            { icon: '🎓', title: 'فارغ‌التحصیل', desc: '10 درس', unlocked: completedLessons.length >= 10 },
            { icon: '⚡', title: 'پرامتیاز', desc: '500 XP', unlocked: progress.xp >= 500 },
            { icon: '🏆', title: 'قهرمان', desc: '1000 XP', unlocked: progress.xp >= 1000 },
            { icon: '🐍', title: 'پایتونیست', desc: 'همه دروس', unlocked: completedLessons.length >= lessons.length },
          ].map((badge, i) => (
            <div key={i} className={`rounded-xl p-3 text-center border ${
              badge.unlocked
                ? 'bg-indigo-900/30 border-indigo-700/40'
                : 'bg-slate-900/30 border-slate-800 opacity-40'
            }`}>
              <div className="text-3xl mb-1">{badge.icon}</div>
              <div className={`text-xs font-bold ${badge.unlocked ? 'text-white' : 'text-slate-600'}`}>{badge.title}</div>
              <div className="text-slate-500 text-xs">{badge.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lesson Scores */}
      <div>
        <h3 className="text-white font-bold mb-3">📊 نتایج آزمون‌ها</h3>
        <div className="flex flex-col gap-2">
          {lessons.map(lesson => {
            const score = progress.quizScores[lesson.id];
            const isDone = progress.completedLessons.includes(lesson.id);
            return (
              <button
                key={lesson.id}
                onClick={() => onStartLesson(lesson.id)}
                className="flex items-center gap-3 bg-slate-800/60 border border-slate-700 rounded-xl p-3 text-right hover:border-indigo-500/40 transition-all"
              >
                <span className="text-2xl">{lesson.emoji}</span>
                <div className="flex-1">
                  <div className="text-white text-sm font-medium">{lesson.title}</div>
                  {isDone && score !== undefined ? (
                    <div className="mt-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-slate-400">{score}%</span>
                        <span className="text-xs text-slate-500">امتیاز</span>
                      </div>
                      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="text-slate-500 text-xs mt-0.5">
                      {isDone ? 'آزمون داده نشده' : 'هنوز نخوانده‌ای'}
                    </div>
                  )}
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  !isDone ? 'bg-slate-700 text-slate-400' :
                  score >= 80 ? 'bg-green-900/50 text-green-400' :
                  score >= 60 ? 'bg-yellow-900/50 text-yellow-400' :
                  'bg-red-900/50 text-red-400'
                }`}>
                  {!isDone ? '🔒' : score >= 80 ? '⭐⭐⭐' : score >= 60 ? '⭐⭐' : '⭐'}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
