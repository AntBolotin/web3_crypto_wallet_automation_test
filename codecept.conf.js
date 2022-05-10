const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: '',
      show: true,
      windowSize: '1200x900',
      chrome: {
        args: ['--disable-extensions-except=./chr_ext/nkbihfbeogaeaoehlefnkodbefgpgknn/10.14.1_0',
        '--load-extension=./chr_ext/nkbihfbeogaeaoehlefnkodbefgpgknn/10.14.1_0'
      ]
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'superdao_test',
  plugins: {
    allure: {
      enabled: true
  }
}
}