const onxrloaded = () => {
    const page = window.location.pathname.split('/').pop();
    const imageTargetData =
        page === 'index-cortos-6-9.html'
            ? [
                  require('../image-targets/pimentel-corto-6.json'),
                  require('../image-targets/pimentel-corto-7.json'),
                  require('../image-targets/pimentel-corto-8.json'),
                  require('../image-targets/pimentel-corto-9.json'),
              ]
            : page === 'index-cortos-1-5.html'
              ? [
                    require('../image-targets/pimentel-corto-1.json'),
                    require('../image-targets/pimentel-corto-2.json'),
                    require('../image-targets/pimentel-corto-3.json'),
                    require('../image-targets/pimentel-corto-4.json'),
                    require('../image-targets/pimentel-corto-5.json'),
                ]
              : [
                    require('../image-targets/pimentel-4.json'),
                    require('../image-targets/pimentel-5.json'),
                    require('../image-targets/porque_la_ilusion_a_veces.json'),
                    require('../image-targets/sigue_rondando_la_sombra.json'),
                ];

    XR8.XrController.configure({
        imageTargetData,
    });
};

window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded);
