const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User')
require('./services/passport');
require('./utils/db');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
  
const app = express();

app.use(
  cookieSession({
   maxAge : 30 * 24 * 60 * 60 * 1000,
   keys : [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())
app.use('/api/v1/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
