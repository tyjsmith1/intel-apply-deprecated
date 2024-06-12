const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const jobApplications = [
        {
            company: 'Pinterest',
            contact: 'TBD',
            position: 'Apprentice Engineer',
            location: 'Remote',
            type: 'FT',
            salary: '80-100',
            url: '',
            dateApplied: new Date('2023-01-28'),
            status: 'Rejected',
            match: '',
        },
        {
            company: 'Ace Hardware',
            contact: 'TBD',
            position: 'React Software Engineer',
            location: 'Oak Brook, IL',
            type: 'FT',
            salary: '120',
            url: 'https://acehardware.wd1.myworkdayjobs.com/en-US/External/userHome',
            dateApplied: new Date('2023-01-29'),
            status: 'Rejected',
            match: '',
        },
        {
            company: 'Northrop Grumman',
            contact: 'TBD',
            position: 'Associate Software Engineer',
            location: '',
            type: 'FT',
            salary: '120',
            url: '',
            dateApplied: new Date('2023-01-28'),
            status: 'Rejected',
            match: '',
        },
        {
            company: 'Abnormal',
            contact: 'TBD',
            position: 'Back End Software Engineer',
            location: 'Remote',
            type: 'FT',
            salary: '120-140',
            url: 'https://careers.abnormalsecurity.com/jobs/5802043003?gh_jid=5802043003',
            dateApplied: new Date('2023-01-29'),
            status: 'Rejected',
            match: '',
        },
        {
            company: 'Motorola',
            contact: 'TBD',
            position: 'Entry Level Software Engineer',
            location: 'Remote',
            type: 'FT',
            salary: '100',
            url: 'https://huntr.co/job-post/65b29bd88663110059a21f60',
            dateApplied: new Date('2023-01-29'),
            status: 'Ghosted',
            match: '',
        },
        {
            company: 'Penguin Random House',
            contact: 'TBD',
            position: 'Full Stack Developer',
            location: 'Remote',
            type: 'FT',
            salary: '115',
            url: 'https://career5.successfactors.eu/portalcareer?_s.crb=RwurVMGNWkPyPGl67eRj3drsJFU9r5cOIfHGHwfKOh0%253d',
            dateApplied: new Date('2023-01-29'),
            status: 'Rejected',
            match: '',
        },
        {
            company: 'Grammarly',
            contact: 'TBD',
            position: 'Back End Software Engineer',
            location: 'Remote',
            type: 'FT',
            salary: '150',
            url: '',
            dateApplied: new Date('2023-01-29'),
            status: 'Rejected',
            match: '',
        },
    ];

    for (const job of jobApplications) {
        await prisma.jobApplication.create({
            data: job,
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });