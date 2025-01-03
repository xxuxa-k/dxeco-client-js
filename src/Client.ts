// Client.ts

export default class Client {
  public constructor(options?: ClientOptions) {
  }

  public async request<ResponseBody>({
    path,
    method,
    query,
    body,
    auth,
  }: RequestParameters): Promise<ResponseBody> {
    return {} as ResponseBody
  }

}

export interface ClientOptions {
  auth?: string
}

export interface RequestParameters {
  path: string
  method: Method
  query?: QueryParams
  body?: Record<string, unknown>
  auth?: string
}

type QueryParams = Record<string, string | number | string[]> | URLSearchParams

type Method = "get" | "post" | "patch" | "delete"
