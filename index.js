const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors')
require('./models/User')
require('./models/Survey')
require('./services/passport');
require('./utils/db');
const authRoutes = require('./routes/authRoutes');
const billingRoutes  = require('./routes/billingRoutes')
const surveyRoutes = require("./routes/surveysRoute")
const keys = require('./config/keys');
  
const app = express();
app.use(express.json())

var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, 
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 
}
app.use(cors(corsOptions))
app.use(
  cookieSession({
   maxAge : 30 * 24 * 60 * 60 * 1000,
   keys : [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/billing', billingRoutes);
app.use('/api/v1/survey', surveyRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
