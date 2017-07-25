
'use strict';

/**
 * Thin wrapper for matrix 4x4 for 3D matrix transformation
 */
var Matrix4f = (function(){

    /**
     * Constructor
     * @param float[4][4] mat
     */
    function Matrix4fClass(mat) {
        var elements;
        this.mat = function () {
            return elements;
        };

        this.setMat = function (elems) {
            elements = elems;
            return this;
        };

        if (typeof mat !== 'undefined') {
            this.setMat(mat);
        }
    };

    /**
     * convert matrix float[4][4] to float[16]
     * @return float[16]
     */
    Matrix4fClass.prototype.flatten = function () {
        var result = [], i, j;
        var mat4x4 = this.mat();
        for (j=0; j<4; j++) {
            for (i=0; i<4; i++) {
                result.push(mat4x4[i][j]);
            }
        }
        return result;
    };

    /**
     * add two matrix 4x4
     * @param float[4][4] matA
     * @param float[4][4] matB
     * @param float[4][4] matResult
     * @return float[4][4] matResult
     */
    var addMat4x4 = function (matA, matB, matResult) {
        var i, j;
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 4; j++) {
                matResult[i][j] = matA[i][j] + matB[i][j];
            }
        }
        return matResult;
    };

    /**
     * add this matrix with other matrix
     * @param Matrix4f mat
     * @return Matrix4f resultMat
     */
    Matrix4fClass.prototype.add = function (mat) {
        var matResult = [[],[],[],[]];
        var matA = this.mat();
        var matB = mat.mat();
        return new Matrix4f(addMat4x4(matA, matB, matResult));
    };

    /**
     * substract two matrix 4x4
     * @param float[4][4] matA
     * @param float[4][4] matB
     * @param float[4][4] matResult
     * @return float[4][4] matResult
     */
    var subMat4x4 = function (matA, matB, matResult) {
        var i, j;
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 4; j++) {
                matResult[i][j] = matA[i][j] - matB[i][j];
            }
        }
        return matResult;
    };

    /**
     * subtract this matrix with other matrix
     * @param Matrix4f mat
     * @return Matrix4f resultMat
     */
    Matrix4fClass.prototype.sub = function (mat) {
        var matResult = [[],[],[],[]];
        var matA = this.mat();
        var matB = mat.mat();
        return new Matrix4f(subMat4x4(matA, matB, matResult));
    };

    /**
     * multiply two matrix 4x4
     * @param float[4][4] matA
     * @param float[4][4] matB
     * @param float[4][4] matResult
     * @return float[4][4] matResult
     */
    var multiplyMat4x4 = function (matA, matB, matResult) {
        var i, j,k, tmp;
        for (i=0; i<4; i++) {
            for (j=0; j<4; j++) {
                tmp = 0;
                for (k=0; k<4; k++) {
                    tmp = tmp + matA[i][k] * matB[k][j];
                }
                matResult[i][j] = tmp;
            }
        }
        return matResult;
    };

    /**
     * multiply this matrix with other matrix
     * @param Matrix4f mat
     * @return Matrix4f resultMat
     */
    Matrix4fClass.prototype.mul = function (mat) {
        var matResult = [[],[],[],[]];
        var matA = this.mat();
        var matB = mat.mat();
        return new Matrix4f(multiplyMat4x4(matA, matB, matResult));
    };

    //alias name for mul() method
    Matrix4fClass.prototype.x = Matrix4fClass.prototype.mul;

    /**
     * multiply matrix 4x4 with a scalar value
     * @param float[4][4] matA
     * @param float scalar
     * @param float[4][4] matResult
     * @return float[4][4] matResult
     */
    var mulScalarMat4x4 = function (matA, scalar, matResult) {
        var i, j;
        for (i=0; i<4; i++) {
            for (j=0; j<4; j++) {
                matResult[i][j] = matA[i][j] * scalar;
            }
        }
        return matResult;
    };

    /**
     * multiply this matrix scalar value
     * @param float scalar
     * @return Matrix4f resultMat
     */
    Matrix4fClass.prototype.scale = function (scalar) {
        var matResult = [[],[],[],[]];
        var matA = this.mat();
        return new Matrix4f(mulScalarMat4x4(matA, scalar, matResult));
    };

    return Matrix4fClass;
}());

module.exports = Matrix4f;
