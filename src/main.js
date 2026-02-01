// Core logic for Valentine's Proposal Site - Romantic Edition
import './style.css';

// Encrypted Data Blob
const ENCRYPTED_DATA = {
  encrypted: "5281bc31d4ae92cef844a4cbe940a442474fbfc985dacbc346ad4d02dc75254c7247df594576d01166c7f7decc739aeb72f7e037af41d2f245f6d933812cf8e0aaac44261e205ea76cbfa9d231c8783c3b6979ac54c0ca2082ed88e10cfe613d9e4f7a863cbb4549ca6628092e2355ee0f9ba0fe5ca7ee9f4cb08d9a111da745667bc317f698f394593923c999146a2696099d6a342c771b4a27a396c805390b37571e3d8982a4f7d0e548524596a2185b75010f758b74565d4169c15f885b34bcb581025dce8ee2ce2756ffba5a572b3b4f52928f031a438ebd11ca0d72a51e826c655c6e7814eb7e9e4c3202df489bafa5cbcc2735913b3c3fe78e6963ddb7de5f617316d4e3b250a02781e1e3bd500813412dec5a7c4cf3c1464ca4bb24ff3bbb59c88448da3d61b203a70ce6fc8eca2044348649742038a79df59da5067f4f413c405b10c04e606b13547bbfcb9e1c255293c8e7fb7d76d78b8e5f6bc1af41d32bb229a480c059afe64df889615519a81bbd74ec8141ddf956d6be702adc43a72e78fd43a676e4e2887afa104525f5ad19b6c105f8f4690e77c706093340ce8e559b3cd64782d67df0198790fcd81776e49c4fb86bb0220fd3727617546ec2b51ef6f5126136193304d52b92158da260841306c63db32e8824f7d5bfda51926d7008a4d38c5fa66eaf8423f91a0205bc95f06e291fa3fef34b1332cfb2c32d89eec824f72f2d1ff48e9d438043b98a2792aa140a5dbaeee99a8abb8d335d1163de6ee8b3164988f4f2440dde2710a469d0bb93f91783bb7f97172813a5820007c290dc9e0d0374d2930712e953c789c37b32a43a4b001192d7a69a81f1a357cf7d913c001d6c42c5167c3dd890d4a66bb60ebb4c3ebc35222f136bb8ffa124d15c1841893d916baf3ad07f596140dcb8bae7761606c5a91ff7fe0555b55cb6169e586deb6652c7cfbdbd21552f48f33b3c70f91889098fa07839a413c8e8ca4f47a6f648701c7db92d8278a0af8d404931c74de78608fe2e0d9e765d488d71226fdb8912b545911f5efcf07a05dade3935c00a178d89230f59b9ee04dbef280920e118b4468b5dd53bc6b98d759858ac178a8fa970f32c66e58eeb4d3b68816692e90fa1d841cff2bef0b7e14053ffbec33454a2d567b3c8c6d7a26e007bf347e117e621f737bb2d131ecb1f13d0bf22ed88ef8124e81f6f16d9fed17c48d394b10d66f2e1b794876db2069c908baf28055ca7ca05014f7b92b07cac513767e3a38ffb158c656c43c5e8bd2f087928461c49d37331f8c079e8e4eca115fbf961eafb99e975a599be43a6b50ee85c4458cf0944d45dbbf251efde96dd7fb2fcbd73082adc543a59977a2d1502f19609d1cab2a378c5e6335606b11f64f3a6b5877d78026063006151535ac6c0733a870b19b44066dabb499334f5c3aad235f6d634594a5a87519e77bba2941061c3c7cd205f6e1548bd3850bfcae3c00c6fb14a983a6dfe200ae2023390806dea77dc14cb515b1107efa160130b3815b9272c230e40a528f7714b87ae196decc334781d31876a9b6629708dff04b8e599438487153e5fc301265d03f336248e99d014cc92bc0e07150b71c89ceb58921c442eea0720f35b1893e73f4fe1c8d41020e4b8a5312308690ff0be38718993fbf0cad02252edd51b63940e81ba5d259e858c45567b2f7bbc0ec85ebe0ba1a2a27f0eaebe4ea19dab873541a362796a172793d279196cead20c0c60eb69dc2afe60328a9bf3180a765a68b13d710b9631bfcc42a9f56eee972f48af49b4a71be9b553476e12d6343fe2882de875a12b1b2e03a2efcd52089e1b1c4680474f4cd407345a83c972a603a4f013b8c9878aced5717c748ca53d935b7e8e35025cd690a8a47bf93ad49f8e664b6f0f7664f62c9815f564e5b57825b2929ff658cbbc782e4ee0c240a432c3d8defb001bcc3d7e1537fef55198f5bdb17d0d33158b8530ada7de5d284277f5c7177d958d7f111e14843d0bf74b18fde78e7412919906a8a7a9ca8c73a7b0a0c962a67506b8602c8e0734c2f7d9c7f3fc10e3fac9e21527ec4d859915106accfe65f2507a6f855dca40e0fc0a6e52cdc8d252821062ecef5d9cf41b2d1eabdd6d1c7200a146a160655f7b79dbcf74d25cfbf5d6ca94fb4895f6f63a5920f223daa7bdab428a22614852e34563bd452f743f82eef4eef57cffb34f3cb7078e307f1dd09f3e6952ab09fcaeb9aeb325df7a4b1b556b55b0381e113c5be627828026ef0d60cccf2bcc2746b63b03de61db5a0c928daf03089d26c0ad5844e6667da16890bdf60b0c89052547185ae1af90bfde83b7b37f19839e0760250357f4693cdfc9980d0214d1449ec096bf1520ca7fe4e102bc57abfe142ac188fa267d0042c1bf71b5e9ba9eac51c2b3d72a5fd1b047c1c1ec7d2de40b31d1b4dd9c77619e8a47cf15114e6974b0ecbe8410893667fde336d83494016e52ab18fc02741812a08b00153dc20f53a3fbd0ebfecd882926e13cd4c7b074a4161c7b149d05a6caccf32b38f209be00d5d0bdd8330250990ab8d3aab59b6c11fb68d13d03f116d7da901e7889350a3aa41c929b555dce52d42d9a962c55f71969ec4321324a1762a5b97b39f419679e9d5dad5f6d4e28a2997971f77c3716b8fbcaa66db3d75d5a9bb110d651d4641ec0bbad9d3ca65d82ed37b6d668b04e70c7c721423e6333b827cfe76e7a4756c2199ce8efd824044dde466c1f03963103d3df37053192b278898fbfef88afca033f89975e1334852957414b3b01f13426bf0db0a3737ed2b5226363b0599a6e834cc0b79c1d242fcd8e168085d59d8f14d9c3cb2e68937d9afb5ae333d0d1341d687f7497f14f86da780b273cfb5a0d18a12854392eca031cd902e10328f07b4e7ec95acce8aa603e57724906ee4f07c6cb4abd4e2d92d6eca5164a89496bf2f26c420cc82f7d0a289e028158cce4ff4da40b2f65fadb3a2b0ac3c3942c53a09a3ef4ade2e15178de4f9885581a5303a6d6ac806831c798746843b60ed494dd2ee7196d1c4dc53f68a4bf4b83ca8c546edc91f177383111a23361e00f4966b5d4327173a2e0cb79ac4fe457e5e9bb64e1274bb788650baf1a62d0e9b71150e05d60ffb62822dc5221540c762c84deb4b44f284cb74e299228383ffbf5844b97525c51a9c167111a753f0a67535c3fef304299335b0d4d0398a73434a56cf059f4c40427f042ef69e29ecb2db38ac8a742da6a319da65dd96fdbe5fa99215ee4f469965036230e8810d8d74990b0e5a5f8507d07833741996297d2a8d22d0dbcde00e85fb63a481bb648f5dbd8386217c3c13d9e739d29866e5608a3aef2eda3dbd8f1dcff9cf3e85c7d79dd687b5788cf7b16a055e0f0e23e8a0eeb9e08152a7bfd73c22e55061dc08d16fcf6f1241364b8a7ada089d8fe59024376d45d75afcb24dab308ca18520f5ac7b32dc6a1b0a1e66cd6f3f35fdcb2a9e87f23800807bd47a6051a0454943cd030d10499c72cb499af980f0a875594805b1f04ef7c253b88e22f978aaee47c4624c0094d1932ae5d65db26240ba15500ec7d348025c3985b38f150251d3bb8b3aa928f19574362a1b9f51d5874ae33b0cbaac94d4a6c9986234b79aa6f90ad55b46f7818d391681bc94b22c64510a0c4c9da71b8772fbafa1d815f73be6b0741b745f515d396c8992c353e93816b0876bf8940e18960d4d31e86bd053a53e7474b9ee860670a51d0940969b240f1d9d6409167e9384594ff2f36b66247256d3423cd495d952183d41c33982b24d3e027f0aa0247e72e58a717e01b81767d2abcd6b434eb43d92972bad7d50c3d900e4417b6f39d541fc2c47991df2d37ef75a81a173a021b0113094a9beddf7efddb1b627392f4a4ed1820783d387df8840facf714c4f667b18c3d16c31bb06edfccd06b01be1f157c3f44591229947b49f04b749c69375b2be97898c10edd86ac6745e8eeefc190809a3d3f7c8847641fb57cf71da0a52a4284b53827890be8ad5ba5c5be915c3444bbb2f7f707a5f8737d2f1794b025217187b28000395b9811b30a1e7b2766958a185cf095ac9f73e839c213bef069e732c7c6517e9049fc4a521fd261bdd49cf9840137c2067ba5bb6b9ab242e65daf0755080f37021e78fe8fe417a53a0e8ea1936aeeb2cd15c121b79f154afb94de7d6b6334e63fe6ad93bd891888e23a6d85455b728b8d5831904a352f11ab416b3a4a37291dd34c8c4af31efb2b692acf83cb691fa19ac785c2ab38656665e5f9ae722e9d4d1ec9e1721c939bcdc70187a5eae545ac080c4fb8fa336182ccbad2de7d6df05d86760534cfbbcf2500ff541a646894cb511047cf72b142a6c1a109c42ebf1d29d399d14619bb0b1d1574fe8b1aa7482e3d2df73a4004c7f269bc063e57cb69f61451b5e22730d4573d758c568432b329935ca9a10bbc43b5fa4f13f6c667bcc465356ea9a647f97e1197454f8cb9fba7da18e4a3f1fe5adc41ef72975292dfe238c8a15d86f69724b1cf90b920b0061c4290bdfb66d10294dbbe83c1d44d07ea785c66633ad87a0be26345e9f48d2fb575b8c551866157e7bf68af22b8a3f81009d03e601df9b0eac1e0c7f77604a613e7b54d7da428d6a893755e94a0322f445587ae3aa775b657b23176a7f2ed7332542161149dff9df1282668d899e315a6720f7c022fbd1c2c276b98297420b93493c35cd20a50470d101ddc5ca3e82d6cc7088fe967db005a66d28fe4b4fd6bd705f608818d6fb127af446193d6f8e177b1394f51cf6d6e8f168771711d6a723aa9357698a2cd49d9f6ab75ffab2754d65ff28cea24522eac51d0b02377256a0e4486aaeb6edd2f30974b5949827aece9f4b7d4ef393fc8671c37be7d0f1ee31726f9074d9192f18c3670f8c6d8b9d246ca3697a4a3b4f0a94693fa993a552cf394631be6ab22053114733c4f563b6934bdcc18345585e0ab70540cf426896406a7451e8a2c198118e2df8e76f1b6241e60324d3780136862aa53da0293b8b5d5279cf91443954b1c12782aed148c22693562af5a0bbc565ee8306f235d3c33683140aa7a243eef268a0138244b18c5fbd2badf6689e2862130576599537650ef35f06a60aed83149e8f917291e27d42a23f11d546f1d9631bfebe4102e62c890a408e82502477d480ac6fb3c9601c3fb8a6f773769f7589da3d8651b3fa3980f26e1e0a9436d1b7df8ac233bbd20b9eadbeaf90bcb6aedb7106c26c05fa7bdd2383c8d300b6c3b281f4307e9b8f06f49c01e1adc55300a99adef329e56df343e8f2b0ebfec2b611214accf3173efa9a4a636f5c64ee3991ac4f642186170bf890e1d6cf9bac994f178dcd08d3dce86f6f1a178017047c9b147e0bcb516c81ed83ee305f5dd63837c14e2404d6f9e2fe6568f835f21a96e94b8b196eea55a11de11135e62d7dd1114ce0eeed10d914f4a35f3c9e17da92bd3a30e53385d04df565733a12a136623b506c2c5c5dd73c8dd2e451dd65a8e15179e416ca2e2f480f7db6fc0b27e071a0b9ef154b233bbfd2bb94ada6335dc2422a63f0dd937fc0df5b5fd83563f7145c4648b19a597b0cdf024ba04199db67e43e892f7dc33fe21756f2edb68b48f01358ca9b299428eec83ea6fe4645af4b41a22369835536ca2fc74a33849f9201107a8489aa4974c7b619d382d9266d6d796a667b2054ad53128051e9875eacf658861e30722a3c0f177194cf3bd6d78ccd31851a28b208c1eeffff6f71477a31bfe5f4eb8f9ecdfd21b255a6672ccbd2e9858ba09531223ba9dae8d33b5530f75b3a83d2d7ef2cb77eb5c14665da6786e396c59104fdf8635dac5d8cea0fa2b10e3b6570b0f85a59b83162c840f21c36f3bf64e8c137b6e78f03216acf507d11844ccc7fad67c56c193f051521b36adf0fc0492a59cfb2dcbca7516aea76356c59b65248dea3e01219b9c3241c98b870219d63966150afab67033a07781eea8004b5c1666fa76e0a830cb32fa0071d551881154e3e49bbfc2a3851076a0e36cd938a8c1fbbb1e77c9a3b81afb06016ab52af859789bd1360c7fb34b4735f45d7f4831bc0405c13e1dd54242ba4b8abb",
  salt: "a2eb20faebcc5131f6c914633950ef6b",
  iv: "02750bd8c7b477c2fe413dfb",
  authTag: "1d8c69c90282c60f345756382e199192"
};

// Configuration
let SECRETS = null; // Will be decrypted on unlock

// State
let currentQuestionIndex = 0;

// Elements
const heartsContainer = document.getElementById('hearts-container');
const authSection = document.getElementById('auth-section');
const quizSection = document.getElementById('quiz-section');
const proposalSection = document.getElementById('proposal-section');
const celebrationSection = document.getElementById('celebration-section');
const quizMount = document.getElementById('quiz-mount');

const passwordInput = document.getElementById('password-input');
const unlockBtn = document.getElementById('unlock-btn');
const errorMsg = document.getElementById('error-msg');

const toQuizBtn = document.getElementById('to-quiz-btn');

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// --- Initialization ---

function init() {
  console.log("Valentine Site Initializing...");
  createHearts();
  setupEventListeners();
}

// --- Effects ---

function createHearts() {
  if (!heartsContainer) return;
  const heartSymbols = ['❤️', '💖', '💗', '💓', '💕'];
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 7 + 's';
    heart.style.animationDelay = Math.random() * 8 + 's';
    heart.style.fontSize = Math.random() * 15 + 10 + 'px';
    heartsContainer.appendChild(heart);
  }
}

// --- Crypto Helpers ---

async function decryptMemoryData(password) {
  try {
    const { encrypted, salt, iv, authTag } = ENCRYPTED_DATA;

    // Convert hex to bytes
    const saltBytes = new Uint8Array(salt.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
    const ivBytes = new Uint8Array(iv.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
    const authTagBytes = new Uint8Array(authTag.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
    const encryptedBytes = new Uint8Array(encrypted.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

    // Combine encrypted bytes and auth tag for Web Crypto (AES-GCM expects tag at the end)
    const combined = new Uint8Array(encryptedBytes.length + authTagBytes.length);
    combined.set(encryptedBytes);
    combined.set(authTagBytes, encryptedBytes.length);

    // Import password as a key
    const encoder = new TextEncoder();
    const baseKey = await crypto.subtle.importKey(
      'raw',
      encoder.encode(password),
      'PBKDF2',
      false,
      ['deriveKey']
    );

    // Derive the actual decryption key
    const key = await crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: saltBytes,
        iterations: 100000,
        hash: 'SHA-256'
      },
      baseKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt']
    );

    // Decrypt
    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: ivBytes },
      key,
      combined
    );

    const decryptedText = new TextDecoder().decode(decryptedBuffer);
    return JSON.parse(decryptedText);
  } catch (err) {
    console.error("Decryption failed:", err);
    return null;
  }
}

// --- Component System ---

function QuizComponent(container, props) {
  if (!container) return;
  const { question, options, media, progress, onNext } = props;

  container.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-progress" style="margin-bottom: 1rem; font-size: 0.8rem; color: #888;">
        Question ${progress.current} of ${progress.total}
      </div>
      <h2 class="question-text" style="font-family: serif; color: #8b0000;">${question}</h2>
      <div class="options-container" id="options-mount" style="display: flex; flex-direction: column; gap: 10px; margin-top: 2rem;"></div>
      <div class="reveal-area" style="display: none; margin-top: 2rem;">
        <p class="reveal-text" style="color: #8b0000; font-weight: 600; font-size: 1.2rem;"></p>
        <div class="media-container" style="margin: 1.5rem 0; border: 1px solid #fadadd; border-radius: 15px; overflow: hidden;"></div>
        <button class="btn btn-primary next-question-btn">Next Memory</button>
      </div>
    </div>
  `;

  const optionsMount = container.querySelector('#options-mount');
  const revealArea = container.querySelector('.reveal-area');
  const revealText = container.querySelector('.reveal-text');
  const mediaContainer = container.querySelector('.media-container');
  const nextBtn = container.querySelector('.next-question-btn');

  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'btn quiz-option';
    btn.textContent = opt.text;

    if (opt.isCorrect) {
      btn.onclick = () => {
        optionsMount.style.display = 'none';
        revealText.textContent = media.text;

        if (media.type === 'video' && media.src) {
          mediaContainer.innerHTML = `<video class="memory-photo" controls autoplay style="width: 100%; display: block;"><source src="${media.src}" type="video/mp4"></video>`;
        } else {
          const img = new Image();
          img.className = 'memory-photo';
          img.src = media.src || 'https://via.placeholder.com/400x300?text=Us';
          img.style.width = '100%';
          img.style.display = 'block';
          mediaContainer.innerHTML = '';
          mediaContainer.appendChild(img);
        }

        revealArea.style.display = 'block';
      };
    } else {
      btn.onclick = (e) => {
        e.preventDefault();
        btn.classList.add('disappearing');
        setTimeout(() => {
          btn.style.display = 'none';
        }, 300);
      };

      btn.onmouseenter = () => { btn.style.transform = 'scale(0.95)'; };
      btn.onmouseleave = () => { btn.style.transform = 'scale(1)'; };
    }
    optionsMount.appendChild(btn);
  });

  nextBtn.onclick = onNext;
}

// --- Navigation ---

function showSection(sectionId) {
  const sections = [authSection, quizSection, proposalSection, celebrationSection];
  sections.forEach(s => {
    if (s) {
      s.classList.add('hidden');
      s.classList.remove('active');
    }
  });

  const active = document.getElementById(sectionId);
  if (active) {
    active.classList.remove('hidden');
    setTimeout(() => active.classList.add('active'), 50);
  }
}

// --- Handlers ---

function setupEventListeners() {
  if (unlockBtn) unlockBtn.onclick = handleUnlock;
  if (passwordInput) {
    passwordInput.onkeypress = (e) => {
      if (e.key === 'Enter') handleUnlock();
    };
  }



  if (yesBtn) yesBtn.onclick = () => { showSection('celebration-section'); };

  if (noBtn) {
    noBtn.onmouseenter = moveButton;
    noBtn.onclick = moveButton;
  }
}

async function handleUnlock() {
  const password = passwordInput.value.toLowerCase().trim();

  // Attempt decryption
  const decrypted = await decryptMemoryData(password);

  if (decrypted) {
    console.log("Unlock Successful!");
    SECRETS = decrypted;
    showSection('quiz-section');
    loadNextQuestion();
  } else {
    errorMsg.textContent = 'Try again, love!';
    passwordInput.value = '';
    passwordInput.focus();
  }
}

function loadNextQuestion() {
  if (!SECRETS || currentQuestionIndex >= SECRETS.questions.length) {
    showSection('proposal-section');
    return;
  }

  const data = SECRETS.questions[currentQuestionIndex];
  const allOptions = [
    { text: data.correct, isCorrect: true },
    ...data.others.map(o => ({ text: o, isCorrect: false }))
  ].sort(() => Math.random() - 0.5);

  QuizComponent(quizMount, {
    question: data.q,
    options: allOptions,
    media: {
      type: data.mediaType,
      src: data.mediaSrc,
      text: data.revealText
    },
    progress: {
      current: currentQuestionIndex + 1,
      total: SECRETS.questions.length
    },
    onNext: () => {
      currentQuestionIndex++;
      loadNextQuestion();
    }
  });
}

function moveButton(e) {
  const btn = e.target;
  const padding = 50;
  const x = Math.random() * (window.innerWidth - btn.offsetWidth - padding * 2) + padding;
  const y = Math.random() * (window.innerHeight - btn.offsetHeight - padding * 2) + padding;

  btn.style.position = 'fixed';
  btn.style.left = x + 'px';
  btn.style.top = y + 'px';
  btn.style.zIndex = '1000';
}

// Start
document.addEventListener('DOMContentLoaded', init);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  init();
}
