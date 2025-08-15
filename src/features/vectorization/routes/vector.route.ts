import { Router, Router as ExpressRouter } from 'express';
export const vectorRouter: ExpressRouter = Router();
import { vectorizeText } from '../controller/vector.controller';

// Define routes
vectorRouter.post('/', vectorizeText);
