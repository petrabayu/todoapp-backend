const router = require("express").Router();

const todoItemModel = require("../../models/schema/todo");

// create todo item
router.post("/api/item", async (req, res) => {
  try {
    const newItem = new todoItemModel({
      item: req.body.item,
    });

    const saveItem = await newItem.save();
    res.status(200).json("New Item Added Successfully");
  } catch (error) {
    res.json(error);
  }
});

// get all data from todo
router.get("/api/item", async (req, res) => {
  try {
    const allTodoItem = await todoItemModel.find({});
    res.status(200).json(allTodoItem);
  } catch (error) {
    res.json(error);
  }
});

// get a todo item
router.get("/api/item/:id", async (req, res) => {
  try {
    const allTodoItem = await todoItemModel.findById(req.params.id);
    res.status(200).json(allTodoItem);
  } catch (error) {
    res.json(error);
  }
});

//update a todo item
router.put("/api/item/:id", async (req, res) => {
  try {
    const updateItem = await todoItemModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Item Updated");
  } catch (error) {
    res.json(error);
  }
});

//delete a todo item
router.delete("/api/item/:id", async (req, res) => {
  try {
    const deleteTodoItem = await todoItemModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Todo Item Deleted");
  } catch (error) {
    res.json(error);
  }
});

//delete all todo
router.delete("/api/item", async (req, res) => {
  try {
    const deleteTodoItem = await todoItemModel.deleteMany();
    res.status(200).json("All Todo Item are Deleted");
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
