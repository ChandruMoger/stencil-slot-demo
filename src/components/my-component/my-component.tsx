import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  detailBox: HTMLElement;
  showDetails = () => {
    this.detailBox.classList.remove('display-none');
  };
  render() {
    return (
      <div>
        <button onClick={this.showDetails}>Show detail</button>
        <span
          id="detail"
          ref={elem => {
            this.detailBox = elem;
          }}
          class="display-none"
        >
          <slot></slot>
        </span>
      </div>
    );
  }
}
