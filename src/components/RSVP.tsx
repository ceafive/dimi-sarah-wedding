"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  attendance: "attending" | "not-attending" | "";
  guests: string;
  dietary: string;
  message: string;
}

interface SubmitResponse {
  success: boolean;
  message: string;
  error?: string;
}

export default function RSVP() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    attendance: "",
    guests: "1",
    dietary: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<SubmitResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          attendance: formData.attendance,
          guests: formData.attendance === "attending" ? formData.guests : "0",
          dietary: formData.dietary,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmitResult({
          success: false,
          message: data.error || "Something went wrong. Please try again.",
        });
      } else {
        setSubmitResult({
          success: true,
          message: data.message,
        });
      }
    } catch {
      setSubmitResult({
        success: false,
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (submitResult?.success) {
    return (
      <section id="rsvp" className="py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-[#9CAF88] flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl text-[#3D3D3D] mb-4">
              Thank You!
            </h2>
            <p className="text-[#5A5A5A]">{submitResult.message}</p>
            <button
              onClick={() => {
                setSubmitResult(null);
                setFormData({
                  name: "",
                  email: "",
                  attendance: "",
                  guests: "1",
                  dietary: "",
                  message: "",
                });
              }}
              className="mt-6 text-[#9CAF88] hover:text-[#7A9568] font-medium"
            >
              Submit another RSVP
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-24 px-6 bg-[#FAF8F5]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#9CAF88] uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Will you join us?
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#3D3D3D] mb-4">
            RSVP
          </h2>
          <div className="w-16 h-px bg-[#C9A962] mx-auto mb-6" />
          <p className="text-[#5A5A5A]">Please respond by 1st July 2025</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
        >
          {/* Error message */}
          {submitResult && !submitResult.success && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {submitResult.message}
            </div>
          )}

          <div className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#3D3D3D] mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E8DCD5] focus:border-[#9CAF88] focus:ring-2 focus:ring-[#9CAF88]/20 outline-none transition-all text-[#3D3D3D]"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#3D3D3D] mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E8DCD5] focus:border-[#9CAF88] focus:ring-2 focus:ring-[#9CAF88]/20 outline-none transition-all text-[#3D3D3D]"
                placeholder="your@email.com"
              />
            </div>

            {/* Attendance */}
            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-3">
                Will you be attending? *
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <label
                  className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    formData.attendance === "attending"
                      ? "border-[#9CAF88] bg-[#9CAF88]/10"
                      : "border-[#E8DCD5] hover:border-[#9CAF88]/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="attending"
                    checked={formData.attendance === "attending"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <svg
                    className={`w-6 h-6 ${
                      formData.attendance === "attending"
                        ? "text-[#9CAF88]"
                        : "text-[#E8DCD5]"
                    }`}
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium text-[#3D3D3D]">
                    Joyfully Accept
                  </span>
                </label>
                <label
                  className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    formData.attendance === "not-attending"
                      ? "border-[#9CAF88] bg-[#9CAF88]/10"
                      : "border-[#E8DCD5] hover:border-[#9CAF88]/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="not-attending"
                    checked={formData.attendance === "not-attending"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <svg
                    className={`w-6 h-6 ${
                      formData.attendance === "not-attending"
                        ? "text-[#9CAF88]"
                        : "text-[#E8DCD5]"
                    }`}
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium text-[#3D3D3D]">
                    Regretfully Decline
                  </span>
                </label>
              </div>
            </div>

            {/* Number of Guests - only show if attending */}
            {formData.attendance === "attending" && (
              <>
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-[#3D3D3D] mb-2"
                  >
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#E8DCD5] focus:border-[#9CAF88] focus:ring-2 focus:ring-[#9CAF88]/20 outline-none transition-all text-[#3D3D3D] bg-white"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>

                {/* Dietary Requirements */}
                <div>
                  <label
                    htmlFor="dietary"
                    className="block text-sm font-medium text-[#3D3D3D] mb-2"
                  >
                    Dietary Requirements
                  </label>
                  <input
                    type="text"
                    id="dietary"
                    name="dietary"
                    value={formData.dietary}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#E8DCD5] focus:border-[#9CAF88] focus:ring-2 focus:ring-[#9CAF88]/20 outline-none transition-all text-[#3D3D3D]"
                    placeholder="Vegetarian, vegan, allergies, etc."
                  />
                </div>
              </>
            )}

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#3D3D3D] mb-2"
              >
                Message for the Couple
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E8DCD5] focus:border-[#9CAF88] focus:ring-2 focus:ring-[#9CAF88]/20 outline-none transition-all text-[#3D3D3D] resize-none"
                placeholder="Share your well wishes..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.attendance}
              className="w-full bg-[#9CAF88] text-white py-4 rounded-full font-medium text-lg hover:bg-[#7A9568] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send RSVP"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
