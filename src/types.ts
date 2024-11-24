export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  salaryRange: {
    min: number;
    max: number;
  };
  experience: {
    min: number;
    max: number;
  };
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  description: string;
  requirements: string[];
  posted: string;
  logo: string;
}

export type JobType = Job['type'];

export interface SearchFilters {
  type: JobType | 'all';
  location: string;
  query: string;
  salary: {
    min: number;
    max: number;
  };
  experience: {
    min: number;
    max: number;
  };
}