const ttTokens = [ 
  { "id": "thunder-token","symbol": "TT","contract": "0x0000000000000000000000000000000000000000" },
  { "id": "usd-coin","symbol": "USDC","contract": "0x22e89898A04eaf43379BeB70bf4E38b1faf8A31e" },
  { "id": "tether", "symbol": "USDT", "contract": "0x4f3C8E20942461e2c3Bdd8311AC57B0c222f2b82"},
  { "id":"binance-usd", "symbol": "BUSD", "contract": "0xBEB0131D95AC3F03fd15894D0aDE5DBf7451d171" }
]
// { "id": "ram","symbol": "RAM","contract": "0xfe146d5710015d4075355fb7be8d133346ec63c2" },
// { "id": "bitcoin","symbol": "WBTC","contract": "0x18fB0A62f207A2a082cA60aA78F47a1af4985190" },
// { "id": "ethereum","symbol": "ETH","contract": "0x6576Bb918709906DcbFDCeae4bB1e6df7C8a1077" },

async function getTTPrices() {
  const idPrices = await lookUpPrices(ttTokens.map(x => x.id));
  const prices = {}
  for (const bt of ttTokens)
      if (idPrices[bt.id])
          prices[bt.contract] = idPrices[bt.id];
  return prices;
}

