export function ControllerFromClassName(cls: Function): string {
  return cls.name.replace('Controller', '').toLowerCase();
}
