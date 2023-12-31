const citiesDataOld = [
  {
    "Country or area": "United States of America",
    "Urban Agglomeration": "New York-Newark",
    Latitude: 40.717042,
    Longitude: -74.003663,
    1950: 12338.471,
    1955: 13219.362,
    1960: 14163.521,
    1965: 15176.758,
    1970: 16191.18,
    1975: 15880.271,
    1980: 15601.401,
    1985: 15826.788,
    1990: 16085.599,
    1995: 16942.77,
    2000: 17813.371,
    2005: 18087.174,
    2010: 18365.262,
    2015: 18647.626,
    2020: 18803.552,
    2025: 19154.024,
    2030: 19957.605,
    2035: 20817.17,
    2040: 21512.645814,
    2045: 22236.291198,
    2050: 22924.85019,
  },
  {
    "Country or area": "Japan",
    "Urban Agglomeration": "Tokyo",
    Latitude: 35.6895,
    Longitude: 139.69171,
    1950: 11274.641,
    1955: 13712.679,
    1960: 16678.821,
    1965: 20284.371,
    1970: 23297.503,
    1975: 26614.733,
    1980: 28548.512,
    1985: 30303.794,
    1990: 32530.003,
    1995: 33586.573,
    2000: 34449.908,
    2005: 35621.544,
    2010: 36859.626,
    2015: 37256.109,
    2020: 37393.129,
    2025: 37036.204,
    2030: 36573.799,
    2035: 36014.03,
    2040: 35369.7951986956,
    2045: 34706.7450295947,
    2050: 34061.5366465526,
  },
  {
    "Country or area": "United Kingdom",
    "Urban Agglomeration": "London",
    Latitude: 51.50853,
    Longitude: -0.12574,
    1950: 8360.847,
    1955: 8277.908,
    1960: 8195.769,
    1965: 7868.506,
    1970: 7509.405,
    1975: 7124.383,
    1980: 6751.196,
    1985: 6740.954,
    1990: 6794.4,
    1995: 7029.508,
    2000: 7272.819,
    2005: 7501.217,
    2010: 8044.433,
    2015: 8661.381,
    2020: 9304.016,
    2025: 9840.742,
    2030: 10228.051,
    2035: 10556.486,
    2040: 0.0,
    2045: 0.0,
    2050: 0.0,
  },
  {
    "Country or area": "Japan",
    "Urban Agglomeration": "Kinki M.M.A. (Osaka)",
    Latitude: 34.675834,
    Longitude: 135.553823,
    1950: 7005.284,
    1955: 8622.976,
    1960: 10614.841,
    1965: 13065.322,
    1970: 15271.51,
    1975: 16298.124,
    1980: 17027.547,
    1985: 17582.632,
    1990: 18388.783,
    1995: 18939.588,
    2000: 18660.022,
    2005: 18762.099,
    2010: 19312.646,
    2015: 19304.722,
    2020: 19165.34,
    2025: 18921.632,
    2030: 18658.055,
    2035: 18345.611,
    2040: 0.0,
    2045: 0.0,
    2050: 0.0,
  },
  {
    "Country or area": "France",
    "Urban Agglomeration": "Paris",
    Latitude: 48.85341,
    Longitude: 2.3488,
    1950: 6283.018,
    1955: 6796.437,
    1960: 7410.735,
    1965: 7855.185,
    1970: 8208.121,
    1975: 8557.844,
    1980: 8669.349,
    1985: 8956.222,
    1990: 9330.327,
    1995: 9510.103,
    2000: 9736.538,
    2005: 10091.795,
    2010: 10460.118,
    2015: 10733.502,
    2020: 11017.23,
    2025: 11346.802,
    2030: 11709.788,
    2035: 12064.575,
    2040: 0.0,
    2045: 0.0,
    2050: 0.0,
  },
  {
    "Country or area": "Russian Federation",
    "Urban Agglomeration": "Moskva (Moscow)",
    Latitude: 55.754996,
    Longitude: 37.621849,
    1950: 5356.392,
    1955: 5748.746,
    1960: 6169.961,
    1965: 6621.78,
    1970: 7106.457,
    1975: 7622.703,
    1980: 8136.141,
    1985: 8579.92,
    1990: 8986.631,
    1995: 9200.994,
    2000: 10004.523,
    2005: 10751.428,
    2010: 11461.264,
    2015: 12049.135,
    2020: 12537.954,
    2025: 12737.356,
    2030: 12795.712,
    2035: 12822.748,
    2040: 0.0,
    2045: 0.0,
    2050: 0.0,
  },
  {
    "Country or area": "Argentina",
    "Urban Agglomeration": "Buenos Aires",
    Latitude: -34.605083,
    Longitude: -58.400368,
    1950: 5166.14,
    1955: 5910.271,
    1960: 6761.837,
    1965: 7548.511,
    1970: 8416.17,
    1975: 9143.219,
    1980: 9919.781,
    1985: 10523.442,
    1990: 11147.566,
    1995: 11806.407,
    2000: 12503.871,
    2005: 13329.54,
    2010: 14245.871,
    2015: 14705.533,
    2020: 15153.729,
    2025: 15752.275,
    2030: 16456.115,
    2035: 17127.741,
    2040: 0.0,
    2045: 0.0,
    2050: 0.0,
  },
  {
    "Country or area": "United States of America",
    "Urban Agglomeration": "Chicago",
    Latitude: 41.85003,
    Longitude: -87.65005,
    1950: 4999.06,
    1955: 5564.573,
    1960: 6183.153,
    1965: 6638.874,
    1970: 7105.799,
    1975: 7160.445,
    1980: 7216.19,
    1985: 7285.121,
    1990: 7373.695,
    1995: 7838.718,
    2000: 8315.244,
    2005: 8464.184,
    2010: 8615.834,
    2015: 8770.201,
    2020: 8865.009,
    2025: 9042.164,
    2030: 9423.671,
    2035: 9829.632,
    2040: 0.0,
    2045: 0.0,
    2050: 0.0,
  },
  {
    "Country or area": "India",
    "Urban Agglomeration": "Kolkata (Calcutta)",
    Latitude: 22.533455,
    Longitude: 88.356045,
    1950: 4604.143,
    1955: 5219.086,
    1960: 5910.21,
    1965: 6589.384,
    1970: 7329.372,
    1975: 8165.629,
    1980: 9100.166,
    1985: 10003.665,
    1990: 10974.177,
    1995: 11992.194,
    2000: 13097.153,
    2005: 13595.152,
    2010: 14002.798,
    2015: 14422.67,
    2020: 14850.066,
    2025: 15845.219,
    2030: 17583.604,
    2035: 19564.17,
    2040: 0.0,
    2045: 0.0,
    2050: 0.0,
  },
  {
    "Country or area": "China",
    "Urban Agglomeration": "Shanghai",
    Latitude: 31.22222,
    Longitude: 121.45806,
    1950: 4288.091,
    1955: 5712.858,
    1960: 6865.312,
    1965: 6428.131,
    1970: 6052.468,
    1975: 5658.129,
    1980: 5927.898,
    1985: 7096.28,
    1990: 8605.812,
    1995: 11072.063,
    2000: 14246.541,
    2005: 17055.788,
    2010: 20314.309,
    2015: 23482.181,
    2020: 27058.479,
    2025: 30482.14,
    2030: 32869.265,
    2035: 34341.242,
    2040: 0.0,
    2045: 0.0,
    2050: 0.0,
  },
  {
    "Country or area": "United States of America",
    "Urban Agglomeration": "Los Angeles-Long Beach-Santa Ana",
    Latitude: 34.031656,
    Longitude: -118.241716,
    1950: 4045.514,
    1955: 5154.301,
    1960: 6529.638,
    1965: 7407.634,
    1970: 8377.685,
    1975: 8925.518,
    1980: 9511.568,
    1985: 10181.172,
    1990: 10883.429,
    1995: 11338.89,
    2000: 11798.345,
    2005: 11977.857,
    2010: 12160.151,
    2015: 12345.219,
    2020: 12446.597,
    2025: 12677.559,
    2030: 13209.244,
    2035: 13778.153,
    2040: 14322.246,
    2045: 14872.543,
    2050: 15422.84,
  },
  {
    "Country or area": "Mexico",
    "Urban Agglomeration": "Ciudad de M\u00e9xico (Mexico City)",
    Latitude: 19.427318,
    Longitude: -99.141869,
    1950: 3365.081,
    1955: 4293.878,
    1960: 5479.184,
    1965: 6969.157,
    1970: 8830.947,
    1975: 10733.86,
    1980: 13027.62,
    1985: 14278.216,
    1990: 15642.318,
    1995: 17017.469,
    2000: 18457.027,
    2005: 19276.065,
    2010: 20136.681,
    2015: 21339.781,
    2020: 21782.378,
    2025: 22752.414,
    2030: 24110.599,
    2035: 25414.624,
    2040: 26754.7556666667,
    2045: 28085.8606666667,
    2050: 29416.9656666667,
  },
  {
    "Country or area": "Germany",
    "Urban Agglomeration": "Berlin",
    Latitude: 52.52437,
    Longitude: 13.41053,
    1950: 3337.621,
    1955: 3298.503,
    1960: 3259.833,
    1965: 3232.253,
    1970: 3206.311,
    1975: 3130.306,
    1980: 3056.082,
    1985: 3060.484,
    1990: 3421.662,
    1995: 3471.395,
    2000: 3384.417,
    2005: 3391.496,
    2010: 3450.395,
    2015: 3513.595,
    2020: 3562.038,
    2025: 3580.188,
    2030: 3606.268,
    2035: 3638.756,
    2040: 3666.972,
    2045: 3696.256,
    2050: 3725.54,
  },
  {
    "Country or area": "United States of America",
    "Urban Agglomeration": "Philadelphia",
    Latitude: 39.95234,
    Longitude: -75.16379,
    1950: 3127.806,
    1955: 3511.099,
    1960: 3930.026,
    1965: 4160.634,
    1970: 4395.851,
    1975: 4467.008,
    1980: 4540.082,
    1985: 4628.805,
    1990: 4725.101,
    1995: 4937.912,
    2000: 5156.159,
    2005: 5300.571,
    2010: 5449.069,
    2015: 5601.728,
    2020: 5716.764,
    2025: 5861.465,
    2030: 6114.293,
    2035: 6377.913,
    2040: 6458.6889333333,
    2045: 6628.6146484848,
    2050: 6798.5403636364,
  },
  {
    "Country or area": "India",
    "Urban Agglomeration": "Mumbai (Bombay)",
    Latitude: 19.073975,
    Longitude: 72.880838,
    1950: 3088.811,
    1955: 3726.21,
    1960: 4414.904,
    1965: 5314.3,
    1970: 6412.876,
    1975: 7685.346,
    1980: 9199.543,
    1985: 10685.53,
    1990: 12355.09,
    1995: 14135.363,
    2000: 16146.527,
    2005: 17257.072,
    2010: 18257.413,
    2015: 19315.737,
    2020: 20411.274,
    2025: 22088.953,
    2030: 24572.45,
    2035: 27342.819,
    2040: 29423.407,
    2045: 31751.2202,
    2050: 34079.0334,
  },
  {
    "Country or area": "Brazil",
    "Urban Agglomeration": "Rio de Janeiro",
    Latitude: -22.90278,
    Longitude: -43.2075,
    1950: 3026.195,
    1955: 3687.344,
    1960: 4493.182,
    1965: 5522.674,
    1970: 6790.519,
    1975: 7733.429,
    1980: 8783.87,
    1985: 9241.709,
    1990: 9697.487,
    1995: 10431.518,
    2000: 11306.768,
    2005: 11831.807,
    2010: 12373.884,
    2015: 12940.796,
    2020: 13458.075,
    2025: 13923.245,
    2030: 14408.259,
    2035: 14810.18,
    2040: 15412.2431428571,
    2045: 15919.0467857143,
    2050: 16425.8504285714,
  },
  {
    "Country or area": "Russian Federation",
    "Urban Agglomeration": "Sankt Peterburg (Saint Petersburg)",
    Latitude: 59.929858,
    Longitude: 30.326228,
    1950: 2902.789,
    1955: 3140.826,
    1960: 3398.457,
    1965: 3677.061,
    1970: 3980.181,
    1975: 4325.423,
    1980: 4644.717,
    1985: 4844.416,
    1990: 4988.616,
    1995: 4835.603,
    2000: 4719.274,
    2005: 4734.424,
    2010: 4871.556,
    2015: 5181.371,
    2020: 5467.808,
    2025: 5597.339,
    2030: 5630.432,
    2035: 5642.618,
    2040: 5668.742,
    2045: 5691.3815,
    2050: 5714.021,
  },
  {
    "Country or area": "United States of America",
    "Urban Agglomeration": "Detroit",
    Latitude: 42.387137,
    Longitude: -83.102641,
    1950: 2769.254,
    1955: 3139.718,
    1960: 3547.879,
    1965: 3758.662,
    1970: 3966.483,
    1975: 3885.119,
    1980: 3806.506,
    1985: 3750.237,
    1990: 3702.526,
    1995: 3804.172,
    2000: 3899.075,
    2005: 3813.594,
    2010: 3729.964,
    2015: 3648.167,
    2020: 3547.509,
    2025: 3542.947,
    2030: 3678.965,
    2035: 3836.907,
    2040: 3980.233,
    2045: 4127.213,
    2050: 4274.193,
  },
  {
    "Country or area": "United States of America",
    "Urban Agglomeration": "Boston",
    Latitude: 42.347919,
    Longitude: -71.06453,
    1950: 2550.818,
    1955: 2680.181,
    1960: 2817.995,
    1965: 3000.275,
    1970: 3186.723,
    1975: 3233.055,
    1980: 3281.046,
    1985: 3348.643,
    1990: 3428.371,
    1995: 3725.836,
    2000: 4036.113,
    2005: 4109.77,
    2010: 4184.792,
    2015: 4261.184,
    2020: 4308.634,
    2025: 4395.505,
    2030: 4581.1,
    2035: 4778.454,
    2040: 4967.9686666667,
    2045: 5159.4431666667,
    2050: 5350.9176666667,
  },
  {
    "Country or area": "Egypt",
    "Urban Agglomeration": "Al-Qahirah (Cairo)",
    Latitude: 30.039173,
    Longitude: 31.239411,
    1950: 2493.514,
    1955: 3029.198,
    1960: 3680.16,
    1965: 4737.968,
    1970: 5584.507,
    1975: 6449.922,
    1980: 7348.778,
    1985: 8328.255,
    1990: 9892.143,
    1995: 11961.986,
    2000: 13625.565,
    2005: 15174.05,
    2010: 16899.015,
    2015: 18820.072,
    2020: 20900.604,
    2025: 23074.225,
    2030: 25516.696,
    2035: 28504.351,
    2040: 31492.006,
    2045: 34479.661,
    2050: 37467.316,
  },
  {
    "Country or area": "China",
    "Urban Agglomeration": "Tianjin",
    Latitude: 39.108842,
    Longitude: 117.18862,
    1950: 2467.096,
    1955: 2760.676,
    1960: 2935.185,
    1965: 3120.62,
    1970: 3317.826,
    1975: 3527.495,
    1980: 3750.476,
    1985: 4097.324,
    1990: 4558.206,
    1995: 5643.951,
    2000: 6988.727,
    2005: 8430.065,
    2010: 10150.076,
    2015: 12516.041,
    2020: 13589.078,
    2025: 14704.08,
    2030: 15745.24,
    2035: 16445.898,
    2040: 0.0,
    2045: 0.0,
    2050: 0.0,
  },
  {
    "Country or area": "United Kingdom",
    "Urban Agglomeration": "Manchester",
    Latitude: 53.48095,
    Longitude: -2.23743,
    1950: 2422.246,
    1955: 2424.868,
    1960: 2427.494,
    1965: 2413.236,
    1970: 2395.826,
    1975: 2370.014,
    1980: 2342.83,
    1985: 2312.504,
    1990: 2281.949,
    1995: 2308.19,
    2000: 2345.143,
    2005: 2434.365,
    2010: 2537.77,
    2015: 2632.914,
    2020: 2730.076,
    2025: 2832.585,
    2030: 2934.273,
    2035: 3028.104,
    2040: 3130.2025,
    2045: 3229.7797,
    2050: 3329.3569,
  },
  {
    "Country or area": "Brazil",
    "Urban Agglomeration": "S\u00e3o Paulo",
    Latitude: -23.5475,
    Longitude: -46.63611,
    1950: 2334.038,
    1955: 3043.828,
    1960: 3969.759,
    1965: 5494.15,
    1970: 7620.49,
    1975: 9614.016,
    1980: 12089.454,
    1985: 13394.815,
    1990: 14775.84,
    1995: 15913.473,
    2000: 17014.078,
    2005: 18288.134,
    2010: 19659.808,
    2015: 20883.046,
    2020: 22043.028,
    2025: 22990.007,
    2030: 23824.223,
    2035: 24490.136,
    2040: 0.0,
    2045: 0.0,
    2050: 0.0,
  },
  {
    "Country or area": "Japan",
    "Urban Agglomeration": "Chukyo M.M.A. (Nagoya)",
    Latitude: 35.18147,
    Longitude: 136.90641,
    1950: 2236.878,
    1955: 3100.066,
    1960: 4296.736,
    1965: 5954.267,
    1970: 6603.381,
    1975: 7317.947,
    1980: 7777.328,
    1985: 8023.149,
    1990: 8407.204,
    1995: 8748.338,
    2000: 8740.191,
    2005: 8914.045,
    2010: 9098.05,
    2015: 9350.155,
    2020: 9552.132,
    2025: 9534.788,
    2030: 9406.897,
    2035: 9254.22,
    2040: 0.0,
    2045: 0.0,
    2050: 0.0,
  },
  {
    "Country or area": "United Kingdom",
    "Urban Agglomeration": "Birmingham (West Midlands)",
    Latitude: 52.4814,
    Longitude: -1.8998,
    1950: 2228.915,
    1955: 2282.582,
    1960: 2337.556,
    1965: 2357.008,
    1970: 2369.516,
    1975: 2364.84,
    1980: 2356.826,
    1985: 2330.236,
    1990: 2300.653,
    1995: 2291.08,
    2000: 2285.076,
    2005: 2348.919,
    2010: 2428.921,
    2015: 2515.879,
    2020: 2607.437,
    2025: 2704.617,
    2030: 2801.58,
    2035: 2891.163,
    2040: 2987.5485,
    2045: 3082.0196,
    2050: 3176.4907,
  },
  {
    "Country or area": "China",
    "Urban Agglomeration": "Shenyang",
    Latitude: 41.79222,
    Longitude: 123.43278,
    1950: 2147.522,
    1955: 2407.477,
    1960: 2698.983,
    1965: 2923.968,
    1970: 3155.766,
    1975: 3290.537,
    1980: 3417.944,
    1985: 3580.164,
    1990: 3771.189,
    1995: 4226.339,
    2000: 4736.57,
    2005: 5264.971,
    2010: 5849.051,
    2015: 6497.927,
    2020: 7220.104,
    2025: 7974.272,
    2030: 8569.302,
    2035: 8951.868,
    2040: 0.0,
    2045: 0.0,
    2050: 0.0,
  },
  {
    "Country or area": "Italy",
    "Urban Agglomeration": "Roma (Rome)",
    Latitude: 41.894743,
    Longitude: 12.481142,
    1950: 1884.065,
    1955: 2142.917,
    1960: 2455.581,
    1965: 2780.218,
    1970: 3134.828,
    1975: 3300.294,
    1980: 3390.48,
    1985: 3538.418,
    1990: 3713.731,
    1995: 3738.572,
    2000: 3708.301,
    2005: 3807.383,
    2010: 3957.247,
    2015: 4113.186,
    2020: 4257.056,
    2025: 4347.104,
    2030: 4413.285,
    2035: 4471.094,
    2040: 0.0,
    2045: 0.0,
    2050: 0.0,
  },
  {
    "Country or area": "Italy",
    "Urban Agglomeration": "Milano (Milan)",
    Latitude: 45.55307,
    Longitude: 9.18344,
    1950: 1883.42,
    1955: 2099.327,
    1960: 2395.13,
    1965: 2694.587,
    1970: 3016.927,
    1975: 3133.356,
    1980: 3168.195,
    1985: 3128.343,
    1990: 3062.9,
    1995: 3019.89,
    2000: 2984.837,
    2005: 3009.629,
    2010: 3056.107,
    2015: 3103.354,
    2020: 3140.181,
    2025: 3167.447,
    2030: 3208.825,
    2035: 3250.588,
    2040: 3292.0943333333,
    2045: 3333.6648333333,
    2050: 3375.2353333333,
  },
  {
    "Country or area": "United States of America",
    "Urban Agglomeration": "San Francisco-Oakland",
    Latitude: 37.759881,
    Longitude: -122.437392,
    1950: 1855.207,
    1955: 2020.903,
    1960: 2199.845,
    1965: 2361.401,
    1970: 2528.928,
    1975: 2589.878,
    1980: 2656.368,
    1985: 2805.185,
    1990: 2960.885,
    1995: 3095.243,
    2000: 3229.903,
    2005: 3256.109,
    2010: 3282.535,
    2015: 3309.175,
    2020: 3313.702,
    2025: 3362.707,
    2030: 3501.485,
    2035: 3652.199,
    2040: 3794.9556666667,
    2045: 3939.7016666667,
    2050: 4084.4476666667,
  },
  {
    "Country or area": "Spain",
    "Urban Agglomeration": "Barcelona",
    Latitude: 41.38879,
    Longitude: 2.15899,
    1950: 1809.39,
    1955: 2102.799,
    1960: 2467.926,
    1965: 2929.523,
    1970: 3482.047,
    1975: 3679.139,
    1980: 3836.761,
    1985: 3969.014,
    1990: 4100.808,
    1995: 4226.951,
    2000: 4355.425,
    2005: 4612.35,
    2010: 4933.548,
    2015: 5276.919,
    2020: 5585.556,
    2025: 5733.247,
    2030: 5811.896,
    2035: 5868.912,
    2040: 5940.35,
    2045: 6008.1825,
    2050: 6076.015,
  },
  {
    "Country or area": "United Kingdom",
    "Urban Agglomeration": "Glasgow",
    Latitude: 55.86515,
    Longitude: -4.25763,
    1950: 1755.17,
    1955: 1776.607,
    1960: 1798.312,
    1965: 1770.393,
    1970: 1733.565,
    1975: 1727.625,
    1980: 1727.625,
    1985: 1696.588,
    1990: 1658.601,
    1995: 1621.464,
    2000: 1585.149,
    2005: 1596.227,
    2010: 1616.798,
    2015: 1643.621,
    2020: 1673.332,
    2025: 1718.941,
    2030: 1777.575,
    2035: 1834.294,
    2040: 1892.2896666667,
    2045: 1949.9661666667,
    2050: 2007.6426666667,
  },
  {
    "Country or area": "Spain",
    "Urban Agglomeration": "Madrid",
    Latitude: 40.4165,
    Longitude: -3.70256,
    1950: 1699.752,
    1955: 2017.611,
    1960: 2391.543,
    1965: 2898.119,
    1970: 3520.861,
    1975: 3890.208,
    1980: 4253.19,
    1985: 4354.613,
    1990: 4413.87,
    1995: 4687.691,
    2000: 5014.411,
    2005: 5383.402,
    2010: 5787.392,
    2015: 6221.45,
    2020: 6617.513,
    2025: 6810.53,
    2030: 6907.133,
    2035: 6975.017,
    2040: 7062.047,
    2045: 7144.2905,
    2050: 7226.534,
  },
  {
    "Country or area": "United Kingdom",
    "Urban Agglomeration": "West Yorkshire",
    Latitude: 53.798431,
    Longitude: -1.764855,
    1950: 1691.847,
    1955: 1697.309,
    1960: 1702.789,
    1965: 1713.923,
    1970: 1726.232,
    1975: 1618.318,
    1980: 1496.034,
    1985: 1528.021,
    1990: 1588.866,
    1995: 1620.957,
    2000: 1648.052,
    2005: 1704.242,
    2010: 1768.292,
    2015: 1827.948,
    2020: 1889.095,
    2025: 1956.474,
    2030: 2026.073,
    2035: 2090.836,
    2040: 2149.6445,
    2045: 2213.1485,
    2050: 2276.6525,
  },
  {
    "Country or area": "Kenya",
    "Urban Agglomeration": "Nairobi",
    Latitude: -1.28333,
    Longitude: 36.81667,
    1950: 137.456,
    1955: 200.546,
    1960: 292.622,
    1965: 403.591,
    1970: 530.741,
    1975: 676.686,
    1980: 861.661,
    1985: 1089.907,
    1990: 1380.012,
    1995: 1755.424,
    2000: 2213.868,
    2005: 2676.753,
    2010: 3236.589,
    2015: 3913.512,
    2020: 4734.881,
    2025: 5766.989,
    2030: 7030.891,
    2035: 8499.403,
    2040: 10106.4304468364,
    2045: 11885.1372969499,
    2050: 13806.9778088563,
  },
  {
    "Country or area": "Kenya",
    "Urban Agglomeration": "Mombasa",
    Latitude: -4.05466,
    Longitude: 39.66359,
    1950: 93.871,
    1955: 122.664,
    1960: 160.302,
    1965: 204.632,
    1970: 253.939,
    1975: 298.406,
    1980: 350.076,
    1985: 407.266,
    1990: 476.33,
    1995: 571.637,
    2000: 683.384,
    2005: 801.611,
    2010: 940.333,
    2015: 1103.065,
    2020: 1295.975,
    2025: 1553.465,
    2030: 1888.688,
    2035: 2282.925,
    2040: 2720.7188649452,
    2045: 3202.9243867462,
    2050: 3724.7631085479,
  },
  {
    "Country or area": "India",
    "Urban Agglomeration": "Pune (Poona)",
    Latitude: 18.516057,
    Longitude: 73.861578,
    1950: 580.848,
    1955: 679.786,
    1960: 776.895,
    1965: 923.668,
    1970: 1104.909,
    1975: 1344.839,
    1980: 1641.983,
    1985: 1997.89,
    1990: 2429.83,
    1995: 2982.646,
    2000: 3666.655,
    2005: 4281.157,
    2010: 4959.608,
    2015: 5745.577,
    2020: 6629.347,
    2025: 7525.717,
    2030: 8441.56,
    2035: 9396.309,
    2040: 10374.4830407173,
    2045: 11331.6600793595,
    2050: 12256.8337260583,
  },
  {
    "Country or area": "India",
    "Urban Agglomeration": "Guwahati (Gauhati)",
    Latitude: 26.173547,
    Longitude: 91.750291,
    1950: 42.504,
    1955: 71.456,
    1960: 126.31,
    1965: 160.808,
    1970: 194.705,
    1975: 251.783,
    1980: 329.427,
    1985: 430.951,
    1990: 563.804,
    1995: 676.349,
    2000: 800.661,
    2005: 878.182,
    2010: 952.042,
    2015: 1032.112,
    2020: 1116.74,
    2025: 1224.174,
    2030: 1364.85,
    2035: 1518.858,
    2040: 1670.0776267843,
    2045: 1818.4276119115,
    2050: 1960.7090694152,
  },
  {
    "Country or area": "New Zealand",
    "Urban Agglomeration": "Auckland",
    Latitude: -36.86667,
    Longitude: 174.76667,
    1950: 319.177,
    1955: 387.165,
    1960: 440.164,
    1965: 532.019,
    1970: 634.88,
    1975: 728.654,
    1980: 773.779,
    1985: 811.678,
    1990: 869.681,
    1995: 1004.061,
    2000: 1110.294,
    2005: 1242.88,
    2010: 1335.187,
    2015: 1465.113,
    2020: 1606.564,
    2025: 1711.127,
    2030: 1791.271,
    2035: 1861.416,
    2040: 1929.4920118144,
    2045: 1991.4501018438,
    2050: 2047.3120250364,
  },
  {
    "Country or area": "Sri Lanka",
    "Urban Agglomeration": "Colombo",
    Latitude: 6.93194,
    Longitude: 79.84778,
    1950: 400.022,
    1955: 443.747,
    1960: 484.952,
    1965: 523.394,
    1970: 554.267,
    1975: 572.25,
    1980: 585.715,
    1985: 599.719,
    1990: 614.1,
    1995: 628.827,
    2000: 643.911,
    2005: 613.88,
    2010: 574.323,
    2015: 581.107,
    2020: 612.535,
    2025: 647.557,
    2030: 695.243,
    2035: 760.747,
    2040: 843.0780364181,
    2045: 924.9740981874,
    2050: 1003.6134076672,
  },
  {
    "Country or area": "Ghana",
    "Urban Agglomeration": "Accra",
    Latitude: 5.55602,
    Longitude: -0.1969,
    1950: 177.147,
    1955: 264.908,
    1960: 392.582,
    1965: 498.949,
    1970: 630.67,
    1975: 737.787,
    1980: 863.134,
    1985: 1012.501,
    1990: 1197.161,
    1995: 1415.498,
    2000: 1668.24,
    2005: 1853.807,
    2010: 2060.076,
    2015: 2289.561,
    2020: 2514.005,
    2025: 2788.384,
    2030: 3187.458,
    2035: 3632.284,
    2040: 4074.719477083,
    2045: 4539.6816905078,
    2050: 5012.7343523156,
  },
  {
    "Country or area": "Ghana",
    "Urban Agglomeration": "Kumasi",
    Latitude: 6.68848,
    Longitude: -1.62443,
    1950: 99.479,
    1955: 148.997,
    1960: 221.044,
    1965: 278.834,
    1970: 349.323,
    1975: 397.204,
    1980: 451.665,
    1985: 532.485,
    1990: 695.568,
    1995: 908.599,
    2000: 1186.725,
    2005: 1544.264,
    2010: 2009.668,
    2015: 2616.097,
    2020: 3348.062,
    2025: 4036.227,
    2030: 4681.047,
    2035: 5337.302,
    2040: 6046.3690057968,
    2045: 6786.8499778415,
    2050: 7550.1977774942,
  },
  {
    "Country or area": "Ethiopia",
    "Urban Agglomeration": "Addis Ababa",
    Latitude: 9.02497,
    Longitude: 38.74689,
    1950: 392.0,
    1955: 451.12,
    1960: 519.177,
    1965: 597.455,
    1970: 729.246,
    1975: 925.73,
    1980: 1175.232,
    1985: 1476.357,
    1990: 1790.86,
    1995: 2144.292,
    2000: 2376.701,
    2005: 2634.15,
    2010: 3126.469,
    2015: 3870.785,
    2020: 4793.699,
    2025: 5956.679,
    2030: 7352.269,
    2035: 8938.683,
    2040: 10692.3052004218,
    2045: 12612.8207160564,
    2050: 14686.8971371191,
  },
  {
    "Country or area": "Ethiopia",
    "Urban Agglomeration": "Mekele",
    Latitude: 13.49667,
    Longitude: 39.47528,
    1950: 14.107,
    1955: 17.537,
    1960: 21.802,
    1965: 27.102,
    1970: 33.691,
    1975: 41.883,
    1980: 52.069,
    1985: 64.726,
    1990: 80.463,
    1995: 101.47,
    2000: 139.344,
    2005: 191.321,
    2010: 283.455,
    2015: 440.042,
    2020: 523.915,
    2025: 637.226,
    2030: 783.607,
    2035: 952.55,
    2040: 1139.7127567953,
    2045: 1344.0730843895,
    2050: 1564.6872940099,
  },
  {
    "Country or area": "Mozambique",
    "Urban Agglomeration": "Tete",
    Latitude: -16.15639,
    Longitude: 33.58667,
    1950: 28.342,
    1955: 32.796,
    1960: 37.952,
    1965: 43.915,
    1970: 50.817,
    1975: 48.375,
    1980: 45.153,
    1985: 57.553,
    1990: 73.759,
    1995: 94.529,
    2000: 117.689,
    2005: 143.498,
    2010: 189.691,
    2015: 265.662,
    2020: 370.65,
    2025: 489.549,
    2030: 609.577,
    2035: 744.02,
    2040: 896.9792770362,
    2045: 1068.3492731892,
    2050: 1257.6620641017,
  },
  {
    "Country or area": "South Africa",
    "Urban Agglomeration": "Gqeberha (Port Elizabeth)",
    Latitude: -33.91799,
    Longitude: 25.57007,
    1950: 192.444,
    1955: 235.639,
    1960: 288.546,
    1965: 371.636,
    1970: 477.422,
    1975: 530.896,
    1980: 590.377,
    1985: 661.502,
    1990: 827.53,
    1995: 923.198,
    2000: 974.265,
    2005: 1034.652,
    2010: 1106.043,
    2015: 1182.45,
    2020: 1253.742,
    2025: 1330.504,
    2030: 1428.546,
    2035: 1526.866,
    2040: 1615.3261130538,
    2045: 1699.2681609307,
    2050: 1776.4251597581,
  },
  {
    "Country or area": "Nigeria",
    "Urban Agglomeration": "Onitsha",
    Latitude: 6.14543,
    Longitude: 6.78845,
    1950: 74.437,
    1955: 91.252,
    1960: 129.192,
    1965: 170.541,
    1970: 195.443,
    1975: 223.98,
    1980: 256.693,
    1985: 294.163,
    1990: 337.114,
    1995: 417.535,
    2000: 533.12,
    2005: 680.611,
    2010: 868.963,
    2015: 1109.441,
    2020: 1414.79,
    2025: 1767.107,
    2030: 2138.441,
    2035: 2535.607,
    2040: 2983.2310246607,
    2045: 3474.6575212895,
    2050: 4008.238765297,
  },
  {
    "Country or area": "Bangladesh",
    "Urban Agglomeration": "Sylhet",
    Latitude: 24.89667,
    Longitude: 91.87167,
    1950: 67.438,
    1955: 72.499,
    1960: 76.908,
    1965: 89.16,
    1970: 104.598,
    1975: 132.78,
    1980: 209.36,
    1985: 234.917,
    1990: 249.967,
    1995: 285.798,
    2000: 330.579,
    2005: 415.784,
    2010: 528.55,
    2015: 671.894,
    2020: 851.808,
    2025: 1032.982,
    2030: 1183.1,
    2035: 1316.467,
    2040: 1477.457278938,
    2045: 1623.6519714162,
    2050: 1765.1960165151,
  },
  {
    "Country or area": "Pakistan",
    "Urban Agglomeration": "Islamabad",
    Latitude: 33.70351,
    Longitude: 73.059373,
    1950: 36.466,
    1955: 40.692,
    1960: 45.408,
    1965: 56.016,
    1970: 70.041,
    1975: 106.538,
    1980: 189.335,
    1985: 259.867,
    1990: 342.868,
    1995: 452.378,
    2000: 568.689,
    2005: 676.311,
    2010: 804.337,
    2015: 956.599,
    2020: 1129.198,
    2025: 1301.128,
    2030: 1477.163,
    2035: 1672.384,
    2040: 1911.7160808368,
    2045: 2169.1403342853,
    2050: 2433.917794344,
  },
  {
    "Country or area": "Philippines",
    "Urban Agglomeration": "Cebu City",
    Latitude: 10.31672,
    Longitude: 123.89071,
    1950: 178.256,
    1955: 212.995,
    1960: 254.141,
    1965: 297.728,
    1970: 348.978,
    1975: 415.398,
    1980: 492.075,
    1985: 549.058,
    1990: 611.978,
    1995: 660.582,
    2000: 721.059,
    2005: 791.514,
    2010: 867.913,
    2015: 921.67,
    2020: 980.07,
    2025: 1061.623,
    2030: 1171.907,
    2035: 1297.637,
    2040: 1433.4536102424,
    2045: 1575.2813932669,
    2050: 1715.7605079907,
  },
  {
    "Country or area": "Brazil",
    "Urban Agglomeration": "Bel\u00e9m",
    Latitude: -1.456142,
    Longitude: -48.478988,
    1950: 242.091,
    1955: 302.602,
    1960: 378.26,
    1965: 476.722,
    1970: 601.027,
    1975: 705.837,
    1980: 826.894,
    1985: 987.09,
    1990: 1179.16,
    1995: 1423.56,
    2000: 1724.26,
    2005: 1869.23,
    2010: 2022.566,
    2015: 2180.148,
    2020: 2334.462,
    2025: 2453.798,
    2030: 2546.275,
    2035: 2617.583,
    2040: 2680.8371750673,
    2045: 2724.1292550723,
    2050: 2752.5138224507,
  },
  {
    "Country or area": "Zambia",
    "Urban Agglomeration": "Kitwe",
    Latitude: -12.8166667,
    Longitude: 28.2,
    1950: 45.887,
    1955: 67.386,
    1960: 98.968,
    1965: 145.322,
    1970: 205.378,
    1975: 241.161,
    1980: 283.19,
    1985: 309.299,
    1990: 337.402,
    1995: 350.185,
    2000: 362.945,
    2005: 422.957,
    2010: 496.66,
    2015: 583.21,
    2020: 685.908,
    2025: 823.625,
    2030: 1005.243,
    2035: 1220.761,
    2040: 1463.7967640993,
    2045: 1739.1953681402,
    2050: 2046.6222765547,
  },
  {
    "Country or area": "Morocco",
    "Urban Agglomeration": "Marrakech",
    Latitude: 31.63148,
    Longitude: -8.00828,
    1950: 208.836,
    1955: 225.392,
    1960: 243.379,
    1965: 280.363,
    1970: 322.98,
    1975: 367.35,
    1980: 416.409,
    1985: 485.398,
    1990: 578.178,
    1995: 680.148,
    2000: 751.31,
    2005: 825.084,
    2010: 880.138,
    2015: 938.865,
    2020: 1002.709,
    2025: 1085.328,
    2030: 1178.981,
    2035: 1267.46,
    2040: 1348.7618931997,
    2045: 1422.6852565069,
    2050: 1489.3388514963,
  },
];
