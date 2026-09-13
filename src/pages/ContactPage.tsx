import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '../components/Buttons';
import {
  INSTRUCTOR,
  SERVICE_AREAS,
  createWhatsAppLink,
  createSMSLink,
} from '../data/siteData';

export const ContactPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Book a Driving Lesson | Pass ’N’ Go Driving School';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Book driving lessons or request a quote from Pass ’N’ Go Driving School. Serving Surrey, Newton, Delta, South Surrey, and White Rock. Call or message today.'
      );
    }
  }, []);

  // Check URL query param for default lesson selection
  const searchParams = new URLSearchParams(location.search);
  const lessonParam = searchParams.get('lesson');

  const getDefaultLesson = () => {
    if (lessonParam === 'class-5') return 'Class 5 lessons';
    if (lessonParam === 'class-7') return 'Class 7 lessons';
    if (lessonParam === 'road-test-prep') return 'Road test preparation';
    if (lessonParam === 'refresher') return 'Refresher lessons';
    return 'Class 5 lessons';
  };

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    lessonType: getDefaultLesson(),
    preferredArea: 'Surrey',
    preferredDateTime: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappUrl = createWhatsAppLink(formData);
  const smsUrl = createSMSLink(formData);

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. CONTACT HERO (Dark Navy, Pure Typography & Refined Layout) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#07111D] text-white pt-28 md:pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(247,198,0,0.08), transparent 40%)',
          }}
        />

        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-[#F7C600] rounded-full" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F7C600]">
                CONTACT / BOOK A LESSON
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08]">
              Let’s get you moving.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
              Tell Pass ’N’ Go what you're looking for and take the first step toward safer, more confident driving.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DIRECT CONTACT CARDS (Phone & Email Cards) */}
      {/* ========================================================================= */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Card */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all hover:border-[#F7C600]/50 hover:shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#07111D] text-[#F7C600] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#667085]">
                    Direct Call / Text
                  </span>
                  <div className="text-2xl font-extrabold text-[#101C2C] tracking-tight mt-0.5">
                    {INSTRUCTOR.phone}
                  </div>
                  <span className="text-xs text-[#667085]">
                    Instructor: {INSTRUCTOR.name}
                  </span>
                </div>
              </div>
              <Button href={INSTRUCTOR.phoneTel} variant="primary" icon="arrow-up-right">
                Call Now
              </Button>
            </div>

            {/* Email Card */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all hover:border-[#F7C600]/50 hover:shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#07111D] text-[#F7C600] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#667085]">
                    Direct Email
                  </span>
                  <div className="text-base sm:text-lg font-bold text-[#101C2C] tracking-tight mt-0.5 break-all">
                    {INSTRUCTOR.email}
                  </div>
                  <span className="text-xs text-[#667085]">
                    Official inquiries & booking questions
                  </span>
                </div>
              </div>
              <Button href={INSTRUCTOR.emailMailto} variant="secondary" icon="arrow-up-right">
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CONTACT FORM & DUAL-DISPATCH (WhatsApp + Text Message) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[28px] border border-slate-200 p-8 sm:p-10 shadow-premium">
                <div className="mb-8">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F7C600] block mb-2">
                    INQUIRY FORM
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101C2C] tracking-tight">
                    Request a Lesson
                  </h2>
                  <p className="text-sm text-[#667085] mt-1">
                    Fill out the details below to request a lesson. You can also send the inquiry directly via WhatsApp or SMS.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-8 flex flex-col items-start bg-[#F4F7FA] p-8 rounded-2xl border border-slate-200 animate-fade-in">
                    <div className="w-12 h-12 rounded-full bg-[#F7C600]/20 text-[#07111D] border border-[#F7C600] flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6 text-[#DCA400]" />
                    </div>

                    <h3 className="text-xl font-bold text-[#101C2C] mb-2">
                      Inquiry Received
                    </h3>

                    {/* Exactly the required confirmation copy */}
                    <p className="text-sm text-[#101C2C]/80 leading-relaxed mb-6 font-medium">
                      Thanks — your inquiry has been received. Please use the phone or email above if you need to follow up directly.
                    </p>

                    <div className="w-full pt-4 border-t border-slate-200 flex flex-col gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#667085]">
                        Send inquiry details instantly to Sukhdeep:
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-sm"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Send on WhatsApp</span>
                        </a>

                        <a
                          href={smsUrl}
                          className="flex items-center justify-center gap-2 bg-[#007AFF] hover:bg-[#0066D6] text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-sm"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Send on SMS Text</span>
                        </a>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 text-xs font-bold text-[#101C2C] hover:underline"
                      >
                        ← Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-[#101C2C] uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Navjot Gill"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#F7C600] focus:ring-2 focus:ring-[#F7C600]/20 rounded-xl px-4 py-3 text-sm text-[#101C2C] outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-[#101C2C] uppercase tracking-wider mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 778-555-0199"
                          className="w-full bg-slate-50 border border-slate-200 focus:border-[#F7C600] focus:ring-2 focus:ring-[#F7C600]/20 rounded-xl px-4 py-3 text-sm text-[#101C2C] outline-none transition-all placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-[#101C2C] uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. learner@example.ca"
                          className="w-full bg-slate-50 border border-slate-200 focus:border-[#F7C600] focus:ring-2 focus:ring-[#F7C600]/20 rounded-xl px-4 py-3 text-sm text-[#101C2C] outline-none transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Lesson Type & Preferred Area */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="lessonType" className="block text-xs font-bold text-[#101C2C] uppercase tracking-wider mb-2">
                          Lesson Type
                        </label>
                        <select
                          id="lessonType"
                          name="lessonType"
                          value={formData.lessonType}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-[#F7C600] focus:ring-2 focus:ring-[#F7C600]/20 rounded-xl px-4 py-3 text-sm text-[#101C2C] outline-none transition-all cursor-pointer"
                        >
                          <option value="Class 5 lessons">Class 5 lessons</option>
                          <option value="Class 7 lessons">Class 7 lessons</option>
                          <option value="Road test preparation">Road test preparation</option>
                          <option value="Refresher lessons">Refresher lessons</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="preferredArea" className="block text-xs font-bold text-[#101C2C] uppercase tracking-wider mb-2">
                          Preferred Area
                        </label>
                        <select
                          id="preferredArea"
                          name="preferredArea"
                          value={formData.preferredArea}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-[#F7C600] focus:ring-2 focus:ring-[#F7C600]/20 rounded-xl px-4 py-3 text-sm text-[#101C2C] outline-none transition-all cursor-pointer"
                        >
                          {SERVICE_AREAS.map((area) => (
                            <option key={area} value={area}>
                              {area}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Preferred Date/Time */}
                    <div>
                      <label htmlFor="preferredDateTime" className="block text-xs font-bold text-[#101C2C] uppercase tracking-wider mb-2">
                        Preferred Date / Time
                      </label>
                      <input
                        type="text"
                        id="preferredDateTime"
                        name="preferredDateTime"
                        value={formData.preferredDateTime}
                        onChange={handleChange}
                        placeholder="e.g. Weekday evenings or Saturday mornings"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#F7C600] focus:ring-2 focus:ring-[#F7C600]/20 rounded-xl px-4 py-3 text-sm text-[#101C2C] outline-none transition-all placeholder:text-slate-400"
                      />
                      <span className="text-[11px] text-[#667085] mt-1 block">
                        Availability will be confirmed directly based on schedule.
                      </span>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-[#101C2C] uppercase tracking-wider mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you're preparing for or what you'd like help with."
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#F7C600] focus:ring-2 focus:ring-[#F7C600]/20 rounded-xl px-4 py-3 text-sm text-[#101C2C] outline-none transition-all placeholder:text-slate-400 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        icon="arrow-up-right"
                        className="w-full justify-center text-base py-4"
                      >
                        Request a Lesson
                      </Button>
                      <p className="text-xs text-[#667085] text-center mt-3">
                        We'll use the information you provide to respond to your lesson inquiry.
                      </p>
                    </div>

                    {/* Instant Direct Messaging Option */}
                    <div className="mt-4 pt-6 border-t border-slate-100 flex flex-col gap-2.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#101C2C]">
                        Or send this inquiry directly to Sukhdeep via:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-sm"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Send via WhatsApp</span>
                        </a>

                        <a
                          href={smsUrl}
                          className="inline-flex items-center justify-center gap-2 bg-[#007AFF] hover:bg-[#0066D6] text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-sm"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Send via Text Message (SMS)</span>
                        </a>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right Information Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Service Areas Card */}
              <div className="bg-white rounded-[28px] border border-slate-200 p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[#F7C600]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#101C2C]">
                    Service Areas
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#101C2C] mb-3">
                  Serving Your Community
                </h3>

                <p className="text-sm text-[#667085] leading-relaxed mb-6">
                  Pass ’N’ Go provides one-on-one driving lessons throughout:
                </p>

                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <div
                      key={area}
                      className="px-3.5 py-1.5 rounded-full bg-slate-100 text-xs font-bold text-[#101C2C] border border-slate-200"
                    >
                      {area}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 text-xs text-[#667085]">
                  <p>
                    Lessons are conducted in authentic driving environments including local neighborhood streets, multilane corridors, and test routes.
                  </p>
                </div>
              </div>

              {/* Verified Instructor Badge */}
              <div className="bg-[#07111D] text-white rounded-[28px] border border-white/10 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#F7C600]/20 flex items-center justify-center text-[#F7C600]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F7C600]">
                      Instructor
                    </span>
                    <h4 className="text-base font-bold text-white">
                      {INSTRUCTOR.name}
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Certified Driving Instructor dedicated to calm, structured, and patient driving instruction across Surrey and the Lower Mainland.
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#F7C600] font-semibold">
                  <span className="lane-dash" />
                  <span>{INSTRUCTOR.tagline}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CONTACT CLOSING CTA (Dark Navy Panel) */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#07111D] text-white border-t border-white/10">
        <div className="max-w-[1080px] mx-auto px-5 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Safe driving starts with the right instruction.
          </h2>
          <p className="text-sm text-white/70 mt-3 mb-6">
            Call directly to discuss your driving goals and lesson schedule.
          </p>
          <a
            href={INSTRUCTOR.phoneTel}
            className="inline-flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F7C600] hover:underline tracking-tight"
          >
            <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
            <span>{INSTRUCTOR.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
