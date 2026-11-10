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
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-4 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div>
          <span className="text-xs font-bold text-[#F29B38] uppercase tracking-wider">
            {language === 'en' ? 'Demonstration Inquiry Desk' : 'नमूना स्थिति जांच केंद्र'}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#142B4A] mt-1">
            {t.trackerPage.title}
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            {t.trackerPage.subtitle}
          </p>
        </div>

        {/* Prominent Demonstration & Simulation Banner */}
        <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-950">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
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
          className="pt-2 flex flex-col sm:flex-row gap-3"
        >
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={refInput}
              onChange={e => setRefInput(e.target.value)}
              placeholder={t.trackerPage.placeholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 font-mono text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#142B4A] bg-slate-50 focus:bg-white transition-colors"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-[#142B4A] hover:bg-[#0D1C30] text-white text-xs sm:text-sm font-bold transition-all shadow-xs shrink-0"
          >
            {t.trackerPage.trackButton}
          </button>
        </form>

        {/* Sample Reference Numbers Buttons */}
        <div className="pt-2">
          <div className="text-xs text-slate-500 font-semibold mb-2">
            {t.trackerPage.sampleNotice}
          </div>
          <div className="flex flex-wrap gap-2">
            {sampleKeys.map(key => (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setRefInput(key);
                  handleSearch(key);
                }}
                className={`text-xs font-mono py-1.5 px-3 rounded-lg border transition-all ${
                  refInput.toUpperCase() === key
                    ? 'bg-[#142B4A] text-white border-[#142B4A]'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {key} ({sampleTrackerRecords[key].serviceId.split('-')[0]})
              </button>
            ))}
          </div>
        </div>
      </div>

      {searchError && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm">
          {searchError}
        </div>
      )}

      {/* Searched Record Display */}
      {searchedRecord && (
        <div className="space-y-6">
          {/* Summary Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Reference: {searchedRecord.referenceNumber}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#142B4A] mt-0.5">
                  {searchedRecord.serviceTitle[language]}
                </h2>
              </div>
              <div>{getStatusBadge(searchedRecord.currentStatus)}</div>
            </div>

            {/* Applicant Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block mb-0.5">
                  {language === 'en' ? 'Applicant Name' : 'आवेदक का नाम'}
                </span>
                <strong className="text-slate-900 font-semibold text-sm">
                  {searchedRecord.applicantName}
                </strong>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block mb-0.5">
                  {language === 'en' ? 'Jurisdiction (District/Tehsil)' : 'ज़िला एवं तहसील'}
                </span>
                <strong className="text-slate-900 font-semibold text-sm">
                  {searchedRecord.tehsil}, {searchedRecord.district}
                </strong>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block mb-0.5">
                  {language === 'en' ? 'Date of Application' : 'आवेदन की तिथि'}
                </span>
                <strong className="text-slate-900 font-semibold text-sm tabular-nums">
                  {searchedRecord.appliedDate}
                </strong>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block mb-0.5">
                  {language === 'en' ? 'Target Completion (RTS)' : 'अपेक्षित पूर्णता तिथि'}
                </span>
                <strong className="text-slate-900 font-semibold text-sm tabular-nums">
                  {searchedRecord.estimatedCompletion}
                </strong>
              </div>
            </div>

            {/* Current Officer / Remarks */}
            <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#142B4A]">
                  {language === 'en' ? 'Current Dealing Officer / Desk:' : 'वर्तमान निस्तारण अधिकारी:'}
                </span>
                <span className="text-sky-800 font-medium">{searchedRecord.currentOfficer}</span>
              </div>
              <p className="text-slate-700 leading-relaxed pt-1">
                <strong>{language === 'en' ? 'Latest Status Remark: ' : 'नवीनतम टिप्पणी: '}</strong>
                {searchedRecord.remarks[language]}
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowSlipModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#142B4A] hover:bg-[#0D1C30] text-white text-xs font-bold transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-[#F29B38]" />
                <span>{t.trackerPage.downloadSlip}</span>
              </button>
            </div>
          </div>

          {/* Verification Timeline */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <h3 className="text-base font-bold text-[#142B4A]">
              {language === 'en' ? 'Processing Lifecycle Timeline' : 'आवेदन प्रक्रिया समय-सारणी'}
            </h3>

            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {searchedRecord.timeline.map((step, idx) => {
                const isCompleted = step.status === 'completed';
                const isInProgress = step.status === 'in_progress';
                return (
                  <div key={idx} className="relative flex items-start gap-4">
                    {/* Timeline Node */}
                    <div
                      className={`absolute -left-6 sm:-left-8 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                        isCompleted
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : isInProgress
                          ? 'bg-amber-500 border-amber-500 text-white animate-pulse'
                          : 'bg-white border-slate-300 text-slate-400'
                      }`}
                    >
                      {isCompleted ? '✓' : idx + 1}
                    </div>

                    {/* Step details */}
                    <div className="flex-1 space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4
                          className={`text-sm font-bold ${
                            isCompleted
                              ? 'text-slate-900'
                              : isInProgress
                              ? 'text-amber-900'
                              : 'text-slate-500'
                          }`}
                        >
                          {language === 'en' ? step.stage : step.stageHi}
                        </h4>
                        <span className="text-xs text-slate-500 font-mono tabular-nums">
                          {step.date}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500">
                        Authority: <span className="font-medium text-slate-700">{step.authority}</span>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#F29B38]">
                  Demonstration Receipt · गैर-विधिक नमूना पावती
                </span>
                <h3 className="text-base font-bold text-[#142B4A]">
                  Apuni AI Demonstration Acknowledgement Slip
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSlipModal(false)}
                className="p-1 rounded text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-200">
                <div>
                  <span className="text-slate-500">Acknowledgement No:</span>
                  <div className="font-mono font-bold text-slate-900">{searchedRecord.referenceNumber}</div>
                </div>
                <div>
                  <span className="text-slate-500">Service:</span>
                  <div className="font-bold text-slate-900">{searchedRecord.serviceTitle[language]}</div>
                </div>
                <div>
                  <span className="text-slate-500">Applicant:</span>
                  <div className="font-bold text-slate-900">{searchedRecord.applicantName}</div>
                </div>
                <div>
                  <span className="text-slate-500">Jurisdiction:</span>
                  <div className="font-bold text-slate-900">{searchedRecord.tehsil}, {searchedRecord.district}</div>
                </div>
              </div>

              <div className="text-[11px] text-slate-600 space-y-1">
                <div><strong>Current Stage:</strong> {searchedRecord.remarks[language]}</div>
                <div><strong>RTS Act Mandated Window:</strong> {searchedRecord.estimatedCompletion}</div>
              </div>

              <div className="p-2.5 rounded bg-amber-50 text-amber-900 text-[10px] border border-amber-200">
                * Note: This is an educational demonstration receipt created by Apuni AI. Official state certificates must be acquired via eservices.uk.gov.in or Tehsil offices.
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Slip</span>
              </button>
              <button
                type="button"
                onClick={() => setShowSlipModal(false)}
                className="px-4 py-2 rounded-lg bg-[#142B4A] text-white text-xs font-bold"
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
