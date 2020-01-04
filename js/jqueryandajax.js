/* jQuery is a JavaScript library that special-izes in working with the DOM to make webpages dynamic.

The use of AJAX has solved this issue by allowing you to make server-side requests via JavaScript without having to request a full page refresh.  

By requesting data from a server with JavaScript via jQuery and AJAX, you can retrieve data behind the scenes and then use the various DOM manipulation techniques that you’ve learned to update specific areas of the page that need to be updated. This prevents the need to send a request for the entire page back to the server and creates a much more pleasant user experience.*/

window.onload = function() {	
	
	              $(‘#searchButton’).click(function () {  

											var searchPath;                    
											$(‘#searchResults’).empty();  
											
												switch ($(‘#searchFruit’).val()) 
												{                   
												case ‘long’: searchPath = “Fruit/Long.xml”;                        
												break;                    
												case ‘round’: searchPath = “Fruit/Round.xml”;                        
												break;                    
												case ‘orange’: searchPath = “Fruit/Orange.xml”;                        
												break;                    
												
												default: 
															
															InvalidSearchTerm();  

								}
											
								$.ajax({ 
													url: searchPath,                        
													cache: false,                        
													dataType: “xml”,                        
													success: function (data) {                            
															$(data).find(“fruit”).each(                                
																								function () {                                    
																								
																									$(‘#searchResults’).append($(this).text());                                    
																									$(‘#searchResults’).append(“<BR />”);                                
																									
																									})                        
																									
																								},
													error: function (xhr, textStatus, errorThrown) { 

																$('#searchResults').append(errorThrown);    
																																
																}																								

																						});                
																									
																					});            
																									
																				}            
																									
									function InvalidSearchTerm() {                
									
													$(‘#searchResults’).empty();                
													$(‘#searchResults’).append("Invalid Search Term. Please try again.");            
													
					}
					
					

}
	
	






