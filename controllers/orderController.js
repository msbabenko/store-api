class orderController {
// get / -> index
static index = (req, res) => {
  res.send('Order index response!');
}
//post / -> create
static create = (req, res) => {
  res.send('Order create response!');
}
//get /:id -> read
static read  = (req, res) => {
  res.send('Order read response!');
}
//put /:id -> update
static update =  (req, res) => {
  res.send('Order update response!');
}
//delete /:id -> delete
static delete = (req, res) => {
  res.send('Order delete response!');
}



}

module.exports = orderController;
