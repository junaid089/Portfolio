const fs = require('fs');
const path = require('path');

const src = path.resolve('node_modules/three/examples/jsm/libs/draco/gltf');
const output = path.resolve('public/draco');

// Copy draco decoder from three.js into the public directory using native fs
if (fs.existsSync(src)) {
  fs.mkdirSync(output, { recursive: true });
  fs.copyFileSync(path.join(src, 'draco_decoder.wasm'), path.join(output, 'draco_decoder.wasm'));
  fs.copyFileSync(path.join(src, 'draco_wasm_wrapper.js'), path.join(output, 'draco_wasm_wrapper.js'));
}
