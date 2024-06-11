import * as dayjs from 'dayjs';

import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsDateFormat(
  format: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isDateFormat',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          const parsedDate = dayjs(value, format, true);

          // Verify date exists
          if (!parsedDate.isValid() || parsedDate.format(format) !== value) {
            return false;
          }
          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a valid date in the following format: ${format}`;
        },
      },
    });
  };
}
