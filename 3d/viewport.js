
'use strict';

/**
 * OpenGL viewport management
 * @author Zamrony P. Juhara <zamronypj@yahoo.com>
 */

var Viewport = (function(){
    /**
     * Hold OpenGL context
     * @var object
     */
    var gl;

    /**
     * Constructor
     * @param {GLContext} glContext OpenGL context class
     * @constructor
     */
    function ViewportClass(glContext) {
        gl = glContext.gl();
    };

    /**
     * get viewport width;
     * @return {int} viewport width in pixel
     */
    ViewportClass.prototype.width = function () {
        return gl.viewportWidth;
    };

    /**
     * get viewport height;
     * @return {int} viewport height in pixel
     */
    ViewportClass.prototype.height = function () {
        return gl.viewportHeight;
    };

    /**
     * set viewport width
     * @param  {int} width viewport width in pixel
     * @return {Viewport} self instance
     */
    ViewportClass.prototype.setWidth = function (width) {
        gl.viewportWidth = width;
        return this;
    };

    /**
     * set viewport height
     * @param  {int} height new viewport height in pixel
     * @return {Viewport}  self instance
     */
    ViewportClass.prototype.setHeight = function (height) {
        gl.viewportHeight = height;
        return this;
    };

    return ViewportClass;

}());

module.exports = Viewport;
