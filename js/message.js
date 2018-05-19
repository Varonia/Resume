var APP_ID = '0oLsn7Qg4fCRcC19zXSP33xw-gzGzoHsz';
var APP_KEY = 'Hre7IbvbdizLhL6RtIBAWL77';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit',function(e){
  e.preventDefault()
  let content = myForm.querySelector('input[name=content]').value
  var Message = AV.Object.extend('Message');
  var Message = new Message();
  Message.save({
    content: content
  }).then(function(object) {
    console.log(object);
  })
})

