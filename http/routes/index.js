import { Router } from 'express';
import uploadVideoRoute from './uploadVideoRouter';

const router = Router()

router.use('/' , uploadVideoRoute)


export default router