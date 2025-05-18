import { PartialType } from '@nestjs/mapped-types';
import { CreateNebulaDto } from './create-nebula.dto';

export class UpdateNebulaDto extends PartialType(CreateNebulaDto) {}
