import express from  "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();
// to save a particular book
router.post("/", async (req, res) => {
    console.log(req.body);
    var noteText = "";
    try {
        if(!req.body.title ||
            !req.body.author ||
            !req.body.publishedYear
        ) {
            console.log("ok")
            return res.send({message: "Send the details of all files"});
        }

        
        // if(!req.body.noteContent) {
        //     noteText = "No note added yet";
        // }
        // else {
        //     noteText = req.body.noteContent;
        // }

        // console.log(noteContent);

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishedYear: req.body.publishedYear,
            // noteContent: noteText
        };
        // console.log("Book is going to save");
        const book = await Book.create(newBook);
        // console.log(book);
        // console.log("Book is saved");

        // return res.send(book);
    }    
    catch (err) {
        console.log(err.message);
        res.send({message: err.message});
    }
});

// get all books
router.get("/", async (req, res) => {
    try {
        const books = await Book.find({});
        // console.log("All books are sent");
        return res.json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        return res.send({message: error.message});
    }
    
});

// get one book by id
router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);

        if(!book) {
            
            return res.status(404).send({message: "Book not Found"});
        }

        return res.json(book);
    } catch (error) {
        console.log(error.message);
        return res.send({message: error.message});
    }
    
});

// update one book
router.put("/:id", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishedYear) {
            return res.status(400).send({ message: "Send the details of all fields" });
        }

        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedBook) {
            return res.status(404).send({ message: "Book not found" });
        } else {
            return res.status(200).send({ message: "Book updated successfully", book: updatedBook });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: err.message });
    }
});

// delete one book
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        
        return res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message, custom_msg: "book is not deleted" });
    }
});

export default router;


