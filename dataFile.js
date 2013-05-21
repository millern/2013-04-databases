var fs = require('fs');
var mysql = require('mysql');
var db;
module.exports = function(_db){
  db = _db;
  return handler;
};
var handler = {};

//var dataHash = fs.existsSync('data.txt') ? JSON.parse(fs.readFileSync('data.txt','utf8')) : {};
var id = 0;
handler.getData = function(key){
  // return dataHash[key] || [];
  // var query = "select * from messages";
  // var queryArgs = [key];
  // db.query(query,function(error,results){
  //   if (error) throw error;
  //   console.log(results);
  //   return results;
  // });
};

handler.setData = function(key,message) {

  message.createdAt = new Date();
  message.objectId = id++;
  // if (dataHash.hasOwnProperty(key)){
  //   dataHash[key].push(message);
  // } else {
  //   dataHash[key] = [message];
  // }
  // //console.log(dataHash[key]);
  // fs.writeFile('data.txt',JSON.stringify(dataHash),"utf8",function(){
  // });

  var query = "insert into messages (username, message, timestamp, room) values (?, ?, ?, ?)";
  var queryArgs = [message.username, message.text, message.createdAt, key];

  db.query(query,queryArgs,function(error,results){
    if (error) throw error;
    console.log("1 row inserted into table messages");
  });
};