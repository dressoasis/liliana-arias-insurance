import React from 'react';

const stats = [
  { value: '24/7', label: 'Asesoría' },
  { value: '98%', label: 'Satisfacción' },
  { value: '100+', label: 'Planes' },
];

export default function HeroStats() {
  return (
    <div className="flex flex-wrap gap-4 lg:flex-col">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <p className="text-xl font-semibold text-slate-900">{stat.value}</p>
          <p className="text-sm text-slate-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
