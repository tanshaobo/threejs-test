var stats = initStats()
var scene, camera, renderer, controls, light, guiControls

function initScene(){
  scene = new THREE.Scene()
}

function initCamera(){
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(0, 200, 300)
  camera.lookAt(new THREE.Vector3(0, 0, 0))
}

function initRenderer(){
  renderer = Detector.webgl ? new THREE.WebGLRenderer({antialias: true, autoClear: true}) : new THREE.CanvasRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor( 0x050505 )

  document.body.appendChild(renderer.domElement)
}

function initControl() {
  controls = new THREE.TrackballControls(camera, renderer.domElement)
}

function initLight(){
  light = new THREE.SpotLight( 0xEAEAEA )
  light.position.set(-100, 200, 200)
  scene.add(light)
  scene.add(new THREE.AmbientLight( 0x3D3D3D ))
}

function initStats() {
  var stats = new Stats()
  stats.domElement.style.position = 'absolute'
  stats.domElement.style.left = '0px'
  stats.domElement.style.top = '0px'
  document.body.append(stats.domElement)
  return stats
}

function init(){
  initScene()
  initCamera()
  initRenderer()
  initControl()
  initLight()
  initContent()
  initGui()
  addEventListener('resize', onWindowResize, false)
}

function update(render){
  stats.update()
  controls.update()
  controls.handleResize()

  if(render){
    render()
  }
  
}
function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  update(render)
}

function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

(function(){
  init()
  animate()
})()