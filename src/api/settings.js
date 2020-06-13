// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const SettingsAPI = {
  colors: [
    {
      id: 1,
      option: 'school colors',
      color1: '#203e7a',
      color2: '#fec509',
      color3: '#fff',
    },
    {
      id: 2,
      option: 'custom',
      color1: '#fff',
      color2: '#fff',
      color3: '#fff',
    },
  ],
  languages: [
    {
      id: 1,
      language: 'English',
    },
    {
      id: 2,
      langauge: 'Español',
    },
  ],
  textsizes: [
    {
      id: 1,
      option: 'basic',
      headers: '16pt',
      paragraphs: '10pt',
      titles: '12pt',
    },
    {
      id: 2,
      option: 'non-basic',
      headers: '12pt',
      paragraphs: '10pt',
      titles: '15pt',
    },
    {
      id: 1,
      option: 'custom',
      headers: '16pt',
      paragraphs: '10pt',
      titles: '12pt',
    },
  ],
  textfonts: [
    {
      id: 1,
      option: 'Times New Roman',
    },
    {
      id: 2,
      option: 'Arial',
    },
    {
      id: 1,
      option: 'Calibri',
    },
  ],
  notification: false,
  getColors: function() {
    return this.colors
  },
  getTextSizes: function() {
    return this.textsizes
  },
  getLanguages: function() {
    return this.languages
  },
  getTextFonts: function() {
    return this.textfonts
  },
}

export {SettingsAPI}
