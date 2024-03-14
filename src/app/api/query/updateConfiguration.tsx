import mergePath from '@/app/util/mergePath';
import fs from 'fs-extra';
import {set} from 'lodash';

interface IUpdateConfigurationPayload {
  scope: string;
  path: string;
  configUpdates: object;
}

const {CONFIG_PATH} = process.env;

const updateConfiguration = async ({scope, path, configUpdates}: IUpdateConfigurationPayload) => {
  // compose config file path
  const configFilePath = mergePath(CONFIG_PATH!, `config.${scope}.json`);

  // get existing configuration
  const configuration = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));

  // loop through configuration updates to apply for main object
  for (const property in configUpdates) {
    const value = configUpdates[property];

    // update existing configuration
    set(configuration, `${path}[${property}]`, value);
  }

  const configurationStr = JSON.stringify(configuration, null, 2);

  // update file
  fs.writeFileSync(configFilePath, configurationStr);
};

export default updateConfiguration;
