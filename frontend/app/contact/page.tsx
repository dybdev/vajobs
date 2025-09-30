export default function Contact() {
  const contactMethods = [
    {
      type: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call us during business hours for immediate assistance',
      icon: (
        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      action: 'tel:+15551234567',
      actionText: 'Call Now'
    },
    {
      type: 'Email',
      value: 'hello@vajobs.com',
      description: 'Send us an email and we\'ll get back to you within 24 hours',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: 'mailto:hello@vajobs.com',
      actionText: 'Send Email'
    },
    {
      type: 'Support Email',
      value: 'support@vajobs.com',
      description: 'Technical support and platform assistance',
      icon: (
        <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      action: 'mailto:support@vajobs.com',
      actionText: 'Get Support'
    }
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Business Avenue, Suite 456',
      zipCode: 'New York, NY 10001',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
    },
    {
      city: 'San Francisco',
      address: '789 Tech Street, Floor 10',
      zipCode: 'San Francisco, CA 94105',
      phone: '+1 (555) 987-6543',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST'
    },
    {
      city: 'Chicago',
      address: '456 Innovation Drive, Building C',
      zipCode: 'Chicago, IL 60601',
      phone: '+1 (555) 456-7890',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM CST'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Customer Success Manager',
      email: 'sarah@vajobs.com',
      specialization: 'Job Seeker Support'
    },
    {
      name: 'Michael Chen',
      role: 'Business Development',
      email: 'michael@vajobs.com',
      specialization: 'Employer Relations'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Technical Support Lead',
      email: 'emily@vajobs.com',
      specialization: 'Platform Support'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're here to help you succeed. Reach out to us through any of the channels below, 
          and our team will be happy to assist you with your career journey or hiring needs.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {contactMethods.map((method) => (
          <div key={method.type} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 rounded-full p-3">
                {method.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.type}</h3>
            <p className="text-lg font-medium text-gray-700 mb-2">{method.value}</p>
            <p className="text-sm text-gray-600 mb-4">{method.description}</p>
            <a
              href={method.action}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              {method.actionText}
            </a>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
          <p className="text-lg text-gray-600">
            Have a specific question or need personalized assistance? Fill out the form below.
          </p>
        </div>
        
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a subject</option>
              <option value="job-seeker">Job Seeker Support</option>
              <option value="employer">Employer Services</option>
              <option value="technical">Technical Support</option>
              <option value="partnership">Partnership Inquiry</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Please provide details about your inquiry..."
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
              <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Office Locations */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Offices</h2>
          <p className="text-lg text-gray-600">
            Visit us at one of our locations or schedule a virtual meeting
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div key={office.city} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.city}</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div>{office.address}</div>
                    <div>{office.zipCode}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>{office.phone}</div>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>{office.hours}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600">
            Connect directly with our specialists for personalized assistance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm text-blue-600 mb-3">{member.specialization}</p>
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
              >
                {member.email}
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}