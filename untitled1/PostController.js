import Post from "./Post.js"

class PostController{
    constructor() {

    }
    async create(req, res){
        try {
            const {author, title, content, picture} = req.body;
            const post = await Post.create({author, title, content, picture})
            res.status(200).json(post)
        }
        catch(e){
            res.status(500).json(e)
        }
    }

    async getAll(req, res){
        try {

        }
        catch (e){
            res.status(500).json(e)
        }
    }
    async getOne(req, res){
        try {

        }
        catch (e){
            res.status(500).json(e)
        }
    }
    async delete(req, res){
        try {

        }
        catch (e){
            res.status(500).json(e)
        }
    }
    async update(req, res){
        try {

        }
        catch (e){
            res.status(500).json(e)
        }
    }
}

export default new PostController();