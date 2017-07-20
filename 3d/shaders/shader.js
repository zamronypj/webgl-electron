
'use strict';

/**
 * Thin wrapper for OpenGL shader
 * @author zamroni <zamroni@dominopos>
 */
var Shader = (function(){
    /**
     * Hold OpenGL context
     * @var object
     */
    var gl;

    var getShaderType = function(glContext, shaderType) {
        switch (shaderType) {
            case 'x-shader/x-fragment' :
                return glContext.FRAGMENT_SHADER;
            case 'x-shader/x-vertex' :
                return glContext.VERTEX_SHADER;
            default :
                return null;
        }
    };

    /**
     * Constructor
     * @param GLContext instance of OpenGL context
     * @param string shaderType, type of shader to be created
     *        'x-shader/x-fragment' => fragment shader
     *        'x-shader/x-vertex' => vertex shader
     */
    function ShaderClass(glContext, shaderType) {
        gl = glContext.gl();

        var shader = gl.createShader(getShaderType(gl, shaderType));
        this.getShaderObject = function () {
            return shader;
        };
    };

    /**
     * compile shader
     * @param string shaderSrc shader source
     * @return shader object
     */
    ShaderClass.prototype.compile = function (shaderSrc) {
        gl.shaderSource(this.getShaderObject(), shaderSrc);
        gl.compileShader(this.getShaderObject());
        return this.getShaderObject();
    };

    /**
     * delete current shader
     */
    ShaderClass.prototype.deleteShader = function () {
        gl.deleteShader(this.getShaderObject());
    };

    return ShaderClass;
}());

module.exports = Shader;
