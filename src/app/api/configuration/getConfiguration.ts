import mergePath from '@/app/util/mergePath';
import fs from 'fs-extra';

const {CONFIG_BUILDER_PATH} = process.env;

const getConfiguration = async () => {
  const configPath = mergePath(CONFIG_BUILDER_PATH!, '_config');
  const entityConfigPath = mergePath(configPath, 'config.entity.json');
  const footerConfigPath = mergePath(configPath, 'config.footer.json');
  const handlerConfigPath = mergePath(configPath, 'config.handler.json');
  const navbarConfigPath = mergePath(configPath, 'config.navbar.json');
  const modalConfigPath = mergePath(configPath, 'config.modal.json');
  const pageConfigPath = mergePath(configPath, 'config.page.json');
  const sidepanelConfigPath = mergePath(configPath, 'config.sidepanel.json');

  const entities = JSON.parse(fs.readFileSync(entityConfigPath, 'utf8')).entities;
  const footer = JSON.parse(fs.readFileSync(footerConfigPath, 'utf8'));
  const handlers = JSON.parse(fs.readFileSync(handlerConfigPath, 'utf8')).handlers;
  const navbar = JSON.parse(fs.readFileSync(navbarConfigPath, 'utf8')).content;
  const modals = JSON.parse(fs.readFileSync(modalConfigPath, 'utf8')).modals;
  const pages = JSON.parse(fs.readFileSync(pageConfigPath, 'utf8')).pages;
  const sidepanels = JSON.parse(fs.readFileSync(sidepanelConfigPath, 'utf8')).sidepanels;

  const configuration: {[name: string]: object | object[]} = {
    entities,
    footer,
    navbar,
    modals,
    pages,
    sidepanels,
    handlers,
  };

  return Response.json(configuration);
};

export default getConfiguration;
