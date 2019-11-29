var phrases = [
  "Powered By Dark Blockchain™",
  "On The Outside I´m $USER, But On The Inside I´m /dev/null 😔😢😔",
  "Welcome To My Crybbb 😎😎😎",
  "ǝʌᴉ˥ o┴ spuoɔǝS ǝɹǝW ǝʌɐH noλ",
  "Don´t Dog The Boys - Ghandi",
  "There´s No Place Like ~/",
  "Follow Me On Twitter @UpperCenter",
  "Ping 1.1.1.1 | lolcat",
  'I Put The "Sigh" In Cyber',
  "How To: Piss Off Every Designer Ever - www.userinyerface.com",
  '"Technology Is Not A Panacea"',
  '"Eternal Vigilance Is The Price Of Security"',
  "btw i use Arch",
  "POG",
  "KYS Before You Snort That Ajax, Skid",
  "Buy My Bath Water, Now Only £299.99!",
  "/weather clear",
  '"Bebian Is The Most Secure OS" - Aristotle',
  "msfconsole",
  "Give Me My Second Monitor Back, Cowards",
  "YEEEEEET",
  "😂 iFunny.co 😂 ",
  "YOU´RE Breathtaking!",
  "If You Don´t Play The Craft, You Don´t Get The Shaft™",
  "Life Sucks, But It Doesn´t Swallow"
];
var scripts = document.getElementsByTagName("script");
var meme = scripts[scripts.length - 1];
meme.parentNode.replaceChild(
  document.createTextNode(phrases[Math.floor(Math.random() * phrases.length)]),
  meme
);
