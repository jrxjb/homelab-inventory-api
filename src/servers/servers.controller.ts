import { Controller, Get } from '@nestjs/common';
import type { Request } from 'express';

@Controller('servers')
export class ServersController {
@Get()
findAll(): string {
    return 'This action returns all cats';
  }

}


@Controller('server1')
export class Server1Controller {
@Get()
findAll(): string {
    return 'Server 1';
  }

}
