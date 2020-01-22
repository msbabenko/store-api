class roleController {
// get / -> index
static index = (req, res) => {
  res.send('Role index response!');
}
//post / -> create
static create = (req, res) => {
  res.send('Role create response!');
}
//get /:id -> read
static read = (req, res) => {
  res.send('Role read response!');
}
//put /:id -> update
static update = (req, res) => {
  res.send('Role update response!');
}
//delete /:id -> delete
static delete = (req, res) => {
  res.send('Role delete response!');
}



}

module.exports = roleController;
