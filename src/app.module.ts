import { Module } from '@nestjs/common';
import { ExchengeModule } from './exchenge/exchenge.module';



@Module({
  imports: [ExchengeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
