
'use strict';

/**
 * Thin wrapper for OpenGL shader compilation status reporting
 * @author zamroni <zamroni@dominopos>
 */

var ShaderCompilationStatus = (function(){
    /**
     * Hold OpenGL context
     * @var object
     */
    var gl;

    /**
     * Constructor
     * @param GLContext instance of OpenGL context
     */
    function ShaderCompilationStatusClass(glContext) {
        gl = glContext.gl();
    };

    /**
     * get status of last shader compilation
     * @param Shader shaderObj shader object
     * @return boolean
     */
    ShaderCompilationStatusClass.prototype.isSuceeded = function (shaderObj) {
        return gl.getShaderParameter(shaderObj.getShaderObject(), gl.COMPILE_STATUS);
    };

    /**
     * get compilation messages last shader compilation
     * @return string
     */
    ShaderCompilationStatusClass.prototype.getCompilationMessage = function (shaderObj) {
        return gl.getShaderInfoLog(shaderObj.getShaderObject());
    };

    return ShaderCompilationStatusClass;

}());

module.exports = ShaderCompilationStatus;
