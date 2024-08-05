import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export default registerAs(
  'database',
  (): TypeOrmModuleOptions => ({
    type: 'cockroachdb',
    url:
      process.env.DATABASE_URL ||
      'postgresql://root:passwd@localhost:26257/defaultdb',
    autoLoadEntities: true,
    logging:
      process.env.NODE_ENV === 'development' ||
      process.env.DATABASE_QUERY_LOGGING === '1',
    // In production, you should run migrations differently or
    // enable migrationsRun to run them automatically
    migrationsRun: true,
    migrations: ['dist/src/database/migrations/*.js'],
    namingStrategy: new SnakeNamingStrategy(),
    // Enable synchronize to auto-create tables, handy during initial development
    // Use migrations to manage database changes thereafter
    // (once you have a production database / initial release ready)
    // synchronize: process.env.NODE_ENV === 'development',
  }),
);
