import { AccountModel } from '../models/account-models'

type AuthenticationParams = {
  email: string
  password: FunctionStringCallback
}

export interface Authentication {
  auth (params: AuthenticationParams): Promise<AccountModel>
}
