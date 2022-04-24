import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x4df1AaC1bd2045836b74b45E320b831Be600e036'
);

export default instance;
