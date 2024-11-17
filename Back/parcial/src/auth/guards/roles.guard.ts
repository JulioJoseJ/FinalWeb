import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) {
      return true; // Si la ruta no tiene roles definidos, se permite el acceso.
    }
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.includes(user.role); // Verifica si el rol del usuario está en los roles permitidos.
  }
}
