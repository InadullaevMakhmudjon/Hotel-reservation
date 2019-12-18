import { EventEmitter } from '../events/Events';

export default socket => {
    socket.on('hotels', hotels => EventEmitter.emit('hotels', hotels));
    EventEmitter.on('hotels', form => socket.emit('hotels', form));
}