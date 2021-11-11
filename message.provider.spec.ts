import {MessageProviderPact} from '@pact-foundation/pact';
import * as path from "path";

describe('the pact serialization issue', () => {
  const messagePact = new MessageProviderPact({
      messageProviders: {
        'a message': () => new Promise((resolve, _reject) => {
            resolve({
              payload: 'my-payload'
            })
  })
      },
    pactUrls: [path.resolve(process.cwd(), 'pacts', 'myconsumer-myprovider.json')],
    provider: "MyProvider",
    }
  );

  it('verifies the expectations', () => {
    return messagePact.verify()
  })
});
