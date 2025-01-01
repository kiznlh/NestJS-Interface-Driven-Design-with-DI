import { Inject, Injectable } from '@nestjs/common';
import { IBlogDatabaseService } from '../interfaces/blog-database-service.interface';
import { CreateBlogDto } from '../dto/create-blog.dto';

@Injectable()
export class BlogService {
    constructor(
        @Inject('IBlogDatabaseService')
        private readonly blogDatabaseService: IBlogDatabaseService,
    ) {}

    async getBlogs() {
        return await this.blogDatabaseService.findAll();
    }

    async getBlogById(id: string) {
        return await this.blogDatabaseService.findById(id);
    }

    async createBlog(blog: CreateBlogDto) {
        return await this.blogDatabaseService.create(blog);
    }
}
