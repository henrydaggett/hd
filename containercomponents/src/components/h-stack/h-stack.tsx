import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'h-stack',
  styleUrl: 'h-stack.css',
  shadow: true,
})
export class HStack {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
