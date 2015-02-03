import $ from 'jquery';

export function bootstrap() {
  // bootstrap code here

  $('#app').append('<button id="addbtn">server connect</button>')
  $('#app').append('<ul id="lists"><li>hoge</li></ul>')
  $('#addbtn').click(()=>{
    $.ajax({
        url : "http://localhost:3000/api/test",
        dataType : 'json',
        success : (data) => {
          $('#lists').append('<li>'+data.message+'</li>')
        }, error :(err) => {
          console.log("Data err: ", err);
        }
    });
  });
}