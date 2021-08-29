var researchData = {
    sections:[
	    {
            title: "AI-based Blockchain Data Analysis",
            url:"../news/shanzhu.html",
            contents:[
                "Benefited from the anonymity and great value of the blockchain, digital currency and the decentralized finance (DeFi) built on it has also become a trend. However, the encryption and anonymity of virtual currencies also provide many illegal sellers with technical advantages, such as encrypted crimes, ransomware, money laundering, and so on. Therefore, based on the openness and transparency of transaction records on the chain, we aim to use artificial intelligence, especially the deep learning methods, to mine more information, and to help government agencies as well as the enterprises analyze, understand and supervise the transactions."
                +"<p><a class=\"tle-section__cta\" href=\"../news/shanzhu.html\">Learn more\n</a></p>" ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/research/shanzhu.jpg",
                desc: ""
            }
        },
        {
            title: "Fingerprint Enhancement Technology",
            url:"../news/chenwei.html",
            contents:[
            "Pure number based random verification codes are widely used in mobile payments, for example, large payment platforms such as Alipay and PayPal all use random verification codes to verify user identity. However, as the main receiver of pure digital verification codes, SIM cards are easy to be copied. In addition, due to the existence of pseudo signal stations, pure digital verification codes are easy to be hijacked or stolen. Once the thief obtains the random verification code, he can easily crack the identity verification barrier of the payment platform and conduct illegal operations, which brings great risks to mobile payment. While, due to the characteristics of the pure digital verification code, it is difficult for us to enhance its reliability and security."
            +"<p><a class=\"tle-section__cta\" href=\"../news/chenwei.html\">Learn more\n</a></p>" 
            ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/research/FFRV.png",
                desc: ""
            }
        },
        {
            title: "Fraud Detection on Blockchain Address",
            url:"../news/talooria.html",
            contents:[
            "Recently, blockchain becomes a popular cryptocurrency scheme, with a digital decentralized ledger in which all transactions are recorded chronologically and publicly. One of blockchain’s primary advantages is making reliable transactions among a group of untrusted participants, so it makes anomaly detection extremely important to preserve its essence and effectiveness. "
            +"<p><a class=\"tle-section__cta\" href=\"../news/talooria.html\">Learn more\n</a></p>" 
            ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/research/talooria.jpg",
                desc: ""
            }
        },
        {
            title: "Blockchain Layer 2 Scaling Solutions",
            url:"../news/shuangw.html",
            contents:[
            "Blockchain layer 2 scaling solutions are aiming to increase the throughput of blockchain and decrease the transaction fee without changing the underlying blockchain structure. The current layer 2 solution such as zk-Rollup, Plasma, Nocust … they share a same idea that a operator over blockchain is introduced to the system, the operator handle users’ transactions and does off-line computations.  These systems are focus on moving vast of the data and computation offline so the blockchain will handle less data, while most of them do not introduce privacy aspect to their system yet. In these system, users’ balance and transaction values are all transparent, which is not desirable for privacy. Privacy and scalability, however, are hard to achieve at the same time. Since adding privacy and confidentiality for a blockchain inevitably adds more computation and data to the blockchain, reducing the transaction throughput and increasing the transaction fees, thus downgrading the scalability of the system. There is always a trade-off between these two aspects."
            +"<p><a class=\"tle-section__cta\" href=\"../news/shuangw.html\">Learn more\n</a></p>" //"<a class=\"tle-section__cta\" href=\"centers-labs-programs/index.html\">xxx\n" +
            //"                                &amp; xxx</a>"
            ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/research/gra.jpg",
                desc: ""
            }
        },
        {
            title: "User-friendly Blockchain Address Technology",
            url:"../news/leon.html",
            contents:[
            "Currently, the development of blockchain changes with each passing day, there appear many valuable applications. Focusing on the blockchain address, it is in the form of irregular hexadecimal encoding. Which brings the problem: the address is difficult to remember, easy confusion, and the ease of use is poor! Moreover, it is impossible to provide personalized customization for individuals and companies, for example: use the name, email address, domain name, or other differentiated identifier as blockchain address."
            +"<p><a class=\"tle-section__cta\" href=\"../news/leon.html\">Learn more\n</a></p>" 
            ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/research/leon.png",
                desc: ""
            }
        },
        {
            title: "Hardware optimization for zero-knowledge proof",
            url:"../news/zkp-hardware.html",
            contents:[
            "Blockchain is a distributed ledger that is append-only, immutable and public, and it uses a consensus protocol to make every node in the network agree on the same record. While in the traditional blockchain system, such as Bitcoin, Ethereum, all the transactions are public, users’ balances and transaction flows are all transparent, which is not desirable for privacy.  Zero-knowledge proof, which is a cryptographic proof system, is widely used for solving these problems. It can hide the secrets that the prover holds while still give proof that the secret satisfies some properties. For example, in Zerocash, a zero-knowledge proof is used to show that a user has a valid coin while other people cannot tell which valid coin this user has. Thus, by using zero-knowledge proof, a user can spend a coin without telling which coin it is; other parties can only tell the coin is from a large collection of valid coins. Apart from the privacy issues on blockchain systems, zero-knowledge can also be used for verified computations. Users can send fewer data and have less computation on-chain to save the cost of the transaction fee, while the computation can still be verified. For example, in ZK-Rollup systems, the zero-knowledge proof is used to make sure that all the off-chain transactions are computed correctly； namely, a prover generates a proof for the off-line transactions and sends it to the blockchain. The blockchain only needs to verify the proof, and it does not need to verify the transaction one by one, thus saving vast computations."
            +"<p><a class=\"tle-section__cta\" href=\"../news/zkp-hardware.html\">Learn more\n</a></p>" 
            ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/research/Drawing17.png",
                desc: ""
            }
        },
        {
            title: "SGX/TEE Based Bitcoin Wallet",
            url:"../news/atai.html",
            contents:[
            "In the Bitcoin world, the only proof that a user owns bitcoin is the private key stored in the Bitcoin wallet.  If the private key is obtained by attackers, the user will have high risk of losing his/her Bitcoin. As the result, the security of this private key is essential for keeping the user's funding secure.  Currently, to ensure the security of Bitcoin wallet, the private key is usually encrypted and stored in the PC or in the server. Although this approach can provide protection when the key is not in use, the key will be less secure when it is in use. Because when using the key, it will be decrypted and stored in memory. If the Operating System is compromised, the attacker can read the private key in plaintext through reading the memory, and the key will be leaked to the attacker."
            +"<p><a class=\"tle-section__cta\" href=\"../news/atai.html\">Learn more\n</a></p>" 
            ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/research/atai.png",
                desc: ""
            }
        },
        /*
        {
            title: "MEV+SGX",
            url:"../news/xiao.html",
            contents:[
            "Blockchain smart contracts have contributed to the creation of a fair and transparent transaction ecosystem. But unfortunately, with the increasing popularity of smart contracts, people have also discovered some new loopholes, and value may be lost without the user's knowledge. One example is miner extractable value (MEV)-a blockchain miner can dynamically reorder transactions (including or excluding transactions within a block) to gain profits at the expense of users. . Simply put, miners can determine the order in which transactions are processed on the blockchain and use this ability for their own benefit."
            +"<p><a class=\"tle-section__cta\" href=\"../news/xiao.html\">Learn more\n</a></p>" 
            ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/research/xiao.png",
                desc: ""
            }
        },
        {
            title: "Private-equity+SGX",
            url:"../news/xiao1.html",
            contents:[
            "With the widespread application of blockchain technology, the digital currency market has a market with high volatility, high risks and high returns, which also makes quantitative trading a huge room for development. But one thing to point out is that no strategy can guarantee absolute profit. For example, brick trading and market making need to bear the risk of price changes, and strategic trading may fail under market changes, causing investors to suffer huge losses. In the private equity market, the key technology for profitability is the strategy of quantitative trading, which has the problem of privacy of strategy."
            +"<p><a class=\"tle-section__cta\" href=\"../news/xiao1.html\">Learn more\n</a></p>" 
            ],
            mediaFile: {
                type: "image",
                linkUrl: "../files/images/research/xiao1.png",
                desc: ""
            }
        }
		*/
    ]
};
/*var researchData = {
    sections:[
        {
            title: "Trusted execution environment + Blockchain",
            contents: [
                "XXXX"
            ],
            items:[
                {
                    itemName:"Item 1",
                    url:""
                },
                {
                    itemName:"Item 2",
                    url:""
                },
                {
                    itemName:"Item 3",
                    url:""
                },
                {
                    itemName:"Item 4",
                    url:""
                },
                {
                    itemName:"Item 5",
                    url:""
                },
            ],
            mediaFile: {
                type: "vedio",
                linkUrl: "../../zh/files/images/hpb.mp4",
                desc: "Your browser does not support the video tag."
            }
        },
		{
            title: "Artificial Intelligence + Blockchain",
            contents:[
            "xxxxx"
            //"<a class=\"tle-section__cta\" href=\"centers-labs-programs/index.html\">xxx\n" +
            //"                                &amp; xxx</a>"
            ],
            items:[
                {
                    itemName:"Finger Feature-based Random Verification Code Enhancement Technology",
                    url:"../news/chenwei.html"
                },
                {
                    itemName:"Fraud Detection on Blockchain: A Deep Learning-based Representation Learning approach",
                    url:"../news/talooria.html"
                },
                {
                    itemName:"Blockchain Layer 2 Scaling Solutions",
                    url:"../news/shuangw.html"
                },
                {
                    itemName:"Artificial Intelligence(Deep Learning) Based Transaction Data Analysis of the Blockchain",
                    url:"../news/shanzhu.html"
                },
                {
                    itemName:"Item 5",
                    url:""
                },
            ],
            mediaFile: {
            type: "image",
                linkUrl: "../files/images/202003/random.png",
                desc: "xxxxx"
            }
        },
        {
            title: "Trusted Execution Environment",
            contents:[
            "xxxxx\n" +
            "xxx\n" +
            "xx",
            "<a class=\"tle-section__cta\" href=\"centers-labs-programs/index.html\">xxx\n" +
            "                                &amp; xx</a>"
            ],
            items:[
                {
                    itemName:"Item 1",
                    url:""
                },
                {
                    itemName:"Item 2",
                    url:""
                },
                {
                    itemName:"Item 3",
                    url:""
                },
                {
                    itemName:"Item 4",
                    url:""
                },
                {
                    itemName:"Item 5",
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
