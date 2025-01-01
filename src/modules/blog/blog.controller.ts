import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogService } from './services/blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller('blog')
export class BlogController {
    constructor(
        private readonly blogService: BlogService,
    ) {}

    @Get()
    async getBlogs() {
        return await this.blogService.getBlogs();
    }

    @Get(':id')
    async getBlogById(@Param('id') id: string) {
        return await this.blogService.getBlogById(id);
    }

    @Post()
    async createBlog(@Body() blogDto: CreateBlogDto) {
        return await this.blogService.createBlog(blogDto);
    }
}
