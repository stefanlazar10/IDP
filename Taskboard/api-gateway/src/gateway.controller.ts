import { Controller, All, Req, Res } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';               // din @nestjs/axios, nu common
import { Request, Response } from 'express';

@Controller()
export class GatewayController {
    constructor(private readonly httpService: HttpService) { }

    @All('auth/*')
    proxyAuth(@Req() request: Request, @Res() response: Response) {
        const path = request.params[0];                       // ruta după /auth/
        const url = `http://auth-service:3000/${path}`;
        this.httpService.request({
            method: request.method,
            url,
            data: request.body,
            headers: request.headers,
        }).subscribe({
            next: resp => response.status(resp.status).send(resp.data),
            error: err => response.status(err.response?.status || 500).send(err.response?.data || err.message),
        });
    }

    @All('boards/*')
    proxyBoards(@Req() request: Request, @Res() response: Response) {
        const path = request.params[0];
        const url = `http://board-service:3000/${path}`;
        this.httpService.request({
            method: request.method,
            url,
            data: request.body,
            headers: request.headers,
        }).subscribe({
            next: resp => response.status(resp.status).send(resp.data),
            error: err => response.status(err.response?.status || 500).send(err.response?.data || err.message),
        });
    }

    @All('tasks/*')
    proxyTasks(@Req() request: Request, @Res() response: Response) {
        const path = request.params[0];
        const url = `http://task-service:3000/${path}`;
        this.httpService.request({
            method: request.method,
            url,
            data: request.body,
            headers: request.headers,
        }).subscribe({
            next: resp => response.status(resp.status).send(resp.data),
            error: err => response.status(err.response?.status || 500).send(err.response?.data || err.message),
        });
    }
}
