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
      <div className="py-6 text-center text-xs text-slate-400 dark:text-slate-500 bg-slate-50/50 dark:bg-slate-850/50 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
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
        return <Archive className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'link':
        return <ExternalLink className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />;
      case 'doc':
        return <FileCode className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <div className="space-y-2">
      {resources.map((res) => (
        <div
          key={res.id}
          className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100/80 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white dark:bg-slate-900 shadow-xs border border-slate-200 dark:border-slate-700">
              {getFileIcon(res.fileType)}
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-800 dark:text-white">
                {res.title}
              </div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">
                {res.fileType} • {res.fileSize}
              </div>
            </div>
          </div>

          <button
            onClick={() => handleDownload(res)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>
        </div>
      ))}
    </div>
  );
};
