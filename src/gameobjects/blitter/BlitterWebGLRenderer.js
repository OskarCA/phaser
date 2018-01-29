var GameObject = require('../GameObject');

var BlitterWebGLRenderer = function (renderer, gameObject, interpolationPercentage, camera)
{
    if (GameObject.RENDER_MASK !== gameObject.renderFlags || (gameObject.cameraFilter > 0 && (gameObject.cameraFilter & camera._id)))
    {
        return;
    }

    this.pipeline.drawBlitter(gameObject, camera);
};

module.exports = BlitterWebGLRenderer;
