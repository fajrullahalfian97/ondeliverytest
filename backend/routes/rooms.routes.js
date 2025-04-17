const express = require('express');
const router = express.Router();
const prisma = require('../prisma');
const verifyToken = require('../middleware/verifyToken');

router.get('/', verifyToken, async (req, res) => {
  const rooms = await prisma.room.findMany();
  res.json(rooms);
});

router.post('/', verifyToken, async (req, res) => {
  const { name, employees, description } = req.body;
  const newRoom = await prisma.room.create({
    data: { name, employees, description }
  });
  res.status(201).json(newRoom);
});

module.exports = router;
