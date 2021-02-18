require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'good clock bottom solution mansion creek stick mad imitate private frame term'; 
let testAccounts = [
"0xb104b9d4f1f42c62f0dccd015c44ac9e7e61bc71acf0289b74976b8676ef733d",
"0xf52540ea3ead8766b9d368cec527bf6c52456c0c946cd8d45d3024e7c676a081",
"0xbbd5627da65755650b807dcc62d14472393bf7334e768520447f286a01001661",
"0x75b3cb703b523b8d2e5893a2dbe48b58b520577260ffb177546459f5a3e3320f",
"0xbc6d73916ad1d083514d24fd8ecd72214e4509224ecd40ed205dbc230b6c16c0",
"0x5b2f4e6ca62e63dc83191bfd463aeedd94fee94123964e2441e3c24285c3b6c3",
"0x7445a79a22f8fd754f88514e3bf3415bafbfd2e3636abe4d2a4e3118731ccbc4",
"0xd555fbe3280e2f2cfa95bd39e296306dcf98c18c95b03ccf90db3d634d6e8a7d",
"0xb56743554138c65ea6df21e42da85d249981ee4c08a6443e9be1bd3642471a40",
"0x55e55a7d36661117f69944ac31d6f8f420e53b493d5d041143189c8689043d3b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

