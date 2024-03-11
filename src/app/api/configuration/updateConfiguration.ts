import {NextRequest} from 'next/server';
import mergePath from '@/app/util/mergePath';
import fs from 'fs-extra';
import {set} from 'lodash';

const {CONFIG_BUILDER_PATH} = process.env;

const generateConfiguration = async (req: NextRequest) => {
  const data = await req.json();

  const {path, elementConfiguration, scope} = data;

  // compose config file path
  const configPath = mergePath(CONFIG_BUILDER_PATH!, '_config');
  const configFilePath = mergePath(configPath, `config.${scope}.json`);

  // get existing configuration
  const configuration = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));

  // update existing config
  set(configuration, path, elementConfiguration);

  const configurationStr = JSON.stringify(configuration, null, 2);

  // update file
  fs.writeFileSync(configFilePath, configurationStr);

  return Response.json({});
};

export default generateConfiguration;
