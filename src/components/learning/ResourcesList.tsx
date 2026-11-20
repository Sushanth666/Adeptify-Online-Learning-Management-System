import React from 'react';
import { FileText, Archive, FileCode, ExternalLink, Download } from 'lucide-react';
import { Resource } from '../../types';
import { useAppDispatch } from '../../store';
import { showToast } from '../../store/slices/uiSlice';

interface ResourcesListProps {
  resources?: Resource[];
}

export const ResourcesList: React.FC<ResourcesListProps> = ({ resources = [] }) => {
  const dispatch = useAppDispatch();

  if (resources.length === 0) {
    return (
      <div className="py-6 text-center text-xs text-slate-400 bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
        No downloadable resources attached to this lesson.
      </div>
    );
  }

  const handleDownload = (res: Resource) => {
    dispatch(showToast({
      message: `Downloading "${res.title}" (${res.fileSize})...`,
      type: 'info'
    }));
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'zip':
        return <Archive className="w-4 h-4 text-amber-600" />;
      case 'link':
        return <ExternalLink className="w-4 h-4 text-emerald-700" />;
      case 'doc':
        return <FileCode className="w-4 h-4 text-emerald-600" />;
      default:
        return <FileText className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <div className="space-y-2">
      {resources.map((res) => (
        <div
          key={res.id}
          className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white shadow-xs border border-slate-200">
              {getFileIcon(res.fileType)}
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-800">
                {res.title}
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                {res.fileType} • {res.fileSize}
              </div>
            </div>
          </div>

          <button
            onClick={() => handleDownload(res)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-emerald-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-emerald-600 transition-colors shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>
        </div>
      ))}
    </div>
  );
};

