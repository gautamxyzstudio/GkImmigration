import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  X,
  Clock,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  FileText,
  Globe,
} from "lucide-react";

export function VisaDetailModal({ country, isOpen, onClose, onApply }) {
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

  if (!isOpen || !country) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Container */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl transition-all border border-outline-variant text-slate-800"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-country-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur transition hover:bg-slate-900 hover:scale-105"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* Hero Banner with Country Landmark Image */}
        <div className="relative h-52 w-full overflow-hidden bg-slate-900">
          <img
            src={country.image}
            alt={`${country.name} landmark`}
            className="h-full w-full object-cover brightness-90 transition duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

          {/* Flag and Title Overlay */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 border-white shadow-lg bg-white flex items-center justify-center p-0.5">
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-0.5 text-xs font-medium text-white backdrop-blur border border-white/20 mb-1.5">
                <Globe size={13} />
                Destination Visa Guide
              </span>
              <h2
                id="modal-country-title"
                className="font-heading text-2xl font-bold text-white drop-shadow-sm"
              >
                {country.name} Visa Information
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 space-y-6">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-slate-100 bg-surface-container-low p-3.5 text-center">
              <div className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock size={16} />
              </div>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Processing Time
              </p>
              <p className="font-heading text-sm font-bold text-primary-container mt-0.5">
                {country.processingTime}
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-surface-container-low p-3.5 text-center">
              <div className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Calendar size={16} />
              </div>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Stay / Validity
              </p>
              <p className="font-heading text-sm font-bold text-primary-container mt-0.5">
                {country.validity}
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1 rounded-xl border border-slate-100 bg-surface-container-low p-3.5 text-center">
              <div className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <ShieldCheck size={16} />
              </div>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Approval Rate
              </p>
              <p className="font-heading text-sm font-bold text-emerald-600 mt-0.5">
                High Approval
              </p>
            </div>
          </div>

          {/* Visa Categories */}
          <div>
            <h3 className="font-heading text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <FileText size={15} className="text-secondary-container" /> Available Visa Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {country.visaTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-lg bg-primary-fixed/50 px-3 py-1 text-xs font-semibold text-primary border border-primary/10"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-sm leading-relaxed text-slate-600">
              {country.description}
            </p>
          </div>

          {/* Requirements Checklist */}
          <div className="rounded-xl bg-slate-50/80 p-4 border border-slate-200/80">
            <h3 className="font-heading text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 size={17} className="text-emerald-600" /> Essential Document Checklist
            </h3>
            <ul className="grid gap-2.5 sm:grid-cols-2 text-xs text-slate-700">
              {country.keyRequirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Action */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              Get personalized assistance and document review for {country.name}.
            </p>
            <button
              onClick={() => {
                onClose();
                if (onApply) onApply(country.name);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white shadow-md transition hover:bg-primary-container hover:shadow-lg active:scale-95 shrink-0"
            >
              Apply / Inquire Now
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

VisaDetailModal.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    flag: PropTypes.string,
    image: PropTypes.string,
    visaTypes: PropTypes.arrayOf(PropTypes.string),
    processingTime: PropTypes.string,
    validity: PropTypes.string,
    description: PropTypes.string,
    keyRequirements: PropTypes.arrayOf(PropTypes.string),
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onApply: PropTypes.func,
};
