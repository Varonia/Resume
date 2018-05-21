var APP_ID = '0oLsn7Qg4fCRcC19zXSP33xw-gzGzoHsz';
var APP_KEY = 'Hre7IbvbdizLhL6RtIBAWL77';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var query = new AV.Query('Message');

query.find()
    .then(
        function(messages) {
            let array = messages.map((item) => item.attributes)
            array.forEach((item) => {
                let li = document.createElement('li')
                li.innerText = `${item.name}:${item.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
            })
        }
    )

let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit', function(e) {
    e.preventDefault()
    let name = myForm.querySelector('input[name=name]').value
    let content = myForm.querySelector('input[name=content]').value
        // 声明类型
    var Message = AV.Object.extend('Message');
    // 新建对象
    var message = new Message();
    message.save({
        content: content,
        name: name
    }).then(function(object) {
        console.log('1')
        let li = document.createElement('li')
        console.log('2')
        li.innerText = `${object.attributes.name}:${object.attributes.content}`
        console.log('3')
        let messageList = document.querySelector('#messageList')
        console.log('4')
        messageList.appendChild(li)
        console.log('5')
        myForm.querySelector('inpupt[name=content]').value = ''
        console.log(object)
    })
})