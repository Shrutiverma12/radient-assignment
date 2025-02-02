import {
  createJobService,
  deleteJobService,
  getAllJobsService,
  updateJobService,
} from '../services/jobService.js';

export async function createJob(req, res) {
  try {
    const job = await createJobService({
      jobTitle: req.body.title,
      jobDescription: req.body.description,
      companyName: req.body.company,
      jobLocation: req.body.location,
      salary: req.body?.salary,
      postedBy: req.body.user,
    });
    return res.status(201).json({
      success: true,
      message: 'Job created successfully',
      data: job,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Creation failed' });
  }
}

export async function deleteJob(req, res) {
  try {
    const response = await deleteJobService(req.params.id, req.user._id);
    if (!response) {
      return res.status(404).json({
        success: false,
        message: 'Job not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Job Deleted successfully',
      data: response,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error ',
    });
  }
}

export async function updateJob(req, res) {
  try {
    const updatedJob = req.body;
    const response = updateJobService(req.params.id, updatedJob);
    return res.status(200).json({
      success: true,
      message: 'Job updated successfully',
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error Not Updated',
    });
  }
}

export async function getAllJobs(req, res) {
  try {
    const limit = 20;
    const offset = 0;
    const allJobs = await getAllJobsService(offset, limit);
    return res.status(200).json({
      success: true,
      message: 'All jobs fetched successfully',
      data: allJobs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
}
