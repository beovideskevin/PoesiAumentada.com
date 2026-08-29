const onxrloaded = () => {
    XR8.XrController.configure({
        imageTargetData: [
            require('../image-targets/balconing.json'),
            require('../image-targets/el_puto_amo.json'),
            require('../image-targets/interferencia.json'),
            require('../image-targets/la_jaula.json'),
            require('../image-targets/mar_a_la_vista.json'),
            require('../image-targets/maria_gracia.json'),
        ],
    });
};

window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded);
