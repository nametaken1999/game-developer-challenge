import { Sprite } from "pixi.js";
import type { GameConfig } from "./gameConfig";

export class Player {
  public sprite: Sprite;

  public health: number;

  public rotationSpeed: number;
  public speed: number;

  constructor(private config: GameConfig) {
    this.health = config.player.maxHealth;

    this.speed = config.player.moveSpeed;
    this.rotationSpeed = config.player.rotationSpeed;

    this.sprite = Sprite.from("/assets/ships/player.png");

    this.sprite.anchor.set(0.5);
  }

  update(deltaSeconds: number): void {
    // Movimento será implementado aqui.
  }

  takeDamage(amount: number): void {
    this.health = Math.max(0, this.health - amount);
  }

  isDead(): boolean {
    return this.health <= 0;
  }
}