
'use strict';

/**
 * OpenGL camera management
 * @author Zamrony P. Juhara <zamronypj@yahoo.com>
 */

var PerspectiveCamera = (function(){

    var Vector4f = require('./math/vector4f.js');
    var Matrix4f = require('./math/matrix4f.js');
    var Camera = require('./math/matrix4f.js');

    /**
     * PerspectiveCamera constructor
     * @param       {GLContext} glContext   OpenGL rendering context
     * @param       {float} fieldOfView field of view
     * @param       {float} aspectRatio aspect ratio
     * @param       {float} znear   frustum znear plane
     * @param       {float} zfar    frustum zfar plane
     * @constructor
     */
    function PerspectiveCameraClass(glContext, fieldOfView, aspectRatio, znear, zfar) {
        Camera.call(this);
    };

    PerspectiveCameraClass.prototype = Object.create(Camera.prototype);
    PerspectiveCameraClass.prototype.constructor = PerspectiveCamera;


    return PerspectiveCameraClass;
}());

module.exports = PerspectiveCamera;
