
export function bootstrap() {
  // bootstrap code here
  $.ajax({
      url : "http://localhost:3000/api/test",
      dataType : 'json',  
      success : (data) => {
        document.getElementById('app').innerText += ' server read ['+data.message+'] '
      }, error :(err) => {
        console.log("Data err: ", err);
      }
  });
}