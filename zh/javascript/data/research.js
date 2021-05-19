var researchData = {
    sections:[
		{
            title: "基于人工智能的区块链交易数据分析",
            url:"../news/shanzhu.html",
            contents:[
                "区块链的价值毋庸置疑，其匿名性也成为了数字货币以及建立在其之上的分布式金融的基础。但虚拟货币的加密性、匿名性也同样为很多非法卖家提供了技术上的便宜，比如加密犯罪、勒索软件、洗钱等等。因此，我们旨在利用人工智能，特别是深度学习方法，利用链上交易数据的公开透明性，挖掘更多的信息，帮助政府机构和私营企业分析，理解交易数据并进行监督。"
                +"<br><br>"
                +"<p><a class=\"tle-section__cta\" href=\"../news/shanzhu.html\">了解更多\n</a></p>" 
            ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/research/shanzhu.jpg",
                desc: ""
            }
        },
		{
            title: "基于指纹特征的随机验证码增强技术",
            url:"../news/chenwei.html",
            contents:[
            "纯数字的随机验证码在当今的移动支付中有着广泛的应用，如支付宝，贝宝等大型支付平台都使用随机验证码作为用户身份的验证手段。但是作为纯数字验证码的主要接收端，手机卡却容易被复制，另外由于伪基站的存在，基于短信平台的纯数字验证码容易被劫持和盗用。盗用者在获得随机验证码之后，就能轻易的破解支付平台的身份验证屏障，进而进行不法操作，这给移动支付带来很大的风险。而由于纯数字验证码本身的特性，我们很难在增强其可靠性和安全性。"
            +"<br><br>"
            +"因此，为了解决此问题，我们提出将人体指纹特征和随机验证码动态结合起来以保护随机验证码的安全性。指纹特征具有安全性，唯一性和多样性等多种具有安全属性的特点。基于指纹特征的随机验证码增强技术创造性的将指纹特征与随机验证码动态的结合起来。赋予了原始的纯数字随机验证码指纹特征和动态映射关系的保护。相比于纯数字验证码，所提出的密级增强技术使得验证系统破解的难度大大增加。对大额资金场景，此技术可以极大的提高资金支付的安全性。"
			+"<p><a class=\"tle-section__cta\" href=\"../news/chenwei.html\">了解更多\n</a></p>" 
            ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/research/FFRV.png",
                desc: ""
            }
			
        },
        {
            title: "基于深度学习的区块链地址欺诈检测",
            url:"../news/talooria.html",
            contents:[
            "近年来，区块链成为一种流行的加密货币系统，使用去中心化的数字账本，且其所有交易公开并以时序储存。 区块链的主要优势之一是在一群不受信任的参与者之间进行可靠的交易，因此不论是欺诈账号或者欺诈交易的检测对于保持其去中心化的本质和有效性极为重要。"
            +"<br><br>"
            +"众所周知，机器/深度学习在学习数据特征，构建和训练用于分类或回归用例的模型方面是一个非常强大的工具。 因此，我们研究应用机器/深度学习算法来更好的学习区块链的数据特征，进行自动且准确的欺诈检测，最终建立一个更加安全的区块链系统。  "
            +"<p><a class=\"tle-section__cta\" href=\"../news/talooria.html\">了解更多\n</a></p>" 
            ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/research/talooria.jpg",
                desc: ""
            }
        },
        {
            title: "具有隐私特性的区块链 Layer 2 方案",
            url:"../news/shuangw.html",
            contents:[
                "区块链 layer 2 扩展方案能增加区块链吞吐量和降低交易费用， 但不会改变区块链底层设计以及共识算法。目前市场上存在的layer 2 设计方案，例如，zk-Rollup，Plasma, Nocust 他们都引入了一个交易托管来线下处理用户的交易。 这些方案致力于将大量的计算从线上移到线下，但大多数方案没有考虑到用户的隐私性。 用户的余额和交易数据在这些系统中都是透明的，这一点很不利于用户的隐私。 然而，想要同时具有扩展性和隐私性很难，因为增加系统的隐私形势比增加更多的数据和计算量，从而降低区块链的吞吐量， 增加交易的费用。扩展性和隐私性，是硬币的两面，需要适当的取舍。"
                +"<br><br>"
                +"我们的项目致力于在隐私性和拓展性的取舍中找到一个平衡， 从而为当前市场上的拓展方案增加隐私性，又不会完全降低它们的应用价值。我们像其它拓展方案一样在系统里引入了一个交易托管，交易托管将交易打包计算并给出计算的零证明， 将压缩后的交易信息和证明发到区块量上。在我们当前的设计中，交易托管是半可信的：用户不需要相信交易托管会正确的计算交易，但用户需要相信交易托管会将用户的交易信息保密。"
                +"<p><a class=\"tle-section__cta\" href=\"../news/shuangw.html\">了解更多\n</a></p>" 
            ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/research/gra.jpg",
                desc: ""
            }
        },
        {
            title: "区块链地址易用技术",
            url:"../news/leon.html",
            contents:[
                "现阶段，区块链技术的发展日新月异，出现了许多有价值的落地应用。聚焦到区块链的用户地址，其表现都为无规则的16进制编码形式，存在的问题是：地址难记、易混，易用性较差！而且不能为个人、企业提供个性化定制，例如：使用个人、企业的名称、邮箱、域名等差异化标识，作为地址提供区块链服务。"
                +"<br><br>"
                +"本项目基于身份密码的再创新设计，保证密码学安全的前提上，提出了“系统门限密钥生成协议”、“易用地址生成协议”、“系统门限密钥更新协议”等，可以为个人、企业提供区块链地址个性化、差异化定制。同时在自研“区块链适配协议”的基础上，本项目可以兼容现有95%以上的区块链体系，即可为BTC、ETH等提供易用地址。"
                +"<p><a class=\"tle-section__cta\" href=\"../news/leon.html\">了解更多\n</a></p>" 
            ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/research/leon.png",
                desc: ""
            }
        },
        {
            title: "零知识证明硬件加速",
            url:"../news/zkp-hardware.html",
            contents:[
                "区块链是一种分布式账本，仅可追加，不可变更，而且是公共的，它使用共识算法使网络中的每个节点都在记录上达成一致。在传统的区块链系统（例如比特币，以太坊）中，所有交易都是公开的，用户的余额和交易流都是透明的，这损害了用户的隐私。而零知识证明就是一种被广泛用于解决这些问题的密码学手段。它可以隐藏证明者持有的秘密，同时还可以证明该秘密满足某些属性。例如，在Zerocash中，零知识证明用于显示用户拥有一个有效币，而其他人无法分辨该用户拥有哪一个有效币，因此，通过使用零知识证明，用户可以在不暴露自己交易哪一个币的情况下花费掉该币，而其他人只能确信该硬币来自一个有效币池， 而并不能判断用户具体花掉了那一个币。除了区块链系统的隐私问题外，零知识还可以用于可验证计算。用户可以发送更少的数据并进行更少的链上计算，以节省交易费用，同时仍可以对线下计算进行验证。例如，在zk-Rollup系统中，使用零知识证明来确保所有链下交易正确性，证明者为链下交易生成零知识证明并将其发送到区块链，区块链只需要验证证明，就不需要一一验证链下交易，从而节省了大量的计算量。"
                +"<br><br>"
                //+"本项目基于身份密码的再创新设计，保证密码学安全的前提上，提出了“系统门限密钥生成协议”、“易用地址生成协议”、“系统门限密钥更新协议”等，可以为个人、企业提供区块链地址个性化、差异化定制。同时在自研“区块链适配协议”的基础上，本项目可以兼容现有95%以上的区块链体系，即可为BTC、ETH等提供易用地址。"
                +"<p><a class=\"tle-section__cta\" href=\"../news/zkp-hardware.html\">了解更多\n</a></p>" 
            ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/research/Drawing17.png",
                desc: ""
            }
        }
    ]
};
/*var researchData = {
    sections:[
        {
            title: "可信执行环境 + 区块链",
            contents:[
            "xxxxx"
            ],
            items:[
                {
                    itemName:"项目 1",
                    url:""
                },
                {
                    itemName:"项目 2",
                    url:""
                },
                {
                    itemName:"项目 3",
                    url:""
                },
                {
                    itemName:"项目 4",
                    url:""
                },
                {
                    itemName:"项目 5",
                    url:""
                }
            ],
            mediaFile: {
                type: "vedio",
                linkUrl: "../files/images/hpb.mp4",
                desc: "Your browser does not support the video tag."
            }
        },
        {
            title: "人工智能 + 区块链",
            contents:[
            "xxxxx"
            //"<a class=\"tle-section__cta\" href=\"centers-labs-programs/index.html\">xxx\n" +
            //"                                &amp; xxx</a>"
            ],
            items:[
                {
                    itemName:"基于指纹特征的随机验证码增强技术",
                    url:"../news/chenwei.html"
                },
                {
                    itemName:"区块链中的欺诈检测：基于深度学习的特征学习方法",
                    url:"../news/talooria.html"
                },
                {
                    itemName:"区块链 Layer 2 扩展方案",
                    url:"../news/shuangw.html"
                },
                {
                    itemName:"基于人工智能(深度学习)的区块链交易数据分析",
                    url:"../news/shanzhu.html"
                },
                {
                    itemName:"项目 5",
                    url:""
                }
            ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/202003/random.png",
                desc: "xxxxx"
            }
        },
		{
            title: "可信执行环境",
            contents:[
                "xxxxx\n"+
                "xxx\n" +
                "xx",
                "<a class=\"tle-section__cta\" href=\"centers-labs-programs/index.html\">xxx\n" +
                "                                &amp; xx</a>"
                ],
            items:[
                {
                    itemName:"项目 1",
                    url:""
                },
                {
                    itemName:"项目 2",
                    url:""
                },
                {
                    itemName:"项目 3",
                    url:""
                },
                {
                    itemName:"项目 4",
                    url:""
                },
                {
                    itemName:"项目 5",
                    url:""
                },
            ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/202003/logo8.png",
                desc: "XXXX"
            }
        }
    ]
};
*/
