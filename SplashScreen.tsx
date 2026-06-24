import { useEffect, useState } from 'react';

interface Props {
  onDone: () => void;
}

export default function SplashScreen({ onDone }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onDone, 300);
          return 100;
        }
        return prev + 4;
      });
    }, 40);
    return () => clearInterval(timer);
  }, [onDone]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 flex flex-col items-center justify-center z-50">
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-indigo-500/10"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 3}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-6xl mb-6 shadow-2xl shadow-indigo-500/40"
          style={{ animation: 'bounce 1s ease infinite' }}>
          🐍
        </div>
        <h1 className="text-white font-bold text-4xl mb-2">Python</h1>
        <p className="text-indigo-300 text-lg mb-1">یاد بگیر</p>
        <p className="text-slate-500 text-sm mb-12">از صفر تا صد</p>

        {/* Loading bar */}
        <div className="w-56 h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-slate-600 text-xs mt-3">در حال بارگذاری...</p>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
