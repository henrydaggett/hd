import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-stack',
  styleUrl: 'v-stack.css',
  shadow: true,
})
export class VStack {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
