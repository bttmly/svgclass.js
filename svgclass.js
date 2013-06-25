(function( $ ) {
 
    $.fn.addSvgClass = function(c) {
        return this.each(function() {
            var currentClasses = this.attr('class').split(' ');
            var add = c.split(' ');
            for ( var i = 0; i < add.length; i++ ) {
                
            }
        });
    };
 
    $.fn.removeSvgClass = function(c) {
        return this.each(function() {
            var currentClasses = this.attr('class').split(' ');
            var remove = c.split(' ');
            for ( var i = 0; i < remove.length; i++ ) {
            
            }
        });
    };
    
    $.fn.toggleSvgClass = function(c) {
        return this.each(function() {
            var currentClasses = this.attr('class').split(' ');
            var toggle = c.split(' ');
            for ( var i = 0; i < toggle.length; i++ ) {
                
            }
        });
    }
 
}( jQuery ));