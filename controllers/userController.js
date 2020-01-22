class userController {
// get / -> index
static index = (req, res) => {
  res.send('User index response!');
}
//post / -> create
static create = (req, res) => {
  res.send('User create response!');
}
//get /:id -> read
static read = (req, res) => {
  res.send('User read response!');
}
//put /:id -> update
static update = (req, res) => {
  res.send('User update response!');
}
//delete /:id -> delete
static delete = (req, res) => {
  res.send('User delete response!');
}



}

module.exports = userController;
