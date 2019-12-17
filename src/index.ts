import { AxiosRequestConfig } from './types/index';
import xhr from './xhr';
import { buildUrl } from './helps/url';
import { transformRequest } from './helps/data';

function axios(config: AxiosRequestConfig): void {
  processConfig(config);
  xhr(config);
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config);
  config.data = transformRequestData(config);
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config;
  return buildUrl(url, params);
}

function transformRequestData(config: AxiosRequestConfig): void {
  return transformRequest(config.data);
}

export default axios