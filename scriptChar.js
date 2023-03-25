// ini buat declare variabel yang mau kita pake di js nya, ngambil2 id atau classnya
const character = document.getElementById('charPic')
const charName = document.getElementById('namaChar')
const charDesc = document.getElementById('charDesc')
const card1 = document.getElementById('card1')
const card2 = document.getElementById('card2')
const card3 = document.getElementById('card3')
const btn_mondstadt = document.getElementById('mondstadt')
const btn_liyue = document.getElementById('liyue')
const btn_inazuma = document.getElementById('inazuma')
const btn_sumeru = document.getElementById('sumeru')
const bawahnya = document.querySelector(".bawahnya")
const cards = document.querySelectorAll(".card")
const bgChar = document.getElementById('bgChar')
const maps = document.querySelectorAll("map")

const dropMenu = document.querySelector(".navbar .menu-icon");
const dropMenuList = document.querySelector(".dropMenu")

dropMenu.addEventListener('click', () => {
    if (dropMenu.dataset.active) {
        dropMenuList.style.top = "25px"
        dropMenuList.style.left = "-1000px"
        delete dropMenu.dataset.active
    }
    else {
        dropMenuList.style.top = "25px"
        dropMenuList.style.left = "0"
        dropMenu.dataset.active = true
    }
})

// ini jgn dulu dipake buat ntar pas pindah map berubah cardnya
let btn_cards = [
    [
        'assets/CharacterPage/venticard1.png',
        'assets/CharacterPage/jean_character_card.png',
        'assets/CharacterPage/diluccard1.png'
    ],
    [
        'assets/CharacterPage/liyue_card_1.png',
        'assets/CharacterPage/liyue_card_2.png',
        'assets/CharacterPage/liyue_card_3.png'
    ],
    [
        'assets/CharacterPage/inazuma_card_1.png',
        'assets/CharacterPage/inazuma_card_2.png',
        'assets/CharacterPage/inazuma_card_3.png'
    ],
    [
        'assets/CharacterPage/sumeru_card_1.png',
        'assets/CharacterPage/sumeru_card_2.png',
        'assets/CharacterPage/sumeru_card_3.png'
    ]
]

//ini array buat ganti background image
let backgroundsImage = [
    '/assets/CharacterPage/bg.png',
    '/assets/CharacterPage/bg_liyue.svg',
    '/assets/CharacterPage/bg_inazuma.svg',
    '/assets/CharacterPage/bg_sumeru.svg'
]

// ini array buat ganti gambar karakternya
let charactersUrl = [
    [
        '/assets/CharacterPage/VentiChar.png',
        '/assets/CharacterPage/VentiChar2.png',
        '/assets/CharacterPage/VentiChar3.png'
    ],
    [
        '/assets/CharacterPage/Liyue1_Zhongli.png',
        '/assets/CharacterPage/Liyue2_Ningguang.png',
        '/assets/CharacterPage/Liyue3_Beidou.png'
    ],
    [
        '/assets/CharacterPage/inazuma1_raiden.png',
        '/assets/CharacterPage/inazuma2_kamisato.png',
        '/assets/CharacterPage/inazuma3_kadehara.png'
    ],
    [
        '/assets/CharacterPage/sumeru1_nahida.png',
        '/assets/CharacterPage/sumeru2_cyno.png',
        '/assets/CharacterPage/sumeru3_nilou.png'

    ]
]

console.log(charactersUrl[0][0])

//ini ntar diisi descriptionnya
let charactersText = [
    ['A bard that seems to have arrived on some unknown wind — sometimes sings songs as old as the hills, and other times recites poems fresh and new.',
    'As the Acting Grand Master of the Knights Jean has always been devoted to her duties and maintaining peace in Mondstadt.',
    'As the wealthiest gentleman in Mondstadt, the ever-dapper Diluc always presents himself as the epitome of perfection. '],

    [
        'Wangsheng Funeral Parlor mysterious consultant. Handsome, elegant, and surpassingly learned.',
        'Owner of the Jade Chamber in the skies above Liyue, there are stories abound about Ningguang, with her elegance and mysterious smile.',
        'There are those who say she can split mountains and part the sea. Others say she draws lightning through her sword. Some say that even the mightiest of sea beasts are no match for her.'
    ],
    [
        'The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate.',
        'Daughter of the Yashiro Commissions Kamisato Clan from Inazuma. Dignified and elegant, wise and determined.',
        ' Beneath a youthful and carefree demeanor lies a heart that hides a great many burdens from the past. Seemingly easygoing, Kazuha has his own code of conduct.'
    ],
    [
        'Lesser Lord Kusanali dwells deep in the Sanctuary of Surasthana, and has never really been in the limelight, nor has she even been mentioned much.',
        'The General Mahamatra of the Akademiya, leader of all the Matras. He has a unique sense of humor that never fails to leave a deep impression.',
        'Star of the Zubayr Theater. Her dance is as graceful as a water lily in first bloom, pure and pristine.'
    ]
]

// ini array buat namanya
let characterName = [
    ['VENTI', 'DILUC', 'JEAN'],
    ['ZHONGLI', 'NINGGUANG', 'BEIDOU'],
    ['RAIDEN SHOGUN', 'KAMISATO AYAKA', 'KAEDEHARA KAZUHA'],
    ['NAHIDA', 'CYNO', 'NILOU']
]

//section ini buat nampilin defaultnya kek gimana (pas awal masuk page character)
bgChar.style.backgroundImage = 'url(' + backgroundsImage[0]+')'
character.style.backgroundImage = 'url('+ charactersUrl[0][0]+')'
charName.innerHTML = characterName[0][0];
charDesc.innerHTML = charactersText[0][0];
card1.style.backgroundImage = 'url(' + btn_cards[0][0]+')'
card2.style.backgroundImage = 'url(' + btn_cards[0][1]+')'
card3.style.backgroundImage = 'url(' + btn_cards[0][2]+')'


// ini buat dimainin indeksnya
var posisi = 0;
var posisi_map = 0;


console.log('default map disini ' +posisi_map)

//jadi disini aku punya section bagian bawahnya ketika
// bawahnya.addEventListener("click", () => {
    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            console.log(index)
            bgChar.style.backgroundImage = 'url(' + backgroundsImage[posisi_map]+')'
            character.style.backgroundImage = 'url('+ charactersUrl[posisi_map][index]+')'
            charName.innerHTML = characterName[posisi_map][index];
            charDesc.innerHTML = charactersText[posisi_map][index];
            card1.style.backgroundImage = 'url(' + btn_cards[posisi_map][0]+')'
            card2.style.backgroundImage = 'url(' + btn_cards[posisi_map][1]+')'
            card3.style.backgroundImage = 'url(' + btn_cards[posisi_map][2]+')'
        })
    })
// })

// maps.forEach((map, i) => {
//     map.addEventListener("click", () =>{
//         map[i].style.color = 'red'
//     })
// })

function chooseCard1 (posisi){
    console.log(posisi)
    bgChar.style.backgroundImage = 'url(' + backgroundsImage[posisi]+')'
    character.style.backgroundImage = 'url('+ charactersUrl[posisi][0]+')'
    charName.innerHTML = characterName[posisi][0];
    charDesc.innerHTML = charactersText[posisi][0];
}

function chooseCard2 (posisi){
    console.log(posisi)
    bgChar.style.backgroundImage = 'url(' + backgroundsImage[posisi]+')'
    character.style.backgroundImage = 'url('+ charactersUrl[posisi][2]+')'
    charName.innerHTML = characterName[posisi][2];
    charDesc.innerHTML = charactersText[posisi][2];
}

function chooseCard3 (posisi){
    console.log(posisi)
    bgChar.style.backgroundImage = 'url(' + backgroundsImage[posisi]+')'
    character.style.backgroundImage = 'url('+ charactersUrl[posisi][1]+')'
    charName.innerHTML = characterName[posisi][1];
    charDesc.innerHTML = charactersText[posisi][1];
}

btn_mondstadt.addEventListener("click", () => {
    posisi_map = 0;
    bgChar.style.backgroundImage = 'url(' + backgroundsImage[posisi_map]+')'
    console.log('posisi map '+ posisi_map)
    chooseCard1(posisi_map)
    card1.style.backgroundImage = 'url(' + btn_cards[posisi_map][0]+')'
    card2.style.backgroundImage = 'url(' + btn_cards[posisi_map][1]+')'
    card3.style.backgroundImage = 'url(' + btn_cards[posisi_map][2]+')'

    // card1.addEventListener("click", chooseCard1(posisi))
    // card2.addEventListener("click", chooseCard2(posisi));
    // card3.addEventListener("click", chooseCard3(posisi));
});

btn_liyue.addEventListener("click", () => {
    posisi_map = 1
    bgChar.style.backgroundImage = 'url(' + backgroundsImage[posisi_map]+')'
    console.log('posisi map' + posisi_map)
    chooseCard1(posisi_map)
    card1.style.backgroundImage = 'url(' + btn_cards[posisi_map][0]+')'
    card2.style.backgroundImage = 'url(' + btn_cards[posisi_map][1]+')'
    card3.style.backgroundImage = 'url(' + btn_cards[posisi_map][2]+')'

    // card1.addEventListener("click", chooseCard1(posisi))
    // card2.addEventListener("click", chooseCard2(posisi));
    // card3.addEventListener("click", chooseCard3(posisi));
});

btn_inazuma.addEventListener("click", () => {
    posisi_map = 2;
    bgChar.style.backgroundImage = 'url(' + backgroundsImage[posisi_map]+')'
    console.log('posisi map' + posisi_map)
    chooseCard1(posisi_map)
    card1.style.backgroundImage = 'url(' + btn_cards[posisi_map][0]+')'
    card2.style.backgroundImage = 'url(' + btn_cards[posisi_map][1]+')'
    card3.style.backgroundImage = 'url(' + btn_cards[posisi_map][2]+')'

    // card1.addEventListener("click", chooseCard1(posisi))
    // card2.addEventListener("click", chooseCard2(posisi));
    // card3.addEventListener("click", chooseCard3(posisi));
});

btn_sumeru.addEventListener("click", () => {
    posisi_map = 3;
    bgChar.style.backgroundImage = 'url(' + backgroundsImage[posisi_map]+')'
    console.log('posisi map ' +  posisi_map)
    chooseCard1(posisi_map)
    card1.style.backgroundImage = 'url(' + btn_cards[posisi_map][0]+')'
    card2.style.backgroundImage = 'url(' + btn_cards[posisi_map][1]+')'
    card3.style.backgroundImage = 'url(' + btn_cards[posisi_map][2]+')'

    // card1.addEventListener("click", chooseCard1(posisi))
    // card2.addEventListener("click", chooseCard2(posisi));
    // card3.addEventListener("click", chooseCard3(posisi));
});

// card1.addEventListener("click", chooseCard1(0));
// card2.addEventListener("click", chooseCard2(0));
// card3.addEventListener("click", chooseCard3(0));
