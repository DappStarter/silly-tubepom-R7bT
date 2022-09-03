require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture struggle deny maze puppy hunt hat army gentle'; 
let testAccounts = [
"0xd860e767fc3a84595abc134f27b91a0f415ba38b79633172542dc04881231c8a",
"0x60ffbed8dcf0187f6d8ede5266de838d9f94420eb85456729899723626d31cf2",
"0xa82d903bbc3b78b5c974637f0e947254f4ba0972843097f5de5352df8269fcb7",
"0x6a9e2bb8e0ff14031b9e161803d9c42ed7b3bd1b9b66c653431f8dbbbc18b8f1",
"0xe9db6bf55d5dedf9279c8071f0a748d44351e0052ffc5f2dea839340cc228043",
"0x61461d53ff661df9fd453d7c9eab4641d930a3c4167559cff37731873967cf27",
"0xbee0804e9bc782359af06fcb76937c899d4fdb9f13ff3744e10ba996bcef0377",
"0x2c6e39818408cc8be8112710325777f1199c6bdef8057ab8e7e5a941b3a3ecf4",
"0x93bd5e1fe86da511b18ae73ede418028bd8e0c248cbdd8a884b8b5036c6baee2",
"0xde2eda7a3f63a4300d69f5bb5c60786a18d6284355cd7726dc3b3375d7245602"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

