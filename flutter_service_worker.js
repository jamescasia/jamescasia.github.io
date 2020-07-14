'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/photos/papyrus.png": "aad73ef8cc469a4eaf6e962190cf01ab",
"assets/assets/photos/android_masters.jpg": "8fcde829e2e12f321d28a9248d11d32d",
"assets/assets/photos/azure_hack.png": "2a5a3e1c09aadb7da6b99d6503364a90",
"assets/assets/photos/mansana.png": "18619836ee28a0e5547a26ead1d2f7f9",
"assets/assets/photos/iphone_skin.png": "6520bf69801cdae1233d0d523fcee6c7",
"assets/assets/photos/plant-app.png": "5f027188e41212fa9745272636a40e9a",
"assets/assets/photos/3354c243c03274131c04bab681b8ac72.ico.zip": "2ead2baa5beb1291c89e992b43f7d4f1",
"assets/assets/photos/ptf.jpg": "b2778f5e761bd8df27c3fd43239e6aa1",
"assets/assets/photos/smart-ctv.png": "c802ce081844cb8ea6f5ad00e89ad42b",
"assets/assets/photos/hackit.jpg": "caea0feee6a507ec454993d950a1d586",
"assets/assets/photos/android_masters_2.jpg": "41d8907977c44549ba24aa51aa305b30",
"assets/assets/photos/hakk-taxi.png": "f59b349360361b981304dd3bd696a19d",
"assets/assets/photos/esc_vel.png": "469ca19120a2059c922c5299fc10873b",
"assets/assets/photos/denguelytics.png": "54ead363a679e6adceefa99c2f9d64d2",
"assets/assets/photos/picnic_panic.png": "bbc39bd2ecb91cbb3aad462bd5e5ab98",
"assets/assets/photos/color_flex.png": "2b582af6a3ab1c8b300ffbf1ea3a76f5",
"assets/assets/photos/profile.png": "1b4602172d83b3385dc9a654f8462021",
"assets/assets/photos/iphone-skin.png": "b8a1fcfd85ba40a7c98cf4e9a110d8ba",
"assets/assets/photos/mentalert.png": "431932a5c8d963385126b4cb48a1bce6",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/LICENSE": "5af6ec41eab2d65d77897375dca70d1a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/AssetManifest.json": "ab877438504c0adc888eb243290ac470",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "60df08e0bcfa1a906212d5cf1fa63e0b",
"favicon.png": "9b923d225a731b01961131d9d7cbd6bb",
"main.dart.js": "a27576cf88c803122f681231f08a9877",
"readme.md": "0ca4a5fc4f884f74d64b89398fccc52d",
"jamescasia.github.io/assets/assets/photos/papyrus.png": "aad73ef8cc469a4eaf6e962190cf01ab",
"jamescasia.github.io/assets/assets/photos/android_masters.jpg": "8fcde829e2e12f321d28a9248d11d32d",
"jamescasia.github.io/assets/assets/photos/azure_hack.png": "2a5a3e1c09aadb7da6b99d6503364a90",
"jamescasia.github.io/assets/assets/photos/mansana.png": "18619836ee28a0e5547a26ead1d2f7f9",
"jamescasia.github.io/assets/assets/photos/iphone_skin.png": "6520bf69801cdae1233d0d523fcee6c7",
"jamescasia.github.io/assets/assets/photos/plant-app.png": "5f027188e41212fa9745272636a40e9a",
"jamescasia.github.io/assets/assets/photos/ptf.jpg": "b2778f5e761bd8df27c3fd43239e6aa1",
"jamescasia.github.io/assets/assets/photos/smart-ctv.png": "c802ce081844cb8ea6f5ad00e89ad42b",
"jamescasia.github.io/assets/assets/photos/hackit.jpg": "caea0feee6a507ec454993d950a1d586",
"jamescasia.github.io/assets/assets/photos/android_masters_2.jpg": "41d8907977c44549ba24aa51aa305b30",
"jamescasia.github.io/assets/assets/photos/hakk-taxi.png": "f59b349360361b981304dd3bd696a19d",
"jamescasia.github.io/assets/assets/photos/esc_vel.png": "469ca19120a2059c922c5299fc10873b",
"jamescasia.github.io/assets/assets/photos/denguelytics.png": "54ead363a679e6adceefa99c2f9d64d2",
"jamescasia.github.io/assets/assets/photos/picnic_panic.png": "bbc39bd2ecb91cbb3aad462bd5e5ab98",
"jamescasia.github.io/assets/assets/photos/color_flex.png": "2b582af6a3ab1c8b300ffbf1ea3a76f5",
"jamescasia.github.io/assets/assets/photos/profile.png": "1b4602172d83b3385dc9a654f8462021",
"jamescasia.github.io/assets/assets/photos/iphone-skin.png": "b8a1fcfd85ba40a7c98cf4e9a110d8ba",
"jamescasia.github.io/assets/assets/photos/mentalert.png": "431932a5c8d963385126b4cb48a1bce6",
"jamescasia.github.io/assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"jamescasia.github.io/assets/LICENSE": "5af6ec41eab2d65d77897375dca70d1a",
"jamescasia.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"jamescasia.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"jamescasia.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"jamescasia.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"jamescasia.github.io/assets/AssetManifest.json": "ab877438504c0adc888eb243290ac470",
"jamescasia.github.io/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"jamescasia.github.io/assets/NOTICES": "60df08e0bcfa1a906212d5cf1fa63e0b",
"jamescasia.github.io/favicon.png": "9b923d225a731b01961131d9d7cbd6bb",
"jamescasia.github.io/main.dart.js": "a27576cf88c803122f681231f08a9877",
"jamescasia.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"jamescasia.github.io/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"jamescasia.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"jamescasia.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"jamescasia.github.io/.git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
"jamescasia.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"jamescasia.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"jamescasia.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"jamescasia.github.io/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"jamescasia.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"jamescasia.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"jamescasia.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"jamescasia.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"jamescasia.github.io/.git/objects/b7/3c258e386781e2831267c4fd3f440f5c12d6fd": "6308a8e8f908ef5ac61d091e7d9c08ee",
"jamescasia.github.io/.git/objects/a3/5ec3c792e5a069c6655fb572d81c6b8d126bdd": "bc4f51e674f7f94d0c9ea81d794a7d75",
"jamescasia.github.io/.git/objects/b0/f0c6231c7bafaf1784c46823f174684f5d31bb": "c8486c4bd182c4c0673ebde1e407763a",
"jamescasia.github.io/.git/objects/66/d29b84bc71973dd1f4f4988bc976d2648d81f2": "b081f4d4cf9f7c81218aa23ebe8688d3",
"jamescasia.github.io/.git/objects/cf/03b597999cd588a35b3e18057245f9590a71e0": "6dda1893baaf35bcf4501d5bbf7e09d1",
"jamescasia.github.io/.git/objects/8d/9b8746c5c433dfebb52d4836ce84f7acabe2e0": "165fce5509658e8ac0602527d3be2862",
"jamescasia.github.io/.git/objects/56/5d1d0a67b90dd9525e82f3fa7e755c1c43a2f3": "33e3e255086d9a7301eb94474ff4b233",
"jamescasia.github.io/.git/objects/87/648959c91b11e66b7f2ddfed1b01f744ee4a57": "8d16050c459dd16338b311d93bc9f672",
"jamescasia.github.io/.git/objects/3b/ec23499fc2779cf0783d9e1d90a197e74c67fe": "ae675ce0cde9364b3bc82153409f571f",
"jamescasia.github.io/.git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
"jamescasia.github.io/.git/objects/08/846b3cac463a004c19f26df1bd39b636f63f61": "55f49365155de0843f00a374bea4f3e0",
"jamescasia.github.io/.git/objects/13/5174776f698cd0fb51923f2ed0c5cb15f7bbcd": "68c8e6c8d285cc17c8c74989f9819598",
"jamescasia.github.io/.git/objects/13/f098c3fefd4ab9dc9f97d0a2b6f8ec5e71ef79": "fffd7fb52a47b75923418f09162dae2c",
"jamescasia.github.io/.git/objects/7a/e7f4c274b2f4b3e499e28d826390cc26ab495f": "ee560786a5a2b4eb74a5f9d0d0ebfc0e",
"jamescasia.github.io/.git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
"jamescasia.github.io/.git/objects/7a/66bea3cbc10863f44e753250fa9d3af72028ac": "461affe63284fe91f94ba1f507715b4b",
"jamescasia.github.io/.git/objects/d9/e0c7bfdda409a0f960b27d5c0a81b7f44b04f6": "05f4ebb704e86026d8b8baec63e36d2b",
"jamescasia.github.io/.git/objects/d9/d23c0642eb60ffd871682ad8bb44b6d9a471c1": "804407ce5ab746da695464f2b93b7fb0",
"jamescasia.github.io/.git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
"jamescasia.github.io/.git/objects/f9/d92af4fa043de3e9a57919682d6bb66af5d611": "5441128d539ee899b04f1ca6a0144e03",
"jamescasia.github.io/.git/objects/f9/600433bf26df202c14934b27b032b7e71a769f": "d10ffb65f50fe3e635f2e5102a2eb534",
"jamescasia.github.io/.git/objects/04/deab40227f657eca6d39a180d8dd4c0f9b007d": "e39108faaf2f8c22e329892f51ef8d9d",
"jamescasia.github.io/.git/objects/16/35862eacba651f9fcffca85c2aa70ffd00296b": "a94273950ef7d730b4055ba7c4ac517b",
"jamescasia.github.io/.git/objects/63/4c08d3c55dfc39709d5e21d8a323b8430ea6d3": "90fbe471acb9e828c6b9629d7392ced2",
"jamescasia.github.io/.git/objects/81/a3bfb65f9751e48a7e130aaebe4ffdcfe0d72b": "9e4b300338ee66e073c39c60b1890fed",
"jamescasia.github.io/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"jamescasia.github.io/.git/objects/98/0d63405f59bbc6bb13ce5681b71e2a60042d0a": "a3a65e1de357f92857dec5be0f0c0cfd",
"jamescasia.github.io/.git/objects/c4/bf33a5af17a603b3093e6a73181ae57e677625": "2ca64d67bcb07db9780b0c9afab39d27",
"jamescasia.github.io/.git/objects/32/b6051c9f5fc318245b6fa3e35a7078886be512": "7aec13f6f643fbcd3c79c451238d2f33",
"jamescasia.github.io/.git/objects/32/ba37fbc789e866e2c921b1deeed2d67ca20e16": "802471461347a17da9ed2cc732da81fa",
"jamescasia.github.io/.git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
"jamescasia.github.io/.git/objects/26/ce8acd3b2c74f58f2927ec7b6480631f067eb9": "d04dfb7dfd2288206aa4827a0d310250",
"jamescasia.github.io/.git/objects/7e/6b912619cf468df1aff7ec43755c120f2e4934": "f14c789f2af5c3d1f9bd11a4ee224bcd",
"jamescasia.github.io/.git/objects/48/046616c4dfe1c8d76d703d4ac910792a0ad25c": "f1eb858ac6fc7333805443c4e863f041",
"jamescasia.github.io/.git/objects/48/62255a4a1d9c3809832c56b08b3ee335ad6d7e": "e546ea616cedfd2950f3cd72f7bc6a8b",
"jamescasia.github.io/.git/objects/ed/c73816f95b3a70908e4cca0322856d822b0394": "9221b6f47dc6f6f5c8cadcdb44cf7808",
"jamescasia.github.io/.git/objects/e6/1a7791dafbc9f8901fdc0ecee2abdd691a91d1": "12d2fba0a239e9538e740be90f0223f8",
"jamescasia.github.io/.git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
"jamescasia.github.io/.git/objects/77/1513995f5f00f3baefe0ba4af101e5a4bdb241": "87e9259d5366beaea6da9df40d9cbc6f",
"jamescasia.github.io/.git/objects/0b/389e138b83a2a46924a197c4990850113d030f": "bdbe2f9093c2a61e5af70f9bd4b7d5a4",
"jamescasia.github.io/.git/objects/b6/d56c942f5a41bba4fbc35f73aa483ae1847771": "b9978b66627753115400851d77d5e868",
"jamescasia.github.io/.git/objects/a6/e0321831788cf1c3ec3c39a6d76619476f1bbc": "e160df023f252679522d556572ac9598",
"jamescasia.github.io/.git/objects/a6/3bae3f8b9c7e8858dd6ba9d563c68d32d7c5b5": "6e994477e6d16cf79519ea27d777f2fa",
"jamescasia.github.io/.git/objects/5f/d8536b00790995190d685622d62c10c62e5826": "f49af0b7cc6ca9a1da856e921d6a5b80",
"jamescasia.github.io/.git/objects/0d/396005b82170d61c1599404b503869da9166e3": "837b224470eaddf7089d5b773899eb39",
"jamescasia.github.io/.git/objects/47/c1e3557f1d2356fd9c225d2765147394863d51": "557e640c3d39695882e1ecc4ef63cfee",
"jamescasia.github.io/.git/objects/1e/c89444b43aa71f52d0c64760b3346f3e310e39": "f9b40581d5a059e724bde42ff819feb5",
"jamescasia.github.io/.git/objects/90/4c7d97764cf9314f255355068818f6ad9d033b": "4b41c261f78ac85f20e534a25cea3270",
"jamescasia.github.io/.git/objects/9f/0f86c0814f0cca718bf89cc40b087aad13e398": "9b288c53c26d55934f7a4706159de57c",
"jamescasia.github.io/.git/objects/a2/8a8aaca07b91dcceefeec523e387cefda1ffca": "6206c904f2395773343b123f82689ac7",
"jamescasia.github.io/.git/objects/80/28faae66d7ef147bfdea91d17dd60c13d19c8a": "a143e209cc2aca69e899675fcb2e07c8",
"jamescasia.github.io/.git/objects/2b/79a40e06de12ad475e59b3e82cd5f9acb49985": "6a502e99fdb1ee1fa4705f3264244cd4",
"jamescasia.github.io/.git/objects/2d/b5df2105e17cc6bab8acb2f8459d4157a3e8a1": "20b76f173946059844da53ef963a0cb1",
"jamescasia.github.io/.git/objects/3c/325c3319d9b6c667a8633f9811815715c4373e": "b474e97179065ef6496014735f35914a",
"jamescasia.github.io/.git/objects/7c/1199f017ad59b82f78ddeb394dbed183e0d307": "d3191e5226e594d6e052d445b314792e",
"jamescasia.github.io/.git/objects/36/0f07c987bf8fb78d5cda5f9371e47e54e1380b": "047050d1ac558c01b26e9e21e70410e6",
"jamescasia.github.io/.git/objects/0c/35905a9b7eb614d8f7504a1ee0422d8abc35c2": "63f4dfa8e11b97b3b651d2b0cab748a3",
"jamescasia.github.io/.git/objects/f1/e2169cecea11b14ec2933dc3fbb452d0a87efc": "6b192e2297ab576f09082729c7dbd47f",
"jamescasia.github.io/.git/objects/ff/0769bd0ccb4d35fa0354bc85996987a5a0745d": "1daf0392da784767f9f0a82dc475ed5f",
"jamescasia.github.io/.git/objects/ff/559c9d4322a8c2225f53a0083fbaf251fe4b4e": "e1cf2fb8a3118cbeff480217ad2ba90d",
"jamescasia.github.io/.git/objects/d3/245cc157ed41bd70ca97be11184bede2299c53": "e2a0adcd31fc48705f1323b3b447b784",
"jamescasia.github.io/.git/objects/d3/6318af243e1662ef7c69762d8ca56e1d9467f4": "e3f46a01d9651ebb508c74586ee09ca0",
"jamescasia.github.io/.git/objects/78/7a3ef6f4dcf51e7ac822ccd516518a56cbd0a1": "168eec1821c6f6ea2fd202c854e7bba3",
"jamescasia.github.io/.git/objects/78/66efcaaff458eb6f4663603a6caacdc82d98fd": "1fca80d09c06d2803f15cbab2b2e821e",
"jamescasia.github.io/.git/objects/78/8066967e31da2a023fcbac98e5a490a9c5d70e": "50f09aa517d7b2847b548b69ab4e0491",
"jamescasia.github.io/.git/objects/1a/412088c0f53029fbe37f83cc035798c155dd75": "f1c06dfa8d91b6fb62ab8fcf4da73677",
"jamescasia.github.io/.git/objects/18/afc4052a2b578ebb42251e3b2ebf59909c97d9": "e8b74aa436208f8a987d9d560ecb412c",
"jamescasia.github.io/.git/objects/00/51e28a96147d640941a8cf458c16f7f6833392": "d89667854f251bb723bbc0cd2ab15979",
"jamescasia.github.io/.git/objects/49/645ab44f9eefadb0669d5071c3528540b35888": "d5332c4069741ed10451ebeda8688fdf",
"jamescasia.github.io/.git/objects/ea/ebe6dbe4548ea36e2263e3e6fd3000d9029c27": "9e4cdde54e46256e353193db7c9d6991",
"jamescasia.github.io/.git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
"jamescasia.github.io/.git/objects/84/65d1c18c5fd4606bd76ac3283c9dd2376a7103": "af4588d8a397d1738a89ca23e164b789",
"jamescasia.github.io/.git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
"jamescasia.github.io/.git/objects/50/122d88dab84dac08297c5e2619d18555e009d2": "6292107c0161730de90e20d1c8c165a5",
"jamescasia.github.io/.git/objects/14/e81e781dfea5117585094ea2a598fe5cc1f4ee": "d5ada07e11689b2fd9b9289c5dceef4b",
"jamescasia.github.io/.git/objects/ef/086c594dde3ee0b160b074a7f4110d52cc09c1": "9fc6bffe4c2527887ba6502736122ca0",
"jamescasia.github.io/.git/objects/ef/6d4204bda68d30a6f1c7b8a2e431f79474fd29": "3176474c01bd9d6cf6ec856e84f9d260",
"jamescasia.github.io/.git/objects/c7/b3a662d9bc1a296d1a24871014744e19277b90": "369e1f6340537b003332db3d453dad1c",
"jamescasia.github.io/.git/objects/c7/531727acc64b1f200ebd1e5dff8320a05f4275": "62cda2558dae1567697957ac4db0b706",
"jamescasia.github.io/.git/objects/09/c0e44504d6c04af5c7f5638a8592bc8cc6d586": "1e9f2ac9bb848910f4e3916d74047d63",
"jamescasia.github.io/.git/objects/b2/b158f0ab7c30b999ad3b0a660a477fee236916": "63c6d210f17a4d1dc5050528bfb42938",
"jamescasia.github.io/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"jamescasia.github.io/.git/objects/cd/39e841e65645880162f1bd2d04fce39062fbc4": "682644d4464f50a24f4f7fe4b47d7743",
"jamescasia.github.io/.git/objects/cd/8aa0b19e419a3574ac11108ffbf8dbea0856cc": "0d80ca15af799c39b2fb14d48d5cd78c",
"jamescasia.github.io/.git/objects/2c/846f317565153e66a56547debacbd8aa38bbf3": "526dc203fb98c7362c8af7683851619e",
"jamescasia.github.io/.git/objects/74/8814c7660fbd3c855057cc43e9ce9c475a7215": "07ab73b6e3e23cf537299f7be6ebdbdc",
"jamescasia.github.io/.git/objects/4f/c1ce8e705c67265f928ca4c95a594ef4db36fa": "5508428e1d84836bf2b227d35eb90f06",
"jamescasia.github.io/.git/objects/fb/62bdb9b147aad1456be410d07097a5ad66c61a": "9aa7fde5275643ce29ac1161b92228aa",
"jamescasia.github.io/.git/objects/fb/ae8dbfb0a996c646af7d6b5eb82ab7bb90c83f": "223e4b8a0434fa22d047e57a07d05131",
"jamescasia.github.io/.git/objects/83/fa26b7f4d35bf16ac2121ebacb7a37499bb391": "d5fb420e65337c8df7f562539344a01a",
"jamescasia.github.io/.git/objects/8a/2d8a4c0f4ec7d229c896672abf243eb071cacb": "f766d08068d6041a4fa18404ac11b998",
"jamescasia.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"jamescasia.github.io/.git/objects/e3/ee369486fc59d8b57a2adb680d72485c4a0948": "c74d07bb1ca1714fb5e00453d7f2e3e9",
"jamescasia.github.io/.git/objects/3f/97eb21f5f78ae63adf9105e5fce5b1b6d24127": "e46b88d7c8a0163d22d491b87eacc9b1",
"jamescasia.github.io/.git/objects/a5/63b4583e7faa94a99605114654ac7b4d5a898c": "be3f8c0920694567309a6084ed83ca75",
"jamescasia.github.io/.git/objects/69/0e754f8ca0d60b6aea3102f5b842b51a815634": "87be60ec7b106ffae7137822b13a1ca2",
"jamescasia.github.io/.git/objects/b3/54fb6fceae539ae7315837412fa6fd3eac35d7": "4ef219e86ed96da82abd2e0c49c0e65f",
"jamescasia.github.io/.git/objects/b3/d4fe8b0b25cb613742d658202a261dc3849cbb": "53d739f4c5b4ad25be9cb5aa30da254d",
"jamescasia.github.io/.git/objects/62/9226fb89a806d73c176af0f7e82387947f8bb4": "5cc8984862634fd4219b5b002507976d",
"jamescasia.github.io/.git/objects/62/4c88bdf16a2e2fec6ab54da772eda96db4bd12": "97ade82fad65f13ecead0d774f379e7c",
"jamescasia.github.io/.git/objects/4c/8b714efd8756ad5cc44ace475fc55d3ec3d466": "288ef4ae6fb31c3b0ef328518d15c6a4",
"jamescasia.github.io/.git/objects/1c/e1bcc887b66fc83f73745fe947dbf0edc8b724": "b45cdd673adc8480f6731f2e03fa5fdd",
"jamescasia.github.io/.git/objects/4b/6bc235198cd12255a21b1a14d09bccb0570e32": "90774fe6e7c34323288f98ba7c653a4f",
"jamescasia.github.io/.git/objects/4b/fd20c4fca5d372a9c5c04fd4203860cc55ab57": "c8f8526237f34557787fed791fb663d0",
"jamescasia.github.io/.git/objects/ca/b6b27abbf937d12828e0a58717524cbe3a1fd1": "1413d287d8438e190a7ca9d99afd827e",
"jamescasia.github.io/.git/objects/ca/02d1defa1b443e9043618768387f12996e578e": "edeb20efd6540b52f98274a860e26851",
"jamescasia.github.io/.git/objects/94/efe5e1d8b8305d3873297f24b26bb06686e853": "d78700182bf29906d7d57cf64403cbb0",
"jamescasia.github.io/.git/objects/94/34ae396095674b42c0a8470869250138529be4": "ad67cadb4f85030abfea306384446d5e",
"jamescasia.github.io/.git/objects/9e/ddab89a5c666da6e3b6c83a29466976f641955": "c0e2eb44c7830eaa1dae48099ea7c04b",
"jamescasia.github.io/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"jamescasia.github.io/.git/objects/95/6fa2781c68bc8c65660d96fdf63438e14704d0": "ad4dbc8c3f5b4825e90ba60d5739dcef",
"jamescasia.github.io/.git/objects/5d/a15331fd36d092cbc497bec6ab195548e8c851": "e93cba3aa196067a7d1ba1791eb9e120",
"jamescasia.github.io/.git/objects/5d/132fccc0fbf45a159432b863dd18de052d3f14": "2e8ecb6922590c0971054b72ba95f84d",
"jamescasia.github.io/.git/objects/5d/0f155ecb034d8c22c8c84c96106d072919b3a6": "0120367cf563dbc252c08e2c1f6cfbe8",
"jamescasia.github.io/.git/objects/af/5d6f8d21916ce8522dd964de66a307b46b2ee3": "92e9b2e8dad9a0f16ab6e2df485bb65a",
"jamescasia.github.io/.git/objects/07/b7db8f7ea4c026e5031b40d26037708414011a": "0bbe410ad42d1708a3ac2b36ce9597a1",
"jamescasia.github.io/.git/objects/07/6ded8fc61f5146e5abeb9c3d28e9acfee835be": "829c4ee739a088fbda5f1d6ede913eca",
"jamescasia.github.io/.git/objects/37/40709690c6245d00c8b792efb0e2ce70529680": "d336d07d2e33aa8ad560a533ec2485b3",
"jamescasia.github.io/.git/objects/37/541517c2c42bd01031bed0396b0873693de250": "0e65a4d178d059b3f0517f18502aa0b9",
"jamescasia.github.io/.git/objects/37/7ff970c7dba1c91772c642d2f5d45b1403079d": "39f7971c6d4eec796269588c6d5c9bd8",
"jamescasia.github.io/.git/objects/d1/f7d5ba673c2f0b209bc191034f9cb1a30bbd89": "d01cc3aea743c7f16c5787955ea91229",
"jamescasia.github.io/.git/objects/d2/e1a8b85e3657c6dabaf931c9b9d2876a15a6e4": "913c162736b86aca1de0b171343b678a",
"jamescasia.github.io/.git/objects/88/bf1f5cf95be1a82a37f3705030c8d53bd3634c": "bac08f0ac6d71f77bbfac70231186bd4",
"jamescasia.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"jamescasia.github.io/.git/objects/7b/38f80d69b2d2fe8d9b37e7abbc3f074a006ebb": "d51ceca2f8b4bb50bf3aa7d90a6598d7",
"jamescasia.github.io/.git/objects/7b/f858bed89127905ede39164c4412716a06574a": "329d6b784f8c8279435a220085466738",
"jamescasia.github.io/.git/objects/7b/2a3795324134b60f5355b2cd9351ab1eab229c": "a44e8a2c0b426baf8faee96b6c832f2d",
"jamescasia.github.io/.git/objects/89/79a5413cec0718160e668204abe43c01aba349": "faf1fd745ed580dbb94833d437ef5556",
"jamescasia.github.io/.git/objects/60/b3329c52b6a374fe2be3d344b2690d73ddf173": "6d1a1efb81522f6d374f3298c130d4d4",
"jamescasia.github.io/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"jamescasia.github.io/.git/objects/e2/a47bb4bb834e09eca4165a8885e54c0cab9d8d": "5b6f6fa333b872aca7a230d89de8ed55",
"jamescasia.github.io/.git/objects/cc/2429e073329376755f6f0b7379347a34066e91": "2badcba29dbf2c4573a212d96856e202",
"jamescasia.github.io/.git/objects/a0/7c4ba3f9b2de9d76bce311b9bc946b905be859": "5143c6bbb9bfed9be9877251f8ae5ad1",
"jamescasia.github.io/.git/objects/ce/228b085686e585cdbc7cf4327c392d7b170c9e": "ddae4b07f4a3757ac32b538cc622dc0d",
"jamescasia.github.io/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"jamescasia.github.io/.git/objects/15/d2fc0ae250ef0444545d9d3ebb67640b9e6702": "cabaea8d57c603fa2ab528a060b1af99",
"jamescasia.github.io/.git/objects/20/03fd8d88f51555535d9fa6a4aea00f214a44a9": "1be841613c4b6242dc3a719c08f0a805",
"jamescasia.github.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"jamescasia.github.io/.git/objects/03/a3e644835609939f6d51bb5f263f28d6f9175c": "cad90f61fd331848a91204b18029eb39",
"jamescasia.github.io/.git/objects/7f/3ad6f0020a6a94db087f8c273dc9cb39465f37": "a98f710d2c30fd023594c0457c9a2534",
"jamescasia.github.io/.git/objects/61/e7cf94bfc9e853afa76ba94261e15515a3b68d": "05a8462904313cd31f76de62621ba6ab",
"jamescasia.github.io/.git/objects/24/21c09711575fee377ea48a97dd6bd49f7d2707": "0bc389e9fa575f42fa7d69926e961ad9",
"jamescasia.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"jamescasia.github.io/.git/index": "705759276c1bbce0b0ccb7ccf539d08d",
"jamescasia.github.io/.git/logs/refs/heads/master": "142b618ecee05a0a39062c384ad8a815",
"jamescasia.github.io/.git/logs/HEAD": "142b618ecee05a0a39062c384ad8a815",
"jamescasia.github.io/.git/refs/heads/master": "e46b496b664f01f0b378c26fb5cecb04",
"jamescasia.github.io/.git/COMMIT_EDITMSG": "911c34cbb2c5a82fef9ead1580cde36a",
"jamescasia.github.io/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"jamescasia.github.io/.git/config": "5b603c2c0801a9ded3b79159fc38b404",
"jamescasia.github.io/readme.md": "0ca4a5fc4f884f74d64b89398fccc52d",
"jamescasia.github.io/manifest.json": "0cd4c9d954c3e172e7515a3c1053e4e0",
"jamescasia.github.io/index.html": "06275f754fd0aa60204fc36b4dffed58",
"/": "06275f754fd0aa60204fc36b4dffed58",
"jamescasia.github.io/icons/Icon-512.png": "25e72bc2d25da800a33db2a53ac603de",
"jamescasia.github.io/icons/Icon-192.png": "4623bbdb2ea9901ea848432e54600717",
"manifest.json": "0cd4c9d954c3e172e7515a3c1053e4e0",
"index.html": "06275f754fd0aa60204fc36b4dffed58",
"icons/Icon-512.png": "25e72bc2d25da800a33db2a53ac603de",
"icons/Icon-192.png": "4623bbdb2ea9901ea848432e54600717"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
