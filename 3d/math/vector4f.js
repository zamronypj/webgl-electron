
'use strict';

/**
 * Thin wrapper for vector 1x4 for 3D transformation
 */
var Vector4f = (function(){

    /**
     * hold matrix elements
     * @var float[4]
     */
    var elements;

    /**
     * Constructor
     * @param float[4][4] vec
     */
    function Vector4fClass(vec) {
        if (typeof vec !== 'undefined') {
            elements = vec;
        }
    };

    /**
     * Get vector content
     * @return float[4]
     */
    Vector4fClass.prototype.vec = function () {
        return elements;
    };

    /**
     * set vector content
     * @param float[4] vec
     * @return this
     */
    Vector4fClass.prototype.setVec = function (vec) {
        elements = vec;
        return this;
    };

    /**
     * Initialize zero vector
     * @return this
     */
    Vector4fClass.prototype.zero = function () {
        elements = [ 0.0, 0.0, 0.0, 0.0 ];
        return this;
    };

    /**
     * add two vector 1x4
     * @param float[4] vecA
     * @param float[4] vecB
     * @param float[4] vecResult
     * @return float[4] vecResult
     */
    var addVec4 = function (vecA, vecB, vecResult) {
        var i;
        for (i = 0; i < 4; i++) {
            vecResult[i] = vecA[i] + vecB[i];
        }
        return vecResult;
    };

    /**
     * add this vector with other vector
     * @param Vector4f vec
     * @return Vector4f resultVec
     */
    Vector4fClass.prototype.add = function (vec) {
        var vecA = elements;
        var vecB = vec.vec();
        return new Vector4f(addVec4(vecA, vecB, [0.0, 0.0, 0.0, 0.0]));
    };

    /**
     * subtract two vector 1x4
     * @param float[4] vecA
     * @param float[4] vecB
     * @param float[4] vecResult
     * @return float[4] vecResult
     */
    var subVec4 = function (vecA, vecB, vecResult) {
        var i;
        for (i = 0; i < 4; i++) {
            vecResult[i] = vecA[i] - vecB[i];
        }
        return vecResult;
    };

    /**
     * subtract this vector from other vector
     * @param Vector4f vec
     * @return Vector4f resultVec
     */
    Vector4fClass.prototype.sub = function (vec) {
        var vecA = elements;
        var vecB = vec.vec();
        return new Vector4f(subVec4(vecA, vecB, [0.0, 0.0, 0.0, 0.0]));
    };

    /**
     * multiply two vector 1x4
     * @param float[4] vecA
     * @param float[4] vecB
     * @param float[4] vecResult
     * @return float[4] vecResult
     */
    var mulVec4 = function (vecA, vecB, vecResult) {
        var i;
        for (i = 0; i < 4; i++) {
            vecResult[i] = vecA[i] * vecB[i];
        }
        return vecResult;
    };

    /**
     * multiply this vector with other vector
     * @param Vector4f vec
     * @return Vector4f resultVec
     */
    Vector4fClass.prototype.mul = function (vec) {
        var vecA = elements;
        var vecB = vec.vec();
        return new Vector4f(mulVec4(vecA, vecB, [0.0, 0.0, 0.0, 0.0]));
    };

    /**
     * multiply vector 4x1 with a scalar value
     * @param float[4] vecA
     * @param float scalar
     * @param float[4] vecResult
     * @return float[4] vecResult
     */
    var mulScalarVec4 = function (vecA, scalar, vecResult) {
        var i;
        for (i = 0; i < 4; i++) {
            vecResult[i] = vecA[i] * scalar;
        }
        return vecResult;
    };

    /**
     * multiply this vector with scalar value
     * @param float scalar
     * @return Vector4f resultVec
     */
    Vector4fClass.prototype.scale = function (scalar) {
        var vecA = elements;
        return new Vector4f(mulScalarVec4(vecA, scalar, [0.0, 0.0, 0.0, 0.0]));
    };

    /**
     * dot product of this vector with other vector
     * @param Vector4f vec
     * @return {float} dot product
     */
    Vector4fClass.prototype.dot = function (vec) {
        var dotResult;
        var vecA = elements;
        var vecB = vec.vec();
        dotResult  = vecA[0] * vecB[0];
        dotResult += vecA[1] * vecB[1];
        dotResult += vecA[2] * vecB[2];
        return dotResult;
    };

    /**
     * cross product of two vectors
     * @param float[4] vecA
     * @param float[4] vecB
     * @param float[4] vecResult
     * @return float[4] vecResult
     */
    var crossVec4 = function (vecA, vecB, vecResult) {
        vecResult[0] = vecA[1] * vecB[2] - vecA[2] * vecB[1];
        vecResult[1] = vecA[2] * vecB[0] - vecA[0] * vecB[2];
        vecResult[2] = vecA[0] * vecB[1] - vecA[1] * vecB[0];
        vecResult[3] = 0.0;
        return vecResult;
    };

    /**
     * cross product of this vector with other vector
     * @param Vector4f vec
     * @return {Vector4f} vector perpendicular to this vector to vec
     */
    Vector4fClass.prototype.cross = function (vec) {
        var vecA = elements;
        var vecB = vec.vec();
        return new Vector4f(crossVec4(vecA, vecB, [0.0, 0.0, 0.0, 0.0]));
    };

    return Vector4fClass;

}());

module.exports = Vector4f;
