import { Injectable } from '@nestjs/common';

@Injectable()
export class ExchengeService {

   async convertAmount({from, to, amount }): Promise<any>{
    throw new Error();
   } 
}
