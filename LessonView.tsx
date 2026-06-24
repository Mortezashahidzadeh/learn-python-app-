import { useState } from 'react';
import { Lesson } from '../data/lessons';
import { UserProgress, markLessonComplete, toggleBookmark } from '../store/progress';

interface Props {
  lesson: Lesson;
  progress: UserProgress;
  onBack: () => void;
  onComplete: (updatedProgress: UserProgress) => void;
  onProgressUpdate: (updated: UserProgress) => void;
}

type Phase = 'reading' | 'quiz' | 'result';

export default function LessonView({ lesson, progress, onBack, onComplete, onProgressUpdate }: Props) {
  const [phase, setPhase] = useState<Phase>('reading');
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);


  const isBookmarked = progress.bookmarks.includes(lesson.id);
  const isCompleted = progress.completedLessons.includes(lesson.id);

  const handleBookmark = () => {
    const updated = toggleBookmark(progress, lesson.id);
    onProgressUpdate(updated);
  };

  const handleAnswerSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    const isCorrect = selected === lesson.quiz[currentQ].correct;
    const newAnswers = [...answers, isCorrect];

    if (currentQ + 1 < lesson.quiz.length) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowExplanation(false);
      setAnswers(newAnswers);
    } else {
      const score = Math.round((newAnswers.filter(Boolean).length / lesson.quiz.length) * 100);
      const updated = markLessonComplete(progress, lesson.id, score);
      onComplete(updated);
      setAnswers(newAnswers);
      setPhase('result');
    }
  };

  const finalScore = phase === 'result' ? Math.round((answers.filter(Boolean).length / lesson.quiz.length) * 100) : 0;

  return (
    <div className="flex flex-col h-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4 sticky top-0 bg-slate-950 py-2 z-10">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <span className="text-lg">←</span>
          <span className="text-sm">بازگشت</span>
        </button>
        <div className="flex items-center gap-3">
          <button onClick={handleBookmark} className={`text-xl ${isBookmarked ? 'text-yellow-400' : 'text-slate-500'}`}>
            {isBookmarked ? '🔖' : '🏷️'}
          </button>
          {isCompleted && <span className="text-green-400 text-sm">✅ تکمیل شده</span>}
        </div>
      </div>

      {/* Reading Phase */}
      {phase === 'reading' && (
        <div className="flex-1 flex flex-col gap-4">
          {/* Lesson Header */}
          <div className="bg-gradient-to-br from-indigo-800/40 to-purple-800/40 border border-indigo-700/30 rounded-2xl p-5">
            <div className="text-5xl mb-3">{lesson.emoji}</div>
            <h1 className="text-white font-bold text-2xl">{lesson.title}</h1>
            <p className="text-slate-400 text-sm mt-1">{lesson.description}</p>
            <div className="flex gap-3 mt-3">
              <span className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full">⏱ {lesson.duration}</span>
              <span className="text-xs bg-indigo-700/40 text-indigo-300 border border-indigo-700/40 px-3 py-1 rounded-full">{lesson.level}</span>
              <span className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full">🧩 {lesson.quiz.length} سوال</span>
            </div>
          </div>

          {/* Content Sections */}
          <div className="flex flex-col gap-4">
            {lesson.content.map((section, idx) => {
              if (section.type === 'text') return (
                <div key={idx} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                  {section.title && <h3 className="text-white font-bold text-base mb-2">{section.title}</h3>}
                  <p className="text-slate-300 text-sm leading-7 whitespace-pre-line">{section.content}</p>
                </div>
              );

              if (section.type === 'code') return (
                <div key={idx} className="rounded-xl overflow-hidden border border-slate-600">
                  <div className="bg-slate-700 px-4 py-2 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-slate-400 text-xs">Python 🐍</span>
                  </div>
                  <div className="bg-slate-900 p-4 overflow-x-auto">
                    <pre className="text-sm font-mono" dir="ltr">
                      {section.content.split('\n').map((line, i) => {
                        const isComment = line.trim().startsWith('#');
                        return (
                          <div key={i} className={`leading-6 ${isComment ? 'text-slate-500' : ''}`}>
                            <span className="text-slate-600 select-none ml-3 text-xs">{String(i + 1).padStart(2, ' ')}</span>
                            {isComment ? (
                              <span className="text-green-600/80">{line}</span>
                            ) : (
                              <span className="text-slate-200">{line}</span>
                            )}
                          </div>
                        );
                      })}
                    </pre>
                  </div>
                </div>
              );

              if (section.type === 'output') return (
                <div key={idx} className="bg-slate-900 border border-slate-700 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400 text-xs font-bold">▶ خروجی:</span>
                  </div>
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-line" dir="ltr">{section.content}</pre>
                </div>
              );

              if (section.type === 'tip') return (
                <div key={idx} className="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4">
                  {section.title && <h4 className="text-blue-300 font-semibold text-sm mb-2">{section.title}</h4>}
                  <p className="text-blue-200 text-sm leading-6 whitespace-pre-line">{section.content}</p>
                </div>
              );

              if (section.type === 'warning') return (
                <div key={idx} className="bg-red-900/20 border border-red-700/40 rounded-xl p-4">
                  {section.title && <h4 className="text-red-300 font-semibold text-sm mb-2">{section.title}</h4>}
                  <p className="text-red-200 text-sm leading-6 whitespace-pre-line">{section.content}</p>
                </div>
              );

              return null;
            })}
          </div>

          {/* Start Quiz Button */}
          <button
            onClick={() => setPhase('quiz')}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 rounded-2xl text-lg transition-all shadow-lg shadow-indigo-500/30 active:scale-98"
          >
            🧩 شروع آزمون ({lesson.quiz.length} سوال)
          </button>
        </div>
      )}

      {/* Quiz Phase */}
      {phase === 'quiz' && (
        <div className="flex-1 flex flex-col gap-4">
          {/* Progress */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all"
                style={{ width: `${((currentQ) / lesson.quiz.length) * 100}%` }}
              />
            </div>
            <span className="text-slate-400 text-sm">{currentQ + 1}/{lesson.quiz.length}</span>
          </div>

          {/* Question */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
            <div className="text-indigo-400 text-xs font-medium mb-2">سوال {currentQ + 1}</div>
            <h2 className="text-white font-bold text-lg leading-7">{lesson.quiz[currentQ].question}</h2>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {lesson.quiz[currentQ].options.map((opt, idx) => {
              const isSelected = selected === idx;
              const isCorrect = idx === lesson.quiz[currentQ].correct;
              const showResult = selected !== null;

              let style = 'bg-slate-800/60 border-slate-700 text-white';
              if (showResult) {
                if (isCorrect) style = 'bg-green-900/40 border-green-500 text-green-300';
                else if (isSelected && !isCorrect) style = 'bg-red-900/40 border-red-500 text-red-300';
                else style = 'bg-slate-800/30 border-slate-800 text-slate-500';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswerSelect(idx)}
                  className={`border rounded-xl p-4 text-right font-medium text-sm transition-all duration-200 ${style} ${
                    !showResult ? 'hover:border-indigo-500/60 active:scale-98' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      showResult
                        ? isCorrect ? 'bg-green-500 text-white' : isSelected ? 'bg-red-500 text-white' : 'bg-slate-700 text-slate-400'
                        : 'bg-slate-700 text-slate-300'
                    }`}>
                      {showResult ? (isCorrect ? '✓' : isSelected ? '✗' : ['A', 'B', 'C', 'D'][idx]) : ['A', 'B', 'C', 'D'][idx]}
                    </span>
                    <span>{opt}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={`rounded-xl p-4 border ${selected === lesson.quiz[currentQ].correct ? 'bg-green-900/20 border-green-700/40' : 'bg-red-900/20 border-red-700/40'}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{selected === lesson.quiz[currentQ].correct ? '✅' : '❌'}</span>
                <span className={`font-bold text-sm ${selected === lesson.quiz[currentQ].correct ? 'text-green-400' : 'text-red-400'}`}>
                  {selected === lesson.quiz[currentQ].correct ? 'عالی! پاسخ درست!' : 'اشتباه بود!'}
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-6">{lesson.quiz[currentQ].explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {showExplanation && (
            <button
              onClick={handleNextQuestion}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all active:scale-98"
            >
              {currentQ + 1 < lesson.quiz.length ? 'سوال بعدی ←' : '🎯 مشاهده نتیجه'}
            </button>
          )}
        </div>
      )}

      {/* Result Phase */}
      {phase === 'result' && (
        <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center">
          <div className="text-8xl">
            {finalScore >= 80 ? '🏆' : finalScore >= 60 ? '🎯' : '📚'}
          </div>
          <div>
            <h2 className="text-white font-bold text-3xl mb-2">
              {finalScore >= 80 ? 'عالی!' : finalScore >= 60 ? 'خوب بود!' : 'تلاش کن!'}
            </h2>
            <p className="text-slate-400 text-base">
              {answers.filter(Boolean).length} از {lesson.quiz.length} سوال صحیح
            </p>
          </div>

          {/* Score Ring */}
          <div className="relative w-36 h-36">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="10"/>
              <circle
                cx="50" cy="50" r="40" fill="none"
                stroke={finalScore >= 80 ? '#22c55e' : finalScore >= 60 ? '#eab308' : '#ef4444'}
                strokeWidth="10"
                strokeDasharray={`${(finalScore / 100) * 251.2} 251.2`}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-3xl">{finalScore}%</span>
            </div>
          </div>

          {/* XP Earned */}
          <div className="bg-indigo-900/40 border border-indigo-700/40 rounded-2xl px-8 py-4">
            <div className="text-indigo-400 text-sm mb-1">امتیاز کسب شده</div>
            <div className="text-white font-bold text-2xl">+{isCompleted ? 20 : 100} XP ⚡</div>
          </div>

          {/* Answers Summary */}
          <div className="w-full bg-slate-800/60 border border-slate-700 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-3">خلاصه پاسخ‌ها</h3>
            <div className="flex gap-2 justify-center flex-wrap">
              {answers.map((correct, i) => (
                <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  correct ? 'bg-green-500/20 text-green-400 border border-green-500/40' : 'bg-red-500/20 text-red-400 border border-red-500/40'
                }`}>
                  {correct ? '✓' : '✗'}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <button
              onClick={() => { setPhase('quiz'); setCurrentQ(0); setSelected(null); setAnswers([]); setShowExplanation(false); }}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl font-medium transition-colors"
            >
              🔄 دوباره
            </button>
            <button
              onClick={onBack}
              className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-medium transition-colors"
            >
              ← بازگشت به دروس
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
