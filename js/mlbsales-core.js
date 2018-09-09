
function initWeb3() {
	if (typeof web3 !== 'undefined'){
		console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
		window.web3 = new Web3(web3.currentProvider);
	} else {
		console.log('No Web3 Detected... using HTTP Provider')
		window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/7dd537ef5ab948f099627ad38db1177f"));
	}
}

		  
let salesAbi = [{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_buyer","type":"address"},{"name":"_bidAmount","type":"uint256"}],"name":"bidTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gameManagerSecondary","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TEAM_SALE_MULTIPLIER","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nftAddress","type":"address"}],"name":"setNFTContractAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"cancelSaleWhenPaused","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_teamId","type":"uint8"},{"name":"_posId","type":"uint8"},{"name":"_attributes","type":"uint256"},{"name":"_playerOverrideId","type":"uint256"},{"name":"_mlbPlayerId","type":"uint256"},{"name":"_startPrice","type":"uint256"},{"name":"_endPrice","type":"uint256"},{"name":"_saleDuration","type":"uint256"}],"name":"createPromoSeedAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_flag","type":"bool"}],"name":"updateBatchSupport","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newAddress","type":"address"},{"name":"_value","type":"bool"}],"name":"updateAllowedAddressesList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"bid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"LSEscrowContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenIds","type":"uint256[]"}],"name":"batchCancelSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_teamId","type":"uint8"},{"name":"_attributes","type":"uint256[9]"},{"name":"_mlbPlayerId","type":"uint256[9]"}],"name":"createSeedTeam","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isSalesManager","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_startingPrice","type":"uint256"},{"name":"_endingPrice","type":"uint256"},{"name":"_duration","type":"uint256"},{"name":"_owner","type":"address"}],"name":"createSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawSaleManagerBalances","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCut","type":"uint256"}],"name":"setOwnerCut","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gameManagerPrimary","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newGM","type":"address"}],"name":"setSecondaryGameManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ownerCut","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_startingPrice","type":"uint256"},{"name":"_endingPrice","type":"uint256"},{"name":"_duration","type":"uint256"}],"name":"userCreateSaleIfApproved","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"seedSingleSaleCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_teamId","type":"uint8"},{"name":"_tokenIds","type":"uint256[9]"},{"name":"_startPrice","type":"uint256"},{"name":"_endPrice","type":"uint256"},{"name":"_saleDuration","type":"uint256"}],"name":"createTeamSaleAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenIds","type":"uint256[]"}],"name":"batchAssetTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_teamId","type":"uint8"},{"name":"_posId","type":"uint8"},{"name":"_attributes","type":"uint256"},{"name":"_playerOverrideId","type":"uint256"},{"name":"_mlbPlayerId","type":"uint256"},{"name":"_startPrice","type":"uint256"},{"name":"_endPrice","type":"uint256"},{"name":"_saleDuration","type":"uint256"}],"name":"createSingleSeedAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"lastTeamSalePrices","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_lsEscrowAddress","type":"address"}],"name":"setLSEscrowContractAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isBatchSupported","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newGM","type":"address"}],"name":"setPrimaryGameManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_teamIds","type":"uint8[]"},{"name":"_posIds","type":"uint8[]"},{"name":"_attributes","type":"uint256[]"},{"name":"_playerOverrideIds","type":"uint256[]"},{"name":"_mlbPlayerIds","type":"uint256[]"},{"name":"_startPrice","type":"uint256"}],"name":"batchCreateSingleSeedAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"cancelSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"SINGLE_SALE_MULTIPLIER","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getCurrentPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"STARTING_PRICE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newDelay","type":"uint256"}],"name":"updateDelayTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"lastSingleSalePrices","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getSale","outputs":[{"name":"seller","type":"address"},{"name":"startingPrice","type":"uint256"},{"name":"endingPrice","type":"uint256"},{"name":"duration","type":"uint256"},{"name":"startedAt","type":"uint256"},{"name":"tokenIds","type":"uint256[9]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nonFungibleContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"assetTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"bankManager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BID_DELAY_TIME","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"seedTeamSaleCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ERC721_RECEIVED","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newBK","type":"address"}],"name":"setBanker","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"SALES_DURATION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenID","type":"uint256"},{"indexed":false,"name":"startingPrice","type":"uint256"},{"indexed":false,"name":"endingPrice","type":"uint256"},{"indexed":false,"name":"duration","type":"uint256"},{"indexed":false,"name":"startedAt","type":"uint256"}],"name":"SaleCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenIDs","type":"uint256[9]"},{"indexed":false,"name":"startingPrice","type":"uint256"},{"indexed":false,"name":"endingPrice","type":"uint256"},{"indexed":false,"name":"duration","type":"uint256"},{"indexed":false,"name":"startedAt","type":"uint256"}],"name":"TeamSaleCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenID","type":"uint256"},{"indexed":false,"name":"totalPrice","type":"uint256"},{"indexed":false,"name":"winner","type":"address"}],"name":"SaleWinner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenIDs","type":"uint256[9]"},{"indexed":false,"name":"totalPrice","type":"uint256"},{"indexed":false,"name":"winner","type":"address"}],"name":"TeamSaleWinner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenID","type":"uint256"},{"indexed":false,"name":"sellerAddress","type":"address"}],"name":"SaleCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"value","type":"uint256"}],"name":"EtherWithdrawed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newContract","type":"address"}],"name":"ContractUpgrade","type":"event"}];
let salesAddress = "0xe7232a9fd8bf427aa41918bc008d32290e22990e"
let salesContract = web3.eth.contract(salesAbi).at(salesAddress);
let nftAddress = "0x8c9b261Faef3b3C2e64ab5E58e04615F8c788099";
let nftAbi = [{"constant":true,"inputs":[{"name":"_interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenIds","type":"uint256[]"},{"name":"_fromB","type":"address[]"},{"name":"_toB","type":"address[]"}],"name":"multiBatchSafeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_teamId","type":"uint8[]"},{"name":"_attributes","type":"uint256[]"},{"name":"_playerOverrideId","type":"uint256[]"},{"name":"_mlbPlayerId","type":"uint256[]"},{"name":"_to","type":"address[]"}],"name":"batchCreateAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"requestDetachment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"implementsERC721","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_teamId","type":"uint8"},{"name":"_posId","type":"uint8"},{"name":"_attributes","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_gameId","type":"uint256"},{"name":"_playerOverrideId","type":"uint256"},{"name":"_mlbPlayerId","type":"uint256"}],"name":"createETHCardCollectible","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spenders","type":"address[]"},{"name":"_approved","type":"bool"}],"name":"batchSetApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"detachmentTime","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"promoCreatedCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenIds","type":"uint256[]"},{"name":"_fromB","type":"address[]"},{"name":"_toB","type":"address[]"}],"name":"multiBatchTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"generationSeasonDict","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"otherManagers","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"giftAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_saleManagerAddress","type":"address"}],"name":"setSaleManagerAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_flag","type":"bool"}],"name":"updateBatchSupport","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenIds","type":"uint256[]"},{"name":"_spender","type":"address"}],"name":"batchApprove","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_teamId","type":"uint8"},{"name":"_posId","type":"uint8"},{"name":"_attributes","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_gameId","type":"uint256"},{"name":"_playerOverrideId","type":"uint256"},{"name":"_mlbPlayerId","type":"uint256"}],"name":"createRewardCollectible","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MLB_Legal","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"nftTeamIndexToCollectibleCount","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"contractsApprovedList","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"exists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_teamId","type":"uint8"},{"name":"_posId","type":"uint8"},{"name":"_attributes","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_gameId","type":"uint256"},{"name":"_playerOverrideId","type":"uint256"},{"name":"_mlbPlayerId","type":"uint256"}],"name":"createSeedCollectible","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"checkIsAttached","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newAddress","type":"address"}],"name":"removeFromApproveList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_time","type":"uint256"}],"name":"setDetachmentTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"InterfaceSignature_ERC721Optional","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_gameCardNumber","type":"uint256"},{"name":"_playerId","type":"uint256"}],"name":"updateCurrentGameCardId","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"attachedSystemActive","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getGameCardId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_teamId","type":"uint8[]"},{"name":"_attributes","type":"uint256[]"},{"name":"_playerOverrideId","type":"uint256[]"},{"name":"_mlbPlayerId","type":"uint256[]"},{"name":"_to","type":"address[]"}],"name":"batchCreateETHCardAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isLSNFT","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newContractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenIds","type":"uint256[]"}],"name":"batchDetachAssets","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getCollectibleDetails","outputs":[{"name":"isAttached","type":"uint256"},{"name":"sequenceId","type":"uint32"},{"name":"teamId","type":"uint8"},{"name":"positionId","type":"uint8"},{"name":"creationTime","type":"uint64"},{"name":"attributes","type":"uint256"},{"name":"playerOverrideId","type":"uint256"},{"name":"mlbGameId","type":"uint256"},{"name":"currentGameCardId","type":"uint256"},{"name":"mlbPlayerId","type":"uint256"},{"name":"earnedBy","type":"uint256"},{"name":"generationSeason","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_v2Address","type":"address"}],"name":"setNewAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rewardsRedeemed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getTeamId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_earnedBy","type":"uint256"}],"name":"updateEarnedBy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenIds","type":"uint256[]"},{"name":"_startingPrices","type":"uint256[]"},{"name":"_endingPrices","type":"uint256[]"},{"name":"_durations","type":"uint256[]"}],"name":"batchCreateAssetSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newGM","type":"address"}],"name":"setSecondaryManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getAbilitiesForCollectibleId","outputs":[{"name":"ability","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"name":"ownerTokens","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getPositionId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"removeAllAttachmentsFromCollectible","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenIds","type":"uint256[]"}],"name":"batchAttachAssets","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"noError","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_season","type":"uint256"},{"name":"_value","type":"uint64"}],"name":"updateGenerationDict","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenIds","type":"uint256[]"},{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"name":"batchTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenIds","type":"uint256[]"},{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"name":"batchSafeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_attachment","type":"uint256"}],"name":"addAttachmentToCollectible","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"nftCollectibleAttachments","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isBatchSupported","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenIds","type":"uint256[]"}],"name":"setBatchDetachCollectibles","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"hasError","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint32"}],"name":"nftTeamIdToSequenceIdToCollectible","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"managerPrimary","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_teamId","type":"uint8"},{"name":"_posId","type":"uint8"},{"name":"_attributes","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_gameId","type":"uint256"},{"name":"_playerOverrideId","type":"uint256"},{"name":"_mlbPlayerId","type":"uint256"}],"name":"createPromoCollectible","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_startingPrice","type":"uint256"},{"name":"_endingPrice","type":"uint256"},{"name":"_duration","type":"uint256"}],"name":"initiateCreateSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOp","type":"address"},{"name":"_state","type":"uint8"}],"name":"setOtherManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"seedCreatedCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newGM","type":"address"}],"name":"setPrimaryManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"attachAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"error","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_state","type":"bool"}],"name":"toggleAttachedEnforcement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newAddress","type":"address"}],"name":"addToApproveList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_season","type":"uint256"}],"name":"setGenerationSeasonController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"generationSeasonController","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"saleManagerAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenURI","type":"string"}],"name":"setTokenURIBase","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"requestDetachmentOnPause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getAssetAttachment","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"setNFTDetached","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_season","type":"uint256"},{"name":"_value","type":"uint8"}],"name":"updateGenerationStopTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_newOverrideId","type":"uint256"}],"name":"setPlayerOverrideId","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bankManager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ERC721_RECEIVED","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"managerSecondary","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newBK","type":"address"}],"name":"setBanker","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getPlayerId","outputs":[{"name":"playerId","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newContract","type":"address"}],"name":"ContractUpgrade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"AssetUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"Created","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}];
let nftContract = web3.eth.contract(nftAbi).at(nftAddress);

var attributes = {
	position : {
		"801": "P",
		"802": "LF",
		"803": "CF",
		"804": "RF",
		"805": "1B",
		"806": "2B",
		"807": "3B",
		"808": "SS",
		"809": "C",
		"810": "SPECIAL",
		"811": "DH"
	},
	stance : {
		"001": "Groundball",	
		"002": "Fly Ball (Outfielder)",
		"003": "Running Catch",
		"004": "Long Hop",
		"005": "Backhand",
		"006": "Pop Fly",
		"007": "Ready",
		"008": "Step Behind",
		"009": "Crow Hop",
		"010": "Sidearm",
		"011": "Windup",
		"012": "Stride",
		"013": "Release",
		"014": "Snap Throw",
		"015": "Fly Ball (Catcher)",
		"016": "Jab Step",			
		"017": "Follow Through",
		"018": "Stretch and Fire",
		"019": "Load Position",
		"020": "Sweet Spot",
		"021": "Batter-runner"
	},
	itemType : {
		"001": "glove",
		"002": "glove",
		"003": "glove",
		"004": "glove",
		"005": "glove",
		"006": "glove",
		"007": "glove",
		"008": "glove",
		"009": "glove",
		"010": "glove",
		"011": "glove",
		"012": "glove",
		"013": "glove",
		"014": "glove",
		"015": "glove",
		"016": "glove",
		"017": "bat",
		"018": "bat",
		"019": "bat",
		"020": "bat",
		"021": "bat"
	},
	item : {
		"bat" : {
			"001": "Wood Bat",
			"002": "Wood Bat w/ Grip",
			"003": "Wood Bat w/ Black Finish",
			"004": "Wood Bat w/ Walnut Finish",
			"005": "Silver Bat",
			"006": "Gold Bat",
			"007": "Iridescent Bat",
			"008": "Jade Bat",
			"009": "Ruby Bat"	
		},
		"glove" : {
			"001": "Standard Glove",
			"002": "Midnight Glove",
			"003": "Classic Glove",
			"004": "Team USA Glove"
		}
	},
	uniform : {
		"001": "Uniform Pants Long Sleeves",
		"002": "Uniform Pants Short Sleeves",
		"003": "Uniform Socks Long Sleeves",
		"004": "Uniform Socks Short Sleeves"
	},
	rarity : {
		"000": "Common",
		"001": "Bronze",
		"002": "Silver",
		"003": "Gold",
		"004": "Legendary",
		"005": "Perfect Game",
		"006": "No Hitter",
		"007": "Home Run Distance (495 ft.)",
		"008": "Immaculate Inning",
		"009": "Hit for the Cycle",
		"010": "4 Home Run Game (Single Hitter)",
		"011": "Grand Slam",
		"012": "Triple",
		"013": "Hit by Pitch",
		"014": "Shutout",
		"015": "Walk Off",
		"016": "100 mph Pitch"
	},
	team : {
		"001": "Astros",
		"002": "Dodgers",
		"003": "Cubs",
		"004": "Yankees",
		"005": "Indians",
		"006": "Nationals",
		"007": "Red Sox",
		"008": "Diamondbacks",
		"009": "Rockies",
		"010": "Twins",
		"011": "Brewers",
		"012": "Cardinals",
		"013": "Angels",
		"014": "Royals",
		"015": "Rays",
		"016": "Mariners",
		"017": "Rangers",
		"018": "Marlins",
		"019": "Blue Jays",
		"020": "Orioles",
		"021": "Athletics",
		"022": "Pirates",
		"023": "Braves",
		"024": "Padres",
		"025": "Mets",
		"026": "Reds",
		"027": "White Sox",
		"028": "Phillies",
		"029": "Tigers",
		"030": "Giants",
		"099": "Trophy"
	},
	teamEvent : {
		"001": "Perfect Game",
		"002": "No Hitter",
		"003": "Home Run Distance (495 ft.)",
		"004": "Immaculate Inning (9 pitches 9 strikes)",
		"005": "Hit for the Cycle",
		"006": "4 Home Run Game (Single Hitter)",
		"007": "Grand Slam",
		"008": "Triple",
		"009": "Hit by Pitch",
		"010": "Shutout",
		"011": "Walk Off",
		"012": "100 mph Pitch",
		"013": "Home Run",
		"014": "Double Play",
		"015": "Double",
		"016": "5 Run Game",
		"017": "9 Strikeout Game",
		"018": "9 Hit Game",
		"019": "5 RBI Game"
	}
};

function parseAttributes(str) { 
    var attrs = [];
    var  result = {};
    str = str.toFixed();
    while (str.length >= 3) { 
        attrs.push(str.substring(0, 3));
        str = str.substring(3, str.length);
    }
    //return attrs;
    result.position = attributes.position[attrs[0]];
    //result.stance = attributes.stance[attrs[1]];
    //result.itemType = attributes.itemType[attrs[1]];
    //result.item = attributes.item[attributes.itemType[attrs[1]]][attrs[5]];
    //result.uniform = attributes.uniform[attrs[6]];
    result.rarity = attributes.rarity[attrs[7]];
    //result.team = attributes.team[attrs[9]];
    result.teamEvent = attributes.teamEvent[attrs[13]];
    return result
}

async function getCollectibleDetailsWrapper(id) {
	let d = await getCollectibleDetails(id);
	
	if(!d){
		return;
	}
	
	let details = {
		"token": id,
		//"isAttached": d[0],
		"sequenceId": parseInt(d[1]),
		//"teamId": d[2],
		//"positionId": d[3],
		"creationTime": parseInt(d[4]),
		"attributes": parseAttributes(d[5]),
		//"playerOverrideId": d[6],
		//"mlbGameId": d[7],
		//"currentGameCardId": d[8],
		//"mlbPlayerId": parseInt(d[9]),
		//"earnedBy": d[10],
		//"generationSeason": d[11]
	}
	return details;
}

async function getRarity(id) {
	let data = await getCollectibleDetailsWrapper(id)
	return data.attributes.rarity
}

const promisify = (inner) =>
    new Promise((resolve, reject) =>
        inner((err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    );

async function getCollectibleDetails(id) {
    var details, x
    details = promisify(cb => nftContract.getCollectibleDetails.call(id, cb))
    try {
        x = await details;
    } catch (error) {
        console.log("Couln't get data for id: ", id, error);
    }
    return x
}    

async function getSaleTokens() {
    var tokens, x
    tokens = promisify(cb => nftContract.tokensOfOwner.call("0xe7232a9fd8bf427aa41918bc008d32290e22990e", cb))
    try {
        x = await tokens;
    } catch (error) {
        console.log(error);
    }
    return x
}    

async function getSaleDetails(id) {
    var sale, x
    sale = promisify(cb => salesContract.getSale.call(id, cb))
    try {
        x = await sale;
    } catch (error) {
        console.log("Couln't get data for id: ", id, error);
    }
    return x
}

async function getCurrentPrice(id) {
    var price, x
    price = promisify(cb => salesContract.getCurrentPrice.call(id, cb))
    try {
        x = await price;
    } catch (error) {
        console.log("Couln't get data for id: ", id, error);
    }
    return x
}

async function getSaleDetailsWrapper(id) {
	let d = await getSaleDetails(id);
	
	if(!d || d[0]==="0x"){
		return;
	}
	
    let startTimePosix = parseInt(d[4])
    let startTime = new Date(startTimePosix*1000)
    let duration = parseInt(d[3])
    let endTime = new Date((startTimePosix + duration)*1000)
    let remaining = moment(endTime).fromNow()
    let rarity = await getRarity(id)
    let currentPrice = await getCurrentPrice(id)
	let details = {
		"token": id,
		"rarity": rarity,
		"seller": (d[0]==="0xe7232a9fd8bf427aa41918bc008d32290e22990e") ? "MLB" : d[0],
		"currentPrice": parseInt(currentPrice)/10000,
		"startPrice": parseInt(d[1])/10000,
		"endPrice": parseInt(d[2])/10000,
		"duration": Math.round(duration/24/60/60*1000)/1000, // days
		"startTime": moment(startTime).format('MMM Do YYYY, h:mm:ss a'),
		"endTime": moment(endTime).format('MMM Do YYYY, h:mm:ss a'),
		"timeLeft": remaining
	}
	return details;
}

async function getAllSaleDetails() {
	let tokens = await getSaleTokens()
	let result = [];
	let promises = [];
	
	for(i = 0; i < tokens.length; i++) {
		promises.push(getSaleDetailsWrapper(parseInt(tokens[i])));
	}
	result = await Promise.all(promises);
	result = result.filter(function(obj) {
		return (obj != undefined);
	});
	
	return result;
}
