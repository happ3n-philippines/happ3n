import { Router } from 'express';

import ApisController from 'App/Controllers/Http/ApisController';
import UsersController from 'App/Controllers/Http/UsersController';

import isAuth from 'App/Middleware/Auth';
import EventsController from 'App/Controllers/Http/EventsController';

const Route = Router();

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

Route.get('/health', ApisController.health);
Route.get('/config', ApisController.config);

Route.get('/me', isAuth, UsersController.me);
Route.post('/register', isAuth, UsersController.register);
Route.post('/event/create', isAuth, EventsController.create);
Route.get('/event/view_all_by_user', isAuth, EventsController.view_all_by_user);

export { Route as routes };
