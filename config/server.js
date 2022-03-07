module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('bgKomDv15VFkrs+/bWRHHA==', 'mHkXOYtGe3W75ZM/JbRK6w==','02IMi0at3bRc2yLin+EDsg==', 'FzCbFo8flhpPYAg5+suGQw=='),
  },
  url: 'https://zenfamilyspa-tiw3n.ondigitalocean.app/'
});
