import { useState, useEffect } from 'react';
import BottomNav from './components/BottomNav';
import HomeScreen from './components/HomeScreen';
import LessonsScreen from './components/LessonsScreen';
import LessonView from './components/LessonView';
import QuizScreen from './components/QuizScreen';
import ProfileScreen from './components/ProfileScreen';
import SplashScreen from './components/SplashScreen';
import InstallGuide from './components/InstallGuide';
import { loadProgress, UserProgress } from './store/progress';
import { getLessonById } from './data/lessons';

type Tab = 'home' | 'lessons' | 'quiz' | 'profile';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showInstallGuide, setShowInstallGuide] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [progress, setProgress] = useState<UserProgress>(loadProgress());
  const [currentLessonId, setCurrentLessonId] = useState<number | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };
    window.addEventListener('beforeinstallprompt', handler as EventListener);
    return () => window.removeEventListener('beforeinstallprompt', handler as EventListener);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      setShowInstallBanner(false);
    }
  };

  const handleStartLesson = (id: number) => {
    setCurrentLessonId(id);
  };

  const handleBack = () => {
    setCurrentLessonId(null);
  };

  const handleLessonComplete = (updated: UserProgress) => {
    setProgress(updated);
  };

  const handleProgressUpdate = (updated: UserProgress) => {
    setProgress(updated);
  };

  const handleReset = () => {
    const empty: UserProgress = {
      completedLessons: [],
      quizScores: {},
      xp: 0,
      streak: 0,
      lastActivity: '',
      bookmarks: []
    };
    setProgress(empty);
    localStorage.removeItem('python_learn_progress');
  };

  const currentLesson = currentLessonId ? getLessonById(currentLessonId) : null;

  return (
    <div className="min-h-screen bg-slate-950 text-white" dir="rtl">
      {/* Splash Screen */}
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}

      {/* Install Guide Modal */}
      {showInstallGuide && <InstallGuide onClose={() => setShowInstallGuide(false)} />}

      {/* Install Banner */}
      {showInstallBanner && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-indigo-700 px-4 py-3 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📱</span>
            <div>
              <div className="text-white font-bold text-sm">نصب اپ</div>
              <div className="text-indigo-200 text-xs">بدون اینترنت هم کار می‌کند!</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowInstallBanner(false)}
              className="text-indigo-300 text-sm px-2 py-1"
            >
              بعداً
            </button>
            <button
              onClick={handleInstall}
              className="bg-white text-indigo-700 text-sm font-bold px-4 py-1.5 rounded-lg"
            >
              نصب
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`max-w-lg mx-auto ${showInstallBanner ? 'pt-16' : 'pt-0'} pb-24`}>
        {currentLesson ? (
          // Lesson View - Full screen
          <div className="px-4 pt-4 min-h-screen">
            <LessonView
              lesson={currentLesson}
              progress={progress}
              onBack={handleBack}
              onComplete={handleLessonComplete}
              onProgressUpdate={handleProgressUpdate}
            />
          </div>
        ) : (
          // Tab Views
          <div className="px-4 pt-4">
            {activeTab === 'home' && (
              <HomeScreen
                progress={progress}
                onStartLesson={handleStartLesson}
                onGoToLessons={() => setActiveTab('lessons')}
              />
            )}
            {activeTab === 'lessons' && (
              <LessonsScreen
                progress={progress}
                onStartLesson={handleStartLesson}
              />
            )}
            {activeTab === 'quiz' && (
              <QuizScreen
                progress={progress}
                onStartLesson={handleStartLesson}
              />
            )}
            {activeTab === 'profile' && (
              <ProfileScreen
                progress={progress}
                onReset={handleReset}
              />
            )}
          </div>
        )}
      </div>

      {/* Floating Install Button */}
      {!currentLesson && !showInstallBanner && (
        <button
          onClick={() => setShowInstallGuide(true)}
          className="fixed bottom-24 left-4 z-40 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg shadow-indigo-500/30 flex items-center gap-1.5 transition-all"
        >
          <span>📱</span>
          <span>نصب اپ</span>
        </button>
      )}

      {/* Bottom Navigation - hide when in lesson */}
      {!currentLesson && (
        <BottomNav
          active={activeTab}
          onChange={setActiveTab}
        />
      )}
    </div>
  );
}
