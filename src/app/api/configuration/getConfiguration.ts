import mergePath from '@/app/util/mergePath';
import fs from 'fs-extra';

const {CONFIG_PATH} = process.env;

const getConfiguration = () => {
  const entityConfigPath = mergePath(CONFIG_PATH!, 'config.entity.json');
  const footerConfigPath = mergePath(CONFIG_PATH!, 'config.footer.json');
  const handlerConfigPath = mergePath(CONFIG_PATH!, 'config.handler.json');
  const navbarConfigPath = mergePath(CONFIG_PATH!, 'config.navbar.json');
  const modalConfigPath = mergePath(CONFIG_PATH!, 'config.modal.json');
  const pageConfigPath = mergePath(CONFIG_PATH!, 'config.page.json');
  const sidepanelConfigPath = mergePath(CONFIG_PATH!, 'config.sidepanel.json');

  const entities = JSON.parse(fs.readFileSync(entityConfigPath, 'utf8')).entities;
  const footer = JSON.parse(fs.readFileSync(footerConfigPath, 'utf8'));
  const handlers = JSON.parse(fs.readFileSync(handlerConfigPath, 'utf8')).handlers;
  const navbar = JSON.parse(fs.readFileSync(navbarConfigPath, 'utf8')).navbar;
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
