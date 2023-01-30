const express = require('express');
require('./services/passport');
require('./utils/db');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use('/api/v1/auth/google', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
