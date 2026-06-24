import { useState } from 'react';
import { lessons } from '../data/lessons';
import { UserProgress } from '../store/progress';

interface Props {
  progress: UserProgress;
  onStartLesson: (id: number) => void;
}

type Filter = 'همه' | 'مبتدی' | 'متوسط' | 'پیشرفته' | 'بوک‌مارک';

export default function LessonsScreen({ progress, onStartLesson }: Props) {
  const [filter, setFilter] = useState<Filter>('همه');
  const [search, setSearch] = useState('');

  const levelColors = {
    'مبتدی': { text: 'text-green-400', bg: 'bg-green-400/10 border-green-400/30', dot: 'bg-green-400' },
    'متوسط': { text: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/30', dot: 'bg-yellow-400' },
    'پیشرفته': { text: 'text-red-400', bg: 'bg-red-400/10 border-red-400/30', dot: 'bg-red-400' },
  };

  const filters: Filter[] = ['همه', 'مبتدی', 'متوسط', 'پیشرفته', 'بوک‌مارک'];

  const filtered = lessons.filter(lesson => {
    const matchSearch = lesson.title.includes(search) || lesson.description.includes(search);
    const matchFilter =
      filter === 'همه' ? true :
      filter === 'بوک‌مارک' ? progress.bookmarks.includes(lesson.id) :
      lesson.level === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-800/40 to-purple-800/40 border border-indigo-700/30 rounded-2xl p-4">
        <h1 className="text-white font-bold text-xl mb-1">📚 همه دروس</h1>
        <p className="text-slate-400 text-sm">{lessons.length} درس از پایه تا پیشرفته</p>
        <div className="flex items-center gap-3 mt-3">
          <div className="flex-1 bg-slate-700/50 rounded-lg px-3 py-2 flex items-center gap-2">
            <span className="text-slate-400">🔍</span>
            <input
              type="text"
              placeholder="جستجو در دروس..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-transparent text-white text-sm outline-none flex-1 placeholder-slate-500 text-right"
              dir="rtl"
            />
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === f
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                : 'bg-slate-800 text-slate-400 border border-slate-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Stats Bar */}
      <div className="flex gap-3 text-center">
        <div className="flex-1 bg-slate-800/60 border border-slate-700 rounded-xl p-3">
          <div className="text-green-400 font-bold text-lg">{progress.completedLessons.length}</div>
          <div className="text-slate-500 text-xs">تکمیل شده</div>
        </div>
        <div className="flex-1 bg-slate-800/60 border border-slate-700 rounded-xl p-3">
          <div className="text-yellow-400 font-bold text-lg">{lessons.length - progress.completedLessons.length}</div>
          <div className="text-slate-500 text-xs">باقی‌مانده</div>
        </div>
        <div className="flex-1 bg-slate-800/60 border border-slate-700 rounded-xl p-3">
          <div className="text-indigo-400 font-bold text-lg">{progress.bookmarks.length}</div>
          <div className="text-slate-500 text-xs">بوک‌مارک</div>
        </div>
      </div>

      {/* Lessons List */}
      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-3">🔍</div>
          <p className="text-slate-400">درسی یافت نشد</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((lesson, idx) => {
            const isDone = progress.completedLessons.includes(lesson.id);
            const isBookmarked = progress.bookmarks.includes(lesson.id);
            const score = progress.quizScores[lesson.id];
            const style = levelColors[lesson.level];
            const isLocked = idx > 0 && !progress.completedLessons.includes(lessons[idx - 1].id) && idx > 2;

            return (
              <button
                key={lesson.id}
                onClick={() => !isLocked && onStartLesson(lesson.id)}
                className={`relative flex items-center gap-4 border rounded-2xl p-4 text-right transition-all duration-200 ${
                  isDone
                    ? 'bg-green-900/20 border-green-700/40 hover:border-green-500/60'
                    : isLocked
                    ? 'bg-slate-800/30 border-slate-800 opacity-60'
                    : 'bg-slate-800/60 border-slate-700 hover:border-indigo-500/60 active:scale-98'
                }`}
              >
                {/* Lesson Number */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${
                  isDone ? 'bg-green-500/20' : 'bg-slate-700/60'
                }`}>
                  {isDone ? '✅' : lesson.emoji}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 justify-end">
                    {isBookmarked && <span className="text-yellow-400 text-xs">🔖</span>}
                    {isDone && score !== undefined && (
                      <span className="text-green-400 text-xs">{score}%</span>
                    )}
                    <span className="text-white font-bold text-base">{lesson.title}</span>
                    <span className="text-slate-500 text-sm">#{lesson.id}</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-0.5">{lesson.description}</p>
                  <div className="flex items-center gap-2 justify-end mt-2">
                    <span className="text-slate-500 text-xs">⏱ {lesson.duration}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${style.bg} ${style.text}`}>
                      {lesson.level}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-slate-500 flex-shrink-0">
                  {isLocked ? '🔒' : isDone ? '🔄' : '▶'}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
