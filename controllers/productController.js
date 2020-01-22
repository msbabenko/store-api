class productController {
// get / -> index
static index = (req, res) => {
  res.send('Product index response!');
}
//post / -> create
static create = (req, res) => {
  res.send('Product create response!');
}
//get /:id -> read
static read = (req, res) => {
  res.send('Product read response!');
}
//put /:id -> update
static update = (req, res) => {
  res.send('Product update response!');
}
//delete /:id -> delete
static delete  = (req, res) => {
  res.send('Product delete response!');
}



}

module.exports = productController;
