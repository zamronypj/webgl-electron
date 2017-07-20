
'use strict';

/**
 * Wrapper for vertex buffer management
 * @author Zamrony P. Juhara <zamronypj@yahoo.com>
 */
var Buffer = require('./buffer.js');

var VertexBuffer = (function(){

    /**
     * Constructor
     * @param {GLContext} glContext OpenGL rendering context
     * @constructor
     */
    function VertexBufferClass(glContext) {
        var gl = glContext.gl();
        Buffer.call(this, glContext, gl.ARRAY_BUFFER);
    };

    VertexBufferClass.prototype = Object.create(Buffer.prototype);
    VertexBufferClass.prototype.constructor = VertexBuffer;

    return VertexBufferClass;

}());

module.exports = VertexBuffer;
