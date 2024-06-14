export const regexp = {
  specialChar: /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/,
  upperCase: /[A-Z]/,
  lowerCase: /[a-z]/,
  number: /[0-9]/,
  digitsOnly: /^[0-9]*$/,
  phoneNumber: /^\+?\d[\d\s-]{1,13}\d$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  email2: /\+.+@gmail\.com/,
  beginsWithLetter: /^[a-z]/,
  lettersOrNumbers: /^[a-z0-9]+$/,
  userName: /^[a-z][a-z0-9]+$/,
  wallet: {
    P2PKH: /^[13][a-km-zA-HJ-NP-Z0-9]{26,33}$/,
    P2SH: /^[3][a-km-zA-HJ-NP-Z0-9]{26,33}$/,
    Bech32: /^bc1([qpzry9x8gf2tvdw0s3jn54khce6mua7l]{39})$/,
    P2PK: /^[0-9A-Fa-f]{66}$/,
  },
};
