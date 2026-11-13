import { Controller, Get,Post,Body } from '@nestjs/common';
import type { Request } from 'express';
import {CreateServerDto} from "./dto/create-server.dto"


@Controller('servers')
export class ServersController {
@Get()
findAll(): string {
    return 'This action returns all cats';
  }



@Post()
create(@Body() body: CreateServerDto) {
    return { id: '1', ...body };
  }

}


@Controller('server1')
export class Server1Controller {
@Get()
findAll(): string {
    return 'Server 1';
  }

}

