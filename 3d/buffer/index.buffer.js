
'use strict';

/**
 * Wrapper for vertex buffer management
 * @author Zamrony P. Juhara <zamronypj@yahoo.com>
 */
var Buffer = require('./buffer.js');

var IndexBuffer = (function(){

    /**
     * Constructor
     * @param {GLContext} glContext OpenGL rendering context
     * @constructor
     */
    function IndexBufferClass(glContext) {
        var gl = glContext.gl();
        Buffer.call(this, glContext, gl.ELEMENT_ARRAY_BUFFER);
    };

    IndexBufferClass.prototype = Object.create(Buffer.prototype);
    IndexBufferClass.prototype.constructor = IndexBuffer;

    return IndexBufferClass;

}());

module.exports = IndexBuffer;
