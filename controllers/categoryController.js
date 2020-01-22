class categoryController {
// get / -> index
static index = (req, res) => {
  res.send('Category index response!');
}
//post / -> create
static create = (req, res) => {
  res.send('Category create response!');
}
//get /:id -> read
static read = (req, res) => {
  res.send('Category read response!');
}
//put /:id -> update
static update = (req, res) => {
  res.send('Category update response!');
}
//delete /:id -> delete
static delete = (req, res) => {
  res.send('Category delete response!');
}



}

module.exports = categoryController;
