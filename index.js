// 引入 geneWallet 包
const geneWallet = require('genewallet');

// 使用 geneWallet 创建钱包
const wallet = geneWallet.createWallet();

// 打印钱包信息
console.log(`钱包地址: ${wallet.address}`);
console.log(`助记词: ${wallet.mnemonic}`);
console.log(`私钥: ${wallet.privateKey}`);
