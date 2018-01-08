// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
   capabilities: {
  	browserName: 'chrome',
  	chromeOptions: {
  		//https://peter.sh/experiments/chromium-command-line-switches/ (Lista de argumentos para o Chrome)
    	'args': [
    	'show-fps-counter=true',
    	'disable-infobars=true',
    	'start-maximized',
    	//'headless'
    	]
  	}
   }
}