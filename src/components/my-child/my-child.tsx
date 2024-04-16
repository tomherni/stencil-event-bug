import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'my-child',
  shadow: true,
})
export class MyChild {
  @Element() private element: HTMLElement;

  componentDidLoad(): void {
    console.log('dispatching event');

    this.element.dispatchEvent(new Event('my-event', { bubbles: true, composed: true }));
  }

  render() {
    return <div>Hello world</div>;
  }
}
