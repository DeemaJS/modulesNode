var cronJob = require('cron').CronJob;

new cronJob('25 * * * * *', function () {
	console.log('Прошло 25 сек');
})