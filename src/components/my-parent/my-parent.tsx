import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'my-parent',
  shadow: true,
})
export class MyParent {
  @Element() private element: HTMLElement;

  constructor() {
    console.log('adding event listener');

    this.element.addEventListener('my-event', () => console.log('event received'));
  }

  render() {
    return <my-child />;
  }
}
