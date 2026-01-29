import { STATS } from '@/types';

export default function StatsSection() {
  const stats = [
    {
      value: STATS.monthlyReaders,
      label: 'mesečnih bralcev',
      description: 'MOSS 01/25',
    },
    {
      value: STATS.monthlyViews,
      label: 'mesečnih ogledov',
      description: 'skupno',
    },
    {
      value: STATS.fbFollowers,
      label: 'Facebook sledilcev',
      description: 'skupna publika',
    },
    {
      value: STATS.postsPerMonth,
      label: 'objav mesečno',
      description: 'aktivna produkcija',
    },
    {
      value: STATS.mediaOutlets.toString(),
      label: 'medijev',
      description: 'lokalna pokritost',
    },
    {
      value: STATS.newsrooms.toString(),
      label: 'uredništva',
      description: 'profesionalni timi',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Moji Mediji v številkah
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/50"
            >
              <div className="text-3xl md:text-4xl font-black text-green-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400">{stat.description}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8 max-w-2xl mx-auto">
          Moji Mediji je vodilni digitalni izdajatelj lokalnih medijskih vsebin
          v Sloveniji, ki povezuje sedem spletnih medijev in televizijo.
        </p>
      </div>
    </section>
  );
}
