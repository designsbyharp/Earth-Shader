
const resizeBrowser = (sizes, renderer, camera) =>
{
    window.addEventListener('resize', ()=>{

        // resize width and height based on window
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // set new size for renderer
        renderer.setSize(sizes.width, sizes.height);

        // camera aspect change and then update projection matrix
        camera.aspect = sizes.width/sizes.height;
        camera.updateProjectionMatrix();
    })
}

export default resizeBrowser;