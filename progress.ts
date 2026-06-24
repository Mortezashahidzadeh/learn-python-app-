export interface UserProgress {
  completedLessons: number[];
  quizScores: Record<number, number>;
  xp: number;
  streak: number;
  lastActivity: string;
  bookmarks: number[];
}

const STORAGE_KEY = 'python_learn_progress';

export const loadProgress = (): UserProgress => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return {
    completedLessons: [],
    quizScores: {},
    xp: 0,
    streak: 0,
    lastActivity: '',
    bookmarks: []
  };
};

export const saveProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {}
};

export const markLessonComplete = (progress: UserProgress, lessonId: number, score: number): UserProgress => {
  const isNew = !progress.completedLessons.includes(lessonId);
  const updated = {
    ...progress,
    completedLessons: isNew ? [...progress.completedLessons, lessonId] : progress.completedLessons,
    quizScores: { ...progress.quizScores, [lessonId]: Math.max(progress.quizScores[lessonId] || 0, score) },
    xp: progress.xp + (isNew ? 100 : 20),
    lastActivity: new Date().toISOString()
  };
  saveProgress(updated);
  return updated;
};

export const toggleBookmark = (progress: UserProgress, lessonId: number): UserProgress => {
  const isBookmarked = progress.bookmarks.includes(lessonId);
  const updated = {
    ...progress,
    bookmarks: isBookmarked
      ? progress.bookmarks.filter(id => id !== lessonId)
      : [...progress.bookmarks, lessonId]
  };
  saveProgress(updated);
  return updated;
};
