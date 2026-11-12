import { Module } from '@nestjs/common';
import { ServersController,Server1Controller } from './servers.controller';
import { ServersService } from './servers.service';

@Module({
  controllers: [ServersController, Server1Controller],
  providers: [ServersService],
})
export class ServersModule {}
