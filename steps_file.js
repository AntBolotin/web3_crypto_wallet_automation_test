// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    fill_password: function(password) {
      this.fillField('input[id=password]', password);
      this.fillField('input[id=confirm-password]', password);
    },

    fill_key: function(k0, k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11) {
      this.fillField('input[id=import-srp__srp-word-0]', k0);
      this.fillField('input[id=import-srp__srp-word-1]', k1);
      this.fillField('input[id=import-srp__srp-word-2]', k2);
      this.fillField('input[id=import-srp__srp-word-3]', k3);
      this.fillField('input[id=import-srp__srp-word-4]', k4);
      this.fillField('input[id=import-srp__srp-word-5]', k5);
      this.fillField('input[id=import-srp__srp-word-6]', k6);
      this.fillField('input[id=import-srp__srp-word-7]', k7);
      this.fillField('input[id=import-srp__srp-word-8]', k8);
      this.fillField('input[id=import-srp__srp-word-9]', k9);
      this.fillField('input[id=import-srp__srp-word-10]', k10);
      this.fillField('input[id=import-srp__srp-word-11]', k11);

    },

    fill_network: function(chainName, rpc, chainId, currency) {
      this.fillField('Имя сети', chainName);
      this.fillField('Новый URL-адрес RPC', rpc);
      this.fillField('ID цепочки', chainId);
      this.fillField('Символ валюты', currency);
    }

  });
}
