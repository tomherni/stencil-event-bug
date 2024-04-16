import { newSpecPage } from '@stencil/core/testing';
import { MyChild } from './my-child';

describe('my-child', () => {
  it('logs "dispatching event" to the console', async () => {
    const spy = jest.spyOn(console, 'log');

    await newSpecPage({
      components: [MyChild],
      html: '<my-child></my-child>',
    });

    // PASS
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('dispatching event');
  });
});
