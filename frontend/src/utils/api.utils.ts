import { ApiModule } from '../constants/api.constants';

export const getApiUrl = (module: ApiModule, endpoint: string): string => {
  const PROT = import.meta.env.VITE_API_PROT;
  const HOST = import.meta.env.VITE_API_HOST;
  const PORT = import.meta.env.VITE_API_PORT;
  const PATH = import.meta.env.VITE_API_PATH;

  return `${PROT}://${HOST}${PORT !== '' ? ':' + PORT : ''}/${PATH}/${module}${
    endpoint !== '' ? '/' + endpoint : ''
  }`;
};
