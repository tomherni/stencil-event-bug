# readme

This repo reproduces an event issue.

## Get started

```shell
npm install
npm start
```

The `<my-parent>` component:
- adds an event listener for "my-event" in the `constructor`
- renders the component `<my-child>` in its JSX template

The `<my-child>` component:
- dispatches a "my-event" event in the `componentDidLoad` lifecycle method

`<my-parent>`should receive the "my-event" event from `<my-child>`. This works as expected in the browser, but not in the SPEC test.

To demonstrate this, 3 messages are logged to the console:

1. "adding event listener" by `<my-parent>`
2. "dispatching event" by `<my-child>`
3. "event received" by `<my-parent>`

In the browser, all three messages are logged. In "my-parent.spec.ts" only the first two messages are logged. The event handler is not being called.
