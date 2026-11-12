import { ServerRole, ServerStatus } from './server.enums';

export interface Server {
  id: string;
  name: string;
  hostname: string;
  ip?: string;
  os?: string;
  role: ServerRole;
  status: ServerStatus;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}



/*
_id	ObjectId	autogenerado
name	string	obligatorio, 2–50, trim
hostname	string	obligatorio, único, minúsculas, trim, regex de hostname
ip	string	opcional, IPv4 válida
os	string	opcional, máx. 40
role	enum	dns · web · db · media · backup · other — obligatorio
status	enum	online · offline · maintenance — default online
notes	string	opcional, máx. 500
createdAt / updatedAt	Date	automáticos (timestamps: true)*/