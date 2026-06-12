import { useState, FormEvent, type ComponentProps, type ElementType, type ReactNode } from "react";
import { useEnquiries } from "../lib/EnquiryStore";
import {
  MessageCircle,
  ShieldPlus,
  Users,
  Headphones,
  User,
  Building2,
  Mail,
  Phone,
  Layers,
  Pencil,
  Send,
  Lock,
  BadgeCheck,
  Star,
  Clock,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

export interface SendUsMessageSectionProps {
  requirementOptions: string[];
  contextType: "smart-home" | "saas-ai";
  successMessage?: string;
  defaultRequirementType?: string;
}

interface FormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  requirementType: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  requirementType: "",
  message: "",
};

const supportPoints = [
  {
    title: "Quick Response",
    description: "We usually respond within 24 business hours.",
    icon: MessageCircle,
  },
  {
    title: "Secure & Confidential",
    description: "Your information is safe with us.",
    icon: ShieldPlus,
  },
  {
    title: "Expert Support",
    description: "Get support from our skilled team of experts.",
    icon: Users,
  },
];

const trustBenefits = [
  { label: "Trusted by 100+ Customers", icon: BadgeCheck },
  { label: "Quality Solutions Guaranteed", icon: Star },
  { label: "On-Time Delivery", icon: Clock },
  { label: "Ongoing Support", icon: Headphones },
];

const MAX_MESSAGE_LENGTH = 1000;

function FieldLabel({ htmlFor, children, required }: { htmlFor: string; children: ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-gray-900 mb-2">
      {children}
      {required && <span className="text-red-500"> *</span>}
    </label>
  );
}

function IconInput({
  id,
  icon: Icon,
  error,
  className = "",
  ...props
}: ComponentProps<"input"> & { icon: ElementType; error?: boolean }) {
  return (
    <div className="relative">
      <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      <input
        id={id}
        {...props}
        className={`w-full h-11 pl-10 pr-4 rounded-xl border bg-white text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-[color,box-shadow] focus:border-[#009A9A] focus:ring-[3px] focus:ring-[#009A9A]/20 ${
          error ? "border-red-400" : "border-gray-200"
        } ${className}`}
      />
    </div>
  );
}

export default function SendUsMessageSection({
  requirementOptions,
  contextType,
  successMessage = "Your enquiry has been submitted successfully.",
  defaultRequirementType = "",
}: SendUsMessageSectionProps) {
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    requirementType: defaultRequirementType,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const { addEnquiry } = useEnquiries();

  const updateField = (field: keyof FormData, value: string) => {
    if (field === "message" && value.length > MAX_MESSAGE_LENGTH) {
      return;
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitted) {
      setSubmitted(false);
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.requirementType) newErrors.requirementType = "Requirement type is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError("");
    try {
      await addEnquiry({
        name: formData.name.trim(),
        company: formData.companyName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        requirementType: formData.requirementType,
        message: formData.message.trim(),
      });
      setSubmitted(true);
      setFormData({ ...initialFormData, requirementType: defaultRequirementType });
      setErrors({});
    } catch {
      setSubmitError("Failed to submit enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-[#f5f7f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left info panel */}
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[#009A9A] uppercase mb-4">
              We&apos;re here to help
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight mb-4">
              Send Us a{" "}
              <span className="text-[#009A9A]">Message</span>
            </h2>
            <div className="w-14 h-1 bg-[#009A9A] rounded-full mb-6" />
            <p className="text-gray-600 text-base sm:text-lg mb-10 leading-relaxed max-w-lg">
              Tell us your requirements and our team will get back to you with the right solution.
            </p>

            <div className="space-y-7 mb-10">
              {supportPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#009A9A] flex items-center justify-center flex-shrink-0 shadow-sm shadow-[#009A9A]/25">
                    <point.icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-bold text-gray-900 mb-1">{point.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#009A9A]/10 rounded-2xl p-6 border border-[#009A9A]/15">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#009A9A] flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#009A9A] mb-2">Need immediate help?</h3>
                  <p className="text-gray-800 mb-1">
                    Call us:{" "}
                    <a href="tel:8688778353" className="font-bold text-gray-900 hover:text-[#009A9A] transition-colors">
                      8688778353
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100">
            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-xl bg-[#009A9A]/10 border border-[#009A9A]/20 p-4">
                <CheckCircle2 className="w-5 h-5 text-[#009A9A] flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-[#007a7a]">{successMessage}</p>
              </div>
            )}

            {submitError && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FieldLabel htmlFor={`${contextType}-name`} required>
                    Name
                  </FieldLabel>
                  <IconInput
                    id={`${contextType}-name`}
                    icon={User}
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Your full name"
                    error={!!errors.name}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
                </div>

                <div>
                  <FieldLabel htmlFor={`${contextType}-company`}>Company Name</FieldLabel>
                  <IconInput
                    id={`${contextType}-company`}
                    icon={Building2}
                    value={formData.companyName}
                    onChange={(e) => updateField("companyName", e.target.value)}
                    placeholder="Your company name (optional)"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FieldLabel htmlFor={`${contextType}-email`} required>
                    Email
                  </FieldLabel>
                  <IconInput
                    id={`${contextType}-email`}
                    icon={Mail}
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="your.email@example.com"
                    error={!!errors.email}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
                </div>

                <div>
                  <FieldLabel htmlFor={`${contextType}-phone`} required>
                    Phone
                  </FieldLabel>
                  <IconInput
                    id={`${contextType}-phone`}
                    icon={Phone}
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+91 XXX XXX XXXX"
                    error={!!errors.phone}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1.5">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <FieldLabel htmlFor={`${contextType}-requirement`} required>
                  Requirement Type
                </FieldLabel>
                <div className="relative">
                  <Layers className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
                  <select
                    id={`${contextType}-requirement`}
                    value={formData.requirementType}
                    onChange={(e) => updateField("requirementType", e.target.value)}
                    aria-invalid={!!errors.requirementType}
                    className={`w-full h-11 appearance-none pl-10 pr-10 rounded-xl border bg-white text-sm outline-none transition-[color,box-shadow] focus:border-[#009A9A] focus:ring-[3px] focus:ring-[#009A9A]/20 ${
                      errors.requirementType ? "border-red-400" : "border-gray-200"
                    } ${!formData.requirementType ? "text-gray-400" : "text-gray-900"}`}
                  >
                    <option value="" disabled>
                      Select requirement type
                    </option>
                    {requirementOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                {errors.requirementType && (
                  <p className="text-xs text-red-500 mt-1.5">{errors.requirementType}</p>
                )}
              </div>

              <div>
                <FieldLabel htmlFor={`${contextType}-message`} required>
                  Message
                </FieldLabel>
                <div className="relative">
                  <Pencil className="absolute left-3.5 top-4 w-4 h-4 text-gray-400 pointer-events-none" />
                  <textarea
                    id={`${contextType}-message`}
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    aria-invalid={!!errors.message}
                    className={`w-full min-h-[140px] pl-10 pr-4 pt-3.5 pb-8 rounded-xl border bg-white text-sm text-gray-900 placeholder:text-gray-400 outline-none resize-none transition-[color,box-shadow] focus:border-[#009A9A] focus:ring-[3px] focus:ring-[#009A9A]/20 ${
                      errors.message ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  <span className="absolute bottom-3 right-4 text-xs text-gray-400">
                    {formData.message.length} / {MAX_MESSAGE_LENGTH}
                  </span>
                </div>
                {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2.5 h-12 px-6 bg-[#009A9A] text-white font-semibold rounded-xl hover:bg-[#008080] transition-colors shadow-md shadow-[#009A9A]/25 disabled:opacity-70"
              >
                <Send className="w-4 h-4" />
                {submitting ? "Submitting..." : "Send Enquiry"}
              </button>

              <p className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-1">
                <Lock className="w-3.5 h-3.5 text-[#009A9A]" />
                Your information is safe with us. We never share your data.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom trust/benefit bar */}
        <div className="mt-10 lg:mt-12 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-y-0 sm:divide-x divide-gray-100">
            {trustBenefits.map((benefit) => (
              <div
                key={benefit.label}
                className="flex items-center gap-3 justify-center sm:justify-start px-6 py-5 lg:py-6"
              >
                <div className="w-10 h-10 rounded-full bg-[#009A9A]/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-[#009A9A]" />
                </div>
                <span className="text-sm font-semibold text-gray-800">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
