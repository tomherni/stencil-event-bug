import { newSpecPage } from '@stencil/core/testing';
import { MyChild } from '../my-child/my-child';
import { MyParent } from './my-parent';

describe('my-parent', () => {
  it('logs 3 separate steps to the console', async () => {
    const spy = jest.spyOn(console, 'log');

    await newSpecPage({
      components: [MyParent, MyChild],
      html: '<my-parent></my-parent>',
    });

    // Let's wait a bit here just in case, right? ;)
    await new Promise(resolve => setTimeout(resolve, 100));

    // PASS
    expect(spy).toHaveBeenNthCalledWith(1, 'adding event listener');
    expect(spy).toHaveBeenNthCalledWith(2, 'dispatching event');

    // FAIL (because the event listener was not being called)
    expect(spy).toHaveBeenNthCalledWith(3, 'event received');
  });
});
