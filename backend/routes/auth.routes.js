const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const prisma = require('../prisma');
const SECRET_KEY = process.env.SECRET_KEY;

router.post('/register', async (req, res) => {
  const { username, password, name, role } = req.body;
  try {
    const existing = await prisma.user.findUnique({ where: { username } });
    if (existing) return res.status(409).json({ message: 'Username sudah ada' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { username, password: hashed, name, role }
    });

    res.status(201).json({ message: 'Register sukses', user: { id: user.id, username: user.username } });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ message: 'Gagal register user', error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) return res.status(401).json({ message: 'User tidak ditemukan' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Password salah' });

  const token = jwt.sign({ id: user.id, username: user.username, role: user.role, name: user.name }, SECRET_KEY, { expiresIn: '2h' });
  res.json({ user: { name: user.name, role: user.role, photo: 'https://i.pravatar.cc/40', token } });
});

module.exports = router;
