import { HttpPostClient, HttpResponse, HttpEstatusCode } from '@/data/protocols/http'
import { AuthenticationParams, Authentication } from '@/domain/usecases'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const HttpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (HttpResponse.statusCode) {
      case HttpEstatusCode.ok: return HttpResponse.body
      case HttpEstatusCode.unathorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
