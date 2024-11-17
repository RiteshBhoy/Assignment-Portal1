// routes/assignmentRoutes.js
const express = require('express');
const { uploadAssignment, getAssignments, acceptAssignment, rejectAssignment } = require('../controllers/assignmentController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/upload', protect, uploadAssignment);
router.get('/assignments/:adminId', protect, getAssignments);
router.post('/assignments/:id/accept', protect, acceptAssignment);
router.post('/assignments/:id/reject', protect, rejectAssignment);

module.exports = router;
