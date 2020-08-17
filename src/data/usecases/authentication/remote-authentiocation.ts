import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { AuthenticationParams } from '@/domain/usecases/authentication'
import { HttpResponse, HttpEstatusCode } from '../../protocols/http/http-response'
import { InvalidCredentialsError } from '../../../domain/errors/invalid-credentials-error'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const HttpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (HttpResponse.statusCode) {
      case HttpEstatusCode.unathorized: throw new InvalidCredentialsError()
      default: return Promise.resolve()
    }
  }
}
