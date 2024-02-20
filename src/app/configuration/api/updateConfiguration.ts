import {NextRequest} from "next/server";
import axios from "axios";
import mergePath from "@/helper/mergePath";
import fs from "fs";
import * as prettier from 'prettier';
const prettierConfig = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'));

console.log(prettierConfig, '==================prettierConfig==================');

const updateConfiguration = async (req: NextRequest):  Promise<Response> => {

    const formData = await req.json();

    const { task, scope } = formData;

    const configurationFilePath = mergePath(process.env.CONFIG_BUILDER_PATH!, `_config/config.${scope.toLowerCase()}.json`);

    // get config entries by a scope
    const entriesStr = fs.readFileSync(configurationFilePath, 'utf8');

    const entriesObj = JSON.parse(entriesStr);

    const formattedEntries = prettier.format(JSON.stringify(entriesObj), {
        ...prettierConfig,
        parser: 'json',
    });

    console.log(await formattedEntries, '==================formattedEntries==================')

    // update configuration
    const response = await axios.patch(`${process.env.HELPER_SERVER_ORIGIN}/completion/configuration/update`, { task, scope, entries: formattedEntries });

    const configuration = response.data;

    // update file entries
    fs.writeFileSync(configurationFilePath, JSON.stringify(configuration, null, 2));

    return Response.json({ comment: '' });
}

export default updateConfiguration