$(function(){
      if (window.location.pathname == "/login" || window.location.pathname == "/login*" || window.location.pathname == "/register*" || window.location.pathname == "/register") {
            //hide account tab
            $('#header_account_nav').hide();
      } else {
            $('#header_account_nav').show();
      }
 });