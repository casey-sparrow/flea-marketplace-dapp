import { Injectable } from '@angular/core';
import { Contract } from 'ethers';
import { EthersWeb3Provider } from '../../../core/services/ethers-web3-provider';
import { MarketPlaceAnchorModule } from '../../market-place-anchor.module';
import { environment } from 'src/environments/environment';

const FLEA_MARKET_CONTRACT_ADDRESS = environment.fleaMarketContractAddress;
const abi = [
  'event LogCreatePurchaseContract(address sender, bytes32 key)',
  'event logRemovePurchaseContract(address sender, bytes32 key)',
  'function createPurchaseContract(bytes32 key, string calldata description, string calldata ipfsImageHash, uint256 commissionRate) payable returns(bool createResult)',
  'function getContractCount() view returns(uint contractCount)',
  'function getContractKeyAtIndex(uint index) view returns(bytes32 key)',
  'function getContractByKey(bytes32 key) view returns(address contractAddress)',
  'function contractName() view returns(string contractName)',
  'function removeContractByKey(bytes32 key)'
];


@Injectable({ providedIn: MarketPlaceAnchorModule })
export class FleaMarketContractToken extends Contract {
  constructor(provider: EthersWeb3Provider) {
    super(FLEA_MARKET_CONTRACT_ADDRESS, abi, provider.getSigner());
  }

}