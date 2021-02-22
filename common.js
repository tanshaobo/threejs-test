(function(){
  var arr = [
    './js/jquery-1.11.1.js',
    './js/build/three.js',
    './js/examples/js/libs/stats.min.js',
    './js/examples/js/libs/dat.gui.min.js'
  ]
  loadJS(arr)

  // var WebGLBox = document.createElement("div")
  // var StatsBox = document.createElement("div")
  
  // document.body.appendChild(WebGLBox)
  // document.body.appendChild(StatsBox)

  // var stats = initStats()

  //   function initStats() {
  //     var stats = new Stats()

  //     stats.domElement.style.position = 'absolute'
  //     stats.document.style.left = '0px'
  //     stats.document.style.right = '0px'

  //     StatsBox.append(stats)

  //     return stats
  //   }
})(window)

function loadJS(k){
  v = typeof(k) == "string" ? [k] : k
  return new Promise((resolve,reject) => {
    var load = function(i){
      var s = document.createElement('script')
      s.type = 'text/javascript'
      s.onload = function(){
        i++
        if(i == v.length){
          resolve()
        }else{
          load(i)
        }
        s.src = v[i]
        document.head.appendChild(s)
      }
    }
    load(0)
  })
}