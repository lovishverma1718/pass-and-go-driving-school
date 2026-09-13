import React, { useState } from 'react';
import { X, Send, MessageCircle, MessageSquare, Check, Phone, Sparkles } from 'lucide-react';
import { INSTRUCTOR, SERVICE_AREAS, createWhatsAppLink, createSMSLink } from '../data/siteData';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLesson?: string;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  initialLesson = 'Class 5 lessons',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    lessonType: initialLesson,
    preferredArea: 'Surrey',
    preferredDateTime: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappUrl = createWhatsAppLink(formData);
  const smsUrl = createSMSLink(formData);

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-fade-in"
    >
      <div className="relative w-full max-w-lg bg-[#07111D] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-white my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#F7C600]"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F7C600]/15 text-[#F7C600] border border-[#F7C600]/30 mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Fast Quote & Inquiry</span>
          </div>
          <h2 id="quote-modal-title" className="text-2xl font-extrabold tracking-tight">
            Request Lesson Quote
          </h2>
          <p className="text-xs text-white/70 mt-1">
            Connect directly with Certified Instructor {INSTRUCTOR.name}. Send via WhatsApp or Text Message (SMS).
          </p>
        </div>

        {isSubmitted ? (
          <div className="py-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#F7C600]/20 text-[#F7C600] border border-[#F7C600] flex items-center justify-center mb-4">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Inquiry Prepared!
            </h3>
            <p className="text-sm text-white/80 leading-relaxed mb-6 max-w-sm">
              Thanks — your inquiry details are ready. For fastest response, tap below to send directly to Sukhdeep on WhatsApp or SMS text message:
            </p>

            <div className="w-full flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3.5 px-6 rounded-full transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send via WhatsApp</span>
              </a>

              <a
                href={smsUrl}
                className="w-full flex items-center justify-center gap-2.5 bg-[#007AFF] hover:bg-[#0066D6] text-white font-bold py-3.5 px-6 rounded-full transition-all shadow-md"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Send via Text Message (SMS)</span>
              </a>

              <a
                href={INSTRUCTOR.phoneTel}
                className="w-full flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold py-3 px-6 rounded-full transition-all border border-white/15 text-sm mt-1"
              >
                <Phone className="w-4 h-4 text-[#F7C600]" />
                <span>Call {INSTRUCTOR.phone}</span>
              </a>
            </div>

            <button
              onClick={resetAndClose}
              className="mt-6 text-xs text-white/50 hover:text-white transition-colors underline underline-offset-4"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-white/90 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full bg-[#101C2C] border border-white/15 focus:border-[#F7C600] focus:ring-1 focus:ring-[#F7C600] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 778-xxx-xxxx"
                  className="w-full bg-[#101C2C] border border-white/15 focus:border-[#F7C600] focus:ring-1 focus:ring-[#F7C600] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1.5">
                  Lesson Type
                </label>
                <select
                  name="lessonType"
                  value={formData.lessonType}
                  onChange={handleChange}
                  className="w-full bg-[#101C2C] border border-white/15 focus:border-[#F7C600] focus:ring-1 focus:ring-[#F7C600] rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-all"
                >
                  <option value="Class 5 lessons">Class 5 lessons</option>
                  <option value="Class 7 lessons">Class 7 lessons</option>
                  <option value="Road test preparation">Road test preparation</option>
                  <option value="Refresher lessons">Refresher lessons</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1.5">
                  Preferred Area
                </label>
                <select
                  name="preferredArea"
                  value={formData.preferredArea}
                  onChange={handleChange}
                  className="w-full bg-[#101C2C] border border-white/15 focus:border-[#F7C600] focus:ring-1 focus:ring-[#F7C600] rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-all"
                >
                  {SERVICE_AREAS.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1.5">
                  Preferred Day / Time
                </label>
                <input
                  type="text"
                  name="preferredDateTime"
                  value={formData.preferredDateTime}
                  onChange={handleChange}
                  placeholder="e.g. Weekends, mornings"
                  className="w-full bg-[#101C2C] border border-white/15 focus:border-[#F7C600] focus:ring-1 focus:ring-[#F7C600] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/90 mb-1.5">
                Note or Question (Optional)
              </label>
              <textarea
                name="message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you're preparing for..."
                className="w-full bg-[#101C2C] border border-white/15 focus:border-[#F7C600] focus:ring-1 focus:ring-[#F7C600] rounded-xl px-4 py-2 text-sm text-white placeholder:text-white/30 outline-none transition-all resize-none"
              />
            </div>

            {/* Quick Instant Send Buttons */}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#F7C600] hover:bg-[#FFD21A] text-[#101C2C] font-bold py-3.5 px-6 rounded-full transition-all shadow-gold-glow"
              >
                <span>Continue & Send Quote Request</span>
                <Send className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 py-2.5 px-3 rounded-full text-xs font-bold transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Directly</span>
                </a>

                <a
                  href={smsUrl}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#007AFF]/20 hover:bg-[#0066D6]/30 text-[#007AFF] border border-[#007AFF]/40 py-2.5 px-3 rounded-full text-xs font-bold transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>SMS Directly</span>
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
