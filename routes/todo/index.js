const router = require("express").Router();

const todoItemModel = require("../../models/schema/todo");

router.get("/", (req, res, next) => {
  res.send("Welcome to article home routes!");
});

// create todo item
router.post("/post/items", async (req, res) => {
  try {
    const newItem = new todoItemModel({
      item: req.body.item,
    });

    const saveItem = await newItem.save();
    res.status(200).json("New Todo Added Successfully");
  } catch (error) {
    res.json(error);
  }
});

// get all data from todo
router.get("/get/items", async (req, res) => {
  try {
    const allTodoItem = await todoItemModel.find({});
    res.status(200).json(allTodoItem);
  } catch (error) {
    res.json(error);
  }
});

// get a todo item
router.get("/get/items/:id", async (req, res) => {
  try {
    const allTodoItem = await todoItemModel.findById(req.params.id);
    res.status(200).json(allTodoItem);
  } catch (error) {
    res.json(error);
  }
});

//update a todo item
router.put("/put/items/:id", async (req, res) => {
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
router.delete("/delete/items/:id", async (req, res) => {
  try {
    const deleteTodoItem = await todoItemModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Todo Item Deleted");
  } catch (error) {
    res.json(error);
  }
});

//delete all todo
router.delete("/delete/items", async (req, res) => {
  try {
    const deleteTodoItem = await todoItemModel.deleteMany();
    res.status(200).json("All Todo Item are Deleted");
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
