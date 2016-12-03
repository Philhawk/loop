import { io } from './start';

io.on('connection', (socket) => {
  console.log('Connected')
})
