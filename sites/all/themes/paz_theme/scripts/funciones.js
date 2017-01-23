// JavaScript Document

function move_left(){
  
  jQuery('.link').click(function(i){                                                                                                                                                                                                        
            if(jQuery('.map_capa').hasClass('paz')){
                  jQuery('.map_capa').removeClass('paz');
            }
            else{
                  jQuery('.map_capa').addClass('paz');
				  jQuery('.map_capa').removeClass('hechos');
				  jQuery('.map_capa').removeClass('todos');
            }
            i.stopPropagation();
  });
  
  jQuery('.link_dos').click(function(i){                                                                                                                                                                                                        
            if(jQuery('.map_capa').hasClass('hechos')){
                  jQuery('.map_capa').removeClass('hechos');
            }
            else{
                  jQuery('.map_capa').addClass('hechos');
				  jQuery('.map_capa').removeClass('paz');
				  jQuery('.map_capa').removeClass('todos');
            }
            i.stopPropagation();
  }); 
  
  jQuery('.link_tres').click(function(i){                                                                                                                                                                                                        
            if(jQuery('.map_capa').hasClass('todos')){
                  jQuery('.map_capa').removeClass('todos');
            }
            else{
                  jQuery('.map_capa').addClass('todos');
				  jQuery('.map_capa').removeClass('paz');
				  jQuery('.map_capa').removeClass('hechos');
            }
            i.stopPropagation();
  }); 

  jQuery('.page').click(function(){
            if(jQuery(this).hasClass('move-left')){
                  jQuery('.page').removeClass('move-left');
            }
  });   

}
jQuery(document).ready(function(){
      move_left();
}); 

/*function mover(){
jQuery('.link_tres:before').cycle({ 
    fx:    'zoom', 
    sync:  false, 
    delay: -20 
});
  
}
*/
