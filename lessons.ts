export interface Lesson {
  id: number;
  title: string;
  emoji: string;
  description: string;
  level: 'مبتدی' | 'متوسط' | 'پیشرفته';
  duration: string;
  content: Section[];
  quiz: Quiz[];
}

export interface Section {
  type: 'text' | 'code' | 'tip' | 'warning' | 'output';
  title?: string;
  content: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'پایتون چیست؟',
    emoji: '🐍',
    description: 'آشنایی با زبان برنامه‌نویسی پایتون و تاریخچه آن',
    level: 'مبتدی',
    duration: '۵ دقیقه',
    content: [
      {
        type: 'text',
        title: 'پایتون چیست؟',
        content: 'پایتون یک زبان برنامه‌نویسی پرقدرت، ساده و محبوب است که در سال ۱۹۹۱ توسط Guido van Rossum ساخته شد. این زبان به دلیل سادگی و خوانایی کد، یکی از بهترین انتخاب‌ها برای مبتدیان است.'
      },
      {
        type: 'tip',
        title: '💡 چرا پایتون؟',
        content: 'پایتون در حوزه‌های زیر کاربرد دارد:\n• هوش مصنوعی و یادگیری ماشین 🤖\n• علم داده و تحلیل آمار 📊\n• توسعه وب 🌐\n• اتوماسیون و اسکریپت‌نویسی ⚙️\n• بازی‌سازی 🎮'
      },
      {
        type: 'text',
        title: 'اولین برنامه پایتون',
        content: 'بیایید اولین برنامه پایتون را بنویسیم. در پایتون برای نمایش متن از تابع print() استفاده می‌کنیم:'
      },
      {
        type: 'code',
        content: 'print("سلام دنیا!")\nprint("Hello, World!")\nprint("من دارم پایتون یاد می‌گیرم!")'
      },
      {
        type: 'output',
        content: 'سلام دنیا!\nHello, World!\nمن دارم پایتون یاد می‌گیرم!'
      },
      {
        type: 'tip',
        title: '🎯 نکته',
        content: 'در پایتون، هر دستور در یک خط جدید نوشته می‌شود. برخلاف زبان‌های دیگر، نیازی به ; در انتهای خط نیست!'
      }
    ],
    quiz: [
      {
        question: 'پایتون در چه سالی ساخته شد؟',
        options: ['۱۹۸۵', '۱۹۹۱', '۲۰۰۰', '۲۰۱۰'],
        correct: 1,
        explanation: 'پایتون در سال ۱۹۹۱ توسط Guido van Rossum ساخته شد.'
      },
      {
        question: 'برای نمایش متن در پایتون از کدام تابع استفاده می‌کنیم؟',
        options: ['show()', 'display()', 'print()', 'write()'],
        correct: 2,
        explanation: 'تابع print() برای نمایش متن و مقادیر در پایتون استفاده می‌شود.'
      },
      {
        question: 'پایتون در کدام حوزه استفاده نمی‌شود؟',
        options: ['هوش مصنوعی', 'علم داده', 'طراحی سخت‌افزار', 'توسعه وب'],
        correct: 2,
        explanation: 'پایتون یک زبان نرم‌افزاری است و در طراحی سخت‌افزار مستقیماً استفاده نمی‌شود.'
      }
    ]
  },
  {
    id: 2,
    title: 'متغیرها و انواع داده',
    emoji: '📦',
    description: 'یاد بگیر چطور داده‌ها را در پایتون ذخیره کنی',
    level: 'مبتدی',
    duration: '۱۰ دقیقه',
    content: [
      {
        type: 'text',
        title: 'متغیر چیست؟',
        content: 'متغیر مثل یک جعبه است که می‌توانیم داده‌ها را در آن ذخیره کنیم. در پایتون برای تعریف متغیر، فقط کافیست نام متغیر را بنویسیم و مقدار را با = اختصاص دهیم.'
      },
      {
        type: 'code',
        content: '# تعریف متغیرها\nنام = "علی"\nسن = 25\nقد = 1.75\nدانشجو = True\n\nprint(نام)\nprint(سن)\nprint(قد)\nprint(دانشجو)'
      },
      {
        type: 'output',
        content: 'علی\n25\n1.75\nTrue'
      },
      {
        type: 'text',
        title: 'انواع داده در پایتون',
        content: 'پایتون چند نوع داده اصلی دارد:'
      },
      {
        type: 'tip',
        title: '📝 انواع داده',
        content: '• str (رشته): متن - مثل "سلام"\n• int (صحیح): عدد صحیح - مثل 42\n• float (اعشاری): عدد اعشاری - مثل 3.14\n• bool (بولی): درست/نادرست - True یا False\n• list (لیست): مجموعه - مثل [1, 2, 3]\n• dict (دیکشنری): کلید-مقدار - مثل {"نام": "علی"}'
      },
      {
        type: 'code',
        content: '# بررسی نوع داده با type()\nعدد = 42\nمتن = "سلام"\naعشاری = 3.14\nمنطقی = True\n\nprint(type(عدد))    # <class \'int\'>\nprint(type(متن))    # <class \'str\'>\nprint(type(اعشاری)) # <class \'float\'>\nprint(type(منطقی))  # <class \'bool\'>'
      },
      {
        type: 'code',
        content: '# تبدیل نوع داده\nعدد_متن = "123"\nعدد_واقعی = int(عدد_متن)\nprint(عدد_واقعی + 7)  # 130\n\nعدد = 42\nمتن_عدد = str(عدد)\nprint("سن من " + متن_عدد + " سال است")'
      },
      {
        type: 'output',
        content: '130\nسن من 42 سال است'
      },
      {
        type: 'warning',
        title: '⚠️ دقت کن',
        content: 'نام متغیرها نمی‌توانند با عدد شروع شوند و نباید شامل فاصله باشند. از underline (_) برای جدا کردن کلمات استفاده کن.'
      }
    ],
    quiz: [
      {
        question: 'برای ذخیره عدد صحیح ۱۰ در متغیر، کدام کد درست است؟',
        options: ['x == 10', 'x = 10', 'int x = 10', 'x := 10'],
        correct: 1,
        explanation: 'در پایتون از = برای اختصاص مقدار به متغیر استفاده می‌کنیم.'
      },
      {
        question: 'خروجی type("سلام") چیست؟',
        options: ["<class 'int'>", "<class 'str'>", "<class 'char'>", "<class 'text'>"],
        correct: 1,
        explanation: 'رشته‌های متنی از نوع str هستند.'
      },
      {
        question: 'کدام مقدار از نوع bool است؟',
        options: ['1', '"True"', 'True', '1.0'],
        correct: 2,
        explanation: 'True و False مقادیر بولی هستند. "True" یک رشته است نه بولی.'
      }
    ]
  },
  {
    id: 3,
    title: 'عملگرها و محاسبات',
    emoji: '🔢',
    description: 'محاسبات ریاضی و منطقی در پایتون',
    level: 'مبتدی',
    duration: '۸ دقیقه',
    content: [
      {
        type: 'text',
        title: 'عملگرهای ریاضی',
        content: 'پایتون می‌تواند مثل یک ماشین حساب قوی عمل کند. عملگرهای اصلی ریاضی عبارتند از:'
      },
      {
        type: 'code',
        content: '# عملگرهای ریاضی\nprint(10 + 3)   # جمع: 13\nprint(10 - 3)   # تفریق: 7\nprint(10 * 3)   # ضرب: 30\nprint(10 / 3)   # تقسیم: 3.333...\nprint(10 // 3)  # تقسیم صحیح: 3\nprint(10 % 3)   # باقیمانده: 1\nprint(2 ** 8)   # توان: 256'
      },
      {
        type: 'output',
        content: '13\n7\n30\n3.3333333333333335\n3\n1\n256'
      },
      {
        type: 'text',
        title: 'عملگرهای مقایسه',
        content: 'برای مقایسه مقادیر از این عملگرها استفاده می‌کنیم. نتیجه همیشه True یا False است:'
      },
      {
        type: 'code',
        content: '# عملگرهای مقایسه\nprint(5 > 3)    # True\nprint(5 < 3)    # False\nprint(5 == 5)   # True (برابر)\nprint(5 != 3)   # True (نابرابر)\nprint(5 >= 5)   # True\nprint(5 <= 4)   # False'
      },
      {
        type: 'text',
        title: 'عملگرهای منطقی',
        content: 'برای ترکیب شرط‌ها از and، or و not استفاده می‌کنیم:'
      },
      {
        type: 'code',
        content: '# عملگرهای منطقی\nسن = 20\nدانشجو = True\n\nprint(سن >= 18 and دانشجو)  # True\nprint(سن < 18 or دانشجو)   # True\nprint(not دانشجو)           # False'
      },
      {
        type: 'tip',
        title: '💡 ترفند',
        content: 'می‌توانی چند عملیات را در یک خط انجام دهی:\nx = 5\nx += 3  # معادل x = x + 3\nprint(x)  # 8'
      }
    ],
    quiz: [
      {
        question: 'نتیجه 17 % 5 چیست؟',
        options: ['3', '2', '4', '1'],
        correct: 1,
        explanation: '17 تقسیم بر 5 می‌شود 3 و باقیمانده 2 می‌ماند.'
      },
      {
        question: 'نتیجه 2 ** 10 چیست؟',
        options: ['20', '100', '1024', '512'],
        correct: 2,
        explanation: '2 به توان 10 می‌شود 1024.'
      },
      {
        question: 'نتیجه (5 > 3) and (2 < 1) چیست؟',
        options: ['True', 'False', 'Error', '0'],
        correct: 1,
        explanation: 'چون 2 < 1 نادرست است، نتیجه and هم False می‌شود.'
      }
    ]
  },
  {
    id: 4,
    title: 'ورودی از کاربر',
    emoji: '⌨️',
    description: 'دریافت اطلاعات از کاربر با input()',
    level: 'مبتدی',
    duration: '۷ دقیقه',
    content: [
      {
        type: 'text',
        title: 'تابع input()',
        content: 'برای دریافت اطلاعات از کاربر از تابع input() استفاده می‌کنیم. این تابع همیشه مقدار را به صورت string برمی‌گرداند.'
      },
      {
        type: 'code',
        content: '# دریافت نام از کاربر\nنام = input("نام خود را وارد کنید: ")\nprint("سلام", نام, "!")\nprint(f"سلام {نام}! خوش آمدی.")'
      },
      {
        type: 'output',
        content: 'نام خود را وارد کنید: علی\nسلام علی !\nسلام علی! خوش آمدی.'
      },
      {
        type: 'code',
        content: '# دریافت عدد از کاربر\nسن_متن = input("سن خود را وارد کنید: ")\nسن = int(سن_متن)  # تبدیل به عدد\n\nif سن >= 18:\n    print("شما بزرگسال هستید")\nelse:\n    print("شما نوجوان هستید")'
      },
      {
        type: 'tip',
        title: '🎯 f-string',
        content: 'f-string یک روش آسان برای قرار دادن متغیر در متن است:\nنام = "علی"\nسن = 25\nprint(f"اسم من {نام} است و {سن} سال دارم")'
      },
      {
        type: 'code',
        content: '# مثال کامل: ماشین حساب ساده\nعدد1 = float(input("عدد اول: "))\nعدد2 = float(input("عدد دوم: "))\n\nprint(f"جمع: {عدد1 + عدد2}")\nprint(f"تفریق: {عدد1 - عدد2}")\nprint(f"ضرب: {عدد1 * عدد2}")\nif عدد2 != 0:\n    print(f"تقسیم: {عدد1 / عدد2}")'
      },
      {
        type: 'warning',
        title: '⚠️ مهم',
        content: 'input() همیشه رشته (string) برمی‌گرداند. اگر می‌خواهی عدد بگیری، باید آن را با int() یا float() تبدیل کنی.'
      }
    ],
    quiz: [
      {
        question: 'تابع input() چه نوع داده‌ای برمی‌گرداند؟',
        options: ['int', 'float', 'str', 'bool'],
        correct: 2,
        explanation: 'input() همیشه مقدار را به صورت رشته (str) برمی‌گرداند.'
      },
      {
        question: 'کدام کد عدد صحیح از کاربر می‌گیرد؟',
        options: ['x = input()', 'x = int(input())', 'x = str(input())', 'x = num(input())'],
        correct: 1,
        explanation: 'باید خروجی input() را با int() تبدیل کنیم.'
      },
      {
        question: 'f-string با کدام علامت شروع می‌شود؟',
        options: ['s"..."', 'f"..."', 'r"..."', 'b"..."'],
        correct: 1,
        explanation: 'f-string با حرف f قبل از کوتیشن شروع می‌شود: f"..."'
      }
    ]
  },
  {
    id: 5,
    title: 'شرط‌ها: if, elif, else',
    emoji: '🔀',
    description: 'تصمیم‌گیری در برنامه با دستورات شرطی',
    level: 'مبتدی',
    duration: '۱۰ دقیقه',
    content: [
      {
        type: 'text',
        title: 'دستور if',
        content: 'با دستور if می‌توانیم بر اساس شرطی، کد مختلف اجرا کنیم. در پایتون، بلوک کد با indent (4 فاصله یا Tab) مشخص می‌شود.'
      },
      {
        type: 'code',
        content: '# ساختار if ساده\nدرجه = 85\n\nif درجه >= 60:\n    print("قبول شدی! 🎉")\n    print(f"نمره تو: {درجه}")\nprint("این همیشه اجرا می‌شود")'
      },
      {
        type: 'output',
        content: 'قبول شدی! 🎉\nنمره تو: 85\nاین همیشه اجرا می‌شود'
      },
      {
        type: 'code',
        content: '# if-else\nسن = 15\n\nif سن >= 18:\n    print("می‌توانی رأی بدهی")\nelse:\n    print("هنوز به سن رأی‌دهی نرسیده‌ای")'
      },
      {
        type: 'code',
        content: '# if-elif-else (چند شرط)\nنمره = 75\n\nif نمره >= 90:\n    print("عالی - A")\nelif نمره >= 80:\n    print("خوب - B")\nelif نمره >= 70:\n    print("متوسط - C")\nelif نمره >= 60:\n    print("قبول - D")\nelse:\n    print("مردود - F")'
      },
      {
        type: 'output',
        content: 'متوسط - C'
      },
      {
        type: 'tip',
        title: '💡 شرط‌های ترکیبی',
        content: 'می‌توانی چند شرط را با and و or ترکیب کنی:\nسن = 20\nدارای_گواهینامه = True\n\nif سن >= 18 and دارای_گواهینامه:\n    print("می‌توانی رانندگی کنی")'
      },
      {
        type: 'code',
        content: '# مثال کامل: تشخیص عدد مثبت، منفی یا صفر\nعدد = int(input("یک عدد وارد کن: "))\n\nif عدد > 0:\n    print(f"{عدد} مثبت است ✅")\nelif عدد < 0:\n    print(f"{عدد} منفی است ❌")\nelse:\n    print("عدد صفر است ⭕")'
      }
    ],
    quiz: [
      {
        question: 'در پایتون، بلوک کد داخل if چطور مشخص می‌شود؟',
        options: ['با { }', 'با indent (فرورفتگی)', 'با begin/end', 'با ;'],
        correct: 1,
        explanation: 'در پایتون از indent (معمولاً 4 فاصله) برای مشخص کردن بلوک کد استفاده می‌شود.'
      },
      {
        question: 'برای بررسی چند شرط پشت‌هم از کدام کلیدواژه استفاده می‌کنیم؟',
        options: ['else if', 'elseif', 'elif', 'or if'],
        correct: 2,
        explanation: 'در پایتون از elif (مخفف else if) برای شرط‌های بعدی استفاده می‌شود.'
      },
      {
        question: 'نتیجه اجرای این کد چیست؟ x=7; if x>10: print("A") else: print("B")',
        options: ['A', 'B', 'خطا', 'هیچی'],
        correct: 1,
        explanation: 'چون 7 بزرگتر از 10 نیست، else اجرا می‌شود و B چاپ می‌شود.'
      }
    ]
  },
  {
    id: 6,
    title: 'حلقه‌ها: for و while',
    emoji: '🔄',
    description: 'تکرار کارها با حلقه‌های for و while',
    level: 'مبتدی',
    duration: '۱۲ دقیقه',
    content: [
      {
        type: 'text',
        title: 'حلقه for',
        content: 'حلقه for برای تکرار یک بلوک کد برای تعداد مشخصی از دفعات یا روی یک مجموعه استفاده می‌شود.'
      },
      {
        type: 'code',
        content: '# حلقه for با range()\nfor i in range(5):\n    print(f"تکرار شماره {i}")'
      },
      {
        type: 'output',
        content: 'تکرار شماره 0\nتکرار شماره 1\nتکرار شماره 2\nتکرار شماره 3\nتکرار شماره 4'
      },
      {
        type: 'code',
        content: '# range با شروع و پایان\nfor i in range(1, 6):\n    print(i, end=" ")\n# خروجی: 1 2 3 4 5\n\n# range با گام\nfor i in range(0, 20, 5):\n    print(i, end=" ")\n# خروجی: 0 5 10 15'
      },
      {
        type: 'code',
        content: '# حلقه روی لیست\nمیوه_ها = ["سیب", "موز", "پرتقال", "هلو"]\n\nfor میوه in میوه_ها:\n    print(f"🍎 {میوه}")'
      },
      {
        type: 'output',
        content: '🍎 سیب\n🍎 موز\n🍎 پرتقال\n🍎 هلو'
      },
      {
        type: 'text',
        title: 'حلقه while',
        content: 'حلقه while تا زمانی که شرط برقرار باشد ادامه می‌دهد:'
      },
      {
        type: 'code',
        content: '# حلقه while\nشمارنده = 1\nwhile شمارنده <= 5:\n    print(f"شماره: {شمارنده}")\n    شمارنده += 1\nprint("تمام شد!")'
      },
      {
        type: 'code',
        content: '# break و continue\nfor i in range(10):\n    if i == 3:\n        continue  # از ۳ رد می‌شود\n    if i == 7:\n        break     # در ۷ متوقف می‌شود\n    print(i, end=" ")\n# خروجی: 0 1 2 4 5 6'
      },
      {
        type: 'warning',
        title: '⚠️ حلقه بی‌نهایت',
        content: 'مراقب باش! اگر شرط while هیچ‌وقت False نشود، برنامه گیر می‌کند:\nwhile True:  # این حلقه هرگز تمام نمی‌شود!\n    print("...")'
      }
    ],
    quiz: [
      {
        question: 'range(1, 10, 2) چه اعدادی تولید می‌کند؟',
        options: ['1,2,3,4,5,6,7,8,9', '1,3,5,7,9', '2,4,6,8,10', '1,3,5,7,8,9'],
        correct: 1,
        explanation: 'range(1,10,2) از 1 شروع می‌کند، تا قبل از 10 ادامه می‌دهد و گام 2 دارد: 1,3,5,7,9'
      },
      {
        question: 'دستور break در حلقه چه کاری می‌کند؟',
        options: ['از تکرار فعلی رد می‌شود', 'حلقه را متوقف می‌کند', 'به ابتدا برمی‌گردد', 'خطا می‌دهد'],
        correct: 1,
        explanation: 'break حلقه را کاملاً متوقف می‌کند. continue فقط از تکرار فعلی رد می‌شود.'
      },
      {
        question: 'حلقه while چه زمانی متوقف می‌شود؟',
        options: ['بعد از 10 بار', 'وقتی break اجرا شود یا شرط False شود', 'هرگز', 'وقتی continue اجرا شود'],
        correct: 1,
        explanation: 'حلقه while وقتی شرط False شود یا دستور break اجرا شود متوقف می‌شود.'
      }
    ]
  },
  {
    id: 7,
    title: 'توابع (Functions)',
    emoji: '⚡',
    description: 'نوشتن توابع برای استفاده مجدد از کد',
    level: 'متوسط',
    duration: '۱۵ دقیقه',
    content: [
      {
        type: 'text',
        title: 'تابع چیست؟',
        content: 'تابع یک بلوک کد است که می‌توانیم آن را با یک نام ذخیره کنیم و هر بار که نیاز داشتیم صدا بزنیم. توابع کمک می‌کنند کد را منظم‌تر و قابل استفاده مجدد کنیم.'
      },
      {
        type: 'code',
        content: '# تعریف تابع با def\ndef سلام_بگو():\n    print("سلام!")\n    print("خوش آمدی")\n\n# فراخوانی تابع\nسلام_بگو()\nسلام_بگو()'
      },
      {
        type: 'output',
        content: 'سلام!\nخوش آمدی\nسلام!\nخوش آمدی'
      },
      {
        type: 'code',
        content: '# تابع با پارامتر\ndef سلام_شخص(نام):\n    print(f"سلام {نام}! خوش آمدی")\n\nسلام_شخص("علی")\nسلام_شخص("سارا")'
      },
      {
        type: 'code',
        content: '# تابع با return (بازگشت مقدار)\ndef جمع(a, b):\n    نتیجه = a + b\n    return نتیجه\n\nمجموع = جمع(5, 3)\nprint(f"جمع: {مجموع}")  # 8\nprint(f"جمع: {جمع(10, 20)}")  # 30'
      },
      {
        type: 'code',
        content: '# پارامتر پیش‌فرض\ndef معرفی(نام, سن=18):\n    print(f"نام: {نام}, سن: {سن}")\n\nمعرفی("علی", 25)    # نام: علی, سن: 25\nمعرفی("سارا")       # نام: سارا, سن: 18 (پیش‌فرض)'
      },
      {
        type: 'tip',
        title: '💡 تابع چندگانه',
        content: 'توابع می‌توانند چند مقدار برگردانند:\ndef محاسبه(a, b):\n    return a+b, a-b, a*b\n\nج, ت, ض = محاسبه(10, 3)\nprint(ج, ت, ض)  # 13 7 30'
      },
      {
        type: 'code',
        content: '# مثال عملی: محاسبه BMI\ndef محاسبه_bmi(وزن, قد):\n    """وزن به کیلوگرم، قد به متر"""\n    bmi = وزن / (قد ** 2)\n    if bmi < 18.5:\n        وضعیت = "کمبود وزن"\n    elif bmi < 25:\n        وضعیت = "وزن طبیعی"\n    elif bmi < 30:\n        وضعیت = "اضافه وزن"\n    else:\n        وضعیت = "چاقی"\n    return round(bmi, 2), وضعیت\n\nbmi, وضعیت = محاسبه_bmi(70, 1.75)\nprint(f"BMI: {bmi} - {وضعیت}")'
      },
      {
        type: 'output',
        content: 'BMI: 22.86 - وزن طبیعی'
      }
    ],
    quiz: [
      {
        question: 'برای تعریف تابع در پایتون از کدام کلیدواژه استفاده می‌کنیم؟',
        options: ['function', 'func', 'def', 'define'],
        correct: 2,
        explanation: 'در پایتون از کلیدواژه def برای تعریف تابع استفاده می‌شود.'
      },
      {
        question: 'دستور return در تابع چه کاری می‌کند؟',
        options: ['تابع را اجرا می‌کند', 'مقداری برمی‌گرداند و تابع را تمام می‌کند', 'تابع را دوباره اجرا می‌کند', 'پارامتر می‌گیرد'],
        correct: 1,
        explanation: 'return مقداری را به فراخواننده برمی‌گرداند و اجرای تابع را متوقف می‌کند.'
      },
      {
        question: 'پارامتر پیش‌فرض در تابع به چه معناست؟',
        options: ['پارامتر اجباری', 'پارامتر اختیاری با مقدار از پیش تعیین شده', 'پارامتر بدون نام', 'پارامتر نوع خاص'],
        correct: 1,
        explanation: 'پارامتر پیش‌فرض مقدار دارد و اگر هنگام فراخوانی مقدار داده نشود، از مقدار پیش‌فرض استفاده می‌شود.'
      }
    ]
  },
  {
    id: 8,
    title: 'لیست‌ها (Lists)',
    emoji: '📋',
    description: 'کار با مجموعه‌ای از داده‌ها در لیست',
    level: 'متوسط',
    duration: '۱۲ دقیقه',
    content: [
      {
        type: 'text',
        title: 'لیست چیست؟',
        content: 'لیست یک مجموعه مرتب از داده‌هاست که می‌توانیم انواع مختلف داده را در آن ذخیره کنیم. لیست‌ها قابل تغییر هستند.'
      },
      {
        type: 'code',
        content: '# ایجاد لیست\nاعداد = [1, 2, 3, 4, 5]\nنام_ها = ["علی", "سارا", "محمد"]\nمختلط = [1, "سلام", True, 3.14]\n\nprint(اعداد)\nprint(نام_ها[0])   # اولین عنصر: علی\nprint(نام_ها[-1])  # آخرین عنصر: محمد'
      },
      {
        type: 'code',
        content: '# عملیات روی لیست\nمیوه = ["سیب", "موز", "هلو"]\n\nمیوه.append("انگور")    # اضافه به آخر\nمیوه.insert(1, "گیلاس") # اضافه در موقعیت 1\nمیوه.remove("موز")      # حذف عنصر\nprint(میوه)\nprint(f"تعداد: {len(میوه)}")'
      },
      {
        type: 'output',
        content: "['سیب', 'گیلاس', 'هلو', 'انگور']\nتعداد: 4"
      },
      {
        type: 'code',
        content: '# برش لیست (Slicing)\nاعداد = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n\nprint(اعداد[2:5])   # [2, 3, 4]\nprint(اعداد[:4])    # [0, 1, 2, 3]\nprint(اعداد[6:])    # [6, 7, 8, 9]\nprint(اعداد[::2])   # [0, 2, 4, 6, 8]'
      },
      {
        type: 'code',
        content: '# متدهای مفید لیست\nاعداد = [5, 2, 8, 1, 9, 3]\n\nprint(sorted(اعداد))    # مرتب‌سازی: [1,2,3,5,8,9]\nprint(min(اعداد))       # کمترین: 1\nprint(max(اعداد))       # بیشترین: 9\nprint(sum(اعداد))       # مجموع: 28\nprint(اعداد.count(5))   # تعداد 5: 1'
      },
      {
        type: 'tip',
        title: '⚡ List Comprehension',
        content: 'یک روش کوتاه برای ساخت لیست:\nمربعات = [x**2 for x in range(1, 6)]\nprint(مربعات)  # [1, 4, 9, 16, 25]\n\nزوج = [x for x in range(20) if x % 2 == 0]\nprint(زوج)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]'
      }
    ],
    quiz: [
      {
        question: 'برای دسترسی به آخرین عنصر لیست بدون دانستن اندازه آن، از چه ایندکسی استفاده می‌کنیم؟',
        options: ['0', 'last', '-1', 'end'],
        correct: 2,
        explanation: 'در پایتون، ایندکس -1 به آخرین عنصر، -2 به ماقبل آخر و... اشاره می‌کند.'
      },
      {
        question: 'کدام متد عنصری به انتهای لیست اضافه می‌کند؟',
        options: ['add()', 'push()', 'append()', 'insert()'],
        correct: 2,
        explanation: 'متد append() عنصر را به انتهای لیست اضافه می‌کند.'
      },
      {
        question: '[1,2,3,4,5][1:4] چه خروجی‌ای دارد؟',
        options: ['[1,2,3]', '[2,3,4]', '[1,2,3,4]', '[2,3,4,5]'],
        correct: 1,
        explanation: 'برش از ایندکس 1 تا 3 (قبل از 4): [2, 3, 4]'
      }
    ]
  },
  {
    id: 9,
    title: 'دیکشنری (Dictionary)',
    emoji: '📚',
    description: 'ذخیره داده به صورت کلید-مقدار',
    level: 'متوسط',
    duration: '۱۰ دقیقه',
    content: [
      {
        type: 'text',
        title: 'دیکشنری چیست؟',
        content: 'دیکشنری داده را به صورت جفت کلید-مقدار ذخیره می‌کند. مثل یک لغتنامه که هر کلمه (کلید) یک معنا (مقدار) دارد.'
      },
      {
        type: 'code',
        content: '# ایجاد دیکشنری\nدانشجو = {\n    "نام": "علی",\n    "سن": 22,\n    "رشته": "کامپیوتر",\n    "معدل": 17.5\n}\n\nprint(دانشجو["نام"])     # علی\nprint(دانشجو.get("سن")) # 22'
      },
      {
        type: 'code',
        content: '# عملیات روی دیکشنری\nدانشجو["ایمیل"] = "ali@email.com"  # اضافه کردن\nدانشجو["سن"] = 23                  # ویرایش\ndel دانشجو["رشته"]                  # حذف\n\nprint(list(دانشجو.keys()))    # کلیدها\nprint(list(دانشجو.values()))  # مقادیر'
      },
      {
        type: 'code',
        content: '# حلقه روی دیکشنری\nفهرست_غذا = {\n    "برنج": 15000,\n    "مرغ": 80000,\n    "سبزی": 5000\n}\n\nfor غذا, قیمت in فهرست_غذا.items():\n    print(f"{غذا}: {قیمت:,} تومان")'
      },
      {
        type: 'output',
        content: 'برنج: 15,000 تومان\nمرغ: 80,000 تومان\nسبزی: 5,000 تومان'
      },
      {
        type: 'tip',
        title: '💡 دیکشنری تو در تو',
        content: 'می‌توانی دیکشنری‌ها را در هم تو گذاری:\nکلاس = {\n    "علی": {"نمره": 18, "حضور": True},\n    "سارا": {"نمره": 19, "حضور": True}\n}\nprint(کلاس["علی"]["نمره"])  # 18'
      }
    ],
    quiz: [
      {
        question: 'برای دسترسی به مقدار کلید "نام" در دیکشنری d، کدام روش درست است؟',
        options: ['d.نام', 'd[0]', 'd["نام"]', 'd->نام'],
        correct: 2,
        explanation: 'برای دسترسی به مقدار دیکشنری از d["کلید"] استفاده می‌کنیم.'
      },
      {
        question: 'متد items() چه چیزی برمی‌گرداند؟',
        options: ['فقط کلیدها', 'فقط مقادیر', 'جفت‌های کلید-مقدار', 'تعداد عناصر'],
        correct: 2,
        explanation: 'items() جفت‌های (کلید، مقدار) را برمی‌گرداند.'
      },
      {
        question: 'اگر کلیدی در دیکشنری وجود نداشته باشد، d.get("کلید") چه برمی‌گرداند؟',
        options: ['خطا', '0', 'None', '""'],
        correct: 2,
        explanation: 'متد get() اگر کلید نباشد، None برمی‌گرداند نه خطا.'
      }
    ]
  },
  {
    id: 10,
    title: 'کلاس‌ها (OOP)',
    emoji: '🏗️',
    description: 'برنامه‌نویسی شی‌گرا با کلاس‌ها',
    level: 'متوسط',
    duration: '۲۰ دقیقه',
    content: [
      {
        type: 'text',
        title: 'برنامه‌نویسی شی‌گرا چیست؟',
        content: 'OOP (Object-Oriented Programming) یک روش برنامه‌نویسی است که در آن کد را بر اساس "اشیاء" سازمان‌دهی می‌کنیم. هر شیء دارای ویژگی‌ها (attributes) و رفتارها (methods) است.'
      },
      {
        type: 'code',
        content: '# تعریف کلاس\nclass حیوان:\n    def __init__(self, نام, صدا):\n        self.نام = نام\n        self.صدا = صدا\n    \n    def صدا_کن(self):\n        print(f"{self.نام} می‌گه: {self.صدا}!")\n\n# ساختن شیء (instance)\nسگ = حیوان("رکس", "هاو")\nگربه = حیوان("گربه‌مل", "میو")\n\nسگ.صدا_کن()\nگربه.صدا_کن()'
      },
      {
        type: 'output',
        content: 'رکس می‌گه: هاو!\nگربه‌مل می‌گه: میو!'
      },
      {
        type: 'text',
        title: 'وراثت (Inheritance)',
        content: 'یک کلاس می‌تواند از کلاس دیگری ارث‌بری کند و ویژگی‌های آن را به ارث ببرد:'
      },
      {
        type: 'code',
        content: '# کلاس پایه\nclass شکل:\n    def __init__(self, رنگ):\n        self.رنگ = رنگ\n    \n    def توضیح(self):\n        print(f"این یک شکل {self.رنگ} است")\n\n# وراثت\nclass دایره(شکل):\n    def __init__(self, رنگ, شعاع):\n        super().__init__(رنگ)  # فراخوانی کلاس پدر\n        self.شعاع = شعاع\n    \n    def مساحت(self):\n        import math\n        return round(math.pi * self.شعاع ** 2, 2)\n\nd = دایره("قرمز", 5)\nd.توضیح()\nprint(f"مساحت: {d.مساحت()}")'
      },
      {
        type: 'output',
        content: 'این یک شکل قرمز است\nمساحت: 78.54'
      },
      {
        type: 'tip',
        title: '💡 نکات مهم OOP',
        content: '• __init__ سازنده است و هنگام ساخت شیء اجرا می‌شود\n• self به خود شیء اشاره می‌کند\n• super() به کلاس پدر دسترسی می‌دهد\n• Encapsulation: __نام (دوبار underline) = خصوصی'
      }
    ],
    quiz: [
      {
        question: 'متد __init__ در کلاس پایتون چه کاری می‌کند؟',
        options: ['کلاس را حذف می‌کند', 'هنگام ساخت شیء اجرا می‌شود', 'کلاس را چاپ می‌کند', 'ارث‌بری را تعریف می‌کند'],
        correct: 1,
        explanation: '__init__ سازنده است و هنگام ساختن شیء جدید با () اجرا می‌شود.'
      },
      {
        question: 'پارامتر self در متدهای کلاس به چه چیزی اشاره دارد؟',
        options: ['کلاس پدر', 'خود شیء فعلی', 'تابع قبلی', 'متغیر محلی'],
        correct: 1,
        explanation: 'self به خود نمونه (instance) شیء اشاره می‌کند و به ویژگی‌ها دسترسی می‌دهد.'
      },
      {
        question: 'برای ارث‌بری از کلاس دیگر چه می‌نویسیم؟',
        options: ['class B extends A', 'class B(A)', 'class B inherits A', 'class B: A'],
        correct: 1,
        explanation: 'در پایتون وراثت با نوشتن نام کلاس پدر در پرانتز انجام می‌شود: class B(A)'
      }
    ]
  },
  {
    id: 11,
    title: 'مدیریت خطاها',
    emoji: '🛡️',
    description: 'مدیریت خطاها با try, except, finally',
    level: 'متوسط',
    duration: '۱۰ دقیقه',
    content: [
      {
        type: 'text',
        title: 'چرا باید خطاها را مدیریت کنیم؟',
        content: 'وقتی برنامه با مشکل روبرو می‌شود، معمولاً crash می‌کند. با try-except می‌توانیم خطاها را بگیریم و برنامه را ادامه دهیم.'
      },
      {
        type: 'code',
        content: '# بدون مدیریت خطا (خطرناک!)\nعدد = int(input("عدد: "))  # اگر حرف وارد شود: CRASH!\nprint(10 / عدد)           # اگر 0 وارد شود: CRASH!'
      },
      {
        type: 'code',
        content: '# با مدیریت خطا\ntry:\n    عدد = int(input("عدد: "))\n    نتیجه = 10 / عدد\n    print(f"نتیجه: {نتیجه}")\nexcept ValueError:\n    print("❌ لطفاً عدد وارد کنید")\nexcept ZeroDivisionError:\n    print("❌ تقسیم بر صفر ممکن نیست")\nexcept Exception as e:\n    print(f"❌ خطای ناشناخته: {e}")\nelse:\n    print("✅ عملیات موفق بود")\nfinally:\n    print("🔚 این همیشه اجرا می‌شود")'
      },
      {
        type: 'tip',
        title: '💡 انواع خطاهای رایج',
        content: '• ValueError: مقدار نادرست\n• TypeError: نوع داده اشتباه\n• ZeroDivisionError: تقسیم بر صفر\n• IndexError: ایندکس خارج از محدوده\n• KeyError: کلید در دیکشنری نیست\n• FileNotFoundError: فایل پیدا نشد\n• NameError: متغیر تعریف نشده'
      },
      {
        type: 'code',
        content: '# raise: ایجاد خطا عمدی\ndef واریز(مبلغ):\n    if مبلغ <= 0:\n        raise ValueError("مبلغ باید مثبت باشد")\n    print(f"✅ {مبلغ:,} تومان واریز شد")\n\ntry:\n    واریز(-100)\nexcept ValueError as e:\n    print(f"❌ {e}")'
      },
      {
        type: 'output',
        content: '❌ مبلغ باید مثبت باشد'
      }
    ],
    quiz: [
      {
        question: 'بلوک finally در try-except چه زمانی اجرا می‌شود؟',
        options: ['فقط وقتی خطا نباشد', 'فقط وقتی خطا باشد', 'همیشه', 'هرگز'],
        correct: 2,
        explanation: 'finally همیشه اجرا می‌شود، چه خطا بیاید چه نیاید.'
      },
      {
        question: 'وقتی مقدار غیر عددی به int() بدهیم، چه خطایی می‌دهد؟',
        options: ['TypeError', 'ValueError', 'InputError', 'ConvertError'],
        correct: 1,
        explanation: 'int("abc") خطای ValueError می‌دهد چون مقدار قابل تبدیل نیست.'
      },
      {
        question: 'از کدام دستور برای ایجاد خطا عمدی استفاده می‌کنیم؟',
        options: ['throw', 'raise', 'error', 'except'],
        correct: 1,
        explanation: 'در پایتون از raise برای ایجاد خطا عمدی استفاده می‌شود.'
      }
    ]
  },
  {
    id: 12,
    title: 'کار با فایل‌ها',
    emoji: '📁',
    description: 'خواندن و نوشتن فایل در پایتون',
    level: 'متوسط',
    duration: '۱۲ دقیقه',
    content: [
      {
        type: 'text',
        title: 'کار با فایل',
        content: 'پایتون می‌تواند فایل‌های متنی را بخواند، بنویسد و ویرایش کند. برای این کار از تابع open() استفاده می‌کنیم.'
      },
      {
        type: 'code',
        content: '# نوشتن در فایل\nwith open("یادداشت.txt", "w", encoding="utf-8") as f:\n    f.write("سلام دنیا!\\n")\n    f.write("این یک فایل آزمایشی است\\n")\n    f.writelines(["خط سوم\\n", "خط چهارم\\n"])\n\nprint("✅ فایل ذخیره شد")'
      },
      {
        type: 'code',
        content: '# خواندن از فایل\nwith open("یادداشت.txt", "r", encoding="utf-8") as f:\n    محتوا = f.read()       # همه را بخوان\n    print(محتوا)\n\n# خواندن خط به خط\nwith open("یادداشت.txt", "r", encoding="utf-8") as f:\n    for خط in f:\n        print(خط.strip())'
      },
      {
        type: 'tip',
        title: '💡 حالت‌های باز کردن فایل',
        content: '• "r" - خواندن (پیش‌فرض)\n• "w" - نوشتن (محتوا جایگزین می‌شود)\n• "a" - اضافه کردن به انتها\n• "r+" - خواندن و نوشتن\n• "rb" - خواندن باینری\n\nهمیشه از with استفاده کن تا فایل خودکار بسته شود!'
      },
      {
        type: 'code',
        content: '# کار با JSON\nimport json\n\n# ذخیره دیکشنری در JSON\nاطلاعات = {"نام": "علی", "سن": 25, "مهارت‌ها": ["Python", "SQL"]}\n\nwith open("اطلاعات.json", "w", encoding="utf-8") as f:\n    json.dump(اطلاعات, f, ensure_ascii=False, indent=2)\n\n# خواندن JSON\nwith open("اطلاعات.json", "r", encoding="utf-8") as f:\n    داده = json.load(f)\n    print(داده["نام"])  # علی'
      },
      {
        type: 'warning',
        title: '⚠️ دقت کن',
        content: 'همیشه encoding="utf-8" را برای فایل‌های فارسی مشخص کن تا مشکل کاراکتر نداشته باشی.'
      }
    ],
    quiz: [
      {
        question: 'برای اضافه کردن متن به انتهای فایل موجود از کدام حالت استفاده می‌کنیم؟',
        options: ['"r"', '"w"', '"a"', '"add"'],
        correct: 2,
        explanation: 'حالت "a" (append) متن را به انتهای فایل موجود اضافه می‌کند.'
      },
      {
        question: 'چرا باید از with open() استفاده کنیم؟',
        options: ['سریع‌تر است', 'فایل را خودکار می‌بندد', 'فقط برای JSON است', 'خطا نمی‌دهد'],
        correct: 1,
        explanation: 'with تضمین می‌کند فایل بعد از اتمام کار خودکار بسته شود.'
      },
      {
        question: 'برای ذخیره دیکشنری پایتون در فایل JSON از چه تابعی استفاده می‌کنیم؟',
        options: ['json.save()', 'json.dump()', 'json.write()', 'json.export()'],
        correct: 1,
        explanation: 'json.dump() برای نوشتن در فایل و json.dumps() برای تبدیل به رشته استفاده می‌شود.'
      }
    ]
  },
  {
    id: 13,
    title: 'ماژول‌ها و کتابخانه‌ها',
    emoji: '📦',
    description: 'استفاده از کتابخانه‌های قدرتمند پایتون',
    level: 'پیشرفته',
    duration: '۱۵ دقیقه',
    content: [
      {
        type: 'text',
        title: 'ماژول چیست؟',
        content: 'ماژول یک فایل پایتون است که توابع و کلاس‌های آماده دارد. پایتون کتابخانه‌های بسیاری دارد که کار ما را راحت‌تر می‌کنند.'
      },
      {
        type: 'code',
        content: '# ماژول math\nimport math\n\nprint(math.pi)          # 3.14159...\nprint(math.sqrt(144))   # 12.0\nprint(math.ceil(4.2))   # 5\nprint(math.floor(4.9))  # 4\nprint(math.factorial(5)) # 120'
      },
      {
        type: 'code',
        content: '# ماژول random\nimport random\n\nprint(random.randint(1, 100))      # عدد تصادفی\nprint(random.random())             # بین 0 و 1\n\nلیست = [1, 2, 3, 4, 5]\nrandom.shuffle(لیست)               # درهم ریختن\nprint(لیست)\nprint(random.choice(["سیب", "موز", "پرتقال"]))  # انتخاب تصادفی'
      },
      {
        type: 'code',
        content: '# ماژول datetime\nfrom datetime import datetime\n\nاکنون = datetime.now()\nprint(f"تاریخ: {اکنون.year}/{اکنون.month}/{اکنون.day}")\nprint(f"زمان: {اکنون.hour}:{اکنون.minute}")\nprint(اکنون.strftime("%Y-%m-%d %H:%M"))'
      },
      {
        type: 'tip',
        title: '📦 کتابخانه‌های محبوب',
        content: '• NumPy - محاسبات علمی و آرایه\n• Pandas - تحلیل داده\n• Matplotlib - رسم نمودار\n• Requests - ارسال درخواست HTTP\n• Flask/Django - توسعه وب\n• TensorFlow/PyTorch - یادگیری ماشین\n• OpenCV - پردازش تصویر'
      },
      {
        type: 'code',
        content: '# نصب کتابخانه خارجی با pip\n# در ترمینال تایپ کن:\npip install requests\npip install numpy\npip install pandas\n\n# استفاده\nimport requests\nresponse = requests.get("https://api.github.com")\nprint(response.status_code)  # 200'
      }
    ],
    quiz: [
      {
        question: 'برای نصب کتابخانه خارجی در پایتون از چه دستوری استفاده می‌کنیم؟',
        options: ['python install', 'pip install', 'npm install', 'apt install'],
        correct: 1,
        explanation: 'pip install نام_کتابخانه دستور نصب کتابخانه‌های پایتون است.'
      },
      {
        question: 'تابع math.sqrt(25) چه خروجی‌ای دارد؟',
        options: ['5', '5.0', '625', '12.5'],
        correct: 1,
        explanation: 'sqrt ریشه دوم می‌گیرد. ریشه 25 می‌شود 5.0 (از نوع float)'
      },
      {
        question: 'کدام کتابخانه برای تحلیل داده استفاده می‌شود؟',
        options: ['NumPy', 'Pandas', 'Flask', 'PyGame'],
        correct: 1,
        explanation: 'Pandas کتابخانه اصلی برای تحلیل و پردازش داده در پایتون است.'
      }
    ]
  },
  {
    id: 14,
    title: 'پروژه: ماشین حساب',
    emoji: '🧮',
    description: 'ساخت یک ماشین حساب کامل با پایتون',
    level: 'متوسط',
    duration: '۲۰ دقیقه',
    content: [
      {
        type: 'text',
        title: 'پروژه اول: ماشین حساب',
        content: 'در این پروژه یک ماشین حساب کامل می‌سازیم که از همه مفاهیمی که یاد گرفتیم استفاده می‌کند.'
      },
      {
        type: 'code',
        content: '#!/usr/bin/env python3\n# ماشین حساب پیشرفته\n\ndef جمع(a, b): return a + b\ndef تفریق(a, b): return a - b\ndef ضرب(a, b): return a * b\ndef تقسیم(a, b):\n    if b == 0:\n        raise ValueError("تقسیم بر صفر ممکن نیست!")\n    return a / b\ndef توان(a, b): return a ** b\n\ndef ماشین_حساب():\n    print("=" * 40)\n    print("   🧮 ماشین حساب پیشرفته پایتون")\n    print("=" * 40)\n    \n    عملیات = {\n        "1": ("+", "جمع", جمع),\n        "2": ("-", "تفریق", تفریق),\n        "3": ("*", "ضرب", ضرب),\n        "4": ("/", "تقسیم", تقسیم),\n        "5": ("**", "توان", توان),\n    }\n    \n    while True:\n        print("\\nعملیات‌ها:")\n        for کد, (نماد, نام, _) in عملیات.items():\n            print(f"  {کد}. {نام} ({نماد})")\n        print("  0. خروج")\n        \n        انتخاب = input("\\nعملیات را انتخاب کن: ")\n        \n        if انتخاب == "0":\n            print("خداحافظ! 👋")\n            break\n        \n        if انتخاب not in عملیات:\n            print("❌ انتخاب نامعتبر")\n            continue\n        \n        try:\n            a = float(input("عدد اول: "))\n            b = float(input("عدد دوم: "))\n            نماد, نام, تابع = عملیات[انتخاب]\n            نتیجه = تابع(a, b)\n            print(f"✅ {a} {نماد} {b} = {نتیجه}")\n        except ValueError as e:\n            print(f"❌ خطا: {e}")\n\nماشین_حساب()'
      },
      {
        type: 'tip',
        title: '🎯 چه یاد گرفتیم؟',
        content: '✅ توابع (def)\n✅ دیکشنری\n✅ حلقه while\n✅ مدیریت خطا (try-except)\n✅ شرط‌ها (if-elif-else)\n✅ f-string\n✅ ورودی از کاربر'
      },
      {
        type: 'text',
        title: 'پیشرفت بیشتر',
        content: 'می‌توانی این پروژه را گسترش دهی:\n• اضافه کردن تاریخچه محاسبات\n• ذخیره در فایل\n• محاسبات علمی با math\n• رابط کاربری گرافیکی با tkinter'
      }
    ],
    quiz: [
      {
        question: 'در ماشین حساب، چرا قبل از تقسیم مقدار b را بررسی می‌کنیم؟',
        options: ['برای سرعت بیشتر', 'جلوگیری از خطای تقسیم بر صفر', 'برای دقت بیشتر', 'اجباری است'],
        correct: 1,
        explanation: 'تقسیم بر صفر در ریاضی تعریف نشده است و در پایتون خطا می‌دهد.'
      },
      {
        question: 'چرا از حلقه while True در ماشین حساب استفاده می‌کنیم؟',
        options: ['اجباری است', 'تا برنامه تا زمانی که کاربر خروج نزند ادامه دهد', 'خطا نمی‌دهد', 'سریع‌تر است'],
        correct: 1,
        explanation: 'while True یک حلقه بی‌نهایت می‌سازد که با break (خروج) متوقف می‌شود.'
      },
      {
        question: 'مزیت استفاده از دیکشنری برای عملیات‌ها چیست؟',
        options: ['سرعت بیشتر', 'کمتر کد نوشتیم', 'کد تمیزتر و قابل گسترش‌تر', 'اجباری است'],
        correct: 2,
        explanation: 'دیکشنری کد را تمیزتر می‌کند و اضافه کردن عملیات جدید را آسان‌تر می‌کند.'
      }
    ]
  },
  {
    id: 15,
    title: 'پروژه: مدیریت دانشجو',
    emoji: '🎓',
    description: 'پروژه جامع: سیستم مدیریت دانشجویان',
    level: 'پیشرفته',
    duration: '۳۰ دقیقه',
    content: [
      {
        type: 'text',
        title: 'پروژه پایانی: سیستم دانشجویی',
        content: 'در این پروژه یک سیستم کامل مدیریت دانشجویان می‌سازیم که شامل OOP، فایل‌خوانی و تمام مفاهیم پیشرفته است.'
      },
      {
        type: 'code',
        content: 'import json\nfrom datetime import datetime\n\nclass دانشجو:\n    def __init__(self, نام, شماره_دانشجویی, رشته):\n        self.نام = نام\n        self.شماره = شماره_دانشجویی\n        self.رشته = رشته\n        self.نمرات = {}\n    \n    def اضافه_نمره(self, درس, نمره):\n        if 0 <= نمره <= 20:\n            self.نمرات[درس] = نمره\n        else:\n            raise ValueError("نمره باید بین 0 و 20 باشد")\n    \n    @property\n    def معدل(self):\n        if not self.نمرات:\n            return 0\n        return round(sum(self.نمرات.values()) / len(self.نمرات), 2)\n    \n    def __str__(self):\n        return f"[{self.شماره}] {self.نام} - {self.رشته}"'
      },
      {
        type: 'code',
        content: 'class سیستم_دانشگاه:\n    def __init__(self):\n        self.دانشجویان = {}\n    \n    def ثبت_نام(self, نام, شماره, رشته):\n        if شماره in self.دانشجویان:\n            raise ValueError("این شماره دانشجویی قبلاً ثبت شده")\n        د = دانشجو(نام, شماره, رشته)\n        self.دانشجویان[شماره] = د\n        print(f"✅ {نام} با موفقیت ثبت شد")\n    \n    def گزارش_کل(self):\n        print("\\n📊 گزارش کلی دانشجویان")\n        print("-" * 40)\n        for د in self.دانشجویان.values():\n            وضعیت = "✅ قبول" if د.معدل >= 10 else "❌ مردود"\n            print(f"{د} | معدل: {د.معدل} | {وضعیت}")\n    \n    def بهترین_دانشجو(self):\n        if not self.دانشجویان:\n            return None\n        return max(self.دانشجویان.values(), key=lambda د: د.معدل)\n\n# استفاده\nدانشگاه = سیستم_دانشگاه()\nدانشگاه.ثبت_نام("علی احمدی", "9801", "کامپیوتر")\nدانشگاه.ثبت_نام("سارا محمدی", "9802", "برق")\n\nد = دانشگاه.دانشجویان["9801"]\nد.اضافه_نمره("ریاضی", 18)\nد.اضافه_نمره("پایتون", 20)\nد.اضافه_نمره("برنامه‌سازی", 17)\n\nدانشگاه.گزارش_کل()\nبهترین = دانشگاه.بهترین_دانشجو()\nprint(f"\\n🏆 بهترین دانشجو: {بهترین.نام}")'
      },
      {
        type: 'output',
        content: '✅ علی احمدی با موفقیت ثبت شد\n✅ سارا محمدی با موفقیت ثبت شد\n\n📊 گزارش کلی دانشجویان\n----------------------------------------\n[9801] علی احمدی - کامپیوتر | معدل: 18.33 | ✅ قبول\n[9802] سارا محمدی - برق | معدل: 0 | ❌ مردود\n\n🏆 بهترین دانشجو: علی احمدی'
      },
      {
        type: 'tip',
        title: '🎊 تبریک! مسیر بعدی',
        content: 'تو پایتون را از صفر یاد گرفتی! مسیرهای پیش رو:\n🤖 هوش مصنوعی: یادگیری TensorFlow/PyTorch\n📊 علم داده: Pandas, NumPy, Matplotlib\n🌐 توسعه وب: Flask یا Django\n🎮 بازی‌سازی: PyGame\n🔐 امنیت: Python Security Tools'
      }
    ],
    quiz: [
      {
        question: '@property در پایتون چه کاری می‌کند؟',
        options: ['متد را حذف می‌کند', 'متد را مثل ویژگی صدا می‌زند (بدون ())', 'متد را public می‌کند', 'به ارث می‌رسد'],
        correct: 1,
        explanation: '@property به ما اجازه می‌دهد متد را بدون پرانتز صدا بزنیم، مثل یک attribute.'
      },
      {
        question: 'lambda در پایتون چیست؟',
        options: ['حلقه خاص', 'تابع بی‌نام یک‌خطی', 'نوع داده', 'کلاس خاص'],
        correct: 1,
        explanation: 'lambda یک تابع بی‌نام و کوچک است که در یک خط نوشته می‌شود.'
      },
      {
        question: 'چرا از max() با key=lambda استفاده می‌کنیم؟',
        options: ['اشتباه است', 'برای مرتب‌سازی', 'برای مشخص کردن معیار مقایسه', 'اجباری است'],
        correct: 2,
        explanation: 'key مشخص می‌کند max() بر اساس چه معیاری مقایسه کند.'
      }
    ]
  }
];

export const getLessonById = (id: number): Lesson | undefined =>
  lessons.find(l => l.id === id);
