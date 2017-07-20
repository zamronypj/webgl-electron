
'use strict';

/**
 * Utility for calculating view frustum and perspective matrix
 *
 * @author Zamrony P. Juhara <zamronypj@yahoo.com>
 */

var Matrix4f = require('./matrix4f.js');

var MatUtility = (function(){

    /**
     * Constructor
     */
    function MatUtilityClass() {
    };

    /**
     * make frustum
     * @param  {float} left
     * @param  {float} right
     * @param  {float} bottom
     * @param  {float} top
     * @param  {float} znear
     * @param  {float} zfar
     * @return {Matrix4f} matrix
     */
    var makeFrustum = function (left, right, bottom, top, znear, zfar)
    {
        var X = 2*znear/(right-left);
        var Y = 2*znear/(top-bottom);
        var A = (right+left)/(right-left);
        var B = (top+bottom)/(top-bottom);
        var C = -(zfar+znear)/(zfar-znear);
        var D = -2*zfar*znear/(zfar-znear);

        return new Matrix4f([
           [X, 0, A, 0],
           [0, Y, B, 0],
           [0, 0, C, D],
           [0, 0, -1, 0]
        ]);
    };

    /**
     * make perspective matrix
     * @param  {float} fovy   fied of view y
     * @param  {float} aspect viewport aspect ratio
     * @param  {float} znear
     * @param  {float} zfar
     * @return {Matrix4f}
     */
    MatUtilityClass.prototype.perspective = function (fovy, aspect, znear, zfar)
    {
        var ymax = znear * Math.tan(fovy * Math.PI / 360.0);
        var ymin = -ymax;
        var xmin = ymin * aspect;
        var xmax = ymax * aspect;

        return makeFrustum(xmin, xmax, ymin, ymax, znear, zfar);
    };

    MatUtilityClass.prototype.translate = function (x, y, z)
    {
        return new Matrix4f([
            [ 1.0, 0.0, 0.0, x   ],
            [ 0.0, 1.0, 0.0, y   ],
            [ 0.0, 0.0, 1.0, z   ],
            [ 0.0, 0.0, 0.0, 1.0 ]
        ]);
    };
    /**
     * initialize identity matrix
     */
    MatUtilityClass.prototype.identity = function () {
        return new Matrix4f([
             [ 1.0, 0.0, 0.0, 0.0 ],
             [ 0.0, 1.0, 0.0, 0.0 ],
             [ 0.0, 0.0, 1.0, 0.0 ],
             [ 0.0, 0.0, 0.0, 1.0 ]
        ]);
    };

    /**
     * Initialize zero matrix
     * @return this
     */
    MatUtilityClass.prototype.zero = function () {
        return new Matrix4f([
             [ 0.0, 0.0, 0.0, 0.0 ],
             [ 0.0, 0.0, 0.0, 0.0 ],
             [ 0.0, 0.0, 0.0, 0.0 ],
             [ 0.0, 0.0, 0.0, 0.0 ]
        ]);
    };

    return MatUtilityClass;
}());

module.exports = MatUtility;
