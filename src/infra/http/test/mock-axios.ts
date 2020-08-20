import axios from 'axios'
import * as faker from 'faker' // import { internet } from 'faker'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue({
    data: faker.random.objectElement(),
    status: faker.random.number()
  })
  return mockedAxios
}
