import { asynchronousBodyHandler, Matchers, MessageConsumerPact } from '@pact-foundation/pact';
import * as path from "path";

describe('the pact serialization issue', () => {
  const messagePact = new MessageConsumerPact({
    dir: path.resolve(process.cwd(), 'pacts'),
    log: path.resolve(process.cwd(), 'pacts', 'pact.log'),
    consumer: 'MyConsumer',
    provider: 'MyProvider'
  });

  it('will expect a message with metadata', () => {
    return messagePact
      .expectsToReceive('a message')
      .withContent({
        payload: 'my-payload'
      })
      .withMetadata({
        'content-type': 'application/json',
        kafka_topic: Matchers.term({
          generate: 'project-production-stage-topic',
          matcher: new RegExp('project-(production|validation)-stage-topic').source
        })
      })
      .verify(asynchronousBodyHandler((event) => Promise.resolve(event)));
  });
});
