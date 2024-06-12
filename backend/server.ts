import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();
const prisma = new PrismaClient();

app.use(cors())
app.use(express.json());

interface JobApplicationRequest {
    company: string;
    contact?: string;
    position: string;
    location: string;
    type: string;
    salary?: string;
    url?: string;
    dateApplied: string;
    status: string;
    match?: string;
}

app.post('/api/job-applications', async (req: Request, res: Response) => {
    const {
        company,
        contact,
        position,
        location,
        type,
        salary,
        url,
        dateApplied,
        status,
        match
    }: JobApplicationRequest = req.body;

    const jobApplication = await prisma.jobApplication.create({
        data: {
            company,
            contact,
            position,
            location,
            type,
            salary,
            url,
            dateApplied: new Date(dateApplied),
            status,
            match,
        },
    });
    res.json(jobApplication);
});

app.get('/api/job-applications', async (req: Request, res: Response) => {
    const jobApplications = await prisma.jobApplication.findMany();
    res.json(jobApplications);
});

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
