import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsIP,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';

export enum ServerRole {
  DNS = 'dns',
  WEB = 'web',
  DB = 'db',
  MEDIA = 'media',
  BACKUP = 'backup',
  OTHER = 'other',
}

export enum ServerStatus {
  ONLINE = 'online',
  OFFLINE = 'offline',
  MAINTENANCE = 'maintenance',
}

export class CreateServerDto{


@IsString()
@IsNotEmpty({ message: 'El nombre es obligatorio' })
@Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
@Length(2, 50, { message: 'El nombre debe tener entre 2 y 50 caracteres' })
name: string;

@IsString()
@IsNotEmpty({ message: 'El hostname es obligatorio' })
@Transform(({ value }) =>typeof value === 'string' ? value.trim().toLowerCase() : value,)
hostname: string;

@IsOptional()
@IsIP('4', { message: 'Debe ser una dirección IPv4 válida' })
ip?:string;

@IsOptional()
@IsString()
@MaxLength(40, { message: 'El sistema operativo debe tener máximo 40 caracteres' })
os?: string;


@IsNotEmpty({ message: 'El rol es obligatorio' })
@IsEnum(ServerRole, {
    message: 'El rol debe ser: dns, web, db, media, backup u other',
  })
role: ServerRole;

@IsOptional()
@IsEnum(ServerStatus, { message: 'El estado debe ser: online, offline o maintenance',})
status?: ServerStatus = ServerStatus.ONLINE;

@IsString()
@IsOptional()
@MaxLength(500)
notes?:string
}

