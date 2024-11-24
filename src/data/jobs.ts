import { Job } from '../types';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$120k - $160k',
    salaryRange: { min: 120000, max: 160000 },
    experience: { min: 5, max: 8 },
    type: 'Full-time',
    description: 'Join our team to build next-generation web applications using React and TypeScript.',
    requirements: ['5+ years React experience', 'TypeScript expertise', 'CI/CD knowledge'],
    posted: '2d ago',
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop'
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'DataFlow Systems',
    location: 'Remote',
    salary: '$130k - $170k',
    salaryRange: { min: 130000, max: 170000 },
    experience: { min: 3, max: 6 },
    type: 'Remote',
    description: 'Build scalable backend services for our data processing platform.',
    requirements: ['Node.js expertise', 'Database design', 'API development'],
    posted: '1d ago',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop'
  },
  {
    id: '3',
    title: 'Product Designer',
    company: 'CreativeMinds',
    location: 'New York, NY',
    salary: '$90k - $120k',
    salaryRange: { min: 90000, max: 120000 },
    experience: { min: 2, max: 5 },
    type: 'Full-time',
    description: 'Create beautiful and intuitive user interfaces for our products.',
    requirements: ['UI/UX expertise', 'Figma proficiency', 'Portfolio required'],
    posted: '5d ago',
    logo: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=100&h=100&fit=crop'
  }
];