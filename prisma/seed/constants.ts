export enum Kapasiteter {
  AKUTT_FORURENSING = 'Akutt forurensning',
  MOB = 'MOB',
  FØRSTEHJELP = 'Førstehjelp',
  AKUTTMEDISINSK = 'Akuttmedisinsk',
  REDNINGSDYKKING = 'Redningsdykking',
  SLEP = 'Slep',
  SØK = 'Søk',
  UNDERVANNSOPERASJONER = 'Undervannsoperasjoner',
  LENSING = 'Lensing',
  DYKKING = 'Dykking',
  LØFT = 'Løft',
  ISBRYTING_ISGÅENDE = 'Isbryting/Isgående',
  NØDSLEP = 'Nødslep',
  HIFR = 'HIFR',
  BRANNSLOKKING = 'Brannslokking',
  CBRNE = 'CBRNE',
  UNDERVANNSSØK = 'Undervannssøk',
  LANDINGSPLASS = 'Landingsplass',
}

export enum StatusKode {
  Tilgjengelig = 'S100',
  Redusert = 'S200',
  UAD = 'S300',
}

export enum Ressurstype {
  Stasjon = 'objekt',
  Fartoy = 'fartøy',
}

export enum Undertyper {
  Stasjon = 'Stasjon',
  Redningsfartoy = 'Redningsfartøy',
  Redninsskoyte = 'Redningsskøyte',
  Ambulansebat = 'Ambulansebåt',
}

export enum Stasjonstyper {
  RSRK = 'RSRK',
  Fast = 'FAST',
}