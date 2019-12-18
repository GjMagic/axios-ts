import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types/index';
import xhr from './xhr';
import { buildUrl } from './helps/url';
import { transformRequest } from './helps/data';
import { processHeaders } from './helps/headers';
import { transformResponse } from './helps/data';

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config);
  return xhr(config).then(res => {
    return transformResponseData(res);
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config);
  config.headers = transformHeaders(config);
  config.data = transformRequestData(config);
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config;
  return buildUrl(url, params);
}

function transformRequestData(config: AxiosRequestConfig): void {
  return transformRequest(config.data);
}

function transformHeaders(config: AxiosRequestConfig) {
  const { headers, data } = config;
  processHeaders(headers, data);
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res;
}

export default axios