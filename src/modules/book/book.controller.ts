import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookDTO } from 'src/types/types/book.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  /*
  * Qual a necessidade de utilizar `async` nas chamadas das funções?
  * R: Pelo fato do BookService retornar uma Promise.
  * Como eu estou já dando um return direto, eu não preciso colocar `return await this.bookService.create(data);` ...
  * O await fica "oculto" nesse caso!
  */

  @Post()
  async create(@Body() data: BookDTO) {
    return this.bookService.create(data);
  }

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: BookDTO) {
    return this.bookService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.bookService.delete(id);
  }
}
