module.exports = {
	abi : [
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "_age",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "_course",
					"type": "string"
				}
			],
			"name": "applyForCertificate",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "generateCertificate",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_student",
					"type": "address"
				}
			],
			"name": "verifyStudent",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "admin",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "Users",
			"outputs": [
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "age",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "course",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "institute",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "issuedOn",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "generated",
					"type": "bool"
				},
				{
					"internalType": "bool",
					"name": "isApproved",
					"type": "bool"
				},
				{
					"internalType": "bool",
					"name": "hasApplied",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]
}