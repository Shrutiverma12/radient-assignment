import { jobRepository } from '../repositories/jobRepository.js';

export const createJobService = async (jobData) => {
  try {
    const jobTitle = jobData.title;
    const jobDescription = jobData.description;
    const companyName = jobData.company;
    const jobLocation = jobData.location;
    const salary = jobData?.salary;
    const postedBy = jobData.user;
    const newJob = await jobRepository.createJob(
      jobTitle,
      jobDescription,
      companyName,
      jobLocation,
      salary,
      postedBy
    );
    return newJob;
  } catch (error) {
    console.log('service error', error);
    if (error.name === 'MongoServerError' && error.code === 11000) {
      throw {
        status: 400,
        message: error.message,
      };
    }
    throw error;
  }
};

export const getAllJobsService = async (offset, limit) => {
  try {
    const jobs = await jobRepository.findAllJobs(offset, limit);
    return jobs;
  } catch (error) {
    throw error;
  }
};

export const updateJobService = async (id, updatedObject) => {
  try {
    const job = await jobRepository.update(id, updatedObject);
    return job;
  } catch (error) {
    throw error;
  }
};

export const deleteJobService = async (id, user) => {
  try {
    const job = await jobRepository.getById(id);
    if (job.postedBy != user && job.role != 'admin') {
      throw {
        status: 401,
        message: 'Unauthorized',
      };
    }
    const response = await jobRepository.delete(id);
    return response;
  } catch (error) {
    throw error;
  }
};
