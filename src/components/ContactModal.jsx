import { useEffect } from "react";
import PropTypes from "prop-types";
import { X } from "lucide-react";
import { InquiryForm } from "./InquiryForm.jsx";

export function ContactModal({ isOpen, onClose, defaultService = "" }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Container */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl transition-all border border-outline-variant">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-primary-container hover:text-white"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <InquiryForm
          title="Get in Touch with GK Immigrations"
          defaultService={defaultService}
          formType="modal"
        />
      </div>
    </div>
  );
}

ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  defaultService: PropTypes.string,
};
