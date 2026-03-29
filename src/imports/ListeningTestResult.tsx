import svgPaths from "./svg-kgpaudx8ug";
import imgLogo from "figma:asset/c5a8a94c89c2145891f504597cf7f6502e9912f5.png";
import { img1, img2 } from "./svg-3c2iz";

function Header() {
  return (
    <div className="bg-white h-[310px] pointer-events-auto sticky top-0 w-[1440px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute bg-[#e5e5e5] h-[16px] left-[124px] top-[calc(50%-118.01px)] w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#012269] h-[36px] left-0 overflow-clip rounded-[7px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[57px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[#fafafa] text-[14px] text-center top-1/2 whitespace-nowrap">
        <p className="leading-[20px]" dir="auto">
          نسخ
        </p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f2f2f2] h-[36px] relative rounded-[7px] shrink-0 w-[258px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic right-[19px] text-[#6b7280] text-[14px] text-right top-[18px] whitespace-nowrap">
        <p className="leading-[20px]">app.goielts.ai/score/1063</p>
      </div>
      <Button />
    </div>
  );
}

function Frame12() {
  return (
    <div className="col-1 content-stretch flex gap-[16px] items-center ml-0 mt-0 relative row-1">
      <Background />
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-right whitespace-nowrap">
        <p className="leading-[28px]" dir="auto">
          شارك درجتك
        </p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Group4 />
      <div className="h-[42px] mix-blend-darken relative shrink-0 w-[118px]" data-name="LOGO">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[268.21%] left-0 max-w-none top-[-35.49%] w-full" src={imgLogo} />
        </div>
      </div>
    </div>
  );
}

function ArrowLeftOutline() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-left-outline">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left-outline">
          <path d={svgPaths.p24fe8000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[19.6px]" dir="auto">
          رجوع
        </p>
      </div>
      <div className="h-[4px] shrink-0 w-[29px]" />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#012269] content-stretch flex h-[40px] items-center justify-center pr-[8px] py-[8px] relative rounded-[6px] shrink-0 w-[80px]" data-name="Link">
      <ArrowLeftOutline />
      <Frame74 />
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-white h-[40px] opacity-70 relative rounded-[6px] shrink-0 w-[120px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] justify-center leading-[0] left-[calc(50%+0.84px)] not-italic text-[#374151] text-[16px] text-center top-1/2 whitespace-nowrap">
        <p className="leading-[24px]" dir="auto">
          إعادة الاختبار
        </p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-white h-[40px] opacity-70 relative rounded-[6px] shrink-0 w-[120px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] justify-center leading-[0] left-[calc(50%+0.34px)] not-italic text-[#374151] text-[16px] text-center top-1/2 whitespace-nowrap">
        <p className="leading-[24px]" dir="auto">
          الاختبارات
        </p>
      </div>
    </div>
  );
}

function CaretDownSolid() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="caret-down-solid">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="caret-down-solid">
          <path clipRule="evenodd" d={svgPaths.p220e2600} fill="var(--fill-0, #374151)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[47px]">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] text-center w-full">
        <p className="leading-[19.6px]" dir="auto">
          الاستماع
        </p>
      </div>
      <div className="h-[3px] shrink-0 w-full" />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center pr-[8px] py-[8px] relative rounded-[6px] shrink-0 w-[112px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <CaretDownSolid />
      <Frame75 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <Link />
      <Frame53 />
    </div>
  );
}

function Group5() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2147223480">
          <path clipRule="evenodd" d={svgPaths.p1a778e00} fill="var(--fill-0, #22C55E)" fillRule="evenodd" id="è·¯å¾ 2" />
          <path clipRule="evenodd" d={svgPaths.p35d76400} fill="var(--fill-0, white)" fillRule="evenodd" id="è·¯å¾ 3" />
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[429.797px]">
      <Group5 />
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#012269] text-[32px] text-right whitespace-nowrap">
        <p className="leading-[44.8px]" dir="auto">
          مبروك! خلّصت الاختبار بنجاح
        </p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-end justify-center relative shrink-0 w-full">
      <Frame13 />
      <Frame15 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[16px] text-black text-right whitespace-nowrap" dir="auto">
        60 دقيقة
      </p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-full items-end justify-center relative shrink-0 w-[101px]">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-right w-[min-content]">
        <p className="leading-[19.6px]" dir="auto">
          الوقت المستغرق
        </p>
      </div>
      <Frame52 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" dir="auto">
        12/3/2025 - 4:45م
      </p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-full items-end justify-center relative shrink-0 w-[159.167px]">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] whitespace-nowrap">
        <p className="leading-[19.6px]" dir="auto">
          تاريخ الاختبار
        </p>
      </div>
      <Frame57 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] h-[16px] leading-[22.4px] not-italic relative shrink-0 text-[16px] text-black text-right w-[10px]" dir="auto">
        3
      </p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-full items-end justify-center relative shrink-0 w-[79px]">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-right w-[min-content]">
        <p className="leading-[19.6px]" dir="auto">
          رقم المحاولة
        </p>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[399.167px]">
      <Frame66 />
      <Frame65 />
      <Frame64 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[16px] text-black text-right whitespace-nowrap" dir="auto">
        الاستماع
      </p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-full items-end justify-center relative shrink-0 w-[54px]">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-right w-full">
        <p className="leading-[19.6px]" dir="auto">
          المهارة
        </p>
      </div>
      <Frame54 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[16px] text-black text-right whitespace-nowrap" dir="auto">
        أكاديمي
      </p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-full items-end justify-center relative shrink-0 w-[68px]">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-right w-[min-content]">
        <p className="leading-[19.6px]" dir="auto">
          نوع الاختبار
        </p>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[16px] text-black text-right whitespace-nowrap" dir="auto">
        التدريب
      </p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-full items-end justify-center relative shrink-0 w-[72px]">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-right w-[min-content]">
        <p className="leading-[19.6px]" dir="auto">
          نمط الاختبار
        </p>
      </div>
      <Frame58 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[16px] text-black text-right whitespace-nowrap" dir="auto">
        Cambridge IELTS Practice Test 17
      </p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-full items-end justify-center relative shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] whitespace-nowrap">
        <p className="leading-[19.6px]" dir="auto">
          اسم الاختبار
        </p>
      </div>
      <Frame56 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[16px] text-black text-right whitespace-pre" dir="auto">{`أحمد  علي`}</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-full items-end justify-center relative shrink-0 w-[83px]">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-right w-full">
        <p className="leading-[19.6px]" dir="auto">
          اسم المتدرب
        </p>
      </div>
      <Frame55 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[67px] items-center justify-between min-h-px min-w-px relative">
      <Frame76 />
      <Frame63 />
      <Frame60 />
      <Frame61 />
      <Frame62 />
      <Frame59 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative w-full">
          <Frame77 />
          <div className="-translate-x-1/2 absolute bg-[#f3f4f6] h-[2px] left-[calc(50%-0.5px)] top-[45px] w-[1201px]" />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-end justify-center relative shrink-0 w-full">
      <Frame14 />
      <Frame67 />
    </div>
  );
}

function V() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[310px] items-end justify-center left-0 px-[95px] py-[32px] top-0 w-[1440px]" data-name="V1">
      <div className="absolute bottom-0 h-[310px] left-0 pointer-events-none top-0">
        <Header />
      </div>
      <Frame16 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#c90f2e] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="→ Buttons">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[19.6px]" dir="auto">
          اشترك الآن
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[0] min-h-px min-w-px not-italic relative text-right">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] justify-center relative shrink-0 text-[#023196] text-[20px] tracking-[-0.5px] w-full">
        <p className="leading-[normal]" dir="auto">
          أداء رهيب! 🔥 باقي 0.5 بس وتوصل لهدفك!
        </p>
      </div>
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center relative shrink-0 text-[#46484c] text-[16px] w-full">
        <p className="leading-[1.5]" dir="auto">
          أنت قريب بـ 0.5 درجة فقط من الدرجة 8! جرب باقة التدريب السريع عشان ترفع درجتك
        </p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_4002_1153)" id="Layer_1">
          <path d={svgPaths.p1192a780} fill="var(--fill-0, #FE9E00)" id="Vector" />
          <path d={svgPaths.pa6e0f00} fill="var(--fill-0, #FED300)" id="Vector_2" />
          <path d={svgPaths.pa126a80} fill="var(--fill-0, #FE9F01)" id="Vector_3" />
          <path d={svgPaths.p22bb9200} fill="var(--fill-0, #FE7817)" id="Vector_4" />
          <path d={svgPaths.p31e59100} fill="var(--fill-0, #465A61)" id="Vector_5" />
          <path d={svgPaths.p14062a00} fill="var(--fill-0, #697C86)" id="Vector_6" />
          <path d={svgPaths.p192be480} fill="var(--fill-0, #EB5569)" id="Vector_7" />
          <path d={svgPaths.p34960f80} fill="var(--fill-0, #CB2E43)" id="Vector_8" />
          <path d={svgPaths.p38335b00} fill="var(--fill-0, #FE7816)" id="Vector_9" />
          <path d={svgPaths.p2af0b570} fill="var(--fill-0, #FE9F00)" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1153">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-start justify-end min-h-px min-w-px relative">
      <Frame18 />
      <div className="relative shrink-0 size-[40px]">
        <Group6 />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
        <Buttons />
      </div>
      <Frame133 />
    </div>
  );
}

function PrograssBar() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative w-full" data-name="Prograss bar">
      <div className="bg-[#e0e7ff] col-1 h-[6px] ml-0 mt-0 rounded-[30px] row-1 w-[796px]" />
      <div className="bg-gradient-to-r col-1 from-[#2c277f] h-[6px] ml-0 mt-0 rounded-bl-[20px] rounded-br-[20px] rounded-tl-[30px] rounded-tr-[20px] row-1 to-[#22c55e] w-[727.431px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] items-center justify-between not-italic relative shrink-0 text-[12px] text-black text-right w-full">
      <div className="flex flex-col h-[22px] justify-center opacity-60 relative shrink-0 w-[111px]">
        <p className="leading-[22.4px] whitespace-pre-wrap" dir="auto">{`الدرجة المستهدفة  8.0`}</p>
      </div>
      <div className="flex flex-col h-[22px] justify-center opacity-60 relative shrink-0 w-[89px]">
        <p className="leading-[22.4px] whitespace-pre-wrap" dir="auto">{`الدرجة الحالية  7.5`}</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <PrograssBar />
        </div>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame19 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function IconSetFilled() {
  return (
    <div className="absolute inset-[0_-0.03%]" data-name="Icon-Set-Filled">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.0338 60">
        <g id="Icon-Set-Filled">
          <path clipRule="evenodd" d={svgPaths.p123ef3f0} fill="var(--fill-0, black)" fillRule="evenodd" id="award-2" />
        </g>
      </svg>
    </div>
  );
}

function Page() {
  return (
    <div className="absolute contents inset-[0_-0.03%]" data-name="Page-1">
      <IconSetFilled />
    </div>
  );
}

function Award2SvgrepoCom() {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]" data-name="award-2-svgrepo-com 1">
      <Page />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[71px]">
      <Award2SvgrepoCom />
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4caf50] text-[16px] text-center w-[min-content]">
        <p className="leading-[28px]" dir="auto">{`تقدم ممتاز `}</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-[195px]">
      <Frame24 />
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] h-[41px] leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[12px] text-center w-full" dir="auto">
        لقد اقتربت كثيرًا من النتيجة المستهدفة! استمر في العمل الرائع!
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[24px] relative size-full">
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="h-[140.007px] relative shrink-0 w-[140px]">
      <div className="absolute inset-[-4.64%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153 153.007">
          <g id="Group 2147223679">
            <ellipse cx="76.5" cy="76.4979" id="Ellipse 4" rx="70" ry="69.9979" stroke="var(--stroke-0, #E2E8F0)" strokeWidth="13" />
            <path d={svgPaths.p28aec920} id="Ellipse 5" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeWidth="13" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[12px] whitespace-nowrap">
        <p className="leading-[16.8px]">30 / 40</p>
      </div>
      <div className="flex h-[17.771px] items-center justify-center relative shrink-0 w-[37.348px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.2deg]">
          <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[#4a4a4a] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[16.8px]" dir="auto">
              الإجابات
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Group8 />
      <Frame69 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-end justify-center p-[24px] relative w-full">
          <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#012269] text-[14px] text-center whitespace-nowrap" dir="auto">
            الإجابات الصحيحة
          </p>
          <Frame70 />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] justify-center leading-[0] left-[calc(50%-1.33px)] not-italic text-[#4caf50] text-[20px] text-center top-[calc(50%-3.89px)] whitespace-nowrap">
            <p className="leading-[28px]" dir="auto">
              30
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="h-[140.007px] relative shrink-0 w-[140px]">
      <div className="absolute inset-[-4.64%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153 153.007">
          <g id="Group 2147223679">
            <ellipse cx="76.5" cy="76.4979" id="Ellipse 4" rx="70" ry="69.9979" stroke="var(--stroke-0, #E2E8F0)" strokeWidth="13" />
            <path d={svgPaths.p28aec920} id="Ellipse 5" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeWidth="13" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[12px] whitespace-nowrap">
        <p className="leading-[16.8px]">7.5 / 9.0</p>
      </div>
      <div className="flex h-[17.603px] items-center justify-center relative shrink-0 w-[29.349px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.2deg]">
          <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[#4a4a4a] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[16.8px]" dir="auto">
              الدرجة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Group9 />
      <Frame72 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-end justify-center p-[24px] relative w-full">
          <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#012269] text-[14px] text-center whitespace-nowrap" dir="auto">
            الدرجة الكلية
          </p>
          <Frame71 />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] justify-center leading-[0] left-[calc(50%-0.83px)] not-italic text-[#4caf50] text-[20px] text-center top-[calc(50%-3.8px)] whitespace-nowrap">
            <p className="leading-[28px]" dir="auto">
              7.5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex gap-[24px] h-[249px] items-center justify-end relative shrink-0 w-full">
      <Frame23 />
      <Frame73 />
      <Frame68 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[7px] items-center leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
      <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] relative shrink-0" dir="auto">
        62%
      </p>
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] opacity-70 relative shrink-0 text-right" dir="auto">
        الدقة
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-end justify-center not-italic relative shrink-0 text-right w-[90px]">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[20px]" dir="auto">
          الوقت المستغرق
        </p>
      </div>
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] justify-center relative shrink-0 text-[#111827] text-[16px] w-full">
        <p className="leading-[24px]" dir="auto">
          12 دقيقة
        </p>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="col-1 h-[71.5px] ml-0 mt-0 relative row-1 w-[71px]" data-name="Mask group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71 71.5">
        <g id="Mask group">
          <mask height="72" id="mask0_4002_1165" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="71" x="0" y="0">
            <path d={svgPaths.p355b3540} fill="var(--fill-0, #D9D9D9)" id="Vector 636" />
          </mask>
          <g mask="url(#mask0_4002_1165)">
            <path clipRule="evenodd" d={svgPaths.p87e9700} fill="var(--fill-0, #4CAF50)" fillRule="evenodd" id="FRAME (Stroke)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="bg-[rgba(0,0,0,0)] border-3 border-[#c3c3c3] border-solid col-1 ml-[2px] mt-[2.5px] rounded-[9999px] row-1 size-[64px]" data-name="FRAME" />
      <MaskGroup />
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 h-[24px] ml-[16px] mt-[24px] overflow-clip relative row-1 w-[39.391px]" data-name="FRAME">
      <div className="absolute bg-[rgba(0,0,0,0)] inset-0" data-name="FRAME" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic right-[20.69px] text-[#111827] text-[14px] text-center top-1/2 translate-x-1/2 whitespace-nowrap">
        <p className="leading-[24px]">8 /13</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group2 />
      <Frame />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[12px] h-[71px] items-center justify-end relative shrink-0 w-full">
      <Frame26 />
      <Group3 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-end justify-center leading-[0] min-h-px min-w-px relative">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] justify-center not-italic relative shrink-0 text-[20px] text-black text-right w-full">
        <p className="leading-[normal]" dir="auto">
          المقطع 3
        </p>
      </div>
      <Frame29 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-end justify-end relative shrink-0 w-full">
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex flex-col h-[8px] items-end justify-center relative rounded-[9999px] shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#023196] h-[8px] rounded-[9999px] w-[280px]" data-name="FRAME" />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full">
      <Frame28 />
      <Frame30 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0),0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center pb-[24px] pt-[16px] px-[24px] relative w-full">
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[7px] items-center leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
      <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] relative shrink-0" dir="auto">
        62%
      </p>
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] opacity-70 relative shrink-0 text-right" dir="auto">
        الدقة
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-end justify-center not-italic relative shrink-0 text-right w-[90px]">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[20px]" dir="auto">
          الوقت المستغرق
        </p>
      </div>
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] justify-center relative shrink-0 text-[#111827] text-[16px] w-full">
        <p className="leading-[24px]" dir="auto">
          15 دقيقة
        </p>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="col-1 h-[71.5px] ml-[17.5px] mt-0 relative row-1 w-[51.5px]" data-name="Mask group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.5 71.5">
        <g id="Mask group">
          <mask height="72" id="mask0_4002_1193" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="52" x="0" y="0">
            <path d={svgPaths.p1338a400} fill="var(--fill-0, #D9D9D9)" id="Vector 636" />
          </mask>
          <g mask="url(#mask0_4002_1193)">
            <path clipRule="evenodd" d={svgPaths.p23ff1880} fill="var(--fill-0, #DC3545)" fillRule="evenodd" id="FRAME (Stroke)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[rgba(0,0,0,0)] border-3 border-[#c3c3c3] border-solid col-1 ml-0 mt-[2.5px] rounded-[9999px] row-1 size-[64px]" data-name="FRAME" />
      <MaskGroup1 />
      <div className="col-1 flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center ml-[15px] mt-[22.5px] not-italic relative row-1 text-[#111827] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px]">3 /13</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[12px] h-[71px] items-center justify-end relative shrink-0 w-full">
      <Frame27 />
      <Group1 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-end justify-center leading-[0] min-h-px min-w-px relative">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] justify-center not-italic relative shrink-0 text-[20px] text-black text-right w-full">
        <p className="leading-[normal]" dir="auto">
          المقطع 2
        </p>
      </div>
      <Frame40 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] items-end justify-end relative shrink-0 w-full">
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex flex-col h-[8px] items-end justify-center relative rounded-[9999px] shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#023196] h-[8px] rounded-[9999px] w-[108px]" data-name="FRAME" />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full">
      <Frame33 />
      <Frame41 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0),0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center pb-[24px] pt-[16px] px-[24px] relative w-full">
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[7px] items-center leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
      <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] relative shrink-0" dir="auto">
        62%
      </p>
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] opacity-70 relative shrink-0 text-right" dir="auto">
        الدقة
      </p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-end justify-center not-italic relative shrink-0 text-right w-[90px]">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[20px]" dir="auto">
          الوقت المستغرق
        </p>
      </div>
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] justify-center relative shrink-0 text-[#111827] text-[16px] w-full">
        <p className="leading-[24px]" dir="auto">
          18 دقيقة
        </p>
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="col-1 h-[71.5px] ml-0 mt-0 relative row-1 w-[71px]" data-name="Mask group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71 71.5">
        <g id="Mask group">
          <mask height="72" id="mask0_4002_1208" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="71" x="0" y="0">
            <path d={svgPaths.p1d28d00} fill="var(--fill-0, #D9D9D9)" id="Vector 636" />
          </mask>
          <g mask="url(#mask0_4002_1208)">
            <path clipRule="evenodd" d={svgPaths.p87e9700} fill="var(--fill-0, #4CAF50)" fillRule="evenodd" id="FRAME (Stroke)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="bg-[rgba(0,0,0,0)] border-3 border-[#c3c3c3] border-solid col-1 ml-[2px] mt-[2.5px] rounded-[9999px] row-1 size-[64px]" data-name="FRAME" />
      <MaskGroup2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="col-1 h-[24px] ml-[15px] mt-[22.5px] overflow-clip relative row-1 w-[39.391px]" data-name="FRAME">
      <div className="absolute bg-[rgba(0,0,0,0)] inset-0" data-name="FRAME" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic right-[19.89px] text-[#111827] text-[14px] text-center top-1/2 translate-x-1/2 whitespace-nowrap">
        <p className="leading-[24px]">10/14</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group />
      <Frame1 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[12px] h-[71px] items-center justify-end relative shrink-0 w-full">
      <Frame48 />
      <Group7 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-end justify-center leading-[0] min-h-px min-w-px relative">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] justify-center not-italic relative shrink-0 text-[20px] text-black text-right w-full">
        <p className="leading-[normal]" dir="auto">
          المقطع 1
        </p>
      </div>
      <Frame47 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[8px] items-end justify-end relative shrink-0 w-full">
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex flex-col h-[8px] items-end justify-center relative rounded-[9999px] shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#023196] h-[8px] rounded-[9999px] w-[280px]" data-name="FRAME" />
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full">
      <Frame44 />
      <Frame49 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0),0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center pb-[24px] pt-[16px] px-[24px] relative w-full">
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-full">
      <Frame36 />
      <Frame37 />
      <Frame42 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full">
      <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[33.6px] not-italic relative shrink-0 text-[24px] text-black text-right w-full" dir="auto">
        أداء الأقسام
      </p>
      <Frame124 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-y-1/2 absolute left-[4px] overflow-clip size-[16px] top-1/2" data-name="FRAME">
      <div className="absolute bg-white inset-0 rounded-[9999px]" data-name="FRAME" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="col-1 h-[24px] ml-0 mt-0 overflow-clip relative row-1 w-[48px]" data-name="FRAME">
      <div className="absolute bg-[#e5e7eb] inset-0 rounded-[9999px]" data-name="FRAME" />
      <Frame5 />
    </div>
  );
}

function Toggle() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Toggle">
      <div className="col-1 flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center ml-[56px] mt-[2px] not-italic relative row-1 text-[#4b5563] text-[14px] whitespace-nowrap">
        <p className="leading-[19.6px]" dir="auto">
          عرض الإجابات الخاطئة فقط
        </p>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[22.4px]" dir="auto">
          المقطع 3
        </p>
      </div>
    </div>
  );
}

function Frame127() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[22.4px]" dir="auto">
          المقطع 2
        </p>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="bg-[#023196] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[22.4px]" dir="auto">
          المقطع 1
        </p>
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame128 />
      <Frame127 />
      <Frame126 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Toggle />
      <Frame129 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[24px] text-right w-full">
        <p className="leading-[33.6px]" dir="auto">
          مراجعة الأسئلة
        </p>
      </div>
      <Frame130 />
    </div>
  );
}

function Component() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[24px_24px] size-[24px] top-1/2" data-name="容器 1" style={{ maskImage: `url('${img1}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4002_1197)" id="å®¹å¨ 1">
          <g id="å®¹å¨ 1_2" />
          <mask height="24" id="mask0_4002_1197" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="24" id="å®¹å¨ 1_3" width="24" />
          </mask>
          <g mask="url(#mask0_4002_1197)">
            <path clipRule="evenodd" d={svgPaths.p36c8bf80} fill="var(--fill-0, #EF4444)" fillRule="evenodd" id="è·¯å¾ 1" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4002_1197">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="FRAME">
      <div className="absolute bg-[rgba(0,0,0,0)] inset-0" data-name="FRAME" />
      <Component />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">Question 1</p>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280]">
        <p className="leading-[19.6px]">Your answer:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#dc2626]">
        <p className="leading-[19.6px]">To inform about new policy</p>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280]">
        <p className="leading-[19.6px]">Correct answer:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#16a34a]">
        <p className="leading-[20px]">To introduce new regulations</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px] size-[16px] top-1/2" data-name="容器 1" style={{ maskImage: `url('${img2}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4002_1180)" id="å®¹å¨ 1">
          <g id="å®¹å¨ 1_2" />
          <mask height="16" id="mask0_4002_1180" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="16" id="å®¹å¨ 1_3" width="16" />
          </mask>
          <g mask="url(#mask0_4002_1180)">
            <path clipRule="evenodd" d={svgPaths.p23247980} fill="var(--fill-0, #DC2626)" fillRule="evenodd" id="è·¯å¾ 1" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4002_1180">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FRAME">
      <div className="absolute bg-[rgba(0,0,0,0)] inset-0" data-name="FRAME" />
      <Component1 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame7 />
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dc2626] text-[14px] whitespace-nowrap">
        <p className="leading-[19.6px]">{`Misheard key phrase 'regulations' as 'policy'`}</p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame79 />
      <Frame81 />
      <Frame82 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border-2 border-[#c90f2e] border-solid inset-[-2px] pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative w-full">
        <Frame78 />
        <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">
          <p className="leading-[22.4px]">{`What is the speaker's main purpose?`}</p>
        </div>
        <Frame84 />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="容器 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4002_1173)" id="å®¹å¨ 1">
          <g id="å®¹å¨ 1_2" />
          <mask height="24" id="mask0_4002_1173" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="24" id="å®¹å¨ 1_3" width="24" />
          </mask>
          <g mask="url(#mask0_4002_1173)">
            <path clipRule="evenodd" d={svgPaths.p76ec200} fill="var(--fill-0, #22C55E)" fillRule="evenodd" id="è·¯å¾ 1" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4002_1173">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">Question 2</p>
      </div>
      <Component2 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280]">
        <p className="leading-[19.6px]">Your answer:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#16a34a]">
        <p className="leading-[19.6px]">Next month</p>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-white flex-[1_0_0] h-[203px] min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative size-full">
        <Frame86 />
        <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">
          <p className="leading-[22.4px]">When will the changes take effect?</p>
        </div>
        <Frame88 />
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
      <Frame83 />
      <Frame80 />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="容器 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4002_1173)" id="å®¹å¨ 1">
          <g id="å®¹å¨ 1_2" />
          <mask height="24" id="mask0_4002_1173" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="24" id="å®¹å¨ 1_3" width="24" />
          </mask>
          <g mask="url(#mask0_4002_1173)">
            <path clipRule="evenodd" d={svgPaths.p76ec200} fill="var(--fill-0, #22C55E)" fillRule="evenodd" id="è·¯å¾ 1" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4002_1173">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">Question 3</p>
      </div>
      <Component3 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280]">
        <p className="leading-[19.6px]">Your answer:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#16a34a]">
        <p className="leading-[19.6px]">Five</p>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-white flex-[1_0_0] h-[203px] min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative size-full">
        <Frame91 />
        <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">
          <p className="leading-[22.4px]">How many departments are affected?</p>
        </div>
        <Frame92 />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="容器 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4002_1173)" id="å®¹å¨ 1">
          <g id="å®¹å¨ 1_2" />
          <mask height="24" id="mask0_4002_1173" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="24" id="å®¹å¨ 1_3" width="24" />
          </mask>
          <g mask="url(#mask0_4002_1173)">
            <path clipRule="evenodd" d={svgPaths.p76ec200} fill="var(--fill-0, #22C55E)" fillRule="evenodd" id="è·¯å¾ 1" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4002_1173">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">Question 4</p>
      </div>
      <Component4 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280]">
        <p className="leading-[19.6px]">Your answer:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#16a34a]">
        <p className="leading-[19.6px]">Improved efficiency</p>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-white flex-[1_0_0] h-[203px] min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative size-full">
        <Frame94 />
        <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">
          <p className="leading-[22.4px]">What is the expected outcome?</p>
        </div>
        <Frame95 />
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
      <Frame90 />
      <Frame93 />
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="容器 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4002_1173)" id="å®¹å¨ 1">
          <g id="å®¹å¨ 1_2" />
          <mask height="24" id="mask0_4002_1173" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="24" id="å®¹å¨ 1_3" width="24" />
          </mask>
          <g mask="url(#mask0_4002_1173)">
            <path clipRule="evenodd" d={svgPaths.p76ec200} fill="var(--fill-0, #22C55E)" fillRule="evenodd" id="è·¯å¾ 1" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4002_1173">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">Question 5</p>
      </div>
      <Component5 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280]">
        <p className="leading-[19.6px]">Your answer:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#16a34a]">
        <p className="leading-[19.6px]">HR Department</p>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-white flex-[1_0_0] h-[203px] min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative size-full">
        <Frame98 />
        <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">
          <p className="leading-[24px]">Who should be contacted for questions?</p>
        </div>
        <Frame99 />
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[24px_24px] size-[24px] top-1/2" data-name="容器 1" style={{ maskImage: `url('${img1}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4002_1197)" id="å®¹å¨ 1">
          <g id="å®¹å¨ 1_2" />
          <mask height="24" id="mask0_4002_1197" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="24" id="å®¹å¨ 1_3" width="24" />
          </mask>
          <g mask="url(#mask0_4002_1197)">
            <path clipRule="evenodd" d={svgPaths.p36c8bf80} fill="var(--fill-0, #EF4444)" fillRule="evenodd" id="è·¯å¾ 1" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4002_1197">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="FRAME">
      <div className="absolute bg-[rgba(0,0,0,0)] inset-0" data-name="FRAME" />
      <Component6 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">Question 6</p>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280]">
        <p className="leading-[19.6px]">Your answer:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#dc2626]">
        <p className="leading-[19.6px]">$50.000</p>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280]">
        <p className="leading-[19.6px]">Correct answer:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#16a34a]">
        <p className="leading-[20px]">$15.000</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px] size-[16px] top-1/2" data-name="容器 1" style={{ maskImage: `url('${img2}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4002_1180)" id="å®¹å¨ 1">
          <g id="å®¹å¨ 1_2" />
          <mask height="16" id="mask0_4002_1180" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="16" id="å®¹å¨ 1_3" width="16" />
          </mask>
          <g mask="url(#mask0_4002_1180)">
            <path clipRule="evenodd" d={svgPaths.p23247980} fill="var(--fill-0, #DC2626)" fillRule="evenodd" id="è·¯å¾ 1" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4002_1180">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FRAME">
      <div className="absolute bg-[rgba(0,0,0,0)] inset-0" data-name="FRAME" />
      <Component7 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame9 />
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dc2626] text-[14px] whitespace-nowrap">
        <p className="leading-[19.6px]">Confused with total project budget</p>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame103 />
      <Frame104 />
      <Frame105 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border-2 border-[#c90f2e] border-solid inset-[-2px] pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative w-full">
        <Frame101 />
        <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">
          <p className="leading-[24px]">What is the budget allocation?</p>
        </div>
        <Frame102 />
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
      <Frame97 />
      <Frame100 />
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="容器 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4002_1173)" id="å®¹å¨ 1">
          <g id="å®¹å¨ 1_2" />
          <mask height="24" id="mask0_4002_1173" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="24" id="å®¹å¨ 1_3" width="24" />
          </mask>
          <g mask="url(#mask0_4002_1173)">
            <path clipRule="evenodd" d={svgPaths.p76ec200} fill="var(--fill-0, #22C55E)" fillRule="evenodd" id="è·¯å¾ 1" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4002_1173">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">Question 7</p>
      </div>
      <Component8 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280]">
        <p className="leading-[19.6px]">Your answer:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#16a34a]">
        <p className="leading-[19.6px]">Operations</p>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="bg-white flex-[1_0_0] h-[203px] min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative size-full">
        <Frame108 />
        <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">
          <p className="leading-[22.4px]">Which team leads the project?</p>
        </div>
        <Frame109 />
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="容器 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4002_1173)" id="å®¹å¨ 1">
          <g id="å®¹å¨ 1_2" />
          <mask height="24" id="mask0_4002_1173" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="24" id="å®¹å¨ 1_3" width="24" />
          </mask>
          <g mask="url(#mask0_4002_1173)">
            <path clipRule="evenodd" d={svgPaths.p76ec200} fill="var(--fill-0, #22C55E)" fillRule="evenodd" id="è·¯å¾ 1" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4002_1173">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">Question 8</p>
      </div>
      <Component9 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280]">
        <p className="leading-[19.6px]">Your answer:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#16a34a]">
        <p className="leading-[19.6px]">3 months</p>
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="bg-white flex-[1_0_0] h-[203px] min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative size-full">
        <Frame111 />
        <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">
          <p className="leading-[22.4px]">What is the review period?</p>
        </div>
        <Frame112 />
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
      <Frame107 />
      <Frame110 />
    </div>
  );
}

function Component10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[24px_24px] size-[24px] top-1/2" data-name="容器 1" style={{ maskImage: `url('${img1}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4002_1197)" id="å®¹å¨ 1">
          <g id="å®¹å¨ 1_2" />
          <mask height="24" id="mask0_4002_1197" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="24" id="å®¹å¨ 1_3" width="24" />
          </mask>
          <g mask="url(#mask0_4002_1197)">
            <path clipRule="evenodd" d={svgPaths.p36c8bf80} fill="var(--fill-0, #EF4444)" fillRule="evenodd" id="è·¯å¾ 1" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4002_1197">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="FRAME">
      <div className="absolute bg-[rgba(0,0,0,0)] inset-0" data-name="FRAME" />
      <Component10 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">Question 9</p>
      </div>
      <Frame10 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280]">
        <p className="leading-[19.6px]">Your answer:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#dc2626]">
        <p className="leading-[19.6px]">Conference room B</p>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280]">
        <p className="leading-[19.6px]">Correct answer:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#16a34a]">
        <p className="leading-[19.6px]">Conference room A</p>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px] size-[16px] top-1/2" data-name="容器 1" style={{ maskImage: `url('${img2}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4002_1180)" id="å®¹å¨ 1">
          <g id="å®¹å¨ 1_2" />
          <mask height="16" id="mask0_4002_1180" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="16" id="å®¹å¨ 1_3" width="16" />
          </mask>
          <g mask="url(#mask0_4002_1180)">
            <path clipRule="evenodd" d={svgPaths.p23247980} fill="var(--fill-0, #DC2626)" fillRule="evenodd" id="è·¯å¾ 1" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4002_1180">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FRAME">
      <div className="absolute bg-[rgba(0,0,0,0)] inset-0" data-name="FRAME" />
      <Component11 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame11 />
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dc2626] text-[14px] whitespace-nowrap">
        <p className="leading-[19.6px]">Similar sounding rooms confused</p>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame117 />
      <Frame118 />
      <Frame119 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border-2 border-[#c90f2e] border-solid inset-[-2px] pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative w-full">
        <Frame115 />
        <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">
          <p className="leading-[22.4px]">Where will training be held?</p>
        </div>
        <Frame116 />
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="容器 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4002_1173)" id="å®¹å¨ 1">
          <g id="å®¹å¨ 1_2" />
          <mask height="24" id="mask0_4002_1173" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="24" id="å®¹å¨ 1_3" width="24" />
          </mask>
          <g mask="url(#mask0_4002_1173)">
            <path clipRule="evenodd" d={svgPaths.p76ec200} fill="var(--fill-0, #22C55E)" fillRule="evenodd" id="è·¯å¾ 1" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4002_1173">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">Question 10</p>
      </div>
      <Component12 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280]">
        <p className="leading-[19.6px]">Your answer:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#16a34a]">
        <p className="leading-[19.6px]">Weekly reports</p>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="bg-white flex-[1_0_0] h-[203px] min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative size-full">
        <Frame121 />
        <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">
          <p className="leading-[22.4px]">What is required from employees?</p>
        </div>
        <Frame122 />
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
      <Frame114 />
      <Frame120 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[1080px] items-start relative shrink-0 w-full">
      <Frame85 />
      <Frame89 />
      <Frame96 />
      <Frame106 />
      <Frame113 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[95px] top-[342px] w-[1250px]">
      <div className="bg-white content-stretch flex flex-col items-end justify-center p-[12px] relative rounded-[8px] shadow-[0px_2px_0px_0px_#c90f2e] shrink-0 w-[1250px]" data-name="Good Result Cards">
        <Frame22 />
      </div>
      <Frame123 />
      <Frame125 />
      <Frame131 />
      <Frame87 />
    </div>
  );
}

export default function ListeningTestResult() {
  return (
    <div className="bg-[#f9fafb] relative size-full" data-name="Listening test result">
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] justify-center leading-[0] left-[1408px] not-italic text-[24px] text-black text-right top-[-19.5px] whitespace-nowrap">
        <p className="leading-[22.4px]" dir="auto">
          Cambridge IELTS 17
        </p>
      </div>
      <V />
      <Frame132 />
    </div>
  );
}