module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hello, ' + userName + '!'
  };

  if (userName !== "tanishibot") {
    return res.status(200).json(botPayload);
  }
}