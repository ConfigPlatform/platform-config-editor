import getConfiguration from '@/app/api/configuration/getConfiguration';
import updateConfiguration from '@/app/api/configuration/updateConfiguration';
import removeConfiguration from '@/app/api/configuration/removeConfiguration';

export const GET = getConfiguration;
export const PATCH = updateConfiguration;
export const DELETE = removeConfiguration;
