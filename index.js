require("dotenv").config();
TELEGRAM_BOT_TOKEN=('')
var bot = require('./bot');
require('./web')(bot);
