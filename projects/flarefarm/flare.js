const ADDRESSES = require('../helper/coreAssets.json')
const { sumUnknownTokens } = require("../helper/unknownTokens");

const WFLR = ADDRESSES.flare.WFLR
const APS = '0xfF56Eb5b1a7FAa972291117E5E9565dA29bc808d'
const HLN = '0x140D8d3649Ec605CF69018C627fB44cCC76eC89f'

const LPs ={
  WFLR_APS_LP:	'0xef24D5155818d4bD16AF0Cea1148A147eb620743',
  WFLR_eUSDT_LP:	'0x7520005032F43229F606d3ACeae97045b9D6F7ea',
  HLN_WFLR_LP:	'0x02C6b5B1fbE01Da872E21f9Dab1B980933B0EF27',
  HLN_APS_LP:	'0x87E0E33558c8e8EAE3c1E9EB276e05574190b48a',
  WFLR_eETH_LP:	'0x32fd7858393918A984DA6ee279EcA27f630a1C02',
  HLN_eUSDT_LP:	'0x9bD53eCB4B7C09f41a336F85C345aa8DcAFdf52C',
  eUSDT_APS_LP:	'0x980Db8443D19B64B1d4616980ebbD44e7DD30C2E',
  HLN_eETH_LP:	'0x71b738DB182C780E2FFA5A09b5cc6dB92556E27B',
  eETH_APS_LP:	'0x05B623fd361109D0e47169eBa9e0514c80c40409',
  WFLR_eQNT_LP:	'0x80A08BbAbB0A5C51A9ae53211Df09EF23Debd4f3',
  HLN_eQNT_LP:	'0xEd920325b7dB1e909DbE2d562fCD07f714395e10',
}

const chain = 'flare'

// farms which reward APS
// [LP token address, farm address]
async function farmTvl(timestamp, ethblock, { [chain]: block }) {
  const tokens = [
    [LPs.WFLR_eUSDT_LP, "0x22beb4c7166DbAa0A33052A770C3b358cAbE9089"], 
    [LPs.WFLR_APS_LP, "0x3DA590b357Cf17a413ec8db70FeB02119AfE707f"], 
    [LPs.HLN_WFLR_LP, "0xd3a273329bab3e263015C1C2ab79C3731769a5b0"], 
    [HLN, "0x660cc88B7924a0c727cA6a1a9F0B81D239966928"], 
    [LPs.HLN_APS_LP, "0x2de4bC38f012DC90478f570083d3Da45B05659A9"], 
    [HLN, "0xC296d1D1E3396bCCDeD32143ca715bAB0A9998cC"], 
    [LPs.WFLR_eETH_LP, "0x66b65b586Fcaf70375498720C85F4C84013497fB"], 
    [LPs.HLN_eUSDT_LP, "0xc357123725Db711b7B85882e3475125EC34220a8"], 
    [LPs.eUSDT_APS_LP, "0x437a586B04e8F0ed9E32d31aE897eaDEd8150Aea"], 
    [LPs.HLN_eETH_LP, "0x71b738DB182C780E2FFA5A09b5cc6dB92556E27B"], 
    [LPs.eETH_APS_LP, "0x05B623fd361109D0e47169eBa9e0514c80c40409"], 
    [LPs.WFLR_eQNT_LP, "0xc786B4a2F9c314743Ed713184e5c94c244fF6c8D"], 
    [LPs.HLN_eQNT_LP, "0x02321f8030208de54dBd3e2DbdEfbd07cc88Ad6D"], 
  ];

  return sumUnknownTokens({ tokensAndOwners: tokens, chain, block, useDefaultCoreAssets: true, })
}

// farms where APS is one part of the pair
async function pool2(timestamp, ethblock, { [chain]: block }) {
  const tokens = [
    ['0xef24D5155818d4bD16AF0Cea1148A147eb620743', "0x3DA590b357Cf17a413ec8db70FeB02119AfE707f"], 
    ['0x87E0E33558c8e8EAE3c1E9EB276e05574190b48a', "0x2de4bC38f012DC90478f570083d3Da45B05659A9"],
  ]
  return sumUnknownTokens({ tokensAndOwners: tokens, chain, block, useDefaultCoreAssets: true, })
}

module.exports =  {
    tvl: farmTvl,
    pool2,
};