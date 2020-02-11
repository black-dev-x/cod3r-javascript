const schedule = require('node-schedule')
const regra = new schedule.RecurrenceRule()

regra.second = 0
regra.minute = 0
regra.hour = 1
schedule.scheduleJob(regra, function(){
    console.log('Executo todos os dias, 1:00:00 da manhã')
})