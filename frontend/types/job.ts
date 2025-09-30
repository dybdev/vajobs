// Type definitions for the Job API
export interface Job {
  id: number;
  title: string;
  description: string;
  company: string;
  location: string;
  job_type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'temporary' | 'remote';
  experience_level: 'entry' | 'junior' | 'mid' | 'senior' | 'lead' | 'manager' | 'director';
  salary?: number;
  remote_allowed: boolean;
  is_active: boolean;
  posted_at: string;
  updated_at: string;
  is_recent: boolean;
}

export interface JobListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Job[];
}

export interface JobStatistics {
  total_jobs: number;
  recent_jobs: number;
  top_companies: Array<{
    company: string;
    job_count: number;
  }>;
  top_locations: Array<{
    location: string;
    job_count: number;
  }>;
}

export interface CreateJobData {
  title: string;
  description: string;
  company: string;
  location: string;
  job_type: Job['job_type'];
  experience_level: Job['experience_level'];
  salary?: number;
  remote_allowed: boolean;
}

export interface JobFilters {
  search?: string;
  company?: string;
  location?: string;
  job_type?: Job['job_type'];
  experience_level?: Job['experience_level'];
  remote_allowed?: boolean;
  min_salary?: number;
  max_salary?: number;
  recent_only?: boolean;
  page?: number;
  page_size?: number;
  ordering?: string;
}

export interface ApiError {
  error: boolean;
  message: string;
  details?: any;
  status_code: number;
}