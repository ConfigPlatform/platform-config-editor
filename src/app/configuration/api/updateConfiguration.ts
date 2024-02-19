import {NextRequest} from "next/server";
import axios from "axios";
import mergePath from "@/helper/mergePath";
import fs from "fs";
import {get} from "lodash";

const updateConfiguration = async (req: NextRequest) => {
    const formData = await req.json();

    const { task, scope } = formData;

    const configurationFilePath = mergePath(process.env.CONFIG_BUILDER_PATH!, `_config/config.${scope.toLowerCase()}.json`);

    // get config entries by a scope
    const entriesStr = fs.readFileSync(configurationFilePath, 'utf8');

    const entriesObj = JSON.parse(entriesStr);

    // update configuration
    const response = await axios.patch(`${process.env.HELPER_SERVER_ORIGIN}/completion/configuration/update`, { task, scope, entries: entriesObj });

    const configuration = response.data;

    // update file entries
    fs.writeFileSync(configurationFilePath, JSON.stringify(configuration, null, 2));

    return Response.json({ comment: '' });
}

export default updateConfiguration