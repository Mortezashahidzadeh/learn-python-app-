interface Props {
  onClose: () => void;
}

export default function InstallGuide({ onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end justify-center" onClick={onClose}>
      <div
        className="bg-slate-900 border border-slate-700 rounded-t-3xl p-6 w-full max-w-lg max-h-[85vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="w-10 h-1 bg-slate-600 rounded-full mx-auto mb-5" />
        <h2 className="text-white font-bold text-xl mb-1 text-center">📱 نصب اپ روی اندروید</h2>
        <p className="text-slate-400 text-sm text-center mb-6">این اپ یک PWA است و مثل اپ اندروید نصب می‌شود</p>

        {/* Chrome Instructions */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold text-white">C</div>
            <h3 className="text-white font-semibold">Chrome (پیشنهادی)</h3>
          </div>
          <div className="flex flex-col gap-3 mr-10">
            {[
              { icon: '🌐', text: 'صفحه را در Chrome اندروید باز کن' },
              { icon: '⋮', text: 'روی سه نقطه بالا سمت راست کلیک کن' },
              { icon: '📥', text: '"Install app" یا "افزودن به صفحه اصلی" را بزن' },
              { icon: '✅', text: 'روی Install کلیک کن - تمام!' },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-900/40 border border-blue-700/40 text-blue-300 text-xs flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-slate-300 text-sm leading-6">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Samsung Browser */}
        <div className="mb-5 bg-slate-800/60 border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-sm font-bold text-white">S</div>
            <h3 className="text-white font-semibold">Samsung Internet</h3>
          </div>
          <div className="flex flex-col gap-2 mr-10">
            {[
              'مرورگر را باز کن',
              'روی ☰ (منو) کلیک کن',
              '"Add page to" → "Home screen" را بزن',
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-slate-700 text-slate-400 text-xs flex items-center justify-center flex-shrink-0">{i + 1}</div>
                <p className="text-slate-400 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-indigo-900/20 border border-indigo-700/30 rounded-xl p-4 mb-5">
          <h3 className="text-indigo-400 font-semibold mb-3">✨ مزایای نصب:</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              '📴 آفلاین کار می‌کند',
              '⚡ سریع‌تر باز می‌شود',
              '🔔 اعلان‌ها دارد',
              '📱 مثل اپ اصلی است',
              '💾 پیشرفت ذخیره می‌شود',
              '🔒 امن و بدون ویروس',
            ].map((feat, i) => (
              <div key={i} className="text-indigo-200 text-xs bg-indigo-900/20 rounded-lg px-3 py-2">{feat}</div>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-colors"
        >
          متوجه شدم! 👍
        </button>
      </div>
    </div>
  );
}
