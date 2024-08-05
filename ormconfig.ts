import { ConfigModule } from '@nestjs/config';
import databaseConfig from 'src/database/database.config';
import { DataSource } from 'typeorm';

ConfigModule.forRoot({
  isGlobal: true,
  load: [databaseConfig],
});

export default new DataSource({
  ...databaseConfig(),
  entities: ['src/**/*.entity.ts'],
} as any);
