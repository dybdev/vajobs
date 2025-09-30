import Link from 'next/link';
import { Job } from '@/types/job';
import { jobTypeLabels, experienceLevelLabels, formatSalary, formatRelativeTime } from '@/lib/api';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/jobs/${job.id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                {job.title}
              </h3>
              {job.is_recent && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  New
                </span>
              )}
            </div>
            
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <span className="font-medium">{job.company}</span>
              <span className="mx-2">•</span>
              <span>{job.location}</span>
              {job.remote_allowed && (
                <>
                  <span className="mx-2">•</span>
                  <span className="text-blue-600">Remote OK</span>
                </>
              )}
            </div>
            
            <p className="text-gray-700 text-sm mb-4 line-clamp-2">
              {job.description.substring(0, 150)}
              {job.description.length > 150 ? '...' : ''}
            </p>
            
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100">
                {jobTypeLabels[job.job_type]}
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100">
                {experienceLevelLabels[job.experience_level]}
              </span>
              {job.salary && (
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800">
                  {formatSalary(job.salary)}
                </span>
              )}
            </div>
          </div>
          
          <div className="text-right text-sm text-gray-500">
            <div>{formatRelativeTime(job.posted_at)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}