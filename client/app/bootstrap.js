import 'app/bootstrap.css!';

import $          from 'jquery';
import imgEs6     from 'images/es6.png!image';
import imgFavicon from 'favicon.ico!image';

export function bootstrap() {
  // bootstrap code here
  $('#app').append('<button id="addbtn">Get Server Meesage</button>');
  $('#app').append('<ul id="lists" class="messagelist"><li>hoge</li></ul>')
  $('#addbtn').click(()=>{
    $.ajax({
        url : "http://localhost:3000/api/test",
        dataType : 'json',
        success : (data) => {
          $('#lists').append($('<li>')
            .append($(imgFavicon).clone())
            .append(data.message));
        }, error :(err) => {
          console.log("Data err: ", err);
        }
    });
  });

  $('#app').append(imgEs6);
}