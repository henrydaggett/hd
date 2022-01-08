import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-container',
  styleUrl: 'page-container.css',
  shadow: true,
})
export class PageContainer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
