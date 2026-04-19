const tips = [
  { step: 1, text: 'Add turmeric to your dinner \u2014 natural anti-inflammatory.' },
  { step: 2, text: 'Sleep by 11 PM; deep sleep repairs immunity.' },
  { step: 3, text: 'Eat a handful of nuts \u2014 brain food.' },
  { step: 4, text: 'Practice 5 minutes of deep breathing \u2014 reduces cortisol.' },
];

const WellnessTips = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Preventive Care Tips */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-emerald-600">Today&apos;s Wellness</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Preventive care tips</h3>
              <div className="space-y-4">
                {tips.map((tip) => (
                  <div key={tip.step} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold">
                      {tip.step}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">{tip.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Seasonal Alert */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-amber-600">Seasonal Alert</span>
                <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full font-medium">Active</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monsoon Watch</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Boil drinking water to prevent typhoid &amp; cholera. Watch for dengue \u2014 keep windows screened.
              </p>
              <ul className="space-y-3">
                {[
                  'Mosquito nets at dusk',
                  'Keep electrolytes handy',
                  'Avoid street food',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessTips;
