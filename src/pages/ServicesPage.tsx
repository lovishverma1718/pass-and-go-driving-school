import React, { useEffect } from 'react';
import {
  CheckCircle2,
  ClipboardList,
  Sparkles,
  Phone,
  Eye,
  Activity,
  Award,
} from 'lucide-react';
import { Button } from '../components/Buttons';
import { SectionHeading } from '../components/SectionHeading';
import { INSTRUCTOR, SERVICES_DATA } from '../data/siteData';

interface ServicesPageProps {
  onOpenQuote?: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote }) => {
  useEffect(() => {
    document.title = 'Driving Lessons | Pass ’N’ Go Driving School';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore driving lessons at Pass ’N’ Go: Class 5, Class 7, Road Test Preparation, and Refresher Lessons in Surrey, Newton, Delta, South Surrey, and White Rock.'
      );
    }
  }, []);

  const class5 = SERVICES_DATA.find((s) => s.id === 'class-5')!;
  const class7 = SERVICES_DATA.find((s) => s.id === 'class-7')!;
  const roadTest = SERVICES_DATA.find((s) => s.id === 'road-test-prep')!;
  const refresher = SERVICES_DATA.find((s) => s.id === 'refresher')!;

  const processStages = [
    {
      icon: Eye,
      title: 'Observe',
      desc: 'Understand current habits and identify areas that need attention.',
      step: 'Stage 01',
    },
    {
      icon: Activity,
      title: 'Practice',
      desc: 'Work through practical driving situations with clear guidance.',
      step: 'Stage 02',
    },
    {
      icon: Award,
      title: 'Improve',
      desc: 'Build stronger habits and greater confidence through focused practice.',
      step: 'Stage 03',
    },
  ];

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. SERVICES HERO (Dark Navy, Featuring Image 6 - Steering Wheel) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#07111D] text-white pt-28 md:pt-36 pb-20 overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 75% 30%, rgba(247,198,0,0.08), transparent 45%)',
          }}
        />

        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-[2px] bg-[#F7C600] rounded-full" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F7C600]">
                  DRIVING LESSONS
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08]">
                Practical instruction for safer,{' '}
                <span className="text-[#F7C600]">more confident driving.</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-white/75 max-w-xl leading-relaxed">
                Choose the lesson that matches your current skills and next driving goal. Every lesson is conducted one-on-one by Certified Instructor {INSTRUCTOR.name}.
              </p>

              {/* Glass chip pill */}
              <div className="mt-8 liquid-glass rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide text-white border border-white/15 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F7C600]" />
                <span>CLASS 5 • CLASS 7 • ROAD TEST • REFRESHER</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button to="/contact" variant="primary" icon="arrow-up-right">
                  Request a Lesson
                </Button>
                {onOpenQuote && (
                  <Button
                    onClick={onOpenQuote}
                    variant="glass"
                    icon="none"
                    className="inline-flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-[#F7C600]" />
                    <span>Get Instant Quote</span>
                  </Button>
                )}
              </div>
            </div>

            {/* Right Photo (Image 6) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] overflow-hidden border border-white/15 shadow-2xl bg-[#101C2C] max-h-[460px]">
                <picture>
                  <source srcSet="/images/steering-wheel.webp" type="image/webp" />
                  <img
                    src="/images/6.jpg"
                    alt="Driver holding the steering wheel during a driving lesson"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </picture>

                <div className="absolute bottom-5 left-5 right-5 liquid-glass rounded-2xl p-4 text-white">
                  <p className="text-xs font-bold text-[#F7C600] uppercase tracking-wider">
                    Hands-On Experience
                  </p>
                  <p className="text-xs sm:text-sm text-white/90 mt-0.5">
                    Focusing on control, awareness, and calm road decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CLASS 5 & CLASS 7 LESSONS (Two Structured In-Depth Cards) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]" id="class-5">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12">
          <SectionHeading
            eyebrow="LICENSED DRIVER PATHWAYS"
            title="Class 5 & Class 7 Driver Training"
            description="Clear, progressive instruction whether you are working toward your 'N' or graduating to your full independent driver's license."
            align="left"
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Class 5 Lesson Card */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-premium hover:border-[#F7C600]/40 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101C2C] text-white text-xs font-bold mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#F7C600]" />
                  <span>Full Privilege License</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101C2C] tracking-tight">
                  {class5.title}
                </h2>

                <p className="mt-4 text-base text-[#667085] leading-relaxed">
                  {class5.description}
                </p>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#101C2C] mb-4">
                    Key Focus Areas:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {class5.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-[#101C2C]">
                        <CheckCircle2 className="w-4 h-4 text-[#F7C600] flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                <Button to="/contact?lesson=class-5" variant="primary" icon="arrow-up-right">
                  Ask About Class 5
                </Button>
                <span className="text-xs text-[#667085]">Surrey & Surrounding</span>
              </div>
            </div>

            {/* Class 7 Lesson Card */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-premium hover:border-[#F7C600]/40 flex flex-col justify-between" id="class-7">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101C2C] text-white text-xs font-bold mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#F7C600]" />
                  <span>Novice Driver Training</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101C2C] tracking-tight">
                  {class7.title}
                </h2>

                <p className="mt-4 text-base text-[#667085] leading-relaxed">
                  {class7.description}
                </p>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#101C2C] mb-4">
                    Key Focus Areas:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {class7.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-[#101C2C]">
                        <CheckCircle2 className="w-4 h-4 text-[#F7C600] flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                <Button to="/contact?lesson=class-7" variant="primary" icon="arrow-up-right">
                  Ask About Class 7
                </Button>
                <span className="text-xs text-[#667085]">Patient Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ROAD TEST PREPARATION (Prominently Featuring Image 2 - Checklist Photo) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200/80" id="road-test-prep">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Assessment Image (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-premium bg-slate-100">
                <picture>
                  <source srcSet="/images/road-test-assessment.webp" type="image/webp" />
                  <img
                    src="/images/2.png"
                    alt="Certified driving instructor conducting a driving assessment"
                    className="w-full h-auto object-cover object-center max-h-[560px]"
                    loading="lazy"
                  />
                </picture>

                <div className="absolute bottom-6 left-6 right-6 bg-[#07111D]/90 backdrop-blur-md border border-white/15 rounded-2xl p-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <ClipboardList className="w-4 h-4 text-[#F7C600]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F7C600]">
                      Structured Road Evaluation
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white/95">
                    Realistic assessment covering observation, vehicle positioning, and test day requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Test Prep Content (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-[#F7C600] rounded-full" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F7C600]">
                  TEST READINESS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#101C2C] tracking-tight leading-tight">
                {roadTest.title}
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#667085] leading-relaxed">
                {roadTest.description}
              </p>

              <div className="mt-8 space-y-3.5 w-full">
                {roadTest.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#F7C600] flex-shrink-0" />
                    <span className="text-sm sm:text-base font-semibold text-[#101C2C]">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button to="/contact?lesson=road-test-prep" variant="primary" icon="arrow-up-right">
                  Prepare for Your Test
                </Button>
                <a
                  href={INSTRUCTOR.phoneTel}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#101C2C] hover:text-[#07111D] py-3 px-4 rounded-full border border-slate-200"
                >
                  <Phone className="w-4 h-4 text-[#F7C600]" />
                  <span>Call to Schedule: {INSTRUCTOR.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. REFRESHER LESSONS (Featuring Image 6) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-slate-200/80" id="refresher">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Copy (6 cols) */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-[#F7C600] rounded-full" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F7C600]">
                  CONFIDENCE REBUILDING
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#101C2C] tracking-tight leading-tight">
                {refresher.title}
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#667085] leading-relaxed">
                {refresher.description}
              </p>

              <div className="mt-8 space-y-3.5 w-full">
                {refresher.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#F7C600] flex-shrink-0" />
                    <span className="text-sm sm:text-base font-semibold text-[#101C2C]">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button to="/contact?lesson=refresher" variant="primary" icon="arrow-up-right">
                  Book a Refresher
                </Button>
              </div>
            </div>

            {/* Steer Photo Feature (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-premium bg-slate-100 min-h-[380px] md:min-h-[460px]">
                <picture>
                  <source srcSet="/images/steering-wheel.webp" type="image/webp" />
                  <img
                    src="/images/6.jpg"
                    alt="Driver holding the steering wheel during a driving lesson"
                    className="w-full h-full object-cover absolute inset-0"
                    loading="lazy"
                  />
                </picture>

                <div className="absolute top-6 left-6 bg-[#07111D]/85 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/10 text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F7C600]" />
                  <span>Stress-Free Learning Atmosphere</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INSTRUCTION PROCESS (Featuring Image 7 - Personal Guidance) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image 7 Feature (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-premium bg-slate-100">
                <picture>
                  <source srcSet="/images/instruction-guidance.webp" type="image/webp" />
                  <img
                    src="/images/7.jpg"
                    alt="Driving instructor explaining a lesson to a student beside a training vehicle"
                    className="w-full h-auto object-cover object-center max-h-[540px]"
                    loading="lazy"
                  />
                </picture>

                <div className="absolute bottom-6 left-6 right-6 bg-[#07111D]/90 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-white">
                  <p className="text-xs font-bold text-[#F7C600] uppercase tracking-wider">
                    Personalized Feedback
                  </p>
                  <p className="text-xs sm:text-sm text-white/90 mt-0.5">
                    Clear explanations before, during, and after every session on the road.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Stages Content (7 cols) */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="OUR METHODOLOGY"
                title="A calm approach to better driving."
                description="We break driving down into practical, achievable stages so you never feel rushed or overwhelmed behind the wheel."
                className="mb-10"
              />

              <div className="space-y-6">
                {processStages.map((stage, idx) => {
                  const IconComp = stage.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:shadow-sm transition-all duration-200 flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#07111D] text-[#F7C600] flex items-center justify-center flex-shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-bold text-[#F7C600] uppercase tracking-wider">
                            {stage.step}
                          </span>
                          <span className="text-slate-300">•</span>
                          <h3 className="text-lg font-bold text-[#101C2C]">
                            {stage.title}
                          </h3>
                        </div>
                        <p className="text-sm text-[#667085] leading-relaxed">
                          {stage.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SERVICES CTA BLOCK (Dark Navy Block) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#07111D] text-white">
        <div className="max-w-[1080px] mx-auto px-5 md:px-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F7C600] mb-3 inline-block">
            GUIDANCE & NEXT STEPS
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Not sure which lesson is right for you?
          </h2>

          <p className="mt-5 text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Get in touch and explain what you're preparing for. We'll help you identify the most appropriate next step.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" variant="primary" icon="arrow-up-right">
              Contact Pass ’N’ Go
            </Button>
            <a
              href={INSTRUCTOR.phoneTel}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white rounded-full px-6 py-3.5 font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-[#F7C600]" />
              <span>Call Sukhdeep: {INSTRUCTOR.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
