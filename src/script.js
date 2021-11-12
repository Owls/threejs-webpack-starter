import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

//Loader
const textureLoader = new THREE.TextureLoader()
const normalTexture = textureLoader.load('../threejs-threejs-home/Textures/NormalMap.png')

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.SphereBufferGeometry(.5, 64, 64)

const geometry2 = new THREE.SphereBufferGeometry(.5, 64, 64)


// Materials
const material = new THREE.MeshStandardMaterial()
material.metalness = 0.7
material.roughness = 0.2
material.normalMap = normalTexture;
material.color = new THREE.Color(0xff00f0)


// Mesh
const sphere = new THREE.Mesh(geometry,material)
scene.add(sphere)

const sphere2 = new THREE.Mesh(geometry2, material)
scene.add(sphere2)
sphere2.position.set(.45, 0.75, -0.75);

// Lights

const pointLight = new THREE.PointLight(0x8a46ff, 0.1)
pointLight.position.set(-1.32, 1.52, -0.61)
pointLight.intensity = 5.34
scene.add(pointLight)

const light = gui.addFolder('Light')

light.add(pointLight.position, 'x').min(-3).max(3).step(0.01)
light.add(pointLight.position, 'y').min(-6).max(6).step(0.01)
light.add(pointLight.position, 'z').min(-3).max(3).step(0.01)
light.add(pointLight, 'intensity').min(0).max(10).step(0.01)

// const pointLightHelper = new THREE.PointLightHelper(pointLight, 1)
// scene.add(pointLightHelper)

const lightColor =
    {
        color: 0xff0000
    }
light.addColor(lightColor, 'color')
    .onChange(() =>
    {
        pointLight.color.set(lightColor.color)
    })

const pointLight2 = new THREE.PointLight(0x8a46ff, 2)
pointLight2.position.set(-1.39, -1.6, 1.87)
pointLight2.intensity = 7.88
scene.add(pointLight2)

const light2 = gui.addFolder('Light II')

light2.add(pointLight2.position, 'x').min(-3).max(3).step(0.01)
light2.add(pointLight2.position, 'y').min(-6).max(6).step(0.01)
light2.add(pointLight2.position, 'z').min(-3).max(3).step(0.01)
light2.add(pointLight2, 'intensity').min(0).max(10).step(0.01)

// const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 1)
// scene.add(pointLightHelper2)

const light2Color =
    {
        color: 0xff0000
    }
light2.addColor(light2Color, 'color')
    .onChange(() =>
    {
        pointLight.color.set(light2Color.color)
    })

const pointLight3 = new THREE.PointLight(0x8a46ff, 2)
pointLight3.position.set(-0.48, -0.3, 0.35)
pointLight3.intensity = 8.54
scene.add(pointLight3)

const light3 = gui.addFolder('Light III')

light3.add(pointLight3.position, 'x').min(-3).max(3).step(0.01)
light3.add(pointLight3.position, 'y').min(-6).max(6).step(0.01)
light3.add(pointLight3.position, 'z').min(-3).max(3).step(0.01)
light3.add(pointLight3, 'intensity').min(0).max(10).step(0.01)


// const pointLightHelper3 = new THREE.PointLightHelper(pointLight3, 1)
// scene.add(pointLightHelper3)

const light3Color =
    {
        color: 0xff0000
    }
light3.addColor(light3Color, 'color')
    .onChange(() =>
    {
        pointLight.color.set(light3Color.color)
    })

// const pointLight4 = new THREE.PointLight(0x4389A2, 0.1)
// pointLight.position.set(0.75, 0.75, -0.75)
// pointLight.intensity = 10
// scene.add(pointLight4)
//
// const light = gui.addFolder('Light IV')
//
// light.add(pointLight4.position, 'x').min(-3).max(3).step(0.01)
// light.add(pointLight4.position, 'y').min(-6).max(6).step(0.01)
// light.add(pointLight4.position, 'z').min(-3).max(3).step(0.01)
// light.add(pointLight4, 'intensity').min(0).max(10).step(0.01)
//
// const pointLightHelper = new THREE.PointLightHelper(pointLight, 1)
// scene.add(pointLightHelper)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */


document.addEventListener('mousemove', onDocumentMouseMove)

let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

const windowX = window.innerWidth / 2;
const windowY = window.innerHeight / 2;


function onDocumentMouseMove(event)
{
    mouseX = (event.clientX - windowX)
    mouseY = (event.clientY - windowY)
}
const updateSphere = (event) =>
{
    sphere.position.y = window.scrollY * .001
}

window.addEventListener('scroll', updateSphere);

const clock = new THREE.Clock()

const tick = () =>
{

    targetX = mouseX * .001
    targetY = mouseY * .001

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // sphere.rotation.x = .2 * elapsedTime
    sphere.rotation.y = .3 * elapsedTime

    sphere.rotation.y += .5 * (targetX - sphere.rotation.y)
    sphere.rotation.x += .05 * (targetY - sphere.rotation.x)
    sphere.position.z += -.05 * (targetY - sphere.rotation.x)

    sphere2.rotation.y = .75 * elapsedTime

    sphere2.rotation.y += .5 * (targetX - sphere2.rotation.y)
    sphere2.rotation.x += .05 * (targetY - sphere2.rotation.x)
    sphere2.position.z += -.05 * (targetY - sphere2.rotation.x)

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()