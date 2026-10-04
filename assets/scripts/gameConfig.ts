export interface GameConfig {
  sessionTime: number;
  enemySpawnTime: number;

  player: {
    maxHealth: number;
    moveSpeed: number;
    rotationSpeed: number;
  };

  projectile: {
    speed: number;
    damage: number;
    lifetime: number;
  };

  chaser: {
    health: number;
    speed: number;
    damage: number;
  };

  shooter: {
    health: number;
    speed: number;
    attackRange: number;
    cooldown: number;
  };
}

export const defaultGameConfig: GameConfig = {
  sessionTime: 120,
  enemySpawnTime: 3,

  player: {
    maxHealth: 100,
    moveSpeed: 150,
    rotationSpeed: 2.5,
  },

  projectile: {
    speed: 400,
    damage: 20,
    lifetime: 2,
  },

  chaser: {
    health: 50,
    speed: 80,
    damage: 25,
  },

  shooter: {
    health: 40,
    speed: 60,
    attackRange: 350,
    cooldown: 2,
  },
};

