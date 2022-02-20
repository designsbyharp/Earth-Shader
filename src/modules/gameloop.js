const gameloop = (renderer, scene, camera, mesh) =>
{

    const tick = () =>
    {
        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);

    }

    tick();
}

export default gameloop;