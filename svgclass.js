(function( $ ) {
 
    $.fn.svgAddClass = function(c) {
        return this.each(function() {
            var currentClasses = this.attr('class').split(' ');
            var add = c.split(' ');
            for ( var i = 0; i < add.length; i++ ) {
                if ( currentClasses.indexOf(add[i]) == -1 ) {
                    currentClasses.push(add[i]);
                }
            }
            this.attr('class', currentClasses.join[' ']);
        });
    };
 
    $.fn.svgRemoveClass = function(c) {
        return this.each(function() {
            var currentClasses = this.attr('class').split(' ');
            var remove = c.split(' ');
            for ( var i = 0; i < remove.length; i++ ) {
                if ( currentClasses.indexOf(remove[i]) != -1 ) {
                    currentClasses.splice(currentClasses.indexOf(remove[i]), 1);
                }
            }
            this.attr('class', currentClasses.join[' ']);
        });
    };
    
    $.fn.svgToggleClass = function(c) {
        return this.each(function() {
            var currentClasses = this.attr('class').split(' ');
            var toggle = c.split(' ');
            for ( var i = 0; i < toggle.length; i++ ) {
                if ( currentClasses.indexOf(toggle[i]) == -1 ) {
                    currentClasses.push(toggle[i]);
                } else {
                    currentClasses.splice(currentClasses.indexOf(toggle[i]), 1);
                }
            }
            this.attr('class', currentClasses.join[' ']);
        });
    }
    
    $.fn.svgSetClass = function(c) {
        return this.attr('class', c);
    }
 
}( jQuery ));