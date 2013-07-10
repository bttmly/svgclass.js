(function( $ ) {
 
    $.fn.svgAddClass = function(value) {
        var classes = eliminateDuplicates(value.split(' '));
        return this.each(function() {
            if ( $(this).is("[class]") ) { 
                var currentClasses = $(this).attr('class').split(' ');
            } else {
                var currentClasses = [];
            }
            for ( var i = 0; i < classes.length; i++ ) {
                if ( currentClasses.indexOf(classes[i]) == -1 ) {
                    currentClasses.push(classes[i]);
                }
            }
            $(this).attr('class', currentClasses.join(' '));
        });
    };
 
    $.fn.svgRemoveClass = function(value) {
        var classes = eliminateDuplicates(value.split(' '));
        return this.each(function() {
            if ( $(this).is("[class]") ) { 
                var currentClasses = $(this).attr('class').split(' ');
            } else {
                var currentClasses = [];
            }
            for ( var i = 0; i < classes.length; i++ ) {
                if ( currentClasses.indexOf(classes[i]) != -1 ) {
                    currentClasses.splice(currentClasses.indexOf(classes[i]), 1);
                }
            }
            $(this).attr('class', currentClasses.join(' '));
        });
    };
    
    $.fn.svgToggleClass = function(value) {
        var classes = eliminateDuplicates(value.split(' '));
        return this.each(function() {
            if ( $(this).is("[class]") ) { 
                var currentClasses = $(this).attr('class').split(' ');
            } else {
                var currentClasses = [];
            }
            for ( var i = 0; i < classes.length; i++ ) {
                if ( currentClasses.indexOf(classes[i]) == -1 ) {
                    currentClasses.push(classes[i]);
                } else {
                    currentClasses.splice(currentClasses.indexOf(classes[i]), 1);
                }
            }
            $(this).attr('class', currentClasses.join(' '));
        });
    }
    
    $.fn.svgHasClass = function(value) {
        var classes = value.split(' ')
        var has = false;
        this.each(function() {
            if ( $(this).is("[class]") ) {
                var currentClasses = $(this).attr('class').split(' ');
                var singleHas = 0;
                for ( var i = 0; i < classes.length; i++ ) {
                    if ( currentClasses.indexOf(classes[i]) != -1 ) {
                        singleHas++;
                    }
                }
                if (currentClasses.length > 0 && singleHas === classes.length ) {
                    has = true;
                }
            }
        });
        return has;
    }
    
    // http://dreaminginjavascript.wordpress.com/2008/08/22/eliminating-duplicates/
    function eliminateDuplicates(arr) {
        var i,
            len=arr.length,
            out=[],
            obj={};
        for (i=0;i<len;i++) {
            obj[arr[i]]=0;
        }
        for (i in obj) {
            out.push(i);
        }
        return out;
        // return arr;
    }
 
}( jQuery ));