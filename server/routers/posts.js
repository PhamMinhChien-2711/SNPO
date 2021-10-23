import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();
//http://localhost:5000/posts

router.get('/', getPosts);

router.post('/',verifyToken, createPost);

router.put('/',verifyToken, updatePost);

router.delete('/',verifyToken, deletePost);


export default router;