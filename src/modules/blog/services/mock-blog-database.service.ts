import { Injectable } from '@nestjs/common';
import { IBlogDatabaseService } from '../interfaces/blog-database-service.interface';
import { CreateBlogDto } from '../dto/create-blog.dto';
import { BlogResponseDto } from '../dto/blog-response.dto';

@Injectable()
export class MockUserDatabaseService implements IBlogDatabaseService {
  private i = 2;
  private mockBlogs: BlogResponseDto[] = [
    { id: '1', title: 'Mock Blog', content: 'mock content' }
  ];

  async findAll(): Promise<BlogResponseDto[]> {
    return this.mockBlogs;
  }

  async findById(id: string): Promise<BlogResponseDto> {
    return this.mockBlogs.find(blog => blog.id === id);
  }

  async create(blog: CreateBlogDto): Promise<BlogResponseDto> {
    const newBlog = { id: this.i.toString(), ...blog };
    this.i++;
    this.mockBlogs.push(newBlog);
    return newBlog;
  }
}
