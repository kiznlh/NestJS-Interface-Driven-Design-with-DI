import { Injectable } from '@nestjs/common';
import { IBlogDatabaseService } from '../interfaces/blog-database-service.interface';
import { Blog } from 'src/Blog.entity';
import { CreateBlogDto } from '../dto/create-blog.dto';
import { BlogResponseDto } from '../dto/blog-response.dto';

//import { InjectModel } from '@nestjs/mongoose';
//import { Model } from 'mongoose';

@Injectable()
export class BlogDatabaseService implements IBlogDatabaseService {
  constructor(
    //@InjectModel(Blog.name) private blogModel: Model<Blog>
    private blogModel: Blog
) {}
// Ở đây cần có những logic lấy data từ database thật (Model Blog), và từ đó chuyển qua dạng BlogResponseDto
// Nó nên là 1 hàm khác, sau đó bỏ vào hàm findAll(), findById(), create() ở dưới
  async findAll(): Promise<BlogResponseDto[]> {
    console.log('BlogDatabaseService.findAll()');
    return null;
    //return this.blogModel.find().exec();
  }

  async findById(id: string): Promise<BlogResponseDto> {
    console.log('BlogDatabaseService.findById()');
    return null;
    //return this.blogModel.findById(id).exec();
  }

  async create(blog: CreateBlogDto): Promise<BlogResponseDto> {
    console.log('BlogDatabaseService.create()');
    return null;
    // const newBlog = new this.blogModel(blog);
    // return newBlog.save();
  }
}
