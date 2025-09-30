'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Job } from '@/types/job';
import { jobTypeLabels, experienceLevelLabels } from '@/lib/api';

export function JobFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    company: searchParams.get('company') || '',
    location: searchParams.get('location') || '',
    job_type: searchParams.get('job_type') || '',
    experience_level: searchParams.get('experience_level') || '',
    min_salary: searchParams.get('min_salary') || '',
    max_salary: searchParams.get('max_salary') || '',
    remote_allowed: searchParams.get('remote_allowed') === 'true',
    recent_only: searchParams.get('recent_only') === 'true',
  });

  const updateURL = (newFilters: typeof filters) => {
    const params = new URLSearchParams();
    
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value !== '' && value !== false && value !== null && value !== undefined) {
        params.set(key, value.toString());
      }
    });

    router.push(`?${params.toString()}`);
  };

  const handleFilterChange = (key: keyof typeof filters, value: string | boolean) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    updateURL(newFilters);
  };

  const clearFilters = () => {
    const newFilters = {
      search: '',
      company: '',
      location: '',
      job_type: '',
      experience_level: '',
      min_salary: '',
      max_salary: '',
      remote_allowed: false,
      recent_only: false,
    };
    setFilters(newFilters);
    updateURL(newFilters);
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
          Search
        </label>
        <input
          type="text"
          id="search"
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          placeholder="Job title, company, keywords..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          value={filters.company}
          onChange={(e) => handleFilterChange('company', e.target.value)}
          placeholder="Company name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <input
          type="text"
          id="location"
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
          placeholder="City, state, country"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Job Type */}
      <div>
        <label htmlFor="job_type" className="block text-sm font-medium text-gray-700 mb-2">
          Job Type
        </label>
        <select
          id="job_type"
          value={filters.job_type}
          onChange={(e) => handleFilterChange('job_type', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Types</option>
          {Object.entries(jobTypeLabels).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Experience Level */}
      <div>
        <label htmlFor="experience_level" className="block text-sm font-medium text-gray-700 mb-2">
          Experience Level
        </label>
        <select
          id="experience_level"
          value={filters.experience_level}
          onChange={(e) => handleFilterChange('experience_level', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Levels</option>
          {Object.entries(experienceLevelLabels).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Salary Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Salary Range (USD)
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            value={filters.min_salary}
            onChange={(e) => handleFilterChange('min_salary', e.target.value)}
            placeholder="Min"
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="number"
            value={filters.max_salary}
            onChange={(e) => handleFilterChange('max_salary', e.target.value)}
            placeholder="Max"
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Checkboxes */}
      <div className="space-y-3">
        <div className="flex items-center">
          <input
            id="remote_allowed"
            type="checkbox"
            checked={filters.remote_allowed}
            onChange={(e) => handleFilterChange('remote_allowed', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remote_allowed" className="ml-2 block text-sm text-gray-700">
            Remote work allowed
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            id="recent_only"
            type="checkbox"
            checked={filters.recent_only}
            onChange={(e) => handleFilterChange('recent_only', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="recent_only" className="ml-2 block text-sm text-gray-700">
            Recent jobs only (30 days)
          </label>
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={clearFilters}
        className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Clear All Filters
      </button>
    </div>
  );
}