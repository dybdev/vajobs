'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Job, JobListResponse, JobFilters as JobFiltersType } from '@/types/job';
import { apiClient, jobTypeLabels, experienceLevelLabels, formatSalary, formatRelativeTime } from '@/lib/api';
import { JobCard } from './JobCard';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import { Pagination } from './Pagination';

export function JobsList() {
  const [jobs, setJobs] = useState<JobListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Build filters from URL search params
        const filters: JobFiltersType = {};
        searchParams.forEach((value, key) => {
          if (value) {
            switch (key) {
              case 'page':
                filters.page = parseInt(value) || undefined;
                break;
              case 'page_size':
                filters.page_size = parseInt(value) || undefined;
                break;
              case 'min_salary':
                filters.min_salary = parseInt(value) || undefined;
                break;
              case 'max_salary':
                filters.max_salary = parseInt(value) || undefined;
                break;
              case 'remote_allowed':
                filters.remote_allowed = value === 'true';
                break;
              case 'recent_only':
                filters.recent_only = value === 'true';
                break;
              case 'search':
                filters.search = value;
                break;
              case 'company':
                filters.company = value;
                break;
              case 'location':
                filters.location = value;
                break;
              case 'job_type':
                filters.job_type = value as Job['job_type'];
                break;
              case 'experience_level':
                filters.experience_level = value as Job['experience_level'];
                break;
              case 'ordering':
                filters.ordering = value;
                break;
            }
          }
        });

        const data = await apiClient.getJobs(filters);
        setJobs(data);
      } catch (err: any) {
        console.error('Error fetching jobs:', err);
        setError(err.message || 'Failed to load jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [searchParams]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!jobs) return <ErrorMessage message="No data available" />;

  if (jobs.results.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">No jobs found</h3>
        <p className="mt-1 text-sm text-gray-500">
          Try adjusting your search criteria or check back later for new opportunities.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Results summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{jobs.results.length}</span> of{' '}
          <span className="font-medium">{jobs.count}</span> jobs
        </p>
      </div>

      {/* Jobs list */}
      <div className="space-y-4">
        {jobs.results.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Pagination */}
      {jobs.count > 10 && (
        <Pagination
          currentPage={Math.floor(((searchParams.get('page') || '1') as any - 1) * 10 / 10) + 1}
          totalPages={Math.ceil(jobs.count / 10)}
          hasNext={!!jobs.next}
          hasPrevious={!!jobs.previous}
          onPageChange={(page: number) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set('page', page.toString());
            router.push(`?${params.toString()}`);
          }}
        />
      )}
    </div>
  );
}