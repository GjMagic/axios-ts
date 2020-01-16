import { AxiosInstence } from './types/index';
import Axios from './core/Axios';
import { extend } from './helps/utils';

function createInstance(): AxiosInstence {
  const context = new Axios();
  const instance = Axios.prototype.request.bind(context);

  extend(instance, context);

  return instance as AxiosInstence;
}

const axios = createInstance();

export default axios;