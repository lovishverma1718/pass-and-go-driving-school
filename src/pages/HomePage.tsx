import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  CarFront,
  ClipboardCheck,
  UserRoundCheck,
  HeartHandshake,
  Compass,
  Target,
  ArrowRight,
  Phone,
  Sparkles,
} from 'lucide-react';
import { Button } from '../components/Buttons';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceAreaChip } from '../components/ServiceAreaChip';
import { ProcessStep } from '../components/ProcessStep';
import { FAQItem } from '../components/FAQItem';
import {
  INSTRUCTOR,
  SERVICE_AREAS,
  SERVICES_DATA,
  WHY_US_PRINCIPLES,
  PROCESS_STEPS,
  FAQ_ITEMS,
} from '../data/siteData';

interface HomePageProps {
  onOpenQuote?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote }) => {
  useEffect(() => {
    document.title = 'Pass ’N’ Go Driving School | Surrey Driving Lessons';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Pass ’N’ Go Driving School provides Class 5, Class 7, road test preparation, and refresher driving lessons in Surrey, Newton, Delta, South Surrey, and White Rock.'
      );
    }
  }, []);

  const trustItems = [
    {
      icon: ShieldCheck,
      title: 'Certified Driving Instructor',
      subtitle: 'Official ICBC Certified',
    },
    {
      icon: CarFront,
      title: 'Class 5 & Class 7 Lessons',
      subtitle: 'Complete Driver Training',
    },
    {
      icon: ClipboardCheck,
      title: 'Road Test Preparation',
      subtitle: 'Focused Skill Building',
    },
    {
      icon: UserRoundCheck,
      title: 'Patient, Professional Instruction',
      subtitle: 'Calm Learning Environment',
    },
  ];

  const whyIcons: Record<string, React.ElementType> = {
    HeartHandshake,
    Compass,
    ShieldCheck,
    Target,
  };

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Deep Navy, Pure Photography, No Background Video) */}
      {/* ========================================================================= */}
      <section
        aria-label="Hero Section"
        className="relative bg-[#07111D] text-white overflow-hidden min-h-[760px] md:min-h-[820px] lg:min-h-[880px] flex items-center pt-28 md:pt-36 pb-20"
      >
        {/* Subtle radial glow accents */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(247,198,0,0.08), transparent 40%), radial-gradient(circle at 20% 80%, rgba(16,28,44,0.6), transparent 50%)',
          }}
        />

        {/* Decorative road-line markings in background */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7C600]/15 to-transparent pointer-events-none" />
        <div className="absolute bottom-16 left-12 hidden lg:flex items-center gap-3 pointer-events-none opacity-40">
          <span className="lane-dash" />
          <span className="text-[10px] tracking-[0.25em] text-[#F7C600] uppercase font-bold">
            British Columbia Driving Instruction
          </span>
        </div>

        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <span className="w-6 h-[2px] bg-[#F7C600] rounded-full" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F7C600]">
                  SERVING SURREY & THE LOWER MAINLAND
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-[48px] sm:text-[62px] md:text-[76px] lg:text-[88px] xl:text-[98px] font-extrabold tracking-[-0.055em] leading-[0.92] text-left"
              >
                <span className="block text-white">Safe Driving.</span>
                <span className="block text-[#F7C600] mt-1">Confident Future.</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="text-lg md:text-xl text-white/80 font-medium max-w-[540px] leading-relaxed mt-6"
              >
                {INSTRUCTOR.subtagline}
              </motion.p>

              {/* Additional Copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="text-sm md:text-base text-white/60 max-w-[520px] leading-relaxed mt-3"
              >
                Patient, professional instruction designed to help you build practical skills, safer habits, and confidence behind the wheel.
              </motion.p>

              {/* CTA Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="flex flex-wrap items-center gap-3.5 mt-8 w-full sm:w-auto"
              >
                <Button to="/contact" variant="primary" icon="arrow-up-right">
                  Book a Lesson
                </Button>
                <Button to="/services" variant="glass" icon="arrow-right">
                  Explore Lessons
                </Button>
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
              </motion.div>

              {/* Service Areas Mini Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="mt-10 pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/60"
              >
                <span className="text-[#F7C600] font-semibold uppercase tracking-wider text-[10px]">
                  Local Service:
                </span>
                {SERVICE_AREAS.map((area, i) => (
                  <span key={area} className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F7C600]/70" />
                    <span>{area}</span>
                    {i < SERVICE_AREAS.length - 1 && <span className="text-white/20 ml-2">•</span>}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right: Hero Authentic Image Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative w-full"
            >
              <div className="relative rounded-[32px] overflow-hidden border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.5)] min-h-[430px] md:min-h-[520px] lg:min-h-[580px] bg-[#101C2C]">
                <picture>
                  <source srcSet="/images/hero-lesson.webp" type="image/webp" />
                  <img
                    src="/images/1 (1).jpg"
                    alt="Driving lesson with instructor guiding a learner inside a vehicle"
                    className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-700 hover:scale-[1.02]"
                    loading="eager"
                  />
                </picture>

                {/* Subtle gradient vignette to protect text readouts */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111D]/80 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Glass Badge 1 (Bottom Left) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="absolute bottom-6 left-6 right-6 sm:right-auto liquid-glass rounded-2xl p-4 sm:p-5 text-white max-w-sm"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#F7C600] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F7C600]">
                      {INSTRUCTOR.corePillars}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white/95 leading-snug">
                    Calm, structured guidance for confident real-world driving.
                  </p>
                </motion.div>

                {/* Floating Glass Badge 2 (Top Right) */}
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  className="absolute top-6 right-6 bg-[#07111D]/85 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider text-white shadow-lg flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F7C600]" />
                  <span>PERSONAL INSTRUCTION</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUST STRIP (Clean White Surface, 4 Pillars) */}
      {/* ========================================================================= */}
      <section aria-label="Trust Signals" className="bg-white border-y border-slate-200/80 py-10 relative">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustItems.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-slate-50 border border-transparent hover:border-slate-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#07111D] text-[#F7C600] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-sm md:text-[15px] font-bold text-[#101C2C] leading-snug">
                      {item.title}
                    </h2>
                    <p className="text-xs text-[#667085] mt-1 font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SERVICES OVERVIEW (Driving Lessons Overview) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] relative">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="DRIVING LESSONS"
              title="Instruction for where you are —"
              italicAccent="and where you want to go."
              description="Whether you're building foundational skills, preparing for a road test, or returning to driving, Pass ’N’ Go offers focused lessons built around safe and confident driving."
            />
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-sm text-[#101C2C] hover:text-[#07111D] group"
            >
              <span>View All Lesson Details</span>
              <ArrowRight className="w-4 h-4 text-[#F7C600] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} showImage={false} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY PASS ’N’ GO (Dark Navy Section, Clear Principles) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#07111D] text-white relative overflow-hidden">
        {/* Subtle lane dash motif */}
        <div className="absolute top-0 left-0 right-0 road-line" />
        <div className="absolute bottom-0 left-0 right-0 road-line" />

        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <SectionHeading
            eyebrow="WHY PASS ’N’ GO"
            title="Confidence comes from knowing what to do next"
            italicAccent="with confidence."
            description="Our instruction is designed to give you clarity, calm decision-making habits, and practical road readiness that lasts a lifetime."
            isDark={true}
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {WHY_US_PRINCIPLES.map((principle, index) => {
              const IconComp = whyIcons[principle.icon] || Compass;
              return (
                <div
                  key={index}
                  className="rounded-[24px] bg-[#101C2C]/90 border border-white/10 p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#F7C600]/40 hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#F7C600] flex items-center justify-center mb-6">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F7C600]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F7C600]">
                      CORE PRINCIPLE
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INSTRUCTOR SECTION (Featuring Image 3 - Sukhdeep Dhillon) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Instructor Photo (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-premium bg-slate-100">
                <picture>
                  <source srcSet="/images/instructor-vehicle.webp" type="image/webp" />
                  <img
                    src="/images/3.png"
                    alt="Certified driving instructor standing beside a training vehicle"
                    className="w-full h-auto object-cover object-center max-h-[580px]"
                    loading="lazy"
                  />
                </picture>

                <div className="absolute bottom-6 left-6 right-6 bg-[#07111D]/90 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-white">
                  <p className="text-xs uppercase tracking-wider text-[#F7C600] font-bold">
                    {INSTRUCTOR.title}
                  </p>
                  <p className="text-base font-extrabold text-white mt-0.5">
                    {INSTRUCTOR.name}
                  </p>
                  <p className="text-xs text-white/60 mt-1">
                    Pass ’N’ Go Driving School
                  </p>
                </div>
              </div>
            </div>

            {/* Instructor Story (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <SectionHeading
                eyebrow="MEET YOUR INSTRUCTOR"
                title="Learn with Sukhdeep Dhillon."
                description="Certified Driving Instructor"
                className="mb-6"
              />

              <div className="space-y-4 text-base text-[#667085] leading-relaxed max-w-xl">
                <p>
                  Pass ’N’ Go Driving School is built around patient, professional, and dedicated instruction. Sukhdeep Dhillon focuses on helping learners develop safer driving habits, practical skills, and confidence behind the wheel.
                </p>
                <p>
                  The goal is simple: provide clear guidance, meaningful practice, and a stronger foundation for confident driving.
                </p>
              </div>

              {/* Core Philosophy Box */}
              <div className="my-6 p-5 rounded-2xl bg-slate-50 border border-slate-200/90 w-full max-w-xl">
                <div className="flex items-center gap-2 text-[#07111D] font-bold text-sm mb-1">
                  <span className="lane-dash" />
                  <span>{INSTRUCTOR.mission}</span>
                </div>
                <p className="text-xs text-[#667085]">
                  Every lesson is tailored to your pacing, skill level, and specific road readiness goals.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Button to="/about" variant="secondary" icon="arrow-right">
                  Meet the Instructor
                </Button>
                <a
                  href={INSTRUCTOR.phoneTel}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#101C2C] hover:text-[#07111D] py-3 px-4 rounded-full border border-slate-200 hover:border-[#F7C600] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F7C600]" />
                  <span>Direct: {INSTRUCTOR.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SERVICE AREAS SECTION (Featuring Image 4 - Urban Street) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-slate-200/80">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="LOCAL SERVICE AREAS"
                title="Driving lessons in your community."
                description="Pass ’N’ Go Driving School serves learners across Surrey, Newton, Delta, South Surrey, and White Rock. We provide lessons built around real-world intersections, highway transitions, and local road test routes."
                className="mb-8"
              />

              {/* Service Areas Chips */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {SERVICE_AREAS.map((area) => (
                  <ServiceAreaChip key={area} name={area} />
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-lg">
                <h4 className="text-sm font-bold text-[#101C2C] mb-1">
                  Ready to book in your area?
                </h4>
                <p className="text-xs text-[#667085] leading-relaxed mb-4">
                  Let us know which community you're located in when submitting your lesson request.
                </p>
                <Button to="/contact" variant="primary" icon="arrow-up-right">
                  Check Lesson Availability
                </Button>
              </div>
            </div>

            {/* Right: Urban Road Photography (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-premium bg-slate-100 min-h-[380px] md:min-h-[460px]">
                <picture>
                  <source srcSet="/images/urban-street.webp" type="image/webp" />
                  <img
                    src="/images/4.png"
                    alt="Busy urban road in a Canadian-style city environment"
                    className="w-full h-full object-cover absolute inset-0"
                    loading="lazy"
                  />
                </picture>

                <div className="absolute top-6 left-6 bg-[#07111D]/80 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/10 text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F7C600]" />
                  <span>Real Canadian Road Conditions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. LEARNING PROCESS (A Simple Path to Better Driving) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12">
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title="A simple path to better driving."
            description="Clear steps from your initial inquiry to becoming a safe, licensed, and self-assured driver."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {PROCESS_STEPS.map((item, idx) => (
              <ProcessStep
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
                isLast={idx === PROCESS_STEPS.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FAQ SECTION (Accordion) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-slate-200/80">
        <div className="max-w-[980px] mx-auto px-5 md:px-8">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Common questions about driving lessons."
            description="Clear, factual information about our lesson offerings and local service."
            align="center"
            className="mb-12"
          />

          <div className="flex flex-col gap-4">
            {FAQ_ITEMS.map((faq, index) => (
              <FAQItem key={faq.id} item={faq} defaultOpen={index === 0} />
            ))}
          </div>

          <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200">
            <p className="text-sm font-semibold text-[#101C2C]">
              Have another question or want to discuss your road test date?
            </p>
            <p className="text-xs text-[#667085] mt-1 mb-4">
              Feel free to give Sukhdeep a call or send a message anytime.
            </p>
            <a
              href={INSTRUCTOR.phoneTel}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#07111D] hover:text-[#F7C600] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F7C600]" />
              <span>{INSTRUCTOR.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. HOME FINAL CTA (Atmospheric Banner featuring Image 5 - Sunset Highway) */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#07111D]">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="relative rounded-[32px] overflow-hidden min-h-[460px] md:min-h-[520px] flex items-center justify-center p-8 sm:p-12 md:p-16 border border-white/15 shadow-2xl">
            {/* Atmospheric Background Image */}
            <picture>
              <source srcSet="/images/sunset-highway.webp" type="image/webp" />
              <img
                src="/images/5.jpg"
                alt="Vehicles traveling along a highway at sunset"
                className="w-full h-full object-cover absolute inset-0"
                loading="lazy"
              />
            </picture>

            {/* Controlled Navy Overlay for High Legibility */}
            <div className="absolute inset-0 bg-[#07111D]/85 backdrop-blur-[2px]" />

            {/* CTA Content */}
            <div className="relative z-10 max-w-2xl text-center flex flex-col items-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F7C600] mb-3">
                START DRIVING TODAY
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to feel more confident behind the wheel?
              </h2>

              <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed max-w-lg">
                Start with a conversation about the driving lessons that fit your goals.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button to="/contact" variant="primary" icon="arrow-up-right">
                  Book a Lesson
                </Button>
                <a
                  href={INSTRUCTOR.phoneTel}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full px-6 py-3.5 font-semibold text-sm transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-[#F7C600]" />
                  <span>Call {INSTRUCTOR.phone}</span>
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-white/50">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F7C600]" />
                <span>Serving Surrey, Newton, Delta, South Surrey, and White Rock</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
