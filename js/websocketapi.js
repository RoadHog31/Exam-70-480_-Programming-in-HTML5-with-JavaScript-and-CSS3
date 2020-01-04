/* Objective 2.4: Implement a callback  

The primary object that you will work with is the WebSocket object, which connects to the socket when its constructor is invoked. In Listing 2.1, a variable is declared but not instanti-ated until a user invokes the connect button. When the user clicks the button, the WebSocketis instantiated with the appropriate connection information:wsConnection=  new WebSocket('ws://studygroup.70480.com', ['soap', 'xmpp']);

TheWebSocket constructor accepts two parameters: 

	*The URL of the server-side socket to connect to, which is always prefixed with ws or wss for secure WebSocket connections. 

	*An optional list of subprotocols

When the WebSocket constructor is called, the WebSocket API establishes a connection to the server. One of two things can happen at this stage. The WebSocket will successfully connect to the server or the connection will fail, resulting in an error. B*/

window.onload = function() {
	
	               var wsConnection;        
								 var chatBox = document.getElementById("chatWindow");        
								 var disconnectButton = document.getElementById("Disconnect");        
								 var connectButton = document.getElementById("Connect");        
								 var sendButton = document.getElementById("Send");        
								 var msgToSend = document.getElementById("msgSendText");        
			
			/* When the user clicks the close button, the close method is called. Then, the subsequent call to the onclose event handler is implemented so that a message can be provided to the user that the connection has indeed been closed. */
			disconnectButton.onclick = function () { 
			
								 wsConnection.close(); 

								 
								 
			}        
								 
			connectButton.onclick = function () {            
								 
								 /* The primary object that you will work with is the WebSocket object, which connects to the socket when its constructor is invoked. 
									A	variable is declared but not instanti-ated until a user invokes the connect button. When the user clicks the button, the WebSocketis instantiated with the appropriate connection information: */
								 //Or the use of wss for secure WebSockets. IE: wss://studygroup.70480.com            
								 //Opens the WebSocket            
								 wsConnection =  new WebSocket('ws://studygroup.70480.com', ['soap', 'xmpp']);        
								
			}        
			
			//To send messages, the WebSocket API provides the Send function. 			
			sendButton.onclick = function () {   

								//To prevent an error, the readyState property is evaluated to ensure that it’s now open. readyState provides four pos-sible values
								 //check the state of the connection            
								 if (wsConnection.readyState == WebSocket.OPEN) {                
									 //send message to server.                
									 wsConnection.send(msgToSend.value); 
								 
								 }            
								 else    
									 
									 return;     
									 
									 //show message in chat window.            
									 NewLine();            
									 chatBox.value = chatBox.value + "You: " + msgToSend.value;    
									 //clear message text box            
									 msgToSend.value = '';        
					
			}        
			
			// event handler for when the WebSocket connection is established        
			wsConnection.onopen = function () {                       
								 
								 chatBox.textContent = chatBox.textContent + "System: Connection has been established";        
					
			}  
					
			//event handler for when the WebSocket encounters an error        
			wsConnection.onerror = function (err) {            
								 //write an error to the screen            
								 NewLine();            
								 chatBox.value = chatBox.value + "System: Error Occurred. ";        
								 
			}
			
			//When a connection is closed, the onclose event handler is raised:
			wsConnection.onclose = function () {            
								 //write the connection has been closed.              
								 NewLine();            
								 chatBox.value = chatBox.value + "System: Connection has been closed.";        
			}
					
			//To receive messages, the WebSocket API provides the onmessage event handler. 
			//The error event could happen at any time, not just when establishing the initial connection.					 
			wsConnection.onmessage = function (msg) {            
								//write message                        
								NewLine();            
								chatBox.value = chatBox.value + "Them: " + msg.data;       

			}      
					
			//helper functions.        
			function NewLine(){    
			
								chatBox.textContent = chatBox.textContent + '\r\n';        
							
			}    

}
	
	






