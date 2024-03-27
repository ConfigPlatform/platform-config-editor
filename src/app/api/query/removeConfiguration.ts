import mergePath from '@/app/util/mergePath';
import fs from 'fs-extra';
import {get} from 'lodash';

interface IRemoveConfigurationPayload {
  scope: string;
  path: string;
}

const {CONFIG_PATH} = process.env;

const removeConfiguration = ({scope, path}: IRemoveConfigurationPayload) => {
  // compose config file path
  const configFilePath = mergePath(CONFIG_PATH!, `config.${scope}.json`);

  // get existing configuration
  let configurationStr = fs.readFileSync(configFilePath, 'utf8');

  // remove spaces
  configurationStr = JSON.stringify(JSON.parse(configurationStr));

  // configuration
  const configuration = JSON.parse(configurationStr);

  // element configuration
  const elementConfiguration = get(configuration, path);

  // element configuration str
  const elementConfigurationStr = JSON.stringify(elementConfiguration);

  // replace element configuration with empty str
  configurationStr = configurationStr.replace(`${elementConfigurationStr},`, '');

  // add spaces
  configurationStr = JSON.stringify(JSON.parse(configurationStr), null, 2);

  // update configuration file
  fs.writeFileSync(configFilePath, configurationStr);
};

export default removeConfiguration;
