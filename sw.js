/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2019/09/15/sewa-dan-rental-mobil-kediri/index.html",
    "revision": "b979d5c5136c672f08e23efe5e8a9554"
  },
  {
    "url": "404.html",
    "revision": "9bc6b56e88076cbc0999e59f58115d31"
  },
  {
    "url": "about-us/index.html",
    "revision": "0297ed290c00fad4273e645843170678"
  },
  {
    "url": "assets/css/animated.css",
    "revision": "5ff920880dcc7ef4c746beb3f90e078a"
  },
  {
    "url": "assets/css/bootstrap.css",
    "revision": "7356c18e6f4a8e908bed8a24468e3b1e"
  },
  {
    "url": "assets/css/flaticon.css",
    "revision": "bac442a39562554de7a9e138de6614fd"
  },
  {
    "url": "assets/css/font-awesome.min.css",
    "revision": "04425bbdc6243fc6e54bf8984fe50330"
  },
  {
    "url": "assets/css/main.css",
    "revision": "41cfd29a9c3b0a7a3bf874858eddd4a7"
  },
  {
    "url": "assets/css/owl-carousel.css",
    "revision": "1f05e0c6be3220ebd438f66a8747a57c"
  },
  {
    "url": "assets/css/sliderPro.css",
    "revision": "c864540149e3f7a47154fcf5a5d67065"
  },
  {
    "url": "assets/fonts/Flaticon.ttf",
    "revision": "9d36a6b79b510e816ac7350e0ea4af38"
  },
  {
    "url": "assets/fonts/Flaticon.woff",
    "revision": "563bf672f6065c10e8ac712efaffa9b1"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.woff2",
    "revision": "97493d3f11c0a3bd5cbd959f5d19b699"
  },
  {
    "url": "assets/images/closedhand.cur",
    "revision": "a8c874b93b3d848f39a71260c57e3863"
  },
  {
    "url": "assets/images/klikada-panjang.svg",
    "revision": "fa27eef4158316cefa33e89dbfc29f4b"
  },
  {
    "url": "assets/images/logo_black.png",
    "revision": "67bd6f3b5a99767dd50a2f49a6ecc484"
  },
  {
    "url": "assets/images/logo_responsive_black.png",
    "revision": "67bd6f3b5a99767dd50a2f49a6ecc484"
  },
  {
    "url": "assets/images/logo_white.png",
    "revision": "67ca341ffe8611e17954eb197c2244e4"
  },
  {
    "url": "assets/images/openhand.cur",
    "revision": "b06c243f534d9c5461d16528156cd5a8"
  },
  {
    "url": "assets/images/page_heading_bg.jpg",
    "revision": "6011b59884fd376e033377c04e66bd57"
  },
  {
    "url": "assets/images/user_female.jpg",
    "revision": "ca433f1d5fa36a1429abad9c9abf256c"
  },
  {
    "url": "assets/images/user_male.jpg",
    "revision": "96e2edab2d303a9ca8f580ebded35de7"
  },
  {
    "url": "assets/images/whatsapp.png",
    "revision": "63829b6143f17134ec059387d805ac4a"
  },
  {
    "url": "assets/js/bootstrap.min.js",
    "revision": "0ccfdfcd224206675f95abd9fdd3fd20"
  },
  {
    "url": "assets/js/custom.js",
    "revision": "031aeeb58a064736d05a834a8d96d2bb"
  },
  {
    "url": "assets/js/jquery-1.11.0.min.js",
    "revision": "8fc25e27d42774aeae6edbc0a18b72aa"
  },
  {
    "url": "assets/js/jquery.gmap3.min.js",
    "revision": "d68bebf31c1dfbab9b5a0f254029d632"
  },
  {
    "url": "assets/js/owl.carousel.min.js",
    "revision": "47c357c05cb99cedbac2874840319818"
  },
  {
    "url": "assets/js/slick.js",
    "revision": "af2f1cfdc149f699184f9f77b38e2f63"
  },
  {
    "url": "assets/js/sliderpro.min.js",
    "revision": "180472144ba15780445950580cea00d1"
  },
  {
    "url": "assets/js/wow.animation.js",
    "revision": "1b974b9ac35b851aa7aaf477b5a69ee8"
  },
  {
    "url": "blog/index.html",
    "revision": "caac31e5682ecbc10103119adb2a5344"
  },
  {
    "url": "contact-us/index.html",
    "revision": "a2acfd0f8a0a8dfdce94c0ffbc4e1f6b"
  },
  {
    "url": "data-service/1-sewa-mobil/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-service/2-wedding-car/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-service/3-travel-tour/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-service/4-carter/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-service/5-paket-wisata/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-service/6-informasi-wisata/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-slider/slide-1/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-slider/slide-2/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-testimonials/achmad/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-testimonials/djuri/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "favicon.ico",
    "revision": "cef90e3b47c714b0b8d10274d770c487"
  },
  {
    "url": "feed.xml",
    "revision": "4e956e0b6e4519ef985942d608ec6a17"
  },
  {
    "url": "images/0a849eebc61ac90c0e5d3da92dd42310.jpg",
    "revision": "fa89d2134cecf198054d8f9776e892c2"
  },
  {
    "url": "images/bus-1.jpg",
    "revision": "f21f8f8f10682d490e0add4de68e168a"
  },
  {
    "url": "images/bus-2.jpg",
    "revision": "48f1bad565738eee84f76fe501363ec5"
  },
  {
    "url": "images/bus-3.jpg",
    "revision": "6759c937fb603ab93cd717ae45b04d31"
  },
  {
    "url": "images/bus-4.jpg",
    "revision": "cc7cb2adef9135b11004d18f95bd0da8"
  },
  {
    "url": "images/bus-5.jpg",
    "revision": "d0dcb917d70fe2503f6c5a090e4aaf77"
  },
  {
    "url": "images/car-girls.jpg",
    "revision": "db64cfa0b3841a16e4354b6a705438d0"
  },
  {
    "url": "images/daihatsu-luxio-1.jpg",
    "revision": "0c95b76156dd411bb3f4755d1e7a0bd2"
  },
  {
    "url": "images/daihatsu-luxio-2.jpg",
    "revision": "5967c5391569112efe678608e9ef7dff"
  },
  {
    "url": "images/daihatsu-luxio-3.jpg",
    "revision": "691d818b86f19db6dd629e6d2f7e6256"
  },
  {
    "url": "images/daihatsu-luxio-4.jpg",
    "revision": "3085c4d7ab6c186b479d5d28fdbd5231"
  },
  {
    "url": "images/daihatsu-luxio-5.jpg",
    "revision": "dc5129eca3bc53cbbfedf16934f18f2c"
  },
  {
    "url": "images/daihatsu-sigra-1.jpg",
    "revision": "6666857a28fa8820270517d0aa7e38cd"
  },
  {
    "url": "images/daihatsu-sigra-2.jpg",
    "revision": "9d80aefc9b5e7a2728b0a46b7564725c"
  },
  {
    "url": "images/daihatsu-sigra-3.jpg",
    "revision": "fd17028450a26816eabb1cde2e63586d"
  },
  {
    "url": "images/daihatsu-sigra-4.jpg",
    "revision": "ab1e484b4db518fd3c248dd6c8a55508"
  },
  {
    "url": "images/daihatsu-sigra-5.jpg",
    "revision": "f408226dfee42d22676ee6f14d8acf4d"
  },
  {
    "url": "images/daihatsu-xenia-1.jpg",
    "revision": "f24f238d621cf7673da95cb866973955"
  },
  {
    "url": "images/daihatsu-xenia-2.jpg",
    "revision": "c358cf1b66688f36f7cc77432235ed58"
  },
  {
    "url": "images/daihatsu-xenia-3.jpg",
    "revision": "98f085c086381c4b0f4e1fef5feb5e3f"
  },
  {
    "url": "images/daihatsu-xenia-4.jpg",
    "revision": "a2d61f799d8342b5ed2447e288496702"
  },
  {
    "url": "images/daihatsu-xenia-5.jpg",
    "revision": "f1423926563c3a6e5d90c001fa2b5a84"
  },
  {
    "url": "images/honda-mobilio-1.jpg",
    "revision": "a409da3cf4cf3b45d453b2179659181f"
  },
  {
    "url": "images/honda-mobilio-2.jpg",
    "revision": "f280634d85557b40717e6b022bfa5c5e"
  },
  {
    "url": "images/honda-mobilio-3.jpg",
    "revision": "4d825afbd91a2821441e4165bc2e4484"
  },
  {
    "url": "images/honda-mobilio-4.jpg",
    "revision": "8f8ee427bd26abcb8d2d43a8d18d5ec9"
  },
  {
    "url": "images/honda-mobilio-5.jpg",
    "revision": "49a121d43a5b5304143268984fa2ac01"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "b21787d8fb73d61abe4d3103ae7ec452"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "d1768cc3d9e80d14715ce16fe04aad27"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "b828a241c82d9e18dbbc7cce89a34a38"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "12bb750f204216c1e8f610f9e2dd5dd0"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "664680809de2ac71f22a4b70f2b27f28"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "8681308286f981fb0fa6c0d648f98b83"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "b15970bce2fad384d519058bc231445e"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "66f51d801e0ea00547191a834078feb3"
  },
  {
    "url": "images/isuzu-elf-1.jpg",
    "revision": "27182bdf0cb021c9fdcf93ebbd5fa329"
  },
  {
    "url": "images/isuzu-elf-2.jpg",
    "revision": "6607ee7f8a3a630cc928464c266c49d1"
  },
  {
    "url": "images/isuzu-elf-3.jpg",
    "revision": "3733e351d7331eccf6dda9db4de4ad93"
  },
  {
    "url": "images/isuzu-elf-4.jpg",
    "revision": "8e3eeb064da30db2ed6f5fe50a573ba4"
  },
  {
    "url": "images/isuzu-elf-5.jpg",
    "revision": "d3b25218691b86fbb1c867be07145ea0"
  },
  {
    "url": "images/isuzu-elf-6.jpg",
    "revision": "5f5425f95ef793749256ad8f1c8ed277"
  },
  {
    "url": "images/isuzu-elf-7.jpg",
    "revision": "56d3c38b168e3d5741ff4351fdc8b29f"
  },
  {
    "url": "images/isuzu-elf-7b.jpg",
    "revision": "52147a05d5ee97cb28452be5053fb202"
  },
  {
    "url": "images/isuzu-elf-8.jpg",
    "revision": "028bd431930e574ce0a0d421e3e747f0"
  },
  {
    "url": "images/main_slide_01.jpg",
    "revision": "26f1ea15171cc2e3e430dafed9825038"
  },
  {
    "url": "images/slider-bus.jpg",
    "revision": "545023af36297fc54bbb44a8bd06c080"
  },
  {
    "url": "images/slider-mini-bus.jpg",
    "revision": "607172ae8e1197660f474adf1504d0c9"
  },
  {
    "url": "images/suzuki-ertiga-1.jpg",
    "revision": "87abb53672703b08778fc8e079e4f988"
  },
  {
    "url": "images/suzuki-ertiga-2.jpg",
    "revision": "b428a9ab0ad107340a264af3dc304105"
  },
  {
    "url": "images/suzuki-ertiga-3.jpg",
    "revision": "3d76a54f4488f9f6b157b3e282191187"
  },
  {
    "url": "images/suzuki-ertiga-4.jpg",
    "revision": "8b53340306e55a030fb0f3f6b81deaf4"
  },
  {
    "url": "images/suzuki-ertiga-5.jpg",
    "revision": "37201893f059b8b2c3fb2ef5eb04893d"
  },
  {
    "url": "images/toyota-avanza-1.jpg",
    "revision": "75b4f277e9495560da0fa24be5974101"
  },
  {
    "url": "images/toyota-avanza-2.jpg",
    "revision": "ae4ea4d97e67e211628e4733ed229902"
  },
  {
    "url": "images/toyota-avanza-3.jpg",
    "revision": "57bf12f8868f0b5a6d5e23810a4a4be0"
  },
  {
    "url": "images/toyota-avanza-4.jpg",
    "revision": "d7270648466c0e7875995c7de5ba2b78"
  },
  {
    "url": "images/toyota-avanza-5.jpg",
    "revision": "014f2db1c956da7c86efa5c1fb2d0d10"
  },
  {
    "url": "images/toyota-calya-1.jpg",
    "revision": "b637364791ace5932dbff4aa65a8c832"
  },
  {
    "url": "images/toyota-calya-2.jpg",
    "revision": "a3cc61da0baf431e30a6b412cfe8cbaf"
  },
  {
    "url": "images/toyota-calya-3.jpg",
    "revision": "a461b224371b72e6d7c6f765915e6d91"
  },
  {
    "url": "images/toyota-calya-4.jpg",
    "revision": "6fbf7b72674968b55d9ab87702322484"
  },
  {
    "url": "images/toyota-calya-5.jpg",
    "revision": "c892170e385d39421f01ccfdcd64ab44"
  },
  {
    "url": "images/toyota-hiace-1.jpg",
    "revision": "d2c6df537a63e28d5e4928ad99ef93e6"
  },
  {
    "url": "images/toyota-hiace-2.jpg",
    "revision": "32b88361f5bd7fc87486bd70bd730fbe"
  },
  {
    "url": "images/toyota-hiace-3.jpg",
    "revision": "2fea0b89edf8186df75aa0014c782c22"
  },
  {
    "url": "images/toyota-hiace-4.jpg",
    "revision": "ca8a10e9d1330db2b5ef24bf359e1f6a"
  },
  {
    "url": "images/toyota-hiace-5.jpg",
    "revision": "8ca2c7285f401216d692e94e522d9ef2"
  },
  {
    "url": "images/toyota-kijang-innova-1.jpg",
    "revision": "6d73064aa92d4cf637cce4613c4377c7"
  },
  {
    "url": "images/toyota-kijang-innova-2.jpg",
    "revision": "e4f4c031ccba78d27fe7ffcc82736bbd"
  },
  {
    "url": "images/toyota-kijang-innova-3.jpg",
    "revision": "99910ab0121236c57152ee944d9b7596"
  },
  {
    "url": "images/toyota-kijang-innova-4.jpg",
    "revision": "faa91b92c4de74d57c6abba9b77c5856"
  },
  {
    "url": "images/toyota-kijang-innova-5.jpg",
    "revision": "64c872474184404eafb1408b87712da0"
  },
  {
    "url": "images/wedding-car-1.jpg",
    "revision": "e7911711f9f17c85b453a50cb0638fd2"
  },
  {
    "url": "images/wedding-car-2.jpg",
    "revision": "963af197eba70c24b07ea424acab886f"
  },
  {
    "url": "images/wedding-car-3.jpg",
    "revision": "8a43fe906532d9cd52b5a5b67ec7a6ec"
  },
  {
    "url": "images/wedding-car-4.jpg",
    "revision": "12a803e188d64b9d6bfb978f0c4b6bca"
  },
  {
    "url": "images/wedding-car-5.jpg",
    "revision": "1d122381268ef3bbb0763bb5af07e079"
  },
  {
    "url": "images/wisata-terminal-2-1.jpg",
    "revision": "7e1d81488b36a6e7f4f312f6817c7958"
  },
  {
    "url": "images/wisata-terminal-2-2.jpg",
    "revision": "eccccf76be8619a7b4dd1558012e3f58"
  },
  {
    "url": "images/wisata-terminal-2-3.jpg",
    "revision": "1179c9c519e7042e8c55f452300f7d32"
  },
  {
    "url": "images/wisata-terminal-2-4.jpg",
    "revision": "ae4967e487856eacf3334e2446e98c8e"
  },
  {
    "url": "images/wisata-terminal-2-5.jpg",
    "revision": "e480652454916347fd095ebc8040f4b7"
  },
  {
    "url": "index.html",
    "revision": "f86dfd8f099122cd6cef1eef3a95c71b"
  },
  {
    "url": "manifest.json",
    "revision": "2f89fdc0a3d26ef17fbdb02af31444af"
  },
  {
    "url": "paket-wisata/antar-jemput-bandara-juanda/index.html",
    "revision": "ef779066d517ba850863708034f6d8df"
  },
  {
    "url": "paket-wisata/index.html",
    "revision": "ac09fbd1ebffc6aca1c95d390f258166"
  },
  {
    "url": "paket-wisata/wedding-car-mobil-pengantin/index.html",
    "revision": "1421488b95af5096e6214cbbf0690585"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "5bded2d0eae8c73289d8d3b9ed2ee36f"
  },
  {
    "url": "robots.txt",
    "revision": "f22babb92a41ab36bacc66ac90315f1b"
  },
  {
    "url": "sewa-mobil/daihatsu-luxio/index.html",
    "revision": "0a7e01327b3c66a2c29aede9483e0581"
  },
  {
    "url": "sewa-mobil/daihatsu-sigra/index.html",
    "revision": "3b948de66e68909658494e5780003cf1"
  },
  {
    "url": "sewa-mobil/daihatsu-xenia/index.html",
    "revision": "79b34a6fe3aed10c71038ce3688997c2"
  },
  {
    "url": "sewa-mobil/honda-mobilio/index.html",
    "revision": "807e296cd83f0438968c035978518697"
  },
  {
    "url": "sewa-mobil/index.html",
    "revision": "05518476e3fb557d77d00b772ac2d90c"
  },
  {
    "url": "sewa-mobil/isuzu-elf/index.html",
    "revision": "a7288a5f13a6a75e538782777e61b878"
  },
  {
    "url": "sewa-mobil/sewa-bis/index.html",
    "revision": "1875cf3e9ca324ce5c782430035e8405"
  },
  {
    "url": "sewa-mobil/suzuki-ertiga/index.html",
    "revision": "64c247f729f1c79a09ae16ad3ba8e555"
  },
  {
    "url": "sewa-mobil/toyota-avanza/index.html",
    "revision": "6d57f65aaec8e609bd0946c5b2011da3"
  },
  {
    "url": "sewa-mobil/toyota-calya/index.html",
    "revision": "a235f12979fd0461f9993cbb2bc91768"
  },
  {
    "url": "sewa-mobil/toyota-hiace/index.html",
    "revision": "333caae3f5b1c7a9a163afb50e0ac7b9"
  },
  {
    "url": "sewa-mobil/toyota-kijang-innova/index.html",
    "revision": "f0ef6869d14113ea9b26ff2b65814868"
  },
  {
    "url": "sewa-mobil/wedding-car/index.html",
    "revision": "605e3cea1a4c52fef146be0b99a85184"
  },
  {
    "url": "terms-and-conditions/index.html",
    "revision": "b0a997371c4f1aee365797f29385b755"
  },
  {
    "url": "workbox-config.js",
    "revision": "09092549d3ffbf75d3108316c2ec04e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
