import {
    Polyline,
    Renderer,
    Transform,
    Vec3,
    Color
} from "https://cdn.jsdelivr.net/npm/ogl@0.0.32/dist/ogl.mjs";

const canvas = document.getElementById('cursor-canvas');
const renderer = new Renderer({ canvas, dpr: 2, alpha: true });
const gl = renderer.gl;
gl.clearColor(0, 0, 0, 0);

const scene = new Transform();

const vertex = `
    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;

    vec4 getPosition() {
        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);
        vec2 nextScreen = next.xy * aspect;
        vec2 prevScreen = prev.xy * aspect;

        vec2 tangent = normalize(nextScreen - prevScreen);
        vec2 normal = vec2(-tangent.y, tangent.x);
        normal /= aspect;
        normal *= 1.0 - pow(abs(uv.y - 0.5) * 2.0, 2.0);

        float pixelWidth = 1.0 / (uResolution.y / uDPR);
        normal *= pixelWidth * uThickness;

        float dist = length(nextScreen - prevScreen);
        normal *= smoothstep(0.0, 0.02, dist);

        vec4 current = vec4(position, 1);
        current.xy -= normal * side;
        return current;
    }

    void main() {
        gl_Position = getPosition();
    }
`;

const count = 20;
const points = Array.from({ length: count }, () => new Vec3());

const polyline = new Polyline(gl, {
    points,
    vertex,
    uniforms: {
        uColor: { value: new Color("#4158D0") },
        uThickness: { value: 20 }
    }
});

polyline.mesh.setParent(scene);

function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    polyline.resize();
}

window.addEventListener("resize", resize, false);
resize();

const mouse = new Vec3();

['mousemove', 'touchmove'].forEach(eventName => {
    window.addEventListener(eventName, updateMouse, { passive: true });
});

function updateMouse(e) {
    if (e.changedTouches && e.changedTouches.length) {
        e.x = e.changedTouches[0].pageX;
        e.y = e.changedTouches[0].pageY;
    }
    if (e.x === undefined) {
        e.x = e.pageX;
        e.y = e.pageY;
    }

    mouse.set(
        (e.x / gl.renderer.width) * 2 - 1,
        (e.y / gl.renderer.height) * -2 + 1,
        0
    );
}

const tmp = new Vec3();

function update(t) {
    requestAnimationFrame(update);

    for (let i = points.length - 1; i >= 0; i--) {
        if (!i) {
            points[i].lerp(mouse, 0.9);
        } else {
            points[i].lerp(points[i - 1], 0.75);
        }
    }
    polyline.updateGeometry();

    renderer.render({ scene });
}

requestAnimationFrame(update);