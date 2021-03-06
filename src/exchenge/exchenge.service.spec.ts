import { Test, TestingModule } from '@nestjs/testing';
import { ExchengeService } from './exchenge.service';

describe('ExchengeService', () => {
  let service: ExchengeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExchengeService],
    }).compile();

    service = module.get<ExchengeService>(ExchengeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  describe('convertAmount', () => {
    it('should be throw called with invalid params', async () => {
     await expect(
       service.convertAmount({from:'', to :'', amount:0}),
       ).rejects.toThrow();
    });
});
