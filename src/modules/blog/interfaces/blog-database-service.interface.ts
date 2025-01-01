import { CreateBlogDto } from "../dto/create-blog.dto";
import { BlogResponseDto } from "../dto/blog-response.dto";

export interface IBlogDatabaseService {
    findAll(): Promise<BlogResponseDto[]>;
    findById(id: string): Promise<BlogResponseDto>;
    create(blog: CreateBlogDto): Promise<BlogResponseDto>;
  }
  