module.exports = function(io){
	io.on('connection', function(socket){

		function emitMessage(socket, data){
			socket.emit('message', JSON.stringify(data));
		}

		socket.on('message', function(data){
			try{
				data = JSON.parse(data);
			}
			catch(e){
				console.log("error: ", e);
				return;
			}

			switch(data.type){
				case 'register':
					users[data.userId] = {
						'socketObj': socket,
						'name': data.name,
						'roomId': data.roomId
					};
					emitMessage(socket, {'type': data.type, 'success': true});
					break;

				case 'closeSession':
					delete users[data.userId];
					break;
			}
		});



	});
}


var users = {};

	
