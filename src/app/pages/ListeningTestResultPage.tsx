import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, X, AlertTriangle, ArrowLeft, Award, Link2, RotateCcw, BookOpen } from 'lucide-react';
import imgLogo from "figma:asset/c5a8a94c89c2145891f504597cf7f6502e9912f5.png";
import { motion, AnimatePresence } from 'motion/react';

// ========== DATA ==========
const testInfo = {
  studentName: 'أحمد علي',
  testName: 'Cambridge IELTS Practice Test 17',
  testMode: 'التدريب',
  testType: 'أكاديمي',
  skill: 'الاستماع',
  attemptNumber: 3,
  date: '12/3/2025 - 4:45م',
  duration: '60 دقيقة',
  totalScore: 7.5,
  maxScore: 9.0,
  targetScore: 8.0,
  correctAnswers: 30,
  totalQuestions: 40,
};

interface SectionData {
  id: number;
  name: string;
  correct: number;
  total: number;
  accuracy: number;
  time: string;
}

const sections: SectionData[] = [
  { id: 1, name: 'المقطع 1', correct: 10, total: 14, accuracy: 71, time: '18 دقيقة' },
  { id: 2, name: 'المقطع 2', correct: 3, total: 13, accuracy: 23, time: '15 دقيقة' },
  { id: 3, name: 'المقطع 3', correct: 8, total: 13, accuracy: 62, time: '12 دقيقة' },
];

interface Question {
  id: number;
  section: number;
  questionText: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  errorNote?: string;
}

const questions: Question[] = [
  { id: 1, section: 1, questionText: "What is the speaker's main purpose?", userAnswer: 'To inform about new policy', correctAnswer: 'To introduce new regulations', isCorrect: false, errorNote: "Misheard key phrase 'regulations' as 'policy'" },
  { id: 2, section: 1, questionText: 'When will the changes take effect?', userAnswer: 'Next month', correctAnswer: 'Next month', isCorrect: true },
  { id: 3, section: 1, questionText: 'How many departments are affected?', userAnswer: 'Five', correctAnswer: 'Five', isCorrect: true },
  { id: 4, section: 1, questionText: 'What is the expected outcome?', userAnswer: 'Improved efficiency', correctAnswer: 'Improved efficiency', isCorrect: true },
  { id: 5, section: 1, questionText: 'Who should be contacted for questions?', userAnswer: 'HR Department', correctAnswer: 'HR Department', isCorrect: true },
  { id: 6, section: 1, questionText: 'What is the budget allocation?', userAnswer: '$50,000', correctAnswer: '$15,000', isCorrect: false, errorNote: 'Confused with total project budget' },
  { id: 7, section: 1, questionText: 'Which team leads the project?', userAnswer: 'Operations', correctAnswer: 'Operations', isCorrect: true },
  { id: 8, section: 1, questionText: 'What is the review period?', userAnswer: '3 months', correctAnswer: '3 months', isCorrect: true },
  { id: 9, section: 1, questionText: 'Where will training be held?', userAnswer: 'Conference room B', correctAnswer: 'Conference room A', isCorrect: false, errorNote: 'Similar sounding rooms confused' },
  { id: 10, section: 1, questionText: 'What is required from employees?', userAnswer: 'Weekly reports', correctAnswer: 'Weekly reports', isCorrect: true },
  { id: 11, section: 1, questionText: 'What is the deadline for feedback?', userAnswer: 'End of March', correctAnswer: 'End of March', isCorrect: true },
  { id: 12, section: 1, questionText: 'Who will supervise implementation?', userAnswer: 'Department heads', correctAnswer: 'Department heads', isCorrect: true },
  { id: 13, section: 1, questionText: 'What tools will be provided?', userAnswer: 'Online portal', correctAnswer: 'Training manual', isCorrect: false, errorNote: 'Confused portal access with training materials' },
  { id: 14, section: 1, questionText: 'How often are updates sent?', userAnswer: 'Weekly', correctAnswer: 'Weekly', isCorrect: true },
  { id: 15, section: 2, questionText: 'What type of accommodation is discussed?', userAnswer: 'Student dormitory', correctAnswer: 'Student dormitory', isCorrect: true },
  { id: 16, section: 2, questionText: 'How much is the monthly rent?', userAnswer: '$800', correctAnswer: '$600', isCorrect: false, errorNote: 'Confused with the premium room rate' },
  { id: 17, section: 2, questionText: 'What is included in the rent?', userAnswer: 'Utilities only', correctAnswer: 'Utilities and internet', isCorrect: false, errorNote: 'Missed the mention of internet' },
  { id: 18, section: 2, questionText: 'When is the move-in date?', userAnswer: 'September 1st', correctAnswer: 'September 15th', isCorrect: false, errorNote: 'Confused with semester start date' },
  { id: 19, section: 2, questionText: 'What facilities are available?', userAnswer: 'Gym and pool', correctAnswer: 'Gym and laundry', isCorrect: false, errorNote: 'Misidentified the second facility' },
  { id: 20, section: 2, questionText: 'What is the minimum lease period?', userAnswer: '6 months', correctAnswer: '6 months', isCorrect: true },
  { id: 21, section: 2, questionText: 'Who manages the property?', userAnswer: 'University housing', correctAnswer: 'Private company', isCorrect: false, errorNote: 'Confused the management entity' },
  { id: 22, section: 2, questionText: 'Is parking available?', userAnswer: 'Yes, free', correctAnswer: 'Yes, paid', isCorrect: false, errorNote: 'Missed the detail about parking fees' },
  { id: 23, section: 2, questionText: 'What floor is the room on?', userAnswer: 'Third floor', correctAnswer: 'Third floor', isCorrect: true },
  { id: 24, section: 2, questionText: 'Are pets allowed?', userAnswer: 'No', correctAnswer: 'Small pets only', isCorrect: false, errorNote: 'Missed the conditional allowance' },
  { id: 25, section: 2, questionText: 'What is the deposit amount?', userAnswer: 'One month rent', correctAnswer: 'Two months rent', isCorrect: false, errorNote: 'Confused deposit policy' },
  { id: 26, section: 2, questionText: 'Is there a curfew?', userAnswer: 'No', correctAnswer: 'No', isCorrect: true },
  { id: 27, section: 2, questionText: 'How many roommates?', userAnswer: 'Two', correctAnswer: 'One', isCorrect: false, errorNote: 'Confused shared vs double room' },
  { id: 28, section: 3, questionText: 'What is the main topic of the lecture?', userAnswer: 'Marine biology', correctAnswer: 'Marine biology', isCorrect: true },
  { id: 29, section: 3, questionText: 'How many species were discussed?', userAnswer: 'Four', correctAnswer: 'Four', isCorrect: true },
  { id: 30, section: 3, questionText: 'What is the biggest threat mentioned?', userAnswer: 'Climate change', correctAnswer: 'Pollution', isCorrect: false, errorNote: 'Confused primary with secondary threat' },
  { id: 31, section: 3, questionText: 'When was the study conducted?', userAnswer: '2020', correctAnswer: '2020', isCorrect: true },
  { id: 32, section: 3, questionText: 'What method was used for research?', userAnswer: 'Field observation', correctAnswer: 'Field observation', isCorrect: true },
  { id: 33, section: 3, questionText: 'How long did the study take?', userAnswer: '3 years', correctAnswer: '3 years', isCorrect: true },
  { id: 34, section: 3, questionText: 'What percentage showed improvement?', userAnswer: '45%', correctAnswer: '65%', isCorrect: false, errorNote: 'Confused with baseline percentage' },
  { id: 35, section: 3, questionText: 'Who funded the research?', userAnswer: 'Government grant', correctAnswer: 'Government grant', isCorrect: true },
  { id: 36, section: 3, questionText: 'What was the sample size?', userAnswer: '500', correctAnswer: '500', isCorrect: true },
  { id: 37, section: 3, questionText: 'Where was research conducted?', userAnswer: 'Pacific Ocean', correctAnswer: 'Pacific Ocean', isCorrect: true },
  { id: 38, section: 3, questionText: 'What is the recommended action?', userAnswer: 'More research', correctAnswer: 'Policy changes', isCorrect: false, errorNote: 'Confused recommendation with conclusion' },
  { id: 39, section: 3, questionText: 'What technology was introduced?', userAnswer: 'Satellite tracking', correctAnswer: 'Satellite tracking', isCorrect: true },
  { id: 40, section: 3, questionText: 'What is the future plan?', userAnswer: 'Expand study area', correctAnswer: 'Expand to other regions', isCorrect: false, errorNote: 'Partially correct but imprecise wording' },
];

// ========== HELPERS ==========
function getScoreColor(percentage: number): string {
  if (percentage >= 0.7) return '#4CAF50';
  if (percentage >= 0.5) return '#F59E0B';
  return '#EF4444';
}

function getAccuracyColor(accuracy: number): string {
  if (accuracy >= 70) return '#4CAF50';
  if (accuracy >= 50) return '#F59E0B';
  return '#EF4444';
}

function getAccuracyBg(accuracy: number): string {
  if (accuracy >= 70) return 'bg-[#ECFDF5]';
  if (accuracy >= 50) return 'bg-[#FFFBEB]';
  return 'bg-[#FEF2F2]';
}

function getAccuracyTextColor(accuracy: number): string {
  if (accuracy >= 70) return 'text-[#16A34A]';
  if (accuracy >= 50) return 'text-[#D97706]';
  return 'text-[#DC2626]';
}

// ========== COMPONENTS ==========

function ScoreRing({ value, max, size = 140, strokeWidth = 13, label }: {
  value: number; max: number; size?: number; strokeWidth?: number; label: string;
}) {
  const [mounted, setMounted] = useState(false);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = value / max;
  const color = getScoreColor(percentage);
  const offset = circumference * (1 - percentage);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#E2E8F0" strokeWidth={strokeWidth} />
          <circle
            cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${circumference}`}
            strokeDashoffset={mounted ? `${offset}` : `${circumference}`}
            style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[22px] font-[700]" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif", color }}>
            {typeof value === 'number' && value % 1 !== 0 ? value.toFixed(1) : value}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-[12px] text-[#6B7280]" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>
        <span>{label}</span>
        <span className="text-[#111827] font-[600]">{typeof value === 'number' && value % 1 !== 0 ? value.toFixed(1) : value} / {typeof max === 'number' && max % 1 !== 0 ? max.toFixed(1) : max}</span>
      </div>
    </div>
  );
}

function SectionProgressRing({ correct, total, size = 68 }: { correct: number; total: number; size?: number }) {
  const [mounted, setMounted] = useState(false);
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = correct / total;
  const offset = circumference * (1 - percentage);
  const color = getScoreColor(percentage);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#E5E7EB" strokeWidth={strokeWidth} />
        <circle
          cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference}`}
          strokeDashoffset={mounted ? `${offset}` : `${circumference}`}
          style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-[14px] font-[600] text-[#111827]" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>
        {correct}/{total}
      </div>
    </div>
  );
}

function CorrectIcon() {
  return (
    <div className="size-[24px] rounded-full bg-[#22C55E] flex items-center justify-center shrink-0">
      <Check className="size-[14px] text-white" strokeWidth={3} />
    </div>
  );
}

function WrongIcon() {
  return (
    <div className="size-[24px] rounded-full bg-[#EF4444] flex items-center justify-center shrink-0">
      <X className="size-[14px] text-white" strokeWidth={3} />
    </div>
  );
}

function QuestionCard({ question, index }: { question: Question; index: number }) {
  const isWrong = !question.isCorrect;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className={`bg-white rounded-[12px] p-5 sm:p-6 flex flex-col gap-4 transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] ${
        isWrong ? 'border-2 border-[#C90F2E]' : 'border border-[#E5E5E5]'
      }`}
    >
      {/* Question header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <span className="text-[14px] text-[#9CA3AF]" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>
            #{question.id}
          </span>
        </div>
        {question.isCorrect ? <CorrectIcon /> : <WrongIcon />}
      </div>

      {/* Question text */}
      <p className="text-[15px] text-[#374151] leading-[1.6]" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>
        {question.questionText}
      </p>

      {/* Answers */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-start gap-2 text-[14px]" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>
          <span className="text-[#9CA3AF] shrink-0">Your answer:</span>
          <span className={`font-[500] ${isWrong ? 'text-[#DC2626] line-through decoration-[#DC2626]/30' : 'text-[#16A34A]'}`}>
            {question.userAnswer}
          </span>
        </div>

        {isWrong && (
          <>
            <div className="flex items-start gap-2 text-[14px]" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>
              <span className="text-[#9CA3AF] shrink-0">Correct answer:</span>
              <span className="text-[#16A34A] font-[500]">{question.correctAnswer}</span>
            </div>
            {question.errorNote && (
              <div className="flex items-start gap-2 mt-1 bg-[#FEF2F2] rounded-[8px] px-3 py-2">
                <AlertTriangle className="size-[14px] text-[#DC2626] shrink-0 mt-0.5" />
                <span className="text-[13px] text-[#991B1B] leading-[1.5]" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>
                  {question.errorNote}
                </span>
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 items-end text-right">
      <span className="text-[12px] sm:text-[13px] text-[#9CA3AF]">{label}</span>
      <span className="text-[13px] sm:text-[14px] font-[600] text-[#111827] truncate max-w-[180px]">{value}</span>
    </div>
  );
}

// ========== MAIN PAGE ==========
export function ListeningTestResultPage() {
  const [activeSection, setActiveSection] = useState(1);
  const [showWrongOnly, setShowWrongOnly] = useState(false);
  const [copied, setCopied] = useState(false);
  const questionsRef = useRef<HTMLDivElement>(null);
  const shareUrl = 'app.goielts.ai/score/1063';

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSectionChange = (sectionId: number) => {
    setActiveSection(sectionId);
    // Smooth scroll to questions area
    setTimeout(() => {
      questionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const filteredQuestions = questions.filter(q => {
    const sectionMatch = q.section === activeSection;
    const wrongMatch = showWrongOnly ? !q.isCorrect : true;
    return sectionMatch && wrongMatch;
  });

  const activeSectionData = sections.find(s => s.id === activeSection);
  const sectionWrongCount = questions.filter(q => q.section === activeSection && !q.isCorrect).length;
  const sectionTotalCount = questions.filter(q => q.section === activeSection).length;

  const progressWidth = ((testInfo.totalScore) / (testInfo.targetScore)) * 100;

  return (
    <div className="min-h-screen bg-[#F9FAFB]" dir="rtl" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>
      {/* ===== HEADER ===== */}
      <header className="bg-white border-b border-[#E5E5E5] sticky top-0 z-50">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-4 sm:gap-5">
          {/* Top row: Logo + Share */}
          <div className="flex items-center justify-between">
            {/* Share URL */}
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-[#F2F2F2] rounded-[7px] h-[36px] overflow-hidden">
                <button
                  onClick={handleCopy}
                  aria-label={copied ? 'تم النسخ' : 'نسخ الرابط'}
                  className="bg-[#012269] text-white text-[14px] font-[600] h-full px-3 rounded-[7px] hover:bg-[#011d55] active:scale-[0.97] transition-all whitespace-nowrap flex items-center gap-1.5"
                >
                  <Link2 className="size-[14px]" />
                  <span>{copied ? 'تم!' : 'نسخ'}</span>
                </button>
                <span className="px-3 text-[13px] text-[#6B7280] hidden sm:inline" dir="ltr">{shareUrl}</span>
              </div>
              <span className="text-[18px] font-[700] text-[#0A0A0A] hidden sm:inline">شارك درجتك</span>
            </div>
            {/* Logo */}
            <div className="h-[38px] w-[106px] mix-blend-darken">
              <img src={imgLogo} alt="GoIELTS Logo" className="h-full w-full object-contain" />
            </div>
          </div>

          {/* Middle row: Congrats + Navigation */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            {/* Navigation */}
            <div className="flex items-center gap-2 order-2 sm:order-1">
              <button className="bg-[#012269] text-white h-[36px] px-3 rounded-[6px] flex items-center gap-1.5 hover:bg-[#011d55] active:scale-[0.97] transition-all text-[13px] font-[600]">
                <ArrowLeft className="size-[18px]" />
                <span>رجوع</span>
              </button>
              <button className="border border-[#D1D5DB] bg-white h-[36px] px-3 rounded-[6px] text-[#374151] text-[13px] font-[600] hover:bg-gray-50 active:scale-[0.97] transition-all flex items-center gap-1.5">
                <RotateCcw className="size-[14px]" />
                <span>إعادة الاختبار</span>
              </button>
              <button className="border border-[#D1D5DB] bg-white h-[36px] px-3 rounded-[6px] text-[#374151] text-[13px] font-[600] hover:bg-gray-50 active:scale-[0.97] transition-all hidden sm:flex items-center gap-1.5">
                <BookOpen className="size-[14px]" />
                <span>الاختبارات</span>
              </button>
              <button className="border border-[#D1D5DB] h-[36px] px-2.5 rounded-[6px] text-[#374151] text-[13px] font-[600] flex items-center gap-1 hover:bg-gray-50 active:scale-[0.97] transition-all">
                <ChevronDown className="size-[18px]" />
                <span>الاستماع</span>
              </button>
            </div>
            {/* Congrats */}
            <div className="flex items-center gap-2.5 order-1 sm:order-2">
              <div className="size-[28px] sm:size-[32px] rounded-full bg-[#22C55E] flex items-center justify-center shrink-0">
                <Check className="size-[16px] sm:size-[18px] text-white" strokeWidth={3} />
              </div>
              <h1 className="text-[20px] sm:text-[28px] font-[700] text-[#012269]">
                مبروك! خلّصت الاختبار بنجاح
              </h1>
            </div>
          </div>

          {/* Test Info Bar */}
          <div className="bg-[#F9FAFB] rounded-[8px] px-4 sm:px-5 py-2.5 border border-[#F3F4F6]">
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-1 scrollbar-hide justify-end">
              {[
                { label: 'الوقت المستغرق', value: testInfo.duration },
                { label: 'تاريخ الاختبار', value: testInfo.date },
                { label: 'رقم المحاولة', value: String(testInfo.attemptNumber) },
                { label: 'المهارة', value: testInfo.skill },
                { label: 'نوع الاختبار', value: testInfo.testType },
                { label: 'نمط الاختبار', value: testInfo.testMode },
                { label: 'اسم الاختبار', value: testInfo.testName },
                { label: 'اسم المتدرب', value: testInfo.studentName },
              ].map((item, i, arr) => (
                <div key={item.label} className="flex items-center gap-4 sm:gap-6 shrink-0">
                  <InfoItem label={item.label} value={item.value} />
                  {i < arr.length - 1 && <div className="w-px h-[28px] bg-[#E5E7EB] shrink-0" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-[1250px] mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-6 sm:gap-8">

        {/* Motivational Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[12px] shadow-[0px_2px_0px_0px_#C90F2E] p-4 sm:p-5 flex flex-col gap-4"
        >
          <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="flex flex-col gap-2 shrink-0">
              <button className="bg-[#C90F2E] text-white text-[14px] font-[500] px-4 py-2.5 rounded-[8px] hover:bg-[#A80D26] active:scale-[0.97] transition-all self-start">
                اشترك الآن
              </button>
            </div>
            <div className="flex items-start gap-3 flex-1">
              <div className="flex flex-col gap-2 text-right flex-1">
                <p className="text-[18px] sm:text-[20px] font-[700] text-[#023196] tracking-[-0.3px]">
                  أداء رهيب! 🔥 باقي 0.5 بس وتوصل لهدفك!
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#6B7280] leading-[1.6]">
                  أنت قريب بـ 0.5 درجة فقط من الدرجة 8! جرب باقة التدريب السريع عشان ترفع درجتك
                </p>
              </div>
              <span className="text-[36px] sm:text-[40px] shrink-0 leading-none">🔥</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex flex-col gap-2">
            <div className="w-full h-[6px] bg-[#E0E7FF] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(to left, #22C55E, #2C277F)' }}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progressWidth, 100)}%` }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              />
            </div>
            <div className="flex justify-between text-[12px] text-[#9CA3AF]">
              <span>الهدف: {testInfo.targetScore.toFixed(1)}</span>
              <span>الحالي: {testInfo.totalScore.toFixed(1)}</span>
            </div>
          </div>
        </motion.div>

        {/* Score Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          {/* Total Score */}
          <div className="bg-white rounded-[12px] border border-[#EEEEEE] p-6 flex flex-col items-center justify-center gap-3">
            <p className="text-[14px] font-[600] text-[#012269] text-center">الدرجة الكلية</p>
            <ScoreRing value={testInfo.totalScore} max={testInfo.maxScore} label="الدرجة" />
          </div>

          {/* Correct Answers */}
          <div className="bg-white rounded-[12px] border border-[#EEEEEE] p-6 flex flex-col items-center justify-center gap-3">
            <p className="text-[14px] font-[600] text-[#012269] text-center">الإجابات الصحيحة</p>
            <ScoreRing value={testInfo.correctAnswers} max={testInfo.totalQuestions} label="الإجابات" />
          </div>

          {/* Progress Status */}
          <div className="bg-white rounded-[12px] border border-[#EEEEEE] p-6 flex flex-col items-center justify-center gap-3">
            <div className="flex flex-col items-center gap-2">
              <div className="size-[56px] rounded-full bg-[#F0FDF4] flex items-center justify-center">
                <Award className="size-[32px] text-[#22C55E]" strokeWidth={1.5} />
              </div>
              <p className="text-[16px] font-[600] text-[#4CAF50] text-center">تقدم ممتاز</p>
            </div>
            <p className="text-[13px] text-[#6B7280] text-center leading-[1.6]">
              لقد اقتربت كثيرًا من النتيجة المستهدفة! استمر في العمل الرائع!
            </p>
          </div>
        </motion.div>

        {/* Section Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-[22px] font-[700] text-[#111827] text-right">أداء الأقسام</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {sections.map((section) => {
              const progressPercent = (section.correct / section.total) * 100;
              return (
                <div
                  key={section.id}
                  onClick={() => handleSectionChange(section.id)}
                  className={`bg-white rounded-[12px] border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-4 sm:p-5 flex flex-col gap-4 cursor-pointer transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] ${
                    activeSection === section.id ? 'border-[#023196] ring-1 ring-[#023196]/20' : 'border-[#E5E7EB]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    {/* Accuracy badge */}
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${getAccuracyBg(section.accuracy)}`}>
                      <span className={`text-[13px] font-[600] ${getAccuracyTextColor(section.accuracy)}`}>{section.accuracy}%</span>
                      <span className={`text-[12px] ${getAccuracyTextColor(section.accuracy)} opacity-70`}>دقة</span>
                    </div>
                    {/* Section title + ring */}
                    <div className="flex-1 flex flex-col gap-3 items-end">
                      <p className="text-[18px] font-[600] text-[#111827] text-right">{section.name}</p>
                      <div className="flex items-center gap-3 justify-end w-full">
                        <div className="flex flex-col items-end gap-0.5 text-right">
                          <span className="text-[12px] text-[#9CA3AF]">الوقت المستغرق</span>
                          <span className="text-[14px] font-[600] text-[#111827]">{section.time}</span>
                        </div>
                        <SectionProgressRing correct={section.correct} total={section.total} />
                      </div>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-[6px] bg-[#F3F4F6] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: getAccuracyColor(section.accuracy) }}
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Question Review */}
        <motion.div
          ref={questionsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-4 scroll-mt-[200px]"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-[22px] font-[700] text-[#111827] text-right">مراجعة الأسئلة</h2>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white rounded-[12px] border border-[#EEEEEE] p-3 sm:p-4">
            {/* Toggle */}
            <label className="flex items-center gap-3 cursor-pointer select-none order-2 sm:order-1">
              <button
                onClick={() => setShowWrongOnly(!showWrongOnly)}
                role="switch"
                aria-checked={showWrongOnly}
                aria-label="عرض الإجابات الخاطئة فقط"
                className={`relative w-[44px] h-[24px] rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#023196] focus-visible:ring-offset-2 ${
                  showWrongOnly ? 'bg-[#023196]' : 'bg-[#D1D5DB]'
                }`}
              >
                <div
                  className="absolute top-[3px] size-[18px] bg-white rounded-full shadow-sm transition-all duration-300"
                  style={{
                    right: showWrongOnly ? '3px' : '23px',
                  }}
                />
              </button>
              <div className="flex items-center gap-2">
                <span className="text-[14px] text-[#4B5563]">الإجابات الخاطئة فقط</span>
                {showWrongOnly && (
                  <span className="text-[12px] bg-[#FEF2F2] text-[#DC2626] px-2 py-0.5 rounded-full font-[500]">
                    {sectionWrongCount}
                  </span>
                )}
              </div>
            </label>

            {/* Section Tabs */}
            <div className="flex items-center gap-2 order-1 sm:order-2">
              {sections.map((section) => {
                const sectionWrong = questions.filter(q => q.section === section.id && !q.isCorrect).length;
                const sectionTotal = questions.filter(q => q.section === section.id).length;
                return (
                  <button
                    key={section.id}
                    onClick={() => handleSectionChange(section.id)}
                    className={`relative px-4 py-2 rounded-[8px] text-[14px] transition-all duration-200 flex items-center gap-2 ${
                      activeSection === section.id
                        ? 'bg-[#023196] text-white shadow-[0_2px_8px_rgba(2,49,150,0.3)]'
                        : 'bg-[#F9FAFB] text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#374151]'
                    }`}
                  >
                    <span>{section.name}</span>
                    <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-[500] ${
                      activeSection === section.id
                        ? 'bg-white/20 text-white'
                        : 'bg-[#E5E7EB] text-[#6B7280]'
                    }`}>
                      {sectionTotal - sectionWrong}/{sectionTotal}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section summary bar */}
          {activeSectionData && (
            <div className="flex items-center justify-between bg-[#F9FAFB] rounded-[8px] px-4 py-2.5 text-[13px]">
              <div className="flex items-center gap-4">
                <span className="text-[#6B7280]">
                  عرض {filteredQuestions.length} من {sectionTotalCount} سؤال
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="size-[8px] rounded-full bg-[#22C55E] inline-block" />
                  <span className="text-[#6B7280]">صحيح: {activeSectionData.correct}</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="size-[8px] rounded-full bg-[#EF4444] inline-block" />
                  <span className="text-[#6B7280]">خطأ: {sectionWrongCount}</span>
                </span>
              </div>
            </div>
          )}

          {/* Questions Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeSection}-${showWrongOnly}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {filteredQuestions.map((q, i) => (
                <QuestionCard key={q.id} question={q} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredQuestions.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[12px] border border-[#E5E5E5] p-10 sm:p-12 text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="size-[64px] rounded-full bg-[#F0FDF4] flex items-center justify-center">
                  <Check className="size-[32px] text-[#22C55E]" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-[600] text-[#111827]">
                    لا توجد إجابات خاطئة في هذا المقطع!
                  </p>
                  <p className="text-[14px] text-[#9CA3AF]">
                    أحسنت! جميع إجاباتك في {activeSectionData?.name} كانت صحيحة.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
