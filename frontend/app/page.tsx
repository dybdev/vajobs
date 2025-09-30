import { JobsList } from '@/components/JobsList';
import { JobFilters } from '@/components/JobFilters';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Find Your Next Opportunity
        </h1>
        <p className="text-lg text-gray-600">
          Browse through our latest job postings and find the perfect role for you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Filter Jobs
            </h2>
            <Suspense fallback={<div>Loading filters...</div>}>
              <JobFilters />
            </Suspense>
          </div>
        </div>

        {/* Jobs List */}
        <div className="lg:col-span-3">
          <Suspense fallback={
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          }>
            <JobsList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
