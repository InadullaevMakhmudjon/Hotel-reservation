import { EventEmitter } from '../events/Events';

export default socket => {
    socket.on('getAllHotels', hotels => EventEmitter.emit('getAllHotels', hotels));
    EventEmitter.on('requestAllHotels', text => socket.emit('requestAllHotels', text));

    socket.on('getAHotel', hotel => EventEmitter.emit('getAHotel', hotel));
    EventEmitter.on('requestAHotel', id => socket.emit('requestAHotel', id));

    socket.on('getFormRequest', user => EventEmitter.emit('getFormRequest', user))
    EventEmitter.on('formSubmit', user => socket.emit('formSubmit', user));

    socket.on('senderror', error => EventEmitter.emit('getError', error));
    socket.on('Authorize', hotel => EventEmitter.emit('Authorized', hotel.name));
    EventEmitter.on('Authorize', hotelId => socket.emit('Authorize', hotelId));

    socket.on('getUsers', users => EventEmitter.emit('getUsers', users));
    EventEmitter.on('requestUsers', hotelName => socket.emit('requestUsers', hotelName));

    EventEmitter.on('removeUser', name => socket.emit('removeUser', name));
}