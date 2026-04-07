'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1171d18bcae5cb725f115312ee322c5a",
"version.json": "4cf41bd815da97a9a1db454dcd2bae1a",
"index.html": "8669809600347d13487c0fd1b02efa54",
"/": "8669809600347d13487c0fd1b02efa54",
"vercel.json": "e0663e96b309513b7cdf99093a8ef848",
"main.dart.js": "a9208a5ba3cb6bba2704fb18d6eab21a",
".well-known/apple-app-site-association": "677b7ab7b48613075d4073eb88085958",
".well-known/assetlinks.json": "20c6da4f2ee03bb4183940d2dbd288fb",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "523c666d5dbb5daf6090378d03859d25",
".git/config": "efff2d9a727f3a236666e2c1abcaaae2",
".git/objects/0d/c14276051ccbae97ea19bb3eb7ed31e1e424a7": "1e68a88acd4ed3121183609ee240e504",
".git/objects/95/a452f6391f6add881cd0a47d260dbf5996b5a5": "75295e68fa7c5a996b5eb7548b33a600",
".git/objects/32/a7827285b3899e2ea89ed42b9101c12b169413": "06a571e513765f1fdb80a76366d80903",
".git/objects/35/5fe2a1d294cdc651dded8d1145dba31e9739a2": "834db07b51c0d4bf3c56a428343352d6",
".git/objects/3c/00f81443d803896a6a59431a79dd433b487c11": "e5a3f38a1f120f508353cd46ee7dba1d",
".git/objects/60/57627799f5e80588faef6ed5ef888856464204": "eabb60c57c8ad8f85cef80d0ae1ffe82",
".git/objects/e3/b4fa46811a15d082379d1a15579dc5b0c92701": "4517775e269831eebb910536d62a9781",
".git/objects/c6/6b6089df34e4aa729a9bc6716505bd95819ff8": "0eec0f2c129c3cb62870bb1b9a440741",
".git/objects/ec/dd27a689a5ba8ce6c02491b99f8b4806abdce7": "f20475bd2a858557837a398fb50f9e4a",
".git/objects/pack/pack-902ab839f2cd9cc5a65ad59907220af72437a5a7.idx": "33082bae6c6c81f7a96f471c6611a447",
".git/objects/pack/pack-902ab839f2cd9cc5a65ad59907220af72437a5a7.pack": "cee73f1624cc67d75889c55d5d0d8777",
".git/objects/9f/9de0326097a4d215a6de06d774940942d187d9": "b5bec144ab187f61b5ef23369b94228a",
".git/objects/5c/a02be64c574eeffb5f7f49821cc528a970c808": "cd1b54d6e1ea14664b0b5b7979e10f4e",
".git/objects/62/ba9159bcb677d98bdef5a43b9f2e277214be33": "4dfea6a099af19c8a79baa666ce2188f",
".git/objects/63/e1d3cb62c7de2339b136705bcfb1b5ee649a51": "cb7ce6bd621d66f045d07a839a4e1c08",
".git/objects/b8/4989f301a98d3417ee1ec2f6ba7b5c6bac36bd": "bcf50d61508aa76d8d487f2cff46e29d",
".git/objects/b8/18305f1dbe4ef0a9d32015929ea43b68bdcc95": "6b629284539c5b372255b09654f5b5ee",
".git/objects/dc/b1c6c7ffd82cb0207cf98410f6b378ff3daa37": "622003ba88832152095f8248e5e864d5",
".git/objects/af/41fbc4ff505cb785eb3bb8f8fe5db5f5aeabdc": "ae3ea22d8373db0e8d774d779a8aaf54",
".git/objects/ea/718941d4ce52e5c49a0768b54a1980a77f3c67": "582d6914847521610c350dbe5816558f",
".git/objects/f8/514a3c4b4f767a2accfdd2e131bd05625c1f2c": "3690dfe5689304bc6318f79b0b7273eb",
".git/objects/ce/e07356bc414ec5e7251097434331af7c65a73e": "7e4d7d38e1764938c79349977ce02746",
".git/objects/1b/1c183d9c53356acf4e5c9a39a0230ba3e7cff1": "64c0b83dd471130406aa67798a9313b4",
".git/objects/1e/6d91889233244450a5e2bfcbe6ada5ac03a8de": "4ad797f2368e0b0f82a1be45936c16f8",
".git/objects/15/9d581a1b5ed0356a6df09e7d59560ffcd50a8b": "8dfd899d04ac2693edbfac2af631b456",
".git/objects/1c/c6ea0bbedf3519af05af9d09b2bd2628e49f5d": "d8bb0942e8caba0b657c08aec4ec7038",
".git/HEAD": "fda35dda733536506d796febf4c5a7ce",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5b1d2b28ad7f53c7959068528e9be115",
".git/logs/refs/heads/staging": "1955098134e395e0695368a71c078fce",
".git/logs/refs/remotes/origin/staging": "19426b7610eb97ad533b79ed06712bbe",
".git/logs/refs/remotes/origin/uat": "e540e4cbee0536b6051263a77a174550",
".git/logs/refs/remotes/origin/dev": "9460149017a788cf319f4ea7f57a0c40",
".git/logs/refs/remotes/origin/main": "e540e4cbee0536b6051263a77a174550",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/staging": "43d4e2edbcfa1e6171474b72d86b355a",
".git/refs/remotes/origin/staging": "43d4e2edbcfa1e6171474b72d86b355a",
".git/refs/remotes/origin/uat": "a516eb1167449f35868e598536fce91a",
".git/refs/remotes/origin/dev": "b3d8ae3c03b645df2c372f5901abbd2a",
".git/refs/remotes/origin/main": "a516eb1167449f35868e598536fce91a",
".git/gk/config": "f79c169fc0552601dfe932c50adaf0a0",
".git/index": "fe25850c9f0dd73269ce348c2e644dab",
".git/COMMIT_EDITMSG": "88688a38454fdc83749be34d0321980b",
".git/FETCH_HEAD": "03dd7467f1144f383aaa7c48fbde1ba8",
"assets/AssetManifest.json": "bc4b29169d65395e034f0b7b9f9c2d2f",
"assets/NOTICES": "4b00782bad13dc17fb2645e0ed116da7",
"assets/FontManifest.json": "2af9ab99dd2b09e1e6b6c108e53c5774",
"assets/AssetManifest.bin.json": "bdd080b7b41d5a8d848ffd1b1b480e08",
"assets/packages/app_ui/assets/images/end_transaction.png": "6784adf72a8acc094b00a17010e0cfe3",
"assets/packages/app_ui/assets/images/default_locker_image.png": "f491c491c032bbdad7944ebff95a29c6",
"assets/packages/app_ui/assets/images/pick_locker_location_illustration.png": "482001ba9d1ac350b25bcf89f2515678",
"assets/packages/app_ui/assets/images/3x/end_transaction.png": "a658834dc7f09be482ca45b025cbba0b",
"assets/packages/app_ui/assets/images/3x/pick_locker_location_illustration.png": "d138e777c8cd8eb1feb3ad1f3f8177e5",
"assets/packages/app_ui/assets/images/3x/refer_a_friend.png": "97fb5ff862ec1408bafa73f2a2509f9b",
"assets/packages/app_ui/assets/images/3x/no_transactions_yet.png": "de12f63cfc1f96d2e193eba293b3a8d5",
"assets/packages/app_ui/assets/images/3x/qube_ok.png": "5c96b5ad45b7a25a427ff47835da70e8",
"assets/packages/app_ui/assets/images/3x/user_default.png": "37796fbf5e818fe4d5525182a00ce951",
"assets/packages/app_ui/assets/images/3x/door_reservation_failed.png": "8dcbe78473d2b24cd3f45bef148eac2e",
"assets/packages/app_ui/assets/images/3x/passcode_check.png": "9a675152281a0cc9cc245dfe2f35f686",
"assets/packages/app_ui/assets/images/3x/onboarding_0.png": "9d82f75b305cd1feb189a7917e38694b",
"assets/packages/app_ui/assets/images/3x/trust_device.png": "0ef54ebeadb202eb4a63c5313ae81457",
"assets/packages/app_ui/assets/images/3x/onboarding_1.png": "4e66a159024511de2c1d3080da78a0f4",
"assets/packages/app_ui/assets/images/3x/box_3d.png": "a020a20b019e59edccb09feef023165b",
"assets/packages/app_ui/assets/images/3x/search_for_merchant.png": "075580b4e87ba55ef1b24e22a596d04b",
"assets/packages/app_ui/assets/images/3x/onboarding_3.png": "93f10a0993551999eacfb197cebd737a",
"assets/packages/app_ui/assets/images/3x/scan_qr_code.png": "fc220a5b8aec9e37fe41974c2d7f242d",
"assets/packages/app_ui/assets/images/3x/onboarding_2.png": "a83933fd3679ed4c707846768140c9ab",
"assets/packages/app_ui/assets/images/3x/drop_item.png": "ed7e753b06fe203678601699ca87c2e5",
"assets/packages/app_ui/assets/images/3x/claim_item.png": "fb7f5c2ad3da2d62467ef6391f2f3c3e",
"assets/packages/app_ui/assets/images/3x/timer.png": "9ff7e3ac06ec0b47ba2160deda148270",
"assets/packages/app_ui/assets/images/3x/insufficient_doors.png": "8dee12ba250a48b9bbcb905fbff9fa49",
"assets/packages/app_ui/assets/images/3x/notification_bell.png": "63687457fe7796cdccc3c25574903832",
"assets/packages/app_ui/assets/images/3x/qube_head.png": "b5d65656a81b68af869d457297478a30",
"assets/packages/app_ui/assets/images/3x/appbar_bg.png": "bec98769dae193d6a8a9bda8942662b1",
"assets/packages/app_ui/assets/images/3x/beep_watermark.png": "b61023ddebbe3833620cf5ed4d060174",
"assets/packages/app_ui/assets/images/3x/qr_validity.png": "bcd4fb24bdd084ebecaa79dffc55b51c",
"assets/packages/app_ui/assets/images/3x/no_search_results.png": "1ca15542df7b505c763539184591d0fd",
"assets/packages/app_ui/assets/images/3x/search_order.png": "5dbdc3d2bf1bd587a40494b6fffa208d",
"assets/packages/app_ui/assets/images/3x/drop_off_complete.png": "a83933fd3679ed4c707846768140c9ab",
"assets/packages/app_ui/assets/images/3x/close_the_door.png": "325e6540ea8e5b05af150c02c1c1ce8e",
"assets/packages/app_ui/assets/images/3x/bag.png": "e8e45fe1ea403a59c31a7f1be571eacc",
"assets/packages/app_ui/assets/images/blur_0.png": "e5c3d1654beb9ad3c273a03ecde202be",
"assets/packages/app_ui/assets/images/refer_a_friend.png": "6d2d50cae9345412a0f9b40b6a8ca2e2",
"assets/packages/app_ui/assets/images/no_transactions_yet.png": "9feaa2c17eafc092fa59fa917c75b555",
"assets/packages/app_ui/assets/images/qube_ok.png": "660a2ea1697f7dbe927247085e12939e",
"assets/packages/app_ui/assets/images/user_default.png": "dbc21fcd90c3282a12557b94adf9fdc5",
"assets/packages/app_ui/assets/images/door_reservation_failed.png": "99e011a51cba9015c6a48c46177a4f20",
"assets/packages/app_ui/assets/images/passcode_check.png": "d77b88914e3c7726be3222598e8ae73a",
"assets/packages/app_ui/assets/images/onboarding_0.png": "02579420a0a9d7df37c674e0231a5e2a",
"assets/packages/app_ui/assets/images/trust_device.png": "dc4c96f0875a195122668176ed1246a7",
"assets/packages/app_ui/assets/images/onboarding_1.png": "39579dae725c6a305c509f467fbe5d8a",
"assets/packages/app_ui/assets/images/box_3d.png": "7c6bcd18677203c93e447ff6be06f748",
"assets/packages/app_ui/assets/images/search_for_merchant.png": "497ef729cb78b8269638fee8a3358780",
"assets/packages/app_ui/assets/images/onboarding_3.png": "084ffe61146fb546b5d0b86c5ae8e287",
"assets/packages/app_ui/assets/images/scan_qr_code.png": "13b609eec5a3162483dc00aa2896ab7a",
"assets/packages/app_ui/assets/images/onboarding_2.png": "83bd909fa2d48aa1726adb730c9c42aa",
"assets/packages/app_ui/assets/images/drop_item.png": "31345666fc970b71a959e2352b55ff0a",
"assets/packages/app_ui/assets/images/claim_item.png": "fd37e32a70fc8c3f7302c0657a0b5f1a",
"assets/packages/app_ui/assets/images/timer.png": "3db983f718409e6bfe2af3f84d7fce8e",
"assets/packages/app_ui/assets/images/insufficient_doors.png": "c68967b1eb35673f27137b7f3fb55867",
"assets/packages/app_ui/assets/images/notification_bell.png": "c8960d5a15dc0250e1da6ec00ae6dcbe",
"assets/packages/app_ui/assets/images/qube_head.png": "c638a8aa5cc45e2bbd04afa185c3470c",
"assets/packages/app_ui/assets/images/appbar_bg.png": "352e5fdd64a90bf56be4a5c031ec8c1a",
"assets/packages/app_ui/assets/images/beep_watermark.png": "bfe2dc481d4e502a92dfb6bb8965bac4",
"assets/packages/app_ui/assets/images/qr_validity.png": "ffadcbb301ce31f8bb968e6da2257585",
"assets/packages/app_ui/assets/images/no_search_results.png": "fe4af9273955f40d63e00d76155497ea",
"assets/packages/app_ui/assets/images/search_order.png": "b77170a32996695c8e3d8f788f77a9a4",
"assets/packages/app_ui/assets/images/2x/end_transaction.png": "f660ea7a28c3bdd9d4daa4a95635d614",
"assets/packages/app_ui/assets/images/2x/pick_locker_location_illustration.png": "d8b242a0f3ecb4c714697092420537b3",
"assets/packages/app_ui/assets/images/2x/refer_a_friend.png": "3ef88a87eefd4be616833687c8d06d1e",
"assets/packages/app_ui/assets/images/2x/no_transactions_yet.png": "9ab3bf7475782a29aea6fca8df0462df",
"assets/packages/app_ui/assets/images/2x/qube_ok.png": "fd857f7ffc946b03fa24c5d6eefcda90",
"assets/packages/app_ui/assets/images/2x/user_default.png": "659454bc4adb3a0537bc3d903f2b8543",
"assets/packages/app_ui/assets/images/2x/door_reservation_failed.png": "7c9d8675e6b128ef2a3ea18c09a07002",
"assets/packages/app_ui/assets/images/2x/passcode_check.png": "58276cb4ac59717f5cdd2e31fff8d349",
"assets/packages/app_ui/assets/images/2x/onboarding_0.png": "ba5e4e469b752101ca41d73a47ba5a16",
"assets/packages/app_ui/assets/images/2x/trust_device.png": "9d2700f79023cf36ea3dbcf49ebba8d0",
"assets/packages/app_ui/assets/images/2x/onboarding_1.png": "e23e3ca7c4801ab78d88d932815d2747",
"assets/packages/app_ui/assets/images/2x/box_3d.png": "0460b1e6305f33e1fc183d1128094fbb",
"assets/packages/app_ui/assets/images/2x/search_for_merchant.png": "74b4ec24da68c7f53b2ecfe5f53c6f4d",
"assets/packages/app_ui/assets/images/2x/onboarding_3.png": "a38745fc53685ec74e892c15962c8efa",
"assets/packages/app_ui/assets/images/2x/scan_qr_code.png": "6b6d3ae482d83010ae22075270a62dbb",
"assets/packages/app_ui/assets/images/2x/onboarding_2.png": "5b71b164d3438e11febb28890abf1598",
"assets/packages/app_ui/assets/images/2x/drop_item.png": "834e8aff7d26855d572b5558e14910bb",
"assets/packages/app_ui/assets/images/2x/claim_item.png": "e8c7bee233aa2759ed1b5024555138c7",
"assets/packages/app_ui/assets/images/2x/timer.png": "5cf4bc8bffdfb112496bc1338cc97854",
"assets/packages/app_ui/assets/images/2x/insufficient_doors.png": "9f1010239ec5be668b43743480876d63",
"assets/packages/app_ui/assets/images/2x/notification_bell.png": "79cee4be646c933e6aca06ff2d8a54a3",
"assets/packages/app_ui/assets/images/2x/qube_head.png": "61915e240937462f05a280b3ab7f14ca",
"assets/packages/app_ui/assets/images/2x/appbar_bg.png": "daff8b71bbe3bf6eb66630bb94d5d16d",
"assets/packages/app_ui/assets/images/2x/beep_watermark.png": "0f303fcaf2830da6d25625d3e29b6f5b",
"assets/packages/app_ui/assets/images/2x/qr_validity.png": "600f3c9a80da7bf7353e4701fd32a6cf",
"assets/packages/app_ui/assets/images/2x/no_search_results.png": "233863354fe03d36d22dee594f4848ef",
"assets/packages/app_ui/assets/images/2x/search_order.png": "950787e2340c28327af81efed9c1e8b4",
"assets/packages/app_ui/assets/images/2x/drop_off_complete.png": "5b71b164d3438e11febb28890abf1598",
"assets/packages/app_ui/assets/images/2x/close_the_door.png": "3bef6b174857ab4507ab43d879d45447",
"assets/packages/app_ui/assets/images/2x/bag.png": "c7b04c92914d671db11b67edb93fa6aa",
"assets/packages/app_ui/assets/images/drop_off_complete.png": "83bd909fa2d48aa1726adb730c9c42aa",
"assets/packages/app_ui/assets/images/close_the_door.png": "000283baa305793784ef8690e6fbb120",
"assets/packages/app_ui/assets/images/bag.png": "326ac6764cc4ceb9b3b3791bb54c45c6",
"assets/packages/app_ui/assets/logo/3x/qube.png": "ce41cf912cdd0fb0844546f7a7bfa379",
"assets/packages/app_ui/assets/logo/3x/qubee_circular.png": "4d56063bbf19ed882c0233d60bbf86d8",
"assets/packages/app_ui/assets/logo/3x/qubee.png": "82ba8e97bca3e0b3e101a4506cb13bc3",
"assets/packages/app_ui/assets/logo/qube.png": "46c1a2d4b740680ee31be7b4d4ead2c1",
"assets/packages/app_ui/assets/logo/qubee_circular.png": "6d6715c59c573d00d4c27a15ab21f63e",
"assets/packages/app_ui/assets/logo/splash_android_12.png": "60068c84a2517d622ff48bc8b5826014",
"assets/packages/app_ui/assets/logo/splash.png": "da64f6704c7d59501de9704d1d557b24",
"assets/packages/app_ui/assets/logo/qubee.png": "2cab707512e5b65ad367bc675a48b8da",
"assets/packages/app_ui/assets/logo/2x/qube.png": "ff4d970785eb018ac3223466ba044de7",
"assets/packages/app_ui/assets/logo/2x/qubee_circular.png": "b3453d365e534ab5db112cad8a74925a",
"assets/packages/app_ui/assets/logo/2x/qubee.png": "0250e70cb2f72c718707d3c977c3b294",
"assets/packages/app_ui/assets/icons/home_filled.png": "bf5e3ca025bda876af4d7993aee1f8c5",
"assets/packages/app_ui/assets/icons/qr_code_loader.png": "8a4d29c0a6ae9f745961ab686af0cfdd",
"assets/packages/app_ui/assets/icons/activity_filled.png": "d4bde59b3abe3fa40ccc01708e36a481",
"assets/packages/app_ui/assets/icons/instagram_outlined.png": "23fc3db687cabdcb66a683ebd142c46d",
"assets/packages/app_ui/assets/icons/hour_glass.png": "a35789e0bab44bb5d19dc709a663e7d5",
"assets/packages/app_ui/assets/icons/3x/home_filled.png": "ad7a84af44207150de9c4f92d64a7384",
"assets/packages/app_ui/assets/icons/3x/qr_code_loader.png": "5c32b54b33bfc790a969109dcfca03c7",
"assets/packages/app_ui/assets/icons/3x/activity_filled.png": "b759c76398fa91d866924af74b51b47b",
"assets/packages/app_ui/assets/icons/3x/instagram_outlined.png": "c1c7b5393453c82d5103ed36f4d97de4",
"assets/packages/app_ui/assets/icons/3x/hour_glass.png": "15e5286b91a0981132aa318891b2fbaf",
"assets/packages/app_ui/assets/icons/3x/bell.png": "8cec0c751cd832634b484ddd0a7c4651",
"assets/packages/app_ui/assets/icons/3x/wallet.png": "efa0e595c6029921d732a9b2d40cd1e0",
"assets/packages/app_ui/assets/icons/3x/nfc_scanner.png": "da808613ee65d6a149219da85db1e0eb",
"assets/packages/app_ui/assets/icons/3x/clock_expired.png": "805e0a633c608f5a737aef5c46c86ffb",
"assets/packages/app_ui/assets/icons/3x/facebook_outlined.png": "692124f0d6de010014bc246d42609a9c",
"assets/packages/app_ui/assets/icons/3x/profile_filled.png": "de8b0b5993ff62c7f608674c5cb4f707",
"assets/packages/app_ui/assets/icons/3x/policies.png": "03500d33e65d4275ac9c5e6033148059",
"assets/packages/app_ui/assets/icons/3x/tiktok_outlined.png": "4a5122d80e22cf77a1d4c70dab11916f",
"assets/packages/app_ui/assets/icons/3x/location_pin.png": "f9a676091910e915138eca4a744af838",
"assets/packages/app_ui/assets/icons/3x/duration_add.png": "e247a5560dc4fadc47b38f5e6ff10454",
"assets/packages/app_ui/assets/icons/3x/door_xl.png": "a96d06e6b5538cba7912144e2ddb3de8",
"assets/packages/app_ui/assets/icons/3x/pre_booking_tab.png": "78a83535e724f7816968b301be472109",
"assets/packages/app_ui/assets/icons/3x/single-access.png": "651ded05528a4657341447fe360f09ac",
"assets/packages/app_ui/assets/icons/3x/for_claiming_tab.png": "86605de1171e8e2d6647b303011ebba5",
"assets/packages/app_ui/assets/icons/3x/logistics_badge.png": "9e7a80dfc5665df72fc0dd40849ae0c2",
"assets/packages/app_ui/assets/icons/3x/storefront.png": "1a764c30ca40c7bd7ec4158a043746a8",
"assets/packages/app_ui/assets/icons/3x/receiver.png": "f582445a4f15f08c8e2447d001d3e84e",
"assets/packages/app_ui/assets/icons/3x/scan_qr.png": "85a6967e5e5fc20c7572adce02658275",
"assets/packages/app_ui/assets/icons/3x/home.png": "ebf3073bfc32ed5904de664c6af9c0ad",
"assets/packages/app_ui/assets/icons/3x/person.png": "7c2d1871d801e49a8b49d918e877fe48",
"assets/packages/app_ui/assets/icons/3x/ongoing_tab.png": "15288948f65a5e4e2da911c5992302a8",
"assets/packages/app_ui/assets/icons/3x/customer_service.png": "d70d8a020eecfe077d57451f827c8857",
"assets/packages/app_ui/assets/icons/3x/help_and_support.png": "81e91f88b946c550b43f2540e18677f9",
"assets/packages/app_ui/assets/icons/3x/door_medium.png": "aa3e51016978a9d7d443608dd16a4c6a",
"assets/packages/app_ui/assets/icons/3x/unionbank.png": "2bd505092b266ce7bef837589d7b573f",
"assets/packages/app_ui/assets/icons/3x/queue.png": "1ce4c83e5cc8172bf2ef466fabec6bb7",
"assets/packages/app_ui/assets/icons/3x/multiple-access.png": "55b4d99a91679b9cacc09bf369381c93",
"assets/packages/app_ui/assets/icons/3x/maya.png": "ac2ddfa5054e350bfaf4d21df7af400e",
"assets/packages/app_ui/assets/icons/3x/laundry_in_progress.png": "5ec23f4c14ca902a971044f0b1373be5",
"assets/packages/app_ui/assets/icons/3x/search.png": "6657e3ac35ba1196d4095601ff251c38",
"assets/packages/app_ui/assets/icons/3x/gcash.png": "b9cb1108ee422915e982a3f1cbf5c780",
"assets/packages/app_ui/assets/icons/3x/keep.png": "6b08fd19f0e79a2358759e8b1064529b",
"assets/packages/app_ui/assets/icons/3x/alarm.png": "4b9a36a40310f9e8c4d7a32526027fe6",
"assets/packages/app_ui/assets/icons/3x/history.png": "60b74d697ad66200e549fa98fdfde1c8",
"assets/packages/app_ui/assets/icons/3x/apple.png": "b73e39501a58df3d4d0303918e3da1c5",
"assets/packages/app_ui/assets/icons/3x/drop.png": "fce6ed09b3249e93ed4d732f43a937b4",
"assets/packages/app_ui/assets/icons/3x/food.png": "1e2875cd3eef87b9420777141f5c4f69",
"assets/packages/app_ui/assets/icons/3x/beep_icon.png": "e0e0ed0a65acc8ec6b651cd6772e16b2",
"assets/packages/app_ui/assets/icons/3x/narwhal_pay.png": "00a995b7068baacca1e7e339e6f28180",
"assets/packages/app_ui/assets/icons/3x/motorcycle.png": "d5fc399c5b5692f6c04d57d51b4f42bf",
"assets/packages/app_ui/assets/icons/3x/activity.png": "585c1b8a8f1c7f067aa3c5c99315e709",
"assets/packages/app_ui/assets/icons/3x/pay.png": "35484854ad62dd5f173cae4eefd54e99",
"assets/packages/app_ui/assets/icons/3x/qrph.png": "4423b6903c7a6411234bacbc9d5d8049",
"assets/packages/app_ui/assets/icons/3x/qr_code.png": "45bad379ed82c5901606c3dbb9b1e1d3",
"assets/packages/app_ui/assets/icons/3x/wash_notification.png": "6d5f16f10c75f5c522f00eb762616eb2",
"assets/packages/app_ui/assets/icons/3x/sort.png": "974641185d44dd850ef2ad35adbd2f32",
"assets/packages/app_ui/assets/icons/3x/profile.png": "901b0947cb2f371b88c97b305d982c8c",
"assets/packages/app_ui/assets/icons/3x/notification_filled.png": "82e194a1a356f9ed6b1fd3df54578d34",
"assets/packages/app_ui/assets/icons/3x/door_large.png": "0c999df738f06bbf3ef899f2fe063849",
"assets/packages/app_ui/assets/icons/3x/wash.png": "0801e28f27544e3cb067366209471648",
"assets/packages/app_ui/assets/icons/3x/processing_card.png": "227138fccbaf25742c38ed177a4213aa",
"assets/packages/app_ui/assets/icons/3x/locate.png": "f12dd595d4ec0811f9abf6db58711036",
"assets/packages/app_ui/assets/icons/3x/edit.png": "2c7d99e0f866b4cdcbc937a23f3df65f",
"assets/packages/app_ui/assets/icons/3x/sender.png": "400b6c1d15a956b25883df4718e3956e",
"assets/packages/app_ui/assets/icons/3x/load_fetched.png": "05f7392c1354c0a179bb3910078d925c",
"assets/packages/app_ui/assets/icons/3x/no_signal.png": "33fe76224a832675dd16dd1d1b60eb79",
"assets/packages/app_ui/assets/icons/3x/google.png": "ee026926d84834a309397b203cd16ef7",
"assets/packages/app_ui/assets/icons/3x/facebook.png": "224385e3d65b313c4c2aa8a50852f135",
"assets/packages/app_ui/assets/icons/3x/notification.png": "7c10f733aab6b9ddd673c7829654079b",
"assets/packages/app_ui/assets/icons/3x/preferences.png": "0409fa98061043d6ebe5fff0cff81705",
"assets/packages/app_ui/assets/icons/3x/qube_wallet.png": "2c0268600739d38076ff7219c2315731",
"assets/packages/app_ui/assets/icons/3x/box.png": "20b2669fd1c81cc5496329d4c037cc5f",
"assets/packages/app_ui/assets/icons/3x/swap_vertical.png": "edfed3adc00084dcaac54412bbb03ca4",
"assets/packages/app_ui/assets/icons/3x/door_xxl.png": "f84fd87b895f0266fedec325281ba210",
"assets/packages/app_ui/assets/icons/3x/door_xs.png": "6aea85ac5199438b8dae1e8cb8302a04",
"assets/packages/app_ui/assets/icons/3x/door_reservation_fee_outlined.png": "f2311155ad37c8f7744db16617b4bacc",
"assets/packages/app_ui/assets/icons/3x/account_security.png": "4962bee00ae49dc98588983f1da8efd1",
"assets/packages/app_ui/assets/icons/3x/door_small.png": "6a32b7e6e70ffd3b6a8f7995f52cdf23",
"assets/packages/app_ui/assets/icons/3x/duration.png": "b4b261d5cd13f3e04c1ca1e87c1cd758",
"assets/packages/app_ui/assets/icons/3x/door_reservation_fee.png": "5d9dac6695cc6e3aa8357be152de36f4",
"assets/packages/app_ui/assets/icons/3x/card_payment.png": "eb9758ca4ad93c44c3bb8c0d0be5f588",
"assets/packages/app_ui/assets/icons/3x/wallet_filled.png": "1ba1e2cd10b151da49e9696824a916ef",
"assets/packages/app_ui/assets/icons/bell.png": "63e65ce4024c940c58c3c50f9fd19629",
"assets/packages/app_ui/assets/icons/wallet.png": "ba20091d41379d3b8a8c9f6cd8165805",
"assets/packages/app_ui/assets/icons/nfc_scanner.png": "d769aba52902f96782c2b2b1f8897d8e",
"assets/packages/app_ui/assets/icons/clock_expired.png": "8f628715c43aead228b0b3de04f1adb8",
"assets/packages/app_ui/assets/icons/facebook_outlined.png": "daf569e9d71a47153daae34ed97f8602",
"assets/packages/app_ui/assets/icons/profile_filled.png": "0ad4515bfb0dc7ca8e6fe3f71480e839",
"assets/packages/app_ui/assets/icons/policies.png": "1de123911fe191856cf86ade9e0b0e84",
"assets/packages/app_ui/assets/icons/tiktok_outlined.png": "a99933bf6f2db7b30d2d7193221a09ba",
"assets/packages/app_ui/assets/icons/location_pin.png": "68f8af019cfa06c393e1e715dc6d73f6",
"assets/packages/app_ui/assets/icons/duration_add.png": "41a41b1e3677040d9a0c3d3f2a1dc56b",
"assets/packages/app_ui/assets/icons/door_xl.png": "a7323e2e4e59cd6710a94493d8aa6ab2",
"assets/packages/app_ui/assets/icons/pre_booking_tab.png": "e198260bb66f0310056be7d9942d4a04",
"assets/packages/app_ui/assets/icons/single-access.png": "6959ddcf06928eec27f00e6a672e5d4c",
"assets/packages/app_ui/assets/icons/for_claiming_tab.png": "c0d81cd604cf449a41d4b34af6ebe94c",
"assets/packages/app_ui/assets/icons/ph_flag_circular.png": "5256ac50203be4166f6c210847d6569b",
"assets/packages/app_ui/assets/icons/logistics_badge.png": "77f974467d69a73d633f72048c28ec89",
"assets/packages/app_ui/assets/icons/storefront.png": "fa38120bed5d00e2ab23520d65041ead",
"assets/packages/app_ui/assets/icons/receiver.png": "abe61ef5d8c1dfcff03b36cfa1e070a8",
"assets/packages/app_ui/assets/icons/scan_qr.png": "7e589ce4cba4a5436df5fbaa156bf188",
"assets/packages/app_ui/assets/icons/home.png": "2edf30ae9b361f479530286ab8eb932e",
"assets/packages/app_ui/assets/icons/person.png": "0c8600518b9fc070c7301c1f3e4939ac",
"assets/packages/app_ui/assets/icons/ongoing_tab.png": "b175b5a18f88a6d66a82cdfd2c19cf25",
"assets/packages/app_ui/assets/icons/dynamic_island_qr_code.png": "02a42dcb7990716cf3192180dd9045a0",
"assets/packages/app_ui/assets/icons/customer_service.png": "3dead1966869bcbdc2ceb11615aee88c",
"assets/packages/app_ui/assets/icons/help_and_support.png": "db64ef79b40f14e5c2f894b9f1a55664",
"assets/packages/app_ui/assets/icons/door_medium.png": "870a4fd58a40ffa2e02ec79d93e40a15",
"assets/packages/app_ui/assets/icons/unionbank.png": "3b1753fd846a271cefed85f7054e8ee5",
"assets/packages/app_ui/assets/icons/queue.png": "7aa401de3196c7b196adbd6dc4aca186",
"assets/packages/app_ui/assets/icons/multiple-access.png": "00a458aa90f6ea7b5c3970c119924f44",
"assets/packages/app_ui/assets/icons/maya.png": "15b52b6e7f6ef09c55d976562bf5e676",
"assets/packages/app_ui/assets/icons/laundry_in_progress.png": "ce322a4a1a19aa134f66bb45f9eb9e53",
"assets/packages/app_ui/assets/icons/search.png": "95261c13a1b105e9616c5c7e1bec9405",
"assets/packages/app_ui/assets/icons/gcash.png": "dc914da813e01e24995b2f1285b05662",
"assets/packages/app_ui/assets/icons/keep.png": "73d538af1d1d09dc44f658275c6a8e2b",
"assets/packages/app_ui/assets/icons/alarm.png": "d61aab6bcc65e4d5a737eb366a16e8bd",
"assets/packages/app_ui/assets/icons/history.png": "884c835c2a9044b640cd689e4d1b39cc",
"assets/packages/app_ui/assets/icons/apple.png": "32b97459b74c9102cb75ab37298fb7ab",
"assets/packages/app_ui/assets/icons/drop.png": "ed22e1b10b1cd23c63ed45ad3b807855",
"assets/packages/app_ui/assets/icons/food.png": "a6b0230eaf3f775bce850cea7788cca0",
"assets/packages/app_ui/assets/icons/beep_icon.png": "94e3f07ebc1a1b56f27f15120ed371fd",
"assets/packages/app_ui/assets/icons/narwhal_pay.png": "d10c71da96456de458a916a9029e7c62",
"assets/packages/app_ui/assets/icons/motorcycle.png": "890a952fc8934da020972d85454b621c",
"assets/packages/app_ui/assets/icons/activity.png": "f12769ab6af7e06c3244aec070eb7833",
"assets/packages/app_ui/assets/icons/dynamic_island_wash_progress_icons.png": "675a25df36d26fdbf4f6cad7edc7a222",
"assets/packages/app_ui/assets/icons/pay.png": "a1dddb11a38a0579dfc3868075f56b15",
"assets/packages/app_ui/assets/icons/qrph.png": "63e90ac3b80afcb791ac0fbc6bc4e29f",
"assets/packages/app_ui/assets/icons/qr_code.png": "447233062d281ef79caf6f4db315d89b",
"assets/packages/app_ui/assets/icons/wash_notification.png": "44c937e9dab3af1fe344ad1d55c97e7f",
"assets/packages/app_ui/assets/icons/sort.png": "e9ac63f97638f1e71eefc0c20f26e11f",
"assets/packages/app_ui/assets/icons/profile.png": "89e5e7dbcb502af9c3d61ad30a369d53",
"assets/packages/app_ui/assets/icons/dynamic_island_icon.png": "16427b8e57cbc92b29ad5a45be7ff6bb",
"assets/packages/app_ui/assets/icons/notification_filled.png": "246df9358659338aaf7410f41ac11260",
"assets/packages/app_ui/assets/icons/door_large.png": "8ee1113f5a3e9a43f78e7a9260fb95ef",
"assets/packages/app_ui/assets/icons/wash.png": "4522d5c83a94c2ff63c4446ba7af9239",
"assets/packages/app_ui/assets/icons/processing_card.png": "85c888dfbb2a5172578a88294cb1461f",
"assets/packages/app_ui/assets/icons/locate.png": "fe68db53540dd4a62be1a0135ac8e464",
"assets/packages/app_ui/assets/icons/edit.png": "40830cebdc30b9a7366e3defd0cc41f7",
"assets/packages/app_ui/assets/icons/sender.png": "0d72254dbb4d76631a078b04507d2161",
"assets/packages/app_ui/assets/icons/load_fetched.png": "8bffec52e2122b93853d775c375df1de",
"assets/packages/app_ui/assets/icons/no_signal.png": "457b2529f20d6a3d928621295d1294bd",
"assets/packages/app_ui/assets/icons/google.png": "82bbdcff23f8b07d47baf9ba88769376",
"assets/packages/app_ui/assets/icons/facebook.png": "7fb87a5c066695bb7bafd4a7fdfdd7d6",
"assets/packages/app_ui/assets/icons/notification.png": "f8c8d84cb8c40dbdfbb1f80ddb3d790c",
"assets/packages/app_ui/assets/icons/preferences.png": "688bac9b998e73b21b4d19273f7ae6dc",
"assets/packages/app_ui/assets/icons/qube_wallet.png": "1884564843ab629a8374c9cb2f78ee3c",
"assets/packages/app_ui/assets/icons/2x/home_filled.png": "e82a370731562fa03eab04269f62528c",
"assets/packages/app_ui/assets/icons/2x/qr_code_loader.png": "2e9be5bbab78b84cda08ab2465c877f8",
"assets/packages/app_ui/assets/icons/2x/activity_filled.png": "a9f25afcf066278f9d1134fddb988762",
"assets/packages/app_ui/assets/icons/2x/instagram_outlined.png": "8761f94f93b32fc319507c468462108e",
"assets/packages/app_ui/assets/icons/2x/hour_glass.png": "42b159b93951bb2fb7b1a5101d93ae35",
"assets/packages/app_ui/assets/icons/2x/bell.png": "989d8d2b686874ba48e3f74b2f5608e4",
"assets/packages/app_ui/assets/icons/2x/wallet.png": "8d3e097dc2dd9db1d51a3de5a4138c8e",
"assets/packages/app_ui/assets/icons/2x/nfc_scanner.png": "f4279e6912c19ebdb1638bff1d38cd20",
"assets/packages/app_ui/assets/icons/2x/facebook_outlined.png": "426a106ed2f68bf36e82254468a149ed",
"assets/packages/app_ui/assets/icons/2x/profile_filled.png": "8f3c96b64c4d874e8870975831d508f3",
"assets/packages/app_ui/assets/icons/2x/policies.png": "86465f2c7f3a57dfdb92cb58296b2910",
"assets/packages/app_ui/assets/icons/2x/tiktok_outlined.png": "09ed455f1e8e55b1bdf8a6329ab6d98e",
"assets/packages/app_ui/assets/icons/2x/location_pin.png": "bc89085db901992f3a20f9fd80691096",
"assets/packages/app_ui/assets/icons/2x/duration_add.png": "c000ff8bfef45cbc24a08b26e38dc427",
"assets/packages/app_ui/assets/icons/2x/door_xl.png": "59982633963945b0087d404edfd3a357",
"assets/packages/app_ui/assets/icons/2x/pre_booking_tab.png": "c0505b849f4fa852e3132c86336e1464",
"assets/packages/app_ui/assets/icons/2x/single-access.png": "ac2eb3db5a1a3b3459d892e8fa7576e9",
"assets/packages/app_ui/assets/icons/2x/for_claiming_tab.png": "ef6c5f72b92130b3f980c9734f717aa1",
"assets/packages/app_ui/assets/icons/2x/logistics_badge.png": "00d99ad125317c67608eb0e475847dae",
"assets/packages/app_ui/assets/icons/2x/storefront.png": "063b0b0378db4411de2845f9cbaf1dba",
"assets/packages/app_ui/assets/icons/2x/receiver.png": "2e448991378ae6e840d1afce87a2441a",
"assets/packages/app_ui/assets/icons/2x/scan_qr.png": "d1f50330ebaed55aa2f3d94df5b2449e",
"assets/packages/app_ui/assets/icons/2x/home.png": "8eae60b3ec3cf2d680387978358cacf7",
"assets/packages/app_ui/assets/icons/2x/person.png": "3f018fa3bf64e979fc6ede2183041204",
"assets/packages/app_ui/assets/icons/2x/ongoing_tab.png": "6769b5cab57c8f7030e59129f52948e2",
"assets/packages/app_ui/assets/icons/2x/customer_service.png": "ab225930db317641a9db154b3bd79f08",
"assets/packages/app_ui/assets/icons/2x/help_and_support.png": "6bd980e452d6da43204cbdf282308b9a",
"assets/packages/app_ui/assets/icons/2x/door_medium.png": "93af4e500a4551031f4d818c602f134a",
"assets/packages/app_ui/assets/icons/2x/unionbank.png": "ca2e76958dceb74a8b470107013fa0ad",
"assets/packages/app_ui/assets/icons/2x/queue.png": "667c37b286b1c1eea75e456ad9657fc1",
"assets/packages/app_ui/assets/icons/2x/multiple-access.png": "886735c38b34455e68616513d6bbd0e4",
"assets/packages/app_ui/assets/icons/2x/maya.png": "7f39ef964b6e2a8761490f79e5da4c32",
"assets/packages/app_ui/assets/icons/2x/laundry_in_progress.png": "8f39680081c53afaab16aef872bfc66f",
"assets/packages/app_ui/assets/icons/2x/search.png": "7eb75d37f3e1e56ef3df590dc50335e4",
"assets/packages/app_ui/assets/icons/2x/gcash.png": "f9eb09553414853b1b0560765057299b",
"assets/packages/app_ui/assets/icons/2x/keep.png": "751ae92d61e1eef2365e85b66bbe2d1f",
"assets/packages/app_ui/assets/icons/2x/alarm.png": "5c1357833028653777cabf4c612b0768",
"assets/packages/app_ui/assets/icons/2x/history.png": "6af2421cf4526e872477ac4bd9cc3f2d",
"assets/packages/app_ui/assets/icons/2x/apple.png": "b9a1fba0da224ec60137ed6747e08164",
"assets/packages/app_ui/assets/icons/2x/drop.png": "97d707a78949e7908210906ccb59d347",
"assets/packages/app_ui/assets/icons/2x/food.png": "5dc47504b6ad522580c8655930088fa2",
"assets/packages/app_ui/assets/icons/2x/beep_icon.png": "16e55d8ae60db50438c3f74b2a01ff03",
"assets/packages/app_ui/assets/icons/2x/narwhal_pay.png": "33815012a6d16c67ca597eda817c95ba",
"assets/packages/app_ui/assets/icons/2x/motorcycle.png": "82baccf3a6e6b65c9e892248e7e95e5a",
"assets/packages/app_ui/assets/icons/2x/activity.png": "34328e4e84be29a8c07bf8f0cbdc5167",
"assets/packages/app_ui/assets/icons/2x/pay.png": "344c6c3908faf4846dc81906c59bf0fc",
"assets/packages/app_ui/assets/icons/2x/qrph.png": "42f990ce88e34489fad8b3668bc53dcd",
"assets/packages/app_ui/assets/icons/2x/qr_code.png": "560d40fc4b9f963e6dd0a7eee833e087",
"assets/packages/app_ui/assets/icons/2x/wash_notification.png": "add3312f74f0d70f15a16b6c5357f30f",
"assets/packages/app_ui/assets/icons/2x/sort.png": "7030d339754c9d93e98a30f56746d46a",
"assets/packages/app_ui/assets/icons/2x/profile.png": "0fb77d4891b44e36ecc20ec28e76e74a",
"assets/packages/app_ui/assets/icons/2x/notification_filled.png": "783de5f09cc9e37aad012f6f756a7e10",
"assets/packages/app_ui/assets/icons/2x/door_large.png": "1abb50b6cb71d52f46251174ae3d9959",
"assets/packages/app_ui/assets/icons/2x/wash.png": "be21f5734654d4443b2658280fdc6462",
"assets/packages/app_ui/assets/icons/2x/processing_card.png": "716173e319e7d862085a127bb925cc4c",
"assets/packages/app_ui/assets/icons/2x/locate.png": "97847fe3d1c844f03b7ca376242842f6",
"assets/packages/app_ui/assets/icons/2x/edit.png": "bd98502f292ca3847e941f0f354ea3e3",
"assets/packages/app_ui/assets/icons/2x/sender.png": "ce9d820ddb4ab6bda25d7828216ff70c",
"assets/packages/app_ui/assets/icons/2x/load_fetched.png": "7719b3f31585f7fa12c0cd57ed2dbfd4",
"assets/packages/app_ui/assets/icons/2x/no_signal.png": "2011bde56139131a7f50379e1272f67f",
"assets/packages/app_ui/assets/icons/2x/google.png": "1b18f8d1e7f001859fd1de1b50e7a85f",
"assets/packages/app_ui/assets/icons/2x/facebook.png": "285fad933280674381a4fb161a215854",
"assets/packages/app_ui/assets/icons/2x/notification.png": "7546dab01381fd8efd6e8dea11f2e64f",
"assets/packages/app_ui/assets/icons/2x/preferences.png": "5a9fe05f0d3567ddaaf615826d016a63",
"assets/packages/app_ui/assets/icons/2x/qube_wallet.png": "bfe29df6fabc08434ede703846a49c67",
"assets/packages/app_ui/assets/icons/2x/box.png": "537dc985d3828072c25a868a79e43d44",
"assets/packages/app_ui/assets/icons/2x/swap_vertical.png": "7869255a6c7f8ac77a5a18682944bb46",
"assets/packages/app_ui/assets/icons/2x/door_xxl.png": "5f82006e8a4eb03864e0465ab9123d23",
"assets/packages/app_ui/assets/icons/2x/door_xs.png": "9fdcc4c07d304c6718905bb6a3253b0d",
"assets/packages/app_ui/assets/icons/2x/door_reservation_fee_outlined.png": "c4d2777ed40fd6bf119b0f37d51568d6",
"assets/packages/app_ui/assets/icons/2x/account_security.png": "7525f1eb9bdd52aaa9075ebb8fd940b6",
"assets/packages/app_ui/assets/icons/2x/door_small.png": "888a6deeaf006cca8ed6ab214ef20f8d",
"assets/packages/app_ui/assets/icons/2x/duration.png": "b03c3994a26832ebbba9142a25db7c6a",
"assets/packages/app_ui/assets/icons/2x/door_reservation_fee.png": "9a50a452b43a2b98f13e5162b7cfc114",
"assets/packages/app_ui/assets/icons/2x/card_payment.png": "e1dc7a57580e3d258edabbe2149ee7c6",
"assets/packages/app_ui/assets/icons/2x/wallet_filled.png": "eb74b5048162fc4fa62c7b51f48ff247",
"assets/packages/app_ui/assets/icons/box.png": "e54a374ee970aeb633be1bf98addf804",
"assets/packages/app_ui/assets/icons/swap_vertical.png": "b6f14b886d95ffa2104fb1cf7327205a",
"assets/packages/app_ui/assets/icons/door_xxl.png": "fa6243f494debc0db85e625abb51c5ad",
"assets/packages/app_ui/assets/icons/door_xs.png": "6a36957fb8763fde1032026d3b23c29d",
"assets/packages/app_ui/assets/icons/door_reservation_fee_outlined.png": "37c38888081f2a01bd5eecee1e3a7c19",
"assets/packages/app_ui/assets/icons/account_security.png": "518231558b208a1220a78410f6fbaeaa",
"assets/packages/app_ui/assets/icons/door_small.png": "d9d4beccc829e4fc969599ff0383c555",
"assets/packages/app_ui/assets/icons/duration.png": "b60267f3baee046aa3a0feffa9698fd2",
"assets/packages/app_ui/assets/icons/door_reservation_fee.png": "85137ea2404fed5cdf9e6bd128e8b6c9",
"assets/packages/app_ui/assets/icons/card_payment.png": "30a4be72cebc510841f7f9b7155fb80b",
"assets/packages/app_ui/assets/icons/wallet_filled.png": "8b06dbe03d3137c24202ae60b1cbf564",
"assets/packages/app_ui/assets/lottie/linens%2520and%2520comforter.json": "6b734d824ae9057955e183833822f568",
"assets/packages/app_ui/assets/lottie/pet%2520care.json": "41ae170fcc48a03817b0c37ad3167fef",
"assets/packages/app_ui/assets/lottie/dry%2520clean.json": "596390ff9daf182c21184c56a6052f75",
"assets/packages/app_ui/assets/lottie/shoe%2520care.json": "92d4cc2b78e645bdf401bcb67ff4c91a",
"assets/packages/app_ui/assets/lottie/bag%2520care.json": "bd8b7ad5e57b5d9d5eefae0120d61d8c",
"assets/packages/app_ui/assets/lottie/wash%2520&%2520fold.json": "165ada6e0873d63f966878eaa580459c",
"assets/packages/app_ui/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/packages/app_ui/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/packages/app_ui/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/packages/app_ui/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/packages/app_ui/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/packages/app_ui/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/packages/app_ui/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/packages/app_ui/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/packages/app_ui/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/packages/app_ui/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/packages/app_ui/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "72422474f61ee1ae3468fa699b3acc59",
"assets/fonts/MaterialIcons-Regular.otf": "8bdf9539b9e71a478815a9d2fd634e93",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
