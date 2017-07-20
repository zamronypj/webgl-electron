
'use strict';

/**
 * Thin wrapper for OpenGL shader program
 * @author zamroni <zamroni@dominopos>
 */

 var ShaderProgram = (function(){
     /**
      * Hold OpenGL context
      * @var object
      */
     var gl;

     /**
      * Constructor
      * @param GLContext instance of OpenGL context
      */
     function ShaderProgramClass(glContext) {
         gl = glContext.gl();

         var shaderProgram = gl.createProgram();
         this.getShaderProgram = function () {
             return shaderProgram;
         };
     };

     /**
      * attach shader to be linked to program
      * @param Shader shaderObj
      * @return this to make it chainable
      */
     ShaderProgramClass.prototype.attachShader = function (shaderObj) {
         gl.attachShader(this.getShaderProgram(), shaderObj.getShaderObject());
         return this;
     };

     /**
      * link program
      * @return this to make it chainable
      */
     ShaderProgramClass.prototype.linkProgram = function () {
         gl.linkProgram(this.getShaderProgram());
         return this;
     };

     /**
      * use program
      * @return this to make it chainable
      */
     ShaderProgramClass.prototype.useProgram = function () {
         gl.useProgram(this.getShaderProgram());
         return this;
     };

     /**
      * get named attribute from shader code
      * @return object attribute
      */
     ShaderProgramClass.prototype.getAttribLocation = function (attributeName) {
         return gl.getAttribLocation(this.getShaderProgram(), attributeName);
     };

     /**
      * get named uniform from shader code
      * @return object uniform
      */
     ShaderProgramClass.prototype.getUniformLocation = function (uniformName) {
         return gl.getUniformLocation(this.getShaderProgram(), uniformName);
     };

     /**
      * set matrix 4v to uniform
      * @return object uniform
      */
     ShaderProgramClass.prototype.setUniformMatrix4fv = function (uniformLocation, data) {
         gl.uniformMatrix4fv(uniformLocation, false, data);
     };

     return ShaderProgramClass;
 }());

 module.exports = ShaderProgram;
