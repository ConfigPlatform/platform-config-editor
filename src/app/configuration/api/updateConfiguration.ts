import {NextRequest} from "next/server";
import axios from "axios";
import mergePath from "@/helper/mergePath";
import fs from "fs";

const { HELPER_SERVER_ORIGIN } = process.env;

const updateConfiguration = async (req: NextRequest) => {
    const formData = await req.json();

    const { task, scope } = formData;

    const configurationFilePath = mergePath(process.env.CONFIG_BUILDER_PATH!, `_config/config.${scope.toLowerCase()}.json`);

    // get config entries by a scope
    const entries = fs.readFileSync(configurationFilePath, 'utf8');

    // update configuration
    const response = await axios.patch(`${HELPER_SERVER_ORIGIN}/completion/configuration/update`, { task, scope, entries });

    const configuration = response.data;

    // update file entries
    fs.writeFileSync(configurationFilePath, JSON.stringify(configuration, null, 2));

    return Response.json({ comment: '' });
}

export default updateConfiguration