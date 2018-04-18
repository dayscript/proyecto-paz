(function ($, Drupal, window, document, undefined) {
    $(document).ready(function(){
    	// Open and close footer
    	var up = false;
        $( "#close-open" ).click(function() {
        	if( up == false ){
				alternate();
				$(this).attr("src", "/boletin-cultural/sites/default/files/topicon3.png");
        	}else{
        		alternate();
        		$(this).attr("src", "/boletin-cultural/sites/default/files/topicon2.png");
        	}
		});
        var alternate = function(){
        	if( up == false ){
        		$( '.region-tertiary-content' ).animate({height:970}, 300);
				$("#main-content").hide(500);
				$(".block-webform").show(600);
        		up = true;
        	}else{
        		$( '.region-tertiary-content' ).animate({height:215}, 300);
				$("#main-content").show(500);
				$(".block-webform").hide(600);
        		up = false;
        	}
        };
        
        //switch image block menu-proyectos
        $('.block_menu_proyect .views-field a.blue').mouseover(function() {
          $('.block_menu_proyect .views-field a.blue .first img').hide();
          $('.block_menu_proyect .views-field a.blue .last img').show();
        });
        $('.block_menu_proyect .views-field a.blue').mouseout(function() {
          $('.block_menu_proyect .views-field a.blue .first img').show();
          $('.block_menu_proyect .views-field a.blue .last img').hide();
        });

        $('.block_menu_proyect .views-field a.green').mouseover(function() {
          $('.block_menu_proyect .views-field a.green .first img').hide();
          $('.block_menu_proyect .views-field a.green .last img').show();
        });
        $('.block_menu_proyect .views-field a.green').mouseout(function() {
          $('.block_menu_proyect .views-field a.green .first img').show();
          $('.block_menu_proyect .views-field a.green .last img').hide();

        });

        $('.block_menu_proyect .views-field a.yellow').mouseover(function() {
          $('.block_menu_proyect .views-field a.yellow .first img').hide();
          $('.block_menu_proyect .views-field a.yellow .last img').show();
        });
        $('.block_menu_proyect .views-field a.yellow').mouseout(function() {
          $('.block_menu_proyect .views-field a.yellow .first img').show();
          $('.block_menu_proyect .views-field a.yellow .last img').hide();

        });

        //stop player iframe
        //$('#block-views-podcast-block-1 iframe').css('background', 'red');
       

    });// End ready
})(jQuery, Drupal, this, this.document);

