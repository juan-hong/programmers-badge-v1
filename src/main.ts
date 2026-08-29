import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadgeService } from './badge/badge.service';

async function bootstrap() {
  // HTTP 서버를 띄우지 않고 NestJS 모듈/서비스 컨텍스트만 생성
  const app = await NestFactory.createApplicationContext(AppModule);
  
  try {
    const badgeService = app.get(BadgeService);
    await badgeService.createBadge();
    console.log('Badge updated successfully!');
  } catch (error) {
    console.error('Failed to create badge:', error);
    process.exit(1);
  } finally {
    // 작업 완료 후 NestJS 애플리케이션 정상 종료
    await app.close();
  }
}
bootstrap();
