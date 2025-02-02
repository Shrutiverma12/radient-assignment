import Job from '../schema/jobListing.js';
import crudRepository from './crudRepository.js';

export const jobRepository = {
  ...crudRepository(Job),
  createJob: async function (data) {
    const newJob = new Job(data);
    await newJob.save();
    return newJob;
  },
  findAllJobs: async function (offset, limit) {
    const jobs = await Job.find().skip(offset).limit(limit);
    return jobs;
  },
};
