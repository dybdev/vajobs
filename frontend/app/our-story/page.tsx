export default function OurStory() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h1>
        <p className="text-xl text-gray-600">
          Connecting talent with opportunity through innovation and dedication
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Vision */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="ml-3 text-2xl font-bold text-gray-900">Our Vision</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To be the leading platform that transforms the job search experience by creating meaningful 
            connections between talented professionals and forward-thinking organizations. We envision 
            a world where finding the perfect career opportunity is seamless, transparent, and empowering 
            for everyone involved.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="ml-3 text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to democratize access to career opportunities by providing an intuitive, 
            comprehensive platform that serves both job seekers and employers. We are committed to 
            leveraging technology to eliminate barriers in the hiring process, promote diversity and 
            inclusion, and foster professional growth at every career stage.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Journey</h2>
        <div className="prose prose-lg mx-auto text-gray-700">
          <p className="mb-6">
            Founded in 2025, VA Jobs emerged from a simple yet powerful observation: the traditional 
            job search process was broken. Too many talented individuals were struggling to find 
            opportunities that matched their skills and aspirations, while employers faced challenges 
            in discovering the right candidates for their teams.
          </p>
          <p className="mb-6">
            Our founders, with decades of combined experience in technology, human resources, and 
            career development, set out to create a platform that would bridge this gap. We believe 
            that when the right person meets the right opportunity, magic happens – not just for 
            individuals and companies, but for entire communities and economies.
          </p>
          <p>
            Today, VA Jobs continues to evolve, incorporating cutting-edge technology and user feedback 
            to create an ever-improving experience. We're not just a job board; we're a catalyst for 
            career transformation and organizational growth.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 rounded-full p-3">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">
              Continuously improving our platform with the latest technology to provide the best user experience.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
            <p className="text-gray-600">
              Building trust through transparency, honesty, and ethical practices in all our interactions.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 rounded-full p-3">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Inclusivity</h3>
            <p className="text-gray-600">
              Promoting diversity and equal opportunities for all, regardless of background or circumstances.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}