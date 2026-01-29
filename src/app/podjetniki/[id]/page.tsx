import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getStories, getStoryById, addUtmParams, formatDate } from '@/lib/data';
import { PORTAL_NAMES } from '@/types';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const stories = getStories();
  return stories.map((story) => ({
    id: story.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const story = getStoryById(id);

  if (!story) {
    return {
      title: 'Zgodba ni najdena',
    };
  }

  const title = `${story.title} | PODJETNO`;
  const description = story.dek;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      locale: 'sl_SI',
      url: `https://podjetno.mojimediji.si/podjetniki/${story.id}`,
      siteName: 'PODJETNO',
      images: story.entrepreneurPhoto
        ? [
            {
              url: story.entrepreneurPhoto,
              width: 1200,
              height: 630,
              alt: story.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: story.entrepreneurPhoto ? [story.entrepreneurPhoto] : undefined,
    },
    alternates: {
      canonical: `https://podjetno.mojimediji.si/podjetniki/${story.id}`,
    },
  };
}

export default async function EntrepreneurPage({ params }: PageProps) {
  const { id } = await params;
  const story = getStoryById(id);

  if (!story) {
    notFound();
  }

  return (
    <article className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back link */}
        <Link
          href="/zgodbe"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-8"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Vse zgodbe
        </Link>

        {/* Header */}
        <header className="mb-8">
          {/* Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-green-500 text-white">
              #Podjetno
            </span>
          </div>

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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {story.title}
          </h1>

          {/* Dek */}
          <p className="text-xl text-slate-600 leading-relaxed">{story.dek}</p>
        </header>

        {/* Image */}
        {(story.image || story.entrepreneurPhoto) && (
          <div className="relative aspect-[16/9] bg-slate-100 rounded-2xl overflow-hidden mb-8">
            <Image
              src={story.image || story.entrepreneurPhoto!}
              alt={story.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>
        )}

        {/* CTA */}
        <div className="mb-10">
          <a
            href={addUtmParams(story.url)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors gap-2 text-lg"
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
        </div>

        {/* Company Facts */}
        <section className="bg-slate-50 rounded-2xl p-6 md:p-8 mb-10">
          <h2 className="text-lg font-semibold text-slate-500 uppercase tracking-wide mb-4">
            O podjetju
          </h2>
          <p className="text-lg text-slate-700 mb-6">{story.companyFacts.oneLiner}</p>

          {(story.companyFacts.employees ||
            story.companyFacts.founded ||
            story.companyName !== '—') && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              {story.companyName !== '—' && (
                <div>
                  <div className="text-sm text-slate-500 mb-1">Podjetje</div>
                  <div className="text-lg font-semibold text-slate-900">
                    {story.companyName}
                  </div>
                </div>
              )}
              {story.companyFacts.employees && (
                <div>
                  <div className="text-sm text-slate-500 mb-1">Zaposleni</div>
                  <div className="text-lg font-semibold text-slate-900">
                    {story.companyFacts.employees}
                  </div>
                </div>
              )}
              {story.companyFacts.founded && (
                <div>
                  <div className="text-sm text-slate-500 mb-1">Ustanovljeno</div>
                  <div className="text-lg font-semibold text-slate-900">
                    {story.companyFacts.founded}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Tags */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
            Področja
          </h2>
          <div className="flex flex-wrap gap-2">
            {story.industryTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm bg-slate-100 text-slate-700 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Share */}
        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
            Deli zgodbo
          </h2>
          <div className="flex gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://podjetno.mojimediji.si/podjetniki/${story.id}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              aria-label="Deli na Facebooku"
            >
              <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://podjetno.mojimediji.si/podjetniki/${story.id}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              aria-label="Deli na LinkedInu"
            >
              <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(story.title)}&body=${encodeURIComponent(`Preberi podjetniško zgodbo: https://podjetno.mojimediji.si/podjetniki/${story.id}`)}`}
              className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              aria-label="Pošlji po e-pošti"
            >
              <svg
                className="w-5 h-5 text-slate-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
