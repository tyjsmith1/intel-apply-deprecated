import axios from 'axios';
import { useEffect, useState } from 'react';

interface JobApplication {
  id: number;
  company: string;
  position: string;
  status: string;
}

const App = () => {
  const [jobApplications, setJobApplications] = useState<JobApplication[]>([])

  useEffect(() => {
    fetchJobApplications()
  }, [])

  const fetchJobApplications = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/job-applications')
      setJobApplications(response.data)
    } catch (error) {
      console.error('Failed to fetch job applications:', error)
    }
  }

  return (
    <div>
      <h1>Job Applications</h1>
      <ul>
        {jobApplications.map((job) => (
          <li key={job.id}>
            {job.company} - {job.position} - {job.status}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App