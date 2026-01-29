'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Story, PORTAL_NAMES } from '@/types';
import { addUtmParams, formatDate } from '@/lib/data';

interface StoryModalProps {
  story: Story;
  isOpen: boolean;
  onClose: () => void;
}

export default function StoryModal({ story, isOpen, onClose }: StoryModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
          aria-label="Zapri"
        >
          <svg
            className="w-5 h-5 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image */}
        <div className="relative aspect-[16/9] bg-slate-100">
          {story.image ? (
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 640px"
            />
          ) : story.entrepreneurPhoto ? (
            <Image
              src={story.entrepreneurPhoto}
              alt="Podjetnik"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 640px"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <span className="text-6xl font-black text-white/10">P</span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-green-500 text-white">
              #Podjetno
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-4">
            <span className="font-medium text-slate-700">
              {PORTAL_NAMES[story.portal] || story.portal}
            </span>
            <span>•</span>
            <span>{story.region}</span>
            <span>•</span>
            <time dateTime={story.date}>{formatDate(story.date)}</time>
          </div>

          {/* Title */}
          <h2
            id="modal-title"
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
          >
            {story.title}
          </h2>

          {/* Dek */}
          <p className="text-slate-600 text-lg mb-6">{story.dek}</p>

          {/* CTA */}
          <a
            href={addUtmParams(story.url)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors gap-2 mb-6"
          >
            Preberi celotno zgodbo
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>

          {/* Company Facts */}
          <div className="bg-slate-50 rounded-xl p-5 mb-6">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
              O podjetju
            </h3>
            <p className="text-slate-700 mb-4">{story.companyFacts.oneLiner}</p>

            {(story.companyFacts.employees ||
              story.companyFacts.founded ||
              story.companyName !== '—') && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                {story.companyName !== '—' && (
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Podjetje</div>
                    <div className="font-semibold text-slate-900">
                      {story.companyName}
                    </div>
                  </div>
                )}
                {story.companyFacts.employees && (
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Zaposleni</div>
                    <div className="font-semibold text-slate-900">
                      {story.companyFacts.employees}
                    </div>
                  </div>
                )}
                {story.companyFacts.founded && (
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Ustanovljeno</div>
                    <div className="font-semibold text-slate-900">
                      {story.companyFacts.founded}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {story.industryTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
