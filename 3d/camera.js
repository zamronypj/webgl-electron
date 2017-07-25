
'use strict';

/**
 * OpenGL camera management
 * @author Zamrony P. Juhara <zamronypj@yahoo.com>
 */

var Camera = (function(){
    var Vector4f = require('./math/vector4f.js');
    var Matrix4f = require('./math/matrix4f.js');

    /**
     * Hold OpenGL context
     * @var object
     */
    var gl;

    /**
     * Constructor
     * @param {GLContext} glContext OpenGL rendereing context
     * @constructor
     */
    function CameraClass(glContext) {
        gl = glContext.gl();
        var cameraPosition = new Vector4f([0.0, 0.0, 0.0, 0.0]);
        var cameraViewMatrix = (new Matrix4f()).zero();

        this.position = function () {
            return cameraPosition;
        };

        this.setPosition = function (camPosition) {
            cameraPosition = camPosition;
            return this;
        };

        this.viewMatrix = function () {
            return cameraViewMatrix;
        };

        this.setViewMatrix = function (mat) {
            viewMatrix = mat;
            return this;
        };
    };

    return CameraClass;
}());

module.exports = Camera;
