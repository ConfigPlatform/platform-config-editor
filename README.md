# Platform Config Editor

This part of the project is responsible for the client-side functionality. The client sends requests through the Next.js API route to interact with the server, which acts as a configuration generator. The API route reads or writes files in JSON format, and responses are obtained through the file system. This approach enables communication between the client and the server for configuration-related operations.

## Tech

-React and Next.js
-TypeScript
-State management – Zustand
-CSS - Tailwind CSS

## Installation and Run

Follow these steps to install and run the project:

1. Clone the Project:

```bash
git clone <https://github.com/ConfigPlatform/platform-config-editor.git>
cd project_name
```

2. Install Dependencies:

To install the required packages, run:

```bash
npm install
```

This command will install all the necessary libraries and tools specified in the package.json file.

3. Create env local file and add necessary variables:

### Environment Variables

This project utilizes the following environment variables:

- `NEXT_PUBLIC_CLIENT_ORIGIN`: Defines the origin URL of the client side of the application. Currently set to `http://localhost:4000`.

- `HELPER_SERVER_ORIGIN`: Defines the origin URL of the helper server. Currently set to `http://localhost:5000`.

- `CONFIG_PATH`: Defines the path to the configuration builder [config-kompot] (https://github.com/ConfigPlatform/config-kompot.git). Currently set to `C:/Users/marin/OneDrive/Рабочий стол/ConfigPlatform/config-kompot`.
  Please ensure you use your own path to the config-compot. This path shown as an example.

### Your .env.local file should look like this:

```bash
NEXT_PUBLIC_CLIENT_ORIGIN=http://localhost:3000
HELPER_SERVER_ORIGIN=http://localhost:5000
CONFIG_BUILDER_PATH=/Users/m/a/platf/platform-config-builder
PLATFORM_CLIENT_PATH=/Users/m/a/platf/platform-client
CONFIG_PATH=/Users/m/a/platf/config-kompot
```

4. To start the client in development mode, use the following command:

```bash
npm run dev
```
