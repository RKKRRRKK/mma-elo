import { defineStore } from 'pinia'

export const usePromoStore = defineStore('promo', {
  state: () => ({
    promos: [
      {
        promotion: 'UFC',
        number_of_matches: 542,
        total_elo: 1468.12628228782,
        finish_rate: 43.9114391143911,
        w_l_elo_discrepency: 14.8191697416969,
        event_year: 2024
      },
      {
        promotion: 'UFC',
        number_of_matches: 378,
        total_elo: 1467.44777777778,
        finish_rate: 52.6455026455027,
        w_l_elo_discrepency: 14.8547089947092,
        event_year: 2013
      },
      {
        promotion: 'UFC',
        number_of_matches: 482,
        total_elo: 1466.87723029046,
        finish_rate: 50.207468879668,
        w_l_elo_discrepency: 12.2519709543565,
        event_year: 2016
      },
      {
        promotion: 'UFC',
        number_of_matches: 469,
        total_elo: 1466.49873134328,
        finish_rate: 51.3859275053305,
        w_l_elo_discrepency: 12.3183582089555,
        event_year: 2018
      },
      {
        promotion: 'UFC',
        number_of_matches: 514,
        total_elo: 1462.08191634241,
        finish_rate: 46.692607003891,
        w_l_elo_discrepency: 4.9098249027229,
        event_year: 2019
      },
      {
        promotion: 'UFC',
        number_of_matches: 453,
        total_elo: 1460.88389624724,
        finish_rate: 51.2141280353201,
        w_l_elo_discrepency: 8.95220750551857,
        event_year: 2017
      },
      {
        promotion: 'UFC',
        number_of_matches: 533,
        total_elo: 1459.62075046904,
        finish_rate: 51.7823639774859,
        w_l_elo_discrepency: 9.04787992495267,
        event_year: 2023
      },
      {
        promotion: 'UFC',
        number_of_matches: 447,
        total_elo: 1458.78515659955,
        finish_rate: 49.8881431767338,
        w_l_elo_discrepency: 14.4163534675613,
        event_year: 2020
      },
      {
        promotion: 'UFC',
        number_of_matches: 295,
        total_elo: 1455.73896610169,
        finish_rate: 50.8474576271186,
        w_l_elo_discrepency: 10.443423728814,
        event_year: 2011
      },
      {
        promotion: 'UFC',
        number_of_matches: 467,
        total_elo: 1454.98784796574,
        finish_rate: 52.6766595289079,
        w_l_elo_discrepency: 9.65578158458266,
        event_year: 2015
      },
      {
        promotion: 'UFC',
        number_of_matches: 505,
        total_elo: 1452.85954455446,
        finish_rate: 48.9108910891089,
        w_l_elo_discrepency: 18.217623762376,
        event_year: 2021
      },
      {
        promotion: 'UFC',
        number_of_matches: 494,
        total_elo: 1452.12342105263,
        finish_rate: 50,
        w_l_elo_discrepency: 14.0880566801613,
        event_year: 2014
      },
      {
        promotion: 'UFC',
        number_of_matches: 539,
        total_elo: 1450.51521335807,
        finish_rate: 53.9888682745826,
        w_l_elo_discrepency: 13.8537662337649,
        event_year: 2022
      },
      {
        promotion: 'UFC',
        number_of_matches: 250,
        total_elo: 1449.29496,
        finish_rate: 51.2,
        w_l_elo_discrepency: 17.37336,
        event_year: 2010
      },
      {
        promotion: 'UFC',
        number_of_matches: 345,
        total_elo: 1446.24057971014,
        finish_rate: 52.7536231884058,
        w_l_elo_discrepency: 12.8235942028984,
        event_year: 2012
      },
      {
        promotion: 'WEC',
        number_of_matches: 84,
        total_elo: 1436.45922619048,
        finish_rate: 55.952380952381,
        w_l_elo_discrepency: 12.9210714285714,
        event_year: 2010
      },
      {
        promotion: 'RIZIN',
        number_of_matches: 59,
        total_elo: 1431.81347457627,
        finish_rate: 62.7118644067797,
        w_l_elo_discrepency: 46.4632203389831,
        event_year: 2019
      },
      {
        promotion: 'UFC',
        number_of_matches: 221,
        total_elo: 1429.07063348416,
        finish_rate: 58.3710407239819,
        w_l_elo_discrepency: 10.1382805429869,
        event_year: 2009
      },
      {
        promotion: 'UFC',
        number_of_matches: 203,
        total_elo: 1422.11438423645,
        finish_rate: 68.4729064039409,
        w_l_elo_discrepency: 5.82187192118226,
        event_year: 2008
      },
      {
        promotion: 'Bellator',
        number_of_matches: 172,
        total_elo: 1420.83090116279,
        finish_rate: 43.6046511627907,
        w_l_elo_discrepency: 19.3273837209306,
        event_year: 2023
      },
      {
        promotion: 'Bellator',
        number_of_matches: 63,
        total_elo: 1417.81976190476,
        finish_rate: 52.3809523809524,
        w_l_elo_discrepency: 53.9598412698413,
        event_year: 2024
      },
      {
        promotion: 'PFL',
        number_of_matches: 141,
        total_elo: 1412.94840425532,
        finish_rate: 61.7021276595745,
        w_l_elo_discrepency: 31.5247517730495,
        event_year: 2018
      },
      {
        promotion: 'UFC',
        number_of_matches: 80,
        total_elo: 1412.7054375,
        finish_rate: 76.25,
        w_l_elo_discrepency: 37.7763749999999,
        event_year: 2005
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 102,
        total_elo: 1408.71808823529,
        finish_rate: 65.6862745098039,
        w_l_elo_discrepency: 70.4551960784311,
        event_year: 2005
      },
      {
        promotion: 'WEC',
        number_of_matches: 60,
        total_elo: 1406.31325,
        finish_rate: 71.6666666666667,
        w_l_elo_discrepency: 18.7381666666668,
        event_year: 2008
      },
      {
        promotion: 'PFL',
        number_of_matches: 119,
        total_elo: 1405.97008403361,
        finish_rate: 53.781512605042,
        w_l_elo_discrepency: 78.5242016806721,
        event_year: 2019
      },
      {
        promotion: 'UFC',
        number_of_matches: 180,
        total_elo: 1404.93844444444,
        finish_rate: 63.8888888888889,
        w_l_elo_discrepency: 33.0519999999997,
        event_year: 2007
      },
      {
        promotion: 'WEC',
        number_of_matches: 81,
        total_elo: 1404.36358024691,
        finish_rate: 46.9135802469136,
        w_l_elo_discrepency: 5.15012345678997,
        event_year: 2009
      },
      {
        promotion: 'PFL',
        number_of_matches: 216,
        total_elo: 1403.72136574074,
        finish_rate: 52.3148148148148,
        w_l_elo_discrepency: 42.4442129629631,
        event_year: 2024
      },
      {
        promotion: 'PFL',
        number_of_matches: 108,
        total_elo: 1403.27800925926,
        finish_rate: 46.2962962962963,
        w_l_elo_discrepency: 36.154537037037,
        event_year: 2021
      },
      {
        promotion: 'Dream',
        number_of_matches: 54,
        total_elo: 1402.2912037037,
        finish_rate: 66.6666666666667,
        w_l_elo_discrepency: 87.5550000000003,
        event_year: 2008
      },
      {
        promotion: 'Bellator',
        number_of_matches: 218,
        total_elo: 1399.08275229358,
        finish_rate: 52.2935779816514,
        w_l_elo_discrepency: 30.4312844036699,
        event_year: 2022
      },
      {
        promotion: 'Dream',
        number_of_matches: 52,
        total_elo: 1398.40115384615,
        finish_rate: 65.3846153846154,
        w_l_elo_discrepency: 39.2426923076919,
        event_year: 2009
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 131,
        total_elo: 1395.00416030534,
        finish_rate: 74.0458015267176,
        w_l_elo_discrepency: 63.112290076336,
        event_year: 2006
      },
      {
        promotion: 'UFC',
        number_of_matches: 175,
        total_elo: 1394.15468571429,
        finish_rate: 68,
        w_l_elo_discrepency: 33.0600000000004,
        event_year: 2006
      },
      {
        promotion: 'Bellator',
        number_of_matches: 197,
        total_elo: 1394.08378172589,
        finish_rate: 50.253807106599,
        w_l_elo_discrepency: 25.3771065989854,
        event_year: 2021
      },
      {
        promotion: 'RIZIN',
        number_of_matches: 77,
        total_elo: 1392.75714285714,
        finish_rate: 54.5454545454545,
        w_l_elo_discrepency: 28.6267532467532,
        event_year: 2021
      },
      {
        promotion: 'PFL',
        number_of_matches: 156,
        total_elo: 1390.92935897436,
        finish_rate: 53.8461538461538,
        w_l_elo_discrepency: 34.882692307692,
        event_year: 2022
      },
      {
        promotion: 'WEC',
        number_of_matches: 64,
        total_elo: 1387.426328125,
        finish_rate: 75,
        w_l_elo_discrepency: 28.9410937500002,
        event_year: 2007
      },
      {
        promotion: 'RIZIN',
        number_of_matches: 91,
        total_elo: 1386.78840659341,
        finish_rate: 58.2417582417582,
        w_l_elo_discrepency: 39.1128571428571,
        event_year: 2023
      },
      {
        promotion: 'RIZIN',
        number_of_matches: 104,
        total_elo: 1380.83038461538,
        finish_rate: 60.5769230769231,
        w_l_elo_discrepency: 53.7113461538463,
        event_year: 2024
      },
      {
        promotion: 'RIZIN',
        number_of_matches: 51,
        total_elo: 1380.38490196078,
        finish_rate: 60.7843137254902,
        w_l_elo_discrepency: 65.2329411764704,
        event_year: 2017
      },
      {
        promotion: 'PFL',
        number_of_matches: 188,
        total_elo: 1376.95428191489,
        finish_rate: 53.7234042553192,
        w_l_elo_discrepency: 41.2531382978723,
        event_year: 2023
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 52,
        total_elo: 1376.62692307692,
        finish_rate: 73.0769230769231,
        w_l_elo_discrepency: 37.3069230769236,
        event_year: 2003
      },
      {
        promotion: 'Bellator',
        number_of_matches: 271,
        total_elo: 1376.08099630996,
        finish_rate: 67.8966789667897,
        w_l_elo_discrepency: 40.065461254612,
        event_year: 2013
      },
      {
        promotion: 'Bellator',
        number_of_matches: 242,
        total_elo: 1374.49566115703,
        finish_rate: 59.0909090909091,
        w_l_elo_discrepency: 32.9238842975201,
        event_year: 2014
      },
      {
        promotion: 'Strikeforce',
        number_of_matches: 145,
        total_elo: 1374.48579310345,
        finish_rate: 61.3793103448276,
        w_l_elo_discrepency: 20.4277241379307,
        event_year: 2011
      },
      {
        promotion: 'Bellator',
        number_of_matches: 206,
        total_elo: 1372.09082524272,
        finish_rate: 60.6796116504854,
        w_l_elo_discrepency: 35.7904854368935,
        event_year: 2011
      },
      {
        promotion: 'Bellator',
        number_of_matches: 236,
        total_elo: 1371.71612288136,
        finish_rate: 55.9322033898305,
        w_l_elo_discrepency: 33.5413983050844,
        event_year: 2012
      },
      {
        promotion: 'RIZIN',
        number_of_matches: 88,
        total_elo: 1371.049375,
        finish_rate: 52.2727272727273,
        w_l_elo_discrepency: 33.1960227272727,
        event_year: 2022
      },
      {
        promotion: 'Bellator',
        number_of_matches: 187,
        total_elo: 1366.38104278075,
        finish_rate: 47.5935828877005,
        w_l_elo_discrepency: 20.7724598930479,
        event_year: 2020
      },
      {
        promotion: 'PFL',
        number_of_matches: 101,
        total_elo: 1360.79376237624,
        finish_rate: 61.3861386138614,
        w_l_elo_discrepency: 31.1689108910891,
        event_year: 2015
      },
      {
        promotion: 'PFL',
        number_of_matches: 77,
        total_elo: 1360.29331168831,
        finish_rate: 63.6363636363636,
        w_l_elo_discrepency: 19.6887012987011,
        event_year: 2013
      },
      {
        promotion: 'Bellator',
        number_of_matches: 190,
        total_elo: 1358.77294736842,
        finish_rate: 65.7894736842105,
        w_l_elo_discrepency: 18.1713684210524,
        event_year: 2015
      },
      {
        promotion: 'Strikeforce',
        number_of_matches: 124,
        total_elo: 1352.89512096774,
        finish_rate: 64.5161290322581,
        w_l_elo_discrepency: 5.64991935483886,
        event_year: 2010
      },
      {
        promotion: 'Bellator',
        number_of_matches: 176,
        total_elo: 1352.3253125,
        finish_rate: 57.3863636363636,
        w_l_elo_discrepency: 31.0683522727275,
        event_year: 2010
      },
      {
        promotion: 'Strikeforce',
        number_of_matches: 93,
        total_elo: 1352.00231182796,
        finish_rate: 68.8172043010753,
        w_l_elo_discrepency: 37.1915053763446,
        event_year: 2009
      },
      {
        promotion: 'PFL',
        number_of_matches: 109,
        total_elo: 1351.50004587156,
        finish_rate: 54.1284403669725,
        w_l_elo_discrepency: 25.0822935779815,
        event_year: 2014
      },
      {
        promotion: 'Bellator',
        number_of_matches: 254,
        total_elo: 1349.03033464567,
        finish_rate: 61.8110236220472,
        w_l_elo_discrepency: 28.0605118110245,
        event_year: 2018
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 51,
        total_elo: 1348.87049019608,
        finish_rate: 76.4705882352941,
        w_l_elo_discrepency: 84.1158823529411,
        event_year: 2001
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 107,
        total_elo: 1348.71112149533,
        finish_rate: 73.8317757009346,
        w_l_elo_discrepency: 63.3069158878504,
        event_year: 2004
      },
      {
        promotion: 'PFL',
        number_of_matches: 116,
        total_elo: 1345.18228448276,
        finish_rate: 52.5862068965517,
        w_l_elo_discrepency: 55.7531896551723,
        event_year: 2016
      },
      {
        promotion: 'ONE',
        number_of_matches: 171,
        total_elo: 1344.94675438597,
        finish_rate: 68.4210526315789,
        w_l_elo_discrepency: 11.6246198830409,
        event_year: 2022
      },
      {
        promotion: 'ONE',
        number_of_matches: 99,
        total_elo: 1342.97065656566,
        finish_rate: 59.5959595959596,
        w_l_elo_discrepency: 31.9839393939394,
        event_year: 2020
      },
      {
        promotion: 'M-1',
        number_of_matches: 83,
        total_elo: 1342.22837349398,
        finish_rate: 56.6265060240964,
        w_l_elo_discrepency: 32.6748192771086,
        event_year: 2019
      },
      {
        promotion: 'Bellator',
        number_of_matches: 367,
        total_elo: 1338.03934604905,
        finish_rate: 61.3079019073569,
        w_l_elo_discrepency: 33.7428882833792,
        event_year: 2019
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 55,
        total_elo: 1337.59009090909,
        finish_rate: 63.6363636363636,
        w_l_elo_discrepency: 86.6445454545451,
        event_year: 2000
      },
      {
        promotion: 'Bellator',
        number_of_matches: 257,
        total_elo: 1336.20585603113,
        finish_rate: 62.2568093385214,
        w_l_elo_discrepency: 28.1463424124508,
        event_year: 2016
      },
      {
        promotion: 'Bellator',
        number_of_matches: 86,
        total_elo: 1334.5088372093,
        finish_rate: 72.0930232558139,
        w_l_elo_discrepency: 26.9648837209306,
        event_year: 2009
      },
      {
        promotion: 'Bellator',
        number_of_matches: 262,
        total_elo: 1331.11562977099,
        finish_rate: 62.2137404580153,
        w_l_elo_discrepency: 34.4209541984731,
        event_year: 2017
      },
      {
        promotion: 'M-1',
        number_of_matches: 192,
        total_elo: 1327.49885416667,
        finish_rate: 65.625,
        w_l_elo_discrepency: 9.02614583333275,
        event_year: 2018
      },
      {
        promotion: 'UFC',
        number_of_matches: 90,
        total_elo: 1324.38194444444,
        finish_rate: 74.4444444444444,
        w_l_elo_discrepency: 38.4512222222224,
        event_year: 2002
      },
      {
        promotion: 'ONE',
        number_of_matches: 187,
        total_elo: 1322.37229946524,
        finish_rate: 65.24064171123,
        w_l_elo_discrepency: 28.5871657754012,
        event_year: 2023
      },
      {
        promotion: 'UFC',
        number_of_matches: 77,
        total_elo: 1318.61032467532,
        finish_rate: 74.025974025974,
        w_l_elo_discrepency: 23.7022077922079,
        event_year: 2003
      },
      {
        promotion: 'K-1',
        number_of_matches: 76,
        total_elo: 1316.19486842105,
        finish_rate: 84.2105263157895,
        w_l_elo_discrepency: 72.060263157895,
        event_year: 2007
      },
      {
        promotion: 'ONE',
        number_of_matches: 339,
        total_elo: 1313.86651917404,
        finish_rate: 64.6017699115044,
        w_l_elo_discrepency: 29.3421828908561,
        event_year: 2019
      },
      {
        promotion: 'M-1',
        number_of_matches: 121,
        total_elo: 1313.40929752066,
        finish_rate: 70.2479338842975,
        w_l_elo_discrepency: 23.820247933884,
        event_year: 2015
      },
      {
        promotion: 'ONE',
        number_of_matches: 176,
        total_elo: 1311.90596590909,
        finish_rate: 67.0454545454545,
        w_l_elo_discrepency: 19.8219318181821,
        event_year: 2021
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 78,
        total_elo: 1311.84852564103,
        finish_rate: 67.948717948718,
        w_l_elo_discrepency: 69.9516666666666,
        event_year: 2002
      },
      {
        promotion: 'M-1',
        number_of_matches: 141,
        total_elo: 1311.1915248227,
        finish_rate: 60.2836879432624,
        w_l_elo_discrepency: 31.029574468085,
        event_year: 2016
      },
      {
        promotion: 'K-1',
        number_of_matches: 73,
        total_elo: 1310.50082191781,
        finish_rate: 71.2328767123288,
        w_l_elo_discrepency: 62.9306849315074,
        event_year: 2006
      },
      {
        promotion: 'Cage_Warriors',
        number_of_matches: 66,
        total_elo: 1310.12674242424,
        finish_rate: 66.6666666666667,
        w_l_elo_discrepency: 20.224090909091,
        event_year: 2012
      },
      {
        promotion: 'M-1',
        number_of_matches: 215,
        total_elo: 1309.20734883721,
        finish_rate: 66.046511627907,
        w_l_elo_discrepency: 27.0685581395348,
        event_year: 2017
      },
      {
        promotion: 'ONE',
        number_of_matches: 188,
        total_elo: 1308.1870212766,
        finish_rate: 61.1702127659574,
        w_l_elo_discrepency: 2.75223404255303,
        event_year: 2024
      },
      {
        promotion: 'ONE',
        number_of_matches: 235,
        total_elo: 1306.4,
        finish_rate: 65.9574468085106,
        w_l_elo_discrepency: 38.7451914893632,
        event_year: 2018
      },
      {
        promotion: 'M-1',
        number_of_matches: 123,
        total_elo: 1305.50369918699,
        finish_rate: 73.1707317073171,
        w_l_elo_discrepency: 38.3062601626013,
        event_year: 2014
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 53,
        total_elo: 1305.255,
        finish_rate: 71.6981132075472,
        w_l_elo_discrepency: 128.198679245283,
        event_year: 1997
      },
      {
        promotion: 'Strikeforce',
        number_of_matches: 68,
        total_elo: 1304.89941176471,
        finish_rate: 69.1176470588235,
        w_l_elo_discrepency: 41.417941176471,
        event_year: 2008
      },
      {
        promotion: 'Cage_Warriors',
        number_of_matches: 146,
        total_elo: 1304.56729452055,
        finish_rate: 67.8082191780822,
        w_l_elo_discrepency: 33.7176027397259,
        event_year: 2013
      },
      {
        promotion: 'K-1',
        number_of_matches: 66,
        total_elo: 1302.91477272727,
        finish_rate: 74.2424242424242,
        w_l_elo_discrepency: 49.6004545454546,
        event_year: 2005
      },
      {
        promotion: 'M-1',
        number_of_matches: 104,
        total_elo: 1302.61264423077,
        finish_rate: 72.1153846153846,
        w_l_elo_discrepency: 14.1043269230775,
        event_year: 2013
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 183,
        total_elo: 1298.2700273224,
        finish_rate: 49.7267759562842,
        w_l_elo_discrepency: 44.8141530054643,
        event_year: 2016
      },
      {
        promotion: 'WEC',
        number_of_matches: 64,
        total_elo: 1293.306875,
        finish_rate: 81.25,
        w_l_elo_discrepency: 50.0787499999999,
        event_year: 2006
      },
      {
        promotion: 'UFC',
        number_of_matches: 81,
        total_elo: 1293.14901234568,
        finish_rate: 72.8395061728395,
        w_l_elo_discrepency: 20.4911111111112,
        event_year: 2001
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 82,
        total_elo: 1292.92878048781,
        finish_rate: 53.6585365853659,
        w_l_elo_discrepency: 34.9580487804876,
        event_year: 2004
      },
      {
        promotion: 'M-1',
        number_of_matches: 120,
        total_elo: 1291.14520833333,
        finish_rate: 74.1666666666667,
        w_l_elo_discrepency: 34.4979166666665,
        event_year: 2012
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 68,
        total_elo: 1290.28183823529,
        finish_rate: 51.4705882352941,
        w_l_elo_discrepency: 77.3174999999999,
        event_year: 1998
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 59,
        total_elo: 1287.75,
        finish_rate: 57.6271186440678,
        w_l_elo_discrepency: 86.6081355932204,
        event_year: 1996
      },
      {
        promotion: 'UFC',
        number_of_matches: 69,
        total_elo: 1287.71,
        finish_rate: 66.6666666666667,
        w_l_elo_discrepency: 41.1124637681157,
        event_year: 2000
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 145,
        total_elo: 1286.24606896552,
        finish_rate: 42.7586206896552,
        w_l_elo_discrepency: 28.0423448275862,
        event_year: 2019
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 64,
        total_elo: 1286.16625,
        finish_rate: 45.3125,
        w_l_elo_discrepency: 67.8556250000001,
        event_year: 2002
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 134,
        total_elo: 1285.88802238806,
        finish_rate: 53.7313432835821,
        w_l_elo_discrepency: 26.2451492537309,
        event_year: 2018
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 174,
        total_elo: 1285.51244252874,
        finish_rate: 48.8505747126437,
        w_l_elo_discrepency: 44.5776436781605,
        event_year: 2015
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 79,
        total_elo: 1285.28265822785,
        finish_rate: 49.3670886075949,
        w_l_elo_discrepency: 49.0435443037975,
        event_year: 2003
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 171,
        total_elo: 1284.52002923977,
        finish_rate: 46.7836257309941,
        w_l_elo_discrepency: 30.3413450292394,
        event_year: 2017
      },
      {
        promotion: 'Cage_Warriors',
        number_of_matches: 134,
        total_elo: 1283.93679104478,
        finish_rate: 63.4328358208955,
        w_l_elo_discrepency: 45.9895522388063,
        event_year: 2014
      },
      {
        promotion: 'M-1',
        number_of_matches: 136,
        total_elo: 1283.73867647059,
        finish_rate: 67.6470588235294,
        w_l_elo_discrepency: 57.8673529411767,
        event_year: 2008
      },
      {
        promotion: 'Invicta',
        number_of_matches: 56,
        total_elo: 1281.55098214286,
        finish_rate: 37.5,
        w_l_elo_discrepency: 6.77374999999984,
        event_year: 2018
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 78,
        total_elo: 1280.50788461538,
        finish_rate: 60.2564102564103,
        w_l_elo_discrepency: 26.4498717948718,
        event_year: 2021
      },
      {
        promotion: 'M-1',
        number_of_matches: 195,
        total_elo: 1279.85302564103,
        finish_rate: 83.0769230769231,
        w_l_elo_discrepency: 32.0904615384613,
        event_year: 2011
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 65,
        total_elo: 1279.43923076923,
        finish_rate: 67.6923076923077,
        w_l_elo_discrepency: 58.5058461538465,
        event_year: 2001
      },
      {
        promotion: 'WEC',
        number_of_matches: 58,
        total_elo: 1277.39129310345,
        finish_rate: 87.9310344827586,
        w_l_elo_discrepency: 37.9791379310345,
        event_year: 2005
      },
      {
        promotion: 'ONE',
        number_of_matches: 57,
        total_elo: 1276.52333333333,
        finish_rate: 70.1754385964912,
        w_l_elo_discrepency: 50.2140350877189,
        event_year: 2012
      },
      {
        promotion: 'M-1',
        number_of_matches: 63,
        total_elo: 1276.16206349206,
        finish_rate: 71.4285714285714,
        w_l_elo_discrepency: 35.8133333333333,
        event_year: 2004
      },
      {
        promotion: 'ONE',
        number_of_matches: 216,
        total_elo: 1275.92773148148,
        finish_rate: 75.462962962963,
        w_l_elo_discrepency: 30.8289814814814,
        event_year: 2016
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 67,
        total_elo: 1274.99246268657,
        finish_rate: 55.2238805970149,
        w_l_elo_discrepency: 75.0965671641791,
        event_year: 2000
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 94,
        total_elo: 1274.87723404255,
        finish_rate: 65.9574468085106,
        w_l_elo_discrepency: 8.83106382978713,
        event_year: 2022
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 53,
        total_elo: 1274.82216981132,
        finish_rate: 62.2641509433962,
        w_l_elo_discrepency: 85.3752830188678,
        event_year: 1999
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 51,
        total_elo: 1272.78235294118,
        finish_rate: 90.1960784313726,
        w_l_elo_discrepency: 96.8658823529413,
        event_year: 1995
      },
      {
        promotion: 'ONE',
        number_of_matches: 195,
        total_elo: 1272.26656410256,
        finish_rate: 73.3333333333333,
        w_l_elo_discrepency: 40.0707692307697,
        event_year: 2014
      },
      {
        promotion: 'ONE',
        number_of_matches: 207,
        total_elo: 1270.86768115942,
        finish_rate: 69.0821256038647,
        w_l_elo_discrepency: 60.3933333333332,
        event_year: 2017
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 139,
        total_elo: 1270.83557553957,
        finish_rate: 39.568345323741,
        w_l_elo_discrepency: 40.6973381294961,
        event_year: 2014
      },
      {
        promotion: 'ONE',
        number_of_matches: 95,
        total_elo: 1269.65305263158,
        finish_rate: 66.3157894736842,
        w_l_elo_discrepency: 46.4623157894737,
        event_year: 2013
      },
      {
        promotion: 'Cage_Warriors',
        number_of_matches: 85,
        total_elo: 1269.60547058824,
        finish_rate: 63.5294117647059,
        w_l_elo_discrepency: 50.1662352941175,
        event_year: 2020
      },
      {
        promotion: 'M-1',
        number_of_matches: 312,
        total_elo: 1269.59352564103,
        finish_rate: 73.0769230769231,
        w_l_elo_discrepency: 42.9887179487196,
        event_year: 2009
      },
      {
        promotion: 'ONE',
        number_of_matches: 141,
        total_elo: 1268.17929078014,
        finish_rate: 70.2127659574468,
        w_l_elo_discrepency: 29.8136170212763,
        event_year: 2015
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 86,
        total_elo: 1268.10784883721,
        finish_rate: 55.8139534883721,
        w_l_elo_discrepency: 31.6689534883726,
        event_year: 2006
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 131,
        total_elo: 1267.65080152672,
        finish_rate: 51.1450381679389,
        w_l_elo_discrepency: 37.753664122137,
        event_year: 2013
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 126,
        total_elo: 1267.53150793651,
        finish_rate: 46.031746031746,
        w_l_elo_discrepency: 22.7573015873013,
        event_year: 2023
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 124,
        total_elo: 1267.27330645161,
        finish_rate: 50.8064516129032,
        w_l_elo_discrepency: 10.2933870967745,
        event_year: 2024
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 112,
        total_elo: 1266.791875,
        finish_rate: 53.5714285714286,
        w_l_elo_discrepency: 41.3389285714281,
        event_year: 2011
      },
      {
        promotion: 'Cage_Warriors',
        number_of_matches: 60,
        total_elo: 1265.28208333333,
        finish_rate: 86.6666666666667,
        w_l_elo_discrepency: 26.9221666666667,
        event_year: 2006
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 125,
        total_elo: 1262.58108,
        finish_rate: 52.8,
        w_l_elo_discrepency: 49.0791200000001,
        event_year: 2012
      },
      {
        promotion: 'Cage_Warriors',
        number_of_matches: 68,
        total_elo: 1261.62404411765,
        finish_rate: 85.2941176470588,
        w_l_elo_discrepency: 21.6095588235291,
        event_year: 2011
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 93,
        total_elo: 1260.66220430108,
        finish_rate: 45.1612903225806,
        w_l_elo_discrepency: 24.7065591397857,
        event_year: 2020
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 75,
        total_elo: 1259.72413333333,
        finish_rate: 54.6666666666667,
        w_l_elo_discrepency: 42.3727999999999,
        event_year: 2008
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 92,
        total_elo: 1258.60652173913,
        finish_rate: 55.4347826086957,
        w_l_elo_discrepency: 39.1593478260868,
        event_year: 2007
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 87,
        total_elo: 1258.37689655172,
        finish_rate: 63.2183908045977,
        w_l_elo_discrepency: 35.6864367816099,
        event_year: 2005
      },
      {
        promotion: 'Cage_Warriors',
        number_of_matches: 52,
        total_elo: 1257.17509615385,
        finish_rate: 88.4615384615385,
        w_l_elo_discrepency: 35.4324999999997,
        event_year: 2005
      },
      {
        promotion: 'M-1',
        number_of_matches: 308,
        total_elo: 1252.98599025974,
        finish_rate: 75.3246753246753,
        w_l_elo_discrepency: 33.9711363636372,
        event_year: 2010
      },
      {
        promotion: 'M-1',
        number_of_matches: 52,
        total_elo: 1247.84288461538,
        finish_rate: 76.9230769230769,
        w_l_elo_discrepency: 35.4096153846153,
        event_year: 2003
      },
      {
        promotion: 'Cage_Warriors',
        number_of_matches: 154,
        total_elo: 1246.87487012987,
        finish_rate: 64.9350649350649,
        w_l_elo_discrepency: 63.2115584415581,
        event_year: 2021
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 253,
        total_elo: 1245.49994071146,
        finish_rate: 75.4940711462451,
        w_l_elo_discrepency: 37.9318972332017,
        event_year: 2024
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 143,
        total_elo: 1244.9298951049,
        finish_rate: 76.9230769230769,
        w_l_elo_discrepency: 35.4185314685317,
        event_year: 2015
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 118,
        total_elo: 1244.65415254237,
        finish_rate: 61.0169491525424,
        w_l_elo_discrepency: 50.7655932203386,
        event_year: 2010
      },
      {
        promotion: 'Cage_Warriors',
        number_of_matches: 387,
        total_elo: 1244.5838630491,
        finish_rate: 57.6227390180879,
        w_l_elo_discrepency: 45.8379069767441,
        event_year: 2024
      },
      {
        promotion: 'Pancrase',
        number_of_matches: 87,
        total_elo: 1242.68902298851,
        finish_rate: 56.3218390804598,
        w_l_elo_discrepency: 53.6134482758623,
        event_year: 2009
      },
      {
        promotion: 'Cage_Warriors',
        number_of_matches: 55,
        total_elo: 1242.23890909091,
        finish_rate: 69.0909090909091,
        w_l_elo_discrepency: 157.504727272727,
        event_year: 2016
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 182,
        total_elo: 1242.00758241758,
        finish_rate: 76.9230769230769,
        w_l_elo_discrepency: 29.2469230769234,
        event_year: 2019
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 59,
        total_elo: 1241.40542372881,
        finish_rate: 67.7966101694915,
        w_l_elo_discrepency: 65.0908474576268,
        event_year: 2013
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 201,
        total_elo: 1240.91171641791,
        finish_rate: 69.6517412935323,
        w_l_elo_discrepency: 19.8510945273626,
        event_year: 2021
      },
      {
        promotion: 'Cage_Warriors',
        number_of_matches: 163,
        total_elo: 1238.89058282209,
        finish_rate: 58.8957055214724,
        w_l_elo_discrepency: 81.4908588957057,
        event_year: 2019
      },
      {
        promotion: 'Cage_Warriors',
        number_of_matches: 174,
        total_elo: 1238.52218390805,
        finish_rate: 63.7931034482759,
        w_l_elo_discrepency: 87.1624137931035,
        event_year: 2018
      },
      {
        promotion: 'Cage_Warriors',
        number_of_matches: 288,
        total_elo: 1237.2209375,
        finish_rate: 60.7638888888889,
        w_l_elo_discrepency: 61.8106250000001,
        event_year: 2022
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 112,
        total_elo: 1236.9596875,
        finish_rate: 75.8928571428571,
        w_l_elo_discrepency: 21.5356249999995,
        event_year: 2020
      },
      {
        promotion: 'UFC',
        number_of_matches: 56,
        total_elo: 1236.81508928571,
        finish_rate: 67.8571428571429,
        w_l_elo_discrepency: 22.5273214285714,
        event_year: 1997
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 283,
        total_elo: 1235.9625795053,
        finish_rate: 75.6183745583039,
        w_l_elo_discrepency: 23.529328621908,
        event_year: 2023
      },
      {
        promotion: 'Cage_Warriors',
        number_of_matches: 137,
        total_elo: 1233.86894160584,
        finish_rate: 66.4233576642336,
        w_l_elo_discrepency: 91.5783211678838,
        event_year: 2017
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 102,
        total_elo: 1233.0043627451,
        finish_rate: 76.4705882352941,
        w_l_elo_discrepency: 30.8371568627451,
        event_year: 2014
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 254,
        total_elo: 1232.18822834646,
        finish_rate: 71.259842519685,
        w_l_elo_discrepency: 35.2305511811026,
        event_year: 2022
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 195,
        total_elo: 1229.68333333333,
        finish_rate: 81.5384615384615,
        w_l_elo_discrepency: 24.4899487179489,
        event_year: 2018
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 174,
        total_elo: 1226.04324712644,
        finish_rate: 78.735632183908,
        w_l_elo_discrepency: 16.8799425287355,
        event_year: 2017
      },
      {
        promotion: 'Cage_Warriors',
        number_of_matches: 376,
        total_elo: 1219.95186170213,
        finish_rate: 61.7021276595745,
        w_l_elo_discrepency: 95.1199999999992,
        event_year: 2023
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 238,
        total_elo: 1217.30256302521,
        finish_rate: 80.2521008403361,
        w_l_elo_discrepency: 44.7954621848742,
        event_year: 2016
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 64,
        total_elo: 1208.98234375,
        finish_rate: 87.5,
        w_l_elo_discrepency: 60.35375,
        event_year: 2011
      },
      {
        promotion: 'PRIDE',
        number_of_matches: 79,
        total_elo: 1203.71278481013,
        finish_rate: 88.6075949367088,
        w_l_elo_discrepency: 80.6073417721518,
        event_year: 2010
      }
    ]
  })
})
