window.BENCHMARK_DATA = {
  "lastUpdate": 1632208910836,
  "repoUrl": "https://github.com/ZigRazor/CXXGraph",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96020a672437ba8dd47e3344230fcb9e108b002a",
          "message": "Adjustment for new version of Google Benchmark",
          "timestamp": "2021-08-26T08:23:53Z",
          "tree_id": "3eb14f98916c59ba6927c70e5962b66cb4a449ea",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/96020a672437ba8dd47e3344230fcb9e108b002a"
        },
        "date": 1629966773617,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 18.232418208727314,
            "unit": "ns/iter",
            "extra": "iterations: 37870544\ncpu: 18.221958707537972 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999998009599e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 18.803171927589286,
            "unit": "ns/iter",
            "extra": "iterations: 36778204\ncpu: 18.803141855431544 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.8603168464310387,
            "unit": "ns/iter",
            "extra": "iterations: 175069859\ncpu: 3.8600586352217245 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.555222578135989,
            "unit": "ns/iter",
            "extra": "iterations: 102950925\ncpu: 6.554815520113102 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 323.8154141644177,
            "unit": "ns/iter",
            "extra": "iterations: 2231493\ncpu: 323.8082409400342 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 83529.0602534547,
            "unit": "ns/iter",
            "extra": "iterations: 8680\ncpu: 83521.17972350231 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 31043337.63157959,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 31042421.631578915 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 8917150638.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8916608486 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.99999999298484e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 22.859035859414117,
            "unit": "ns/iter",
            "extra": "iterations: 31814240\ncpu: 22.85867117994964 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 30.98950535503314,
            "unit": "ns/iter",
            "extra": "iterations: 22699291\ncpu: 30.98706030069396 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 550.5255425400443,
            "unit": "ns/iter",
            "extra": "iterations: 1252949\ncpu: 550.5097366293426 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 79797.11049660493,
            "unit": "ns/iter",
            "extra": "iterations: 8679\ncpu: 79789.5974190571 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 34373689.95833386,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 34372318.87500003 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 10098511976.999987,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10097802421 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 527.418924692035,
            "unit": "ns/iter",
            "extra": "iterations: 1264010\ncpu: 527.3853047048664 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 519.6355981048481,
            "unit": "ns/iter",
            "extra": "iterations: 709608\ncpu: 1032.7711539328754 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 310.9025399036513,
            "unit": "ns/iter",
            "extra": "iterations: 1204652\ncpu: 671.9634616470141 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 83762.42327149837,
            "unit": "ns/iter",
            "extra": "iterations: 8302\ncpu: 83761.00168634123 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 61791.536131472065,
            "unit": "ns/iter",
            "extra": "iterations: 8732\ncpu: 97205.19594594617 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 26168.913595980375,
            "unit": "ns/iter",
            "extra": "iterations: 13732\ncpu: 45998.2703903293 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 33819843.750001155,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 33814363.54999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 26837059.916665852,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 42241510.70833335 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 11953205.325000126,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 20101197.774999954 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 9348586841.999975,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9347591834.000006 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 5032047341.249992,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5533734217.499997 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2259354457.4374995,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2917497764.5000005 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.680093899159234,
            "unit": "ns/iter",
            "extra": "iterations: 261606602\ncpu: 2.6799077494229513 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.461005457739021,
            "unit": "ns/iter",
            "extra": "iterations: 129000668\ncpu: 5.460850388774741 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 105.39432103705889,
            "unit": "ns/iter",
            "extra": "iterations: 6741583\ncpu: 105.38728886079123 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2218.183673018628,
            "unit": "ns/iter",
            "extra": "iterations: 316911\ncpu: 2218.065639879973 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 49514.67215926081,
            "unit": "ns/iter",
            "extra": "iterations: 13412\ncpu: 49511.346480763204 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 816013.1009420619,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 815942.4414535656 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 23.66553276574403,
            "unit": "ns/iter",
            "extra": "iterations: 29081318\ncpu: 23.66504788400589 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 28.322199205452076,
            "unit": "ns/iter",
            "extra": "iterations: 25786513\ncpu: 28.320019732796027 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 409.4867765524008,
            "unit": "ns/iter",
            "extra": "iterations: 1665791\ncpu: 409.4781308099332 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6884.421678604014,
            "unit": "ns/iter",
            "extra": "iterations: 106529\ncpu: 6883.999230256513 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 114992.16976556313,
            "unit": "ns/iter",
            "extra": "iterations: 6185\ncpu: 114989.5825383991 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1954365.337110401,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 1954220.5779036614 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 392.58442425688287,
            "unit": "ns/iter",
            "extra": "iterations: 1837434\ncpu: 392.571690738272 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 518.0499468266956,
            "unit": "ns/iter",
            "extra": "iterations: 1427408\ncpu: 1030.4909402217222 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 256.27437872241205,
            "unit": "ns/iter",
            "extra": "iterations: 1430520\ncpu: 514.4632706987787 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6708.2604755324555,
            "unit": "ns/iter",
            "extra": "iterations: 104935\ncpu: 6707.653442607498 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8070.413576374797,
            "unit": "ns/iter",
            "extra": "iterations: 43038\ncpu: 15987.552418792453 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3869.588121919635,
            "unit": "ns/iter",
            "extra": "iterations: 85220\ncpu: 7769.253320816717 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 109927.35685484207,
            "unit": "ns/iter",
            "extra": "iterations: 5952\ncpu: 109919.37684811736 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 175222.3207295633,
            "unit": "ns/iter",
            "extra": "iterations: 2248\ncpu: 330820.4559608583 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 72825.93562835133,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 141888.07433155496 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1908650.4748009667,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 1908429.2307691786 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2902183818.2500234,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3204544685.5 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 494920610.9375126,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 594620597.2500023 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b6e56b6ceb5a177ce7298edcca36d03e440c937",
          "message": "Fix #48 :\nNot removed non compressed files when compression is flagged.",
          "timestamp": "2021-08-27T07:07:44Z",
          "tree_id": "5a4fe87d232fdc5b335f1b73fb3ac8bbeefe1cae",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/8b6e56b6ceb5a177ce7298edcca36d03e440c937"
        },
        "date": 1630048592471,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 16.57386721351075,
            "unit": "ns/iter",
            "extra": "iterations: 41381695\ncpu: 16.57217298614762 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 7.010000047102949e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 16.710718207534217,
            "unit": "ns/iter",
            "extra": "iterations: 41637923\ncpu: 16.710175865400398 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000001282757e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000001282757e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.9801527772421887,
            "unit": "ns/iter",
            "extra": "iterations: 177628681\ncpu: 3.980076719704969 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.689333713087733,
            "unit": "ns/iter",
            "extra": "iterations: 110302902\ncpu: 6.689020847339081 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 286.7342709104301,
            "unit": "ns/iter",
            "extra": "iterations: 2479085\ncpu: 286.71416187827344 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 77574.78101554932,
            "unit": "ns/iter",
            "extra": "iterations: 9197\ncpu: 77571.7877568772 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 23892199.826087292,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 23889841.78260871 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 11463560030.999987,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11458460686 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000022434506e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 23.443131942920203,
            "unit": "ns/iter",
            "extra": "iterations: 29890251\ncpu: 23.44173248996799 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 25.7247170557489,
            "unit": "ns/iter",
            "extra": "iterations: 27076712\ncpu: 25.72381532144679 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 530.0159362977656,
            "unit": "ns/iter",
            "extra": "iterations: 1303816\ncpu: 529.9897516213946 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 84526.23615160327,
            "unit": "ns/iter",
            "extra": "iterations: 7889\ncpu: 84523.34643174066 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 27227105.838709384,
            "unit": "ns/iter",
            "extra": "iterations: 31\ncpu: 27225286.38709676 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 12026838532,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 12026093080.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 506.8598273526976,
            "unit": "ns/iter",
            "extra": "iterations: 1323739\ncpu: 506.8383676842603 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 664.5655855830454,
            "unit": "ns/iter",
            "extra": "iterations: 555122\ncpu: 1323.7488840290894 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 319.9626773911425,
            "unit": "ns/iter",
            "extra": "iterations: 954388\ncpu: 682.7905935531426 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 85704.669762893,
            "unit": "ns/iter",
            "extra": "iterations: 8182\ncpu: 85684.61329748205 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 63068.39504891954,
            "unit": "ns/iter",
            "extra": "iterations: 6746\ncpu: 100942.19759857665 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 34226.3202923753,
            "unit": "ns/iter",
            "extra": "iterations: 15528\ncpu: 64442.68553580627 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 27585649.708332956,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 27580848.666666508 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 20521042.16666706,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 34712523.87499994 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 10021507.17500001,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 18082180.92499997 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 11453789772.999983,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11448061109.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4287597490.7500024,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5066030989.000003 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1976696610.8124998,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2584730358.249999 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.581804058298676,
            "unit": "ns/iter",
            "extra": "iterations: 262417207\ncpu: 2.5817180197333522 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.208758850665433,
            "unit": "ns/iter",
            "extra": "iterations: 129843908\ncpu: 5.208222599091829 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 93.43490260246757,
            "unit": "ns/iter",
            "extra": "iterations: 7183344\ncpu: 93.43200325642283 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2060.3600909698093,
            "unit": "ns/iter",
            "extra": "iterations: 350006\ncpu: 2060.1003268515365 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 35173.79549718606,
            "unit": "ns/iter",
            "extra": "iterations: 20787\ncpu: 35074.80930389205 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 926546.2294429615,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 926482.1273209709 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 22.059599136511565,
            "unit": "ns/iter",
            "extra": "iterations: 32146355\ncpu: 22.05751659869339 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 24.782386232596856,
            "unit": "ns/iter",
            "extra": "iterations: 29731561\ncpu: 24.78145079567132 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 368.1993123512553,
            "unit": "ns/iter",
            "extra": "iterations: 1919003\ncpu: 368.1806198322783 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5916.589002810752,
            "unit": "ns/iter",
            "extra": "iterations: 122013\ncpu: 5916.504003671767 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 95626.08542647962,
            "unit": "ns/iter",
            "extra": "iterations: 7644\ncpu: 95588.19911041489 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1791000.9625669478,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 1790961.7540106697 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 381.77382353963014,
            "unit": "ns/iter",
            "extra": "iterations: 1838056\ncpu: 381.75697693650665 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 541.4199781110563,
            "unit": "ns/iter",
            "extra": "iterations: 628628\ncpu: 1081.640270557475 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 274.7051026708863,
            "unit": "ns/iter",
            "extra": "iterations: 1321504\ncpu: 549.4782641596153 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5898.598674999635,
            "unit": "ns/iter",
            "extra": "iterations: 109283\ncpu: 5898.334919429518 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8946.51639849956,
            "unit": "ns/iter",
            "extra": "iterations: 38906\ncpu: 17868.835835089198 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4431.859025401246,
            "unit": "ns/iter",
            "extra": "iterations: 75980\ncpu: 8934.252540141795 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 100314.19901756327,
            "unit": "ns/iter",
            "extra": "iterations: 6718\ncpu: 100314.14379279841 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 275092.6809045295,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 517204.2445560994 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 82586.28570579684,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 158789.88688213256 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1869635.5277045295,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 1869588.158311323 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3378731201.49996,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3579198367.000011 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 984882508.6249917,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1093401013.4999971 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69262e68af323de06ddd9c30c55efa3d39a9defa",
          "message": "Documentation update for WriteToFile Function",
          "timestamp": "2021-08-27T07:15:12Z",
          "tree_id": "218becde68bf9e35e7492543b8e9dded8c45a341",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/69262e68af323de06ddd9c30c55efa3d39a9defa"
        },
        "date": 1630049083795,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.99999999995249e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 18.571156635768396,
            "unit": "ns/iter",
            "extra": "iterations: 37842985\ncpu: 18.569150108005484 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000661922968e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 19.106929071780577,
            "unit": "ns/iter",
            "extra": "iterations: 36626522\ncpu: 19.104969098622032 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 9.000000318337698e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.999999998593466e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 9.000000318337698e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 9.000000003034359e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 4.5001693120733695,
            "unit": "ns/iter",
            "extra": "iterations: 152372477\ncpu: 4.4997766821103795 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 7.087772519285153,
            "unit": "ns/iter",
            "extra": "iterations: 101100368\ncpu: 7.0869818990174185 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 325.0035675776528,
            "unit": "ns/iter",
            "extra": "iterations: 2115441\ncpu: 324.97923364442676 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 89026.47400024859,
            "unit": "ns/iter",
            "extra": "iterations: 7827\ncpu: 89009.11358119338 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 26773998.950000077,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 26773025.200000025 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10883834087.999958,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10883014545.999998 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000661922968e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.999999998593466e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 24.71863204596477,
            "unit": "ns/iter",
            "extra": "iterations: 28287237\ncpu: 24.71698653353796 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 27.54806498658502,
            "unit": "ns/iter",
            "extra": "iterations: 25804033\ncpu: 27.545629669594685 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 558.3239430262091,
            "unit": "ns/iter",
            "extra": "iterations: 1262898\ncpu: 558.3259574407432 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 91706.62220197667,
            "unit": "ns/iter",
            "extra": "iterations: 7684\ncpu: 91663.58342009409 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 31725309.888888326,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 31725387.333333388 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 12353138512.999977,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 12345299719 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 575.798289080897,
            "unit": "ns/iter",
            "extra": "iterations: 1234658\ncpu: 575.7523856808899 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 634.9576834749405,
            "unit": "ns/iter",
            "extra": "iterations: 563456\ncpu: 1263.85265042878 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 334.79959781995575,
            "unit": "ns/iter",
            "extra": "iterations: 1158312\ncpu: 688.2093589637318 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 95266.91768470392,
            "unit": "ns/iter",
            "extra": "iterations: 6876\ncpu: 95261.24781849854 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 65046.35854122331,
            "unit": "ns/iter",
            "extra": "iterations: 5772\ncpu: 102216.54643104618 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 29363.808203518256,
            "unit": "ns/iter",
            "extra": "iterations: 11812\ncpu: 48138.837707416365 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 29616835.181818925,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 29608782.727272853 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 21491224.659092207,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 36244449.77272733 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 10633492.317708714,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 17864195.33333325 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10085193739.999908,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10083698032.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 5210174758.750014,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 6397144517.499999 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2556484773.8124924,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 3138540951.75 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.95526371721616,
            "unit": "ns/iter",
            "extra": "iterations: 235567404\ncpu: 2.9550320892444244 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 6.058533680668699,
            "unit": "ns/iter",
            "extra": "iterations: 116438825\ncpu: 6.05633801268605 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 102.94827560247883,
            "unit": "ns/iter",
            "extra": "iterations: 7106743\ncpu: 102.94407494403563 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2276.995789692919,
            "unit": "ns/iter",
            "extra": "iterations: 316604\ncpu: 2276.719387626185 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 38201.038880935084,
            "unit": "ns/iter",
            "extra": "iterations: 18158\ncpu: 38198.51773323058 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 1048663.4373087978,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1048569.7538226253 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 25.089542412897867,
            "unit": "ns/iter",
            "extra": "iterations: 28023692\ncpu: 25.088415366540655 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 28.301970480142614,
            "unit": "ns/iter",
            "extra": "iterations: 24649373\ncpu: 28.299432525119247 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 416.3959280611794,
            "unit": "ns/iter",
            "extra": "iterations: 1640005\ncpu: 416.36242938283584 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6802.801629382337,
            "unit": "ns/iter",
            "extra": "iterations: 98074\ncpu: 6802.369506699066 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 109640.96249808338,
            "unit": "ns/iter",
            "extra": "iterations: 6533\ncpu: 109635.2383284878 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 2030121.5342858215,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2030030.7342857393 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 430.35791113139754,
            "unit": "ns/iter",
            "extra": "iterations: 1658448\ncpu: 430.26283850925535 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 503.9522458764075,
            "unit": "ns/iter",
            "extra": "iterations: 713708\ncpu: 1001.90047050053 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 256.5655351305052,
            "unit": "ns/iter",
            "extra": "iterations: 1574644\ncpu: 521.6863564081804 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6845.622652285721,
            "unit": "ns/iter",
            "extra": "iterations: 106806\ncpu: 6813.427288729164 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8703.5321916188,
            "unit": "ns/iter",
            "extra": "iterations: 42480\ncpu: 17270.443432203418 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4126.316256650767,
            "unit": "ns/iter",
            "extra": "iterations: 83452\ncpu: 8236.33772707681 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 110678.03279460192,
            "unit": "ns/iter",
            "extra": "iterations: 6373\ncpu: 110668.23238663047 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 155520.1753694522,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 305883.0650246261 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 81974.32793209939,
            "unit": "ns/iter",
            "extra": "iterations: 4212\ncpu: 160759.59283000312 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 2221513.8619633294,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2221233.788343628 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2369767832.9999976,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2615435874.000007 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 831444398.2499995,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 998898695.2499963 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d5c0a28393ea4c8916a0fb7f8d1b6e63ce0cbe19",
          "message": "Updated Version to 0.1.6",
          "timestamp": "2021-08-30T09:55:07Z",
          "tree_id": "727ad4d20f2ef440ca07e748b9dc8e31a3b7221e",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/d5c0a28393ea4c8916a0fb7f8d1b6e63ce0cbe19"
        },
        "date": 1630317801240,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 5.999999643790943e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000000033756e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 13.67300422839355,
            "unit": "ns/iter",
            "extra": "iterations: 51691962\ncpu: 13.522800875695145 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000000172533e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 13.657557347964767,
            "unit": "ns/iter",
            "extra": "iterations: 51465210\ncpu: 13.656916138105723 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.2483376188667306,
            "unit": "ns/iter",
            "extra": "iterations: 215453149\ncpu: 3.248065313726282 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 5.020109480841945,
            "unit": "ns/iter",
            "extra": "iterations: 139411058\ncpu: 5.0198602968783135 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 241.16876263773491,
            "unit": "ns/iter",
            "extra": "iterations: 2899054\ncpu: 241.15612713664544 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 64243.04815992499,
            "unit": "ns/iter",
            "extra": "iterations: 11005\ncpu: 64220.67251249431 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 19294841.428571124,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 19293906.7857143 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10089289208.000025,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10088454406 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000010748408e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 17.716372853691105,
            "unit": "ns/iter",
            "extra": "iterations: 39501092\ncpu: 17.715284352138916 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 19.48966913500793,
            "unit": "ns/iter",
            "extra": "iterations: 35916160\ncpu: 19.489084495669992 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 403.0546850038342,
            "unit": "ns/iter",
            "extra": "iterations: 1730767\ncpu: 403.0292766155133 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 66418.93854009101,
            "unit": "ns/iter",
            "extra": "iterations: 10576\ncpu: 66413.33339636917 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 22467575.783782896,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 22466448.027027022 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 10397527949.999983,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10396741865 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 422.2099692879542,
            "unit": "ns/iter",
            "extra": "iterations: 1689890\ncpu: 422.2076531608561 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 602.7329397984005,
            "unit": "ns/iter",
            "extra": "iterations: 617226\ncpu: 1203.8594728673102 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 293.1733115337377,
            "unit": "ns/iter",
            "extra": "iterations: 1753396\ncpu: 599.7692215563382 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 66440.75486935658,
            "unit": "ns/iter",
            "extra": "iterations: 10525\ncpu: 66436.73045130653 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 56986.25471834901,
            "unit": "ns/iter",
            "extra": "iterations: 6888\ncpu: 91725.2857142858 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 20930.396914131357,
            "unit": "ns/iter",
            "extra": "iterations: 15652\ncpu: 37438.40244058245 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 24498803.44444308,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 24498821.55555556 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 18165174.875001356,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 30587635.80000016 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 9323383.249999927,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 15060617.666666688 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10465458979.000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10464631008.999994 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4699676482.000015,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5335233859 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2242138756.0624986,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2712143855.249999 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.116427773976334,
            "unit": "ns/iter",
            "extra": "iterations: 330963873\ncpu: 2.116146220587659 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 4.316778676250719,
            "unit": "ns/iter",
            "extra": "iterations: 162187312\ncpu: 4.316511078252543 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 72.81998528048874,
            "unit": "ns/iter",
            "extra": "iterations: 9622602\ncpu: 72.81596277181575 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1606.3086103675246,
            "unit": "ns/iter",
            "extra": "iterations: 438634\ncpu: 1606.2024421271497 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 27684.285637439978,
            "unit": "ns/iter",
            "extra": "iterations: 26026\ncpu: 27682.583301314175 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 801810.8754765516,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 801786.5705209635 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 17.43112119463985,
            "unit": "ns/iter",
            "extra": "iterations: 40166710\ncpu: 17.430615751202904 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 19.222124855661026,
            "unit": "ns/iter",
            "extra": "iterations: 36468143\ncpu: 19.221878805290643 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 295.3959236715349,
            "unit": "ns/iter",
            "extra": "iterations: 2369338\ncpu: 295.3854570348317 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 4818.044749686201,
            "unit": "ns/iter",
            "extra": "iterations: 145677\ncpu: 4817.825222924628 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 78405.23514934916,
            "unit": "ns/iter",
            "extra": "iterations: 8939\ncpu: 78404.14900995554 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1471878.3480176905,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 1471817.9911894326 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 305.34363872266636,
            "unit": "ns/iter",
            "extra": "iterations: 2298312\ncpu: 305.29273179620884 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 418.6332775001327,
            "unit": "ns/iter",
            "extra": "iterations: 771942\ncpu: 813.3704099530576 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 209.49797770823318,
            "unit": "ns/iter",
            "extra": "iterations: 1562460\ncpu: 421.0937777607256 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 4951.258408906503,
            "unit": "ns/iter",
            "extra": "iterations: 135630\ncpu: 4949.551493032416 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7725.530183264149,
            "unit": "ns/iter",
            "extra": "iterations: 45290\ncpu: 15415.049392802266 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3824.5082525397124,
            "unit": "ns/iter",
            "extra": "iterations: 103968\ncpu: 7692.713777316053 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 80513.58143039953,
            "unit": "ns/iter",
            "extra": "iterations: 8627\ncpu: 80501.44835980155 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 185333.01088058326,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 354256.7586032386 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 72311.2972972923,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 139698.0533033076 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1522492.197777865,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 1522339.8066666506 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2587865666.249996,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2775200743.000002 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 776186729.999992,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 904119053.7500008 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "id": "68749f06cbac3f08a67a2bafe6284e75bc2dbcf8",
          "message": "Documentation Update",
          "timestamp": "2021-08-30T09:55:20Z",
          "url": "https://github.com/ZigRazor/CXXGraph/pull/50/commits/68749f06cbac3f08a67a2bafe6284e75bc2dbcf8"
        },
        "date": 1630317837912,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999894978e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 16.18753602141765,
            "unit": "ns/iter",
            "extra": "iterations: 46139216\ncpu: 16.182242606809787 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 5.999999643790943e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000001282757e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.08659310677654,
            "unit": "ns/iter",
            "extra": "iterations: 44969434\ncpu: 15.08536058070022 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000001282757e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 4.999999987376214e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 4.999999998478444e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.529947555566528,
            "unit": "ns/iter",
            "extra": "iterations: 201849830\ncpu: 3.5290553080971137 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 5.9482603102159946,
            "unit": "ns/iter",
            "extra": "iterations: 114752930\ncpu: 5.947909826790478 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 284.04094273212127,
            "unit": "ns/iter",
            "extra": "iterations: 2621784\ncpu: 284.0271155060828 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71199.77044800985,
            "unit": "ns/iter",
            "extra": "iterations: 9732\ncpu: 71193.63193588168 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 30760041.476190466,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 30758418.857142873 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 8800486290.000038,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8799786953 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.99999999298484e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 22.595188077300833,
            "unit": "ns/iter",
            "extra": "iterations: 29686969\ncpu: 22.594258005928435 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 22.699858736385707,
            "unit": "ns/iter",
            "extra": "iterations: 30807650\ncpu: 22.6973648103637 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 502.2677150000163,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 502.2465690000004 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 74860.50670966545,
            "unit": "ns/iter",
            "extra": "iterations: 9613\ncpu: 74850.08290856142 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 34156048.39130251,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 34152741.56521751 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 9308383789.000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9307614049.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 516.0039947659943,
            "unit": "ns/iter",
            "extra": "iterations: 1342757\ncpu: 515.950836971992 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 540.7424273826118,
            "unit": "ns/iter",
            "extra": "iterations: 757532\ncpu: 1067.250125407244 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 277.94178398489856,
            "unit": "ns/iter",
            "extra": "iterations: 989616\ncpu: 595.3060954956297 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 76624.40934721287,
            "unit": "ns/iter",
            "extra": "iterations: 9222\ncpu: 76617.92301019306 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 56519.62032473184,
            "unit": "ns/iter",
            "extra": "iterations: 6898\ncpu: 89147.3892432589 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 24322.86052526323,
            "unit": "ns/iter",
            "extra": "iterations: 17496\ncpu: 39770.26200274358 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 32762147.956522435,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 32756592.652174026 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 25803008.74999845,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 41335130.83333324 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 11361980.81250015,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 19528236.974999912 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 8725783836.999994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8724915939.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4598023986.249998,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5311047474.5 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2354480216.8750005,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2899571302.2500005 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.3443972906659853,
            "unit": "ns/iter",
            "extra": "iterations: 309465010\ncpu: 2.3442583056481823 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 4.713649916741694,
            "unit": "ns/iter",
            "extra": "iterations: 141031417\ncpu: 4.713250736181702 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 91.04708490065488,
            "unit": "ns/iter",
            "extra": "iterations: 7088026\ncpu: 91.04101917797735 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2057.3229386380153,
            "unit": "ns/iter",
            "extra": "iterations: 360793\ncpu: 2057.04496484134 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 54471.38089999726,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54471.44130000012 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 865161.8149100156,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 865162.0385604105 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 21.208818578766767,
            "unit": "ns/iter",
            "extra": "iterations: 31073193\ncpu: 21.208638101658757 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 25.02575480580268,
            "unit": "ns/iter",
            "extra": "iterations: 28613883\ncpu: 25.02484972067554 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 372.32251064956944,
            "unit": "ns/iter",
            "extra": "iterations: 1977544\ncpu: 372.3048129396809 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5606.1095661358695,
            "unit": "ns/iter",
            "extra": "iterations: 124993\ncpu: 5605.840007040398 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 100674.81183179055,
            "unit": "ns/iter",
            "extra": "iterations: 7015\ncpu: 100669.16963649183 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1865423.1322312052,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 1865259.432506894 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 362.2297093001289,
            "unit": "ns/iter",
            "extra": "iterations: 1867321\ncpu: 362.1636858365637 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 477.29891732590085,
            "unit": "ns/iter",
            "extra": "iterations: 697994\ncpu: 950.9762562428543 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 234.6220958036978,
            "unit": "ns/iter",
            "extra": "iterations: 1415624\ncpu: 484.92312153508095 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5771.088031841159,
            "unit": "ns/iter",
            "extra": "iterations: 109290\ncpu: 5770.790914081973 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 6826.389538636931,
            "unit": "ns/iter",
            "extra": "iterations: 52670\ncpu: 13583.89453199173 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3988.936217561433,
            "unit": "ns/iter",
            "extra": "iterations: 86164\ncpu: 8332.747841325789 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 108635.42428888143,
            "unit": "ns/iter",
            "extra": "iterations: 5871\ncpu: 108609.45103048524 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 154817.52359389266,
            "unit": "ns/iter",
            "extra": "iterations: 2098\ncpu: 305982.02335558186 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 62492.49829826805,
            "unit": "ns/iter",
            "extra": "iterations: 4848\ncpu: 132863.39480198326 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1738539.5707195483,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 1738462.3349875833 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2122621532.5000055,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2345176973.499994 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 435749711.1875048,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 533499046.0000017 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "id": "d769b7cfa1303a00cff0ffa22756f4cc895b1239",
          "message": "Documentation Update",
          "timestamp": "2021-08-30T09:55:20Z",
          "url": "https://github.com/ZigRazor/CXXGraph/pull/50/commits/d769b7cfa1303a00cff0ffa22756f4cc895b1239"
        },
        "date": 1630317848977,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.99999999995249e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 16.302541368696016,
            "unit": "ns/iter",
            "extra": "iterations: 45247075\ncpu: 16.202331531927754 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 16.921858117469892,
            "unit": "ns/iter",
            "extra": "iterations: 42769804\ncpu: 16.920728909583033 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 0.0000011000000199601345,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.999999998593466e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999997425732e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 4.050291407529627,
            "unit": "ns/iter",
            "extra": "iterations: 181533058\ncpu: 4.050123746607079 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.021159831272194,
            "unit": "ns/iter",
            "extra": "iterations: 113586539\ncpu: 6.020872834236105 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 277.6811997377585,
            "unit": "ns/iter",
            "extra": "iterations: 2534954\ncpu: 277.6688926110692 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 76038.88701269568,
            "unit": "ns/iter",
            "extra": "iterations: 8824\ncpu: 76032.59916137799 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 22832673.3478268,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 22830430.565217398 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 8170364319.000044,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8169694827.000001 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.99999999298484e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.080339973591894,
            "unit": "ns/iter",
            "extra": "iterations: 34864002\ncpu: 20.079681385975118 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 22.082732739153855,
            "unit": "ns/iter",
            "extra": "iterations: 31703604\ncpu: 22.082336538142506 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 456.85799307407433,
            "unit": "ns/iter",
            "extra": "iterations: 1532214\ncpu: 456.84327124017824 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75199.12443729794,
            "unit": "ns/iter",
            "extra": "iterations: 9330\ncpu: 75197.32647374042 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 25355232.060605608,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 25353106.939394 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 10974180019.999949,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10972804769 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 468.0221246654511,
            "unit": "ns/iter",
            "extra": "iterations: 1496565\ncpu: 467.99653339480784 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 555.2916983171506,
            "unit": "ns/iter",
            "extra": "iterations: 629270\ncpu: 1104.8938277686836 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 290.0434575920198,
            "unit": "ns/iter",
            "extra": "iterations: 1145916\ncpu: 627.2148490814374 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75322.9913858045,
            "unit": "ns/iter",
            "extra": "iterations: 9287\ncpu: 75318.49187035653 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 56094.39745454424,
            "unit": "ns/iter",
            "extra": "iterations: 8250\ncpu: 90143.26593939378 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 25092.595754660142,
            "unit": "ns/iter",
            "extra": "iterations: 16524\ncpu: 44034.62170176702 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 25904083.8965524,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 25902808.620689556 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 19559901.02500067,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 32507865.149999678 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 8739522.712500047,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 16932465.824999996 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10377560498.99997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10374822754.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 3760572945.749999,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4631919084 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1944134195.1875017,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2371092640.5 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.3963935990326104,
            "unit": "ns/iter",
            "extra": "iterations: 292160525\ncpu: 2.3962063697688234 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 4.900598319484072,
            "unit": "ns/iter",
            "extra": "iterations: 143208273\ncpu: 4.900481803868969 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 82.64530195549062,
            "unit": "ns/iter",
            "extra": "iterations: 8491682\ncpu: 82.64142910674248 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1821.1261049016975,
            "unit": "ns/iter",
            "extra": "iterations: 384989\ncpu: 1821.0616692944582 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 30237.535462043223,
            "unit": "ns/iter",
            "extra": "iterations: 23645\ncpu: 30235.217593571724 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 861861.7249417523,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 861828.3962703989 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.75509840133625,
            "unit": "ns/iter",
            "extra": "iterations: 35416592\ncpu: 19.753398717753427 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.761474230281156,
            "unit": "ns/iter",
            "extra": "iterations: 32168977\ncpu: 21.760650424164854 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.90023566301136,
            "unit": "ns/iter",
            "extra": "iterations: 2088151\ncpu: 334.88065183025617 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5432.709620868632,
            "unit": "ns/iter",
            "extra": "iterations: 128346\ncpu: 5432.4477584030055 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88240.01508675065,
            "unit": "ns/iter",
            "extra": "iterations: 7954\ncpu: 88233.21523761742 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1640972.794457233,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 1640803.5334873472 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.1604723186212,
            "unit": "ns/iter",
            "extra": "iterations: 2023888\ncpu: 345.1380807633618 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 384.7904527668233,
            "unit": "ns/iter",
            "extra": "iterations: 773334\ncpu: 753.6256520468554 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 212.78273615066962,
            "unit": "ns/iter",
            "extra": "iterations: 1585640\ncpu: 437.67221374334895 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5971.26616083326,
            "unit": "ns/iter",
            "extra": "iterations: 110313\ncpu: 5970.7484974572635 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7311.724778722993,
            "unit": "ns/iter",
            "extra": "iterations: 47678\ncpu: 14593.98498259154 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3676.3360955871726,
            "unit": "ns/iter",
            "extra": "iterations: 96268\ncpu: 7351.9717351559175 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91211.44143790801,
            "unit": "ns/iter",
            "extra": "iterations: 7650\ncpu: 91141.98666666837 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 176513.51299133856,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 335467.15522984543 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 65077.20579953904,
            "unit": "ns/iter",
            "extra": "iterations: 5328\ncpu: 128160.41066066471 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1675759.8815165455,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 1675760.7867298739 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1759809196.0000205,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 1923423981.5000117 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 717385370.8749931,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 917381084.4999994 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46abaa45e5a93e4a035f33fcf1319b73f119eb9e",
          "message": "Documentation Update (#50)\n\n* Updated Doxygen Documentation\r\n\r\n* [CodeFactor] Apply fixes to commit 68749f0\r\n\r\nCo-authored-by: codefactor-io <support@codefactor.io>",
          "timestamp": "2021-08-30T12:09:47+02:00",
          "tree_id": "9ee65018370bc3f8cfa6ed71c785466dbe7d6026",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/46abaa45e5a93e4a035f33fcf1319b73f119eb9e"
        },
        "date": 1630318679008,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.23242964753148,
            "unit": "ns/iter",
            "extra": "iterations: 41979266\ncpu: 15.231250589279005 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000000172533e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000756402e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.460854185695814,
            "unit": "ns/iter",
            "extra": "iterations: 45415558\ncpu: 15.45985860175934 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 7.999999809271685e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999997425732e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.434915660648347,
            "unit": "ns/iter",
            "extra": "iterations: 207808332\ncpu: 3.4346918438284755 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 5.887997096657422,
            "unit": "ns/iter",
            "extra": "iterations: 119175741\ncpu: 5.887639540667927 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 283.6901654410979,
            "unit": "ns/iter",
            "extra": "iterations: 2461178\ncpu: 283.65391694546264 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 70693.75303478575,
            "unit": "ns/iter",
            "extra": "iterations: 9803\ncpu: 70689.6005304498 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 28985900.857143015,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 28984681.57142859 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 8180347541.000003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8179898661.999999 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.99999999298484e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.512268035716126,
            "unit": "ns/iter",
            "extra": "iterations: 32550647\ncpu: 20.511128365589798 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 27.190041925837285,
            "unit": "ns/iter",
            "extra": "iterations: 25374806\ncpu: 27.188618781952457 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 472.88584749688016,
            "unit": "ns/iter",
            "extra": "iterations: 1478855\ncpu: 472.85934253189066 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75224.17943548116,
            "unit": "ns/iter",
            "extra": "iterations: 8432\ncpu: 75219.16413662225 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 30970102.962963134,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 30968591.814814825 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 9182747678.999989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9182316984 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 504.8883963690068,
            "unit": "ns/iter",
            "extra": "iterations: 1423744\ncpu: 504.85517831857464 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 478.3187771538926,
            "unit": "ns/iter",
            "extra": "iterations: 692810\ncpu: 948.1587159538699 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 304.11081218601987,
            "unit": "ns/iter",
            "extra": "iterations: 1191956\ncpu: 651.3908483199024 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 76962.63603603633,
            "unit": "ns/iter",
            "extra": "iterations: 9435\ncpu: 76935.97890831983 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 58980.50593529625,
            "unit": "ns/iter",
            "extra": "iterations: 7666\ncpu: 93439.02908948621 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 26264.279051859136,
            "unit": "ns/iter",
            "extra": "iterations: 17856\ncpu: 41218.154905914 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 32338917.090909675,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 32333287.954545524 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 24566223.000000775,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 39300608.999999866 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 10990420.062499594,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 17684513.024999868 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 8427311594.999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8420194197.000001 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4448631723.5,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5051916467 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2201138148.3124986,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2593911595.499999 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.4364405684149424,
            "unit": "ns/iter",
            "extra": "iterations: 278293041\ncpu: 2.436105353421311 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 4.726898609649649,
            "unit": "ns/iter",
            "extra": "iterations: 147745707\ncpu: 4.726464830548333 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 96.07824615334549,
            "unit": "ns/iter",
            "extra": "iterations: 7230119\ncpu: 96.0706403310931 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1912.8712513991802,
            "unit": "ns/iter",
            "extra": "iterations: 359134\ncpu: 1912.7465235817158 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 51940.820356203134,
            "unit": "ns/iter",
            "extra": "iterations: 15553\ncpu: 51938.364302707116 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 750938.1854748431,
            "unit": "ns/iter",
            "extra": "iterations: 895\ncpu: 750939.6391061412 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 20.957738039985053,
            "unit": "ns/iter",
            "extra": "iterations: 33708801\ncpu: 20.95718948888139 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 23.799483761397894,
            "unit": "ns/iter",
            "extra": "iterations: 29431352\ncpu: 23.799317170342547 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 366.51354464599564,
            "unit": "ns/iter",
            "extra": "iterations: 1914225\ncpu: 366.50883830270703 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6078.229339084723,
            "unit": "ns/iter",
            "extra": "iterations: 119622\ncpu: 6078.082886091156 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 107432.08870490556,
            "unit": "ns/iter",
            "extra": "iterations: 6764\ncpu: 107068.00059136616 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1767196.473170776,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 1767079.392682928 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 362.1386753561145,
            "unit": "ns/iter",
            "extra": "iterations: 1819523\ncpu: 362.1262973867422 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 502.0988467128998,
            "unit": "ns/iter",
            "extra": "iterations: 938448\ncpu: 1000.8352023767014 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 205.8703255756627,
            "unit": "ns/iter",
            "extra": "iterations: 1523824\ncpu: 443.9344891535869 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5843.028295527653,
            "unit": "ns/iter",
            "extra": "iterations: 118676\ncpu: 5841.991009134091 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7909.425958346746,
            "unit": "ns/iter",
            "extra": "iterations: 43982\ncpu: 15736.934427720174 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3826.5022641871356,
            "unit": "ns/iter",
            "extra": "iterations: 83032\ncpu: 7704.742448694584 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 107251.4241866157,
            "unit": "ns/iter",
            "extra": "iterations: 6516\ncpu: 107238.81230816653 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 134421.72437357364,
            "unit": "ns/iter",
            "extra": "iterations: 2634\ncpu: 264410.04593774024 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 67084.35503246686,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 131923.18528138314 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1662513.271428506,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 1662391.8690476508 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2739549771.750006,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2988409452.999998 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 610587898.9375029,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 798432141.750005 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b2c7c21e38fbd97ce6f3f51ba5e2cc69264c2cb",
          "message": "Merge branch 'master' of https://github.com/ZigRazor/CXXGraph",
          "timestamp": "2021-09-03T07:46:10Z",
          "tree_id": "d4c2c57363f7f030a81dc655cf017aea2392434f",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/3b2c7c21e38fbd97ce6f3f51ba5e2cc69264c2cb"
        },
        "date": 1630655663250,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000062512e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.384223953748558,
            "unit": "ns/iter",
            "extra": "iterations: 45142464\ncpu: 15.382000747677397 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000756402e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.488728706330894,
            "unit": "ns/iter",
            "extra": "iterations: 44952737\ncpu: 15.488034799749792 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 9.000000000813912e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.6808659921991755,
            "unit": "ns/iter",
            "extra": "iterations: 190173399\ncpu: 3.680741426933219 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 5.688709958320187,
            "unit": "ns/iter",
            "extra": "iterations: 123043133\ncpu: 5.688503632299416 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 265.51745256575657,
            "unit": "ns/iter",
            "extra": "iterations: 2681239\ncpu: 265.5081714088151 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71892.15295445544,
            "unit": "ns/iter",
            "extra": "iterations: 9748\ncpu: 71891.07468198608 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21857812.920000013,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21857413.71999999 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10448472885.99999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10447837925 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999975221272e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.077128579553055,
            "unit": "ns/iter",
            "extra": "iterations: 34867231\ncpu: 20.076195812624118 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 22.08434504411286,
            "unit": "ns/iter",
            "extra": "iterations: 31692852\ncpu: 22.083815902715237 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 456.9297990565853,
            "unit": "ns/iter",
            "extra": "iterations: 1531874\ncpu: 456.91428342017815 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75224.07650214812,
            "unit": "ns/iter",
            "extra": "iterations: 9320\ncpu: 75222.55493562251 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 25459739.303030483,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 25458479.66666673 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 10998036103.999994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10997596480.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 469.0964023772502,
            "unit": "ns/iter",
            "extra": "iterations: 1492152\ncpu: 469.06208951902744 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 506.1774028277709,
            "unit": "ns/iter",
            "extra": "iterations: 696804\ncpu: 1011.1170960557065 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 274.51372636920433,
            "unit": "ns/iter",
            "extra": "iterations: 1241388\ncpu: 557.4159287829441 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75082.65879575246,
            "unit": "ns/iter",
            "extra": "iterations: 9317\ncpu: 75079.81506922797 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 59862.24539877482,
            "unit": "ns/iter",
            "extra": "iterations: 6846\ncpu: 95345.28863570008 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 24161.78122852221,
            "unit": "ns/iter",
            "extra": "iterations: 17460\ncpu: 34105.55252004575 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 26184337.793103136,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 26154796.620689854 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 15913653.524999917,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 26653411.849999998 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 8946114.255208453,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 16082590.979166612 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10237359609.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10236406960.000004 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 3602728969.4999924,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4622164076.000001 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1734156589.874999,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2370099222.750001 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.3963887951763367,
            "unit": "ns/iter",
            "extra": "iterations: 292262237\ncpu: 2.396174929024457 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 4.909251929284121,
            "unit": "ns/iter",
            "extra": "iterations: 142980373\ncpu: 4.908935613141798 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 82.49660599075199,
            "unit": "ns/iter",
            "extra": "iterations: 8482004\ncpu: 82.49084131533078 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1809.4184134269115,
            "unit": "ns/iter",
            "extra": "iterations: 384426\ncpu: 1809.4075036548136 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 30128.89725158401,
            "unit": "ns/iter",
            "extra": "iterations: 23650\ncpu: 30126.795433403746 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 846522.4232558084,
            "unit": "ns/iter",
            "extra": "iterations: 860\ncpu: 846466.3767441865 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.744888858469086,
            "unit": "ns/iter",
            "extra": "iterations: 35445751\ncpu: 19.74366730161818 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.751436686476328,
            "unit": "ns/iter",
            "extra": "iterations: 32183953\ncpu: 21.750709584991274 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 337.7775661499949,
            "unit": "ns/iter",
            "extra": "iterations: 2077022\ncpu: 337.7544234004245 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5477.845504811977,
            "unit": "ns/iter",
            "extra": "iterations: 128949\ncpu: 5477.679710583227 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88417.04076224162,
            "unit": "ns/iter",
            "extra": "iterations: 7924\ncpu: 88414.0395002528 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1629762.169767578,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 1629666.5651162546 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.1176563841221,
            "unit": "ns/iter",
            "extra": "iterations: 2024854\ncpu: 345.08989388865285 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 459.56667770763994,
            "unit": "ns/iter",
            "extra": "iterations: 769860\ncpu: 916.6831164107492 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 214.18178957108495,
            "unit": "ns/iter",
            "extra": "iterations: 1510876\ncpu: 432.5331145640106 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5639.0467893944615,
            "unit": "ns/iter",
            "extra": "iterations: 122656\ncpu: 5637.705729846158 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7245.701015250595,
            "unit": "ns/iter",
            "extra": "iterations: 48658\ncpu: 14481.120555714882 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3500.006594246693,
            "unit": "ns/iter",
            "extra": "iterations: 92884\ncpu: 7434.617630593112 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91205.49018843216,
            "unit": "ns/iter",
            "extra": "iterations: 7695\ncpu: 91201.21819363283 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 272620.20714282524,
            "unit": "ns/iter",
            "extra": "iterations: 1050\ncpu: 505712.62761905533 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 64862.88063173171,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 133354.94074437002 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1683842.4489309536,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 1683459.9999999988 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2330305209.500011,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2495362595.500005 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 429768458.1875032,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 632442498.5000018 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32eadf7aaf90ca224aaa5e37f4f25b66bd314c02",
          "message": "Split End, need to rework the creation of the packages",
          "timestamp": "2021-09-07T12:09:31Z",
          "tree_id": "6f33fd24740dffd82b514ff98ba184249075ddd8",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/32eadf7aaf90ca224aaa5e37f4f25b66bd314c02"
        },
        "date": 1631017083641,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000062512e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.489983053795783,
            "unit": "ns/iter",
            "extra": "iterations: 45126328\ncpu: 15.489433751401178 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000756402e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.517399744758759,
            "unit": "ns/iter",
            "extra": "iterations: 45116294\ncpu: 15.516818978970214 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 7.000001005508238e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.5981534223331035,
            "unit": "ns/iter",
            "extra": "iterations: 193977327\ncpu: 3.5980476109973414 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.0862159830151725,
            "unit": "ns/iter",
            "extra": "iterations: 112860199\ncpu: 6.085903330721577 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 260.8178108593784,
            "unit": "ns/iter",
            "extra": "iterations: 2683464\ncpu: 260.8018620708159 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 72043.89579261106,
            "unit": "ns/iter",
            "extra": "iterations: 9721\ncpu: 72040.53152967793 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21608865.680000234,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21607569.600000005 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10444734067.000013,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10444053259.999998 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.079087545607283,
            "unit": "ns/iter",
            "extra": "iterations: 34865085\ncpu: 20.077968948017844 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 21.948268393653212,
            "unit": "ns/iter",
            "extra": "iterations: 31964482\ncpu: 21.946894462422332 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 477.3493074358031,
            "unit": "ns/iter",
            "extra": "iterations: 1497695\ncpu: 477.3323567214955 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75542.64039354959,
            "unit": "ns/iter",
            "extra": "iterations: 9249\ncpu: 75538.87944642665 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26037544.27272606,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26036502.1212121 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11587181493.000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11586444303 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 467.14089102337243,
            "unit": "ns/iter",
            "extra": "iterations: 1498165\ncpu: 467.1153270834647 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 642.9258560556435,
            "unit": "ns/iter",
            "extra": "iterations: 525842\ncpu: 1280.816741530732 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 333.63012425178783,
            "unit": "ns/iter",
            "extra": "iterations: 1067912\ncpu: 716.1527747604625 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75879.5577467835,
            "unit": "ns/iter",
            "extra": "iterations: 9178\ncpu: 75863.58803660871 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 60137.664607443,
            "unit": "ns/iter",
            "extra": "iterations: 6394\ncpu: 96897.4832655615 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 24374.390967979405,
            "unit": "ns/iter",
            "extra": "iterations: 17676\ncpu: 40896.91502602406 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 24342152.185184844,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 24338421.444444373 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 16524427.692307707,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 28249968.192307897 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 9252994.161458971,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 15788103.874999875 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10084754025.000051,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10083112063.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 3667951992.2500105,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4614667833.5 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1914123192.1250038,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2314037295.249999 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.4803434991997504,
            "unit": "ns/iter",
            "extra": "iterations: 283205900\ncpu: 2.473928230308774 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.025312160497088,
            "unit": "ns/iter",
            "extra": "iterations: 139437406\ncpu: 5.02511566372657 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 85.47899216222007,
            "unit": "ns/iter",
            "extra": "iterations: 8186754\ncpu: 85.47310643510214 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1831.6213632272775,
            "unit": "ns/iter",
            "extra": "iterations: 387947\ncpu: 1831.5477191472185 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 30360.981099206663,
            "unit": "ns/iter",
            "extra": "iterations: 22962\ncpu: 30360.21026043014 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 858391.5030230954,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 858364.2769044728 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.751589214578253,
            "unit": "ns/iter",
            "extra": "iterations: 35454306\ncpu: 19.750526156117694 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.752664328860227,
            "unit": "ns/iter",
            "extra": "iterations: 32187468\ncpu: 21.752049555435615 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.63279667968015,
            "unit": "ns/iter",
            "extra": "iterations: 2091852\ncpu: 334.6303591267404 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5444.260580750896,
            "unit": "ns/iter",
            "extra": "iterations: 128110\ncpu: 5444.087994692125 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88483.8092529376,
            "unit": "ns/iter",
            "extra": "iterations: 7911\ncpu: 88480.5252180508 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1614282.782313029,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 1614270.0839002465 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.8957012464565,
            "unit": "ns/iter",
            "extra": "iterations: 2022028\ncpu: 345.84640222587353 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 516.2417907067826,
            "unit": "ns/iter",
            "extra": "iterations: 657852\ncpu: 1029.7542167539552 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 250.29427036868836,
            "unit": "ns/iter",
            "extra": "iterations: 1345104\ncpu: 501.70599596759325 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5627.573684946851,
            "unit": "ns/iter",
            "extra": "iterations: 121497\ncpu: 5627.108266047737 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8200.209637677326,
            "unit": "ns/iter",
            "extra": "iterations: 42614\ncpu: 16365.16271647853 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4106.2711528059945,
            "unit": "ns/iter",
            "extra": "iterations: 81384\ncpu: 8209.371817556303 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91291.58978388982,
            "unit": "ns/iter",
            "extra": "iterations: 7635\ncpu: 91289.60091683085 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 234174.60475352439,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 440455.2975352029 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 102191.4041666605,
            "unit": "ns/iter",
            "extra": "iterations: 3000\ncpu: 193730.65466667005 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1701582.3293555786,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 1701426.3389020995 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3185649571.7500196,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3356574350 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 656609378.8750038,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 757661639.4999968 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76756cc7ea54b76489e01960f412416191a27f8e",
          "message": "Updated Doxyfile for Documentation of splitted Files",
          "timestamp": "2021-09-09T09:24:41Z",
          "tree_id": "2979475c64ddc193d1c083ee1d88a5a4b102b518",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/76756cc7ea54b76489e01960f412416191a27f8e"
        },
        "date": 1631179991888,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.52154094791473,
            "unit": "ns/iter",
            "extra": "iterations: 44966893\ncpu: 15.520371821108476 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 21.746599117177546,
            "unit": "ns/iter",
            "extra": "iterations: 32182232\ncpu: 21.746341273035384 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 7.999999809271685e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999997425732e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.518110805188871,
            "unit": "ns/iter",
            "extra": "iterations: 198344881\ncpu: 3.5180328147717606 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.102050475815723,
            "unit": "ns/iter",
            "extra": "iterations: 115350251\ncpu: 6.102005413061477 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 260.77837741987054,
            "unit": "ns/iter",
            "extra": "iterations: 2684379\ncpu: 260.77420476020717 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71871.67420349344,
            "unit": "ns/iter",
            "extra": "iterations: 9730\ncpu: 71869.578622816 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21658789.59999986,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21657206.999999978 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10574798186.00001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10574114945 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.075761941387437,
            "unit": "ns/iter",
            "extra": "iterations: 34872958\ncpu: 20.07543211562389 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 21.897132918280235,
            "unit": "ns/iter",
            "extra": "iterations: 31973766\ncpu: 21.896716889715062 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 457.0357557678361,
            "unit": "ns/iter",
            "extra": "iterations: 1531641\ncpu: 457.0237418559586 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75695.7774656984,
            "unit": "ns/iter",
            "extra": "iterations: 9257\ncpu: 75693.85351625827 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26017058.242425237,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26016973.999999944 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11885417924.999956,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11882160804.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 467.0597652159484,
            "unit": "ns/iter",
            "extra": "iterations: 1498313\ncpu: 467.0442157279515 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 590.6260548117378,
            "unit": "ns/iter",
            "extra": "iterations: 572140\ncpu: 1177.4548974027368 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 315.5058312404551,
            "unit": "ns/iter",
            "extra": "iterations: 1030484\ncpu: 687.2322801712536 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75601.45007032374,
            "unit": "ns/iter",
            "extra": "iterations: 9243\ncpu: 75594.60348371735 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 65749.96877648945,
            "unit": "ns/iter",
            "extra": "iterations: 7078\ncpu: 106141.75035320726 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 22686.547816996477,
            "unit": "ns/iter",
            "extra": "iterations: 20568\ncpu: 39922.18159276549 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 26844618.89655189,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 26841594.27586214 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 19646648.750000395,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 32826725.44999994 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 8804518.924999982,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 15630718.549999934 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10218302270.000038,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10217482932.000004 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 5582106736.249997,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 6039674532.000003 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1730248431.8124948,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2920174852.000001 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.5092192783211074,
            "unit": "ns/iter",
            "extra": "iterations: 278998465\ncpu: 2.5089050543701195 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.087681630301185,
            "unit": "ns/iter",
            "extra": "iterations: 138114551\ncpu: 5.087538690981257 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 85.46561348904102,
            "unit": "ns/iter",
            "extra": "iterations: 8195452\ncpu: 85.46383591777462 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1756.2658277281057,
            "unit": "ns/iter",
            "extra": "iterations: 389222\ncpu: 1756.2397449270634 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 30459.1619092981,
            "unit": "ns/iter",
            "extra": "iterations: 23087\ncpu: 30455.187941265725 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 882071.6588380808,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 882022.3794808519 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.744202438108942,
            "unit": "ns/iter",
            "extra": "iterations: 35460596\ncpu: 19.743364804133595 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.74725879183769,
            "unit": "ns/iter",
            "extra": "iterations: 32193013\ncpu: 21.746541182709272 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.6046238165896,
            "unit": "ns/iter",
            "extra": "iterations: 2092038\ncpu: 334.595732486696 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5435.007743078971,
            "unit": "ns/iter",
            "extra": "iterations: 128631\ncpu: 5434.779625440299 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88879.99456452546,
            "unit": "ns/iter",
            "extra": "iterations: 7911\ncpu: 88875.27417519923 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1633570.8127854138,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 1633544.1164383711 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.76631060958994,
            "unit": "ns/iter",
            "extra": "iterations: 2024020\ncpu: 345.7154736613255 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 495.37416512801434,
            "unit": "ns/iter",
            "extra": "iterations: 701904\ncpu: 988.8879462148757 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 244.5744137769605,
            "unit": "ns/iter",
            "extra": "iterations: 1444672\ncpu: 494.85433164067575 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5623.924647715431,
            "unit": "ns/iter",
            "extra": "iterations: 122770\ncpu: 5623.772159322241 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7977.643461362774,
            "unit": "ns/iter",
            "extra": "iterations: 43740\ncpu: 15935.78102423404 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3695.6274359654444,
            "unit": "ns/iter",
            "extra": "iterations: 82924\ncpu: 8443.18326419352 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91160.79568063245,
            "unit": "ns/iter",
            "extra": "iterations: 7640\ncpu: 91154.90497382193 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 955187.528985482,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 1707830.983091789 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 1390304.0848213825,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 2403925.0142856813 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1715132.4595239374,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 1715054.9023809736 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3897778977.999991,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4070945135.5000057 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 912263257.8749971,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1048060818.4999993 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "id": "05270106d03e204d263fd8f6d4f8c9620a2e050e",
          "message": "Documentation Update",
          "timestamp": "2021-09-09T09:24:51Z",
          "url": "https://github.com/ZigRazor/CXXGraph/pull/52/commits/05270106d03e204d263fd8f6d4f8c9620a2e050e"
        },
        "date": 1631180021122,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000062512e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.466761418540496,
            "unit": "ns/iter",
            "extra": "iterations: 45192422\ncpu: 15.46575346194103 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999999119823e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999999119823e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.475663508340045,
            "unit": "ns/iter",
            "extra": "iterations: 45144798\ncpu: 15.474978025153643 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.4729094663002886,
            "unit": "ns/iter",
            "extra": "iterations: 202730133\ncpu: 3.4727802205900997 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.038472194565004,
            "unit": "ns/iter",
            "extra": "iterations: 113105999\ncpu: 6.038217725303854 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 263.45589853433796,
            "unit": "ns/iter",
            "extra": "iterations: 2657372\ncpu: 263.4427648819961 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 72043.5760008238,
            "unit": "ns/iter",
            "extra": "iterations: 9717\ncpu: 72041.2810538232 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21607626.439999875,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21606098.359999992 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10461301047.999996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10460675523 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000010748408e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.081945328368516,
            "unit": "ns/iter",
            "extra": "iterations: 34852481\ncpu: 20.08103009940668 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 22.009935008735276,
            "unit": "ns/iter",
            "extra": "iterations: 31872745\ncpu: 22.00866037738509 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 461.35765282120894,
            "unit": "ns/iter",
            "extra": "iterations: 1517754\ncpu: 461.3459229888367 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75567.94984900748,
            "unit": "ns/iter",
            "extra": "iterations: 9272\ncpu: 75562.92267040578 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26062107.93939395,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26060895.87878783 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11617838931.999983,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11617179067.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 467.07125932262346,
            "unit": "ns/iter",
            "extra": "iterations: 1498639\ncpu: 467.04530310501787 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 648.4006611458458,
            "unit": "ns/iter",
            "extra": "iterations: 533014\ncpu: 1291.330372185341 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 289.4633946378889,
            "unit": "ns/iter",
            "extra": "iterations: 962680\ncpu: 649.1481769643103 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75369.43979734971,
            "unit": "ns/iter",
            "extra": "iterations: 9277\ncpu: 75350.08407890514 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 58948.25632622054,
            "unit": "ns/iter",
            "extra": "iterations: 6560\ncpu: 94041.33185975613 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 24902.066303727577,
            "unit": "ns/iter",
            "extra": "iterations: 21032\ncpu: 35678.657712057786 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 24321353.111110546,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 24319834.185185127 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 17840776.346153356,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 30102074.038461603 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 9376639.578124883,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 15939653.729166688 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10379095210.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10378505760.000004 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4445979688.500003,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4835831138.999998 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1604787092.2499995,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2314862882.500001 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.547328630601934,
            "unit": "ns/iter",
            "extra": "iterations: 281778795\ncpu: 2.5471589230126415 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.040795600896626,
            "unit": "ns/iter",
            "extra": "iterations: 139375861\ncpu: 5.040658956000989 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 85.43088794416019,
            "unit": "ns/iter",
            "extra": "iterations: 8146965\ncpu: 85.42931410654236 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1822.8267126718388,
            "unit": "ns/iter",
            "extra": "iterations: 371262\ncpu: 1822.7215820633423 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 31344.059961928768,
            "unit": "ns/iter",
            "extra": "iterations: 22064\ncpu: 31342.569570340685 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 828012.7861409842,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 827971.1063321496 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.755735460744738,
            "unit": "ns/iter",
            "extra": "iterations: 35441137\ncpu: 19.754794717788176 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.762890842068078,
            "unit": "ns/iter",
            "extra": "iterations: 32170571\ncpu: 21.76230844643695 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.8585327772955,
            "unit": "ns/iter",
            "extra": "iterations: 2090562\ncpu: 334.8400047451339 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5436.452044209427,
            "unit": "ns/iter",
            "extra": "iterations: 128118\ncpu: 5436.222498009666 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 89273.62998729355,
            "unit": "ns/iter",
            "extra": "iterations: 7870\ncpu: 89271.96874205917 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1599360.504566226,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 1599321.4566210096 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 346.1510193046661,
            "unit": "ns/iter",
            "extra": "iterations: 2019563\ncpu: 346.13229198593103 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 510.12134268509084,
            "unit": "ns/iter",
            "extra": "iterations: 679802\ncpu: 1019.1609395088661 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 248.41858206643576,
            "unit": "ns/iter",
            "extra": "iterations: 1323440\ncpu: 513.5179517016394 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5621.206932043849,
            "unit": "ns/iter",
            "extra": "iterations: 122417\ncpu: 5620.688858573485 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8478.748148955186,
            "unit": "ns/iter",
            "extra": "iterations: 41328\ncpu: 16919.77710027074 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4263.381521815833,
            "unit": "ns/iter",
            "extra": "iterations: 84984\ncpu: 8704.74149251626 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91367.43875661756,
            "unit": "ns/iter",
            "extra": "iterations: 7560\ncpu: 91362.79867725061 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 401784.9035433178,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 728518.2414698418 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 86462.25365120442,
            "unit": "ns/iter",
            "extra": "iterations: 3492\ncpu: 164259.17153492983 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1713394.470449126,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 1713284.8061465563 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3294893886.7500033,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3468538391.000001 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1356018060.4374921,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1471390617.999999 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "id": "fef37d5486cdc3f011f1033c61be9a760ebb42d0",
          "message": "Documentation Update",
          "timestamp": "2021-09-09T09:24:51Z",
          "url": "https://github.com/ZigRazor/CXXGraph/pull/52/commits/fef37d5486cdc3f011f1033c61be9a760ebb42d0"
        },
        "date": 1631180067060,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.00000000020129e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.48587191188233,
            "unit": "ns/iter",
            "extra": "iterations: 45448400\ncpu: 15.477308706137064 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 14.660482660982062,
            "unit": "ns/iter",
            "extra": "iterations: 46516128\ncpu: 14.659345635991029 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000001282757e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.4399782574857674,
            "unit": "ns/iter",
            "extra": "iterations: 203799798\ncpu: 3.439700293520409 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 5.913276064752011,
            "unit": "ns/iter",
            "extra": "iterations: 121712927\ncpu: 5.912886730593537 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 303.3024149491183,
            "unit": "ns/iter",
            "extra": "iterations: 2359470\ncpu: 303.2751338224263 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 79985.07449823084,
            "unit": "ns/iter",
            "extra": "iterations: 8470\ncpu: 79981.39291617475 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 29192153.899998628,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 29188124.24999997 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 8530311566.000023,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8529775261.000001 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.99999999298484e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 21.537690663676162,
            "unit": "ns/iter",
            "extra": "iterations: 32008391\ncpu: 21.536451488611235 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 28.67647882758302,
            "unit": "ns/iter",
            "extra": "iterations: 23670491\ncpu: 28.6748004509073 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 475.530657914656,
            "unit": "ns/iter",
            "extra": "iterations: 1438454\ncpu: 475.50938368553886 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 74763.35723444905,
            "unit": "ns/iter",
            "extra": "iterations: 9358\ncpu: 74759.85392177787 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 32095041.600000516,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 32086288.840000067 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 9304199695.999954,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9303603787 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 494.767993126442,
            "unit": "ns/iter",
            "extra": "iterations: 1410622\ncpu: 494.6977475184692 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 495.32463879285945,
            "unit": "ns/iter",
            "extra": "iterations: 671360\ncpu: 985.3772298021954 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 278.43346191593065,
            "unit": "ns/iter",
            "extra": "iterations: 1061704\ncpu: 552.0985594855048 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 74761.86154495794,
            "unit": "ns/iter",
            "extra": "iterations: 9476\ncpu: 74751.02638243978 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 58179.800841258,
            "unit": "ns/iter",
            "extra": "iterations: 8202\ncpu: 92049.4341624 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 23704.554103926646,
            "unit": "ns/iter",
            "extra": "iterations: 13548\ncpu: 41880.944936521846 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 32790627.85714175,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 32787307.476190396 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 22906597.730770253,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 36247574.0384613 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 12083620.256250072,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 20027968.475000054 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 8548244536.99996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8547031457.000003 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4769841783.499985,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5255107325.499999 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2249239388.8124943,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2699306382.7500005 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.3322113751315636,
            "unit": "ns/iter",
            "extra": "iterations: 292803243\ncpu: 2.3315288417075215 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 4.769039265826706,
            "unit": "ns/iter",
            "extra": "iterations: 142595979\ncpu: 4.769054687018918 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 84.98136561370082,
            "unit": "ns/iter",
            "extra": "iterations: 8414444\ncpu: 84.97577308732427 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1925.484624954772,
            "unit": "ns/iter",
            "extra": "iterations: 362503\ncpu: 1925.3878202387195 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 49742.05286217192,
            "unit": "ns/iter",
            "extra": "iterations: 13923\ncpu: 49737.32500179571 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 850656.4918415032,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 830686.7878787755 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 20.89408849454818,
            "unit": "ns/iter",
            "extra": "iterations: 33602997\ncpu: 20.890446825323504 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 25.02335881180943,
            "unit": "ns/iter",
            "extra": "iterations: 28672306\ncpu: 25.021141724701366 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 371.661973737661,
            "unit": "ns/iter",
            "extra": "iterations: 1831976\ncpu: 371.56014489272496 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5984.435622899432,
            "unit": "ns/iter",
            "extra": "iterations: 106847\ncpu: 5984.448033168883 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 106323.96403416604,
            "unit": "ns/iter",
            "extra": "iterations: 6673\ncpu: 106323.02457665335 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1748120.9593908142,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 1747983.8147208227 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 364.69854882414955,
            "unit": "ns/iter",
            "extra": "iterations: 1898805\ncpu: 364.67087562965986 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 458.2357930271525,
            "unit": "ns/iter",
            "extra": "iterations: 859050\ncpu: 907.7106978639446 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 249.07905672811816,
            "unit": "ns/iter",
            "extra": "iterations: 1406392\ncpu: 508.134238533779 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6057.4753185185255,
            "unit": "ns/iter",
            "extra": "iterations: 118125\ncpu: 6057.329396825331 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7068.146492520896,
            "unit": "ns/iter",
            "extra": "iterations: 39316\ncpu: 13954.294104181221 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3792.899382589842,
            "unit": "ns/iter",
            "extra": "iterations: 93212\ncpu: 7564.787355705448 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 105594.49480538559,
            "unit": "ns/iter",
            "extra": "iterations: 6449\ncpu: 105502.60071328776 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 122829.00275189313,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 242339.41617272588 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 91850.93238054353,
            "unit": "ns/iter",
            "extra": "iterations: 4688\ncpu: 174877.19752559808 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1675509.8396947861,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 1675434.7531806442 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 481128441.00000983,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 643666777.9999983 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1264853128.9374957,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1540370853.2500029 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2b41ce41c3207e4d93d34ee8bf030c552717244",
          "message": "Modified Debian Packages for Splitted Files",
          "timestamp": "2021-09-09T09:28:29Z",
          "tree_id": "dd365191ee0e2bc3a94875452e12ffea2d42a0b6",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/e2b41ce41c3207e4d93d34ee8bf030c552717244"
        },
        "date": 1631180195029,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999894978e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 13.745402919003041,
            "unit": "ns/iter",
            "extra": "iterations: 50746713\ncpu: 13.718899212250456 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000000172533e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000756402e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 13.693969856121758,
            "unit": "ns/iter",
            "extra": "iterations: 50867244\ncpu: 13.693515929426015 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999997425732e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.0545961961945545,
            "unit": "ns/iter",
            "extra": "iterations: 228629829\ncpu: 3.0544190102158546 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 5.689427203169971,
            "unit": "ns/iter",
            "extra": "iterations: 123310040\ncpu: 5.689284870883181 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 244.64841243135024,
            "unit": "ns/iter",
            "extra": "iterations: 2939117\ncpu: 244.63988333911175 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 63532.4593414585,
            "unit": "ns/iter",
            "extra": "iterations: 10994\ncpu: 63530.48717482258 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 19109699.28571404,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 19108705.07142854 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10104292206.999987,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10102587312 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 17.731868905549998,
            "unit": "ns/iter",
            "extra": "iterations: 39491466\ncpu: 17.730730203836902 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 19.427279356492924,
            "unit": "ns/iter",
            "extra": "iterations: 36025080\ncpu: 19.425839720550226 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 412.11663157554557,
            "unit": "ns/iter",
            "extra": "iterations: 1733107\ncpu: 412.08681345121835 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 66911.96918526916,
            "unit": "ns/iter",
            "extra": "iterations: 10482\ncpu: 66908.96136233519 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 22989791.78947335,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 22988675.210526247 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11044953294.00001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11044051995.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 412.1467515340494,
            "unit": "ns/iter",
            "extra": "iterations: 1660630\ncpu: 412.1258829480349 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 607.5381645530244,
            "unit": "ns/iter",
            "extra": "iterations: 579412\ncpu: 1212.421765514005 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 292.466435234947,
            "unit": "ns/iter",
            "extra": "iterations: 1395660\ncpu: 634.0527298912352 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 66717.87873880586,
            "unit": "ns/iter",
            "extra": "iterations: 10498\ncpu: 66699.38959801868 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 58093.6060732117,
            "unit": "ns/iter",
            "extra": "iterations: 7212\ncpu: 93346.60219079278 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 23690.78029732376,
            "unit": "ns/iter",
            "extra": "iterations: 22568\ncpu: 40295.41572137539 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 23846646.909090176,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 23838537.27272733 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 16576543.250000954,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 27808923.74999999 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 7052085.120535852,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 13666992.892857168 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 9836086472.999994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9835178808.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4651386699.249997,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5391606617.499998 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1784552741.4374979,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2540936248.7500005 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.4606554890967796,
            "unit": "ns/iter",
            "extra": "iterations: 281020357\ncpu: 2.4604765234142802 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.029295529120074,
            "unit": "ns/iter",
            "extra": "iterations: 138989024\ncpu: 5.028997987639642 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 85.47136729887323,
            "unit": "ns/iter",
            "extra": "iterations: 8191735\ncpu: 85.46764794027166 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1830.2487340840546,
            "unit": "ns/iter",
            "extra": "iterations: 387269\ncpu: 1830.1846313544352 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 31096.829278445915,
            "unit": "ns/iter",
            "extra": "iterations: 21620\ncpu: 31095.549629972225 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 896921.8608924256,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 896874.88845145 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.772907141082072,
            "unit": "ns/iter",
            "extra": "iterations: 35358941\ncpu: 19.76592760512815 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.874149148528574,
            "unit": "ns/iter",
            "extra": "iterations: 32162047\ncpu: 21.810519958509158 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.93487073032827,
            "unit": "ns/iter",
            "extra": "iterations: 2090243\ncpu: 334.9206613776482 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5451.758219839824,
            "unit": "ns/iter",
            "extra": "iterations: 128348\ncpu: 5451.332845077473 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 89548.95167801992,
            "unit": "ns/iter",
            "extra": "iterations: 7926\ncpu: 89543.4986121627 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1693123.658932687,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 1693034.1647331647 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.71797460984106,
            "unit": "ns/iter",
            "extra": "iterations: 2020233\ncpu: 345.6885864155271 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 487.5379020911538,
            "unit": "ns/iter",
            "extra": "iterations: 724960\ncpu: 973.2597329508103 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 200.22132952838334,
            "unit": "ns/iter",
            "extra": "iterations: 1443384\ncpu: 417.1081458572334 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 4957.3744079350145,
            "unit": "ns/iter",
            "extra": "iterations: 134698\ncpu: 4956.75874177791 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7819.00059925342,
            "unit": "ns/iter",
            "extra": "iterations: 45056\ncpu: 15623.43605735043 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3978.195657557272,
            "unit": "ns/iter",
            "extra": "iterations: 88844\ncpu: 7953.342915672416 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 80627.50362997726,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 80606.4501170949 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 428862.0341163506,
            "unit": "ns/iter",
            "extra": "iterations: 894\ncpu: 766528.7673378051 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 69248.97117117455,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 137890.04999999818 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1606188.2475960888,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 1606090.6586538283 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3164541280.4999895,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3333898570.499999 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 880246859.1250019,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1043488751.7499977 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3192e2fa8640ecdafcb93cdf904f06f7d17dd23f",
          "message": "Documentation Update (#52)\n\n* Updated Doxygen Documentation\r\n\r\n* [CodeFactor] Apply fixes to commit 0527010\r\n\r\nCo-authored-by: codefactor-io <support@codefactor.io>",
          "timestamp": "2021-09-09T11:37:32+02:00",
          "tree_id": "40ff0934e05c667559f597f01638f2a0ecfaf488",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/3192e2fa8640ecdafcb93cdf904f06f7d17dd23f"
        },
        "date": 1631180755605,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.749443026844903,
            "unit": "ns/iter",
            "extra": "iterations: 44825769\ncpu: 15.56748001356095 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000756402e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.584332065771633,
            "unit": "ns/iter",
            "extra": "iterations: 45067626\ncpu: 15.556163375457144 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 7.999999809271685e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.5427488297367584,
            "unit": "ns/iter",
            "extra": "iterations: 197016364\ncpu: 3.5426370319168012 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 7.383808789312337,
            "unit": "ns/iter",
            "extra": "iterations: 94639396\ncpu: 7.383628790276728 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 291.32316921267784,
            "unit": "ns/iter",
            "extra": "iterations: 2512826\ncpu: 291.3152096484199 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71933.2499221575,
            "unit": "ns/iter",
            "extra": "iterations: 9635\ncpu: 71930.32693305651 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21616344.440000147,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21616216.200000018 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10559933957.999989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10559488060.000002 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000010748408e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.073248714126446,
            "unit": "ns/iter",
            "extra": "iterations: 34872776\ncpu: 20.072614981956104 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 21.862726258835732,
            "unit": "ns/iter",
            "extra": "iterations: 32023335\ncpu: 21.862117296652578 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 457.1145607432201,
            "unit": "ns/iter",
            "extra": "iterations: 1500933\ncpu: 457.1042158444124 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75853.59668687766,
            "unit": "ns/iter",
            "extra": "iterations: 9236\ncpu: 75851.65786054551 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26041241.393939305,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26040587.090909123 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11874725936.000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11874226650 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 473.92559818017344,
            "unit": "ns/iter",
            "extra": "iterations: 1467827\ncpu: 473.9047544431304 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 516.191214616248,
            "unit": "ns/iter",
            "extra": "iterations: 681598\ncpu: 1029.2137447586367 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 287.36825443106244,
            "unit": "ns/iter",
            "extra": "iterations: 1154128\ncpu: 637.4022751375912 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75726.61994172877,
            "unit": "ns/iter",
            "extra": "iterations: 9267\ncpu: 75723.12711772969 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 58409.34784411237,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 91645.98894416862 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 35815.909055354765,
            "unit": "ns/iter",
            "extra": "iterations: 16620\ncpu: 66854.25800240706 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 27121469.586207606,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 27050702.827586032 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 17714185.125000626,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 29935522.450000037 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 8828690.59821407,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 15645868.464285713 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10222786501.000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10222254461.000006 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4952540492.500006,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5479312412 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2165096522.1875005,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2727002382.9999986 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.482376012922829,
            "unit": "ns/iter",
            "extra": "iterations: 281054734\ncpu: 2.482252471150323 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.021235084824145,
            "unit": "ns/iter",
            "extra": "iterations: 139471117\ncpu: 5.021103846182038 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 85.42804932075865,
            "unit": "ns/iter",
            "extra": "iterations: 8193710\ncpu: 85.42638951097828 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1854.9325769844975,
            "unit": "ns/iter",
            "extra": "iterations: 374783\ncpu: 1854.9254021660443 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 31158.20738499382,
            "unit": "ns/iter",
            "extra": "iterations: 22803\ncpu: 31157.70157435446 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 857033.488916222,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 856985.3374384175 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.74249128540509,
            "unit": "ns/iter",
            "extra": "iterations: 35456901\ncpu: 19.742398214666608 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.750039197526615,
            "unit": "ns/iter",
            "extra": "iterations: 32189531\ncpu: 21.74976264798663 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.60812604718825,
            "unit": "ns/iter",
            "extra": "iterations: 2091915\ncpu: 334.6045890965895 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5440.5263452263525,
            "unit": "ns/iter",
            "extra": "iterations: 128733\ncpu: 5440.429975220025 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 89227.84614411858,
            "unit": "ns/iter",
            "extra": "iterations: 7910\ncpu: 89224.9809102393 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1600787.2064220002,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 1600732.5481651358 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.91550443951405,
            "unit": "ns/iter",
            "extra": "iterations: 2017893\ncpu: 345.7553299406918 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 449.3320482296843,
            "unit": "ns/iter",
            "extra": "iterations: 756878\ncpu: 898.3539725028064 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 230.08369947071233,
            "unit": "ns/iter",
            "extra": "iterations: 1495568\ncpu: 465.2338850523619 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5619.421144231847,
            "unit": "ns/iter",
            "extra": "iterations: 121811\ncpu: 5619.029348745149 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7156.413614374426,
            "unit": "ns/iter",
            "extra": "iterations: 49198\ncpu: 14292.524269279029 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3335.750745986287,
            "unit": "ns/iter",
            "extra": "iterations: 95176\ncpu: 7078.481066655519 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91277.68794419502,
            "unit": "ns/iter",
            "extra": "iterations: 7598\ncpu: 91273.13964200889 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 429793.9801205075,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 758937.4831325309 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 1391092.2243589642,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 2367918.1378205046 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1711919.1355933202,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 1711859.3656174655 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2991751283.499994,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3150604678.4999967 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 496145198.1875058,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 714299816.2500006 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d383929b3f7bd2d6ac346e8629bda7d00bda7c7f",
          "message": "Update README.md",
          "timestamp": "2021-09-14T16:08:16+02:00",
          "tree_id": "4d95843b142df31ab1deb08e7eafceff78cd3e86",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/d383929b3f7bd2d6ac346e8629bda7d00bda7c7f"
        },
        "date": 1631629002872,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.522068580183356,
            "unit": "ns/iter",
            "extra": "iterations: 45068033\ncpu: 15.521591634584984 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.009999987734773e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.530026111517348,
            "unit": "ns/iter",
            "extra": "iterations: 44992789\ncpu: 15.529331889161178 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999997425732e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999997425732e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.534934707653195,
            "unit": "ns/iter",
            "extra": "iterations: 201872435\ncpu: 3.5348934935074214 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.063146126465527,
            "unit": "ns/iter",
            "extra": "iterations: 115237599\ncpu: 6.062841746642086 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 260.97636771144533,
            "unit": "ns/iter",
            "extra": "iterations: 2683278\ncpu: 260.93863140531835 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71885.34664340215,
            "unit": "ns/iter",
            "extra": "iterations: 9742\ncpu: 71880.99486758371 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21592574.000001147,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21591290.51999997 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10503679505.99997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10502991488.000002 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.07560638429701,
            "unit": "ns/iter",
            "extra": "iterations: 34870997\ncpu: 20.074801273964116 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 21.980666816258328,
            "unit": "ns/iter",
            "extra": "iterations: 31828798\ncpu: 21.979778689726167 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 457.1270247960288,
            "unit": "ns/iter",
            "extra": "iterations: 1527623\ncpu: 457.0983344712685 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75736.67688653868,
            "unit": "ns/iter",
            "extra": "iterations: 9263\ncpu: 75733.35819928758 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26018629.81818344,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26017488.818181835 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11696827038.99997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11696084467.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 467.0534375078844,
            "unit": "ns/iter",
            "extra": "iterations: 1499022\ncpu: 467.0225787213236 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 608.2336100730668,
            "unit": "ns/iter",
            "extra": "iterations: 568886\ncpu: 1215.302276730307 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 314.0331773533592,
            "unit": "ns/iter",
            "extra": "iterations: 1153460\ncpu: 698.9262774608544 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75830.71212284167,
            "unit": "ns/iter",
            "extra": "iterations: 9247\ncpu: 75817.66832486194 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 62401.6256885372,
            "unit": "ns/iter",
            "extra": "iterations: 7988\ncpu: 101182.57699048577 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 25158.9111756163,
            "unit": "ns/iter",
            "extra": "iterations: 13780\ncpu: 45921.05863570384 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 26986098.689654868,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 26984809.65517253 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 19269157.67499793,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 32008381.700000055 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 8781048.312500253,
            "unit": "ns/iter",
            "extra": "iterations: 52\ncpu: 14107742.32692304 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10094261464.999931,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10090765331 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4004889467.7500186,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4960061013.499999 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1868324902.062497,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2359381580.25 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.480869161012976,
            "unit": "ns/iter",
            "extra": "iterations: 281157664\ncpu: 2.480812011583642 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.41219606436438,
            "unit": "ns/iter",
            "extra": "iterations: 129382492\ncpu: 5.411968035056851 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 85.56156906304638,
            "unit": "ns/iter",
            "extra": "iterations: 8185369\ncpu: 85.55730719042714 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1843.4007878667862,
            "unit": "ns/iter",
            "extra": "iterations: 380775\ncpu: 1843.3451040640828 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 30640.662978213837,
            "unit": "ns/iter",
            "extra": "iterations: 23316\ncpu: 30639.14226282362 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 887395.1978155903,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 887324.0109223343 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.746688596041697,
            "unit": "ns/iter",
            "extra": "iterations: 35447125\ncpu: 19.746192081868426 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.756938320276184,
            "unit": "ns/iter",
            "extra": "iterations: 32183510\ncpu: 21.756812448362567 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.7853228461459,
            "unit": "ns/iter",
            "extra": "iterations: 2091182\ncpu: 334.77027537535844 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5424.745514261171,
            "unit": "ns/iter",
            "extra": "iterations: 128184\ncpu: 5424.5014042314015 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88437.79524772317,
            "unit": "ns/iter",
            "extra": "iterations: 7912\ncpu: 88433.37639029311 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1614472.5799086206,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 1614452.0570776162 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.78649230151507,
            "unit": "ns/iter",
            "extra": "iterations: 2023646\ncpu: 345.689439259638 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 467.92027369819175,
            "unit": "ns/iter",
            "extra": "iterations: 742716\ncpu: 933.2530819317462 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 238.702254487814,
            "unit": "ns/iter",
            "extra": "iterations: 1445916\ncpu: 489.38535986874945 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5615.126416768073,
            "unit": "ns/iter",
            "extra": "iterations: 124050\ncpu: 5613.546771463225 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7684.109286706871,
            "unit": "ns/iter",
            "extra": "iterations: 46012\ncpu: 15338.630574632469 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3871.588160223441,
            "unit": "ns/iter",
            "extra": "iterations: 88152\ncpu: 7865.516199292024 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91312.64965318864,
            "unit": "ns/iter",
            "extra": "iterations: 7641\ncpu: 91300.22379269675 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 145726.02769533035,
            "unit": "ns/iter",
            "extra": "iterations: 2022\ncpu: 284972.0662710127 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 73934.56404259945,
            "unit": "ns/iter",
            "extra": "iterations: 5024\ncpu: 140759.9820859853 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1735189.9184651286,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 1735036.8201438468 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3590752696.5000043,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3767238203.0000033 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1508513159.6249967,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1739227022.2500012 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e7fae51ec56b6b067ca48c7eb23c7ff301bafe6",
          "message": "Merge branch 'master' of https://github.com/ZigRazor/CXXGraph",
          "timestamp": "2021-09-16T09:42:00Z",
          "tree_id": "16c7a3e26e9b7dcc80597b975def92c10348461f",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/6e7fae51ec56b6b067ca48c7eb23c7ff301bafe6"
        },
        "date": 1631785845635,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 16.433892716679654,
            "unit": "ns/iter",
            "extra": "iterations: 41642522\ncpu: 16.41222275154228 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 16.629075057905723,
            "unit": "ns/iter",
            "extra": "iterations: 42821232\ncpu: 16.62638249175082 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.80136317960134,
            "unit": "ns/iter",
            "extra": "iterations: 191760792\ncpu: 3.8009663049368294 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.288633480058219,
            "unit": "ns/iter",
            "extra": "iterations: 106210371\ncpu: 6.287523418970073 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 293.78942041694796,
            "unit": "ns/iter",
            "extra": "iterations: 2330848\ncpu: 293.77671946004233 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 75167.13244278931,
            "unit": "ns/iter",
            "extra": "iterations: 9657\ncpu: 75152.21994408198 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 32171348.349999107,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 32169997.45 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 9453827471.000011,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9444361081.999998 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 22.650298341099532,
            "unit": "ns/iter",
            "extra": "iterations: 29885423\ncpu: 22.64904662718007 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 23.537073023692148,
            "unit": "ns/iter",
            "extra": "iterations: 29097721\ncpu: 23.534598362531526 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 509.7112502333261,
            "unit": "ns/iter",
            "extra": "iterations: 1382318\ncpu: 509.661931624995 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 81427.06470765935,
            "unit": "ns/iter",
            "extra": "iterations: 9937\ncpu: 81420.78736037045 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 36056173.590909876,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 36052664.09090905 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 10233693571.999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10232776487.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 521.2123220983432,
            "unit": "ns/iter",
            "extra": "iterations: 1417356\ncpu: 520.2444191861483 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 622.5199324547527,
            "unit": "ns/iter",
            "extra": "iterations: 634242\ncpu: 1206.603383251182 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 325.66632600299147,
            "unit": "ns/iter",
            "extra": "iterations: 1050156\ncpu: 750.442630428239 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 79300.6504268673,
            "unit": "ns/iter",
            "extra": "iterations: 8785\ncpu: 79287.68457598197 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 61836.247823030266,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 97262.11825842674 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 38914.51566570323,
            "unit": "ns/iter",
            "extra": "iterations: 13820\ncpu: 75701.241316932 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 33945913.69999773,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 33943444.09999981 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 26804020.472222116,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 43061906.2222225 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 12327535.693749782,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 20980642.45000013 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 9200771823.000025,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9200164008.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4945958434.000005,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5672845003.500001 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2457276172.312497,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2970312256.0000005 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.3971594315780256,
            "unit": "ns/iter",
            "extra": "iterations: 292963054\ncpu: 2.3969641305009075 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.380355853864334,
            "unit": "ns/iter",
            "extra": "iterations: 123803742\ncpu: 5.380006219844327 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 93.56364299235703,
            "unit": "ns/iter",
            "extra": "iterations: 8080544\ncpu: 93.5540768047295 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2148.430678526416,
            "unit": "ns/iter",
            "extra": "iterations: 342448\ncpu: 2148.239706466393 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 62626.60854716617,
            "unit": "ns/iter",
            "extra": "iterations: 10834\ncpu: 62576.67149713849 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 887069.235135091,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 887022.7445945878 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 22.615458973076194,
            "unit": "ns/iter",
            "extra": "iterations: 30456732\ncpu: 22.61301268304167 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 26.000416639194423,
            "unit": "ns/iter",
            "extra": "iterations: 28149056\ncpu: 25.9991732937685 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 364.3682922487963,
            "unit": "ns/iter",
            "extra": "iterations: 1853900\ncpu: 364.3249803117717 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6459.843762394323,
            "unit": "ns/iter",
            "extra": "iterations: 118499\ncpu: 6459.581228533561 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 117708.36721534711,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 117697.62362124368 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1890056.8940809134,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 1889993.5887849825 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 390.2585325272659,
            "unit": "ns/iter",
            "extra": "iterations: 1894427\ncpu: 390.210760298504 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 469.0438297317523,
            "unit": "ns/iter",
            "extra": "iterations: 759108\ncpu: 926.9239963219978 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 266.96503922732165,
            "unit": "ns/iter",
            "extra": "iterations: 1379396\ncpu: 536.5936997062608 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6066.119321788843,
            "unit": "ns/iter",
            "extra": "iterations: 113416\ncpu: 6065.595568526472 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8702.78085902939,
            "unit": "ns/iter",
            "extra": "iterations: 40604\ncpu: 17322.039060191466 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3715.0370518565137,
            "unit": "ns/iter",
            "extra": "iterations: 90596\ncpu: 7504.217658616196 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 125076.90107375395,
            "unit": "ns/iter",
            "extra": "iterations: 5681\ncpu: 124911.5819398019 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 157069.8606801889,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 308316.80548925814 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 78251.2439453098,
            "unit": "ns/iter",
            "extra": "iterations: 5120\ncpu: 151083.7443359374 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1890358.7213620453,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 1890246.0588235494 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1843557353.2499917,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2105158110.0000067 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 248627438.99998918,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 333917566.2500055 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3b71ec4d202d0b10af97887ef5028ecfe416b8d",
          "message": "Update SECURITY.md",
          "timestamp": "2021-09-17T11:59:28+02:00",
          "tree_id": "ecb383036f7cc723251b96b774d860b5000ae58e",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/b3b71ec4d202d0b10af97887ef5028ecfe416b8d"
        },
        "date": 1631873318225,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.99999999995249e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 18.526430484461535,
            "unit": "ns/iter",
            "extra": "iterations: 38139142\ncpu: 18.272235751921215 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999998009599e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 18.246288198729626,
            "unit": "ns/iter",
            "extra": "iterations: 38460572\ncpu: 18.24515251619243 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 4.055756738910014,
            "unit": "ns/iter",
            "extra": "iterations: 171613767\ncpu: 4.055431980582303 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 8.614555583566437,
            "unit": "ns/iter",
            "extra": "iterations: 80623425\ncpu: 8.614305222086514 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 341.61779153197773,
            "unit": "ns/iter",
            "extra": "iterations: 2125573\ncpu: 341.5949431047535 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 84445.15951446824,
            "unit": "ns/iter",
            "extra": "iterations: 8156\ncpu: 84444.37996566946 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 25432413.85714217,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 25430315.571428567 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 11777090240.000008,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11776361089.000002 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 0.000016701999982160487,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 0.00001679999999737447 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 23.232268316912837,
            "unit": "ns/iter",
            "extra": "iterations: 30000226\ncpu: 23.231379090277482 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 25.60500257253096,
            "unit": "ns/iter",
            "extra": "iterations: 27608995\ncpu: 25.604212648812528 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 547.1055607533589,
            "unit": "ns/iter",
            "extra": "iterations: 1301838\ncpu: 547.0806651826109 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 87686.2773904418,
            "unit": "ns/iter",
            "extra": "iterations: 8032\ncpu: 87681.11217629473 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 30187351.535713803,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 30184727.607142873 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 13144945109.000048,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13144058081 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 544.3446995779772,
            "unit": "ns/iter",
            "extra": "iterations: 1307028\ncpu: 544.3115610377172 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 689.7879867157646,
            "unit": "ns/iter",
            "extra": "iterations: 513390\ncpu: 1372.02157618964 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 351.2137294575436,
            "unit": "ns/iter",
            "extra": "iterations: 938544\ncpu: 749.600092270581 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 88967.61818870048,
            "unit": "ns/iter",
            "extra": "iterations: 7928\ncpu: 88965.04654389509 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 78015.26989780291,
            "unit": "ns/iter",
            "extra": "iterations: 6458\ncpu: 126155.0723134093 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 28305.954391107887,
            "unit": "ns/iter",
            "extra": "iterations: 17228\ncpu: 43502.67512189452 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 31879358.833334,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 31877487.66666676 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 21448172.041665714,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 35964225.95833353 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 11250972.357954742,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 18153412.06818182 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10803849091.000017,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10802880656.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4543174675.75001,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5730395285.999999 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2462308726.8749976,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2847965167.000001 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.9653387205468893,
            "unit": "ns/iter",
            "extra": "iterations: 217968959\ncpu: 2.9651342785923847 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.866548452040994,
            "unit": "ns/iter",
            "extra": "iterations: 119510311\ncpu: 5.8663427208385075 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 100.2676005978452,
            "unit": "ns/iter",
            "extra": "iterations: 6924850\ncpu: 100.26237766883058 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2113.8814104804487,
            "unit": "ns/iter",
            "extra": "iterations: 329051\ncpu: 2113.8581131800033 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 36773.78344593018,
            "unit": "ns/iter",
            "extra": "iterations: 18799\ncpu: 36772.48305760951 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 941621.3425559115,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 941568.9104084293 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 23.90490569967099,
            "unit": "ns/iter",
            "extra": "iterations: 29328477\ncpu: 23.903798004921956 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 26.91292842152139,
            "unit": "ns/iter",
            "extra": "iterations: 26192370\ncpu: 26.91147872452957 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 404.6981570834512,
            "unit": "ns/iter",
            "extra": "iterations: 1733448\ncpu: 404.6985009068636 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6496.029749748754,
            "unit": "ns/iter",
            "extra": "iterations: 107732\ncpu: 6495.6381669327775 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 106823.00526711794,
            "unit": "ns/iter",
            "extra": "iterations: 6645\ncpu: 106819.62738901368 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1868018.3521852146,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 1867951.7866324328 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 403.49060350152814,
            "unit": "ns/iter",
            "extra": "iterations: 1591976\ncpu: 403.4260692372155 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 584.4346000302828,
            "unit": "ns/iter",
            "extra": "iterations: 593670\ncpu: 1166.8731584887162 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 275.19960079205197,
            "unit": "ns/iter",
            "extra": "iterations: 1569608\ncpu: 545.5476615817593 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6618.447391688311,
            "unit": "ns/iter",
            "extra": "iterations: 102921\ncpu: 6617.901128049646 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 9015.449622199814,
            "unit": "ns/iter",
            "extra": "iterations: 39174\ncpu: 17800.665415836716 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4577.80784997052,
            "unit": "ns/iter",
            "extra": "iterations: 74892\ncpu: 9140.689579661257 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 108178.17544707988,
            "unit": "ns/iter",
            "extra": "iterations: 6207\ncpu: 108149.89544063207 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 231670.31173378613,
            "unit": "ns/iter",
            "extra": "iterations: 1142\ncpu: 437851.85376531404 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 80772.68811425917,
            "unit": "ns/iter",
            "extra": "iterations: 3256\ncpu: 159697.68212531213 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1983817.5189189878,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 1983817.8972972825 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1529640919.249971,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 1780285844.50001 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1372315334.6250072,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1504503846.2500012 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1e5f6f0c765a050f79d1afce5f60ad882149458c",
          "message": "Merge branch 'master' of https://github.com/ZigRazor/CXXGraph",
          "timestamp": "2021-09-21T07:12:18Z",
          "tree_id": "435a2435e594d97fba0464e081cdeee05f344a61",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/1e5f6f0c765a050f79d1afce5f60ad882149458c"
        },
        "date": 1632208910249,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.99999999995249e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 18.818569743786146,
            "unit": "ns/iter",
            "extra": "iterations: 37628349\ncpu: 18.690624507601967 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.999999749903509e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 18.607044972757826,
            "unit": "ns/iter",
            "extra": "iterations: 37693886\ncpu: 18.57518359874065 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 9.000000318337698e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 9.000000318337698e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 4.082394643084332,
            "unit": "ns/iter",
            "extra": "iterations: 169334613\ncpu: 4.082258274036388 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 7.426338455145917,
            "unit": "ns/iter",
            "extra": "iterations: 93844441\ncpu: 7.426109650970161 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 313.19363388814395,
            "unit": "ns/iter",
            "extra": "iterations: 2234268\ncpu: 313.1707373511147 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 86223.609413502,
            "unit": "ns/iter",
            "extra": "iterations: 8116\ncpu: 86219.54300147851 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 25913708.809525814,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 25912467.761904784 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 11946097517.999989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11945299951 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 24.03496297831566,
            "unit": "ns/iter",
            "extra": "iterations: 29044465\ncpu: 24.03400186575992 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 26.31849678948036,
            "unit": "ns/iter",
            "extra": "iterations: 26620463\ncpu: 26.317400001645296 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 546.6983537264301,
            "unit": "ns/iter",
            "extra": "iterations: 1286056\ncpu: 546.6802534259763 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 90557.48445193026,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 90557.61557398287 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 31131094.785714757,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 31115145.82142862 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 13560515125.999985,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13559781202 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 562.0012411360506,
            "unit": "ns/iter",
            "extra": "iterations: 1245633\ncpu: 561.9807888840421 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 693.5034309994135,
            "unit": "ns/iter",
            "extra": "iterations: 491402\ncpu: 1368.7058172331501 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 341.2681804052782,
            "unit": "ns/iter",
            "extra": "iterations: 1187116\ncpu: 764.2088532207464 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 91304.8179586572,
            "unit": "ns/iter",
            "extra": "iterations: 7740\ncpu: 91297.38837209286 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 74568.79474708272,
            "unit": "ns/iter",
            "extra": "iterations: 5654\ncpu: 119203.3919349134 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 27884.382376185422,
            "unit": "ns/iter",
            "extra": "iterations: 15184\ncpu: 43290.59444151741 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 31560958.3750008,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 31558521.374999892 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 22374964.96153732,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 37156262.307692446 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 11114888.749999588,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 18549630.437500075 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 11656600537.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11656100717.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4167871745.250011,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5800609128.499998 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2220682218.8124847,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 3084421080.2499995 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.898899725055707,
            "unit": "ns/iter",
            "extra": "iterations: 226543103\ncpu: 2.8987981549807005 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 6.3155858816772374,
            "unit": "ns/iter",
            "extra": "iterations: 110759958\ncpu: 6.313601084969713 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 99.99934873686809,
            "unit": "ns/iter",
            "extra": "iterations: 7055520\ncpu: 99.99438524729656 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2251.7087936670664,
            "unit": "ns/iter",
            "extra": "iterations: 319605\ncpu: 2251.5415653697505 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 36811.50659603258,
            "unit": "ns/iter",
            "extra": "iterations: 19254\ncpu: 36808.94032408877 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 1016738.1916083039,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1012707.5104895051 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 23.715064279089898,
            "unit": "ns/iter",
            "extra": "iterations: 29522820\ncpu: 23.71355693663444 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 26.158668519860388,
            "unit": "ns/iter",
            "extra": "iterations: 26804876\ncpu: 26.155558414073827 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 401.87103547972345,
            "unit": "ns/iter",
            "extra": "iterations: 1742487\ncpu: 401.84113339152276 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6526.085477512194,
            "unit": "ns/iter",
            "extra": "iterations: 107034\ncpu: 6525.489115608048 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 105823.97730024172,
            "unit": "ns/iter",
            "extra": "iterations: 6608\ncpu: 105816.8963377716 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1953628.1891889204,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 1953537.4162162528 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 426.30879268073795,
            "unit": "ns/iter",
            "extra": "iterations: 1622247\ncpu: 426.27895012288116 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 552.8939674646779,
            "unit": "ns/iter",
            "extra": "iterations: 659590\ncpu: 1102.011958944204 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 273.88884197241896,
            "unit": "ns/iter",
            "extra": "iterations: 1377152\ncpu: 551.6824482700634 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 7029.220004882897,
            "unit": "ns/iter",
            "extra": "iterations: 94207\ncpu: 7029.217818209067 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8988.681430268029,
            "unit": "ns/iter",
            "extra": "iterations: 40426\ncpu: 17798.01563350273 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4049.9014728858315,
            "unit": "ns/iter",
            "extra": "iterations: 71696\ncpu: 8470.812290783339 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 110935.7436764958,
            "unit": "ns/iter",
            "extra": "iterations: 6207\ncpu: 110932.43998711309 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 214561.77272728088,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 408807.29577466473 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 87667.01392352028,
            "unit": "ns/iter",
            "extra": "iterations: 4812\ncpu: 173255.35931005664 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 2058870.438395323,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2058758.1719197445 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1651854631.2499893,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 1873159674.9999957 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1492469993.4375029,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1744791498.2500002 ns\nthreads: 4"
          }
        ]
      }
    ]
  }
}