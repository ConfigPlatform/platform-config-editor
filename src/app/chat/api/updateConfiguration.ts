import {NextRequest} from 'next/server';
import axios from 'axios';
import mergePath from '@/app/util/mergePath';
import fs from 'fs-extra';
import * as prettier from 'prettier';

const {HELPER_SERVER_ORIGIN} = process.env;

const prettierConfig = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'));

const updateConfiguration = async (req: NextRequest) => {
  const formData = await req.json();

  const {task, scope} = formData;

  const configurationFilePath = mergePath(
    process.env.CONFIG_BUILDER_PATH!,
    `_config/config.${scope.toLowerCase()}.json`,
  );

  // get configuration entries by a scope
  const entries = fs.readFileSync(configurationFilePath, 'utf8');

  // update configuration
  const response = await axios.patch(`${HELPER_SERVER_ORIGIN}/configuration`, {task, scope, entries});

  const configuration = response.data;

  const formattedConfiguration = await prettier.format(configuration, {
    ...prettierConfig,
    parser: 'json',
  });

  // update file entries
  fs.writeFileSync(configurationFilePath, formattedConfiguration);

  return Response.json({comment: ''});
};

export default updateConfiguration;
