import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        // nu verifica rutele de înregistrare / login
        if (req.path.startsWith('/auth/')) {
            return next();
        }
        const auth = req.headers.authorization;
        if (!auth || !auth.startsWith('Bearer ')) {
            throw new UnauthorizedException('Token missing');
        }
        const token = auth.slice(7);
        try {
            jwt.verify(token, process.env.JWT_SECRET || 'defaultSecret');
            next();
        } catch {
            throw new UnauthorizedException('Invalid token');
        }
    }
}
