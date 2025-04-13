import { applyDecorators, Controller } from '@nestjs/common';

export function AutoController(controllerClass: Function): ClassDecorator {
  const controllerNameKebab = controllerClass.name
    .replace('Controller', '')
    .replace(/([a-z])([A-Z])/g, '$1-$2') // adminSecret -> admin-Secret
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2') // XMLParser -> XML-Parser
    .toLowerCase(); // admin-Secret -> admin-secret
  return applyDecorators(Controller(controllerNameKebab));
}
