import { applyDecorators, Type } from '@nestjs/common';
import { ApiOkResponse, ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class ResponseManyDto<TData> {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ isArray: true, example: ['<message>'] })
  message: string[];

  @ApiProperty({ nullable: true, example: '<error message>' })
  error: string;

  data: TData[];
}

export class ResponseOneDto<TData> {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ isArray: true, example: ['<message>'] })
  message: string[];

  @ApiProperty({ nullable: true, example: '<error message>' })
  error: string;

  data: TData;
}

export const ApiResponseMany = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResponseManyDto) },
          { properties: { data: { items: { $ref: getSchemaPath(model) } } } },
        ],
      },
    }),
  );
};

export const ApiResponseOne = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResponseOneDto) },
          { properties: { data: { $ref: getSchemaPath(model) } } },
        ],
      },
    }),
  );
};
