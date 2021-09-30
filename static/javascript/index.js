var checkinValid = function () {
  var currentDate = new Date();
  var date = document.search_form.check_in_date.value;
  date = new Date(date);
  if (date.setHours(0, 0, 0, 0) < currentDate.setHours(0, 0, 0, 0)) {
    alert("Please Enter a valid date!");
    check_in_date.focus();
  }
};

var checkoutValid = function () {
  var checkindate = document.search_form.check_in_date.value;
  checkindate = new Date(checkindate);
  var checkoutdate = document.search_form.check_out_date.value;
  checkoutdate = new Date(checkoutdate);

  if (checkindate.setHours(0, 0, 0, 0) >= checkoutdate.setHours(0, 0, 0, 0)) {
    alert("Please Enter a day after check in day!");
    check_out_date.focus();
  }
};
