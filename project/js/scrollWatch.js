(function ($) {
    "use strict";

    var w = $(window),
        subscribers = [];
        //timeout;

    function checkElement(set) {
        var elem,
            elem_position,
            elem_width,
            elem_height,
            win_width,
            win_height,
            win_bottom,
            win_right,
            win_scroll_x,
            win_scroll_y,
            elem_x,
            elem_y,
            elem_x2,
            elem_y2,
            hidden_top,
            hidden_right,
            hidden_bottom,
            hidden_left,
            top_percent,
            right_percent,
            bottom_percent,
            left_percent,
            in_viewport,
            full_in_viewport,
            obj;

        elem = set[0];
        elem_position = elem.offset();
        elem_width = parseInt(elem.innerWidth(), 10);
        elem_height = parseInt(elem.innerHeight(), 10);
        win_width = $(window).prop('innerWidth');
        win_height = $(window).prop('innerHeight');
        win_scroll_x = $(window).scrollLeft();

        //http://help.dottoro.com/ljfswxte.php
        //if (isNaN(win_scroll_x)) {
            //win_scroll_x = $('html').prop('scrollLeft');
        //}
        win_scroll_y = $(window).scrollTop();

        //http://help.dottoro.com/ljfswxte.php
        //if (isNaN(win_scroll_y)) {
            //win_scroll_y = $('html').prop('scrollTop');
        //}
        win_bottom = win_scroll_y + win_height;
        win_right = win_scroll_x + win_width;

        elem_x = elem_position.left;
        elem_y = elem_position.top;
        elem_x2 = elem_x + elem_width;
        elem_y2 = elem_y + elem_height;

        // how many pixel are hidden on all directions
        hidden_top = elem_y - win_scroll_y;
        hidden_right = -elem_x2 + win_right;
        hidden_bottom = -elem_y2 + win_bottom;
        hidden_left = elem_x - win_scroll_x;

        // What percentage of the element in hidden in all directions
        // Negative percentages represent the amount hidden on each direction
        top_percent = (hidden_top * 100) / elem_height;
        right_percent = (hidden_right * 100) / elem_width;
        bottom_percent = (hidden_bottom * 100) / elem_height;
        left_percent = (hidden_left * 100) / elem_width;

        obj = {
            'elem' : elem,
            'elem_position' : elem_position,
            'elem_width' : elem_width,
            'elem_height' : elem_height,
            'win_width' : win_width,
            'win_height' : win_height,
            'win_scroll_x' : win_scroll_x,
            'win_scroll_y' : win_scroll_y,
            'win_bottom' : win_bottom,
            'win_right' : win_right,
            'elem_x' : elem_x,
            'elem_y' : elem_y,
            'elem_x2' : elem_x2,
            'elem_y2' : elem_y2,
            'hidden_top' : hidden_top,
            'hidden_right' : hidden_right,
            'hidden_bottom' : hidden_bottom,
            'hidden_left' : hidden_left,
            'top_percent' : top_percent,
            'right_percent' : right_percent,
            'bottom_percent' : bottom_percent,
            'left_percent' : left_percent,
            'in_viewport' : in_viewport,
            'full_in_viewport' : full_in_viewport
        };

        // Consider something to be in the viewport, or to appear only if at
        // least 20% of that element is showing.
        if (bottom_percent > -80 && top_percent > -80
                && right_percent > -80 && left_percent > -80) {
            in_viewport = true;
            obj.in_viewport = true;
            elem.trigger({
                type: 'scrollWatch.appear',
                info: obj
            });
        } else {
            in_viewport = false;
            obj.in_viewport = false;
            elem.trigger({
                type: 'scrollWatch.disappear',
                info: obj
            });
        }

        if (bottom_percent >= 0 && top_percent >= 0
                && right_percent >= 0 && left_percent >= 0) {
            full_in_viewport = true;
            obj.full_in_viewport = true;

            // follow the browser convention of naming events all lower-case
            // no spaces
            elem.trigger({
                type: 'scrollWatch.appearfull',
                info: obj
            });
        } else if (bottom_percent <= -100 || top_percent <= -100
                || right_percent <= -100 || left_percent <= -100) {
            full_in_viewport = false;
            obj.full_in_viewport = false;

            // follow the browser convention of naming events all lower-case
            // no spaces
            elem.trigger({
                type: 'scrollWatch.disappearfull',
                info: obj
            });
        }

        if ($.isFunction(set[1])) {
            set[1](obj);
        }


        console.log(top_percent);
        console.log(right_percent);
        console.log(bottom_percent);
        console.log(left_percent);
        console.log("==================");
    }

    function fireWatch() {
        var i = 0,
            currentSet;
        for (i; subscribers[i]; i++) {
            currentSet = subscribers[i];
            checkElement(currentSet);
        }
    }

    w.scroll(function () {
        fireWatch();
    }).resize(function () {
        fireWatch();
    });

    // Fire once page loaded in case any element in the viewport has an action
    // assigned to it to be performed when it comes into viewport.
    // This could be, for example, to fade an element in. If the element is in
    // the viewport when page is loaded, element won't fade in. To prevent this
    // we fire scrollWatch manually.
    w.load(fireWatch);

    $.fn.scrollWatch = function (callback) {
        return this.each(function () {
            // callback is a function that gets passed a report of the current
            // state of the element.
            subscribers.push([$(this), callback]);
        });
    };
}(jQuery));
