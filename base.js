var scene, camera, renderer, controls;
var stats = initStats();

/* 地面网格所需变量 */
var length = 200;  /*线段长度*/

/* 场景 */
function initScene() {

    scene = new THREE.Scene();

}

/* 相机 */
function initCamera() {

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.set(0, 200, 250);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

}

/* 渲染器 */
function initRender() {

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

}

/* 灯光 */
function initLight() {

    var ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(100, 300, 200);
    scene.add(directionalLight);

}

/* 控制器 */
function initControls() {

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    /* 其它属性默认 */

}


/* 更新数据 */
function update() {

    stats.update();
    controls.update();

}

/* 性能插件 */
function initStats() {

    var stats = new Stats();

    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.right = '0px';

    document.body.appendChild(stats.domElement);

    return stats;

}

/* 窗口自动适应 */
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

/* 循环调用 */
function animate() {

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    update();

}

/* 初始化 */
function init() {

    /* 兼容性判断 */
    if (!Detector.webgl) Detector.addGetWebGLMessage();

    initScene();
    initCamera();
    initRender();
    initLight();
    initContent();
    initControls();

    /* 事件监听 */
    window.addEventListener('resize', onWindowResize, false);
}

/* 初始加载 */
(function () {

    console.log('three start...');

    init();
    animate();

    console.log('three end...');

})();