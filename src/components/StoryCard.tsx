'use client';

import Image from 'next/image';
import { Story, PORTAL_NAMES } from '@/types';
import { addUtmParams, formatDate } from '@/lib/data';
import { useState } from 'react';
import StoryModal from './StoryModal';

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    // Open modal on card click
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleReadMore = (e: React.MouseEvent) => {
    // Stop propagation and open URL
    e.stopPropagation();
    window.open(addUtmParams(story.url), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <article
        className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300 cursor-pointer flex flex-col"
        onClick={handleCardClick}
      >
        {/* Image */}
        <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
          {story.image ? (
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : story.entrepreneurPhoto ? (
            <Image
              src={story.entrepreneurPhoto}
              alt="Podjetnik"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <span className="text-4xl font-black text-white/10">P</span>
            </div>
          )}
          {/* Badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500 text-white">
              #Podjetno
            </span>
          </div>
          {/* Video badge */}
          {story.hasVideo && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-900/80 text-white">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                Video
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Meta */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <span className="font-medium text-slate-700">
              {PORTAL_NAMES[story.portal] || story.portal}
            </span>
            <span>•</span>
            <span>{story.region}</span>
            <span>•</span>
            <time dateTime={story.date}>{formatDate(story.date)}</time>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
            {story.title}
          </h3>

          {/* Dek */}
          <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-grow">
            {story.dek}
          </p>

          {/* Company & Tags */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
            {story.companyName !== '—' && (
              <span className="text-xs font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded">
                {story.companyName}
              </span>
            )}
            <button
              onClick={handleReadMore}
              className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors ml-auto inline-flex items-center gap-1"
            >
              Preberi
              <svg
                className="w-4 h-4"
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
            </button>
          </div>
        </div>
      </article>

      {/* Quick-view Modal */}
      <StoryModal
        story={story}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
