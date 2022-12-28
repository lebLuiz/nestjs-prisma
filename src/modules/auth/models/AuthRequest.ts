import { Request } from 'express';
import { User } from 'src/types/classes/user.entity';

export interface AuthRequest extends Request {
  user: User;
}
