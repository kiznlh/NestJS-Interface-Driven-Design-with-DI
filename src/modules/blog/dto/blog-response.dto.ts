// File này phục vụ cho việc định nghĩa cấu trúc dữ liệu trả về cho client khi gọi API
// Tức là FE quy định cấu trúc dữ liệu trả về từ BE như thế nào

export class BlogResponseDto {
    id: string;
    title: string;
    content: string;
}