
'use strict';

/**
 * Thin wrapper for OpenGL buffer creation/management
 * @author zamroni <zamroni@dominopos.com>
 */
var Buffer = (function(){
    /**
     * Hold OpenGL context
     * @var object
     */
    var gl;

    /**
     * Constructor
     * @param {GLContext} glContext OpenGL conext class
     * @constructor
     */
    function BufferClass(glContext, type) {
        gl = glContext.gl();
        var bufferType = type;
        var bufferObject = gl.createBuffer();

        this.getBufferObject = function () {
            return bufferObject;
        };

        this.getBufferType = function () {
            return bufferType;
        };
    };

    /**
     * bind current buffer object with buffer type
     * @return {Buffer} self
     */
    BufferClass.prototype.bindBuffer = function () {
        gl.bindBuffer(this.getBufferType(), this.getBufferObject());
        return this;
    };

    /**
     * write data to buffer
     * @param  {object} data  data to write
     * @param  {int} usage data usage
     * @return {Buffer} buffer instance
     */
    BufferClass.prototype.writeBuffer = function (data, usage) {
        gl.bufferData(this.getBufferType(), data, usage)
        return this;
    };

    return BufferClass;
}());

module.exports = Buffer;
