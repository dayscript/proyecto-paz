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

            
    });// End ready
})(jQuery, Drupal, this, this.document);
