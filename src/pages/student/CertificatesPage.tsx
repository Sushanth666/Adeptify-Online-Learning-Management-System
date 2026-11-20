import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck, Download, Search, CheckCircle, ExternalLink, Calendar } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCertificates } from '../../store/slices/learningSlice';
import { CertificateModal } from '../../components/common/CertificateModal';
import { Certificate } from '../../types';
import { showToast } from '../../store/slices/uiSlice';

export const CertificatesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const certificates = useAppSelector((state) => state.learning.certificates);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [verifyId, setVerifyId] = useState('');
  const [verificationResult, setVerificationResult] = useState<Certificate | null | 'not_found'>(null);

  useEffect(() => {
    dispatch(fetchCertificates());
  }, [dispatch]);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyId.trim()) return;

    const found = certificates.find(
      (c) =>
        c.id.toLowerCase() === verifyId.trim().toLowerCase() ||
        c.certificateNumber.toLowerCase() === verifyId.trim().toLowerCase()
    );

    if (found) {
      setVerificationResult(found);
      dispatch(showToast({ message: 'Certificate verified successfully!', type: 'success' }));
    } else {
      setVerificationResult('not_found');
      dispatch(showToast({ message: 'No matching certificate found in Adeptify records', type: 'error' }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Verified Certificates of Completion
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Share your verifiable achievements with employers, LinkedIn, and peer networks.
        </p>
      </div>

      {/* Verify Certificate Tool */}
      <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/60 border border-emerald-100 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h3 className="font-bold text-slate-900 text-base">Public Credential Verification</h3>
        </div>
        <p className="text-xs text-slate-600 max-w-xl">
          Enter an Adeptify India certificate code (e.g. <code>EP-IND-2024-UIUX-9981</code>) to instantly verify issuance validity, student name, and graduation grade.
        </p>

        <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3 max-w-lg">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="e.g. EP-IND-2024-UIUX-9981"
              value={verifyId}
              onChange={(e) => setVerifyId(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs"
          >
            Verify Credential
          </button>
        </form>

        {verificationResult && verificationResult !== 'not_found' && (
          <div className="p-4 rounded-2xl bg-white border border-emerald-200 flex items-center justify-between text-xs max-w-lg animate-in fade-in">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <div>
                <div className="font-bold text-slate-900">{verificationResult.studentName}</div>
                <div className="text-slate-500">{verificationResult.courseTitle}</div>
                <div className="text-[10px] text-emerald-700 font-semibold">{verificationResult.grade}</div>
              </div>
            </div>
            <button
              onClick={() => setSelectedCert(verificationResult)}
              className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100"
            >
              View Seal
            </button>
          </div>
        )}

        {verificationResult === 'not_found' && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 max-w-lg">
            Certificate ID not recognized. Please double-check your code.
          </div>
        )}
      </div>

      {/* Certificates Gallery */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">
          Your Earned Credentials ({certificates.length})
        </h2>

        {certificates.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <Award className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No certificates earned yet</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Finish 100% of all lectures and assignments in any course to automatically generate your official diploma!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full pointer-events-none" />

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-600">
                    <Award className="w-6 h-6" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Certified Credential
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2">
                    {cert.courseTitle}
                  </h3>

                  <p className="text-xs text-slate-500">
                    Recipient: <strong className="text-slate-800">{cert.studentName}</strong>
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center justify-between">
                    <span>Issued Date:</span>
                    <span className="font-semibold text-slate-700">{cert.issueDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Graduation Grade:</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {cert.grade}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">
                    ID: {cert.certificateNumber}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>View Official Certificate</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </div>
  );
};

