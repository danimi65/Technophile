
function Phone(phoneNumber){
  this.phoneNumber= phoneNumber;

}


Phone.prototype.callPhone = function(phoneNumber){
  return this.phoneNumber + ' calls '  + 4444444;
};

module.exports = Phone;
