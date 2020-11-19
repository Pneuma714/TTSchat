const socket = io()

socket.emit('join', prompt('닉네임을 입력하세요.'))

const sendMsg = () => {
    socket.emit('msgSend', document.querySelector('#msg').value)
    document.querySelector('#msg').value = ''
}

document.querySelector('#send').addEventListener('click', sendMsg)
document.querySelector('#msg').addEventListener('keydown', evt => {
    if (evt.keyCode === 13) sendMsg()
})

socket.on('msgReceive', (content, nickname) => {
    console.log(`${nickname} : ${content}`)
    document.querySelector('#chat').value += `${nickname} : ${content}\n`
})

socket.on('userJoined', nickname => {
    console.log(nickname + ' joined')
    document.querySelector('#chat').value += nickname + ' joined.\n'
})