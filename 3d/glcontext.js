
'use strict';

/**
 * Wrapper class for initialize OpenGL
 */
var GLContext = (function() {
    var glInstance = null;

    /**
     * Constructor
     * @param DOMElement canvas
     */
    function GLContextClass(canvasObj) {
        if (canvasObj) {
            glInstance = canvasObj.getContext('webgl') || canvasObj.getContext('experimental-webgl') ||
                         canvasObj.getContext('moz-webgl') || canvasObj.getContext('webkit-3d');
        }
    };

    /**
     * get OpenGL context
     * @return object OpenGL context
     */
    GLContextClass.prototype.gl = function () {
       return glInstance;
    };

    return GLContextClass;
}());

module.exports = GLContext;
