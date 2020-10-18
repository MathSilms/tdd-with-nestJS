import { Module } from '@nestjs/common';
import { ExchengeService } from './exchenge.service';

@Module({
  providers: [ExchengeService]
})
export class ExchengeModule {}
