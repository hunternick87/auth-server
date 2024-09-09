
import express, { type Request, type Response, type NextFunction } from 'express';


export default function middleware(req: Request, res: Response, next: NextFunction) {
    console.log(req.cookies);
    console.log(req.headers);
    console.log('middleware');
    next();
}


