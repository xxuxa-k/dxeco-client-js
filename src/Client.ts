// Client.ts

export default class Client {
  public constructor(options?: ClientOptions) {
  }

  public async request<ResponseBody>({
    path,
    method,
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
}

type Method = "get" | "post" | "patch" | "delete"
