import _ from 'lodash'

const NAME = 0
const NORMAL_DESCRIPTION = 1
const REVERSE_DESCRIPTION = 2

const cardinfo = {
  cups01: [
    "Ace of Cups",
    "Ace of cups is the card for new love, compassion, joy and creativity. If this card shows up with Ace of Pentacles it often means moving in together in a relationship.", 
    "Ace of Cups reversed indicates blocked creativity and blocked emotions. Access to the subconscious mind and psychic ability is also blocked."
  ],
  cups02: [
    "Two of Cups",
    "Two of cups is the card for being in love and being in a close relationship, There is real intimacy in the relationship, and you know and understand each other on a deep level.", 
    "Two of Cups reversed indicates being afraid of love and relationship. The seeker might be dreaming of love, but when it comes down to actually having one, the fear of rejection and abandonment gets in the way."
  ],
  cups03: [
    "Three of Cups",
    "Three of cups is the card for celebration, going out with friends, having a good time and being part of a community. This card often shows up when someone is getting engaged or married.", 
    "Three of Cups reversed can indicate celebration gone wrong, negative talk, jealousy and competition."
  ],
  cups04: [
    "Four of Cups",
    "Four of cups is the card for contemplation. It often shows up when the querent is dissatisfied about something and doesn’t fully notice what they are being offered.", 
    "Four of Cups reversed indicates the seeker has become unseated and is avoiding something and/or someone important."
  ],
  cups05: [
    "Five of Cups",
    "Five of cups is the card for regrets and disappointment, especially in love. A relationship might not have turned out the way you would have liked it to.", 
    "Five of Cups reversed indicates disappointment in love and emotional matters. The two cups that still upright spill out when this card shows up reversed which denotes the seeker might be emotionally totally drained, usually by relationships."
  ],
  cups06: [
    "Six of Cups",
    "Six of cups is the card for sensuality and pleasure, memories, innocence, nostalgia and childhood. Sometimes this card shows up when someone from the past is on their way back into your life again.", 
    "Six of Cups reversed indicates a difficult childhood and haunting, even disturbing childhood memories. Memories of all kinds can be an issue when this card shows up reversed, even memory loss."
  ],
  cups07: [
    "Seven of Cups",
    "Seven of cups is the card for day dreaming, illusions, wishful thinking, and fantasies. This card usually shows up when you have plenty of choices and need a vision to make them a reality.", 
    "Seven of Cups reversed indicates the seeker’s imagination is blocked. Daydreaming has turned into thoughts of fears and anxieties."
  ],
  cups08: [
    "Eight of Cups",
    "Eight of cups is the card for turning your back at something to go and follow your dream. The day-dreaming that happened in Seven of cups has materialized in a vision that the querent is going to pursuit.", 
    "Eight of Cups reversed indicates the seeker has given up their dream to surrender to a reality that is uncomfortable, loveless and miserable. The seeker might have surrendered their life to please someone else, sell their business to work at a job they dislike."
  ],
  cups09: [
    "Nine of Cups",
    "Nine of cups is the card for getting what you want and having a wish come true. This card speaks of abundance and satisfaction, and also about being proud of what you have achieved.", 
    "Nine of Cups reversed indicates that the seeker is not going to get what they wish for. Family and friendship might be falling apart. There are disintegrating and separation, often due to lifestyle choices."
  ],
  cups10: [
    "Ten of Cups",
    "Ten of cups is the card for total spiritual bliss experienced in your relationship, home and family life. This card is about being in alignment with your true nature and everything in your life is in harmony with your higher self and purpose on this planet.", 
    "Ten of Cups reversed indicates disruption in the harmony, something or someone is making it hard to maintain the love. The seeker might be pretending everything is still wonderful in the hope that it will continue forever."
  ],
  cupsPage: [
    "Page of Cups",
    "Page of cups denotes a young person with gentle and sensitive nature. This is someone who lives in wonder and can be quite naive at times.", 
    "Page of Cups reversed indicates, someone who is hard to motivate, they are feeling sad and bring down others with their gloomy nature. They might promise a lot, but deliver little if any."
  ],
  cupsKnight: [
    "Knight of Cups",
    "Knight of cups denotes a person on a quest to declare his love. This is your knight in shining armor. He is a singer, poet, and writer. He paints and creates wherever he goes. He is artistic and incredibly lovable.", 
    "Knight of Cups reversed indicates a person who is walking away from a relationship and/or a creative venture. The emotional state of the seeker might be far from romantic, instead it is more likely to be cynical and use their insights and intuition to make others hurt as much as they do."
  ],
  cupsQueen: [
    "Queen of Cups",
    "Queen of cups denotes a woman who is highly intuitive and sensitive. She is in touch with her emotions, her subconscious and the universe. She is compassionate and cares deeply about her life and those in it.", 
    "Queen of Cups reversed indicates someone with blocked psychic abilities and an emotionally unstable nature. This person might be very numb or even worse, has very dark feelings."
  ],
  cupsKing: [
    "King of Cups",
    "King of cups denotes a warm, honest and generous man who is kind and fair. This is someone who is in control over his own emotions.", 
    "King of Cups reversed indicates someone who is blocked expressing their feelings, is unable to motivate and be motivated. This is someone with a selfish streak, often born from fear of rejection."
  ],
  pentacles01: [
    "Ace of Pentacles",
    "Ace of Pentacles symbolises a new beginning in your financial situation and an opportunity to deepen your security.", 
    "Ace of Pentacles reversed indicates financial losses and decrease in security. There might have been anticipation in regards to increased income and wealth which are not becoming a reality."
  ],
  pentacles02: [
    "Two of Pentacles",
    "Two of Pentacles symbolises juggling with finances. You might have income from more than one source. Two of Pentacles also indicates investing money into different projects, or bartering.", 
    "Two of Pentacles reversed indicates the seeker is unable to juggle the demands of life. He loses sight of his finances and practical aspects of life."
  ],
  pentacles03: [
    "Three of Pentacles",
    "Three of Pentacles symbolises your work, especially where team work or listening to clients/customers are concerned. This is a positive card which indicates job satisfaction and taking pride in your work, but you must put in the effort to see results.", 
    "Three of Pentacles reversed indicates lack of quality in work performance."
  ],
  pentacles04: [
    "Four of Pentacles",
    "Four of Pentacles symbolises the need for security and recognition in your life, to have control over your possession and to keep abundance and money increasing. This card shows stubbornness in the situation or in the querent.", 
    "Four of Pentacles reversed indicates lack of something solid and dependable. There is nothing really reliable to hold on to."
  ],
  pentacles05: [
    "Five of Pentacles",
    "Five of Pentacles symbolises financial loss or hardship. It can also mean you are in a place where you feel there is no security and your health might be suffering. ", 
    "Five of Pentacles reversed indicates disorder and chaos. Not only is there no money, but there is also a lack of spirituality and friendship."
  ],
  pentacles06: [
    "Six of Pentacles",
    "Six of Pentacles symbolises generosity towards those who has less than you. It can also mean receiving generosity from others.", 
    "Six of Pentacles reversed indicates a lack of generosity. There might be greediness rather than sharing of wealth."
  ],
  pentacles07: [
    "Seven of Pentacles",
    "Seven of Pentacles symbolises a vision that will pay off in the future. You are planting the seeds so that you will be able to harvest a more secure and abundant future for yourself.", 
    "Seven of Pentacles reversed indicates impatience and moving forward before the time is ripe. This card reversed can also mean unemployment."
  ],
  pentacles08: [
    "Eight of Pentacles",
    "Eight of Pentacles symbolise craftsmanship in regards to work. It can also mean doing an apprenticeship and/or learning a new skill.", 
    "Eight of Pentacles reversed indicates tedious work with little gains. The seeker might be overdue for a promotion they deserve but are not getting."
  ],
  pentacles09: [
    "Nine of Pentacles",
    "Nine of Pentacles symbolises luxury, financial security and being on a lavish holiday.", 
    "Nine of Pentacles reversed indicates loneliness and unhappiness. The home is neither secure nor very comfortable. The seeker might feel like a prisoner in their own home."
  ],
  pentacles10: [
    "Ten of Pentacles",
    "Ten of Pentacles symbolises the type of wealth you get when you inherit something, being it your own retirement money, hand me downs, or possessions from someone who has passes away. ", 
    "Ten of Pentacles reversed indicates fortunes or legacies wasted or lost, or on a lesser note, delayed. There might be restrictive ties that become a burden."
  ],
  pentaclesPage: [
    "Page of Pentacles",
    "Page of Pentacles indicates reinventing yourself in some way. It often denotes an opportunity to start something new, whether it is a creative venture, studying, business or a new job offer. Page of pentacles is not yet an expert in the field of choice, but has a clear goal and dream to achieve.", 
    "Page of Pentacles reversed indicates issues with learning and problems with studies. It denotes wasted talents, unrealistic ambitions and/or intellectual snobbery."
  ],
  pentaclesKnight: [
    "Knight of Pentacles",
    "Knight of Pentacles denotes being of service and doing the actual work (in contrast to Page of Pentacles who enjoys daydreaming about the idea rather than actual living it). Knight of Pentacles is comfortable with routine and is efficient and conservative.", 
    "Knight of Pentacles reversed indicates sloppiness, bitterness and envy. This is someone who is sucking up to those who can help them climb the ladder to wealth and success, but will do nothing for those who haven’t got money or connections."
  ],
  pentaclesQueen: [
    "Queen of Pentacles",
    "Queen of Pentacles is someone with a down to earth and practical approach to life and situations. It is important to have work/home balance, in fact if you could work from home you probably would. This card takes enjoyment in material pleasures and success.", 
    "Queen of Pentacles reversed indicates poor taste and lack of sensitivity to other people’s needs."
  ],
  pentaclesKing: [
    "King of Pentacles",
    "King of Pentacles symbolises a successful business man or a person in a manager position. This is a stable and authoritative character, who is hard-working and dependable.", 
    "King of Pentacles reversed indicates someone who is too conservative and who won’t take any chances. He is reluctant in making any changes in the way things are. He is likely to be a miser and a hoarder."
  ],
  swords01: [
    "Ace of Swords",
    "Ace of swords is the card for a new thought and belief system. It is the potential of mental energy used to create clarity and often also justice.", 
    "Ace of Swords reversed indicates that the stirring of the aces is blocked. Ideas and communication are blocked."
  ],
  swords02: [
    "Two of Swords",
    "Two of Swords is the card for compromise, passiveness, keeping the peace (as in not rocking the boat), stalemate, indecision and avoiding conflict.", 
    "Two of Swords reversed indicates conflicts are unavoidable and compromises are not reached. The querent might be exhibiting too much personality and creates drama just to have something to do."
  ],
  swords03: [
    "Three of Swords",
    "Three of Swords denotes heartbreak. sorrow, pain and separation. Sometimes the separation is only temporary, other times it is final.", 
    "Three of Swords reversed indicates there is blocked grief stored in the person’s heart. The querent might be afraid of grieving and is internalising. "
  ],
  swords04: [
    "Four of Swords",
    "Four of Swords is about rest and rejuvenation, getting enough sleep and taking time out to meditate.", 
    "Four of Swords reversed denotes restlessness and burn outs. Thoughts and beliefs interrupt the person from recuperating."
  ],
  swords05: [
    "Five of Swords",
    "Five of Swords is the card for defeat and betrayal, conflict and unhealthy competition. Words will be hurtful, lies will be told and your weaknesses used against you.", 
    "Five of Swords reversed denotes conflict and arguments remaining unresolved, often dragging on indefinitely."
  ],
  swords06: [
    "Six of Swords",
    "Six of Swords is about crossing the troubled sea and entering into calmer water. This is the card for finding solutions and implementing them, often bringing other people with you in the process, ie, your family, friends, and colleagues.", 
    "Six of Swords reversed indicates travel plans being held up or delayed. It also means difficulty in problem solving, especially mental tasks like maths and science."
  ],
  swords07: [
    "Seven of Swords",
    "Seven of Swords denotes someone is moving forward in less than honourable ways. There is often dishonesty connected with this card, and trying to get away with something or trying to get out of something by lying.", 
    "Seven of Swords reversed indicates clumsiness and forgetfulness, especially when it comes to recollecting what lies have been told and to whom."
  ],
  swords08: [
    "Eight of Swords",
    "Eight of Swords is the card of being stuck and unable to move on due to confusion and not knowing what is going on. Often people draw this card when their own gut feeling is being overruled by other people.", 
    "Eight of Swords reversed indicates a person who is unable to move forward due to self-doubts, fear, and isolation. The person knows the way forward, yet chooses to stay put, escaping in their own heads."
  ],
  swords09: [
    "Nine of Swords",
    "Nine of Swords denotes worry and anxiety, sleeplessness and being overwhelmed by negative emotions such as guilt and regrets.", 
    "Nine of Swords reversed indicates that issues and problems have been ignored rather than dealt with and when they resurface the querent might not know how to deal with them."
  ],
  swords10: [
    "Ten of Swords",
    "Ten of Swords is the card for endings and loss, backstabbing and lack of support. Sometimes this card denotes hitting rock bottom. It has the mentality of ‘when it rains it pours’, and the querent might be feeling there is no end of the suffering.", 
    "Ten of Swords reversed indicates a person who is holding on to pain often inflicted by others. This querent might not be able to let go of what other people have inflicted and is feeling no support. Not just is there no support, there might even be deliberate sabotage."
  ],
  swordsPage: [
    "Page of Swords",
    "Page of Swords denotes a young and mentally very active and clever person. This is someone who can concentrate over long periods of time and who learns new skills easily, especially mental skills.", 
    "Page of Swords reversed indicates a person who lies, gossips and being a know it all. This is someone who says inappropriate things and wastes his time in chat rooms. They don’t keep secrets or promises."
  ],
  swordsKnight: [
    "Knight of Swords",
    "Knight of Swords denotes a communicative, strong-minded and at times an opinionated person who is very action oriented and thrive on change. This is someone with a competitive streak and doesn’t like to let go of his/hers position in an argument.", 
    "Knight of Swords reversed indicates a person with a speech impediment or learning disabilities. This is someone who is intelligent but for some reason is unable to express themselves."
  ],
  swordsQueen: [
    "Queen of Swords",
    "Queen of Swords denotes a woman who is cold, professional and smart. She is witty and funny in an intelligent way (no toilet humour). She often represents single women who have been hurt in love, and is bitter and hurt, but a master at covering it up.", 
    "Queen of Swords reversed indicates a woman who has problems with problem solving and communication. This is the type of person who will make accusations without checking the facts."
  ],
  swordsKing: [
    "King of Swords",
    "King of Swords denotes a professional man who is at the top of his game. This is someone who is an expert in his field and would have had to study to acquire this knowledge.", 
    "King of Swords reversed indicates a man who will manipulate facts to get his own ways. There is a block when it comes to integrity and objectivity. This is someone opinionated and biased."
  ],
  wands01: [
    "Ace of Wands",
    "Ace of wands speaks of new beginnings. Be bold and start something new. Follow your inspiration. Ace of Wands speaks of births of all kinds; the birth of enterprises and job opportunities, and also the birth of a baby.", 
    "Ace of Wands reversed indicates that new beginnings are blocked. Ideas and enterprises do not take hold and there is little if any growth."
  ],
  wands02: [
    "Two of Wands",
    "Two of Wands is about manifesting using the will and strength of your mind. You might have to weigh up your options before deciding on the one that is best for you.", 
    "Two of Wands reversed indicates difficulties in making a decision, possibly due to the fear of making the wrong choice."
  ],
  wands03: [
    "Three of Wands",
    "Three of Wands is the card for writers, and writing jobs and freelancers. It is also the card that follows the manifesting the querent did in Two of Wand, and the querent has now lived a new and exciting opportunity or dream.", 
    "Three of Wands reversed indicates there is a delay in rewards and a delay in a payoff. The seeker might be out of their league, unable to cope with the demands."
  ],
  wands04: [
    "Four of Wands",
    "Four of Wands is the card for harmony and developing on a larger scale, often expanding your living situation, and also being stronger connected to a community.", 
    "Four of Wands reversed indicates the foundation not laid or not ready."
  ],
  wands05: [
    "Five of Wands",
    "Five of Wands is about standing up for what is important to you, even if it means meeting some opposition.", 
    "Five of Wands reversed indicates loss in individuality. There is a struggle to stand out among others equally talented."
  ],
  wands06: [
    "Six of Wands",
    "Six of Wands is the card for popularity, progress, victory and success, self-confidence and getting what you want.", 
    "Six of Wands reversed indicates not getting the rewards that are owed, success delayed of even defeat."
  ],
  wands07: [
    "Seven of Wands",
    "Seven of Wands denotes being defensive and putting up barriers and boundaries. You are protecting your point of view and your position.", 
    "Seven of Wands reversed indicates an inability to hold your ground, especially if it is not popular. There is a lack of defending oneself."
  ],
  wands08: [
    "Eight of Wands",
    "Eight of Wands speaks of swift action and progress. It often shows up when there is a visitor coming, or when the querent is visiting someone.", 
    "Eight of Wands reversed indicates lack of energy and slowness, and things are not moving in the right direction. There might be poor time management and delays."
  ],
  wands09: [
    "Nine of Wands",
    "Nine of Wands is the card for strength, courage, resilience and endurance. Never give up and never surrender.", 
    "Nine of Wands reversed indicates weakness and stubbornness rather than strength and willpower. There is a waste of energy or lack of energy to save something."
  ],
  wands10: [
    "Ten of Wands",
    "Ten of Wands is the card for hard work and taking on more responsibility.", 
    "Ten of Wands reversed indicates fear of responsibilities, and incapability to keep on top of things. The seeker might be unmotivated and ready to walk away from their duties."
  ],
  wandsPage: [
    "Page of Wands",
    "Page of Wands denotes an enthusiastic young person who is eager to explore and gain life experience.", 
    "Ppage of wands reversedage of Wands reversed indicates a bully and a mean-tempered person who likes to show off and is demanding attention."
  ],
  wandsKnight: [
    "Knight of Wands",
    "Knight of Wands denotes a person who is travelling through life at a high-speed, living life in the fast lane. This is someone who will be the life of the party.", 
    "Knight of Wands reversed indicates a bully who wants to win at any costs. This is someone with acting talent who can turn his charm on and off and manipulate to get his way."
  ],
  wandsQueen: [
    "Queen of Wands",
    "Queen of Wands denotes a warm, kind and passionate woman. She is goal oriented and determined. She is also a metaphysic who can use her mind both to create harmony and havoc.", 
    "Queen of Wands reversed indicates intimidation and domination. There is a lack of faith or even worse, faith in black magic and darkness."
  ],
  wandsKing: [
    "King of Wands",
    "King of Wands denotes a married man who is a natural and charismatic leader. He has entrepreneurial skills and loves to run a new and exciting project.", 
    "King of Wands reversed indicates dictatorship. This is someone with a god complex and a bad temper, often very violent."
  ],
  majorFool: [
    "Fool",
    "Fool represents new beginning, having faith in the future, being inexperienced, not knowing what to expect, having beginners luck, improvising, believing that the Universe provides, having no strings attached, being carefree.",
    "Fool reversed indicates new beginnings being blocked, the path is hidden and the querent is having difficulties seeing the world with fresh eyes."
  ],
  majorMagician: [
    "Magician",
    "Magician represents your ability to communicate clearly, to ‘sell’ yourself and to be innovative. The Magician has all the tools and resources available to manifest his desired outcome, so it is a good card to get if you want to create.",
    "Magician reversed indicates empty promises, false possibilities, a con man, misunderstandings and a lack of substance to make possibilities become a reality."
  ],
  majorHighPriestess: [
    "High Priestess",
    "High Priestess represents secrets, mystery, intuition, wisdom, making the impossible become possible, and magic.",
    "High Priestess reversed indicates blocked psychic abilities, and little to no awareness of the subconscious influence on our reality. Secrets are kept, answers are not found and instincts are wrong."
  ],
  majorEmpress: [
    "Empress",
    "Empress represents feminine power, a nurturer and a family oriented person, our mother or a mother figure, abundance, femininity, fertility and the love of the home and family.",
    "Empress reversed indicates neglect and a lack of attention where there should be nurturing. She can represent a mother who gives little affection and hardly any protection to her child. The child can also symbolise a project, a relationship, an enterprise, the home and a business that need attention but are instead being left unattended."
  ], 
  majorEmperor: [
    "Emperor",
    "Emperor represents masculine energy, the ruler, the head of the household, head of a company, organisation and communities. The Emperor is an authority figure that creates a solid foundation to build and create on.",
    "Emperor reversed denotes someone with a childish streak, who is also inconsistent and unpredictable. If this card represents the querent then something is blocking the energy that gives the person authority."
  ], 
  majorHierophant: [
    "Hierophant",
    "Hierophant represents group consciousness, religion, your belief system, ceremony, traditions, kindness, charity, giving guidance in the form of spiritual counselling.",
    "Hierophant reversed denotes prudence, silliness and hypocrisy. There are rules but no knowledge of why these rules are of importance. The ego is without guidance. There is an inflexibility in the system and in the people of the system. It can be an institution who controls information and the leaders make themselves rich while the poor remain poor."
  ],
  majorLovers: [
    "Lovers",
    "Lovers represents love and relationship, soul mates, physical attractions, choices to be made, The Lovers represents doing the things that make us feel whole, being with the people who make us feel whole.",
    "Lovers reversed indicates a breakup between partners, families and friends. Whatever it is, the people who split up are not creating the same magic and chemistry on their own and become less whole. Lovers reversed can also indicate a wrong choice being made."
  ],
  majorChariot: [
    "Chariot",
    "Chariot represents your willpower and determination. It represents victory. The Chariot gives you the green light to charge ahead and take control in your life or an area of your life that needs your attention.",
    "Chariot reversed indicates defeat and cowardice. Instead of charging ahead and taking control of the inner and outer forces, there is the feeling of giving up before you give it a go. ‘What is the use’ is the energy in Chariot reversed."
  ],
  majorStrength: [
    "Strength",
    "Strength represents our courage, passions, strength, self-confidence, patience and compassion. Strength reminds us to follow our passions, to take the time to do the things that make us tick, that makes us strong within ourselves and which builds confidence and self-worth.",
    "Strength reversed denotes a lack of courage, lack of passion,fear, even timidity and impatience. Weak will and lack of backbone are indicated when this card shows up reversed. The lion remains untamed, often due to a fear of standing out due to peer pressure."
  ], 
  majorHermit: [
    "Hermit",
    "Hermit represents spending time alone, being a lone wolf, soul-searching, seeking spiritual guidance, introspection.",
    "Hermit reversed indicates isolation and paranoia. There is no insight rather there is a twisted and vicious side to the person. This also denotes someone who is very lonely and is ‘loosing’ their grip on reality due to the amount of time they spend by themselves."
  ],
  majorWheelOfFortune: [
    "Wheel of Fortune",
    "Wheel of Fortune is the Big destiny card in the tarot deck. What is meant to be is meant to be. In the tarot when the Wheel of Fortune turns up, it means that the events and people in your life are in your life due to it being pre-decided by destiny.",
    "Wheel of fortune reversed indicates bad luck and misfortune. Instead of hitting the top of the wheel and moving forward, you are hitting the bottom, often stagnating. The wheel might not be turning at all and much-needed change is eluding you."
  ],
  majorJustice: [
    "Justice",
    "Justice represents all kinds of legal matters, the spiritual laws of truth and cause and effect. When the Justice card shows up it reminds us to be lawful and fair to achieve the best result.",
    "Justice reversed denotes injustice, unfairness, imbalance. You are either getting too much or too little of what you need. Something might be preventing the energy of fairness and balance from succeeding."
  ],
  majorHangedMan: [
    "Hanged Man",
    "Hanged Man represents being temporarily suspended. Life is on hold, but it serves a purpose.",
    "Hanged Man reversed indicates stubbornness and selfishness, refusing to give up your perspective to gain new insight. This card reversed denotes someone who is feeling apart from the world and unable to communicate their point of view and their perspective to others."
  ],
  majorDeath: [
    "Death",
    "Death represents transformation, endings and new beginnings. When the Death card shows up it tells you that things will not be the same again. A transformation is taking place, you are growing and changing with the circumstances you find yourself in.",
    "Death reversed indicates that something that should have come to a blessed end for some reason persists. ‘Not death’ is not a desired thing as it is not living either. For some reason, the person is holding on. Blocked grief is often a factor."
  ],
  majorTemperance: [
    "Temperance",
    "Temperance represents balanced interaction between the elements to create something new and fresh. Temperance includes all the elements in such a way that it brings out the best of each substance. When the Temperance card shows up in your life there is great balance and strength between the different areas and people in your life that are working together.",
    "Temperance reversed indicates that the balance between two opposing elements to create a third goes terribly wrong. This card often shows up when two different people who could bring out the best in each other instead bring out the worst."
  ],
  majorDevil: [
    "Devil",
    "Devil represents the primal source of behaviour that shows itself in the form of our desires and earthly needs. It also represents our fears that causes addiction and compulsive behaviour.",
    "Devil reversed indicate temptations resisted, stricter moral kept and they escape the chains from the devil. The querent might be too restricted in their life, and they have little or no desires that drive them."
  ],
  majorTower: [
    "Tower",
    "Tower represent disaster, emotional ‘meltdowns’ and/or tantrums, anger issues, upheaval, sudden change that is caused by disruption and revelations that rock the foundation of the person, household, organisation or even country, depending on the nature of the question.",
    "Tower reversed denotes secrets and lies that would have brought down the false structures remain hidden and there is no shake-up. There is no destruction and the Tower remains standing."
  ],
  majorStar: [
    "Star",
    "Star represents hope, a bright future, joy, optimism, guidance, having answers to your questions, being and feeling the connection to the divine, serenity and inspiration. The Star shines so brightly that when it shows up in a reading it tells you that you are being the light in someone’s life.",
    "Star reversed indicates that any hope or promise offered is going to be false. There is leading astray rather than finding one’s way. There is a feeling of being lost with no way out."
  ],
  majorMoon: [
    "Moon",
    "Moon represents illusions, intuition, fantasies, fears and anxiety. When the Moon appears things might not be quite as they seem. Your insecurities might be running high or you find yourself on the receiving end of other people’s insecurities.",
    "Moon reversed indicates primitive forces at play, a long dark night of the soul. Intuition and creativity are blocked, a sexual block is also possible."
  ],
  majorSun: [
    "Sun",
    "Sun represents success, joy, sunshine, day, warmth and happiness. The Sun shows up when life is sunny and you are enjoying your time with the people you love. Life is simple rather than complicated. Relationships are blossoming and you are feeling loved.",
    "Sun reversed indicates new beginnings, success and happiness being blocked. Success is blocked due to reaching the wrong conclusions and having bad reasoning and poor logic. Things are frustrating and unclear. There might be some problems with pregnancy or raising young children."
  ], 
  majorJudgement: [
    "Judgement",
    "Judgement represents taking responsibility for your actions and your life, being a good judge of character, seeing the truth and knowing what you want. The Judgement card often shows up when you need to step up and be a leader, speaking the truth and being more assertive.",
    "Judgement reversed indicates taken on burdens, digging oneself deeper into the old life, being haunted by the past and unable to let go. There is something blocking the querent from renewing themselves."
  ],
  majorWorld: [
    "World",
    "World is the final Major Arcana card and represents fulfilment and successful completion of a cycle. You know your place in the world, and your life lessons have made you smart and accomplished. The World shows up when the world is ready for you and want what you have to offer.",
    "World reversed indicates staying at home secluded within the comfort zones, projects and ventures remain incomplete. The querent is unable to finish what they started."
    ]
}

export default _.shuffle( Object.keys( cardinfo ).map( fileNameKey => {
  const cardData = cardinfo[ fileNameKey ]

  return { 
    name: cardData[ NAME ],
    normalDescription: cardData[ NORMAL_DESCRIPTION ],
    reverseDescription: cardData[ REVERSE_DESCRIPTION ],
    cardClassName: fileNameKey,
    image: `https://mkleincreative.files.wordpress.com/2016/09/${fileNameKey.toLowerCase()}.jpg`
  }
}))