import { Application } from 'pixi.js';

export class Game {
  private app: Application;

  constructor(private container: HTMLElement) {
    this.app = new Application();

    void this.initialize();
  }

  private async initialize() {
    await this.app.init({
      resizeTo: this.container,
      background: '#1d6fa5',
      antialias: true,
    });

    this.container.appendChild(this.app.canvas);
  }

  destroy() {
    this.app.destroy(true, {
      children: true,
      texture: true,
    });
  }
}