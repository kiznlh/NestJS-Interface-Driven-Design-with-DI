import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './services/blog.service';
import { MockUserDatabaseService } from './services/mock-blog-database.service';
import { BlogDatabaseService } from './services/blog-database.service';
import { Blog } from 'src/Blog.entity';
@Module({
  controllers: [BlogController],
  providers: [
    BlogService,
    Blog,
    {
      provide: 'IBlogDatabaseService',
      // Đổi class sang MockUserDatabaseService để sử dụng dữ liệu giả lập
      useClass: MockUserDatabaseService
      // Đổi class sang BlogDatabaseService để sử dụng dữ liệu từ database
      //useClass: BlogDatabaseService
    }
  ]
})
export class BlogModule {}
