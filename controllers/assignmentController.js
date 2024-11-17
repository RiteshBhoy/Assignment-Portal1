// controllers/assignmentController.js
const Assignment = require('../models/Assignment');
const User = require('../models/User');
const Admin = require('../models/Admin');

const uploadAssignment = async (req, res) => {
    const { userId, task, adminId } = req.body;

    const user = await User.findById(userId);
    const admin = await Admin.findById(adminId);

    if (!user || !admin) {
        return res.status(400).json({ message: 'User or Admin not found' });
    }

    const assignment = new Assignment({ userId, task, adminId });
    await assignment.save();

    res.status(201).json(assignment);
};

const getAssignments = async (req, res) => {
    const assignments = await Assignment.find({ adminId: req.params.adminId });

    if (!assignments) {
        return res.status(404).json({ message: 'No assignments found' });
    }

    res.json(assignments);
};

const acceptAssignment = async (req, res) => {
    const assignment = await Assignment.findById(req.params.id);

    if (!assignment) {
        return res.status(404).json({ message: 'Assignment not found' });
    }

    assignment.status = 'accepted';
    await assignment.save();

    res.json(assignment);
};

const rejectAssignment = async (req, res) => {
    const assignment = await Assignment.findById(req.params.id);

    if (!assignment) {
        return res.status(404).json({ message: 'Assignment not found' });
    }

    assignment.status = 'rejected';
    await assignment.save();

    res.json(assignment);
};

module.exports = { uploadAssignment, getAssignments, acceptAssignment, rejectAssignment };
