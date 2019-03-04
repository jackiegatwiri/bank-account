function Bank(name, initial, withdrawal, deposit){
  this.fullName = name;
  this.initial = initial;
  this.withdrawal = withdrawal;
  this.deposit = deposit;
}
// Bank.prototype.subtractNumbers = function() {
//   return this.initial - this.withdrawal;
// }
// Bank.prototype.addNumbers = function() {
//   return this.initial + this.deposit;
// }
$(document).ready(function(){
  $("#new-bank").submit(function(event){
      event.preventDefault();
    var inputName = $("#name").val();
    var inputInitial = parseInt($("#initial").val());
    var inputDeposit = parseInt($("#deposit").val());
    var inputWithdraw = parseInt($("#withdraw").val());
    var bankObj = new Bank(inputName, inputInitial, inputDeposit, inputWithdraw);

    $("#list").append("<li><span class='forList'>"+bankObj.fullName+"</span></li>");
      $(".forList").last().click(function(){
      $("#result").show();
      $("#result h2").text(bankObj.fullName);
      $("#initbalance").text(bankObj.initial);
      $("#answer").append("<li>"+bankObj.withdrawal+"</li>");
      $("#answer").append("<li>"+bankObj.deposit+"</li>");

      });
      var inputName = $("#name").val("");
      var inputInitial = $("#initial").val("");
      var inputDeposit = parseInt($("#deposit").val(""));
      var inputWithdraw = parseInt($("#withdraw").val(""));
  });

});
