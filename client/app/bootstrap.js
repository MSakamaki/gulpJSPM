import './bootstrap.css!';

import $          from 'jquery';
// TODO:モジュール管理を外部に・・・
import imgEs6     from '../images/es6.png!image';
import imgFavicon from '../favicon.ico!image';

export default class Bootstrap {
  constructor(){}
  start(){
    // bootstrap code here
    $('#app').append('<button id="addbtn">Get Server Meesage</button>');
    $('#app').append('<ul id="lists"><li>hoge</li></ul>')
    $('#addbtn').click(()=>{
      $.ajax({
          url : "http://localhost:3000/api/test",
          dataType : 'json',
          success : (data) => {
            $('#lists').append($('<li>')
              .addClass('messagelist')
              .addClass('js-message')
              .append($(imgFavicon).clone())
              .append(data.message));
          }, error :(err) => {
            console.log("Data err: ", err);
          }
      });
    });

    $('#app').append(imgEs6);
  }

  useEnhancedObjectLiterals(){}
}