export default function Expertise() {
  const expertiseAreas = [
    {
      id: 'gva',
      title: 'GVA - Global Value Assessment',
      icon: (
        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'We specialize in conducting comprehensive global value assessments that help organizations understand their market position, competitive advantages, and growth opportunities across international markets.',
      features: [
        'International market analysis and penetration strategies',
        'Cross-cultural talent acquisition and management',
        'Global compensation benchmarking',
        'International regulatory compliance assessment',
        'Remote workforce optimization'
      ],
      color: 'blue'
    },
    {
      id: 'eva',
      title: 'EVA - Employee Value Assessment',
      icon: (
        <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      description: 'Our employee value assessment framework evaluates and maximizes the potential of individual contributors and teams, ensuring optimal job-person fit and career development pathways.',
      features: [
        'Skills gap analysis and development planning',
        'Performance evaluation and improvement strategies',
        'Career progression mapping',
        'Employee engagement and satisfaction assessment',
        'Leadership potential identification'
      ],
      color: 'green'
    },
    {
      id: 'isa',
      title: 'ISA - Industry Specialized Assessment',
      icon: (
        <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description: 'We provide deep industry-specific expertise across various sectors, understanding unique challenges, requirements, and opportunities within specialized fields.',
      features: [
        'Technology and software development roles',
        'Healthcare and pharmaceutical positions',
        'Financial services and fintech opportunities',
        'Manufacturing and engineering roles',
        'Creative and digital marketing positions'
      ],
      color: 'purple'
    },
    {
      id: 'mva',
      title: 'MVA - Market Value Assessment',
      icon: (
        <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: 'Our market value assessment services provide comprehensive analysis of compensation trends, role valuations, and competitive positioning in the current job market.',
      features: [
        'Real-time salary benchmarking and analysis',
        'Market demand forecasting for specific roles',
        'Competitive intelligence and positioning',
        'Economic impact assessment on hiring',
        'ROI analysis for talent acquisition investments'
      ],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 border-blue-200',
      green: 'bg-green-50 border-green-200',
      purple: 'bg-purple-50 border-purple-200',
      red: 'bg-red-50 border-red-200'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-50 border-gray-200';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We bring specialized knowledge and proven methodologies across four key assessment areas 
          to deliver exceptional results for both job seekers and employers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {expertiseAreas.map((area) => (
          <div
            key={area.id}
            className={`${getColorClasses(area.color)} border rounded-lg p-8 hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                {area.icon}
              </div>
              <h2 className="ml-3 text-2xl font-bold text-gray-900">{area.title}</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              {area.description}
            </p>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Key Capabilities:</h3>
              <ul className="space-y-2">
                {area.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Our Expertise */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Expertise?</h2>
          <p className="text-xl text-gray-300">
            Our comprehensive approach ensures success at every stage of the talent lifecycle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
            <p className="text-gray-300">
              Leveraging advanced analytics and market intelligence to make informed decisions.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.832 18.477 19.247 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Proven Methodologies</h3>
            <p className="text-gray-300">
              Time-tested frameworks refined through years of successful implementations.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Rapid Results</h3>
            <p className="text-gray-300">
              Efficient processes that deliver measurable outcomes in shorter timeframes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}