/* eslint-disable */
const countries = [
    {
        'id': '1',
        'continent_id': '7',
        'code': 'ABW',
        'name': 'Aruba',
        'full_name': 'Aruba',
        'cname': '阿鲁巴岛',
        'full_cname': '阿鲁巴',
        'lower_name': 'aruba',
        'remark': '阿鲁巴岛位于加勒比海南部小安的列斯群岛的最西端，南临委内瑞拉，面积193平方公里，是荷兰殖民地。属热带气候，年平均气温27℃。人口95200人（1999年底）。主要为印第安人与欧洲白人的混血后裔。1997年出生率为1.64%，死亡率为0. 66%。官方语言为荷兰语，通用帕彼曼都语，也讲西班牙语和英语。80%以上的居民信奉天主教，少数信奉基督教新教。岛上最早的居民是阿拉瓦克印第安人。1499年西班牙占领该岛。1643年易手荷兰。1807年被英国夺取。1814年重归荷兰管辖，并成为荷属安的列斯的一部分。'
    },
    {
        'id': '2',
        'continent_id': '1',
        'code': 'AFG',
        'name': 'Afghanistan',
        'full_name': 'the Islamic Republic of Afghanistan',
        'cname': '阿富汗',
        'full_cname': '阿富汗斯坦伊斯兰共和国',
        'lower_name': 'the islamic republic of afghanistan',
        'remark': '阿富汗位于西亚、南亚和中亚交汇处，北接土库曼斯坦、乌兹别克斯坦和塔吉克斯坦，东北突出的狭长地带与中国接壤，东和东南与巴基斯坦毗邻，西与伊朗交界。[2] '
    },
    {
        'id': '3',
        'continent_id': '3',
        'code': 'AGO',
        'name': 'Angola',
        'full_name': 'the Republic of Angola',
        'cname': '安哥拉',
        'full_cname': '安哥拉共和国',
        'lower_name': 'the republic of angola',
        'remark': '安哥拉位于非洲西南部，首都罗安达，西滨大西洋，北及东北邻刚果民主共和国，南邻纳米比亚，东南邻赞比亚，另有一块外飞地卡宾达省与刚果共和国、刚果民主共和国相邻。'
    },
    {
        'id': '4',
        'continent_id': '',
        'code': 'AIA',
        'name': '',
        'full_name': '',
        'cname': '安圭拉',
        'full_cname': '安圭拉',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '5',
        'continent_id': '',
        'code': 'ALA',
        'name': '',
        'full_name': '',
        'cname': '奥兰群岛',
        'full_cname': '奥兰群岛',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '6',
        'continent_id': '2',
        'code': 'ALB',
        'name': 'Albania',
        'full_name': 'The Republic of Albania',
        'cname': '阿尔巴尼亚',
        'full_cname': '阿尔巴尼亚共和国',
        'lower_name': 'the republic of albania',
        'remark': '阿尔巴尼亚位于东南欧巴尔干半岛西岸，北接塞尔维亚与黑山，东北与马其顿相连，东南邻希腊，西濒亚得里亚海和伊奥尼亚海，隔奥特朗托海峡与意大利相望。海岸线长472公里。'
    },
    {
        'id': '7',
        'continent_id': '2',
        'code': 'AND',
        'name': 'Andorra',
        'full_name': 'The Principality of Andorra',
        'cname': '安道尔',
        'full_cname': '安道尔公国',
        'lower_name': 'the principality of andorra',
        'remark': "安道尔，全称安道尔公国（英语：The Principality of Andorra，法语：La Principauté d'Andorre，西班牙语：El Principado de Andorra），是位于西南欧法国和西班牙交界处的内陆国，为9世纪时查理曼帝国为防范摩尔人的骚扰而在西班牙边境地带建立的小缓冲国，是世界袖珍国家之一，国土总面积468平方公里，下设7个行政区。2015年，该国总人口85458人。"
    },
    {
        'id': '8',
        'continent_id': '7',
        'code': 'ANT',
        'name': 'Netherlands Antilles',
        'full_name': 'Netherlands Antilles',
        'cname': '荷属安地列斯群岛',
        'full_cname': '荷属安地列斯群岛',
        'lower_name': 'netherlands antilles',
        'remark': '荷属安的列斯群岛（荷兰语：Netherlands Antilles） 加勒比海小安地列斯群岛的5个岛屿。1954年起成为荷兰的自治领地。由相隔遥远的南北两组岛屿组成︰北组位于小安地列斯群岛北端，包括圣尤斯特歇斯(Sint Eustatius)岛，圣马丁（荷兰语作圣马尔滕〔Sint Maarten〕)岛南部和萨巴(Saba)岛；南组距委内瑞拉海岸97公里(60哩），包括博奈尔(Bonaire)和库拉索(Curacao)二岛(1986年以前尚包括阿鲁巴〔Aruba〕岛)。'
    },
    {
        'id': '9',
        'continent_id': '1',
        'code': 'ARE',
        'name': 'United Arab Emirates',
        'full_name': 'The United Arab Emirates',
        'cname': '阿联酋',
        'full_cname': '阿拉伯联合酋长国',
        'lower_name': 'the united arab emirates',
        'remark': '阿拉伯联合酋长国（阿拉伯文：امارات عربية متحدة‎，英文：The United Arab Emirates），简称为阿联酋，位于阿拉伯半岛东部，北濒波斯湾，西北与卡塔尔为邻，西和南与沙特阿拉伯交界，东和东北与阿曼毗连海岸线长734公里，总面积83600平方公里，首都阿布扎比。[1] \n'
    },
    {
        'id': '10',
        'continent_id': '7',
        'code': 'ARG',
        'name': 'Argentina',
        'full_name': 'The Republic of Argentina',
        'cname': '阿根廷',
        'full_cname': '阿根廷共和国',
        'lower_name': 'the republic of argentina',
        'remark': '阿根廷是南美洲国家联盟、20国集团成员和拉美第三大经济体。阿根廷是世界上综合国力较强的发展中国家之一。阿根廷也是世界粮食和肉类的主要生产和出口国之一。'
    },
    {
        'id': '11',
        'continent_id': '2',
        'code': 'ARM',
        'name': 'Armenia',
        'full_name': 'The Republic of Armenia',
        'cname': '亚美尼亚',
        'full_cname': '亚美尼亚共和国',
        'lower_name': 'the republic of armenia',
        'remark': '亚美尼亚共和国（英语：Republic of Armenia），简称亚美尼亚。是一个位于欧亚交界高加索地区的国家，也是在苏联解体之后独立的众多共和国之一，首都为埃里温。亚美尼亚族占93.3%，其他有俄罗斯人、乌克兰人、库尔德人、亚述人、希腊人等。'
    },
    {
        'id': '12',
        'continent_id': '',
        'code': 'ASC',
        'name': '',
        'full_name': '',
        'cname': '阿森松岛',
        'full_cname': '阿森松岛',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '13',
        'continent_id': '',
        'code': 'ASM',
        'name': '',
        'full_name': '',
        'cname': '美属萨摩亚',
        'full_cname': '美属萨摩亚',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '14',
        'continent_id': '',
        'code': 'ATA',
        'name': '',
        'full_name': '',
        'cname': '南极洲',
        'full_cname': '南极洲',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '15',
        'continent_id': '',
        'code': 'ATF',
        'name': '',
        'full_name': '',
        'cname': '法属南部领地',
        'full_cname': '法属南部领地',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '16',
        'continent_id': '7',
        'code': 'ATG',
        'name': 'Antigua and Barbuda',
        'full_name': 'Antigua and Barbuda',
        'cname': '安提瓜和巴布达',
        'full_cname': '安提瓜和巴布达',
        'lower_name': 'antigua and barbuda',
        'remark': '安提瓜和巴布达AG Antigua and Barbuda，位于加勒比海小安的列斯群岛的北部。为英联邦成员国。绝大多数为非洲黑人后裔，多数居民信奉基督教。首都为圣约翰，总人口9万（2015年）[1]  。安提瓜岛的面积为280平方公里。巴布达岛面积为160平方公里。安提瓜和巴布达岛属于热带气候，年平均气温27℃。年均降水量约1020毫米。'
    },
    {
        'id': '17',
        'continent_id': '4',
        'code': 'AUS',
        'name': 'Australia',
        'full_name': 'The Commonwealth of Australia',
        'cname': '澳大利亚',
        'full_cname': '澳大利亚联邦',
        'lower_name': 'the commonwealth of australia',
        'remark': '澳大利亚（Australia），全称为澳大利亚联邦（The Commonwealth of Australia）。其领土面积7686850平方公里，四面环海，是世界上唯一国土覆盖一整个大陆的国家。拥有很多独特的动植物和自然景观的澳大利亚，是一个奉行多元文化的移民国家。'
    },
    {
        'id': '18',
        'continent_id': '2',
        'code': 'AUT',
        'name': 'Austria',
        'full_name': 'The Republic Of Austria',
        'cname': '奥地利',
        'full_cname': '奥地利共和国',
        'lower_name': 'the republic of austria',
        'remark': '奥地利共和国（ 德语：Republik Österreich，英语：The Republic of Austria），简称奥地利（Austria），是一个位于欧洲中部的议会制共和制制国家，下含九个联邦州，作为一个内陆国家，与多国接壤，东邻是匈牙利和斯洛伐克，南邻意大利和斯洛文尼亚，西邻列支敦士登和瑞士，北邻德国和捷克。首都兼最大城市是维也纳，人口超过170万，国土面积83855平方千米。'
    },
    {
        'id': '19',
        'continent_id': '2',
        'code': 'AZE',
        'name': 'Azerbaijan',
        'full_name': 'The Republic of Azerbaijan',
        'cname': '阿塞拜疆',
        'full_cname': '阿塞拜疆共和国',
        'lower_name': 'the republic of azerbaijan',
        'remark': '阿塞拜疆共和国（阿塞拜疆语：Azərbaycan Respublikası）简称阿塞拜疆（英语发音：/ˌæzərbaɪˈdʒɑːn/ AZ-ər-by-JAHN; 阿塞拜疆语：Azərbaycan），国名意为“火的国家”，是东欧和西亚的“十字路口”。'
    },
    {
        'id': '20',
        'continent_id': '3',
        'code': 'BDI',
        'name': 'Burundi',
        'full_name': 'The Republic of Burundi',
        'cname': '布隆迪',
        'full_cname': '布隆迪共和国',
        'lower_name': 'the republic of burundi',
        'remark': '布隆迪（The Republic of Burundi）位于非洲中东部赤道南侧。北与卢旺达接壤，东、南与坦桑尼亚交界，西与刚果（金）为邻，西南濒坦噶尼喀湖。境内多高原和山地，大部由东非大裂谷东侧高原构成，全国平均海拔1600米，有“山国”之称。'
    },
    {
        'id': '21',
        'continent_id': '2',
        'code': 'BEL',
        'name': 'Belgium',
        'full_name': 'The Kingdom Of Belgium',
        'cname': '比利时',
        'full_cname': '比利时王国',
        'lower_name': 'the kingdom of belgium',
        'remark': '比利时王国简称比利时，位于欧洲西部沿海，东与德国接壤，北与荷兰比邻，南与法国交界，东南与卢森堡毗连，西临北海与英国隔海相望。海岸线长66.5公里。全国面积2/3为丘陵和平坦低地，全境分为西北部沿海佛兰德伦平原、中部丘陵、东南部阿登高原三部分，最高点海拔694米，主要河流有马斯河和埃斯考河，属海洋温带阔叶林气候，四季明显'
    },
    {
        'id': '22',
        'continent_id': '3',
        'code': 'BEN',
        'name': 'Benin',
        'full_name': 'the Republic of Benin ',
        'cname': '贝宁',
        'full_cname': '贝宁共和国',
        'lower_name': 'the republic of benin ',
        'remark': '贝宁全称：贝宁共和国（法语República Popular do Benin,La République du Bénin）是位于西非中南部的国家，旧名达荷美（Dahomey），前法国殖民地，贝宁（Benin）南濒几内亚湾，东邻尼日利亚，北与尼日尔接壤，西北与布基纳法索相连，西和多哥接壤，海岸线长125公里。全境南北狭长，南窄北宽。南部沿海为宽约100公里的平原。中部为海拔200－400米波状起伏的高原。西北部的阿塔科拉山海拔641米，为全国最高点。'
    },
    {
        'id': '23',
        'continent_id': '3',
        'code': 'BFA',
        'name': 'Burkina Faso',
        'full_name': 'Burkina Faso',
        'cname': '布基纳法索',
        'full_cname': '布基纳法索',
        'lower_name': 'burkina faso',
        'remark': '布基纳法索（法语:Burkina Faso）是位于非洲西部沃尔特河上游的内陆国。东邻贝宁、尼日尔，南与科特迪瓦、加纳、多哥交界，西、北与马里接壤。全境大部地区为内陆高原，地势平坦，自北向南徐缓倾斜，平均海拔不到300米；北部接近撒哈拉沙漠，西南部奥罗达拉地区地势较高；纳库鲁峰海拔749米，为全国最高点。主要河流有穆温河、纳康伯河和纳齐农河。'
    },
    {
        'id': '24',
        'continent_id': '1',
        'code': 'BGD',
        'name': 'Bangladesh',
        'full_name': "People's Republic of Bangladesh",
        'cname': '孟加拉国',
        'full_cname': '孟加拉人民共和国',
        'lower_name': "people's republic of bangladesh",
        'remark': '孟加拉族是南亚次大陆古老民族之一。孟加拉地区的最早居民是亚澳人。1757年，孟加拉国沦为英属印度的一个省，1947年印巴分治后，归属巴基斯坦，被称为东巴基斯坦。1971年，脱离巴基斯坦而独立。'
    },
    {
        'id': '25',
        'continent_id': '2',
        'code': 'BGR',
        'name': 'Bulgaria',
        'full_name': 'The Republic of Bulgaria',
        'cname': '保加利亚',
        'full_cname': '保加利亚共和国',
        'lower_name': 'the republic of bulgaria',
        'remark': '保加利亚，国土面积为110910平方公里。2013年，人口总量为7588570人。1990年2月27日将3月3日摆脱奥斯曼帝国统治纪念日定为国庆日，1990年11月15日，保加利亚改国名为保加利亚共和国。1991年7月12日通过的宪法规定，定为议会制国家。[1] '
    },
    {
        'id': '26',
        'continent_id': '1',
        'code': 'BHR',
        'name': 'Bahrian',
        'full_name': 'The Kingdom of Bahrain',
        'cname': '巴林',
        'full_cname': '巴林王国',
        'lower_name': 'the kingdom of bahrain',
        'remark': '巴林王国（The Kingdom of Bahrain），简称巴林。巴林，西亚国家，位于亚洲西部，为波斯湾西南部的岛国，邻近卡塔尔和沙特阿拉伯之间，属热带沙漠气候，石油为国家经济的支柱。阿拉伯人约占60%，75~80%的居民住在城市里。\n'
    },
    {
        'id': '27',
        'continent_id': '7',
        'code': 'BHS',
        'name': 'Bahamas',
        'full_name': 'The Commonwealth of The Bahamas',
        'cname': '巴哈马',
        'full_cname': '巴哈马国',
        'lower_name': 'the commonwealth of the bahamas',
        'remark': '巴哈马地处美国佛罗里达州以东，古巴和加勒比海以北，巴哈马包含700座岛屿和珊瑚礁。佛罗里达州东南海岸对面，古巴北侧。群岛由西北向东南延伸，长1220公里，宽96公里，由700多个岛屿及2000多个珊瑚礁组成，总面积为13878平方公里，其中20余个岛屿有人居住。属亚热带气候，年平均气温23.5°C。'
    },
    {
        'id': '28',
        'continent_id': '2',
        'code': 'BIH',
        'name': 'Bosnia Hercegovina',
        'full_name': 'Bosnia and Herzegovina',
        'cname': '波斯尼亚和黑塞哥维那',
        'full_cname': '波斯尼亚和黑塞哥维那',
        'lower_name': 'bosnia and herzegovina',
        'remark': '波斯尼亚和黑塞哥维那位于原南斯拉夫中部，介于克罗地亚、塞尔维亚和黑山三个共和国之间，简称“波黑”，面积51129平方公里[1]  。1945年，南斯拉夫各族人民取得反法西斯战争胜利，成立南斯拉夫联邦人民共和国（1963年改称南斯拉夫社会主义联邦共和国），波黑成为其中的一员。首都萨拉热窝。'
    },
    {
        'id': '29',
        'continent_id': '2',
        'code': 'BLR',
        'name': ' Belarus',
        'full_name': 'The Republic of Belarus',
        'cname': '白俄罗斯',
        'full_cname': '白俄罗斯共和国',
        'lower_name': 'the republic of belarus',
        'remark': '白俄罗斯全称白俄罗斯共和国（白俄罗斯语：Рэспубліка Беларусь，英语：The Republic of Belarus）是位于东欧平原的内陆国家，东北部与俄罗斯联邦为邻，南与乌克兰接壤，西同波兰相连，西北部与立陶宛和拉脱维亚毗邻。首都明斯克。'
    },
    {
        'id': '30',
        'continent_id': '7',
        'code': 'BLZ',
        'name': 'Belize',
        'full_name': 'Belize',
        'cname': '伯利兹',
        'full_cname': '伯利兹',
        'lower_name': 'belize',
        'remark': '伯利兹的原始居民是玛雅人，16世纪初，伯利兹沦为西班牙殖民地。1786年，英国取得对该地的实际管辖权，称英属洪都拉斯。1981年脱离英国独立，而伯利兹的名字来自该国的河流伯利兹河及最大的城市伯利兹市，该市是伯利兹的原首都，新首都为贝尔墨邦。[1] '
    },
    {
        'id': '31',
        'continent_id': '6',
        'code': 'BMU',
        'name': 'Bermuda',
        'full_name': 'Bermuda',
        'cname': '百慕大',
        'full_cname': '百慕大群岛',
        'lower_name': 'bermuda',
        'remark': '百慕大，港台译百慕达（英语：Bermuda；又称百慕大群岛；旧称萨默斯岛）位于北大西洋，是英国的自治海外领地。位于北纬32度14分至32度25分、西经64度38分至64度53分，距北美洲约900多公里、美国东岸佛罗里达州迈阿密东北约1100海里及加拿大新斯科舍省哈利法克斯东南约840海里[1-2]  。来自英国国王Sammy时期的占领。'
    },
    {
        'id': '32',
        'continent_id': '7',
        'code': 'BOL',
        'name': 'Bolivia',
        'full_name': 'The Republic of Bolivia',
        'cname': '玻利维亚',
        'full_cname': '玻利维亚共和国',
        'lower_name': 'the republic of bolivia',
        'remark': '玻利维亚是南美洲的一个内陆国家，全称为玻利维亚共和国（西班牙语：En la República de Bolivia ），为南美洲国家联盟的成员国。邻国有巴西、秘鲁、智利、阿根廷、巴拉圭五国，法定首都为苏克雷，但实际上的政府所在地为拉巴斯，拉巴斯海拔高度超过3600米，为世界海拔最高的首都。'
    },
    {
        'id': '33',
        'continent_id': '7',
        'code': 'BRA',
        'name': 'Brazil',
        'full_name': 'The Federative Republic of Brazil',
        'cname': '巴西',
        'full_cname': '巴西联邦共和国',
        'lower_name': 'the federative republic of brazil',
        'remark': '巴西即巴西联邦共和国，是南美洲最大的国家，享有“足球王国”的美誉。国土总面积854.74万平方公里，居世界第五。[1]  总人口2.02亿。与乌拉圭、阿根廷、巴拉圭、玻利维亚、秘鲁、哥伦比亚、委内瑞拉、圭亚那、苏里南、法属圭亚那十国接壤'
    },
    {
        'id': '34',
        'continent_id': '7',
        'code': 'BRB',
        'name': 'Barbados',
        'full_name': 'Barbados',
        'cname': '巴巴多斯',
        'full_cname': '巴巴多斯',
        'lower_name': 'barbados',
        'remark': '巴巴多斯有稳固的民主政体，独立于1966年11月30日，是英联邦成员，其名字来自于葡萄牙语，指遍地都是的野生的无花果树。'
    },
    {
        'id': '35',
        'continent_id': '1',
        'code': 'BRN',
        'name': 'Brunei',
        'full_name': 'Brunei Darussalam',
        'cname': '文莱',
        'full_cname': '文莱达鲁萨兰国',
        'lower_name': 'brunei darussalam',
        'remark': '文莱位于亚洲东南部，加里曼丹岛西北部，北濒中国南海，东南西三面与马来西亚的沙捞越州接壤，并被沙捞越州的林梦分隔为不相连的东西两部分。海岸线长约162公里，有33个岛屿，总面积为5765平方公里。属热带雨林气候'
    },
    {
        'id': '36',
        'continent_id': '1',
        'code': 'BTN',
        'name': 'Bhutan',
        'full_name': 'Kingdom of Bhutan',
        'cname': '不丹',
        'full_cname': '不丹王国',
        'lower_name': 'kingdom of bhutan',
        'remark': '不丹自8世纪即为吐蕃一个部落，9世纪，不丹为独立部落。1772年，英国侵犯不丹。1865年11月，英国同不丹签订了《辛楚拉条约》，强迫不丹割让包括噶伦堡在内的第斯泰河以东约2000平方公里的地区。1907年建立不丹王国，乌颜·旺楚克成为世袭国王。1910年1月，英国和不丹又签订了《普那卡条约》，规定不丹对外关系接受英国的“指导”，1949年8月，印度和不丹签订《永久和平与友好条约》，规定不丹对外关系接受印度的“指导”。1971年成为联合国成员国。'
    },
    {
        'id': '37',
        'continent_id': '',
        'code': 'BVT',
        'name': '',
        'full_name': '',
        'cname': '布韦岛',
        'full_cname': '布韦岛',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '38',
        'continent_id': '3',
        'code': 'BWA',
        'name': 'Botswana',
        'full_name': 'The Republic of Botswana',
        'cname': '博茨瓦纳',
        'full_cname': '博茨瓦纳共和国',
        'lower_name': 'the republic of botswana',
        'remark': '博兹瓦纳（英文名：Botswana）又译为波札那，正式全名为博茨瓦纳共和国，是位于非洲南部的内陆国。\n全国国境皆为干燥的台地地形，南邻南非，西边为纳米比亚，东北与津巴布韦接壤，其国土北端只有在维多利亚瀑布附近与赞比亚接触到些许。'
    },
    {
        'id': '39',
        'continent_id': '3',
        'code': 'CAF',
        'name': 'Central African',
        'full_name': 'The Central African Republic',
        'cname': '中非',
        'full_cname': '中非共和国',
        'lower_name': 'the central african republic',
        'remark': '中非共和国（The Central African Republic），简称中非，是指非洲大陆中部的内陆国家。面积62.2万平方公里，东与苏丹交界，南同刚果（布）和刚果（金）接壤，西与喀麦隆毗连，北同乍得为邻。全国共有大小部族32个，主要有巴雅，班达、桑戈和曼吉阿族等。官方语言为法语。通用桑戈语'
    },
    {
        'id': '40',
        'continent_id': '6',
        'code': 'CAN',
        'name': 'Canada',
        'full_name': 'Canada',
        'cname': '加拿大',
        'full_cname': '加拿大',
        'lower_name': 'canada',
        'remark': '加拿大（Canada），为北美洲最北的国家，西抵太平洋，东迄大西洋，北至北冰洋，东北部和丹麦领地格陵兰岛相望，东部和法属圣皮埃尔和密克隆群岛相望，南方与美国本土接壤，西北方与美国阿拉斯加州为邻。领土面积为998万平方千米，位居世界第二。加拿大素有“枫叶之国”的美誉，首都是渥太华。加拿大政治体制为联邦制、君主立宪制及议会制，是英联邦国家之一，英王伊丽莎白二世为国家元首及国家象征，但无实际权力。加拿大是典型的英法双语国家'
    },
    {
        'id': '41',
        'continent_id': '',
        'code': 'CCK',
        'name': '',
        'full_name': '',
        'cname': '科科斯群岛',
        'full_cname': '科科斯群岛',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '42',
        'continent_id': '2',
        'code': 'CHE',
        'name': 'Switzerland',
        'full_name': 'Swiss Confederation',
        'cname': '瑞士',
        'full_cname': '瑞士联邦',
        'lower_name': 'swiss confederation',
        'remark': '瑞士，全称瑞士联邦（德语：Schweizerische Eidgenossenschaft 法语：Confédération suisse 意大利语：Confederazione Svizzera 罗曼什语：Confederaziun svizra），为中欧国家之一，划分为26个州。瑞士北邻德国，西邻法国，南邻意大利，东邻奥地利和列支敦士登。全境以高原和山地为主，有“欧洲屋脊”之称。\n'
    },
    {
        'id': '43',
        'continent_id': '7',
        'code': 'CHL',
        'name': 'Chile',
        'full_name': 'Republic of Chile',
        'cname': '智利',
        'full_cname': '智利共和国',
        'lower_name': 'republic of chile',
        'remark': '智利共和国（西班牙语：República de Chile）位于南美洲西南部，安第斯山脉西麓。东同阿根廷为邻，北与秘鲁、玻利维亚接壤，西临太平洋，南与南极洲隔海相望，是世界上地形最狭长的国家，国土面积756626平方公里。为南美洲国家联盟的成员国，在南美洲与阿根廷及巴西并列为ABC强国。'
    },
    {
        'id': '44',
        'continent_id': '1',
        'code': 'CHN',
        'name': 'China',
        'full_name': "People's Republic of China",
        'cname': '中国',
        'full_cname': '中华人民共和国',
        'lower_name': "people's republic of china",
        'remark': '中国是四大文明古国之一，[18-19]  有着悠久的历史文化，是世界国土面积第三大的国家，[20-21]  世界第一大人口国，与英、法、美、俄并为联合国安理会五大常任理事国。中国是世界第二大经济体，[22-23]  世界第一贸易大国，[24]  世界第一大外汇储备国，[25]  世界第一大钢铁生产国和世界第一大农业国，[26-27]  世界第一大粮食总产量国以及世界上经济成长最快的国家之一。[28-29]  第二大吸引外资国，[30]  还是世界许多国际组织的重要成员，[31]  被认为是潜在超级大国之一。'
    },
    {
        'id': '45',
        'continent_id': '3',
        'code': 'CIV',
        'name': "Cote d'lvoire",
        'full_name': "the Republic of Cote d'ivoire",
        'cname': '科特迪瓦',
        'full_cname': '科特迪瓦共和国',
        'lower_name': "the republic of cote d'ivoire",
        'remark': "科特迪瓦（Coate d'Ivoire）全名科特迪瓦共和国（The Republic of Côte d'Ivoire, La République de Côte d'Ivoire ），科特迪瓦在法语的意思是“象牙的海岸”，应该国政府要求，中华人民共和国用音译名为科特迪瓦。联合国自1985年12月31日起使用此音译名。是西非国家，与加纳、利比里亚、几内亚、马里和布基纳法索相邻。海岸线长约500公里。"
    },
    {
        'id': '46',
        'continent_id': '3',
        'code': 'CMR',
        'name': 'Cameroon',
        'full_name': 'the Republic of Cameroon',
        'cname': '喀麦隆',
        'full_cname': '喀麦隆共和国',
        'lower_name': 'the republic of cameroon',
        'remark': '喀麦隆共和国（法语：République du Cameroun）通称喀麦隆，是位于非洲中西部的单一制共和国，西方与尼日利亚接壤，东北与东边分别和乍得与中非相靠，南方则与赤道几内亚、加蓬及刚果共和国毗邻。'
    },
    {
        'id': '47',
        'continent_id': '3',
        'code': 'COD',
        'name': 'DR Congo',
        'full_name': 'Democratic Republic of the Congo',
        'cname': '民主刚果',
        'full_cname': '刚果民主共和国',
        'lower_name': 'democratic republic of the congo',
        'remark': '刚果民主共和国（法语：République démocratique du Congo）是非洲中部的一个国家，旧称为扎伊尔（法语：Zaïre），首都为金沙萨。'
    },
    {
        'id': '48',
        'continent_id': '3',
        'code': 'COG',
        'name': 'Congo',
        'full_name': 'Republic of the Congo',
        'cname': '刚果',
        'full_cname': '刚果共和国',
        'lower_name': 'republic of the congo',
        'remark': '刚果共和国（英语：The Republic of Congo；法语：République du Congo），简称为刚果（布），位于非洲中西部，赤道横贯中部，东、南两面邻刚果（金）、安哥拉，北接中非、喀麦隆，西连加蓬，西南临大西洋，海岸线长150多公里，总面积为34.2万平方公里。[1] '
    },
    {
        'id': '49',
        'continent_id': '4',
        'code': 'COK',
        'name': 'Cook Is',
        'full_name': 'The Cook Islands',
        'cname': '库克群岛',
        'full_cname': '库克群岛',
        'lower_name': 'the cook islands',
        'remark': '库克群岛是一个位于南太平洋上，介于法属波利尼西亚与斐济之间，由15个岛屿组成的岛群，其命名起源于远征探索南太平洋，发现了许多岛屿的詹姆斯·库克船长，是新西兰的自由结合区。首都阿瓦鲁阿（Avarua），位于拉罗汤加岛。'
    },
    {
        'id': '50',
        'continent_id': '7',
        'code': 'COL',
        'name': 'Colombia',
        'full_name': 'The Republic of Colombia',
        'cname': '哥伦比亚',
        'full_cname': '哥伦比亚共和国',
        'lower_name': 'the republic of colombia',
        'remark': '哥伦比亚共和国（西班牙语：República de Colombia），国土位于南美洲西北部，西临太平洋，北临加勒比海，东通委内瑞拉，东南通巴西，南与秘鲁、厄瓜多尔，西北与巴拿马为邻。为南美洲国家联盟成员国。'
    },
    {
        'id': '51',
        'continent_id': '3',
        'code': 'COM',
        'name': 'Comoros',
        'full_name': 'Union of Comoros',
        'cname': '科摩罗',
        'full_cname': '科摩罗联盟',
        'lower_name': 'union of comoros',
        'remark': '科摩罗被称月亮之国、香料之国，是非洲一个位于印度洋上的岛国，位于非洲东侧莫桑比克海峡北端入口处，东、西距马达加斯加和莫桑比克各约300公里。组成科摩罗的大科摩罗岛、昂儒昂岛、莫埃利岛和马约特岛被誉为西印度洋上的四颗明珠。'
    },
    {
        'id': '52',
        'continent_id': '3',
        'code': 'CPV',
        'name': 'Cape Verde',
        'full_name': 'The Republic of Cape Verde',
        'cname': '佛得角',
        'full_cname': '佛得角共和国',
        'lower_name': 'the republic of cape verde',
        'remark': '佛得角位于北大西洋的佛得角群岛上，东距非洲大陆最西点佛得角（塞内加尔境内）500多公里，扼欧洲与南美、南非间交通要冲，包括圣安唐、圣尼古拉、萨尔、博阿维什塔、福古、圣地亚哥等15个大小岛屿，分北面的向风群岛和南面的背风群岛两组。民族语言为克里奥尔语。'
    },
    {
        'id': '53',
        'continent_id': '6',
        'code': 'CRI',
        'name': 'Costa Rica',
        'full_name': 'Republic of Costa Rica',
        'cname': '哥斯达黎加',
        'full_cname': '哥斯达黎加共和国',
        'lower_name': 'republic of costa rica',
        'remark': '哥斯达黎加是拉丁美洲的一个共和国，北邻尼加拉瓜，南与巴拿马接壤，1983年11月17日宣布成为永久中立国，根据宪法，哥斯达黎加没有军队，只有警察和安全部队维护内部安全。是世界上第一个不设军队的国家'
    },
    {
        'id': '54',
        'continent_id': '6',
        'code': 'CUB',
        'name': 'Cuba',
        'full_name': 'The Republic of Cuba',
        'cname': '古巴',
        'full_cname': '古巴共和国',
        'lower_name': 'the republic of cuba',
        'remark': '古巴是北美洲加勒比海北部的群岛国家，哈瓦那是古巴的经济、政治中心和首都。\n古巴是现存世界为数不多的5个社会主义国家（中国、朝鲜、古巴、越南、老挝）之一，而且是美洲唯一的社会主义国家。[1]  在历史上以上世纪60年代的猪湾事件和古巴导弹危机闻名。'
    },
    {
        'id': '55',
        'continent_id': '',
        'code': 'CXR',
        'name': '',
        'full_name': '',
        'cname': '圣诞岛',
        'full_cname': '圣诞岛',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '56',
        'continent_id': '7',
        'code': 'CYM',
        'name': 'Cayman Is',
        'full_name': 'Cayman Islands',
        'cname': '开曼群岛',
        'full_cname': '开曼群岛',
        'lower_name': 'cayman islands',
        'remark': '开曼群岛（The Cayman Islands ）是英国在西加勒比群岛的一块海外属地，首府为乔治敦（Georg Town）。开曼由大开曼、小开曼和开曼布拉克等岛屿组成，东部边缘为开曼海沟。开曼是著名的离岸金融中心和“避税天堂”，亦是世界著名的潜水胜地、旅游度假圣地。金融和旅游业是其主要经济来源。'
    },
    {
        'id': '57',
        'continent_id': '2',
        'code': 'CYP',
        'name': 'Cyprus',
        'full_name': 'the Republic of Cyprus',
        'cname': '塞浦路斯',
        'full_cname': '塞浦路斯共和国',
        'lower_name': 'the republic of cyprus',
        'remark': '塞浦路斯，是位于欧洲与亚洲交界处的一个岛国，位于地中海东部，亦为地中海地区最热门的旅游地之一。塞浦路斯扼守欧洲、亚洲和非洲的海上要道，战略位置十分重要，因此欧美国家对于该区域的军事部署高度关注。'
    },
    {
        'id': '58',
        'continent_id': '2',
        'code': 'CZE',
        'name': 'Czech',
        'full_name': 'The Czech Republic',
        'cname': '捷克',
        'full_cname': '捷克共和国',
        'lower_name': 'the czech republic',
        'remark': '捷克全称：捷克共和国，是一个中欧地区的内陆国家，国土面积78866平方公里，原捷克斯洛伐克的西部，其前身为波希米亚王国和大摩拉维亚国，于1993年与斯洛伐克和平地分离。'
    },
    {
        'id': '59',
        'continent_id': '2',
        'code': 'DEU',
        'name': 'Germany',
        'full_name': 'The Federal Republic of Germany',
        'cname': '德国',
        'full_cname': '德意志联邦共和国',
        'lower_name': 'the federal republic of germany',
        'remark': '德国是一个高度发达的资本主义国家。欧洲四大经济体之一，其社会保障制度完善，国民具有极高的生活水平。德国在基础科学与应用研究方面十分发达，以理学、工程技术而闻名的科研机构和发达的职业教育支撑了德国的科学技术和经济发展。以汽车和精密机床为代表的高端制造业，也是德国的重要象征。'
    },
    {
        'id': '60',
        'continent_id': '3',
        'code': 'DJI',
        'name': 'Djibouti',
        'full_name': 'The Republic of Djibouti',
        'cname': '吉布提',
        'full_cname': '吉布提共和国',
        'lower_name': 'the republic of djibouti',
        'remark': '吉布提（法语La République de Djibouti ，阿法尔语：Gabuutih），阿法尔语意为“沸腾的蒸锅”，位于非洲东北部亚丁湾西岸，扼红海入印度洋的要冲，东南与索马里接壤，西南、西部和西北部三面毗邻埃塞俄比亚，北部和厄立特里亚接壤。'
    },
    {
        'id': '61',
        'continent_id': '6',
        'code': 'DMA',
        'name': 'Dominica',
        'full_name': 'The Commonwealth of Dominica',
        'cname': '多米尼克',
        'full_cname': '多米尼克国',
        'lower_name': 'the commonwealth of dominica',
        'remark': '多米尼克（The Commonwealth of Dominica）位于东加勒比海小安的列斯群岛东北部，东临大西洋，西濒加勒比海，是一个国土面积仅有751平方公里的岛国。主要为黑人和黑白混血种人。'
    },
    {
        'id': '62',
        'continent_id': '2',
        'code': 'DNK',
        'name': 'Denmark',
        'full_name': 'The Kingdom of Denmark',
        'cname': '丹麦',
        'full_cname': '丹麦王国',
        'lower_name': 'the kingdom of denmark',
        'remark': '丹麦王国（丹麦语：Kongeriget Danmark，旧译为“嗹（lián）国”、“嗹马”[1]  ），简称丹麦，为北欧五国之一，是一个君主立宪制国家，拥有两个自治领地，一个是法罗群岛，另外一个是格陵兰岛。丹麦本土则包括日德兰半岛、菲因岛、西兰岛及附近岛屿，北部隔北海和波罗的海与瑞典和挪威相望，南部与德国接壤，首都兼第一大城市是哥本哈根。'
    },
    {
        'id': '63',
        'continent_id': '6',
        'code': 'DOM',
        'name': 'Dominican',
        'full_name': 'The Dominican Republic',
        'cname': '多米尼加',
        'full_cname': '多米尼加共和国',
        'lower_name': 'the dominican republic',
        'remark': '多米尼加共和国（英语：The Dominican Republic；西班牙语：La República Dominicana）。国名意为“星期天、休息日”。旧说哥伦布于15世纪末的一个星期日到此，故名多米尼加，首都圣多明各。'
    },
    {
        'id': '64',
        'continent_id': '3',
        'code': 'DZA',
        'name': 'Algeria',
        'full_name': "People's Democratic Republic of Algeria",
        'cname': '阿尔及利亚',
        'full_cname': '阿尔及利亚民主人民共和国',
        'lower_name': "people's democratic republic of algeria",
        'remark': '阿尔及利亚经济规模在非洲居第四位，仅次于南非、尼日利亚和埃及。碳化氢产业（石油与天然气的统称）是阿国民经济的支柱。'
    },
    {
        'id': '65',
        'continent_id': '7',
        'code': 'ECU',
        'name': 'Ecuador',
        'full_name': 'The Republic of Ecuador',
        'cname': '厄瓜多尔',
        'full_cname': '厄瓜多尔共和国',
        'lower_name': 'the republic of ecuador',
        'remark': '厄瓜多尔，全称厄瓜多尔共和国（西班牙语：República del Ecuador），南美洲国家联盟的成员国之一，位于南美洲西北部的国家，北与哥伦比亚相邻，南接秘鲁，西滨太平洋，与智利同为南美洲不与巴西相邻的国家，另辖有距厄瓜多尔本土1,000公里的加拉帕戈斯群岛。首都基多位于皮钦查火山的山麓。'
    },
    {
        'id': '66',
        'continent_id': '3',
        'code': 'EGY',
        'name': 'Egypt',
        'full_name': 'the Arab Republic of Egypt ',
        'cname': '埃及',
        'full_cname': '阿拉伯埃及共和国',
        'lower_name': 'the arab republic of egypt ',
        'remark': '埃及既是亚、非之间的陆地交通要冲，也是大西洋于印度洋之间海上航线的捷径，战略位置十分重要。埃及是中东人口最多的国家，也是非洲人口第二大国，在经济、科技领域方面长期处于非洲领先态势。也是一个非洲的强国，是非洲第三大经济体'
    },
    {
        'id': '67',
        'continent_id': '3',
        'code': 'ERI',
        'name': 'Eritrea',
        'full_name': 'the Commonwealth of Eritrea',
        'cname': '厄立特里亚',
        'full_cname': '厄立特里亚国',
        'lower_name': 'the commonwealth of eritrea',
        'remark': '厄立特里亚位于非洲东北部，西邻苏丹共和国，南邻埃塞俄比亚、吉布提，东隔红海与沙特阿拉伯和也门相望，扼红海进出印度洋的门户，地理位置十分重要。全国海岸线长1200公里'
    },
    {
        'id': '68',
        'continent_id': '2',
        'code': 'ESP',
        'name': 'Spain',
        'full_name': 'The Kingdom of Spain',
        'cname': '西班牙',
        'full_cname': '西班牙王国',
        'lower_name': 'the kingdom of spain',
        'remark': '西班牙是一个高度发达的资本主义国家，是欧盟和北约成员国，还是欧元区第四大经济体，国内生产总值（GDP）居欧洲国家第6名，世界排名第13。[3]  也是世界上最大的汽车生产国之一。'
    },
    {
        'id': '69',
        'continent_id': '2',
        'code': 'EST',
        'name': 'Estonia',
        'full_name': 'Republic of Estonia',
        'cname': '爱沙尼亚',
        'full_cname': '爱沙尼亚共和国',
        'lower_name': 'republic of estonia',
        'remark': '爱沙尼亚共和国是东欧波罗的海三国之一，波罗的海东岸，芬兰湾南岸，西南濒里加湾，南面和东面分别同拉脱维亚和俄罗斯接壤。1991年，继立陶宛独立后，宣布独立，首都为塔林。'
    },
    {
        'id': '70',
        'continent_id': '3',
        'code': 'ETH',
        'name': 'Ethiopia',
        'full_name': 'The Federal Democratic Republic of Ethiopia',
        'cname': '埃塞俄比亚',
        'full_cname': '埃塞俄比亚联邦民主共和国',
        'lower_name': 'the federal democratic republic of ethiopia',
        'remark': '埃塞俄比亚全名埃塞俄比亚联邦民主共和国（旧称“阿比西尼亚帝国”，Abyssinia）是一个位于非洲东北的国家。\n与一般非洲国家不同，埃塞俄比亚在第二次世界大战被意大利入侵（1936-1941年）之前，一直维持其古老的君主制度，并未受到殖民主义浪潮的吞噬。1974年，一次军事流血政变将1930年以来一直统治埃塞俄比亚的皇帝海尔·塞拉西一世（Haile Selassie I）推翻以后，埃塞俄比亚改为奉行社会主义，直至1991年放弃社会主义。'
    },
    {
        'id': '71',
        'continent_id': '2',
        'code': 'FIN',
        'name': 'Finland',
        'full_name': 'The Republic of Finland',
        'cname': '芬兰',
        'full_cname': '芬兰共和国',
        'lower_name': 'the republic of finland',
        'remark': '芬兰是一个高度发达的资本主义国家，也是一个高度工业化、自由化的市场经济体，芬兰是欧盟成员国之一，但人均产出远高于欧盟平均水平，与其邻国瑞典相当。国民享有极高标准的生活品质，芬兰政府公务员清廉高效，并且在社会形成广泛共识。监督世界各国腐败行为的非政府组织“透明国际”公布2012年全球清廉指数报告，在176个国家和地区中，芬兰名列第一，为最清廉国家。[2] '
    },
    {
        'id': '72',
        'continent_id': '4',
        'code': 'FJI',
        'name': 'Fiji',
        'full_name': 'The Republic of Fiji',
        'cname': '斐济',
        'full_cname': '斐济共和国',
        'lower_name': 'the republic of fiji',
        'remark': '斐济共和国（斐济语：Matanitu Tugalala o Viti）是一个太平洋岛国，位于南太平洋，瓦努阿图以东、汤加以西、图瓦卢以南，由332个岛屿组成，其中106个有人居住。多为珊瑚礁环绕的火山岛，主要有维提岛和瓦努阿岛等。属热带海洋性气候，常受飓风袭击。年平均气温22～30℃。'
    },
    {
        'id': '73',
        'continent_id': '',
        'code': 'FLK',
        'name': '',
        'full_name': '',
        'cname': '弗兰克群岛',
        'full_cname': '弗兰克群岛',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '74',
        'continent_id': '2',
        'code': 'FRA',
        'name': 'France',
        'full_name': 'The French Republic',
        'cname': '法国',
        'full_cname': '法兰西共和国',
        'lower_name': 'the french republic',
        'remark': '法国为欧洲国土面积第三大、西欧面积最大的国家，东与比利时、卢森堡、德国、瑞士、意大利接壤，南与西班牙、安道尔、摩纳哥接壤。本土地势东南高西北低，大致呈六边形，三面临水，南临地中海，西濒大西洋，西北隔英吉利海峡与英国相望，科西嘉岛是法国最大岛屿。[1] '
    },
    {
        'id': '75',
        'continent_id': '',
        'code': 'FRO',
        'name': '',
        'full_name': '',
        'cname': '法罗群岛',
        'full_cname': '法罗群岛',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '76',
        'continent_id': '4',
        'code': 'FSM',
        'name': 'Micronesia',
        'full_name': 'Federated States of Micronesia',
        'cname': '密克罗尼西亚联邦',
        'full_cname': '密克罗尼西亚联邦',
        'lower_name': 'federated states of micronesia',
        'remark': '属于太平洋三大岛群之一的密克罗尼西亚群岛，希腊语字根为“小岛”之义。密克罗尼西亚属热带雨林气候，年平均温度26-28℃，加罗林群岛附近是台风源地之一。该国海域面积大，渔业资源丰富，尤以金枪鱼著名。其他粮食及生活日用品均靠进口，经济较为落后且严重依赖美国。该国最西部的雅浦岛离中国福建约2600公里，离日本东京2900公里'
    },
    {
        'id': '77',
        'continent_id': '3',
        'code': 'GAB',
        'name': 'Gabon',
        'full_name': 'The Gabonese Republic',
        'cname': '加蓬',
        'full_cname': '加蓬共和国',
        'lower_name': 'the gabonese republic',
        'remark': '加蓬共和国位于非洲中部西海岸，横跨赤道线。东、南与刚果相连，北与喀麦隆接壤，西北与赤道几内亚毗邻，西濒大西洋，海岸线长800公里。自从1960年8月17日脱离法国统治独立以来，加蓬共和国共经历了3届总统的统治。'
    },
    {
        'id': '78',
        'continent_id': '2',
        'code': 'GBR',
        'name': 'United Kingdom',
        'full_name': 'The United Kingdom of Great Britain and Northern Ireland',
        'cname': '英国',
        'full_cname': '大不列颠及北爱尔兰联合王国',
        'lower_name': 'the united kingdom of great britain and northern ireland',
        'remark': '英国由大不列颠岛上的英格兰、威尔士和苏格兰，爱尔兰岛东北部的北爱尔兰以及一系列附属岛屿共同组成的一个西欧岛国。除本土之外，其还拥有十四个海外领地[1]  ，总人口超过6400万，以英格兰人（盎格鲁-撒克逊人）为主体民族。'
    },
    {
        'id': '79',
        'continent_id': '2',
        'code': 'GEO',
        'name': 'Georgia',
        'full_name': 'Georgia',
        'cname': '格鲁吉亚',
        'full_cname': '格鲁吉亚',
        'lower_name': 'georgia',
        'remark': '格鲁吉亚（英语：Georgia，格鲁吉亚语：საქართველო，罗马化：Sakartvelo）位于亚洲西南部高加索地区的黑海沿岸，北邻俄罗斯，南部与土耳其、亚美尼亚、阿塞拜疆接壤。'
    },
    {
        'id': '80',
        'continent_id': '',
        'code': 'GGY',
        'name': '',
        'full_name': '',
        'cname': '格恩西岛',
        'full_cname': '格恩西岛',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '81',
        'continent_id': '3',
        'code': 'GHA',
        'name': 'Ghana',
        'full_name': 'The Republic of Ghana',
        'cname': '加纳',
        'full_cname': '加纳共和国',
        'lower_name': 'the republic of ghana',
        'remark': '加纳是非洲西部的一个国家，位于非洲西部、几内亚湾北岸，西邻科特迪瓦，北接布基纳法索，东毗多哥，南濒大西洋，海岸线长约562公里。地形南北长、东西窄。全境大部地区为平原，东部有阿克瓦皮姆山脉，南部有夸胡高原，北部有甘巴加陡崖。最高峰杰博博山海拔876米。'
    },
    {
        'id': '82',
        'continent_id': '2',
        'code': 'GIB',
        'name': 'Gibraltar',
        'full_name': 'Gibraltar',
        'cname': '直布罗陀',
        'full_cname': '直布罗陀',
        'lower_name': 'gibraltar',
        'remark': '直布罗陀（Gibraltar），欧洲伊比利亚半岛南端的城市和港口。在直布罗陀海峡东端的北岸，扼大西洋和地中海交通咽喉，南对西班牙的北非属地休达市，战略地位十分重要。直布罗陀海峡长90公里，宽12公里至43公里，是大西洋和地中海之间唯一的海上通道。'
    },
    {
        'id': '83',
        'continent_id': '3',
        'code': 'GIN',
        'name': 'Guinea',
        'full_name': 'The Republic of Guinea',
        'cname': '几内亚',
        'full_cname': '几内亚共和国',
        'lower_name': 'the republic of guinea',
        'remark': '几内亚共和国（The Republic of Guinea），简称几内亚，来源于柏柏尔语，意为“黑人的国家”，位于西非西岸，北邻几内亚比绍、塞内加尔和马里，东与科特迪瓦、南与塞拉利昂和利比里亚接壤，西濒大西洋。'
    },
    {
        'id': '84',
        'continent_id': '',
        'code': 'GLP',
        'name': '',
        'full_name': '',
        'cname': '瓜德罗普',
        'full_cname': '瓜德罗普',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '85',
        'continent_id': '3',
        'code': 'GMB',
        'name': 'Gambia',
        'full_name': 'Islamic Republic of Gambia',
        'cname': '冈比亚',
        'full_cname': '冈比亚伊斯兰共和国',
        'lower_name': 'islamic republic of gambia',
        'remark': "冈比亚（全称：冈比亚伊斯兰共和国[1]  ，台湾地区称为“甘比亚”），位于北纬 13°28'，西经 16°39'，非洲西部大西洋沿岸地区，它西邻大西洋，北、东、南三面被塞内加尔紧紧包围，国土面积约为10380平方公里。"
    },
    {
        'id': '86',
        'continent_id': '3',
        'code': 'GNB',
        'name': 'Guinea Bissau',
        'full_name': 'The Republic of Guinea-Bissau',
        'cname': '几内亚比绍',
        'full_cname': '几内亚比绍共和国',
        'lower_name': 'the republic of guinea-bissau',
        'remark': '几内亚比绍共和国是位于北大西洋沿岸的西非国家。[1]  几内亚比绍北邻塞内加尔，东方、南方邻几内亚，西邻大西洋。首都是比绍。'
    },
    {
        'id': '87',
        'continent_id': '2',
        'code': 'GRC',
        'name': 'Greece',
        'full_name': 'The Hellenic Republic',
        'cname': '希腊',
        'full_cname': '希腊共和国',
        'lower_name': 'the hellenic republic',
        'remark': '希腊共和国（希腊语：Ελληνική Δημοκρατία），通称希腊（希腊语：Ελλάδα），是地处欧洲东南角、巴尔干半岛的南端的共和制国家。全国由半岛南部的伯罗奔尼撒半岛和爱琴海中的3000余座岛屿共同构成。希腊为连接欧亚非的战略要地，本土从西北至正北部分别邻阿尔巴尼亚、马其顿、保加利亚三国，东北与土耳其国境接壤。周围则自东而西分别濒临爱琴海、地中海本域与伊奥尼亚海。'
    },
    {
        'id': '88',
        'continent_id': '7',
        'code': 'GRD',
        'name': 'Grenada',
        'full_name': 'Grenada',
        'cname': '格林纳达',
        'full_cname': '格林纳达',
        'lower_name': 'grenada',
        'remark': '农业和旅游业是经济的基础，主要农产品肉豆蔻产量约占世界总产量的三分之一，仅次于印度尼西亚居世界第二位。现为英联邦成员国之一。'
    },
    {
        'id': '89',
        'continent_id': '6',
        'code': 'GRL',
        'name': 'Greenland',
        'full_name': 'Greenland',
        'cname': '格陵兰',
        'full_cname': '格陵兰',
        'lower_name': 'greenland',
        'remark': '格陵兰（格陵兰语：Kalaallit Nunaat）是丹麦王国的海外自治领土，领土大部分位于格陵兰岛上，面积2,166,086平方公里，约83.7%都由冰雪覆盖。“格陵兰”这个名称的意思为“绿色土地”，曾是丹麦王国的海外属地与王国内的自治体，格陵兰在2008年的公投后决定逐渐走向独立之途，并在2009年正式改制成为一个内政独立但外交、国防与财政相关事务仍由丹麦代管的过渡政体。格陵兰全境大部分处在北极圈内，气候寒冷。隔海峡与加拿大和冰岛两国相望。'
    },
    {
        'id': '90',
        'continent_id': '6',
        'code': 'GTM',
        'name': 'Guatemala',
        'full_name': 'The Republic of Guatemala',
        'cname': '危地马拉',
        'full_cname': '危地马拉共和国',
        'lower_name': 'the republic of guatemala',
        'remark': '危地马拉共和国（西班牙语：República de Guatemala），是中美洲的一个总统共和制国家，位于北美洲大陆的南部。西滨太平洋，东临加勒比海，向北与墨西哥相接，向东北邻伯利兹，向东南邻洪都拉斯和萨尔瓦多，全国总面积108889平方公里。[1] '
    },
    {
        'id': '91',
        'continent_id': '',
        'code': 'GUF',
        'name': '',
        'full_name': '',
        'cname': '法属圭亚那',
        'full_cname': '法属圭亚那',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '92',
        'continent_id': '',
        'code': 'GUM',
        'name': '',
        'full_name': '',
        'cname': '关岛',
        'full_cname': '关岛',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '93',
        'continent_id': '7',
        'code': 'GUY',
        'name': 'Guyana',
        'full_name': 'The Republic of Guyana',
        'cname': '圭亚那',
        'full_cname': '圭亚那共和国',
        'lower_name': 'the republic of guyana',
        'remark': '圭亚那位于南美洲东北部，全称为圭亚那共和国（ Republic of Guyana），1966年脱离英国独立。印第安语意为“多水之乡”。国民主要是印度斯坦人和黑人，多信奉基督教、印度教和伊斯兰教。它是南美洲唯一以英语为官方语言的国家，也是英联邦成员国。'
    },
    {
        'id': '94',
        'continent_id': '',
        'code': 'HMD',
        'name': '',
        'full_name': '',
        'cname': '赫德和麦克唐纳群岛',
        'full_cname': '赫德和麦克唐纳群岛',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '95',
        'continent_id': '6',
        'code': 'HND',
        'name': 'Honduras',
        'full_name': 'Republic of Honduras',
        'cname': '洪都拉斯',
        'full_cname': '洪都拉斯共和国',
        'lower_name': 'republic of honduras',
        'remark': '洪都拉斯，全称洪都拉斯共和国（西班牙语：República de Honduras），是中北美洲的一个多山国家，与危地马拉、萨尔瓦多和尼加拉瓜接壤，位于太平洋和加勒比海之间，有海岸线。'
    },
    {
        'id': '96',
        'continent_id': '2',
        'code': 'HRV',
        'name': 'Croatia',
        'full_name': 'The Republic of Croatia',
        'cname': '克罗地亚',
        'full_cname': '克罗地亚共和国',
        'lower_name': 'the republic of croatia',
        'remark': '克罗地亚为高收入市场经济体。克罗地亚经济以第三产业为主，第二产业为副，旅游业是国家经济的重要组成部分。克罗地亚是原南地区经济较为发达的国家，经济基础良好，旅游、建筑、造船和制药等产业发展水平较高。足球和网球并列为克罗地亚的第一运动。'
    },
    {
        'id': '97',
        'continent_id': '7',
        'code': 'HTI',
        'name': 'Haiti',
        'full_name': 'The Republic of Haiti',
        'cname': '海地',
        'full_cname': '海地共和国',
        'lower_name': 'the republic of haiti',
        'remark': '海地是世界上最为贫困的国家之一，最不发达国家之一，经济以农业为主，基础设施建设非常落后。由于能源不足，海地的工业非常不发达，失业率也极高，三分之二的工人没有固定的工作。美国是海地最大的援助国，1995至1999年间向海地提供了8.84亿美元的援助。海地与台湾当局保持着所谓的“外交关系”'
    },
    {
        'id': '98',
        'continent_id': '2',
        'code': 'HUN',
        'name': 'Hungary',
        'full_name': 'Hungary',
        'cname': '匈牙利',
        'full_cname': '匈牙利',
        'lower_name': 'hungary',
        'remark': '匈牙利（匈牙利文：Magyarország）是一个位于欧洲中部的内陆国家，与奥地利、斯洛伐克、乌克兰、罗马尼亚、塞尔维亚、克罗地亚和斯洛文尼亚接壤，截止2014年1月，全国总人口987.9万人，首都为布达佩斯。官方语言为匈牙利语，这是欧洲最广泛使用的非印欧语系语言。'
    },
    {
        'id': '99',
        'continent_id': '1',
        'code': 'IDN',
        'name': 'Indonesia',
        'full_name': 'The Republic of Indonesia',
        'cname': '印度尼西亚',
        'full_cname': '印度尼西亚共和国',
        'lower_name': 'the republic of indonesia',
        'remark': '印度尼西亚共和国（印尼语：Republik Indonesia，英语：The Republic of Indonesia），简称印度尼西亚或印尼，是东南亚国家，首都为雅加达。印尼与巴布亚新几内亚、东帝汶和马来西亚等国家相接。'
    },
    {
        'id': '100',
        'continent_id': '',
        'code': 'IMN',
        'name': '',
        'full_name': '',
        'cname': '曼岛',
        'full_cname': '曼岛',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '101',
        'continent_id': '1',
        'code': 'IND',
        'name': 'India',
        'full_name': 'The Republic of India',
        'cname': '印度',
        'full_cname': '印度共和国',
        'lower_name': 'the republic of india',
        'remark': '印度是世界四大文明古国之一。公元前2500年至1500年之间创造了印度河文明。公元前1500年左右，原居住在中亚的雅利安人中的一支进入南亚次大陆，征服当地土著，建立了一些奴隶制小国，确立了种姓制度，婆罗门教兴起。公元前4世纪崛起的孔雀王朝统一印度，中世纪小国林立，印度教兴起。1600年英国侵入，建立东印度公司。1757年沦为英殖民地。1947年8月15日，印巴分治，印度独立。1950年1月26日，印度共和国成立，为英联邦成员国'
    },
    {
        'id': '102',
        'continent_id': '',
        'code': 'IOT',
        'name': '',
        'full_name': '',
        'cname': '英属印度洋领地',
        'full_cname': '英属印度洋领地',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '103',
        'continent_id': '2',
        'code': 'IRL',
        'name': 'Ireland',
        'full_name': 'The Republic of Ireland',
        'cname': '爱尔兰',
        'full_cname': '爱尔兰共和国',
        'lower_name': 'the republic of ireland',
        'remark': '爱尔兰（爱尔兰语：Poblacht na hÉireann；英语：Republic of Ireland）， 是一个西欧的议会共和制国家，西临大西洋，东靠爱尔兰海，与英国隔海相望，是北美通向欧洲的通道，爱尔兰自然环境保持得相当好，素有“翡翠岛国”之称，全国绿树成荫，河流纵横。草地遍布，所以又有“绿岛”和“绿宝石”之称。它的大学教育非常成熟，首都都柏林自中世纪起就被誉为大学城。国内气候温和，各地的气温相对均衡。5~6月份是一年中阳光最充足的时期，比较适宜旅行。\n'
    },
    {
        'id': '104',
        'continent_id': '1',
        'code': 'IRN',
        'name': 'Iran',
        'full_name': 'The Islamic Republic of Iran',
        'cname': '伊朗',
        'full_cname': '伊朗伊斯兰共和国',
        'lower_name': 'the islamic republic of iran',
        'remark': '伊朗是亚洲主要经济体之一，经济实力较强。伊朗经济以石油开采业为主，为世界石油天然气大国，地处世界石油天然气最丰富的中东地区，石油出口是经济命脉，石油生产能力和石油出口量分别位于世界第四位和第二位，是石油输出国组织成员。伊朗的石油化工、钢铁、汽车制造业发达，还有电子工业、核工业、计算机软硬件业。'
    },
    {
        'id': '105',
        'continent_id': '1',
        'code': 'IRQ',
        'name': 'Iraq',
        'full_name': 'Republic Of Iraq',
        'cname': '伊拉克',
        'full_cname': '伊拉克共和国',
        'lower_name': 'republic of iraq',
        'remark': '伊拉克共和国位于亚洲西南部，阿拉伯半岛东北部，与它接壤的国家众多，南方是沙特阿拉伯、科威特，北方是土耳其，西北是叙利亚，伊朗和约旦各位于其东西两侧。阿拉伯族占全国总人口的73%，库尔德族占21%。该国穆斯林占人口的95%，其中什叶派穆斯林占54%、逊尼派穆斯林占41%。官方语言为阿拉伯语，北部库尔德地区的官方语言是库尔德语，东部地区有些居民讲波斯语。'
    },
    {
        'id': '106',
        'continent_id': '2',
        'code': 'ISL',
        'name': 'Iceland',
        'full_name': 'The Republic of Iceland',
        'cname': '冰岛',
        'full_cname': '冰岛共和国',
        'lower_name': 'the republic of iceland',
        'remark': '冰岛共和国（冰岛语：Ísland），简称冰岛，是北大西洋中的一个岛国，位于大西洋和北冰洋的交汇处，北欧五国之一，国土面积为10.3万平方千米，人口约为32万，是欧洲人口密度最小的国家。首都是雷克雅未克，也是冰岛的最大城市，首都附近的西南地区人口占全国的三分之二。'
    },
    {
        'id': '107',
        'continent_id': '1',
        'code': 'ISR',
        'name': 'Israel',
        'full_name': 'The State of Israel',
        'cname': '以色列',
        'full_cname': '以色列国',
        'lower_name': 'the state of israel',
        'remark': '以色列对于科学和科技的发展贡献相当大。自从建国以来，以色列一直致力于科学和工程学的技术研发，以色列的科学家在遗传学、计算机科学、光学、工程学、以及其他技术产业上的贡献都相当杰出。以色列的研发产业中最知名的是其军事科技产业，在农业、物理学和医学上的研发也十分知名。\n\n'
    },
    {
        'id': '108',
        'continent_id': '2',
        'code': 'ITA',
        'name': 'Italy',
        'full_name': 'The Republic of Italy',
        'cname': '意大利',
        'full_cname': '意大利共和国',
        'lower_name': 'the republic of italy',
        'remark': '意大利（意大利语：Italia），全称意大利共和国(意大利语：Repubblica Italiana)，是一个欧洲国家，主要由南欧的亚平宁半岛及两个位于地中海中的岛屿西西里岛与萨丁岛所组成。国土面积为301333平方公里，人口6002万。北方的阿尔卑斯山地区与法国、瑞士、奥地利以及斯洛文尼亚接壤，其领土还包围着两个微型国家——圣马力诺与梵蒂冈['
    },
    {
        'id': '109',
        'continent_id': '7',
        'code': 'JAM',
        'name': 'Jamaica',
        'full_name': 'Jamaica',
        'cname': '牙买加',
        'full_cname': '牙买加',
        'lower_name': 'jamaica',
        'remark': '牙买加（Jamaica），是加勒比海的其中一个岛国。牙买加原本是印第安人居住地，在1494年被哥伦布发现，不久之后就变成了西班牙人的殖民地。1655年，牙买加又被大英帝国占领。现为英联邦成员国之一'
    },
    {
        'id': '110',
        'continent_id': '',
        'code': 'JEY',
        'name': '',
        'full_name': '',
        'cname': '泽西岛',
        'full_cname': '泽西岛',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '111',
        'continent_id': '1',
        'code': 'JOR',
        'name': 'Jordan',
        'full_name': 'The Hashemite Kingdom of Jordan',
        'cname': '约旦',
        'full_cname': '约旦哈希姆王国',
        'lower_name': 'the hashemite kingdom of jordan',
        'remark': '约旦是一个比较小的阿拉伯国家，但相对周边国家来说约旦政治经济和文化生活等方面稳定。约旦人民生活较为富裕，在伊斯兰国家中相对开放。约旦比较缺乏淡水资源，石油资源不丰富。旅游业是约旦支柱产业之一，佩特拉古城，死海和瓦迪拉姆沙漠等景点成为世界各国游客探险旅行和休闲度假的首选目的地。'
    },
    {
        'id': '112',
        'continent_id': '1',
        'code': 'JPN',
        'name': 'Japan',
        'full_name': 'Japan',
        'cname': '日本',
        'full_cname': '日本国',
        'lower_name': 'japan',
        'remark': '日本（Japan），全称日本国，位于亚洲东部、太平洋西北部。国名意为“日出之国”，领土由北海道、本州、四国、九州四大岛及7200多个小岛组成，总面积37.8万平方千米。主体民族为和族，通用日语，总人口约1.26亿。'
    },
    {
        'id': '113',
        'continent_id': '1',
        'code': 'KAZ',
        'name': 'Kazakhstan',
        'full_name': 'The Republic of Kazakhstan',
        'cname': '哈萨克斯坦',
        'full_cname': '哈萨克斯坦共和国',
        'lower_name': 'the republic of kazakhstan',
        'remark': '哈萨克斯坦原为苏联加盟共和国之一，在1991年12月16日宣布独立。与俄罗斯、中国、吉尔吉斯斯坦、乌兹别克斯坦、土库曼斯坦等国接壤，并与伊朗、阿塞拜疆隔里海相望，国土面积排名世界第九位。'
    },
    {
        'id': '114',
        'continent_id': '3',
        'code': 'KEN',
        'name': 'Kenya',
        'full_name': 'The Republic of Kenya',
        'cname': '肯尼亚',
        'full_cname': '肯尼亚共和国',
        'lower_name': 'the republic of kenya',
        'remark': '肯尼亚位于非洲东部，赤道横贯中部，东非大裂谷纵贯南北。东邻索马里，南接坦桑尼亚，西连乌干达，北与埃塞俄比亚、南苏丹交界，东南濒临印度洋，海岸线长536公里。国土面积的18%为可耕地，其余主要适于畜牧业。\n'
    },
    {
        'id': '115',
        'continent_id': '1',
        'code': 'KGZ',
        'name': 'Kirghizia',
        'full_name': 'The Kyrgyz Republic',
        'cname': '吉尔吉斯斯坦',
        'full_cname': '吉尔吉斯共和国',
        'lower_name': 'the kyrgyz republic',
        'remark': '吉尔吉斯斯坦位于欧亚大陆的腹心地带，不仅是连接欧亚大陆和中东的要冲，还是大国势力东进西出、南下北上的必经之地。面积为19.85万平方公里，是位于中亚东北部的内陆国。'
    },
    {
        'id': '116',
        'continent_id': '1',
        'code': 'KHM',
        'name': 'Cambodia',
        'full_name': 'Kingdom of Cambodia',
        'cname': '柬埔寨',
        'full_cname': '柬埔寨王国',
        'lower_name': 'kingdom of cambodia',
        'remark': '柬埔寨全名柬埔寨王国（Kingdom of Cambodia）[1]  ，通称柬埔寨，旧称高棉，位于中南半岛，西部及西北部与泰国接壤，东北部与老挝交界，东部及东南部与越南毗邻，南部则面向暹罗湾。柬埔寨领土为碟状盆地，三面被丘陵与山脉环绕，中部为广阔而富庶的平原，占全国面积四分之三以上。境内有湄公河和东南亚最大的淡水湖－洞里萨湖（又称金边湖），首都金边。'
    },
    {
        'id': '117',
        'continent_id': '4',
        'code': 'KIR',
        'name': 'Kiribati',
        'full_name': 'The Republic of Kiribati',
        'cname': '基里巴斯',
        'full_cname': '基里巴斯共和国',
        'lower_name': 'the republic of kiribati',
        'remark': '基里巴斯共和国是一个太平洋岛国。全国共有33个小岛，分成吉尔伯特群岛、菲尼克斯群岛和莱恩群岛三大群岛，共有32个环礁及1个珊瑚岛，从其东部著名的圣诞岛，到最西部的巴纳巴岛，分布于赤道上3800公里的海域，拥有世界最大海洋保护区。基里巴斯是世界上最不发达国家（低度开发国家）之一。'
    },
    {
        'id': '118',
        'continent_id': '7',
        'code': 'KNA',
        'name': 'St Kitts-Nevis',
        'full_name': 'The Federation of Saint Kitts and Nevis',
        'cname': '圣其茨-尼维斯',
        'full_cname': '圣基茨和尼维斯联邦',
        'lower_name': 'the federation of saint kitts and nevis',
        'remark': '圣基茨和尼维斯位于东加勒比海背风群岛北部是一个由圣克里斯多福岛（圣基茨岛）与尼维斯岛所组成的联邦制岛国，在1983年9月19日独立，现为英联邦成员国之一，面积267平方公里。'
    },
    {
        'id': '119',
        'continent_id': '1',
        'code': 'KOR',
        'name': 'Korea',
        'full_name': 'Republic of Korea',
        'cname': '韩国',
        'full_cname': '大韩民国',
        'lower_name': 'republic of korea',
        'remark': '韩国（谚文：한국），全称大韩民国，别称南韩或南朝鲜。位于东亚朝鲜半岛南部，总面积约10万平方公里（占朝鲜半岛总面积的45%），主体民族为朝鲜族（韩族），通用韩语（朝鲜语），总人口约5041.85万（2014年）。首都为首尔（旧称：汉城；谚文：서울）。'
    },
    {
        'id': '120',
        'continent_id': '1',
        'code': 'KWT',
        'name': 'Kuwait',
        'full_name': 'The State of Kuwait',
        'cname': '科威特',
        'full_cname': '科威特国',
        'lower_name': 'the state of kuwait',
        'remark': '科威特的石油和天然气资源丰富。科威特的已探明石油储量940亿桶，约为世界总储量的10% 。石油、天然气工业为国民经济的支柱，其产值占国内生产总值的45%。'
    },
    {
        'id': '121',
        'continent_id': '1',
        'code': 'LAO',
        'name': 'Laos',
        'full_name': "Lao People's Democratic Republic",
        'cname': '老挝',
        'full_cname': '老挝人民民主共和国',
        'lower_name': "lao people's democratic republic",
        'remark': '老挝历史上曾是真腊王国的一部分。13至18世纪是南掌，之后受暹罗和越南入侵，后来又受法国入侵，1893年沦为法国殖民地。1945年独立，1975年废除君主制成立共和国。老挝是东南亚国家联盟成员国，也是最不发达国家之一，于1997年7月加入东盟。[1] '
    },
    {
        'id': '122',
        'continent_id': '1',
        'code': 'LBN',
        'name': 'Lebanon',
        'full_name': 'The Republic of Lebanon',
        'cname': '黎巴嫩',
        'full_cname': '黎巴嫩共和国',
        'lower_name': 'the republic of lebanon',
        'remark': '黎巴嫩共和国（阿拉伯语：لبنان；英文：Republic of Lebanon）位于亚洲西南部，地中海东部沿岸。黎巴嫩习惯上归入中东国家。该国东部和北部与叙利亚接壤，南部与以色列（或者巴勒斯坦，边界未划定）为邻，首都贝鲁特。黎巴嫩属热带地中海气候，沿海夏季炎热潮湿，冬季温暖。'
    },
    {
        'id': '123',
        'continent_id': '3',
        'code': 'LBR',
        'name': 'Liberia',
        'full_name': 'The Republic of Liberia',
        'cname': '利比里亚',
        'full_cname': '利比里亚共和国',
        'lower_name': 'the republic of liberia',
        'remark': '利比里亚共和国（英语：Republic of Liberia），是非洲的一个国家，处于非洲西部。北接几内亚，西北接塞拉利昂，东邻科特迪瓦，西南濒大西洋。\n'
    },
    {
        'id': '124',
        'continent_id': '3',
        'code': 'LBY',
        'name': 'Libyan Arab Jm',
        'full_name': 'State of Libya',
        'cname': '利比亚',
        'full_cname': '利比亚国',
        'lower_name': 'state of libya',
        'remark': '利比亚（全称利比亚国，阿拉伯语：دولة ليبيا‎‎，英语：State of Libya）是北非的一个国家，位于地中海南岸，与埃及、苏丹、乍得、尼日尔、阿尔及利亚跟突尼斯相邻。面积1759541平方公里。'
    },
    {
        'id': '125',
        'continent_id': '',
        'code': 'LCA',
        'name': '',
        'full_name': '',
        'cname': '圣卢西亚',
        'full_cname': '圣卢西亚',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '126',
        'continent_id': '2',
        'code': 'LIE',
        'name': 'Liechtenstein',
        'full_name': 'Principality of Liechtenstein',
        'cname': '列支敦士登',
        'full_cname': '列支敦士登公国',
        'lower_name': 'principality of liechtenstein',
        'remark': '列支敦士登坐落于欧洲阿尔卑斯山地的莱茵河谷，其西边以莱茵河为边界与瑞士相邻，东侧则以属于阿尔卑斯山脉的山岭地带与奥地利为界。全国只有西侧约三分之一的面积位在平坦的河谷里，其余地区大都属于山地。境内有一个唯一的天然湖：Gampriner Seele湖。'
    },
    {
        'id': '127',
        'continent_id': '1',
        'code': 'LKA',
        'name': 'Sri Lanka',
        'full_name': 'The Democratic Socialist Republic of Sri Lanka',
        'cname': '斯里兰卡',
        'full_cname': '斯里兰卡民主社会主义共和国',
        'lower_name': 'the democratic socialist republic of sri lanka',
        'remark': '斯里兰卡，全称斯里兰卡民主社会主义共和国（The Democratic Socialist Republic of Sri Lanka）[1]  ，旧称锡兰，是个热带岛国，位于印度洋海上，英联邦成员国之一。中国古代曾经称其为狮子国、师子国、僧伽罗。'
    },
    {
        'id': '128',
        'continent_id': '3',
        'code': 'LSO',
        'name': 'Lesotho',
        'full_name': 'The Kingdom of Lesotho',
        'cname': '莱索托',
        'full_cname': '莱索托王国',
        'lower_name': 'the kingdom of lesotho',
        'remark': '莱索托全名莱索托王国（索托语：Mmuso wa Lesotho，英语：Kingdom of Lesotho，意思是“说索托语的人们”），非洲南部国家之一，英联邦成员国之一。莱索托位于非洲东南部，为内陆国家，地处南非高原东缘德拉肯斯山西坡。'
    },
    {
        'id': '129',
        'continent_id': '2',
        'code': 'LTU',
        'name': 'Lithuania',
        'full_name': 'The Republic of Lithuania',
        'cname': '立陶宛',
        'full_cname': '立陶宛共和国',
        'lower_name': 'the republic of lithuania',
        'remark': '立陶宛全称：立陶宛共和国（立陶宛语：Lietuvos Respublika，英语：Republic of Lithuania）。位于波罗的海东岸，北界拉脱维亚，东南邻白俄罗斯，西南是俄罗斯的加里宁格勒州和波兰，首都维尔纽斯。\n'
    },
    {
        'id': '130',
        'continent_id': '2',
        'code': 'LUX',
        'name': 'Luxembourg',
        'full_name': 'The Grand Duchy of Luxembourg',
        'cname': '卢森堡',
        'full_cname': '卢森堡大公国',
        'lower_name': 'the grand duchy of luxembourg',
        'remark': '卢森堡是一个高度发达的资本主义国家，欧盟和北约创始成员国之一，也是高度发达的工业国家，还是欧元区内最重要的私人银行中心，及全球第二大仅次于美国的投资信托中心。金融、广播电视、钢铁是其三大经济支柱产业[1]  ，该国失业率极低，人均寿命80岁。'
    },
    {
        'id': '131',
        'continent_id': '2',
        'code': 'LVA',
        'name': 'Latvia',
        'full_name': 'Republic of Latvia',
        'cname': '拉脱维亚',
        'full_cname': '拉脱维亚共和国',
        'lower_name': 'republic of latvia',
        'remark': '拉脱维亚共和国（拉脱维亚语：Latvijas Republika）。国名源自民族语，意为“铠甲”、“金属制的服装”，是一个位于欧洲东北部的议会共和制国家。西邻波罗的海，与在其北方的爱沙尼亚及在其南方的立陶宛共同称为波罗的海三国。东与俄罗斯、白俄罗斯二国相邻，全国总面积64589平方公里'
    },
    {
        'id': '132',
        'continent_id': '3',
        'code': 'MAR',
        'name': 'Morocco',
        'full_name': 'The Kingdom of Morocco',
        'cname': '摩洛哥',
        'full_cname': '摩洛哥王国',
        'lower_name': 'the kingdom of morocco',
        'remark': '摩洛哥王国是非洲西北部的一个沿海阿拉伯国家，东部以及东南部与阿尔及利亚接壤，南部紧邻西撒哈拉，西部濒临大西洋，北部和西班牙、葡萄牙隔海相望。'
    },
    {
        'id': '133',
        'continent_id': '2',
        'code': 'MCO',
        'name': 'Monaco',
        'full_name': 'The Principality of Monaco',
        'cname': '摩纳哥',
        'full_cname': '摩纳哥公国',
        'lower_name': 'the principality of monaco',
        'remark': '摩纳哥公国（法语：Principauté de Monaco，英语：The Principality of Monaco）是位于欧洲的一个城邦国家，是欧洲两个公国之一（另一个是列支敦士登），也是世界第二小的国家（面积最小的是梵蒂冈），总面积为1.98平方公里。'
    },
    {
        'id': '134',
        'continent_id': '2',
        'code': 'MDA',
        'name': 'Moldavia',
        'full_name': 'The Republic of Moldova',
        'cname': '摩尔多瓦',
        'full_cname': '摩尔多瓦共和国',
        'lower_name': 'the republic of moldova',
        'remark': '摩尔多瓦共和国（英文：The Republic of Moldova）是位于东南欧的内陆国，与罗马尼亚和乌克兰接壤，首都基希讷乌。'
    },
    {
        'id': '135',
        'continent_id': '3',
        'code': 'MDG',
        'name': 'Madagascar',
        'full_name': 'the Republic of Madagascar ',
        'cname': '马达加斯加',
        'full_cname': '马达加斯加共和国',
        'lower_name': 'the republic of madagascar ',
        'remark': '马达加斯加全称马达加斯加共和国，非洲岛国，位于印度洋西部，隔莫桑比克海峡与非洲大陆相望，全岛由火山岩构成。作为非洲第一、世界第四大的岛屿，马达加斯加旅游资源丰富，上世纪90年代以来，该国政府将旅游业列为重点发展行业，鼓励外商向旅游业投资。居民中98%是马达加斯加人。'
    },
    {
        'id': '136',
        'continent_id': '1',
        'code': 'MDV',
        'name': 'Maldives',
        'full_name': 'The Republic of Maldives',
        'cname': '马尔代夫',
        'full_cname': '马尔代夫共和国',
        'lower_name': 'the republic of maldives',
        'remark': '马尔代夫全称：马尔代夫共和国（原名马尔代夫群岛，1968年11月改为现名[1]  ）位于南亚，是印度洋上的一个岛国，也是世界上最大的珊瑚岛国。由1200余个小珊瑚岛屿组成，其中202个岛屿有人居住，从空中鸟瞰就像一串珍珠撒在印度洋上。面积300平方公里（不计算领海），是亚洲最小的国家'
    },
    {
        'id': '137',
        'continent_id': '6',
        'code': 'MEX',
        'name': 'Mexico',
        'full_name': 'The United States of Mexico',
        'cname': '墨西哥',
        'full_cname': '墨西哥合众国',
        'lower_name': 'the united states of mexico',
        'remark': '墨西哥是一个自由市场经济体，拥有现代化的工业与农业，私有经济比重也在大幅提升。1994年北美自由贸易区正式建立后，墨西哥与美国的贸易和投资往来增加很快，极大地促进了经济发展和国民收入提高。'
    },
    {
        'id': '138',
        'continent_id': '4',
        'code': 'MHL',
        'name': 'Marshall Is Rep',
        'full_name': 'The Republic of Marshall Island ',
        'cname': '马绍尔群岛',
        'full_cname': '马绍尔群岛共和国',
        'lower_name': 'the republic of marshall island ',
        'remark': '马绍尔群岛历史上曾先后为西班牙、德国、日本、美国占领，其前身是美国托管的太平洋岛屿托管地的4个政治实体之一。美国托管期间，美国在该国进行了67次核试验，其中23次在该国比基尼环礁进行，导致改国居民严重的癌症、白血病等疾病。与美国在威克岛存在领土争议。'
    },
    {
        'id': '139',
        'continent_id': '2',
        'code': 'MKD',
        'name': 'Macedonia',
        'full_name': 'The Republic of Macedonia',
        'cname': '马其顿',
        'full_cname': '马其顿共和国',
        'lower_name': 'the republic of macedonia',
        'remark': '马其顿共和国（Република Македониа），位于欧洲东南部巴尔干半岛。而马其顿地区包括从前南斯拉夫独立出来的马其顿共和国、希腊北部的马其顿地区(包括中马其顿、西马其顿、东马其顿-色雷斯)，以及保加利亚的西南角。马其顿共和国的主体民族是斯拉夫人的一支，与古代大希腊的马其顿王国（全盛时期又称亚历山大帝国）无关。'
    },
    {
        'id': '140',
        'continent_id': '3',
        'code': 'MLI',
        'name': 'Mali',
        'full_name': 'The Republic of Mali',
        'cname': '马里',
        'full_cname': '马里共和国',
        'lower_name': 'the republic of mali',
        'remark': '马里共和国（République du Mali）是西非的一个内陆国家，向北与阿尔及利亚、向东与尼日尔、向南与布基纳法索和科特迪瓦、向西南与几内亚、向西与毛里塔尼亚和塞内加尔接壤，是西非面积第二大的国家。它的北部边界在撒哈拉沙漠的中心，大多数人集中在南部，尼日尔河和塞内加尔河源于这里。马里过去也被称为法属苏丹，它的名字来源于马里帝国。马里国家面积的2%是农用地，同时80%的劳动力在农业工作。'
    },
    {
        'id': '141',
        'continent_id': '2',
        'code': 'MLT',
        'name': 'Malta',
        'full_name': 'Republic of Malta',
        'cname': '马耳他',
        'full_cname': '马耳他共和国',
        'lower_name': 'republic of malta',
        'remark': '马耳他[1]  是位于地中海中部的岛国，有“地中海心脏”之称，是欧洲最著名的休闲度假地；他是欧亚非海运交通的枢纽。由于重要战略位置，马耳他在历史上曾为多个民族占领。'
    },
    {
        'id': '142',
        'continent_id': '1',
        'code': 'MMR',
        'name': 'Myanmar',
        'full_name': 'Republic Of The Union Of Myanmar',
        'cname': '缅甸',
        'full_cname': '缅甸联邦共和国',
        'lower_name': 'republic of the union of myanmar',
        'remark': '缅甸联邦共和国简称为缅甸，是东南亚国家联盟成员国之一。西南临安达曼海，西北与印度和孟加拉国为邻，东北靠中国，东南接泰国与老挝。首都为内比都。'
    },
    {
        'id': '143',
        'continent_id': '1',
        'code': 'MNG',
        'name': 'Mongolia',
        'full_name': 'Mongolia',
        'cname': '蒙古',
        'full_cname': '蒙古国',
        'lower_name': 'mongolia',
        'remark': '蒙古，历史上曾被匈奴、鲜卑、柔然、突厥等游牧民族统治。1206年，成吉思汗建立了蒙古帝国；1271年，忽必烈建立元朝；17世纪末，被纳入清朝统治范围。1921年，取得事实独立。1924年，成立受前苏联控制的蒙古人民共和国。1992年2月改国名为“蒙古国”[2]  。'
    },
    {
        'id': '144',
        'continent_id': '',
        'code': 'MNP',
        'name': '',
        'full_name': '',
        'cname': '北马里亚纳群岛',
        'full_cname': '北马里亚纳群岛',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '145',
        'continent_id': '3',
        'code': 'MOZ',
        'name': 'Mozambique',
        'full_name': 'The Republic of Mozambique',
        'cname': '莫桑比克',
        'full_cname': '莫桑比克共和国',
        'lower_name': 'the republic of mozambique',
        'remark': '莫桑比克共和国（葡萄牙语：República de Moçambique）曾译作莫三鼻给，是非洲南部国家，以葡萄牙语作为官方语言，1975年脱离葡萄牙殖民地而独立。作为与英国并无宪制关系的国家，在1995年以特殊例子加入英联邦。莫桑比克的前身，就是葡属东非洲，它是在1498年3月，被葡萄牙航海家达伽马所率领的船队发现，当时就有阿拉伯的贸易站在沿海一带设立。'
    },
    {
        'id': '146',
        'continent_id': '3',
        'code': 'MRT',
        'name': 'Mauritania',
        'full_name': 'The Islamic Republic of Mauritania',
        'cname': '毛里塔尼亚',
        'full_cname': '毛里塔尼亚伊斯兰共和国',
        'lower_name': 'the islamic republic of mauritania',
        'remark': '毛里塔尼亚位于非洲西北部，地处北纬15～27度之间，面积103.07万平方公里。毛搭西濒大西洋，北部与西撒哈拉和阿尔及利亚接壤西，东南部与马里为邻，南与塞内加尔相望。地区属热带沙漠性气候，全境地势平坦。有2/3的地区是沙漠'
    },
    {
        'id': '147',
        'continent_id': '7',
        'code': 'MSR',
        'name': 'Montserrat',
        'full_name': 'Montserrat',
        'cname': '蒙特塞拉特',
        'full_cname': '蒙特塞拉特岛',
        'lower_name': 'montserrat',
        'remark': '蒙塞拉特（英语：Montserrat）岛，英国海外领土，位于西印度群岛中背风群岛南部的火山岛，由哥伦布在1493年以西班牙内同名的山命名。该岛长18公里，宽11公里。岛上有三座主要的火山，年降雨量1525毫米。蒙塞拉特岛原本盛产海岛棉、香蕉、糖和蔬菜等。因为1995年7月18日开始的火山爆发，所以本岛多处被毁灭而三分之二人口逃往外国。火山爆发仍继续，使得岛上多处不可居住。'
    },
    {
        'id': '148',
        'continent_id': '7',
        'code': 'MTQ',
        'name': 'Martinique',
        'full_name': 'Martinique',
        'cname': '马提尼克',
        'full_cname': '马提尼克岛',
        'lower_name': 'martinique',
        'remark': '法国的海外大区，位于小安地列斯群岛的向风群岛最北部，岛上自然风光优美，有火山和海滩，盛产甘蔗、棕榈树、香蕉和菠萝等植物，曾被克里斯托弗·哥伦布（Christopher Columbus）喻为“世界上最美的国家”。马提尼克居民克里奥尔人还保留着传统的民俗习惯，催长身高的传说更使得该岛充满了神秘色彩。'
    },
    {
        'id': '149',
        'continent_id': '3',
        'code': 'MUS',
        'name': 'Mauritius',
        'full_name': 'the Republic of Mauritius',
        'cname': '毛里求斯',
        'full_cname': '毛里求斯共和国',
        'lower_name': 'the republic of mauritius',
        'remark': '毛里求斯共和国为非洲东部一岛国，位于印度洋西南方，距马达加斯加约800公里，与非洲大陆相距2,200公里。作为火山岛国，毛里求斯四周被珊瑚礁环绕，岛上地貌千姿百态，沿海是狭窄平原，中部是高原山地，有多座山脉和孤立的山峰。整个国土由毛里求斯岛和其他小群岛组成，经历荷兰、法国和英国等国殖民统治后，于1968年3月12日脱离英国殖民获得独立，岛上亦有不少华人。'
    },
    {
        'id': '150',
        'continent_id': '3',
        'code': 'MWI',
        'name': 'Malawi',
        'full_name': 'The Republic of Malawi',
        'cname': '马拉维',
        'full_cname': '马拉维共和国',
        'lower_name': 'the republic of malawi',
        'remark': '马拉维全称：马拉维共和国（齐切瓦语：Dziko la Malaŵi；英语：Republic of Malawi），位于非洲东南部，是个内陆国家，被坦桑尼亚、莫桑比克、赞比亚三国包围其中，国土面积11.8万平方公里，人口1511.8万。马拉维得名于境内的马拉维湖，这个湖是非洲第三大湖，面积3万平方公里，湖水最深可达700多米，有很多世界独一无二的淡水鱼种类。'
    },
    {
        'id': '151',
        'continent_id': '1',
        'code': 'MYS',
        'name': 'Malaysia',
        'full_name': 'Malaysia',
        'cname': '马来西亚',
        'full_cname': '马来西亚联邦',
        'lower_name': 'malaysia',
        'remark': '马来西亚，全称马来西亚联邦（Malaysia，前身马来亚），简称大马。马来西亚被南中国海分为两个部分：位于马来半岛的西马来西亚，北接泰国，南部隔着柔佛海峡，以新柔长堤和第二通道连接新加坡；东马来西亚，位于婆罗洲（加里曼丹岛）的北部，南接印度尼西亚，文莱国夹在沙巴州和砂拉越州之间。'
    },
    {
        'id': '152',
        'continent_id': '3',
        'code': 'MYT',
        'name': 'Mayotte',
        'full_name': 'Territorial Collectivity of Mayotte',
        'cname': '马约特岛',
        'full_cname': '马约特岛',
        'lower_name': 'territorial collectivity of mayotte',
        'remark': '马约特岛（Mayotte ）曾经为法国的一个集体领地，全称为马约特集体领地(Territorial Collectivity of Mayotte, 法语作Collectivite Territoriale de Mayotte)，亦称马奥霍(Mahore)，现为法国的一个海外大区（海外省）。位于莫桑比克海峡，与大科摩罗岛、昂儒昂岛、莫埃利岛共同组成科摩罗群岛。面积为374平方公里，居民约18万人，经济以农业为主，主要生产香子兰等香料，是法国的海外领地之一，马约特岛包括大陆地岛、小陆地岛以及周围一些小岛，首府和最大城市马穆楚。岛屿也被临近的东非印度洋岛国科摩罗宣称所有，但由法国实际控制。'
    },
    {
        'id': '153',
        'continent_id': '3',
        'code': 'NAM',
        'name': 'Namibia',
        'full_name': 'The Republic of Namibia',
        'cname': '纳米比亚',
        'full_cname': '纳米比亚共和国',
        'lower_name': 'the republic of namibia',
        'remark': '纳米比亚共和国（英语：The Republic of Namibia）位于非洲西南部，北靠安哥拉和赞比亚，东连博茨瓦纳，南接南非。海拔高度为1000-2000米，干旱少雨，属亚热带、半沙漠性气候。该国分为13个行政区和50个地方政府，首都温得和克（Windhoek）。'
    },
    {
        'id': '154',
        'continent_id': '4',
        'code': 'NCL',
        'name': 'New Caledonia',
        'full_name': 'New Caledonia',
        'cname': '新喀里多尼亚',
        'full_cname': '新喀里多尼亚',
        'lower_name': 'new caledonia',
        'remark': '新喀里多尼亚（法文：Nouvelle-Calédonie），法国的海外属地之一，位于南回归线附近，处于南太平洋美拉尼西亚岛群，距澳大利亚昆士兰东岸1500公里处。该地区整体主要由新喀里多尼亚岛、洛亚蒂群岛和切斯特菲尔德群岛组成。官方语言法语，通用美拉尼西亚语和波利尼西亚语。所属时区位于东UTC+11区，比北京时间早三个小时。'
    },
    {
        'id': '155',
        'continent_id': '3',
        'code': 'NER',
        'name': 'Niger',
        'full_name': 'The Republic of Niger',
        'cname': '尼日尔',
        'full_cname': '尼日尔共和国',
        'lower_name': 'the republic of niger',
        'remark': '尼日尔共和国位于非洲中西部，是撒哈拉沙漠南缘的内陆国，该国北与阿尔及利亚和利比亚接壤，南同尼日利亚和贝宁交界，西与马里和布基纳法索毗连，东同乍得相邻'
    },
    {
        'id': '156',
        'continent_id': '',
        'code': 'NFK',
        'name': '',
        'full_name': '',
        'cname': '诺福克',
        'full_cname': '诺福克',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '157',
        'continent_id': '3',
        'code': 'NGA',
        'name': 'Nigeria',
        'full_name': 'Federal Republic of Nigeria',
        'cname': '尼日利亚',
        'full_cname': '尼日利亚联邦共和国',
        'lower_name': 'federal republic of nigeria',
        'remark': '尼日利亚联邦共和国（Federal Republic of Nigeria），位于6°27′N，3°24′E，处于西非东南部的国家，非洲几内亚湾西岸的顶点，邻国包括西边的贝宁，北边的尼日尔，东北方隔乍得湖与乍得接壤一小段国界，东和东南与喀麦隆毗连，南濒大西洋几内亚湾。'
    },
    {
        'id': '158',
        'continent_id': '6',
        'code': 'NIC',
        'name': 'Nicaragua',
        'full_name': 'The Republic of Nicaragua',
        'cname': '尼加拉瓜',
        'full_cname': '尼加拉瓜共和国',
        'lower_name': 'the republic of nicaragua',
        'remark': '尼加拉瓜，全称尼加拉瓜共和国（英文：The Republic of Nicaragua），是一个总统共和制的国家，位于中美洲中部，北接洪都拉斯，南连哥斯达黎加，东临加勒比海，西濒太平洋，尼加拉瓜湖为中美洲最大的湖泊，首都为马那瓜。'
    },
    {
        'id': '159',
        'continent_id': '',
        'code': 'NIU',
        'name': '',
        'full_name': '',
        'cname': '纽埃',
        'full_cname': '纽埃',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '160',
        'continent_id': '2',
        'code': 'NLD',
        'name': 'Netherlands',
        'full_name': 'The Kingdom of Netherlands',
        'cname': '荷兰',
        'full_cname': '尼德兰王国',
        'lower_name': 'the kingdom of netherlands',
        'remark': '荷兰（荷兰语:Nederland），本称尼德兰王国，因其荷兰省最为出名，故称荷兰（Holland）多被世界称为荷兰。位于欧洲西偏北部，是著名的亚欧大陆桥的欧洲始发点。'
    },
    {
        'id': '161',
        'continent_id': '2',
        'code': 'NOR',
        'name': 'Norway',
        'full_name': 'The Kingdom of Norway',
        'cname': '挪威',
        'full_cname': '挪威王国',
        'lower_name': 'the kingdom of norway',
        'remark': '挪威（挪威语：Norge 或Noreg），全称为挪威王国（挪威语：Kongeriket Norge或 Kongeriket Noreg）。 意为“通往北方之路”，北欧五国之一，位于斯堪的纳维亚半岛西部。挪威领土南北狭长，海岸线漫长曲折，沿海岛屿很多，被称为“万岛之国”，领土与瑞典、芬兰、俄罗斯接壤，领土还包括斯瓦尔巴群岛和扬马延岛。首都为奥斯陆。'
    },
    {
        'id': '162',
        'continent_id': '1',
        'code': 'NPL',
        'name': 'Nepal',
        'full_name': 'Federal Democratic Republic of Nepal',
        'cname': '尼泊尔',
        'full_cname': '尼泊尔联邦民主共和国',
        'lower_name': 'federal democratic republic of nepal',
        'remark': '尼泊尔联邦民主共和国（Federal Democratic Republic of Nepal），简称尼泊尔，为南亚山区内陆国家，是世界三大宗教之一佛教的发源地，位于喜马拉雅山脉南麓，北与中华人民共和国西藏自治区相接，东与印度共和国锡金邦为邻，西部和南部与印度共和国西孟加拉邦、比哈尔邦、北方邦和北阿坎德邦接壤。'
    },
    {
        'id': '163',
        'continent_id': '4',
        'code': 'NRU',
        'name': 'Nauru',
        'full_name': 'The Republic of Nauru',
        'cname': '瑙鲁',
        'full_cname': '瑙鲁共和国',
        'lower_name': 'the republic of nauru',
        'remark': '瑙鲁共和国（英语：The Republic of Nauru；瑙鲁语：Ripublik Naoero）简称瑙鲁，位于南太平洋中西部的密克罗尼西亚群岛中，有“天堂岛”之称。[1]  瑙鲁面积只有24㎞²，是世界上最小的岛国'
    },
    {
        'id': '164',
        'continent_id': '4',
        'code': 'NZL',
        'name': 'New Zealand',
        'full_name': 'New Zealand',
        'cname': '新西兰',
        'full_cname': '新西兰',
        'lower_name': 'new zealand',
        'remark': '新西兰（New Zealand），又译纽西兰，是一个政治体制实行君主立宪制混合英国式议会民主制的国家，现为英联邦成员国之一。新西兰位于太平洋西南部，领土由南岛、北岛两大岛屿组成，以库克海峡分隔，南岛邻近南极洲，北岛与斐济及汤加相望。首都惠灵顿以及最大城市奥克兰均位于北岛[1]  。'
    },
    {
        'id': '165',
        'continent_id': '1',
        'code': 'OMN',
        'name': 'Oman',
        'full_name': 'Sultanate of Oman',
        'cname': '阿曼',
        'full_cname': '阿曼苏丹国',
        'lower_name': 'sultanate of oman',
        'remark': '阿曼苏丹国（The Sultanate of Oman），简称为阿曼，位于亚洲西部的阿拉伯半岛东南部，它扼守着世界上最重要的石油输出通道——波斯湾和阿曼湾之间的霍尔木兹海峡。阿曼是阿拉伯半岛最古老的国家之一，公元前2000年已经广泛进行海上和陆路贸易活动，并成为阿拉伯半岛的造船中心。'
    },
    {
        'id': '166',
        'continent_id': '1',
        'code': 'PAK',
        'name': 'Pakistan',
        'full_name': 'the Islamic Republic of Pakistan',
        'cname': '巴基斯坦',
        'full_cname': '巴基斯坦伊斯兰共和国',
        'lower_name': 'the islamic republic of pakistan',
        'remark': '巴基斯坦位于南亚次大陆西北部，南濒阿拉伯海，东接印度，东北邻中国，西北与阿富汗交界，西邻伊朗。海岸线长980公里。南部属热带气候，其余属亚热带气候。首都伊斯兰堡，前首都卡拉奇是最大城市。'
    },
    {
        'id': '167',
        'continent_id': '6',
        'code': 'PAN',
        'name': 'Panama',
        'full_name': 'The Republic of Panama',
        'cname': '巴拿马',
        'full_cname': '巴拿马共和国',
        'lower_name': 'the republic of panama',
        'remark': '1501年，巴拿马沦为西班牙殖民地。1903年11月3日，成立巴拿马共和国。巴拿马中央连接大西洋与太平洋的巴拿马运河，拥有重要的战略地位，是南、北美洲的分界线。1999年12月31日美国将巴拿马运河所有土地、建筑、基础设施和所有的管理权都交还给巴拿马。鉴于重要的地理位置，巴拿马经济的重点是服务业，以金融、贸易和旅游业为主。金融业和转口贸易发达，并在经济中占重要地位。[1-2] '
    },
    {
        'id': '168',
        'continent_id': '',
        'code': 'PCN',
        'name': '',
        'full_name': '',
        'cname': '皮特凯恩',
        'full_cname': '皮特凯恩',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '169',
        'continent_id': '7',
        'code': 'PER',
        'name': 'Peru',
        'full_name': 'The Republic of Peru',
        'cname': '秘鲁',
        'full_cname': '秘鲁共和国',
        'lower_name': 'the republic of peru',
        'remark': '秘鲁，全称为秘鲁共和国（西班牙语：República del Perú），是南美洲西部的一个国家，北邻厄瓜多尔和哥伦比亚，东与巴西和玻利维亚接壤，南接智利，西濒太平洋，是南美洲国家联盟的成员国。'
    },
    {
        'id': '170',
        'continent_id': '1',
        'code': 'PHL',
        'name': 'Philippines',
        'full_name': 'Republic of the Philippines',
        'cname': '菲律宾',
        'full_cname': '菲律宾共和国',
        'lower_name': 'republic of the philippines',
        'remark': '菲律宾人的祖先是亚洲大陆的移民。在14世纪前后，建立了海上强国苏禄王国。1565年，西班牙侵占菲律宾，统治菲300多年。1898年美国占领菲律宾。1942年，日本占领菲律宾。二战后，菲重新沦为美国殖民地。1946年，菲律宾独立'
    },
    {
        'id': '171',
        'continent_id': '4',
        'code': 'PLW',
        'name': 'Palau',
        'full_name': 'The Republic of Palau',
        'cname': '帕劳',
        'full_cname': '帕劳共和国',
        'lower_name': 'the republic of palau',
        'remark': '帕劳，全称帕劳共和国（帕劳语：Beluu er a Belau），是西太平洋上的岛国。1994年10月1日从美国的托管统治下独立。支柱产业是渔业和旅游业，主要宗教信仰是基督教和古老的Modekngei教派，70%人口是当地土著，其余人口主要是菲律宾人。'
    },
    {
        'id': '172',
        'continent_id': '4',
        'code': 'PNG',
        'name': 'Papua New Guinea',
        'full_name': 'The Independent State of Papua New Guinea',
        'cname': '巴布亚新几内亚',
        'full_cname': '巴布亚新几内亚独立国',
        'lower_name': 'the independent state of papua new guinea',
        'remark': '巴布亚新几内亚是南太平洋西部的一个岛国，是大洋洲第二大国，属英联邦成员国，包括新几内亚岛东半部及附近俾斯麦群岛、布干维尔岛等共约600余个大小岛屿。国名由巴布亚和新几内亚两部分组成，得名于岛名。'
    },
    {
        'id': '173',
        'continent_id': '2',
        'code': 'POL',
        'name': 'Poland',
        'full_name': 'The Republic of Poland',
        'cname': '波兰',
        'full_cname': '波兰共和国',
        'lower_name': 'the republic of poland',
        'remark': '历史上曾是欧洲强国，后国力衰退，并于俄普奥三次瓜分波兰中亡国几个世纪，一战后复国，但不久又在二战中被苏联和德国瓜分，冷战时期处于苏联势力范围之下，苏联解体后，加入欧盟和北约，近年来波兰无论在欧盟还是在国际舞台的地位亦与日俱增，自1918年11月11日恢复独立以来，经过90年的发展变迁，特别是在21世纪初的几年里，波兰在欧洲的重要性越来越引人重视。[2] '
    },
    {
        'id': '174',
        'continent_id': '6',
        'code': 'PRI',
        'name': 'Puerto Rico',
        'full_name': 'The Commonwealth of Puerto Rico',
        'cname': '波多黎各',
        'full_cname': '波多黎各自由邦',
        'lower_name': 'the commonwealth of puerto rico',
        'remark': '波多黎各自治邦（英语：The Commonwealth of Puerto Rico，西班牙语：Estado Libre Asociado de Puerto Rico）位于加勒比海的大安的列斯群岛东部。包括波多黎各岛及别克斯、库莱夫拉等小岛。北临大西洋，南濒加勒比海、东与美属、英属维尔京群岛隔水相望，西隔莫纳海峡同多米尼加共和国为邻。首府为圣胡安。'
    },
    {
        'id': '175',
        'continent_id': '1',
        'code': 'PRK',
        'name': 'Korea,DPR',
        'full_name': "Democratic People's Republic of Korea",
        'cname': '朝鲜',
        'full_cname': '朝鲜民主主义人民共和国',
        'lower_name': "democratic people's republic of korea",
        'remark': '鲜民主主义人民共和国于第二次世界大战后的1948年9月9日成立，领土面积122762平方公里，人口2405万（2008年）。朝鲜族为单一民族，通用朝鲜语。朝鲜民主主义人民共和国1958年宣布完成了城市、农村生产关系的社会主义改造，建立了社会主义经济制度。1970年宣布实现了社会主义工业化。1975年5月，成为“七十七国集团”正式成员国，同年8月正式加入不结盟运动。1991年9月17日同韩国一起加入了联合国。2000年7月，加入东盟地区论坛（ARF）。与163个国家（含欧盟）建立了外交关系。[1] '
    },
    {
        'id': '176',
        'continent_id': '2',
        'code': 'PRT',
        'name': 'Portugal',
        'full_name': 'Portugal,the Portuguese Republic',
        'cname': '葡萄牙',
        'full_cname': '葡萄牙共和国',
        'lower_name': 'portugal,the portuguese republic',
        'remark': '葡萄牙（Portugal），全称为葡萄牙共和国（葡萄牙语：República Portuguesa），是一个位于欧洲西南部的共和制国家。东邻同处于伊比利亚半岛的西班牙，葡萄牙的西部和南部是大西洋的海岸。除了欧洲大陆的领土以外，大西洋的亚速群岛和马德拉群岛也是葡萄牙领土。葡萄牙首都里斯本以西的罗卡角是欧洲大陆的最西端。'
    },
    {
        'id': '177',
        'continent_id': '7',
        'code': 'PRY',
        'name': 'Paraguay',
        'full_name': 'The Republic of Paraguay',
        'cname': '巴拉圭',
        'full_cname': '巴拉圭共和国',
        'lower_name': 'the republic of paraguay',
        'remark': '巴拉圭全称：巴拉圭共和国（西班牙语：República del Paraguay）是南美洲中部的内陆国家，境内主要山脉是阿曼拜山和巴兰卡尤山，其南边国境完全与阿根廷接壤，东北与西北角则分别是巴西与玻利维亚。'
    },
    {
        'id': '178',
        'continent_id': '1',
        'code': 'PSE',
        'name': 'Palestine',
        'full_name': 'The State of Palestine',
        'cname': '巴勒斯坦',
        'full_cname': '巴勒斯坦国',
        'lower_name': 'the state of palestine',
        'remark': '巴勒斯坦国（阿拉伯语：فلسطين‎‎，英语：Palestine）是中东的一个国家，由加沙和约旦河西岸两部分组成。加沙地区面积365平方公里，约旦河西岸地区面积5800平方公里。巴勒斯坦实际控制的土地面积为2500平方公里。'
    },
    {
        'id': '179',
        'continent_id': '4',
        'code': 'PYF',
        'name': 'French Polynesia',
        'full_name': 'French Polynesia',
        'cname': '法属玻利尼西亚',
        'full_cname': '法属波利尼西亚',
        'lower_name': 'french polynesia',
        'remark': '法属波利尼西亚属热带雨林气候，11月～4月为雨季，年均降水量1625毫米。3月份为气温最高月，达28℃，8月为气温最低月，达20℃，年均气温26℃。首都是帕皮提（Papeete），1818年建城，人口约13.3万人（2009年）。高级专员阿道夫·科尔拉（Adolphe COLRAT），2008年7月任职。'
    },
    {
        'id': '180',
        'continent_id': '1',
        'code': 'QAT',
        'name': 'Qatar',
        'full_name': 'The State of Qatar',
        'cname': '卡塔尔',
        'full_cname': '卡塔尔国',
        'lower_name': 'the state of qatar',
        'remark': '卡塔尔拥有相当丰富的石油和天然气资源，天然气的总储量为全世界第三名。20世纪40年代，石油储量的发现，完全改变了整个国家的经济。拥有很高的生活水准，有许多提供给国民的社会福利，例如免费的医疗服务。'
    },
    {
        'id': '181',
        'continent_id': '3',
        'code': 'REU',
        'name': 'Reunion',
        'full_name': 'Reunion Island',
        'cname': '留尼汪',
        'full_cname': '留尼汪岛',
        'lower_name': 'reunion island',
        'remark': "留尼汪岛（l'île de la Reunion）面积2512平方公里， 人口840974人（2013年）。居民主要为马达加斯加人、非洲人、欧洲人、印度人、华人、巴基斯坦人和克里奥尔人。官方语言是法语。94%的居民信奉天主教，少数人信仰伊斯兰教、印度教、佛教。首府圣但尼（Saint-Denis)，人口132338人（1999年）。行政区域分为4个专区（无实权），24个市镇。货币欧元"
    },
    {
        'id': '182',
        'continent_id': '2',
        'code': 'ROU',
        'name': 'Romania',
        'full_name': 'Romania',
        'cname': '罗马尼亚',
        'full_cname': '罗马尼亚',
        'lower_name': 'romania',
        'remark': '罗马尼亚（罗马尼亚语：Lomânia）位于东南欧巴尔干半岛东北部。北和东北分别与乌克兰和摩尔多瓦为邻，南接保加利亚，西南和西北分别与塞尔维亚和匈牙利接壤，东南临黑海。面积238391平方公里，人口1994万（2014年12月）。首都布加勒斯特。['
    },
    {
        'id': '183',
        'continent_id': '2',
        'code': 'RUS',
        'name': 'Russia',
        'full_name': 'Russian Federation',
        'cname': '俄罗斯联邦',
        'full_cname': '俄罗斯联邦',
        'lower_name': 'russian federation',
        'remark': '俄罗斯联邦（俄语：Российская Федерация，英语：The Russian Federation），通称俄罗斯（俄国为俄罗斯帝国的简称），是由22个自治共和国、46个州、9个边疆区、4个自治区、1个自治州、3个联邦直辖市组成的联邦共和立宪制国家。[1]  国旗为白、蓝、红三色旗。国徽主体为双头鹰图案。俄罗斯位于欧亚大陆北部，地跨欧亚两大洲，国土面积为1707.54万平方公里，是世界上面积最大的国家。'
    },
    {
        'id': '184',
        'continent_id': '3',
        'code': 'RWA',
        'name': 'Rwanda',
        'full_name': 'the Republic of Rwanda',
        'cname': '卢旺达',
        'full_cname': '卢旺达共和国',
        'lower_name': 'the republic of rwanda',
        'remark': "卢旺达（Republika y'u Rwanda） 是非洲中东部的一个国家，全称卢旺达共和国，位于非洲中东部赤道南侧，内陆国家。东邻坦桑尼亚，南连布隆迪，西和西北与刚果（金）交界，北与乌干达接壤，国土面积26338平方公里。境内多山，有“千丘之国”的称谓。"
    },
    {
        'id': '185',
        'continent_id': '1',
        'code': 'SAU',
        'name': 'Saudi Arabia',
        'full_name': 'Kingdom of Saudi Arabia',
        'cname': '沙特阿拉伯',
        'full_cname': '沙特阿拉伯王国',
        'lower_name': 'kingdom of saudi arabia',
        'remark': '沙特是名副其实的“石油王国”，石油储量和产量均居世界首位，使其成为世界上最富裕的国家之一。[1]  沙特是世界上最大的淡化海水生产国，其海水淡化量占世界总量的21%左右。沙特实行自由经济政策。麦加是伊斯兰教创建人穆罕默德的诞生地，是伊斯兰教徒朝觐圣地。'
    },
    {
        'id': '186',
        'continent_id': '',
        'code': 'SCG',
        'name': '',
        'full_name': '',
        'cname': '塞尔维亚,黑山',
        'full_cname': '塞尔维亚,黑山',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '187',
        'continent_id': '3',
        'code': 'SDN',
        'name': 'Sudan',
        'full_name': 'The Republic of Sudan',
        'cname': '苏丹',
        'full_cname': '苏丹共和国',
        'lower_name': 'the republic of sudan',
        'remark': '苏丹共和国（阿拉伯语：جمهورية السودان‎；英语：Republic of the Sudan），位于非洲东北、红海沿岸、撒哈拉沙漠东端。苏丹国土面积1886068平方公里，为非洲面积第3大国，世界面积第15大国。首都喀土穆。'
    },
    {
        'id': '188',
        'continent_id': '3',
        'code': 'SEN',
        'name': 'Senegal',
        'full_name': 'the Republic of Senegal',
        'cname': '塞内加尔',
        'full_cname': '塞内加尔共和国',
        'lower_name': 'the republic of senegal',
        'remark': '塞内加尔位于非洲西部凸出部位的最西端，首都达喀尔。北接毛里塔尼亚，东邻马里，南接几内亚和几内亚比绍，西临佛得角群岛。海岸线长约700公里。'
    },
    {
        'id': '189',
        'continent_id': '1',
        'code': 'SGP',
        'name': 'Singapore',
        'full_name': 'Republic of Singapore',
        'cname': '新加坡',
        'full_cname': '新加坡共和国',
        'lower_name': 'republic of singapore',
        'remark': '新加坡，全称为新加坡共和国（英语： Republic of Singapore），旧称新嘉坡、星洲或星岛，别称为狮城，是东南亚的一个岛国，政治体制实行议会制共和制。新加坡北隔柔佛海峡与马来西亚为邻，南隔新加坡海峡与印度尼西亚相望，毗邻马六甲海峡南口，国土除新加坡岛之外，还包括周围数岛'
    },
    {
        'id': '190',
        'continent_id': '',
        'code': 'SGS',
        'name': '',
        'full_name': '',
        'cname': '南乔治亚和南桑德威奇群岛',
        'full_cname': '南乔治亚和南桑德威奇群岛',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '191',
        'continent_id': '',
        'code': 'SHN',
        'name': '',
        'full_name': '',
        'cname': '圣赫勒拿',
        'full_cname': '圣赫勒拿',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '192',
        'continent_id': '',
        'code': 'SJM',
        'name': '',
        'full_name': '',
        'cname': '斯瓦尔巴和扬马廷',
        'full_cname': '斯瓦尔巴和扬马廷',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '193',
        'continent_id': '4',
        'code': 'SLB',
        'name': 'Solomon Is',
        'full_name': 'Solomon Islands',
        'cname': '所罗门群岛',
        'full_cname': '所罗门群岛',
        'lower_name': 'solomon islands',
        'remark': '所罗门群岛是世界上最不发达国家（低度开发国家）之一，其人类发展指数为0.610。大多数人口依靠务农、捕鱼和种植为生，国民经济以种植业、渔业和黄金开采为主。大部分制造与石油产品依赖进口。该群岛尚未开发的矿产资源丰富，如铅、锌、镍以及金。[2] '
    },
    {
        'id': '194',
        'continent_id': '3',
        'code': 'SLE',
        'name': 'Sierra Leone',
        'full_name': 'The Republic of Sierra Leone',
        'cname': '塞拉利昂',
        'full_cname': '塞拉利昂共和国',
        'lower_name': 'the republic of sierra leone',
        'remark': '塞拉利昂共和国位于西非大西洋岸，北部及东部被几内亚包围、东南与利比里亚接壤，首都弗里敦。台湾译为狮子山共和国，中国大陆和香港译为塞拉利昂共和国。'
    },
    {
        'id': '195',
        'continent_id': '6',
        'code': 'SLV',
        'name': 'El Salvador',
        'full_name': 'The Republic of El Salvador',
        'cname': '萨尔瓦多',
        'full_cname': '萨尔瓦多共和国',
        'lower_name': 'the republic of el salvador',
        'remark': '萨尔瓦多，全称萨尔瓦多共和国（英语：The Republic of El Salvador，西班牙语：República de El Salvador）是位于中美洲北部的一个沿海国家，也是中美洲人口最密集的国家。萨尔瓦多毗邻太平洋，国土面积20720平方千米，下设14个省。2013年，该国总人口630万'
    },
    {
        'id': '196',
        'continent_id': '2',
        'code': 'SMR',
        'name': 'San Marino',
        'full_name': 'The Republic of San Marino',
        'cname': '圣马力诺',
        'full_cname': '圣马力诺共和国',
        'lower_name': 'the republic of san marino',
        'remark': '圣马力诺共和国（意大利语：Repubblica di San Marino）是世界上袖珍国家之一，位于欧洲南部，意大利半岛东部，整个国家被意大利包围，是一个国中国。地形以中部的蒂塔诺山（海拔738米）为主体，丘陵由此向西南延展，东北部为平原，有圣马力诺河、马拉诺河等流经。属亚热带地中海式气候，总面积61.2平方公里，是欧洲第三小国'
    },
    {
        'id': '197',
        'continent_id': '3',
        'code': 'SOM',
        'name': 'Somalia',
        'full_name': 'The Somalia Democratic Republic',
        'cname': '索马里',
        'full_cname': '索马里联邦共和国',
        'lower_name': 'the somalia democratic republic',
        'remark': '索马里联邦共和国位于非洲大陆最东部的索马里半岛，拥有非洲最长的海岸线，总面积637660平方公里'
    },
    {
        'id': '198',
        'continent_id': '7',
        'code': 'SPM',
        'name': 'St.Pierre and Miquelon',
        'full_name': 'The Islands of st pierre and miquelon',
        'cname': '圣皮埃尔和密克隆',
        'full_cname': '圣皮埃尔和密克隆群岛',
        'lower_name': 'the islands of st pierre and miquelon',
        'remark': 'The Islands of st pierre and miquelon，Iles Saint pierre et Mique  lon'
    },
    {
        'id': '199',
        'continent_id': '3',
        'code': 'STP',
        'name': 'Sao Tome and Principe',
        'full_name': 'the Democratic Republic Sao Tome and Principe',
        'cname': '圣多美和普林西比',
        'full_cname': '圣多美和普林西比民主共和国',
        'lower_name': 'the democratic republic sao tome and principe',
        'remark': '圣多美和普林西比民主共和国（葡萄牙语：República Democrática de São Tomé e Príncipe）位于非洲中西部几内亚湾，由圣多美岛、普林西比岛和附近一些礁屿组成，两岛都是火山岛，属热带雨林气候'
    },
    {
        'id': '200',
        'continent_id': '7',
        'code': 'SUR',
        'name': 'Suriname',
        'full_name': 'The Republic of Suriname',
        'cname': '苏里南',
        'full_cname': '苏里南共和国',
        'lower_name': 'the republic of suriname',
        'remark': '苏里南共和国（荷兰语：Republiek Suriname；苏里南汤加语：Sranan；博杰普尔语：Sarnam）位于南美洲北部，北滨大西洋，南临巴西，东临法属圭亚那，西临圭亚那，是南美洲国家联盟的成员国，国名源于当地原住民苏里南人。该国旧称荷属圭亚那，原为荷兰在南美洲的殖民遗迹，1954年成为荷兰王国海外自治省，1975年时独立。苏里南无论以面积还是人口排名，都是南美洲最小的一个国家，也是西半球不属于荷兰王国组成体的地区中，唯一一个使用荷兰文为官方语言者，另外，汉语中的客家语是苏里南共和国的法定语言[1]  。首都帕拉马里博为苏里南河河口的商港。苏里南是一个种族、语言、宗教上极为多元的国家，当中穆斯林人口占苏里南的13%，其比例在所有美洲国家中最高。'
    },
    {
        'id': '201',
        'continent_id': '2',
        'code': 'SVK',
        'name': 'Slovak',
        'full_name': 'The Slovak Republic',
        'cname': '斯洛伐克',
        'full_cname': '斯洛伐克共和国',
        'lower_name': 'the slovak republic',
        'remark': '斯洛伐克共和国，简称斯洛伐克，是中欧的一个内陆国家，西北临捷克，北临波兰，东临乌克兰，南临匈牙利，西南临奥地利，原捷克斯洛伐克的东部，自1993年1月1日起，斯洛伐克成为独立主权国家。'
    },
    {
        'id': '202',
        'continent_id': '2',
        'code': 'SVN',
        'name': 'Slovenia',
        'full_name': 'The Republic of Slovenia',
        'cname': '斯洛文尼亚',
        'full_cname': '斯洛文尼亚共和国',
        'lower_name': 'the republic of slovenia',
        'remark': '斯洛文尼亚（斯洛文尼亚语：Slovenia）是欧洲的一个发达国家，全称为斯洛文尼亚共和国，是欧盟成员国、北约（NATO）成员国、经合组织（OECD）成员国、欧洲申根国，2008年上半年任欧盟轮值主席国。[1]  斯洛文尼亚在东南欧经济转型国家当中人均GDP名列第一，同时该国也是世界贸易组织的创始会员国之一。该国位于阿尔卑斯山脉南麓，西邻意大利，西南濒临亚得里亚海，东部和南部被克罗地亚包围，东北邻匈牙利，北邻奥地利。'
    },
    {
        'id': '203',
        'continent_id': '2',
        'code': 'SWE',
        'name': 'Sweden',
        'full_name': 'The Kingdom of Sweden',
        'cname': '瑞典',
        'full_cname': '瑞典王国',
        'lower_name': 'the kingdom of sweden',
        'remark': '瑞典（瑞典语：Sverige），全称瑞典王国(瑞典语：Konungariket Sverige)，是一个位于斯堪的纳维亚半岛的国家，北欧五国之一，首都为斯德哥尔摩。它西邻挪威，东北与芬兰接壤，西南濒临斯卡格拉克海峡和卡特加特海峡，东边为波罗的海与波的尼亚湾。瑞典与丹麦、德国、波兰、俄罗斯、立陶宛、拉脱维亚和爱沙尼亚隔海相望，海岸线长7624千米，总面积约45万平方公里，是北欧最大的国家。'
    },
    {
        'id': '204',
        'continent_id': '3',
        'code': 'SWZ',
        'name': 'Swaziland',
        'full_name': 'The Kingdom of Swaziland',
        'cname': '斯威士兰',
        'full_cname': '斯威士兰王国',
        'lower_name': 'the kingdom of swaziland',
        'remark': '斯威士兰，位于非洲东南部为内陆国家，北、西、南三面为南非所环抱，东与莫桑比克为邻。地处南非高原东南边缘德拉肯斯山脉的东坡。\n'
    },
    {
        'id': '205',
        'continent_id': '3',
        'code': 'SYC',
        'name': 'Seychelles',
        'full_name': 'the Republic of Seychelles',
        'cname': '塞舌尔',
        'full_cname': '塞舌尔共和国',
        'lower_name': 'the republic of seychelles',
        'remark': '塞舌尔，全名塞舌尔共和国，是坐落在东部非洲印度洋上的一个群岛国家。1976年6月29日塞舌尔宣告独立，成立塞舌尔共和国，属英联邦成员。全境半数地区为自然保护区，享有“旅游者天堂”的美誉。'
    },
    {
        'id': '206',
        'continent_id': '1',
        'code': 'SYR',
        'name': 'Syrian',
        'full_name': 'The Syrian Arab Republic',
        'cname': '叙利亚',
        'full_cname': '阿拉伯叙利亚共和国',
        'lower_name': 'the syrian arab republic',
        'remark': '阿拉伯叙利亚共和国（英语：The Syrian Arab Republic），通称为叙利亚，位于亚洲西部，地中海东岸，北与土耳其接壤，东同伊拉克交界，南与约旦毗连，西南与黎巴嫩和巴勒斯坦（或以色列）为邻，西与塞浦路斯隔地中海相望，包括戈兰高地，全国总面积为185180平方公里。沿海和北部地区属亚热带地中海气候，南部地区属热带沙漠气候。'
    },
    {
        'id': '207',
        'continent_id': '',
        'code': 'TAA',
        'name': '',
        'full_name': '',
        'cname': '特里斯坦达昆哈',
        'full_cname': '特里斯坦达昆哈',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '208',
        'continent_id': '',
        'code': 'TCA',
        'name': '',
        'full_name': '',
        'cname': '特克斯和凯克特斯群岛',
        'full_cname': '特克斯和凯克特斯群岛',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '209',
        'continent_id': '3',
        'code': 'TCD',
        'name': 'Chad',
        'full_name': 'The Republic of Chad',
        'cname': '乍得',
        'full_cname': '乍得共和国',
        'lower_name': 'the republic of chad',
        'remark': '乍得（或译查德，阿拉伯语：تشاد‎，法语：Tchad），全称乍得共和国，是非洲中部的一个内陆国家，北接利比亚，东接苏丹，南接中非共和国，西南与喀麦隆、尼日利亚为邻，西与尼日尔交界。'
    },
    {
        'id': '210',
        'continent_id': '3',
        'code': 'TGO',
        'name': 'Togo',
        'full_name': 'The Republic of Togo',
        'cname': '多哥',
        'full_cname': '多哥共和国',
        'lower_name': 'the republic of togo',
        'remark': '多哥共和国（法语：République Togolaise），是西非国家之一，东面与贝宁，北面与布基纳法索，西面与加纳相邻，南面有一小段海岸线面向几内亚湾。'
    },
    {
        'id': '211',
        'continent_id': '1',
        'code': 'THA',
        'name': 'Thailand',
        'full_name': 'Kingdom of Thailand',
        'cname': '泰国',
        'full_cname': '泰王国',
        'lower_name': 'kingdom of thailand',
        'remark': '泰王国（泰语：ราชอาณาจักรไทย），通称泰国（泰语：ประเทศไทย），是一个位于东南亚的君主立宪制国家。泰国位于中南半岛中部，其西部与北部和缅甸、安达曼海接壤，东北边是老挝，东南是柬埔寨，南边狭长的半岛与马来西亚相连。'
    },
    {
        'id': '212',
        'continent_id': '1',
        'code': 'TJK',
        'name': 'Tajikistan',
        'full_name': 'The Republic of Tajikistan',
        'cname': '塔吉克斯坦',
        'full_cname': '塔吉克斯坦共和国',
        'lower_name': 'the republic of tajikistan',
        'remark': ''
    },
    {
        'id': '213',
        'continent_id': '',
        'code': 'TKL',
        'name': '',
        'full_name': '',
        'cname': '托克劳',
        'full_cname': '托克劳',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '214',
        'continent_id': '1',
        'code': 'TKM',
        'name': 'Turkmenistan',
        'full_name': 'Turkmenistan',
        'cname': '土库曼斯坦',
        'full_cname': '土库曼斯坦',
        'lower_name': 'turkmenistan',
        'remark': '土库曼斯坦（英语：Turkmenistan）是一个中亚国家，曾是前苏联加盟共和国之一，苏联时期的名称为土库曼苏维埃社会主义共和国，1991年独立。该国位于伊朗以北，东南面和阿富汗接壤、东北面与乌兹别克斯坦为邻、西北面是哈萨克斯坦，西邻里海，是一个内陆国家。'
    },
    {
        'id': '215',
        'continent_id': '1',
        'code': 'TLS',
        'name': 'East Timor',
        'full_name': 'Democratic Republic of East Timor',
        'cname': '东帝汶',
        'full_cname': '东帝汶民主共和国',
        'lower_name': 'democratic republic of east timor',
        'remark': '东帝汶全称东帝汶民主共和国（英语：Democratic Republic of Timor-Leste）是位于努沙登加拉群岛东端的岛国，包括帝汶岛东部和西部北海岸的欧库西地区以及附近的阿陶罗岛和东端的雅库岛。西与印尼西帝汶相接，南隔帝汶海与澳大利亚相望'
    },
    {
        'id': '216',
        'continent_id': '4',
        'code': 'TON',
        'name': 'Tonga',
        'full_name': 'The Kingdom of Tonga',
        'cname': '汤加',
        'full_cname': '汤加王国',
        'lower_name': 'the kingdom of tonga',
        'remark': '汤加，全名“汤加王国”（The Kingdom of Tonga），属大洋洲，位于太平洋西南部赤道附近，是由173个岛屿组成的岛国，其中36个有人居住，大部分为珊瑚岛。'
    },
    {
        'id': '217',
        'continent_id': '7',
        'code': 'TTO',
        'name': 'Trinidad and Tobago',
        'full_name': 'Republic of Trinidad and Tobago',
        'cname': '特立尼达和多巴哥',
        'full_cname': '特立尼达和多巴哥共和国',
        'lower_name': 'republic of trinidad and tobago',
        'remark': '源产品产值约占国民生产总值的40%左右，能源出口约占出口总收入的80%，是加勒比地区重要的石油输出国。加工制造业门类较齐全。建筑业、旅游业、金融保险业等行业发展较快。特多已同中国、加拿大、法国、英国、美国等国签署了双边投资协定，与中国、加拿大、丹麦、德国、法国、意大利、挪威、瑞典、瑞士、美国等国签署了避免双重征税协定，以吸引更多外来直接投资。'
    },
    {
        'id': '218',
        'continent_id': '3',
        'code': 'TUN',
        'name': 'Tunisia',
        'full_name': 'The Republic of Tunisia',
        'cname': '突尼斯',
        'full_cname': '突尼斯共和国',
        'lower_name': 'the republic of tunisia',
        'remark': '突尼斯（Tunisia）全称突尼斯共和国（The Republic of Tunisia，la Répubique Tunisienne）[1]  ，位于非洲大陆最北端，北部和东部面临地中海，隔突尼斯海峡与意大利的西西里岛相望，扼地中海东西航运的要冲，东南与利比亚为邻，西与阿尔及利亚接壤。突尼斯是世界上少数几个集中了海滩、沙漠、山林和古文明的国家之一，是悠久文明和多元文化的融和之地。突尼斯地处地中海地区的中央，拥有长达1300公里的海岸线。'
    },
    {
        'id': '219',
        'continent_id': '1',
        'code': 'TUR',
        'name': 'Turkey',
        'full_name': 'The Republic of Turkey',
        'cname': '土耳其',
        'full_cname': '土耳其共和国',
        'lower_name': 'the republic of turkey',
        'remark': '土耳其共和国（土耳其文：Türkiye Cumhuriyeti，英语：The Republic of Turkey）是一个横跨欧亚两洲的国家，北临黑海，南临地中海，东南与叙利亚、伊拉克接壤，西临爱琴海，并与希腊以及保加利亚接壤，东部与格鲁吉亚、亚美尼亚、阿塞拜疆和伊朗接壤。土耳其地理位置和地缘政治战略意义极为重要，是连接欧亚的十字路口。'
    },
    {
        'id': '220',
        'continent_id': '4',
        'code': 'TUV',
        'name': 'Tuvalu',
        'full_name': 'Tuvalu',
        'cname': '图瓦卢',
        'full_cname': '图瓦卢',
        'lower_name': 'tuvalu',
        'remark': '“图瓦卢”在波利尼西亚语中意为“八岛之群”。图瓦卢海拔最高4.5米。由于地势极低，持续上升的气温和海平面严重威胁着图瓦卢，使这个国家面临国土沉入海底的危险，图瓦卢资源匮乏，土地贫瘠，只有少数植物可以生长，几乎没有天然资源，是联合国公布的世界最不发达国家（最低度开发国家）之一'
    },
    {
        'id': '221',
        'continent_id': '3',
        'code': 'TZA',
        'name': 'Tanzania',
        'full_name': 'The United Republic of Tanzania',
        'cname': '坦桑尼亚',
        'full_cname': '坦桑尼亚联合共和国',
        'lower_name': 'the united republic of tanzania',
        'remark': '坦桑尼亚全称：坦桑尼亚联合共和国（英文：The United Republic of Tanzania）。位于非洲东部、赤道以南。英联邦成员国之一。北与肯尼亚和乌干达交界，南与赞比亚、马拉维、莫桑比克接壤，西与卢旺达、布隆迪和刚果（金）为邻，东临印度洋。国土面积945087平方公里，截止2013年全国总人口4490万人。'
    },
    {
        'id': '222',
        'continent_id': '3',
        'code': 'UGA',
        'name': 'Uganda',
        'full_name': 'The Republic of Uganda',
        'cname': '乌干达',
        'full_cname': '乌干达共和国',
        'lower_name': 'the republic of uganda',
        'remark': '乌干达，位于非洲东部，横跨赤道，东邻肯尼亚，南接坦桑尼亚和卢旺达，西接刚果（金），北连南苏丹，总面积24.15万平方公里。全境大部位于东非高原，多湖，平均海拔1000~1200米，有“高原水乡”之称。'
    },
    {
        'id': '223',
        'continent_id': '2',
        'code': 'UKR',
        'name': 'Ukraine',
        'full_name': 'Ukraine',
        'cname': '乌克兰',
        'full_cname': '乌克兰',
        'lower_name': 'ukraine',
        'remark': '乌克兰（乌克兰文：УКРАЇНА）位于欧洲东部，是欧洲除俄罗斯外领土面积最大的国家。乌克兰是原苏联15个加盟共和国之一，是次于俄罗斯第二大加盟共和国。1991年苏联解体后，乌克兰独立。\n'
    },
    {
        'id': '224',
        'continent_id': '',
        'code': 'UMI',
        'name': '',
        'full_name': '',
        'cname': '美属外岛',
        'full_cname': '美属外岛',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '225',
        'continent_id': '7',
        'code': 'URY',
        'name': 'Uruguay',
        'full_name': 'The Oriental Republic of Uruguay',
        'cname': '乌拉圭',
        'full_cname': '乌拉圭东岸共和国',
        'lower_name': 'the oriental republic of uruguay',
        'remark': '乌拉圭全称：乌拉圭东岸共和国（英语：The Oriental Republic of Uruguay；西班牙语：República Oriental del Uruguay），位于南美洲的东南部，乌拉圭河与拉普拉塔河的东岸，北邻巴西，西接阿根廷，东南濒大西洋。'
    },
    {
        'id': '226',
        'continent_id': '6',
        'code': 'USA',
        'name': 'United States',
        'full_name': 'The United States of America',
        'cname': '美国',
        'full_cname': '美利坚合众国',
        'lower_name': 'the united states of america',
        'remark': '美利坚合众国（The United States of America），简称美国，是由华盛顿哥伦比亚特区、50个州[1]  和关岛等众多海外领土组成的联邦共和立宪制国家。其主体部分位于北美洲中部，美国中央情报局《世界概况》1989年至1996年初始版美国总面积是 9,372,610 km²，1997年修正为963万平方公里（加上五大湖中美国主权部分和河口、港湾、内海等沿海水域面积），人口3.2亿，通用英语，是一个移民国家'
    },
    {
        'id': '227',
        'continent_id': '1',
        'code': 'UZB',
        'name': 'Uzbekstan',
        'full_name': 'The Republic of Uzbekistan',
        'cname': '乌兹别克斯坦',
        'full_cname': '乌兹别克斯坦共和国',
        'lower_name': 'the republic of uzbekistan',
        'remark': '乌兹别克斯坦共和国（乌兹别克语：Oʻzbekiston Respublikasi，英语：The Republic of Uzbekistan），简称乌兹别克斯坦，是一个位于中亚的内陆国家，1991年从前苏联独立。是世上两个双重内陆国之一（另一个为列支敦士登）'
    },
    {
        'id': '228',
        'continent_id': '2',
        'code': 'VAT',
        'name': 'Vatican City State',
        'full_name': 'Vatican City State',
        'cname': '梵蒂冈城国',
        'full_cname': '梵蒂冈城国',
        'lower_name': 'vatican city state',
        'remark': '梵蒂冈城国（拉丁语：Status Civitatis Vaticanae；意大利语：Stato della Città del Vaticano），简称梵蒂冈或梵蒂冈城，是一个独立的主权国家，由于四面都与意大利接壤，故称“国中国”。同时也是全世界天主教的中心——以教宗为首的教廷的所在地，是世界六分之一人口的信仰中心。'
    },
    {
        'id': '229',
        'continent_id': '6',
        'code': 'VCT',
        'name': 'Saint Vincent and the Grenadines',
        'full_name': 'Saint Vincent and the Grenadines',
        'cname': '圣文森特和格纳丁斯',
        'full_cname': '圣文森特和格林纳丁斯',
        'lower_name': 'saint vincent and the grenadines',
        'remark': '圣文森特和格林纳丁斯是位于东加勒比海小安的列斯群岛南部的一个岛国。面积389平方公里，人口11万，主要为黑人和黑白混血种人。圣文森特本岛面积346平方公里，格林纳丁斯群岛则由三十二个小岛组成，面积合共43平方公里。'
    },
    {
        'id': '230',
        'continent_id': '7',
        'code': 'VEN',
        'name': 'Venezuela',
        'full_name': 'Bolivarian Republic of Venezuela',
        'cname': '委内瑞拉',
        'full_cname': '委内瑞拉玻利瓦尔共和国',
        'lower_name': 'bolivarian republic of venezuela',
        'remark': '委内瑞拉玻利瓦尔共和国（西班牙语：República Bolivariana de Venezuela）是位于南美洲北部的国家，也是南美洲国家联盟的成员国，首都加拉加斯。北临加勒比海，西与哥伦比亚相邻，南与巴西交界，东与圭亚那接壤。它被称为“瀑布之乡”，面积912050平方千米。海岸线长2813千米。原为印第安人居住地。1498年哥伦布航行美洲时到此。1523年西班牙人建立第一个殖民地。1567年沦为西班牙殖民地。1811年7月5日独立。1830年建立共和国。1974年6月28日同中国建交。'
    },
    {
        'id': '231',
        'continent_id': '',
        'code': 'VGB',
        'name': '',
        'full_name': '',
        'cname': '维尔京群岛，英属',
        'full_cname': '维尔京群岛，英属',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '232',
        'continent_id': '',
        'code': 'VIR',
        'name': '',
        'full_name': '',
        'cname': '维尔京群岛，美属',
        'full_cname': '维尔京群岛，美属',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '233',
        'continent_id': '1',
        'code': 'VNM',
        'name': 'Vietnam',
        'full_name': 'Socialist Republic of Vietnam',
        'cname': '越南',
        'full_cname': '越南社会主义共和国',
        'lower_name': 'socialist republic of vietnam',
        'remark': '越南，全称为越南社会主义共和国（英语：Socialist Republic of Vietnam，越南语：Cộng hòa Xã hội Chủ nghĩa Việt Nam），是亚洲的一个社会主义国家。位于东南亚中南半岛东部，北与中国广西、云南接壤，西与老挝、柬埔寨交界，国土狭长，面积约33万平方公里，紧邻南海，海岸线长3260多公里，是以京族为主体的多民族国家。\n'
    },
    {
        'id': '234',
        'continent_id': '4',
        'code': 'VUT',
        'name': 'Vanuatu',
        'full_name': 'Republic of Vanuatu',
        'cname': '瓦努阿图',
        'full_cname': '瓦努阿图共和国',
        'lower_name': 'republic of vanuatu',
        'remark': '瓦努阿图共和国，位于南太平洋西部，属美拉尼西亚群岛，由83个岛屿（其中68个岛屿有人居住）组成。最大的岛屿是桑托岛（面积3974平方公里），属热带海洋性气候，年均降水量1600毫米。属热带海洋性气候，首都维拉港平均气温25.3℃。陆地面积1.219万平方公里，水域面积84.8万平方公里，其中98%为瓦努阿图人，属美拉尼西亚人种，官方语言为英语、法语和比斯拉马语，通用比斯拉马语，84%的人信奉天主教。由约80个岛屿（其中68个有人居住）组成。'
    },
    {
        'id': '235',
        'continent_id': '',
        'code': 'WLF',
        'name': '',
        'full_name': '',
        'cname': '瓦利斯和福图纳',
        'full_cname': '瓦利斯和福图纳',
        'lower_name': '',
        'remark': ''
    },
    {
        'id': '236',
        'continent_id': '4',
        'code': 'WSM',
        'name': 'Samoa',
        'full_name': 'The Independent State of Samoa',
        'cname': '萨摩亚',
        'full_cname': '萨摩亚独立国',
        'lower_name': 'the independent state of samoa',
        'remark': '它位于太平洋南部，萨摩亚群岛西部，由萨瓦伊和乌波卢两个主岛及七个小岛组成。陆地面积2934平方公里，水域面积12万平方公里，境内大部分地区为丛林所覆盖，属热带雨林气候。萨摩亚人口约17万4千，90%为萨摩亚人，属波利尼西亚人种，皮肤为浅棕色，体较胖，性格敦厚，语言为萨语和英语。'
    },
    {
        'id': '237',
        'continent_id': '1',
        'code': 'YEM',
        'name': 'Yemen',
        'full_name': 'The Republic of Yemen',
        'cname': '也门',
        'full_cname': '也门共和国',
        'lower_name': 'the republic of yemen',
        'remark': '也门有3000多年文字记载的历史，是阿拉伯世界古代文明摇篮之一。也门是世界上经济最不发达的国家之一，粮食不能自给，约1/2依靠进口。在夏季有着沙漠中常见的沙尘暴，而因过度放牧，沙漠化日渐严重。该国的棉花质量良好，每年有大量出口，咖啡种植面积也很大，占重要地位。近年，政府致力于减少预算赤字和政府开支，努力控制通货膨胀，稳定物价。'
    },
    {
        'id': '238',
        'continent_id': '3',
        'code': 'ZAF',
        'name': 'South Africa',
        'full_name': 'The Republic of South Africa',
        'cname': '南非',
        'full_cname': '南非共和国',
        'lower_name': 'the republic of south africa',
        'remark': '南非共和国（The Republic of South Africa），简称南非。地处南半球，有“彩虹之国”之美誉，位于非洲大陆的最南端，陆地面积为1219090平方公里，其东、南、西三面被印度洋和大西洋环抱，陆地上与纳米比亚、博茨瓦纳、莱索托、津巴布韦、莫桑比克和斯威士兰接壤。东面隔印度洋和澳大利亚相望，西面隔大西洋和巴西、阿根廷相望。'
    },
    {
        'id': '239',
        'continent_id': '3',
        'code': 'ZMB',
        'name': 'Zambia',
        'full_name': 'The Republic of Zambia',
        'cname': '赞比亚',
        'full_cname': '赞比亚共和国',
        'lower_name': 'the republic of zambia',
        'remark': '赞比亚共和国（The Republic of Zambia）是非洲中南部的一个内陆国家，大部分属于高原地区。北靠刚果民主共和国、东北邻坦桑尼亚、东面和马拉维接壤、东南和莫桑比克相连、南接津巴布韦、博茨瓦纳和纳米比亚，西面与安哥拉相邻。'
    },
    {
        'id': '240',
        'continent_id': '3',
        'code': 'ZWE',
        'name': 'Zimbabwe',
        'full_name': 'the Republic of Zimbabwe',
        'cname': '津巴布韦',
        'full_cname': '津巴布韦共和国',
        'lower_name': 'the republic of zimbabwe',
        'remark': '津巴布韦共和国，是非洲南部的内陆国家，1980年4月18日独立建国。津巴布韦在1980年之前原本称为罗得西亚，这名字源自于替英国在这地区建立殖民地的塞西尔·罗兹。'
    }
]

const states = [
    {
        "id": "35",
        "country_id": "44",
        "code": "11",
        "name": "Beijing",
        "cname": "北京",
        "lower_name": "beijing",
        "code_full": "CHN011",
        "area_id": ""
    },
    {
        "id": "36",
        "country_id": "44",
        "code": "12",
        "name": "Tianjin",
        "cname": "天津",
        "lower_name": "tianjin",
        "code_full": "CHN012",
        "area_id": ""
    },
    {
        "id": "37",
        "country_id": "44",
        "code": "13",
        "name": "Hebei",
        "cname": "河北",
        "lower_name": "hebei",
        "code_full": "CHN013",
        "area_id": ""
    },
    {
        "id": "38",
        "country_id": "44",
        "code": "14",
        "name": "Shanxi",
        "cname": "山西",
        "lower_name": "shanxi",
        "code_full": "CHN014",
        "area_id": ""
    },
    {
        "id": "39",
        "country_id": "44",
        "code": "15",
        "name": "Inner Mongolia",
        "cname": "内蒙古",
        "lower_name": "inner mongolia",
        "code_full": "CHN015",
        "area_id": ""
    },
    {
        "id": "40",
        "country_id": "44",
        "code": "21",
        "name": "Liaoning",
        "cname": "辽宁",
        "lower_name": "liaoning",
        "code_full": "CHN021",
        "area_id": ""
    },
    {
        "id": "41",
        "country_id": "44",
        "code": "22",
        "name": "Jilin",
        "cname": "吉林",
        "lower_name": "jilin",
        "code_full": "CHN022",
        "area_id": ""
    },
    {
        "id": "42",
        "country_id": "44",
        "code": "23",
        "name": "Heilongjiang",
        "cname": "黑龙江",
        "lower_name": "heilongjiang",
        "code_full": "CHN023",
        "area_id": ""
    },
    {
        "id": "43",
        "country_id": "44",
        "code": "31",
        "name": "Shanghai",
        "cname": "上海",
        "lower_name": "shanghai",
        "code_full": "CHN031",
        "area_id": ""
    },
    {
        "id": "44",
        "country_id": "44",
        "code": "32",
        "name": "Jiangsu",
        "cname": "江苏",
        "lower_name": "jiangsu",
        "code_full": "CHN032",
        "area_id": ""
    },
    {
        "id": "45",
        "country_id": "44",
        "code": "33",
        "name": "Zhejiang",
        "cname": "浙江",
        "lower_name": "zhejiang",
        "code_full": "CHN033",
        "area_id": ""
    },
    {
        "id": "46",
        "country_id": "44",
        "code": "34",
        "name": "Anhui",
        "cname": "安徽",
        "lower_name": "anhui",
        "code_full": "CHN034",
        "area_id": ""
    },
    {
        "id": "47",
        "country_id": "44",
        "code": "35",
        "name": "Fujian",
        "cname": "福建",
        "lower_name": "fujian",
        "code_full": "CHN035",
        "area_id": ""
    },
    {
        "id": "48",
        "country_id": "44",
        "code": "36",
        "name": "Jiangxi",
        "cname": "江西",
        "lower_name": "jiangxi",
        "code_full": "CHN036",
        "area_id": ""
    },
    {
        "id": "49",
        "country_id": "44",
        "code": "37",
        "name": "Shandong",
        "cname": "山东",
        "lower_name": "shandong",
        "code_full": "CHN037",
        "area_id": ""
    },
    {
        "id": "50",
        "country_id": "44",
        "code": "41",
        "name": "Henan",
        "cname": "河南",
        "lower_name": "henan",
        "code_full": "CHN041",
        "area_id": ""
    },
    {
        "id": "51",
        "country_id": "44",
        "code": "42",
        "name": "Hubei",
        "cname": "湖北",
        "lower_name": "hubei",
        "code_full": "CHN042",
        "area_id": ""
    },
    {
        "id": "52",
        "country_id": "44",
        "code": "43",
        "name": "Hunan",
        "cname": "湖南",
        "lower_name": "hunan",
        "code_full": "CHN043",
        "area_id": ""
    },
    {
        "id": "53",
        "country_id": "44",
        "code": "44",
        "name": "Guangdong",
        "cname": "广东",
        "lower_name": "guangdong",
        "code_full": "CHN044",
        "area_id": ""
    },
    {
        "id": "54",
        "country_id": "44",
        "code": "45",
        "name": "Guangxi",
        "cname": "广西",
        "lower_name": "guangxi",
        "code_full": "CHN045",
        "area_id": ""
    },
    {
        "id": "55",
        "country_id": "44",
        "code": "46",
        "name": "Hainan",
        "cname": "海南",
        "lower_name": "hainan",
        "code_full": "CHN046",
        "area_id": ""
    },
    {
        "id": "56",
        "country_id": "44",
        "code": "50",
        "name": "Chongqing",
        "cname": "重庆",
        "lower_name": "chongqing",
        "code_full": "CHN050",
        "area_id": ""
    },
    {
        "id": "57",
        "country_id": "44",
        "code": "51",
        "name": "Sichuan",
        "cname": "四川",
        "lower_name": "sichuan",
        "code_full": "CHN051",
        "area_id": ""
    },
    {
        "id": "58",
        "country_id": "44",
        "code": "52",
        "name": "Guizhou",
        "cname": "贵州",
        "lower_name": "guizhou",
        "code_full": "CHN052",
        "area_id": ""
    },
    {
        "id": "59",
        "country_id": "44",
        "code": "53",
        "name": "Yunnan",
        "cname": "云南",
        "lower_name": "yunnan",
        "code_full": "CHN053",
        "area_id": ""
    },
    {
        "id": "60",
        "country_id": "44",
        "code": "54",
        "name": "Tibet",
        "cname": "西藏",
        "lower_name": "tibet",
        "code_full": "CHN054",
        "area_id": ""
    },
    {
        "id": "61",
        "country_id": "44",
        "code": "61",
        "name": "Shaanxi",
        "cname": "陕西",
        "lower_name": "shaanxi",
        "code_full": "CHN061",
        "area_id": ""
    },
    {
        "id": "62",
        "country_id": "44",
        "code": "62",
        "name": "Gansu",
        "cname": "甘肃",
        "lower_name": "gansu",
        "code_full": "CHN062",
        "area_id": ""
    },
    {
        "id": "63",
        "country_id": "44",
        "code": "63",
        "name": "Qinghai",
        "cname": "青海",
        "lower_name": "qinghai",
        "code_full": "CHN063",
        "area_id": ""
    },
    {
        "id": "64",
        "country_id": "44",
        "code": "64",
        "name": "Ningxia",
        "cname": "宁夏",
        "lower_name": "ningxia",
        "code_full": "CHN064",
        "area_id": ""
    },
    {
        "id": "65",
        "country_id": "44",
        "code": "65",
        "name": "Xinjiang",
        "cname": "新疆",
        "lower_name": "xinjiang",
        "code_full": "CHN065",
        "area_id": ""
    },
    {
        "id": "66",
        "country_id": "44",
        "code": "71",
        "name": "Taiwan",
        "cname": "台湾",
        "lower_name": "taiwan",
        "code_full": "CHN071",
        "area_id": ""
    },
    {
        "id": "67",
        "country_id": "44",
        "code": "81",
        "name": "Hongkong",
        "cname": "香港",
        "lower_name": "hongkong",
        "code_full": "CHN081",
        "area_id": ""
    },
    {
        "id": "68",
        "country_id": "44",
        "code": "82",
        "name": "Macao",
        "cname": "澳门",
        "lower_name": "macao",
        "code_full": "CHN082",
        "area_id": ""
    }
]

const cities = [
    {
        "id": "421",
        "state_id": "35",
        "code": "1",
        "name": "Dongcheng",
        "cname": "东城",
        "lower_name": "dongcheng",
        "code_full": "CHN011001"
    },
    {
        "id": "422",
        "state_id": "35",
        "code": "2",
        "name": "Xicheng",
        "cname": "西城",
        "lower_name": "xicheng",
        "code_full": "CHN011002"
    },
    {
        "id": "423",
        "state_id": "35",
        "code": "5",
        "name": "Chaoyang",
        "cname": "朝阳",
        "lower_name": "chaoyang",
        "code_full": "CHN011005"
    },
    {
        "id": "424",
        "state_id": "35",
        "code": "6",
        "name": "Fengtai",
        "cname": "丰台",
        "lower_name": "fengtai",
        "code_full": "CHN011006"
    },
    {
        "id": "425",
        "state_id": "35",
        "code": "7",
        "name": "Shijingshan",
        "cname": "石景山",
        "lower_name": "shijingshan",
        "code_full": "CHN011007"
    },
    {
        "id": "426",
        "state_id": "35",
        "code": "8",
        "name": "Haidian",
        "cname": "海淀",
        "lower_name": "haidian",
        "code_full": "CHN011008"
    },
    {
        "id": "427",
        "state_id": "35",
        "code": "9",
        "name": "Mentougou",
        "cname": "门头沟",
        "lower_name": "mentougou",
        "code_full": "CHN011009"
    },
    {
        "id": "428",
        "state_id": "35",
        "code": "11",
        "name": "Fangshan",
        "cname": "房山",
        "lower_name": "fangshan",
        "code_full": "CHN011011"
    },
    {
        "id": "429",
        "state_id": "35",
        "code": "12",
        "name": "Tongzhou",
        "cname": "通州",
        "lower_name": "tongzhou",
        "code_full": "CHN011012"
    },
    {
        "id": "430",
        "state_id": "35",
        "code": "13",
        "name": "Shunyi",
        "cname": "顺义",
        "lower_name": "shunyi",
        "code_full": "CHN011013"
    },
    {
        "id": "431",
        "state_id": "35",
        "code": "21",
        "name": "Changping",
        "cname": "昌平",
        "lower_name": "changping",
        "code_full": "CHN011021"
    },
    {
        "id": "432",
        "state_id": "35",
        "code": "24",
        "name": "Daxing",
        "cname": "大兴",
        "lower_name": "daxing",
        "code_full": "CHN011024"
    },
    {
        "id": "433",
        "state_id": "35",
        "code": "26",
        "name": "Pinggu",
        "cname": "平谷",
        "lower_name": "pinggu",
        "code_full": "CHN011026"
    },
    {
        "id": "434",
        "state_id": "35",
        "code": "27",
        "name": "Huairou",
        "cname": "怀柔",
        "lower_name": "huairou",
        "code_full": "CHN011027"
    },
    {
        "id": "435",
        "state_id": "35",
        "code": "28",
        "name": "Miyun",
        "cname": "密云",
        "lower_name": "miyun",
        "code_full": "CHN011028"
    },
    {
        "id": "436",
        "state_id": "35",
        "code": "29",
        "name": "Yanqing",
        "cname": "延庆",
        "lower_name": "yanqing",
        "code_full": "CHN011029"
    },
    {
        "id": "437",
        "state_id": "36",
        "code": "1",
        "name": "Heping",
        "cname": "和平",
        "lower_name": "heping",
        "code_full": "CHN012001"
    },
    {
        "id": "438",
        "state_id": "36",
        "code": "2",
        "name": "Hedong",
        "cname": "河东",
        "lower_name": "hedong",
        "code_full": "CHN012002"
    },
    {
        "id": "439",
        "state_id": "36",
        "code": "3",
        "name": "Hexi",
        "cname": "河西",
        "lower_name": "hexi",
        "code_full": "CHN012003"
    },
    {
        "id": "440",
        "state_id": "36",
        "code": "4",
        "name": "Nankai",
        "cname": "南开",
        "lower_name": "nankai",
        "code_full": "CHN012004"
    },
    {
        "id": "441",
        "state_id": "36",
        "code": "5",
        "name": "Hebei",
        "cname": "河北",
        "lower_name": "hebei",
        "code_full": "CHN012005"
    },
    {
        "id": "442",
        "state_id": "36",
        "code": "6",
        "name": "Hongqiao",
        "cname": "红桥",
        "lower_name": "hongqiao",
        "code_full": "CHN012006"
    },
    {
        "id": "443",
        "state_id": "36",
        "code": "10",
        "name": "Dongli",
        "cname": "东丽",
        "lower_name": "dongli",
        "code_full": "CHN012010"
    },
    {
        "id": "444",
        "state_id": "36",
        "code": "11",
        "name": "Xiqing",
        "cname": "西青",
        "lower_name": "xiqing",
        "code_full": "CHN012011"
    },
    {
        "id": "445",
        "state_id": "36",
        "code": "12",
        "name": "Jinnan",
        "cname": "津南",
        "lower_name": "jinnan",
        "code_full": "CHN012012"
    },
    {
        "id": "446",
        "state_id": "36",
        "code": "13",
        "name": "Beichen",
        "cname": "北辰",
        "lower_name": "beichen",
        "code_full": "CHN012013"
    },
    {
        "id": "447",
        "state_id": "36",
        "code": "21",
        "name": "Ninghe",
        "cname": "宁河",
        "lower_name": "ninghe",
        "code_full": "CHN012021"
    },
    {
        "id": "448",
        "state_id": "36",
        "code": "22",
        "name": "Wuqing",
        "cname": "武清",
        "lower_name": "wuqing",
        "code_full": "CHN012022"
    },
    {
        "id": "449",
        "state_id": "36",
        "code": "23",
        "name": "Jinghai",
        "cname": "静海",
        "lower_name": "jinghai",
        "code_full": "CHN012023"
    },
    {
        "id": "450",
        "state_id": "36",
        "code": "24",
        "name": "Baodi",
        "cname": "宝坻",
        "lower_name": "baodi",
        "code_full": "CHN012024"
    },
    {
        "id": "451",
        "state_id": "36",
        "code": "25",
        "name": "Jixian",
        "cname": "蓟县",
        "lower_name": "jixian",
        "code_full": "CHN012025"
    },
    {
        "id": "452",
        "state_id": "36",
        "code": "26",
        "name": "Binghaixinqu",
        "cname": "滨海新区",
        "lower_name": "binghaixinqu",
        "code_full": "CHN012026"
    },
    {
        "id": "453",
        "state_id": "37",
        "code": "1",
        "name": "Shijiazhuang",
        "cname": "石家庄",
        "lower_name": "shijiazhuang",
        "code_full": "CHN013001"
    },
    {
        "id": "454",
        "state_id": "37",
        "code": "2",
        "name": "Tangshan",
        "cname": "唐山",
        "lower_name": "tangshan",
        "code_full": "CHN013002"
    },
    {
        "id": "455",
        "state_id": "37",
        "code": "3",
        "name": "Qinhuangdao",
        "cname": "秦皇岛",
        "lower_name": "qinhuangdao",
        "code_full": "CHN013003"
    },
    {
        "id": "456",
        "state_id": "37",
        "code": "4",
        "name": "Handan",
        "cname": "邯郸",
        "lower_name": "handan",
        "code_full": "CHN013004"
    },
    {
        "id": "457",
        "state_id": "37",
        "code": "5",
        "name": "Xingtai",
        "cname": "邢台",
        "lower_name": "xingtai",
        "code_full": "CHN013005"
    },
    {
        "id": "458",
        "state_id": "37",
        "code": "6",
        "name": "Baoding",
        "cname": "保定",
        "lower_name": "baoding",
        "code_full": "CHN013006"
    },
    {
        "id": "459",
        "state_id": "37",
        "code": "7",
        "name": "Zhangjiakou",
        "cname": "张家口",
        "lower_name": "zhangjiakou",
        "code_full": "CHN013007"
    },
    {
        "id": "460",
        "state_id": "37",
        "code": "8",
        "name": "Chengde",
        "cname": "承德",
        "lower_name": "chengde",
        "code_full": "CHN013008"
    },
    {
        "id": "461",
        "state_id": "37",
        "code": "9",
        "name": "Cangzhou",
        "cname": "沧州",
        "lower_name": "cangzhou",
        "code_full": "CHN013009"
    },
    {
        "id": "462",
        "state_id": "37",
        "code": "10",
        "name": "Langfang",
        "cname": "廊坊",
        "lower_name": "langfang",
        "code_full": "CHN013010"
    },
    {
        "id": "463",
        "state_id": "37",
        "code": "11",
        "name": "Hengshui",
        "cname": "衡水",
        "lower_name": "hengshui",
        "code_full": "CHN013011"
    },
    {
        "id": "464",
        "state_id": "38",
        "code": "1",
        "name": "Taiyuan",
        "cname": "太原",
        "lower_name": "taiyuan",
        "code_full": "CHN014001"
    },
    {
        "id": "465",
        "state_id": "38",
        "code": "2",
        "name": "Datong",
        "cname": "大同",
        "lower_name": "datong",
        "code_full": "CHN014002"
    },
    {
        "id": "466",
        "state_id": "38",
        "code": "3",
        "name": "Yangquan",
        "cname": "阳泉",
        "lower_name": "yangquan",
        "code_full": "CHN014003"
    },
    {
        "id": "467",
        "state_id": "38",
        "code": "4",
        "name": "Changzhi",
        "cname": "长治",
        "lower_name": "changzhi",
        "code_full": "CHN014004"
    },
    {
        "id": "468",
        "state_id": "38",
        "code": "5",
        "name": "Jincheng",
        "cname": "晋城",
        "lower_name": "jincheng",
        "code_full": "CHN014005"
    },
    {
        "id": "469",
        "state_id": "38",
        "code": "6",
        "name": "Shuozhou",
        "cname": "朔州",
        "lower_name": "shuozhou",
        "code_full": "CHN014006"
    },
    {
        "id": "470",
        "state_id": "38",
        "code": "7",
        "name": "Jinzhong",
        "cname": "晋中",
        "lower_name": "jinzhong",
        "code_full": "CHN014007"
    },
    {
        "id": "471",
        "state_id": "38",
        "code": "8",
        "name": "Yuncheng",
        "cname": "运城",
        "lower_name": "yuncheng",
        "code_full": "CHN014008"
    },
    {
        "id": "472",
        "state_id": "38",
        "code": "9",
        "name": "Xinzhou",
        "cname": "忻州",
        "lower_name": "xinzhou",
        "code_full": "CHN014009"
    },
    {
        "id": "473",
        "state_id": "38",
        "code": "10",
        "name": "Linfen",
        "cname": "临汾",
        "lower_name": "linfen",
        "code_full": "CHN014010"
    },
    {
        "id": "474",
        "state_id": "38",
        "code": "11",
        "name": "luliang",
        "cname": "吕梁",
        "lower_name": "luliang",
        "code_full": "CHN014011"
    },
    {
        "id": "475",
        "state_id": "39",
        "code": "1",
        "name": "Hohhot",
        "cname": "呼和浩特",
        "lower_name": "hohhot",
        "code_full": "CHN015001"
    },
    {
        "id": "476",
        "state_id": "39",
        "code": "2",
        "name": "Baotou",
        "cname": "包头",
        "lower_name": "baotou",
        "code_full": "CHN015002"
    },
    {
        "id": "477",
        "state_id": "39",
        "code": "3",
        "name": "Wuhai",
        "cname": "乌海",
        "lower_name": "wuhai",
        "code_full": "CHN015003"
    },
    {
        "id": "478",
        "state_id": "39",
        "code": "4",
        "name": "Chifeng",
        "cname": "赤峰",
        "lower_name": "chifeng",
        "code_full": "CHN015004"
    },
    {
        "id": "479",
        "state_id": "39",
        "code": "5",
        "name": "Tongliao",
        "cname": "通辽",
        "lower_name": "tongliao",
        "code_full": "CHN015005"
    },
    {
        "id": "480",
        "state_id": "39",
        "code": "6",
        "name": "Ordos",
        "cname": "鄂尔多斯",
        "lower_name": "ordos",
        "code_full": "CHN015006"
    },
    {
        "id": "481",
        "state_id": "39",
        "code": "7",
        "name": "Hulun Buir",
        "cname": "呼伦贝尔",
        "lower_name": "hulun buir",
        "code_full": "CHN015007"
    },
    {
        "id": "482",
        "state_id": "39",
        "code": "8",
        "name": "Bayannur",
        "cname": "巴彦淖尔",
        "lower_name": "bayannur",
        "code_full": "CHN015008"
    },
    {
        "id": "483",
        "state_id": "39",
        "code": "9",
        "name": "Ulan Qab",
        "cname": "乌兰察布",
        "lower_name": "ulan qab",
        "code_full": "CHN015009"
    },
    {
        "id": "484",
        "state_id": "39",
        "code": "22",
        "name": "Xing'an",
        "cname": "兴安",
        "lower_name": "xing'an",
        "code_full": "CHN015022"
    },
    {
        "id": "485",
        "state_id": "39",
        "code": "25",
        "name": "Xilin Gol",
        "cname": "锡林郭勒",
        "lower_name": "xilin gol",
        "code_full": "CHN015025"
    },
    {
        "id": "486",
        "state_id": "39",
        "code": "29",
        "name": "Alxa",
        "cname": "阿拉善",
        "lower_name": "alxa",
        "code_full": "CHN015029"
    },
    {
        "id": "487",
        "state_id": "40",
        "code": "1",
        "name": "Shenyang",
        "cname": "沈阳",
        "lower_name": "shenyang",
        "code_full": "CHN021001"
    },
    {
        "id": "488",
        "state_id": "40",
        "code": "2",
        "name": "Dalian",
        "cname": "大连",
        "lower_name": "dalian",
        "code_full": "CHN021002"
    },
    {
        "id": "489",
        "state_id": "40",
        "code": "3",
        "name": "Anshan",
        "cname": "鞍山",
        "lower_name": "anshan",
        "code_full": "CHN021003"
    },
    {
        "id": "490",
        "state_id": "40",
        "code": "4",
        "name": "Fushun",
        "cname": "抚顺",
        "lower_name": "fushun",
        "code_full": "CHN021004"
    },
    {
        "id": "491",
        "state_id": "40",
        "code": "5",
        "name": "Benxi",
        "cname": "本溪",
        "lower_name": "benxi",
        "code_full": "CHN021005"
    },
    {
        "id": "492",
        "state_id": "40",
        "code": "6",
        "name": "Dandong",
        "cname": "丹东",
        "lower_name": "dandong",
        "code_full": "CHN021006"
    },
    {
        "id": "493",
        "state_id": "40",
        "code": "7",
        "name": "Jinzhou",
        "cname": "锦州",
        "lower_name": "jinzhou",
        "code_full": "CHN021007"
    },
    {
        "id": "494",
        "state_id": "40",
        "code": "8",
        "name": "Yingkou",
        "cname": "营口",
        "lower_name": "yingkou",
        "code_full": "CHN021008"
    },
    {
        "id": "495",
        "state_id": "40",
        "code": "9",
        "name": "Fuxin",
        "cname": "阜新",
        "lower_name": "fuxin",
        "code_full": "CHN021009"
    },
    {
        "id": "496",
        "state_id": "40",
        "code": "10",
        "name": "Liaoyang",
        "cname": "辽阳",
        "lower_name": "liaoyang",
        "code_full": "CHN021010"
    },
    {
        "id": "497",
        "state_id": "40",
        "code": "11",
        "name": "Panjin",
        "cname": "盘锦",
        "lower_name": "panjin",
        "code_full": "CHN021011"
    },
    {
        "id": "498",
        "state_id": "40",
        "code": "12",
        "name": "Tieling",
        "cname": "铁岭",
        "lower_name": "tieling",
        "code_full": "CHN021012"
    },
    {
        "id": "499",
        "state_id": "40",
        "code": "13",
        "name": "Chaoyang",
        "cname": "朝阳",
        "lower_name": "chaoyang",
        "code_full": "CHN021013"
    },
    {
        "id": "500",
        "state_id": "40",
        "code": "14",
        "name": "Huludao",
        "cname": "葫芦岛",
        "lower_name": "huludao",
        "code_full": "CHN021014"
    },
    {
        "id": "501",
        "state_id": "41",
        "code": "1",
        "name": "Changchun",
        "cname": "长春",
        "lower_name": "changchun",
        "code_full": "CHN022001"
    },
    {
        "id": "502",
        "state_id": "41",
        "code": "2",
        "name": "Jilin",
        "cname": "吉林",
        "lower_name": "jilin",
        "code_full": "CHN022002"
    },
    {
        "id": "503",
        "state_id": "41",
        "code": "3",
        "name": "Siping",
        "cname": "四平",
        "lower_name": "siping",
        "code_full": "CHN022003"
    },
    {
        "id": "504",
        "state_id": "41",
        "code": "4",
        "name": "Liaoyuan",
        "cname": "辽源",
        "lower_name": "liaoyuan",
        "code_full": "CHN022004"
    },
    {
        "id": "505",
        "state_id": "41",
        "code": "5",
        "name": "Tonghua",
        "cname": "通化",
        "lower_name": "tonghua",
        "code_full": "CHN022005"
    },
    {
        "id": "506",
        "state_id": "41",
        "code": "6",
        "name": "Baishan",
        "cname": "白山",
        "lower_name": "baishan",
        "code_full": "CHN022006"
    },
    {
        "id": "507",
        "state_id": "41",
        "code": "7",
        "name": "Songyuan",
        "cname": "松原",
        "lower_name": "songyuan",
        "code_full": "CHN022007"
    },
    {
        "id": "508",
        "state_id": "41",
        "code": "8",
        "name": "Baicheng",
        "cname": "白城",
        "lower_name": "baicheng",
        "code_full": "CHN022008"
    },
    {
        "id": "509",
        "state_id": "41",
        "code": "24",
        "name": "Yanbian Korean Autonomous Prefecture",
        "cname": "延边",
        "lower_name": "yanbian korean autonomous prefecture",
        "code_full": "CHN022024"
    },
    {
        "id": "510",
        "state_id": "42",
        "code": "1",
        "name": "Harbin",
        "cname": "哈尔滨",
        "lower_name": "harbin",
        "code_full": "CHN023001"
    },
    {
        "id": "511",
        "state_id": "42",
        "code": "2",
        "name": "Qiqihar",
        "cname": "齐齐哈尔",
        "lower_name": "qiqihar",
        "code_full": "CHN023002"
    },
    {
        "id": "512",
        "state_id": "42",
        "code": "3",
        "name": "Jixi",
        "cname": "鸡西",
        "lower_name": "jixi",
        "code_full": "CHN023003"
    },
    {
        "id": "513",
        "state_id": "42",
        "code": "4",
        "name": "Hegang",
        "cname": "鹤岗",
        "lower_name": "hegang",
        "code_full": "CHN023004"
    },
    {
        "id": "514",
        "state_id": "42",
        "code": "5",
        "name": "Shuangyashan",
        "cname": "双鸭山",
        "lower_name": "shuangyashan",
        "code_full": "CHN023005"
    },
    {
        "id": "515",
        "state_id": "42",
        "code": "6",
        "name": "Daqing",
        "cname": "大庆",
        "lower_name": "daqing",
        "code_full": "CHN023006"
    },
    {
        "id": "516",
        "state_id": "42",
        "code": "7",
        "name": "Yichun",
        "cname": "伊春",
        "lower_name": "yichun",
        "code_full": "CHN023007"
    },
    {
        "id": "517",
        "state_id": "42",
        "code": "8",
        "name": "Jiamusi",
        "cname": "佳木斯",
        "lower_name": "jiamusi",
        "code_full": "CHN023008"
    },
    {
        "id": "518",
        "state_id": "42",
        "code": "9",
        "name": "Qitaihe",
        "cname": "七台河",
        "lower_name": "qitaihe",
        "code_full": "CHN023009"
    },
    {
        "id": "519",
        "state_id": "42",
        "code": "10",
        "name": "Mudanjiang",
        "cname": "牡丹江",
        "lower_name": "mudanjiang",
        "code_full": "CHN023010"
    },
    {
        "id": "520",
        "state_id": "42",
        "code": "11",
        "name": "Heihe",
        "cname": "黑河",
        "lower_name": "heihe",
        "code_full": "CHN023011"
    },
    {
        "id": "521",
        "state_id": "42",
        "code": "12",
        "name": "Suihua",
        "cname": "绥化",
        "lower_name": "suihua",
        "code_full": "CHN023012"
    },
    {
        "id": "522",
        "state_id": "42",
        "code": "27",
        "name": "Da Hinggan Ling",
        "cname": "大兴安岭",
        "lower_name": "da hinggan ling",
        "code_full": "CHN023027"
    },
    {
        "id": "523",
        "state_id": "43",
        "code": "1",
        "name": "Huangpu",
        "cname": "黄浦",
        "lower_name": "huangpu",
        "code_full": "CHN031001"
    },
    {
        "id": "524",
        "state_id": "43",
        "code": "3",
        "name": "Luwan",
        "cname": "卢湾",
        "lower_name": "luwan",
        "code_full": "CHN031003"
    },
    {
        "id": "525",
        "state_id": "43",
        "code": "4",
        "name": "Xuhui",
        "cname": "徐汇",
        "lower_name": "xuhui",
        "code_full": "CHN031004"
    },
    {
        "id": "526",
        "state_id": "43",
        "code": "5",
        "name": "Changning",
        "cname": "长宁",
        "lower_name": "changning",
        "code_full": "CHN031005"
    },
    {
        "id": "527",
        "state_id": "43",
        "code": "6",
        "name": "Jing'an",
        "cname": "静安",
        "lower_name": "jing'an",
        "code_full": "CHN031006"
    },
    {
        "id": "528",
        "state_id": "43",
        "code": "7",
        "name": "Putuo",
        "cname": "普陀",
        "lower_name": "putuo",
        "code_full": "CHN031007"
    },
    {
        "id": "529",
        "state_id": "43",
        "code": "8",
        "name": "Zhabei",
        "cname": "闸北",
        "lower_name": "zhabei",
        "code_full": "CHN031008"
    },
    {
        "id": "530",
        "state_id": "43",
        "code": "9",
        "name": "Hongkou",
        "cname": "虹口",
        "lower_name": "hongkou",
        "code_full": "CHN031009"
    },
    {
        "id": "531",
        "state_id": "43",
        "code": "11",
        "name": "Yangpu",
        "cname": "杨浦",
        "lower_name": "yangpu",
        "code_full": "CHN031011"
    },
    {
        "id": "532",
        "state_id": "43",
        "code": "12",
        "name": "Minhang",
        "cname": "闵行",
        "lower_name": "minhang",
        "code_full": "CHN031012"
    },
    {
        "id": "533",
        "state_id": "43",
        "code": "13",
        "name": "Baoshan",
        "cname": "宝山",
        "lower_name": "baoshan",
        "code_full": "CHN031013"
    },
    {
        "id": "534",
        "state_id": "43",
        "code": "14",
        "name": "Jiading",
        "cname": "嘉定",
        "lower_name": "jiading",
        "code_full": "CHN031014"
    },
    {
        "id": "535",
        "state_id": "43",
        "code": "15",
        "name": "Pudong New Area",
        "cname": "浦东新区",
        "lower_name": "pudong new area",
        "code_full": "CHN031015"
    },
    {
        "id": "536",
        "state_id": "43",
        "code": "16",
        "name": "Jinshan",
        "cname": "金山",
        "lower_name": "jinshan",
        "code_full": "CHN031016"
    },
    {
        "id": "537",
        "state_id": "43",
        "code": "17",
        "name": "Songjiang",
        "cname": "松江",
        "lower_name": "songjiang",
        "code_full": "CHN031017"
    },
    {
        "id": "538",
        "state_id": "43",
        "code": "26",
        "name": "Fengxian",
        "cname": "奉贤",
        "lower_name": "fengxian",
        "code_full": "CHN031026"
    },
    {
        "id": "539",
        "state_id": "43",
        "code": "29",
        "name": "Qingpu",
        "cname": "青浦",
        "lower_name": "qingpu",
        "code_full": "CHN031029"
    },
    {
        "id": "540",
        "state_id": "43",
        "code": "30",
        "name": "Chongming",
        "cname": "崇明",
        "lower_name": "chongming",
        "code_full": "CHN031030"
    },
    {
        "id": "541",
        "state_id": "44",
        "code": "1",
        "name": "Nanjing",
        "cname": "南京",
        "lower_name": "nanjing",
        "code_full": "CHN032001"
    },
    {
        "id": "542",
        "state_id": "44",
        "code": "2",
        "name": "Wuxi",
        "cname": "无锡",
        "lower_name": "wuxi",
        "code_full": "CHN032002"
    },
    {
        "id": "543",
        "state_id": "44",
        "code": "3",
        "name": "Xuzhou",
        "cname": "徐州",
        "lower_name": "xuzhou",
        "code_full": "CHN032003"
    },
    {
        "id": "544",
        "state_id": "44",
        "code": "4",
        "name": "Changzhou",
        "cname": "常州",
        "lower_name": "changzhou",
        "code_full": "CHN032004"
    },
    {
        "id": "545",
        "state_id": "44",
        "code": "5",
        "name": "Suzhou",
        "cname": "苏州",
        "lower_name": "suzhou",
        "code_full": "CHN032005"
    },
    {
        "id": "546",
        "state_id": "44",
        "code": "6",
        "name": "Nantong",
        "cname": "南通",
        "lower_name": "nantong",
        "code_full": "CHN032006"
    },
    {
        "id": "547",
        "state_id": "44",
        "code": "7",
        "name": "Lianyungang",
        "cname": "连云港",
        "lower_name": "lianyungang",
        "code_full": "CHN032007"
    },
    {
        "id": "548",
        "state_id": "44",
        "code": "8",
        "name": "Huai'an",
        "cname": "淮安",
        "lower_name": "huai'an",
        "code_full": "CHN032008"
    },
    {
        "id": "549",
        "state_id": "44",
        "code": "9",
        "name": "Yancheng",
        "cname": "盐城",
        "lower_name": "yancheng",
        "code_full": "CHN032009"
    },
    {
        "id": "550",
        "state_id": "44",
        "code": "10",
        "name": "Yangzhou",
        "cname": "扬州",
        "lower_name": "yangzhou",
        "code_full": "CHN032010"
    },
    {
        "id": "551",
        "state_id": "44",
        "code": "11",
        "name": "Zhenjiang",
        "cname": "镇江",
        "lower_name": "zhenjiang",
        "code_full": "CHN032011"
    },
    {
        "id": "552",
        "state_id": "44",
        "code": "12",
        "name": "Taizhou",
        "cname": "泰州",
        "lower_name": "taizhou",
        "code_full": "CHN032012"
    },
    {
        "id": "553",
        "state_id": "44",
        "code": "13",
        "name": "Suqian",
        "cname": "宿迁",
        "lower_name": "suqian",
        "code_full": "CHN032013"
    },
    {
        "id": "554",
        "state_id": "45",
        "code": "1",
        "name": "Hangzhou",
        "cname": "杭州",
        "lower_name": "hangzhou",
        "code_full": "CHN033001"
    },
    {
        "id": "555",
        "state_id": "45",
        "code": "2",
        "name": "Ningbo",
        "cname": "宁波",
        "lower_name": "ningbo",
        "code_full": "CHN033002"
    },
    {
        "id": "556",
        "state_id": "45",
        "code": "3",
        "name": "Wenzhou",
        "cname": "温州",
        "lower_name": "wenzhou",
        "code_full": "CHN033003"
    },
    {
        "id": "557",
        "state_id": "45",
        "code": "4",
        "name": "Jiaxing",
        "cname": "嘉兴",
        "lower_name": "jiaxing",
        "code_full": "CHN033004"
    },
    {
        "id": "558",
        "state_id": "45",
        "code": "5",
        "name": "Huzhou",
        "cname": "湖州",
        "lower_name": "huzhou",
        "code_full": "CHN033005"
    },
    {
        "id": "559",
        "state_id": "45",
        "code": "6",
        "name": "Shaoxing",
        "cname": "绍兴",
        "lower_name": "shaoxing",
        "code_full": "CHN033006"
    },
    {
        "id": "560",
        "state_id": "45",
        "code": "7",
        "name": "Jinhua",
        "cname": "金华",
        "lower_name": "jinhua",
        "code_full": "CHN033007"
    },
    {
        "id": "561",
        "state_id": "45",
        "code": "8",
        "name": "Quzhou",
        "cname": "衢州",
        "lower_name": "quzhou",
        "code_full": "CHN033008"
    },
    {
        "id": "562",
        "state_id": "45",
        "code": "9",
        "name": "Zhoushan",
        "cname": "舟山",
        "lower_name": "zhoushan",
        "code_full": "CHN033009"
    },
    {
        "id": "563",
        "state_id": "45",
        "code": "10",
        "name": "Taizhou",
        "cname": "台州",
        "lower_name": "taizhou",
        "code_full": "CHN033010"
    },
    {
        "id": "564",
        "state_id": "45",
        "code": "11",
        "name": "Lishui",
        "cname": "丽水",
        "lower_name": "lishui",
        "code_full": "CHN033011"
    },
    {
        "id": "565",
        "state_id": "46",
        "code": "1",
        "name": "Hefei",
        "cname": "合肥",
        "lower_name": "hefei",
        "code_full": "CHN034001"
    },
    {
        "id": "566",
        "state_id": "46",
        "code": "2",
        "name": "Wuhu",
        "cname": "芜湖",
        "lower_name": "wuhu",
        "code_full": "CHN034002"
    },
    {
        "id": "567",
        "state_id": "46",
        "code": "3",
        "name": "Bengbu",
        "cname": "蚌埠",
        "lower_name": "bengbu",
        "code_full": "CHN034003"
    },
    {
        "id": "568",
        "state_id": "46",
        "code": "4",
        "name": "Huainan",
        "cname": "淮南",
        "lower_name": "huainan",
        "code_full": "CHN034004"
    },
    {
        "id": "569",
        "state_id": "46",
        "code": "5",
        "name": "Ma'anshan",
        "cname": "马鞍山",
        "lower_name": "ma'anshan",
        "code_full": "CHN034005"
    },
    {
        "id": "570",
        "state_id": "46",
        "code": "6",
        "name": "Huaibei",
        "cname": "淮北",
        "lower_name": "huaibei",
        "code_full": "CHN034006"
    },
    {
        "id": "571",
        "state_id": "46",
        "code": "7",
        "name": "Tongling",
        "cname": "铜陵",
        "lower_name": "tongling",
        "code_full": "CHN034007"
    },
    {
        "id": "572",
        "state_id": "46",
        "code": "8",
        "name": "Anqing",
        "cname": "安庆",
        "lower_name": "anqing",
        "code_full": "CHN034008"
    },
    {
        "id": "573",
        "state_id": "46",
        "code": "10",
        "name": "Huangshan",
        "cname": "黄山",
        "lower_name": "huangshan",
        "code_full": "CHN034010"
    },
    {
        "id": "574",
        "state_id": "46",
        "code": "11",
        "name": "Chuzhou",
        "cname": "滁州",
        "lower_name": "chuzhou",
        "code_full": "CHN034011"
    },
    {
        "id": "575",
        "state_id": "46",
        "code": "12",
        "name": "Fuyang",
        "cname": "阜阳",
        "lower_name": "fuyang",
        "code_full": "CHN034012"
    },
    {
        "id": "576",
        "state_id": "46",
        "code": "13",
        "name": "Suzhou",
        "cname": "宿州",
        "lower_name": "suzhou",
        "code_full": "CHN034013"
    },
    {
        "id": "577",
        "state_id": "46",
        "code": "15",
        "name": "Lu'an",
        "cname": "六安",
        "lower_name": "lu'an",
        "code_full": "CHN034015"
    },
    {
        "id": "578",
        "state_id": "46",
        "code": "16",
        "name": "Bozhou",
        "cname": "亳州",
        "lower_name": "bozhou",
        "code_full": "CHN034016"
    },
    {
        "id": "579",
        "state_id": "46",
        "code": "17",
        "name": "Chizhou",
        "cname": "池州",
        "lower_name": "chizhou",
        "code_full": "CHN034017"
    },
    {
        "id": "580",
        "state_id": "46",
        "code": "18",
        "name": "Xuancheng",
        "cname": "宣城",
        "lower_name": "xuancheng",
        "code_full": "CHN034018"
    },
    {
        "id": "581",
        "state_id": "47",
        "code": "1",
        "name": "Fuzhou",
        "cname": "福州",
        "lower_name": "fuzhou",
        "code_full": "CHN035001"
    },
    {
        "id": "582",
        "state_id": "47",
        "code": "2",
        "name": "Xiamen",
        "cname": "厦门",
        "lower_name": "xiamen",
        "code_full": "CHN035002"
    },
    {
        "id": "583",
        "state_id": "47",
        "code": "3",
        "name": "Putian",
        "cname": "莆田",
        "lower_name": "putian",
        "code_full": "CHN035003"
    },
    {
        "id": "584",
        "state_id": "47",
        "code": "4",
        "name": "Sanming",
        "cname": "三明",
        "lower_name": "sanming",
        "code_full": "CHN035004"
    },
    {
        "id": "585",
        "state_id": "47",
        "code": "5",
        "name": "Quanzhou",
        "cname": "泉州",
        "lower_name": "quanzhou",
        "code_full": "CHN035005"
    },
    {
        "id": "586",
        "state_id": "47",
        "code": "6",
        "name": "Zhangzhou",
        "cname": "漳州",
        "lower_name": "zhangzhou",
        "code_full": "CHN035006"
    },
    {
        "id": "587",
        "state_id": "47",
        "code": "7",
        "name": "Nanping",
        "cname": "南平",
        "lower_name": "nanping",
        "code_full": "CHN035007"
    },
    {
        "id": "588",
        "state_id": "47",
        "code": "8",
        "name": "Longyan",
        "cname": "龙岩",
        "lower_name": "longyan",
        "code_full": "CHN035008"
    },
    {
        "id": "589",
        "state_id": "47",
        "code": "9",
        "name": "Ningde",
        "cname": "宁德",
        "lower_name": "ningde",
        "code_full": "CHN035009"
    },
    {
        "id": "590",
        "state_id": "48",
        "code": "1",
        "name": "Nanchang",
        "cname": "南昌",
        "lower_name": "nanchang",
        "code_full": "CHN036001"
    },
    {
        "id": "591",
        "state_id": "48",
        "code": "2",
        "name": "Jingdezhen",
        "cname": "景德镇",
        "lower_name": "jingdezhen",
        "code_full": "CHN036002"
    },
    {
        "id": "592",
        "state_id": "48",
        "code": "3",
        "name": "Pingxiang",
        "cname": "萍乡",
        "lower_name": "pingxiang",
        "code_full": "CHN036003"
    },
    {
        "id": "593",
        "state_id": "48",
        "code": "4",
        "name": "Jiujiang",
        "cname": "九江",
        "lower_name": "jiujiang",
        "code_full": "CHN036004"
    },
    {
        "id": "594",
        "state_id": "48",
        "code": "5",
        "name": "Xinyu",
        "cname": "新余",
        "lower_name": "xinyu",
        "code_full": "CHN036005"
    },
    {
        "id": "595",
        "state_id": "48",
        "code": "6",
        "name": "Yingtan",
        "cname": "鹰潭",
        "lower_name": "yingtan",
        "code_full": "CHN036006"
    },
    {
        "id": "596",
        "state_id": "48",
        "code": "7",
        "name": "Ganzhou",
        "cname": "赣州",
        "lower_name": "ganzhou",
        "code_full": "CHN036007"
    },
    {
        "id": "597",
        "state_id": "48",
        "code": "8",
        "name": "Ji'an",
        "cname": "吉安",
        "lower_name": "ji'an",
        "code_full": "CHN036008"
    },
    {
        "id": "598",
        "state_id": "48",
        "code": "9",
        "name": "Yichun",
        "cname": "宜春",
        "lower_name": "yichun",
        "code_full": "CHN036009"
    },
    {
        "id": "599",
        "state_id": "48",
        "code": "10",
        "name": "Fuzhou",
        "cname": "抚州",
        "lower_name": "fuzhou",
        "code_full": "CHN036010"
    },
    {
        "id": "600",
        "state_id": "48",
        "code": "11",
        "name": "Shangrao",
        "cname": "上饶",
        "lower_name": "shangrao",
        "code_full": "CHN036011"
    },
    {
        "id": "601",
        "state_id": "49",
        "code": "1",
        "name": "Jinan",
        "cname": "济南",
        "lower_name": "jinan",
        "code_full": "CHN037001"
    },
    {
        "id": "602",
        "state_id": "49",
        "code": "2",
        "name": "Qingdao",
        "cname": "青岛",
        "lower_name": "qingdao",
        "code_full": "CHN037002"
    },
    {
        "id": "603",
        "state_id": "49",
        "code": "3",
        "name": "Zibo",
        "cname": "淄博",
        "lower_name": "zibo",
        "code_full": "CHN037003"
    },
    {
        "id": "604",
        "state_id": "49",
        "code": "4",
        "name": "Zaozhuang",
        "cname": "枣庄",
        "lower_name": "zaozhuang",
        "code_full": "CHN037004"
    },
    {
        "id": "605",
        "state_id": "49",
        "code": "5",
        "name": "Dongying",
        "cname": "东营",
        "lower_name": "dongying",
        "code_full": "CHN037005"
    },
    {
        "id": "606",
        "state_id": "49",
        "code": "6",
        "name": "Yantai",
        "cname": "烟台",
        "lower_name": "yantai",
        "code_full": "CHN037006"
    },
    {
        "id": "607",
        "state_id": "49",
        "code": "7",
        "name": "Weifang",
        "cname": "潍坊",
        "lower_name": "weifang",
        "code_full": "CHN037007"
    },
    {
        "id": "608",
        "state_id": "49",
        "code": "8",
        "name": "Jining",
        "cname": "济宁",
        "lower_name": "jining",
        "code_full": "CHN037008"
    },
    {
        "id": "609",
        "state_id": "49",
        "code": "9",
        "name": "Tai'an",
        "cname": "泰安",
        "lower_name": "tai'an",
        "code_full": "CHN037009"
    },
    {
        "id": "610",
        "state_id": "49",
        "code": "10",
        "name": "Weihai",
        "cname": "威海",
        "lower_name": "weihai",
        "code_full": "CHN037010"
    },
    {
        "id": "611",
        "state_id": "49",
        "code": "11",
        "name": "Rizhao",
        "cname": "日照",
        "lower_name": "rizhao",
        "code_full": "CHN037011"
    },
    {
        "id": "612",
        "state_id": "49",
        "code": "12",
        "name": "Laiwu",
        "cname": "莱芜",
        "lower_name": "laiwu",
        "code_full": "CHN037012"
    },
    {
        "id": "613",
        "state_id": "49",
        "code": "13",
        "name": "Linyi",
        "cname": "临沂",
        "lower_name": "linyi",
        "code_full": "CHN037013"
    },
    {
        "id": "614",
        "state_id": "49",
        "code": "14",
        "name": "Dezhou",
        "cname": "德州",
        "lower_name": "dezhou",
        "code_full": "CHN037014"
    },
    {
        "id": "615",
        "state_id": "49",
        "code": "15",
        "name": "Liaocheng",
        "cname": "聊城",
        "lower_name": "liaocheng",
        "code_full": "CHN037015"
    },
    {
        "id": "616",
        "state_id": "49",
        "code": "16",
        "name": "Binzhou",
        "cname": "滨州",
        "lower_name": "binzhou",
        "code_full": "CHN037016"
    },
    {
        "id": "617",
        "state_id": "49",
        "code": "17",
        "name": "Heze",
        "cname": "菏泽",
        "lower_name": "heze",
        "code_full": "CHN037017"
    },
    {
        "id": "618",
        "state_id": "50",
        "code": "1",
        "name": "Zhengzhou",
        "cname": "郑州",
        "lower_name": "zhengzhou",
        "code_full": "CHN041001"
    },
    {
        "id": "619",
        "state_id": "50",
        "code": "2",
        "name": "Kaifeng",
        "cname": "开封",
        "lower_name": "kaifeng",
        "code_full": "CHN041002"
    },
    {
        "id": "620",
        "state_id": "50",
        "code": "3",
        "name": "Luoyang",
        "cname": "洛阳",
        "lower_name": "luoyang",
        "code_full": "CHN041003"
    },
    {
        "id": "621",
        "state_id": "50",
        "code": "4",
        "name": "Pingdingshan",
        "cname": "平顶山",
        "lower_name": "pingdingshan",
        "code_full": "CHN041004"
    },
    {
        "id": "622",
        "state_id": "50",
        "code": "5",
        "name": "Anyang",
        "cname": "安阳",
        "lower_name": "anyang",
        "code_full": "CHN041005"
    },
    {
        "id": "623",
        "state_id": "50",
        "code": "6",
        "name": "Hebi",
        "cname": "鹤壁",
        "lower_name": "hebi",
        "code_full": "CHN041006"
    },
    {
        "id": "624",
        "state_id": "50",
        "code": "7",
        "name": "Xinxiang",
        "cname": "新乡",
        "lower_name": "xinxiang",
        "code_full": "CHN041007"
    },
    {
        "id": "625",
        "state_id": "50",
        "code": "8",
        "name": "Jiaozuo",
        "cname": "焦作",
        "lower_name": "jiaozuo",
        "code_full": "CHN041008"
    },
    {
        "id": "626",
        "state_id": "50",
        "code": "9",
        "name": "Puyang",
        "cname": "濮阳",
        "lower_name": "puyang",
        "code_full": "CHN041009"
    },
    {
        "id": "627",
        "state_id": "50",
        "code": "10",
        "name": "Xuchang",
        "cname": "许昌",
        "lower_name": "xuchang",
        "code_full": "CHN041010"
    },
    {
        "id": "628",
        "state_id": "50",
        "code": "11",
        "name": "Luohe",
        "cname": "漯河",
        "lower_name": "luohe",
        "code_full": "CHN041011"
    },
    {
        "id": "629",
        "state_id": "50",
        "code": "12",
        "name": "Sanmenxia",
        "cname": "三门峡",
        "lower_name": "sanmenxia",
        "code_full": "CHN041012"
    },
    {
        "id": "630",
        "state_id": "50",
        "code": "13",
        "name": "Nanyang",
        "cname": "南阳",
        "lower_name": "nanyang",
        "code_full": "CHN041013"
    },
    {
        "id": "631",
        "state_id": "50",
        "code": "14",
        "name": "Shangqiu",
        "cname": "商丘",
        "lower_name": "shangqiu",
        "code_full": "CHN041014"
    },
    {
        "id": "632",
        "state_id": "50",
        "code": "15",
        "name": "Xinyang",
        "cname": "信阳",
        "lower_name": "xinyang",
        "code_full": "CHN041015"
    },
    {
        "id": "633",
        "state_id": "50",
        "code": "16",
        "name": "Zhoukou",
        "cname": "周口",
        "lower_name": "zhoukou",
        "code_full": "CHN041016"
    },
    {
        "id": "634",
        "state_id": "50",
        "code": "17",
        "name": "Zhumadian",
        "cname": "驻马店",
        "lower_name": "zhumadian",
        "code_full": "CHN041017"
    },
    {
        "id": "635",
        "state_id": "50",
        "code": "18",
        "name": "Jiyuan",
        "cname": "济源",
        "lower_name": "jiyuan",
        "code_full": "CHN041018"
    },
    {
        "id": "636",
        "state_id": "51",
        "code": "1",
        "name": "Wuhan",
        "cname": "武汉",
        "lower_name": "wuhan",
        "code_full": "CHN042001"
    },
    {
        "id": "637",
        "state_id": "51",
        "code": "2",
        "name": "Huangshi",
        "cname": "黄石",
        "lower_name": "huangshi",
        "code_full": "CHN042002"
    },
    {
        "id": "638",
        "state_id": "51",
        "code": "3",
        "name": "Shiyan",
        "cname": "十堰",
        "lower_name": "shiyan",
        "code_full": "CHN042003"
    },
    {
        "id": "639",
        "state_id": "51",
        "code": "5",
        "name": "Yichang",
        "cname": "宜昌",
        "lower_name": "yichang",
        "code_full": "CHN042005"
    },
    {
        "id": "640",
        "state_id": "51",
        "code": "6",
        "name": "Xiangyang",
        "cname": "襄阳",
        "lower_name": "xiangyang",
        "code_full": "CHN042006"
    },
    {
        "id": "641",
        "state_id": "51",
        "code": "7",
        "name": "Ezhou",
        "cname": "鄂州",
        "lower_name": "ezhou",
        "code_full": "CHN042007"
    },
    {
        "id": "642",
        "state_id": "51",
        "code": "8",
        "name": "Jingmen",
        "cname": "荆门",
        "lower_name": "jingmen",
        "code_full": "CHN042008"
    },
    {
        "id": "643",
        "state_id": "51",
        "code": "9",
        "name": "Xiaogan",
        "cname": "孝感",
        "lower_name": "xiaogan",
        "code_full": "CHN042009"
    },
    {
        "id": "644",
        "state_id": "51",
        "code": "10",
        "name": "Jingzhou",
        "cname": "荆州",
        "lower_name": "jingzhou",
        "code_full": "CHN042010"
    },
    {
        "id": "645",
        "state_id": "51",
        "code": "11",
        "name": "Huanggang",
        "cname": "黄冈",
        "lower_name": "huanggang",
        "code_full": "CHN042011"
    },
    {
        "id": "646",
        "state_id": "51",
        "code": "12",
        "name": "Xianning",
        "cname": "咸宁",
        "lower_name": "xianning",
        "code_full": "CHN042012"
    },
    {
        "id": "647",
        "state_id": "51",
        "code": "13",
        "name": "Suizhou",
        "cname": "随州",
        "lower_name": "suizhou",
        "code_full": "CHN042013"
    },
    {
        "id": "648",
        "state_id": "51",
        "code": "28",
        "name": "Enshi Tujia-Miao Autonomous Prefecture",
        "cname": "恩施",
        "lower_name": "enshi tujia-miao autonomous prefecture",
        "code_full": "CHN042028"
    },
    {
        "id": "649",
        "state_id": "51",
        "code": "94",
        "name": "Xiantao",
        "cname": "仙桃",
        "lower_name": "xiantao",
        "code_full": "CHN042094"
    },
    {
        "id": "650",
        "state_id": "51",
        "code": "95",
        "name": "Qianjiang",
        "cname": "潜江",
        "lower_name": "qianjiang",
        "code_full": "CHN042095"
    },
    {
        "id": "651",
        "state_id": "51",
        "code": "96",
        "name": "Tianmen",
        "cname": "天门",
        "lower_name": "tianmen",
        "code_full": "CHN042096"
    },
    {
        "id": "652",
        "state_id": "51",
        "code": "A21",
        "name": "Shennongjia",
        "cname": "神农架",
        "lower_name": "shennongjia",
        "code_full": "CHN042A21"
    },
    {
        "id": "653",
        "state_id": "52",
        "code": "1",
        "name": "Changsha",
        "cname": "长沙",
        "lower_name": "changsha",
        "code_full": "CHN043001"
    },
    {
        "id": "654",
        "state_id": "52",
        "code": "2",
        "name": "Zhuzhou",
        "cname": "株洲",
        "lower_name": "zhuzhou",
        "code_full": "CHN043002"
    },
    {
        "id": "655",
        "state_id": "52",
        "code": "3",
        "name": "Xiangtan",
        "cname": "湘潭",
        "lower_name": "xiangtan",
        "code_full": "CHN043003"
    },
    {
        "id": "656",
        "state_id": "52",
        "code": "4",
        "name": "Hengyang",
        "cname": "衡阳",
        "lower_name": "hengyang",
        "code_full": "CHN043004"
    },
    {
        "id": "657",
        "state_id": "52",
        "code": "5",
        "name": "Shaoyang",
        "cname": "邵阳",
        "lower_name": "shaoyang",
        "code_full": "CHN043005"
    },
    {
        "id": "658",
        "state_id": "52",
        "code": "6",
        "name": "Yueyang",
        "cname": "岳阳",
        "lower_name": "yueyang",
        "code_full": "CHN043006"
    },
    {
        "id": "659",
        "state_id": "52",
        "code": "7",
        "name": "Changde",
        "cname": "常德",
        "lower_name": "changde",
        "code_full": "CHN043007"
    },
    {
        "id": "660",
        "state_id": "52",
        "code": "8",
        "name": "Zhangjiajie",
        "cname": "张家界",
        "lower_name": "zhangjiajie",
        "code_full": "CHN043008"
    },
    {
        "id": "661",
        "state_id": "52",
        "code": "9",
        "name": "Yiyang",
        "cname": "益阳",
        "lower_name": "yiyang",
        "code_full": "CHN043009"
    },
    {
        "id": "662",
        "state_id": "52",
        "code": "10",
        "name": "Chenzhou",
        "cname": "郴州",
        "lower_name": "chenzhou",
        "code_full": "CHN043010"
    },
    {
        "id": "663",
        "state_id": "52",
        "code": "11",
        "name": "Yongzhou",
        "cname": "永州",
        "lower_name": "yongzhou",
        "code_full": "CHN043011"
    },
    {
        "id": "664",
        "state_id": "52",
        "code": "12",
        "name": "Huaihua",
        "cname": "怀化",
        "lower_name": "huaihua",
        "code_full": "CHN043012"
    },
    {
        "id": "665",
        "state_id": "52",
        "code": "13",
        "name": "Loudi",
        "cname": "娄底",
        "lower_name": "loudi",
        "code_full": "CHN043013"
    },
    {
        "id": "666",
        "state_id": "52",
        "code": "31",
        "name": "Xiangxi Tujia-Miao Autonomous Prefecture",
        "cname": "湘西",
        "lower_name": "xiangxi tujia-miao autonomous prefecture",
        "code_full": "CHN043031"
    },
    {
        "id": "667",
        "state_id": "53",
        "code": "1",
        "name": "Guangzhou",
        "cname": "广州",
        "lower_name": "guangzhou",
        "code_full": "CHN044001"
    },
    {
        "id": "668",
        "state_id": "53",
        "code": "2",
        "name": "Shaoguan",
        "cname": "韶关",
        "lower_name": "shaoguan",
        "code_full": "CHN044002"
    },
    {
        "id": "669",
        "state_id": "53",
        "code": "3",
        "name": "Shenzhen",
        "cname": "深圳",
        "lower_name": "shenzhen",
        "code_full": "CHN044003"
    },
    {
        "id": "670",
        "state_id": "53",
        "code": "4",
        "name": "Zhuhai",
        "cname": "珠海",
        "lower_name": "zhuhai",
        "code_full": "CHN044004"
    },
    {
        "id": "671",
        "state_id": "53",
        "code": "5",
        "name": "Shantou",
        "cname": "汕头",
        "lower_name": "shantou",
        "code_full": "CHN044005"
    },
    {
        "id": "672",
        "state_id": "53",
        "code": "6",
        "name": "Foshan",
        "cname": "佛山",
        "lower_name": "foshan",
        "code_full": "CHN044006"
    },
    {
        "id": "673",
        "state_id": "53",
        "code": "7",
        "name": "Jiangmen",
        "cname": "江门",
        "lower_name": "jiangmen",
        "code_full": "CHN044007"
    },
    {
        "id": "674",
        "state_id": "53",
        "code": "8",
        "name": "Zhanjiang",
        "cname": "湛江",
        "lower_name": "zhanjiang",
        "code_full": "CHN044008"
    },
    {
        "id": "675",
        "state_id": "53",
        "code": "9",
        "name": "Maoming",
        "cname": "茂名",
        "lower_name": "maoming",
        "code_full": "CHN044009"
    },
    {
        "id": "676",
        "state_id": "53",
        "code": "12",
        "name": "Zhaoqing",
        "cname": "肇庆",
        "lower_name": "zhaoqing",
        "code_full": "CHN044012"
    },
    {
        "id": "677",
        "state_id": "53",
        "code": "13",
        "name": "Huizhou",
        "cname": "惠州",
        "lower_name": "huizhou",
        "code_full": "CHN044013"
    },
    {
        "id": "678",
        "state_id": "53",
        "code": "14",
        "name": "Meizhou",
        "cname": "梅州",
        "lower_name": "meizhou",
        "code_full": "CHN044014"
    },
    {
        "id": "679",
        "state_id": "53",
        "code": "15",
        "name": "Shanwei",
        "cname": "汕尾",
        "lower_name": "shanwei",
        "code_full": "CHN044015"
    },
    {
        "id": "680",
        "state_id": "53",
        "code": "16",
        "name": "Heyuan",
        "cname": "河源",
        "lower_name": "heyuan",
        "code_full": "CHN044016"
    },
    {
        "id": "681",
        "state_id": "53",
        "code": "17",
        "name": "Yangjiang",
        "cname": "阳江",
        "lower_name": "yangjiang",
        "code_full": "CHN044017"
    },
    {
        "id": "682",
        "state_id": "53",
        "code": "18",
        "name": "Qingyuan",
        "cname": "清远",
        "lower_name": "qingyuan",
        "code_full": "CHN044018"
    },
    {
        "id": "683",
        "state_id": "53",
        "code": "19",
        "name": "Dongguan",
        "cname": "东莞",
        "lower_name": "dongguan",
        "code_full": "CHN044019"
    },
    {
        "id": "684",
        "state_id": "53",
        "code": "20",
        "name": "Zhongshan",
        "cname": "中山",
        "lower_name": "zhongshan",
        "code_full": "CHN044020"
    },
    {
        "id": "685",
        "state_id": "53",
        "code": "51",
        "name": "Chaozhou",
        "cname": "潮州",
        "lower_name": "chaozhou",
        "code_full": "CHN044051"
    },
    {
        "id": "686",
        "state_id": "53",
        "code": "52",
        "name": "Jieyang",
        "cname": "揭阳",
        "lower_name": "jieyang",
        "code_full": "CHN044052"
    },
    {
        "id": "687",
        "state_id": "53",
        "code": "53",
        "name": "Yunfu",
        "cname": "云浮",
        "lower_name": "yunfu",
        "code_full": "CHN044053"
    },
    {
        "id": "688",
        "state_id": "54",
        "code": "1",
        "name": "Nanning",
        "cname": "南宁",
        "lower_name": "nanning",
        "code_full": "CHN045001"
    },
    {
        "id": "689",
        "state_id": "54",
        "code": "2",
        "name": "Liuzhou",
        "cname": "柳州",
        "lower_name": "liuzhou",
        "code_full": "CHN045002"
    },
    {
        "id": "690",
        "state_id": "54",
        "code": "3",
        "name": "Guilin",
        "cname": "桂林",
        "lower_name": "guilin",
        "code_full": "CHN045003"
    },
    {
        "id": "691",
        "state_id": "54",
        "code": "4",
        "name": "Wuzhou",
        "cname": "梧州",
        "lower_name": "wuzhou",
        "code_full": "CHN045004"
    },
    {
        "id": "692",
        "state_id": "54",
        "code": "5",
        "name": "Beihai",
        "cname": "北海",
        "lower_name": "beihai",
        "code_full": "CHN045005"
    },
    {
        "id": "693",
        "state_id": "54",
        "code": "6",
        "name": "Fangchenggang",
        "cname": "防城港",
        "lower_name": "fangchenggang",
        "code_full": "CHN045006"
    },
    {
        "id": "694",
        "state_id": "54",
        "code": "7",
        "name": "Qinzhou",
        "cname": "钦州",
        "lower_name": "qinzhou",
        "code_full": "CHN045007"
    },
    {
        "id": "695",
        "state_id": "54",
        "code": "8",
        "name": "Guigang",
        "cname": "贵港",
        "lower_name": "guigang",
        "code_full": "CHN045008"
    },
    {
        "id": "696",
        "state_id": "54",
        "code": "9",
        "name": "Yulin",
        "cname": "玉林",
        "lower_name": "yulin",
        "code_full": "CHN045009"
    },
    {
        "id": "697",
        "state_id": "54",
        "code": "10",
        "name": "Baise",
        "cname": "百色",
        "lower_name": "baise",
        "code_full": "CHN045010"
    },
    {
        "id": "698",
        "state_id": "54",
        "code": "11",
        "name": "Hezhou",
        "cname": "贺州",
        "lower_name": "hezhou",
        "code_full": "CHN045011"
    },
    {
        "id": "699",
        "state_id": "54",
        "code": "12",
        "name": "Hechi",
        "cname": "河池",
        "lower_name": "hechi",
        "code_full": "CHN045012"
    },
    {
        "id": "700",
        "state_id": "54",
        "code": "13",
        "name": "Laibin",
        "cname": "来宾",
        "lower_name": "laibin",
        "code_full": "CHN045013"
    },
    {
        "id": "701",
        "state_id": "54",
        "code": "14",
        "name": "Chongzuo",
        "cname": "崇左",
        "lower_name": "chongzuo",
        "code_full": "CHN045014"
    },
    {
        "id": "702",
        "state_id": "55",
        "code": "1",
        "name": "Haikou",
        "cname": "海口",
        "lower_name": "haikou",
        "code_full": "CHN046001"
    },
    {
        "id": "703",
        "state_id": "55",
        "code": "2",
        "name": "Sanya",
        "cname": "三亚",
        "lower_name": "sanya",
        "code_full": "CHN046002"
    },
    {
        "id": "704",
        "state_id": "55",
        "code": "3",
        "name": "Shansha",
        "cname": "三沙",
        "lower_name": "shansha",
        "code_full": "CHN046003"
    },
    {
        "id": "705",
        "state_id": "55",
        "code": "91",
        "name": "Wuzhishan",
        "cname": "五指山",
        "lower_name": "wuzhishan",
        "code_full": "CHN046091"
    },
    {
        "id": "706",
        "state_id": "55",
        "code": "92",
        "name": "Qionghai",
        "cname": "琼海",
        "lower_name": "qionghai",
        "code_full": "CHN046092"
    },
    {
        "id": "707",
        "state_id": "55",
        "code": "93",
        "name": "Danzhou",
        "cname": "儋州",
        "lower_name": "danzhou",
        "code_full": "CHN046093"
    },
    {
        "id": "708",
        "state_id": "55",
        "code": "95",
        "name": "Wenchang",
        "cname": "文昌",
        "lower_name": "wenchang",
        "code_full": "CHN046095"
    },
    {
        "id": "709",
        "state_id": "55",
        "code": "96",
        "name": "Wanning",
        "cname": "万宁",
        "lower_name": "wanning",
        "code_full": "CHN046096"
    },
    {
        "id": "710",
        "state_id": "55",
        "code": "97",
        "name": "Dornod",
        "cname": "东方",
        "lower_name": "dornod",
        "code_full": "CHN046097"
    },
    {
        "id": "711",
        "state_id": "55",
        "code": "A25",
        "name": "Ding'an",
        "cname": "定安",
        "lower_name": "ding'an",
        "code_full": "CHN046A25"
    },
    {
        "id": "712",
        "state_id": "55",
        "code": "A26",
        "name": "Tunchang",
        "cname": "屯昌",
        "lower_name": "tunchang",
        "code_full": "CHN046A26"
    },
    {
        "id": "713",
        "state_id": "55",
        "code": "A27",
        "name": "Cengmai",
        "cname": "澄迈",
        "lower_name": "cengmai",
        "code_full": "CHN046A27"
    },
    {
        "id": "714",
        "state_id": "55",
        "code": "A28",
        "name": "Lingao",
        "cname": "临高",
        "lower_name": "lingao",
        "code_full": "CHN046A28"
    },
    {
        "id": "715",
        "state_id": "55",
        "code": "A3",
        "name": "Baisha Li Autonomous County",
        "cname": "白沙",
        "lower_name": "baisha li autonomous county",
        "code_full": "CHN046A30"
    },
    {
        "id": "716",
        "state_id": "55",
        "code": "A31",
        "name": "Jiang Li Autonomous County",
        "cname": "昌江",
        "lower_name": "jiang li autonomous county",
        "code_full": "CHN046A31"
    },
    {
        "id": "717",
        "state_id": "55",
        "code": "A33",
        "name": "Ledong Li Autonomous County",
        "cname": "乐东",
        "lower_name": "ledong li autonomous county",
        "code_full": "CHN046A33"
    },
    {
        "id": "718",
        "state_id": "55",
        "code": "A34",
        "name": "Lingshui Li Autonomous County",
        "cname": "陵水",
        "lower_name": "lingshui li autonomous county",
        "code_full": "CHN046A34"
    },
    {
        "id": "719",
        "state_id": "55",
        "code": "A35",
        "name": "Baoting Li-Miao Autonomous County",
        "cname": "保亭",
        "lower_name": "baoting li-miao autonomous county",
        "code_full": "CHN046A35"
    },
    {
        "id": "720",
        "state_id": "55",
        "code": "A36",
        "name": "Qiongzhong Li-Miao Autonomous County",
        "cname": "琼中",
        "lower_name": "qiongzhong li-miao autonomous county",
        "code_full": "CHN046A36"
    },
    {
        "id": "721",
        "state_id": "56",
        "code": "1",
        "name": "Wanzhou",
        "cname": "万州",
        "lower_name": "wanzhou",
        "code_full": "CHN050001"
    },
    {
        "id": "722",
        "state_id": "56",
        "code": "2",
        "name": "Fuling",
        "cname": "涪陵",
        "lower_name": "fuling",
        "code_full": "CHN050002"
    },
    {
        "id": "723",
        "state_id": "56",
        "code": "3",
        "name": "Yuzhong",
        "cname": "渝中",
        "lower_name": "yuzhong",
        "code_full": "CHN050003"
    },
    {
        "id": "724",
        "state_id": "56",
        "code": "4",
        "name": "Dadukou",
        "cname": "大渡口",
        "lower_name": "dadukou",
        "code_full": "CHN050004"
    },
    {
        "id": "725",
        "state_id": "56",
        "code": "5",
        "name": "Jiangbei",
        "cname": "江北",
        "lower_name": "jiangbei",
        "code_full": "CHN050005"
    },
    {
        "id": "726",
        "state_id": "56",
        "code": "6",
        "name": "Shapingba",
        "cname": "沙坪坝",
        "lower_name": "shapingba",
        "code_full": "CHN050006"
    },
    {
        "id": "727",
        "state_id": "56",
        "code": "7",
        "name": "Jiulongpo",
        "cname": "九龙坡",
        "lower_name": "jiulongpo",
        "code_full": "CHN050007"
    },
    {
        "id": "728",
        "state_id": "56",
        "code": "8",
        "name": "Nan'an",
        "cname": "南岸",
        "lower_name": "nan'an",
        "code_full": "CHN050008"
    },
    {
        "id": "729",
        "state_id": "56",
        "code": "9",
        "name": "Beibei",
        "cname": "北碚",
        "lower_name": "beibei",
        "code_full": "CHN050009"
    },
    {
        "id": "730",
        "state_id": "56",
        "code": "10",
        "name": "Wansheng",
        "cname": "万盛",
        "lower_name": "wansheng",
        "code_full": "CHN050010"
    },
    {
        "id": "731",
        "state_id": "56",
        "code": "11",
        "name": "Shuangqiao",
        "cname": "双桥",
        "lower_name": "shuangqiao",
        "code_full": "CHN050011"
    },
    {
        "id": "732",
        "state_id": "56",
        "code": "12",
        "name": "Yubei",
        "cname": "渝北",
        "lower_name": "yubei",
        "code_full": "CHN050012"
    },
    {
        "id": "733",
        "state_id": "56",
        "code": "13",
        "name": "Ba'nan",
        "cname": "巴南",
        "lower_name": "ba'nan",
        "code_full": "CHN050013"
    },
    {
        "id": "734",
        "state_id": "56",
        "code": "21",
        "name": "Changshou",
        "cname": "长寿",
        "lower_name": "changshou",
        "code_full": "CHN050021"
    },
    {
        "id": "735",
        "state_id": "56",
        "code": "22",
        "name": "Qijiang",
        "cname": "綦江",
        "lower_name": "qijiang",
        "code_full": "CHN050022"
    },
    {
        "id": "736",
        "state_id": "56",
        "code": "23",
        "name": "Tongnan",
        "cname": "潼南",
        "lower_name": "tongnan",
        "code_full": "CHN050023"
    },
    {
        "id": "737",
        "state_id": "56",
        "code": "24",
        "name": "Tongliang",
        "cname": "铜梁",
        "lower_name": "tongliang",
        "code_full": "CHN050024"
    },
    {
        "id": "738",
        "state_id": "56",
        "code": "25",
        "name": "Dazu",
        "cname": "大足",
        "lower_name": "dazu",
        "code_full": "CHN050025"
    },
    {
        "id": "739",
        "state_id": "56",
        "code": "26",
        "name": "Rongchang",
        "cname": "荣昌",
        "lower_name": "rongchang",
        "code_full": "CHN050026"
    },
    {
        "id": "740",
        "state_id": "56",
        "code": "27",
        "name": "Bishan",
        "cname": "璧山",
        "lower_name": "bishan",
        "code_full": "CHN050027"
    },
    {
        "id": "741",
        "state_id": "56",
        "code": "28",
        "name": "Liangping",
        "cname": "梁平",
        "lower_name": "liangping",
        "code_full": "CHN050028"
    },
    {
        "id": "742",
        "state_id": "56",
        "code": "29",
        "name": "Chengkou",
        "cname": "城口",
        "lower_name": "chengkou",
        "code_full": "CHN050029"
    },
    {
        "id": "743",
        "state_id": "56",
        "code": "30",
        "name": "Fengdu",
        "cname": "丰都",
        "lower_name": "fengdu",
        "code_full": "CHN050030"
    },
    {
        "id": "744",
        "state_id": "56",
        "code": "31",
        "name": "Dianjiang",
        "cname": "垫江",
        "lower_name": "dianjiang",
        "code_full": "CHN050031"
    },
    {
        "id": "745",
        "state_id": "56",
        "code": "32",
        "name": "Wulong",
        "cname": "武隆",
        "lower_name": "wulong",
        "code_full": "CHN050032"
    },
    {
        "id": "746",
        "state_id": "56",
        "code": "33",
        "name": "Zhongxian",
        "cname": "忠县",
        "lower_name": "zhongxian",
        "code_full": "CHN050033"
    },
    {
        "id": "747",
        "state_id": "56",
        "code": "34",
        "name": "Kaixian",
        "cname": "开县",
        "lower_name": "kaixian",
        "code_full": "CHN050034"
    },
    {
        "id": "748",
        "state_id": "56",
        "code": "35",
        "name": "Yunyang",
        "cname": "云阳",
        "lower_name": "yunyang",
        "code_full": "CHN050035"
    },
    {
        "id": "749",
        "state_id": "56",
        "code": "36",
        "name": "Fengjie",
        "cname": "奉节",
        "lower_name": "fengjie",
        "code_full": "CHN050036"
    },
    {
        "id": "750",
        "state_id": "56",
        "code": "37",
        "name": "Wushan",
        "cname": "巫山",
        "lower_name": "wushan",
        "code_full": "CHN050037"
    },
    {
        "id": "751",
        "state_id": "56",
        "code": "38",
        "name": "Wuxi",
        "cname": "巫溪",
        "lower_name": "wuxi",
        "code_full": "CHN050038"
    },
    {
        "id": "752",
        "state_id": "56",
        "code": "39",
        "name": "Qianjiang",
        "cname": "黔江",
        "lower_name": "qianjiang",
        "code_full": "CHN050039"
    },
    {
        "id": "753",
        "state_id": "56",
        "code": "40",
        "name": "Shizhu Tujia Autonomous Country",
        "cname": "石柱",
        "lower_name": "shizhu tujia autonomous country",
        "code_full": "CHN050040"
    },
    {
        "id": "754",
        "state_id": "56",
        "code": "41",
        "name": "Xiushan Tujia-Miao Autonomous Country",
        "cname": "秀山",
        "lower_name": "xiushan tujia-miao autonomous country",
        "code_full": "CHN050041"
    },
    {
        "id": "755",
        "state_id": "56",
        "code": "42",
        "name": "Youyang Tujia-Miao Autonomous Country",
        "cname": "酉阳",
        "lower_name": "youyang tujia-miao autonomous country",
        "code_full": "CHN050042"
    },
    {
        "id": "756",
        "state_id": "56",
        "code": "43",
        "name": "Pengshui Miao-Tujia Autonomous Country",
        "cname": "彭水",
        "lower_name": "pengshui miao-tujia autonomous country",
        "code_full": "CHN050043"
    },
    {
        "id": "757",
        "state_id": "56",
        "code": "81",
        "name": "Jiangjin",
        "cname": "江津",
        "lower_name": "jiangjin",
        "code_full": "CHN050081"
    },
    {
        "id": "758",
        "state_id": "56",
        "code": "82",
        "name": "Hechuan",
        "cname": "合川",
        "lower_name": "hechuan",
        "code_full": "CHN050082"
    },
    {
        "id": "759",
        "state_id": "56",
        "code": "83",
        "name": "Yongchuan",
        "cname": "永川",
        "lower_name": "yongchuan",
        "code_full": "CHN050083"
    },
    {
        "id": "760",
        "state_id": "56",
        "code": "84",
        "name": "Liangjiangxinqu",
        "cname": "南川",
        "lower_name": "liangjiangxinqu",
        "code_full": "CHN050084"
    },
    {
        "id": "761",
        "state_id": "56",
        "code": "85",
        "name": "Kaixian",
        "cname": "两江新区",
        "lower_name": "kaixian",
        "code_full": "CHN050085"
    },
    {
        "id": "762",
        "state_id": "57",
        "code": "1",
        "name": "Chengdu",
        "cname": "成都",
        "lower_name": "chengdu",
        "code_full": "CHN051001"
    },
    {
        "id": "763",
        "state_id": "57",
        "code": "3",
        "name": "Zigong",
        "cname": "自贡",
        "lower_name": "zigong",
        "code_full": "CHN051003"
    },
    {
        "id": "764",
        "state_id": "57",
        "code": "4",
        "name": "Panzhihua",
        "cname": "攀枝花",
        "lower_name": "panzhihua",
        "code_full": "CHN051004"
    },
    {
        "id": "765",
        "state_id": "57",
        "code": "5",
        "name": "Luzhou",
        "cname": "泸州",
        "lower_name": "luzhou",
        "code_full": "CHN051005"
    },
    {
        "id": "766",
        "state_id": "57",
        "code": "6",
        "name": "Deyang",
        "cname": "德阳",
        "lower_name": "deyang",
        "code_full": "CHN051006"
    },
    {
        "id": "767",
        "state_id": "57",
        "code": "7",
        "name": "Mianyang",
        "cname": "绵阳",
        "lower_name": "mianyang",
        "code_full": "CHN051007"
    },
    {
        "id": "768",
        "state_id": "57",
        "code": "8",
        "name": "Guangyuan",
        "cname": "广元",
        "lower_name": "guangyuan",
        "code_full": "CHN051008"
    },
    {
        "id": "769",
        "state_id": "57",
        "code": "9",
        "name": "Suining",
        "cname": "遂宁",
        "lower_name": "suining",
        "code_full": "CHN051009"
    },
    {
        "id": "770",
        "state_id": "57",
        "code": "10",
        "name": "Neijiang",
        "cname": "内江",
        "lower_name": "neijiang",
        "code_full": "CHN051010"
    },
    {
        "id": "771",
        "state_id": "57",
        "code": "11",
        "name": "Leshan",
        "cname": "乐山",
        "lower_name": "leshan",
        "code_full": "CHN051011"
    },
    {
        "id": "772",
        "state_id": "57",
        "code": "13",
        "name": "Nanchong",
        "cname": "南充",
        "lower_name": "nanchong",
        "code_full": "CHN051013"
    },
    {
        "id": "773",
        "state_id": "57",
        "code": "14",
        "name": "Meishan",
        "cname": "眉山",
        "lower_name": "meishan",
        "code_full": "CHN051014"
    },
    {
        "id": "774",
        "state_id": "57",
        "code": "15",
        "name": "Yibin",
        "cname": "宜宾",
        "lower_name": "yibin",
        "code_full": "CHN051015"
    },
    {
        "id": "775",
        "state_id": "57",
        "code": "16",
        "name": "Guang'an",
        "cname": "广安",
        "lower_name": "guang'an",
        "code_full": "CHN051016"
    },
    {
        "id": "776",
        "state_id": "57",
        "code": "17",
        "name": "Dazhou",
        "cname": "达州",
        "lower_name": "dazhou",
        "code_full": "CHN051017"
    },
    {
        "id": "777",
        "state_id": "57",
        "code": "18",
        "name": "Ya'an",
        "cname": "雅安",
        "lower_name": "ya'an",
        "code_full": "CHN051018"
    },
    {
        "id": "778",
        "state_id": "57",
        "code": "19",
        "name": "Bazhong",
        "cname": "巴中",
        "lower_name": "bazhong",
        "code_full": "CHN051019"
    },
    {
        "id": "779",
        "state_id": "57",
        "code": "20",
        "name": "Ziyang",
        "cname": "资阳",
        "lower_name": "ziyang",
        "code_full": "CHN051020"
    },
    {
        "id": "780",
        "state_id": "57",
        "code": "32",
        "name": "Aba Tibetan-Qiang Autonomous Prefecture",
        "cname": "阿坝",
        "lower_name": "aba tibetan-qiang autonomous prefecture",
        "code_full": "CHN051032"
    },
    {
        "id": "781",
        "state_id": "57",
        "code": "33",
        "name": "Garze Tibetan Autonomous Prefecture",
        "cname": "甘孜",
        "lower_name": "garze tibetan autonomous prefecture",
        "code_full": "CHN051033"
    },
    {
        "id": "782",
        "state_id": "57",
        "code": "34",
        "name": "Liangshan Yi Autonomous Prefecture",
        "cname": "凉山",
        "lower_name": "liangshan yi autonomous prefecture",
        "code_full": "CHN051034"
    },
    {
        "id": "783",
        "state_id": "58",
        "code": "1",
        "name": "Guiyang",
        "cname": "贵阳",
        "lower_name": "guiyang",
        "code_full": "CHN052001"
    },
    {
        "id": "784",
        "state_id": "58",
        "code": "2",
        "name": "Liupanshui",
        "cname": "六盘水",
        "lower_name": "liupanshui",
        "code_full": "CHN052002"
    },
    {
        "id": "785",
        "state_id": "58",
        "code": "3",
        "name": "Zunyi",
        "cname": "遵义",
        "lower_name": "zunyi",
        "code_full": "CHN052003"
    },
    {
        "id": "786",
        "state_id": "58",
        "code": "4",
        "name": "Anshun",
        "cname": "安顺",
        "lower_name": "anshun",
        "code_full": "CHN052004"
    },
    {
        "id": "787",
        "state_id": "58",
        "code": "22",
        "name": "Tongren",
        "cname": "铜仁",
        "lower_name": "tongren",
        "code_full": "CHN052022"
    },
    {
        "id": "788",
        "state_id": "58",
        "code": "23",
        "name": "Qianxinan Buyi-Miao Autonomous Prefecture",
        "cname": "黔西南",
        "lower_name": "qianxinan buyi-miao autonomous prefecture",
        "code_full": "CHN052023"
    },
    {
        "id": "789",
        "state_id": "58",
        "code": "24",
        "name": "Bijie",
        "cname": "毕节",
        "lower_name": "bijie",
        "code_full": "CHN052024"
    },
    {
        "id": "790",
        "state_id": "58",
        "code": "26",
        "name": "Qiandongnan Miao-Dong Autonomous Prefecture",
        "cname": "黔东南",
        "lower_name": "qiandongnan miao-dong autonomous prefecture",
        "code_full": "CHN052026"
    },
    {
        "id": "791",
        "state_id": "58",
        "code": "27",
        "name": "Qiannan Buyi Autonomous Prefecture",
        "cname": "黔南",
        "lower_name": "qiannan buyi autonomous prefecture",
        "code_full": "CHN052027"
    },
    {
        "id": "792",
        "state_id": "59",
        "code": "1",
        "name": "Kunming",
        "cname": "昆明",
        "lower_name": "kunming",
        "code_full": "CHN053001"
    },
    {
        "id": "793",
        "state_id": "59",
        "code": "3",
        "name": "Qujing",
        "cname": "曲靖",
        "lower_name": "qujing",
        "code_full": "CHN053003"
    },
    {
        "id": "794",
        "state_id": "59",
        "code": "4",
        "name": "Yuxi",
        "cname": "玉溪",
        "lower_name": "yuxi",
        "code_full": "CHN053004"
    },
    {
        "id": "795",
        "state_id": "59",
        "code": "5",
        "name": "Baoshan",
        "cname": "保山",
        "lower_name": "baoshan",
        "code_full": "CHN053005"
    },
    {
        "id": "796",
        "state_id": "59",
        "code": "6",
        "name": "Zhaotong",
        "cname": "昭通",
        "lower_name": "zhaotong",
        "code_full": "CHN053006"
    },
    {
        "id": "797",
        "state_id": "59",
        "code": "7",
        "name": "Lijiang",
        "cname": "丽江",
        "lower_name": "lijiang",
        "code_full": "CHN053007"
    },
    {
        "id": "798",
        "state_id": "59",
        "code": "8",
        "name": "Pu'er",
        "cname": "普洱",
        "lower_name": "pu'er",
        "code_full": "CHN053008"
    },
    {
        "id": "799",
        "state_id": "59",
        "code": "9",
        "name": "Lincang",
        "cname": "临沧",
        "lower_name": "lincang",
        "code_full": "CHN053009"
    },
    {
        "id": "800",
        "state_id": "59",
        "code": "23",
        "name": "Chuxiong Yi Autonomous Prefecture",
        "cname": "楚雄",
        "lower_name": "chuxiong yi autonomous prefecture",
        "code_full": "CHN053023"
    },
    {
        "id": "801",
        "state_id": "59",
        "code": "25",
        "name": "Honghe Hani-Yi Autonomous Prefecture",
        "cname": "红河",
        "lower_name": "honghe hani-yi autonomous prefecture",
        "code_full": "CHN053025"
    },
    {
        "id": "802",
        "state_id": "59",
        "code": "26",
        "name": "Wenshan Zhuang-Miao Autonomous Prefecture",
        "cname": "文山",
        "lower_name": "wenshan zhuang-miao autonomous prefecture",
        "code_full": "CHN053026"
    },
    {
        "id": "803",
        "state_id": "59",
        "code": "28",
        "name": "Xishuangbanna Dai Autonomous Prefecture",
        "cname": "西双版纳",
        "lower_name": "xishuangbanna dai autonomous prefecture",
        "code_full": "CHN053028"
    },
    {
        "id": "804",
        "state_id": "59",
        "code": "29",
        "name": "Dali Bai Autonomous Prefecture",
        "cname": "大理",
        "lower_name": "dali bai autonomous prefecture",
        "code_full": "CHN053029"
    },
    {
        "id": "805",
        "state_id": "59",
        "code": "31",
        "name": "Dehong Dai-Jingpo Autonomous Prefecture",
        "cname": "德宏",
        "lower_name": "dehong dai-jingpo autonomous prefecture",
        "code_full": "CHN053031"
    },
    {
        "id": "806",
        "state_id": "59",
        "code": "33",
        "name": "Nujiang Lisu Autonomous Prefecture",
        "cname": "怒江",
        "lower_name": "nujiang lisu autonomous prefecture",
        "code_full": "CHN053033"
    },
    {
        "id": "807",
        "state_id": "59",
        "code": "34",
        "name": "Diqing Tibetan Autonomous Prefecture",
        "cname": "迪庆",
        "lower_name": "diqing tibetan autonomous prefecture",
        "code_full": "CHN053034"
    },
    {
        "id": "808",
        "state_id": "60",
        "code": "1",
        "name": "Lhasa",
        "cname": "拉萨",
        "lower_name": "lhasa",
        "code_full": "CHN054001"
    },
    {
        "id": "809",
        "state_id": "60",
        "code": "21",
        "name": "Qamdo",
        "cname": "昌都",
        "lower_name": "qamdo",
        "code_full": "CHN054021"
    },
    {
        "id": "810",
        "state_id": "60",
        "code": "22",
        "name": "Shannan",
        "cname": "山南",
        "lower_name": "shannan",
        "code_full": "CHN054022"
    },
    {
        "id": "811",
        "state_id": "60",
        "code": "23",
        "name": "Xigaze",
        "cname": "日喀则",
        "lower_name": "xigaze",
        "code_full": "CHN054023"
    },
    {
        "id": "812",
        "state_id": "60",
        "code": "24",
        "name": "Nagqu",
        "cname": "那曲",
        "lower_name": "nagqu",
        "code_full": "CHN054024"
    },
    {
        "id": "813",
        "state_id": "60",
        "code": "25",
        "name": "Ngari",
        "cname": "阿里",
        "lower_name": "ngari",
        "code_full": "CHN054025"
    },
    {
        "id": "814",
        "state_id": "60",
        "code": "26",
        "name": "Nyingchi",
        "cname": "林芝",
        "lower_name": "nyingchi",
        "code_full": "CHN054026"
    },
    {
        "id": "815",
        "state_id": "61",
        "code": "1",
        "name": "Xi'an",
        "cname": "西安",
        "lower_name": "xi'an",
        "code_full": "CHN061001"
    },
    {
        "id": "816",
        "state_id": "61",
        "code": "2",
        "name": "Tongchuan",
        "cname": "铜川",
        "lower_name": "tongchuan",
        "code_full": "CHN061002"
    },
    {
        "id": "817",
        "state_id": "61",
        "code": "3",
        "name": "Baoji",
        "cname": "宝鸡",
        "lower_name": "baoji",
        "code_full": "CHN061003"
    },
    {
        "id": "818",
        "state_id": "61",
        "code": "4",
        "name": "Xianyang",
        "cname": "咸阳",
        "lower_name": "xianyang",
        "code_full": "CHN061004"
    },
    {
        "id": "819",
        "state_id": "61",
        "code": "5",
        "name": "Weinan",
        "cname": "渭南",
        "lower_name": "weinan",
        "code_full": "CHN061005"
    },
    {
        "id": "820",
        "state_id": "61",
        "code": "6",
        "name": "Yan'an",
        "cname": "延安",
        "lower_name": "yan'an",
        "code_full": "CHN061006"
    },
    {
        "id": "821",
        "state_id": "61",
        "code": "7",
        "name": "Hanzhong",
        "cname": "汉中",
        "lower_name": "hanzhong",
        "code_full": "CHN061007"
    },
    {
        "id": "822",
        "state_id": "61",
        "code": "8",
        "name": "Yulin",
        "cname": "榆林",
        "lower_name": "yulin",
        "code_full": "CHN061008"
    },
    {
        "id": "823",
        "state_id": "61",
        "code": "9",
        "name": "Ankang",
        "cname": "安康",
        "lower_name": "ankang",
        "code_full": "CHN061009"
    },
    {
        "id": "824",
        "state_id": "61",
        "code": "10",
        "name": "Shangluo",
        "cname": "商洛",
        "lower_name": "shangluo",
        "code_full": "CHN061010"
    },
    {
        "id": "825",
        "state_id": "62",
        "code": "1",
        "name": "Lanzhou",
        "cname": "兰州市",
        "lower_name": "lanzhou",
        "code_full": "CHN062001"
    },
    {
        "id": "826",
        "state_id": "62",
        "code": "2",
        "name": "Jinchang",
        "cname": "嘉峪关",
        "lower_name": "jinchang",
        "code_full": "CHN062002"
    },
    {
        "id": "827",
        "state_id": "62",
        "code": "3",
        "name": "Baiyin",
        "cname": "金昌",
        "lower_name": "baiyin",
        "code_full": "CHN062003"
    },
    {
        "id": "828",
        "state_id": "62",
        "code": "4",
        "name": "Tianshui",
        "cname": "白银",
        "lower_name": "tianshui",
        "code_full": "CHN062004"
    },
    {
        "id": "829",
        "state_id": "62",
        "code": "5",
        "name": "Jiayuguan",
        "cname": "天水",
        "lower_name": "jiayuguan",
        "code_full": "CHN062005"
    },
    {
        "id": "830",
        "state_id": "62",
        "code": "6",
        "name": "Wuwei",
        "cname": "武威",
        "lower_name": "wuwei",
        "code_full": "CHN062006"
    },
    {
        "id": "831",
        "state_id": "62",
        "code": "7",
        "name": "Zhangye",
        "cname": "张掖",
        "lower_name": "zhangye",
        "code_full": "CHN062007"
    },
    {
        "id": "832",
        "state_id": "62",
        "code": "8",
        "name": "Pingliang",
        "cname": "平凉",
        "lower_name": "pingliang",
        "code_full": "CHN062008"
    },
    {
        "id": "833",
        "state_id": "62",
        "code": "9",
        "name": "Jiuquan",
        "cname": "酒泉",
        "lower_name": "jiuquan",
        "code_full": "CHN062009"
    },
    {
        "id": "834",
        "state_id": "62",
        "code": "10",
        "name": "Qingyang",
        "cname": "庆阳",
        "lower_name": "qingyang",
        "code_full": "CHN062010"
    },
    {
        "id": "835",
        "state_id": "62",
        "code": "11",
        "name": "Dingxi",
        "cname": "定西",
        "lower_name": "dingxi",
        "code_full": "CHN062011"
    },
    {
        "id": "836",
        "state_id": "62",
        "code": "12",
        "name": "Longnan",
        "cname": "陇南",
        "lower_name": "longnan",
        "code_full": "CHN062012"
    },
    {
        "id": "837",
        "state_id": "62",
        "code": "29",
        "name": "Linxia Hui Autonomous Prefecture",
        "cname": "临夏",
        "lower_name": "linxia hui autonomous prefecture",
        "code_full": "CHN062029"
    },
    {
        "id": "838",
        "state_id": "62",
        "code": "30",
        "name": "Gannan Tibetan Autonomous Prefecture",
        "cname": "甘南",
        "lower_name": "gannan tibetan autonomous prefecture",
        "code_full": "CHN062030"
    },
    {
        "id": "839",
        "state_id": "63",
        "code": "1",
        "name": "Xining",
        "cname": "西宁",
        "lower_name": "xining",
        "code_full": "CHN063001"
    },
    {
        "id": "840",
        "state_id": "63",
        "code": "21",
        "name": "Haidong",
        "cname": "海东",
        "lower_name": "haidong",
        "code_full": "CHN063021"
    },
    {
        "id": "841",
        "state_id": "63",
        "code": "22",
        "name": "Haibei Tibetan Autonomous Prefecture",
        "cname": "海北",
        "lower_name": "haibei tibetan autonomous prefecture",
        "code_full": "CHN063022"
    },
    {
        "id": "842",
        "state_id": "63",
        "code": "23",
        "name": "Huangnan Tibetan Autonomous Prefecture",
        "cname": "黄南",
        "lower_name": "huangnan tibetan autonomous prefecture",
        "code_full": "CHN063023"
    },
    {
        "id": "843",
        "state_id": "63",
        "code": "25",
        "name": "Hainan Tibetan Autonomous Prefecture",
        "cname": "海南",
        "lower_name": "hainan tibetan autonomous prefecture",
        "code_full": "CHN063025"
    },
    {
        "id": "844",
        "state_id": "63",
        "code": "26",
        "name": "Guoluo Tibetan Autonomous Prefecture",
        "cname": "果洛",
        "lower_name": "guoluo tibetan autonomous prefecture",
        "code_full": "CHN063026"
    },
    {
        "id": "845",
        "state_id": "63",
        "code": "27",
        "name": "Yushu Tibetan Autonomous Prefecture",
        "cname": "玉树",
        "lower_name": "yushu tibetan autonomous prefecture",
        "code_full": "CHN063027"
    },
    {
        "id": "846",
        "state_id": "63",
        "code": "28",
        "name": "Haixi Mongol-Tibetan Autonomous Prefecture",
        "cname": "海西",
        "lower_name": "haixi mongol-tibetan autonomous prefecture",
        "code_full": "CHN063028"
    },
    {
        "id": "847",
        "state_id": "64",
        "code": "1",
        "name": "Yinchuan",
        "cname": "银川",
        "lower_name": "yinchuan",
        "code_full": "CHN064001"
    },
    {
        "id": "848",
        "state_id": "64",
        "code": "2",
        "name": "Shizuishan",
        "cname": "石嘴山",
        "lower_name": "shizuishan",
        "code_full": "CHN064002"
    },
    {
        "id": "849",
        "state_id": "64",
        "code": "3",
        "name": "Wuzhong",
        "cname": "吴忠",
        "lower_name": "wuzhong",
        "code_full": "CHN064003"
    },
    {
        "id": "850",
        "state_id": "64",
        "code": "4",
        "name": "Guyuan",
        "cname": "固原",
        "lower_name": "guyuan",
        "code_full": "CHN064004"
    },
    {
        "id": "851",
        "state_id": "64",
        "code": "5",
        "name": "Zhongwei",
        "cname": "中卫",
        "lower_name": "zhongwei",
        "code_full": "CHN064005"
    },
    {
        "id": "852",
        "state_id": "65",
        "code": "1",
        "name": "Urumqi",
        "cname": "乌鲁木齐",
        "lower_name": "urumqi",
        "code_full": "CHN065001"
    },
    {
        "id": "853",
        "state_id": "65",
        "code": "2",
        "name": "Karamay",
        "cname": "克拉玛依",
        "lower_name": "karamay",
        "code_full": "CHN065002"
    },
    {
        "id": "854",
        "state_id": "65",
        "code": "21",
        "name": "Turpan",
        "cname": "吐鲁番",
        "lower_name": "turpan",
        "code_full": "CHN065021"
    },
    {
        "id": "855",
        "state_id": "65",
        "code": "22",
        "name": "Hami",
        "cname": "哈密",
        "lower_name": "hami",
        "code_full": "CHN065022"
    },
    {
        "id": "856",
        "state_id": "65",
        "code": "23",
        "name": "Changji Hui Autonomous Prefecture",
        "cname": "昌吉",
        "lower_name": "changji hui autonomous prefecture",
        "code_full": "CHN065023"
    },
    {
        "id": "857",
        "state_id": "65",
        "code": "27",
        "name": "Bortala Mongol Autonomous Prefecture",
        "cname": "博尔塔拉",
        "lower_name": "bortala mongol autonomous prefecture",
        "code_full": "CHN065027"
    },
    {
        "id": "858",
        "state_id": "65",
        "code": "28",
        "name": "Bayingolin Mongol Autonomous Prefecture",
        "cname": "巴音郭楞",
        "lower_name": "bayingolin mongol autonomous prefecture",
        "code_full": "CHN065028"
    },
    {
        "id": "859",
        "state_id": "65",
        "code": "29",
        "name": "Aksu",
        "cname": "阿克苏",
        "lower_name": "aksu",
        "code_full": "CHN065029"
    },
    {
        "id": "860",
        "state_id": "65",
        "code": "30",
        "name": "Kizilsu Kirgiz Autonomous Prefecture",
        "cname": "克孜勒苏",
        "lower_name": "kizilsu kirgiz autonomous prefecture",
        "code_full": "CHN065030"
    },
    {
        "id": "861",
        "state_id": "65",
        "code": "31",
        "name": "Kashi",
        "cname": "喀什",
        "lower_name": "kashi",
        "code_full": "CHN065031"
    },
    {
        "id": "862",
        "state_id": "65",
        "code": "32",
        "name": "Hotan",
        "cname": "和田",
        "lower_name": "hotan",
        "code_full": "CHN065032"
    },
    {
        "id": "863",
        "state_id": "65",
        "code": "40",
        "name": "Ili Kazakh Autonomous Prefecture",
        "cname": "伊犁",
        "lower_name": "ili kazakh autonomous prefecture",
        "code_full": "CHN065040"
    },
    {
        "id": "864",
        "state_id": "65",
        "code": "42",
        "name": "Tacheng",
        "cname": "塔城",
        "lower_name": "tacheng",
        "code_full": "CHN065042"
    },
    {
        "id": "865",
        "state_id": "65",
        "code": "43",
        "name": "Altay",
        "cname": "阿勒泰",
        "lower_name": "altay",
        "code_full": "CHN065043"
    },
    {
        "id": "866",
        "state_id": "65",
        "code": "91",
        "name": "Shihezi",
        "cname": "石河子",
        "lower_name": "shihezi",
        "code_full": "CHN065091"
    },
    {
        "id": "867",
        "state_id": "65",
        "code": "92",
        "name": "Alar",
        "cname": "阿拉尔",
        "lower_name": "alar",
        "code_full": "CHN065092"
    },
    {
        "id": "868",
        "state_id": "65",
        "code": "93",
        "name": "Tumsuk",
        "cname": "图木舒克",
        "lower_name": "tumsuk",
        "code_full": "CHN065093"
    },
    {
        "id": "869",
        "state_id": "65",
        "code": "94",
        "name": "Wujiaqu",
        "cname": "五家渠",
        "lower_name": "wujiaqu",
        "code_full": "CHN065094"
    },
    {
        "id": "870",
        "state_id": "65",
        "code": "95",
        "name": "Beitun",
        "cname": "北屯",
        "lower_name": "beitun",
        "code_full": "CHN065095"
    },
    {
        "id": "871",
        "state_id": "66",
        "code": "1",
        "name": "Taipei City",
        "cname": "台北市",
        "lower_name": "taipei city",
        "code_full": "CHN071001"
    },
    {
        "id": "872",
        "state_id": "66",
        "code": "2",
        "name": "Kaohsiung City",
        "cname": "高雄市",
        "lower_name": "kaohsiung city",
        "code_full": "CHN071002"
    },
    {
        "id": "873",
        "state_id": "66",
        "code": "3",
        "name": "Keelung City",
        "cname": "基隆市",
        "lower_name": "keelung city",
        "code_full": "CHN071003"
    },
    {
        "id": "874",
        "state_id": "66",
        "code": "4",
        "name": "Taichung City",
        "cname": "台中市",
        "lower_name": "taichung city",
        "code_full": "CHN071004"
    },
    {
        "id": "875",
        "state_id": "66",
        "code": "5",
        "name": "Tainan City",
        "cname": "台南市",
        "lower_name": "tainan city",
        "code_full": "CHN071005"
    },
    {
        "id": "876",
        "state_id": "66",
        "code": "6",
        "name": "Hsinchu City",
        "cname": "新竹市",
        "lower_name": "hsinchu city",
        "code_full": "CHN071006"
    },
    {
        "id": "877",
        "state_id": "66",
        "code": "7",
        "name": "Chiayi City",
        "cname": "嘉义市",
        "lower_name": "chiayi city",
        "code_full": "CHN071007"
    },
    {
        "id": "878",
        "state_id": "66",
        "code": "8",
        "name": "Taipei County",
        "cname": "台北县",
        "lower_name": "taipei county",
        "code_full": "CHN071008"
    },
    {
        "id": "879",
        "state_id": "66",
        "code": "9",
        "name": "Ilan County",
        "cname": "宜兰县",
        "lower_name": "ilan county",
        "code_full": "CHN071009"
    },
    {
        "id": "880",
        "state_id": "66",
        "code": "10",
        "name": "Taoyuan County",
        "cname": "桃园县",
        "lower_name": "taoyuan county",
        "code_full": "CHN071010"
    },
    {
        "id": "881",
        "state_id": "66",
        "code": "11",
        "name": "Hsinchu County",
        "cname": "新竹县",
        "lower_name": "hsinchu county",
        "code_full": "CHN071011"
    },
    {
        "id": "882",
        "state_id": "66",
        "code": "12",
        "name": "Miaoli County",
        "cname": "苗栗县",
        "lower_name": "miaoli county",
        "code_full": "CHN071012"
    },
    {
        "id": "883",
        "state_id": "66",
        "code": "13",
        "name": "Taichung County",
        "cname": "台中县",
        "lower_name": "taichung county",
        "code_full": "CHN071013"
    },
    {
        "id": "884",
        "state_id": "66",
        "code": "14",
        "name": "Changhwa County",
        "cname": "彰化县",
        "lower_name": "changhwa county",
        "code_full": "CHN071014"
    },
    {
        "id": "885",
        "state_id": "66",
        "code": "15",
        "name": "Nantou County",
        "cname": "南投县",
        "lower_name": "nantou county",
        "code_full": "CHN071015"
    },
    {
        "id": "886",
        "state_id": "66",
        "code": "16",
        "name": "Yunnlin County",
        "cname": "云林县",
        "lower_name": "yunnlin county",
        "code_full": "CHN071016"
    },
    {
        "id": "887",
        "state_id": "66",
        "code": "17",
        "name": "Chiayi County",
        "cname": "嘉义县",
        "lower_name": "chiayi county",
        "code_full": "CHN071017"
    },
    {
        "id": "888",
        "state_id": "66",
        "code": "18",
        "name": "Tainan County",
        "cname": "台南县",
        "lower_name": "tainan county",
        "code_full": "CHN071018"
    },
    {
        "id": "889",
        "state_id": "66",
        "code": "19",
        "name": "Kaohsiung County",
        "cname": "高雄县",
        "lower_name": "kaohsiung county",
        "code_full": "CHN071019"
    },
    {
        "id": "890",
        "state_id": "66",
        "code": "20",
        "name": "Pingtung County",
        "cname": "屏东县",
        "lower_name": "pingtung county",
        "code_full": "CHN071020"
    },
    {
        "id": "891",
        "state_id": "66",
        "code": "21",
        "name": "Penghu County",
        "cname": "澎湖县",
        "lower_name": "penghu county",
        "code_full": "CHN071021"
    },
    {
        "id": "892",
        "state_id": "66",
        "code": "22",
        "name": "Taitung County",
        "cname": "台东县",
        "lower_name": "taitung county",
        "code_full": "CHN071022"
    },
    {
        "id": "893",
        "state_id": "66",
        "code": "23",
        "name": "Hualian County",
        "cname": "花莲县",
        "lower_name": "hualian county",
        "code_full": "CHN071023"
    },
    {
        "id": "894",
        "state_id": "67",
        "code": "HCW",
        "name": "",
        "cname": "中西区",
        "lower_name": "",
        "code_full": "CHN081HCW"
    },
    {
        "id": "895",
        "state_id": "67",
        "code": "HEA",
        "name": "",
        "cname": "东区",
        "lower_name": "",
        "code_full": "CHN081HEA"
    },
    {
        "id": "896",
        "state_id": "67",
        "code": "HSO",
        "name": "",
        "cname": "南区",
        "lower_name": "",
        "code_full": "CHN081HSO"
    },
    {
        "id": "897",
        "state_id": "67",
        "code": "HWC",
        "name": "",
        "cname": "湾仔区",
        "lower_name": "",
        "code_full": "CHN081HWC"
    },
    {
        "id": "898",
        "state_id": "67",
        "code": "KKC",
        "name": "",
        "cname": "九龙城区",
        "lower_name": "",
        "code_full": "CHN081KKC"
    },
    {
        "id": "899",
        "state_id": "67",
        "code": "KKT",
        "name": "",
        "cname": "观塘区",
        "lower_name": "",
        "code_full": "CHN081KKT"
    },
    {
        "id": "900",
        "state_id": "67",
        "code": "KSS",
        "name": "",
        "cname": "深水埗区",
        "lower_name": "",
        "code_full": "CHN081KSS"
    },
    {
        "id": "901",
        "state_id": "67",
        "code": "KWT",
        "name": "",
        "cname": "黄大仙区",
        "lower_name": "",
        "code_full": "CHN081KWT"
    },
    {
        "id": "902",
        "state_id": "67",
        "code": "KYT",
        "name": "",
        "cname": "油尖旺区",
        "lower_name": "",
        "code_full": "CHN081KYT"
    },
    {
        "id": "903",
        "state_id": "67",
        "code": "NIS",
        "name": "",
        "cname": "离岛区",
        "lower_name": "",
        "code_full": "CHN081NIS"
    },
    {
        "id": "904",
        "state_id": "67",
        "code": "NKT",
        "name": "",
        "cname": "葵青区",
        "lower_name": "",
        "code_full": "CHN081NKT"
    },
    {
        "id": "905",
        "state_id": "67",
        "code": "NNO",
        "name": "",
        "cname": "北区",
        "lower_name": "",
        "code_full": "CHN081NNO"
    },
    {
        "id": "906",
        "state_id": "67",
        "code": "NSK",
        "name": "",
        "cname": "西贡区",
        "lower_name": "",
        "code_full": "CHN081NSK"
    },
    {
        "id": "907",
        "state_id": "67",
        "code": "NST",
        "name": "",
        "cname": "沙田区",
        "lower_name": "",
        "code_full": "CHN081NST"
    },
    {
        "id": "908",
        "state_id": "67",
        "code": "NTM",
        "name": "",
        "cname": "屯门区",
        "lower_name": "",
        "code_full": "CHN081NTM"
    },
    {
        "id": "909",
        "state_id": "67",
        "code": "NTP",
        "name": "",
        "cname": "大埔区",
        "lower_name": "",
        "code_full": "CHN081NTP"
    },
    {
        "id": "910",
        "state_id": "67",
        "code": "NTW",
        "name": "",
        "cname": "荃湾区",
        "lower_name": "",
        "code_full": "CHN081NTW"
    },
    {
        "id": "911",
        "state_id": "67",
        "code": "NYL",
        "name": "",
        "cname": "元朗区",
        "lower_name": "",
        "code_full": "CHN081NYL"
    },
    {
        "id": "912",
        "state_id": "68",
        "code": "ANT",
        "name": "",
        "cname": "圣安多尼堂区",
        "lower_name": "",
        "code_full": "CHN082ANT"
    },
    {
        "id": "913",
        "state_id": "68",
        "code": "CAT",
        "name": "",
        "cname": "大堂区",
        "lower_name": "",
        "code_full": "CHN082CAT"
    },
    {
        "id": "914",
        "state_id": "68",
        "code": "CLN",
        "name": "",
        "cname": "路环",
        "lower_name": "",
        "code_full": "CHN082CLN"
    },
    {
        "id": "915",
        "state_id": "68",
        "code": "LAW",
        "name": "",
        "cname": "望德堂区",
        "lower_name": "",
        "code_full": "CHN082LAW"
    },
    {
        "id": "916",
        "state_id": "68",
        "code": "LAZ",
        "name": "",
        "cname": "风顺堂区",
        "lower_name": "",
        "code_full": "CHN082LAZ"
    },
    {
        "id": "917",
        "state_id": "68",
        "code": "OLF",
        "name": "",
        "cname": "花地玛堂区",
        "lower_name": "",
        "code_full": "CHN082OLF"
    },
    {
        "id": "918",
        "state_id": "68",
        "code": "TPA",
        "name": "",
        "cname": "氹仔",
        "lower_name": "",
        "code_full": "CHN082TPA"
    }
]