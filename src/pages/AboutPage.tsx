import React, { useEffect } from 'react';
import { ShieldCheck, Phone, Sparkles } from 'lucide-react';
import { Button } from '../components/Buttons';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceAreaChip } from '../components/ServiceAreaChip';
import { INSTRUCTOR, SERVICE_AREAS, ABOUT_VALUES } from '../data/siteData';

interface AboutPageProps {
  onOpenQuote?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote }) => {
  useEffect(() => {
    document.title = 'About Sukhdeep Dhillon | Pass ’N’ Go Driving School';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn about Sukhdeep Dhillon, Certified Driving Instructor at Pass ’N’ Go Driving School in Surrey, BC. Dedicated, patient, professional driver education.'
      );
    }
  }, []);

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. ABOUT HERO (Dark Navy, Featuring Image 3 - Sukhdeep Dhillon) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#07111D] text-white pt-28 md:pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 25%, rgba(247,198,0,0.08), transparent 45%)',
          }}
        />

        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-[2px] bg-[#F7C600] rounded-full" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F7C600]">
                  ABOUT PASS ’N’ GO
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08]">
                Patient instruction. Professional guidance.{' '}
                <span className="text-[#F7C600]">Confident drivers.</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
                Pass ’N’ Go Driving School is focused on helping learners become safer, more capable, and more confident behind the wheel.
              </p>

              <div className="mt-8 p-5 rounded-2xl bg-[#101C2C] border border-white/10 max-w-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F7C600]/20 border border-[#F7C600]/40 flex items-center justify-center flex-shrink-0 text-[#F7C600]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#F7C600]">
                    Official Designation
                  </div>
                  <div className="text-base font-bold text-white">
                    {INSTRUCTOR.name} — {INSTRUCTOR.title}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button to="/contact" variant="primary" icon="arrow-up-right">
                  Book with Sukhdeep
                </Button>
                <a
                  href={INSTRUCTOR.phoneTel}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white rounded-full px-6 py-3.5 font-semibold text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#F7C600]" />
                  <span>Call {INSTRUCTOR.phone}</span>
                </a>
                {onOpenQuote && (
                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-2 text-xs text-white/80 hover:text-[#F7C600] py-2 px-3 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#F7C600]" />
                    <span>Get Quick Quote</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Photo (Image 3 - Instructor beside Vehicle) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] overflow-hidden border border-white/15 shadow-2xl bg-[#101C2C]">
                <picture>
                  <source srcSet="/images/instructor-vehicle.webp" type="image/webp" />
                  <img
                    src="/images/3.png"
                    alt="Certified driving instructor standing beside a training vehicle"
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </picture>

                <div className="absolute bottom-6 left-6 right-6 liquid-glass rounded-2xl p-4 text-white">
                  <p className="text-xs uppercase tracking-wider font-bold text-[#F7C600]">
                    {INSTRUCTOR.title}
                  </p>
                  <p className="text-base font-extrabold text-white">
                    {INSTRUCTOR.name}
                  </p>
                  <p className="text-xs text-white/70 mt-0.5">
                    Pass ’N’ Go Driving School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT THE INSTRUCTOR (Clear Factual Profile) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="lane-dash" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F7C600]">
                MEET YOUR INSTRUCTOR
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101C2C] tracking-tight">
              {INSTRUCTOR.name}
            </h2>
            <p className="text-lg font-bold text-[#F7C600] mt-1 mb-8">
              {INSTRUCTOR.title}
            </p>

            <div className="space-y-6 text-base sm:text-lg text-[#667085] leading-relaxed border-t border-slate-100 pt-8">
              <p>
                With a patient, professional, and dedicated teaching approach, Sukhdeep focuses on making driving instruction clear, practical, and confidence-building.
              </p>
              <p>
                The goal is to help learners understand the road, develop better habits, and feel more prepared for the next stage of their driving journey.
              </p>
              <p>
                Whether assisting a novice driver taking the wheel for the very first time, preparing a learner for their upcoming ICBC road test, or guiding an experienced driver refreshing their skills, instruction remains centered on student safety and calm road awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE VALUES (4 Large Editorial Cards) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-slate-200/80">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12">
          <SectionHeading
            eyebrow="GUIDING VALUES"
            title="Principles that define every driving lesson."
            description="Our instruction never uses intimidation or pressure. We maintain high professional standards while keeping learning supportive."
            align="left"
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {ABOUT_VALUES.map((val, idx) => (
              <div
                key={val.keyword}
                className="relative rounded-[24px] bg-white border border-slate-200 p-8 shadow-sm transition-all duration-300 hover:shadow-premium hover:-translate-y-1 hover:border-[#F7C600]/50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-2xl font-black text-[#07111D]">
                      0{idx + 1}
                    </span>
                    <span className="lane-dash" />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#101C2C] tracking-tight mb-3">
                    {val.keyword}
                  </h3>

                  <p className="text-sm text-[#667085] leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#F7C600] uppercase tracking-wider">
                  <span>Pass ’N’ Go Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TEACHING PHILOSOPHY (Featuring Image 7 - Personal Interaction) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image 7 (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-premium bg-slate-100">
                <picture>
                  <source srcSet="/images/instruction-guidance.webp" type="image/webp" />
                  <img
                    src="/images/7.jpg"
                    alt="Driving instructor explaining a lesson to a student beside a training vehicle"
                    className="w-full h-auto object-cover max-h-[520px]"
                    loading="lazy"
                  />
                </picture>

                <div className="absolute bottom-6 left-6 right-6 bg-[#07111D]/90 backdrop-blur-md rounded-2xl p-4 text-white border border-white/10">
                  <p className="text-xs text-[#F7C600] font-bold uppercase tracking-wider">
                    Teaching In Action
                  </p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Clear communication before every exercise.
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy Text (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-[#F7C600] rounded-full" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F7C600]">
                  TEACHING PHILOSOPHY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101C2C] tracking-tight leading-[1.15]">
                {INSTRUCTOR.mission}{' '}
                <span className="font-display italic font-normal text-[#F7C600]">
                  confidence
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#667085] leading-relaxed max-w-xl">
                Learning to drive is about more than operating a vehicle. It's about developing awareness, judgment, consistency, and confidence. Good instruction gives learners the clarity and practice they need to make better decisions on the road.
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 w-full max-w-xl">
                <p className="text-sm font-bold text-[#101C2C] mb-1">
                  "Safe driving is a lifelong skill."
                </p>
                <p className="text-xs text-[#667085] leading-relaxed">
                  We don't just teach you how to pass a road test; we help you develop the defensive habits and acute awareness required to remain safe on Canadian roads for years to come.
                </p>
              </div>

              <div className="mt-8">
                <Button to="/contact" variant="primary" icon="arrow-up-right">
                  Start Your Driving Lessons
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. LOCAL SERVICE COMMUNITIES */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-slate-200/80">
        <div className="max-w-[1080px] mx-auto px-5 md:px-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F7C600] mb-3 inline-block">
            COMMUNITY ROOTS
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101C2C]">
            Proud to serve local communities.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            Pass ’N’ Go serves learners throughout these communities without presenting an invented office address or physical location.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <ServiceAreaChip key={area} name={area} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. ABOUT CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#07111D] text-white">
        <div className="max-w-[1080px] mx-auto px-5 md:px-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F7C600] mb-3 inline-block">
            TAKE THE WHEEL
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to start learning?
          </h2>

          <p className="mt-5 text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Take the first step toward safer, more confident driving.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" variant="primary" icon="arrow-up-right">
              Book a Lesson
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
