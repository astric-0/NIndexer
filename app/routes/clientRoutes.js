import express from 'express';
import * as mdw from '../middlewares/index.js';
import { clientControllers as cc } from '../controllers/index.js';

const router = express.Router();

router.post('/index', mdw.checkHtmlBody, mdw.checkUrlInIndexerDb, mdw.checkUrlIsActive, cc.indexUrl);

export default router;