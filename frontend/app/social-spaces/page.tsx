export default function SocialSpaces() {
  const socialPlatforms = [
    {
      name: 'LinkedIn',
      handle: '@vajobs',
      url: 'https://linkedin.com/company/vajobs',
      description: 'Professional networking, career tips, and industry insights.',
      followers: '15.2K',
      icon: (
        <svg className="h-8 w-8 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      handle: '@vajobs',
      url: 'https://twitter.com/vajobs',
      description: 'Real-time job alerts, career news, and quick tips.',
      followers: '8.7K',
      icon: (
        <svg className="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      handle: '@vajobs',
      url: 'https://instagram.com/vajobs',
      description: 'Behind-the-scenes content, success stories, and workplace culture.',
      followers: '12.1K',
      icon: (
        <svg className="h-8 w-8 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C8.396 0 7.989.016 6.756.072 5.526.127 4.705.278 3.995.598c-.789.306-1.459.715-2.126 1.384S.935 3.35.63 4.139C.309 4.85.157 5.671.103 6.901.016 8.134 0 8.541 0 12.017s.016 3.883.072 5.116c.055 1.23.206 2.051.526 2.761.306.789.715 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.71.32 1.531.472 2.761.526 1.233.056 1.64.072 5.116.072s3.883-.016 5.116-.072c1.23-.055 2.051-.206 2.761-.526.789-.306 1.459-.715 2.126-1.384.666-.667 1.079-1.336 1.384-2.126.32-.71.472-1.531.526-2.761.056-1.233.072-1.64.072-5.116s-.016-3.883-.072-5.116c-.055-1.23-.206-2.051-.526-2.761-.306-.789-.715-1.459-1.384-2.126C19.76.935 19.091.63 18.302.309 17.592-.011 16.771-.16 15.541-.103 14.308-.016 13.901 0 12.017 0zm0 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.06 1.265.072 1.645.072 4.849s-.012 3.584-.072 4.849c-.053 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.419.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.265.06-1.645.072-4.849.072s-3.584-.012-4.849-.072c-1.17-.053-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.419-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.06-1.265-.072-1.645-.072-4.849s.012-3.584.072-4.849c.053-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382.419-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.265-.06 1.645-.072 4.849-.072z"/>
          <path d="M12.017 5.838a6.179 6.179 0 1 0 0 12.358 6.179 6.179 0 0 0 0-12.358zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
          <path d="M19.846 5.595a1.444 1.444 0 1 1-2.889 0 1.444 1.444 0 0 1 2.889 0z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      handle: 'VA Jobs',
      url: 'https://facebook.com/vajobs',
      description: 'Career advice, company spotlights, and community discussions.',
      followers: '22.3K',
      icon: (
        <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      handle: 'VA Jobs',
      url: 'https://youtube.com/vajobs',
      description: 'Interview tips, career development videos, and success stories.',
      followers: '5.8K',
      icon: (
        <svg className="h-8 w-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      handle: '@vajobs',
      url: 'https://tiktok.com/@vajobs',
      description: 'Quick career tips, workplace humor, and trending job market insights.',
      followers: '18.9K',
      icon: (
        <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    }
  ];

  const communityFeatures = [
    {
      title: 'Career Tips Daily',
      description: 'Get expert advice on resume writing, interview skills, and career development.',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Success Stories',
      description: 'Read inspiring stories from professionals who found their dream jobs through our platform.',
      icon: (
        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Industry Insights',
      description: 'Stay updated with the latest trends, salary reports, and market analysis.',
      icon: (
        <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Social Spaces</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect with us across all social media platforms for career insights, job opportunities, 
          and professional networking. Join our growing community of job seekers and employers.
        </p>
      </div>

      {/* Social Platforms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {socialPlatforms.map((platform) => (
          <div key={platform.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                {platform.icon}
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-semibold text-gray-900">{platform.name}</h3>
                <p className="text-sm text-gray-500">{platform.handle}</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">{platform.description}</p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">
                {platform.followers} followers
              </span>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Follow
                <svg className="ml-2 -mr-0.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Community Features */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-600">
            Discover what makes our social community special
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hashtags & Topics */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Follow Our Hashtags</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            '#VAJobs',
            '#CareerTips',
            '#JobSearch',
            '#HiringNow',
            '#CareerAdvice',
            '#RemoteWork',
            '#ProfessionalGrowth',
            '#InterviewTips',
            '#ResumeHelp',
            '#WorkLifeBalance',
            '#CareerChange',
            '#JobOpportunities'
          ].map((hashtag) => (
            <span
              key={hashtag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              {hashtag}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 rounded-lg p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
        <p className="text-xl text-gray-300 mb-6">
          Don't miss out on the latest job opportunities and career insights
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://linkedin.com/company/vajobs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
          >
            <svg className="mr-2 h-5 w-5 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Follow on LinkedIn
          </a>
          <a
            href="https://twitter.com/vajobs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900"
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Follow on Twitter
          </a>
        </div>
      </div>
    </div>
  );
}