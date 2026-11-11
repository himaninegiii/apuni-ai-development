import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { sampleTrackerRecords } from '../data/sampleTrackerRecords';
import { TrackerRecord } from '../types';
import {
  Search,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileText,
  Download,
  Building,
  User,
  MapPin,
  Calendar,
  Printer,
  X,
  ShieldAlert
} from 'lucide-react';

export const TrackerPage: React.FC = () => {
  const { t, language } = useApp();
  const [refInput, setRefInput] = useState('UK-REV-2026-8819');
  const [searchedRecord, setSearchedRecord] = useState<TrackerRecord | null>(
    sampleTrackerRecords['UK-REV-2026-8819']
  );
  const [searchError, setSearchError] = useState<string | null>(null);
  const [showSlipModal, setShowSlipModal] = useState(false);

  const sampleKeys = Object.keys(sampleTrackerRecords);

  const handleSearch = (keyToSearch?: string) => {
    const key = (keyToSearch || refInput).trim().toUpperCase();
    if (!key) return;

    if (sampleTrackerRecords[key]) {
      setSearchedRecord(sampleTrackerRecords[key]);
      setSearchError(null);
    } else {
      setSearchedRecord(null);
      setSearchError(
        language === 'en'
          ? `Reference "${key}" not found in demonstration dataset. Please click one of the sample numbers below.`
          : `संदर्भ संख्या "${key}" नमूना डेटा में नहीं मिली। कृपया नीचे दिए गए परीक्षण नंबरों में से किसी एक को चुनें।`
      );
    }
  };

  const getStatusBadge = (status: TrackerRecord['currentStatus']) => {
    switch (status) {
      case 'approved_ready':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.trackerPage.statusApproved}</span>
          </span>
        );
      case 'under_verification':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>{t.trackerPage.statusUnderVerification}</span>
          </span>
        );
      case 'clarification_needed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-900 border border-rose-300">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
            <span>{t.trackerPage.statusClarification}</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900 border border-sky-300">
            <Clock className="w-3.5 h-3.5 text-sky-700" />
            <span>{t.trackerPage.statusSubmitted}</span>
          </span>
        );
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 sm:p-8 shadow-2xs space-y-4">
        <div>
          <span className="text-xs font-bold text-[#D98B36] uppercase tracking-wider">
            {language === 'en' ? 'Demonstration Inquiry Desk' : 'नमूना स्थिति जांच केंद्र'}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#183153] mt-1 break-words">
            {t.trackerPage.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#5A6A80] mt-1">
            {t.trackerPage.subtitle}
          </p>
        </div>

        {/* Prominent Demonstration & Simulation Banner */}
        <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-950">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed break-words">
            <strong className="font-bold">
              {language === 'en' ? 'Simulation Notice: ' : 'प्रदर्शन सूचना: '}
            </strong>
            <span>{t.trackerPage.demoBanner}</span>
          </div>
        </div>

        {/* Input & Search Form */}
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSearch();
          }}
          className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3"
        >
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#5A6A80] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={refInput}
              onChange={e => setRefInput(e.target.value)}
              placeholder={t.trackerPage.placeholder}
              className="w-full pl-10 pr-4 py-2.5 min-h-[44px] rounded-lg border border-[#E5E7EB] font-mono text-xs sm:text-sm text-[#183153] placeholder-[#5A6A80] focus:outline-none focus:border-[#183153] bg-[#F5F7FA] focus:bg-white transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 min-h-[44px] rounded-lg bg-[#183153] hover:bg-[#12253E] text-white text-xs sm:text-sm font-bold transition-all shadow-2xs shrink-0 flex items-center justify-center"
          >
            {t.trackerPage.trackButton}
          </button>
        </form>

        {/* Sample Reference Numbers Buttons */}
        <div className="pt-2">
          <div className="text-xs text-[#5A6A80] font-semibold mb-2">
            {t.trackerPage.sampleNotice}
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {sampleKeys.map(key => (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setRefInput(key);
                  handleSearch(key);
                }}
                className={`text-xs font-mono py-1.5 px-2.5 sm:px-3 min-h-[38px] rounded-lg border transition-all flex items-center justify-center ${
                  refInput.toUpperCase() === key
                    ? 'bg-[#183153] text-white border-[#183153]'
                    : 'bg-[#F5F7FA] text-[#183153] border-[#E5E7EB] hover:bg-slate-200'
                }`}
              >
                {key} ({sampleTrackerRecords[key].serviceId.split('-')[0]})
              </button>
            ))}
          </div>
        </div>
      </div>

      {searchError && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm break-words">
          {searchError}
        </div>
      )}

      {/* Searched Record Display */}
      {searchedRecord && (
        <div className="space-y-6">
          {/* Summary Card */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 sm:p-8 shadow-2xs space-y-5 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-[#E5E7EB]">
              <div>
                <span className="text-xs font-mono text-[#5A6A80] uppercase tracking-wider">
                  Reference: {searchedRecord.referenceNumber}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#183153] mt-0.5 break-words">
                  {searchedRecord.serviceTitle[language]}
                </h2>
              </div>
              <div className="self-start sm:self-auto">{getStatusBadge(searchedRecord.currentStatus)}</div>
            </div>

            {/* Applicant Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs">
              <div className="p-3.5 rounded-lg bg-[#F5F7FA] border border-[#E5E7EB]">
                <span className="text-[#5A6A80] block mb-0.5">
                  {language === 'en' ? 'Applicant Name' : 'आवेदक का नाम'}
                </span>
                <strong className="text-[#183153] font-semibold text-sm break-words">
                  {searchedRecord.applicantName}
                </strong>
              </div>

              <div className="p-3.5 rounded-lg bg-[#F5F7FA] border border-[#E5E7EB]">
                <span className="text-[#5A6A80] block mb-0.5">
                  {language === 'en' ? 'Jurisdiction (District/Tehsil)' : 'ज़िला एवं तहसील'}
                </span>
                <strong className="text-[#183153] font-semibold text-sm break-words">
                  {searchedRecord.tehsil}, {searchedRecord.district}
                </strong>
              </div>

              <div className="p-3.5 rounded-lg bg-[#F5F7FA] border border-[#E5E7EB]">
                <span className="text-[#5A6A80] block mb-0.5">
                  {language === 'en' ? 'Date of Application' : 'आवेदन की तिथि'}
                </span>
                <strong className="text-[#183153] font-semibold text-sm tabular-nums">
                  {searchedRecord.appliedDate}
                </strong>
              </div>

              <div className="p-3.5 rounded-lg bg-[#F5F7FA] border border-[#E5E7EB]">
                <span className="text-[#5A6A80] block mb-0.5">
                  {language === 'en' ? 'Target Completion (RTS)' : 'अपेक्षित पूर्णता तिथि'}
                </span>
                <strong className="text-[#183153] font-semibold text-sm tabular-nums">
                  {searchedRecord.estimatedCompletion}
                </strong>
              </div>
            </div>

            {/* Current Officer / Remarks */}
            <div className="p-4 rounded-xl bg-[#F5F7FA] border border-[#E5E7EB] space-y-1 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-[#183153]">
                  {language === 'en' ? 'Current Dealing Officer / Desk:' : 'वर्तमान निस्तारण अधिकारी:'}
                </span>
                <span className="text-[#183153] font-semibold">{searchedRecord.currentOfficer}</span>
              </div>
              <p className="text-[#5A6A80] leading-relaxed pt-1 break-words">
                <strong className="text-[#183153]">{language === 'en' ? 'Latest Status Remark: ' : 'नवीनतम टिप्पणी: '}</strong>
                {searchedRecord.remarks[language]}
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowSlipModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-[#183153] hover:bg-[#12253E] text-white text-xs font-bold transition-all shadow-2xs"
              >
                <Download className="w-3.5 h-3.5 text-[#D98B36]" />
                <span>{t.trackerPage.downloadSlip}</span>
              </button>
            </div>
          </div>

          {/* Verification Timeline */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 sm:p-8 shadow-2xs space-y-6 overflow-hidden">
            <h3 className="text-base font-bold text-[#183153]">
              {language === 'en' ? 'Processing Lifecycle Timeline' : 'आवेदन प्रक्रिया समय-सारणी'}
            </h3>

            <div className="relative pl-8 sm:pl-10 space-y-6 sm:space-y-8 before:absolute before:left-3.5 sm:before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E5E7EB]">
              {searchedRecord.timeline.map((step, idx) => {
                const isCompleted = step.status === 'completed';
                const isInProgress = step.status === 'in_progress';
                return (
                  <div key={idx} className="relative flex items-start gap-4">
                    {/* Timeline Node */}
                    <div
                      className={`absolute left-0.5 sm:left-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                        isCompleted
                          ? 'bg-[#47745A] border-[#47745A] text-white'
                          : isInProgress
                          ? 'bg-[#D98B36] border-[#D98B36] text-white'
                          : 'bg-white border-[#E5E7EB] text-[#5A6A80]'
                      }`}
                    >
                      {isCompleted ? '✓' : idx + 1}
                    </div>

                    {/* Step details */}
                    <div className="flex-1 space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4
                          className={`text-sm font-bold break-words ${
                            isCompleted
                              ? 'text-[#183153]'
                              : isInProgress
                              ? 'text-[#D98B36]'
                              : 'text-[#5A6A80]'
                          }`}
                        >
                          {language === 'en' ? step.stage : step.stageHi}
                        </h4>
                        <span className="text-xs text-[#5A6A80] font-mono tabular-nums">
                          {step.date}
                        </span>
                      </div>
                      <div className="text-xs text-[#5A6A80] break-words">
                        Authority: <span className="font-medium text-[#183153]">{step.authority}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Simulated Receipt Slip Modal */}
      {showSlipModal && searchedRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-xl w-full p-4 sm:p-8 shadow-xl border border-[#E5E7EB] max-h-[90vh] overflow-y-auto space-y-5 sm:space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB] gap-2">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#D98B36]">
                  Demonstration Receipt · गैर-विधिक नमूना पावती
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#183153] break-words">
                  Apuni AI Demonstration Acknowledgement Slip
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSlipModal(false)}
                className="p-1.5 rounded-lg text-[#5A6A80] hover:text-[#183153] hover:bg-[#F5F7FA] shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3.5 sm:p-4 rounded-lg bg-[#F5F7FA] border border-[#E5E7EB] space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pb-3 border-b border-[#E5E7EB]">
                <div>
                  <span className="text-[#5A6A80]">Acknowledgement No:</span>
                  <div className="font-mono font-bold text-[#183153] break-all">{searchedRecord.referenceNumber}</div>
                </div>
                <div>
                  <span className="text-[#5A6A80]">Service:</span>
                  <div className="font-bold text-[#183153] break-words">{searchedRecord.serviceTitle[language]}</div>
                </div>
                <div>
                  <span className="text-[#5A6A80]">Applicant:</span>
                  <div className="font-bold text-[#183153] break-words">{searchedRecord.applicantName}</div>
                </div>
                <div>
                  <span className="text-[#5A6A80]">Jurisdiction:</span>
                  <div className="font-bold text-[#183153] break-words">{searchedRecord.tehsil}, {searchedRecord.district}</div>
                </div>
              </div>

              <div className="text-[11px] text-[#5A6A80] space-y-1">
                <div><strong className="text-[#183153]">Current Stage:</strong> {searchedRecord.remarks[language]}</div>
                <div><strong className="text-[#183153]">RTS Act Mandated Window:</strong> {searchedRecord.estimatedCompletion}</div>
              </div>

              <div className="p-2.5 rounded bg-amber-50 text-amber-900 text-[10px] border border-amber-200">
                * Note: This is an educational demonstration receipt created by Apuni AI. Official state certificates must be acquired via eservices.uk.gov.in or Tehsil offices.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-3 border-t border-[#E5E7EB]">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-lg bg-[#F5F7FA] hover:bg-slate-200 text-[#183153] border border-[#E5E7EB] text-xs font-semibold"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Slip</span>
              </button>
              <button
                type="button"
                onClick={() => setShowSlipModal(false)}
                className="px-4 py-2.5 min-h-[44px] rounded-lg bg-[#183153] hover:bg-[#12253E] text-white text-xs font-bold transition-colors flex items-center justify-center"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
