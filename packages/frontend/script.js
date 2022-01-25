(async () => {
  const abi = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "count",
          type: "uint256",
        },
      ],
      name: "UpdatedCount",
      type: "event",
    },
    {
      inputs: [],
      name: "count",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "dec",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "get",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "inc",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  // ↑↑ /projects/contracts/artifacts/contracts/Conter.sol/Counter.json内からコピペしています
  
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const signer = provider.getSigner(0);
  const contract = new ethers.Contract(address, abi, signer);

  contract.on("UpdatedCount", (from, to, amount, event) => {
    // コントラクト上の emit UpdatedCount(count); が呼ばれるたびにここが自動的に更新される（ページのリロード不要）
    document.getElementById("count_text").textContent = `count: ${from}`;
  });

  // dAppsでよくあるWallet Connectのボタン
  document.getElementById("connect").addEventListener("click", async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    document.getElementById(
      "account_address"
    ).textContent = `address: ${accounts[0]}`;
  });

  document.getElementById("inc").addEventListener("click", async () => {
    // コントラクトで定義されている inc メソッドを呼び出す
    await contract.inc();
  });

  document.getElementById("dec").addEventListener("click", async () => {
    await contract.dec();
  });
})();
