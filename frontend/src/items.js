const postosDeSaude = {
  novaDescoberta: {
    id: 1,
    nome: 'UBS Nova Descoberta',
    latitude: -5.8255675,
    longitude: -35.2058112
  },
  candelaria: {
    id: 2,
    nome: 'UBS Candelária',
    latitude: -5.8360047,
    longitude: -35.2225556
  },
  cidEsperanca: {
    id: 3,
    nome: 'UBS Cidade da Esperança',
    latitude: -5.8252267,
    longitude: -35.2405012
  },
  mirassol: {
    id: 4,
    nome: 'UBS Mirassol',
    latitude: -5.8427962,
    longitude: -35.2066749
  },
  pontaNegra: {
    id: 5,
    nome: 'USF Ponta Negra',
    latitude: -5.8843724,
    longitude: -35.1747881
  },
  pirangi: {
    id: 6,
    nome: 'UBS Pirangi',
    latitude: -5.8702533,
    longitude: -35.2101288
  }
};

export default [
  {
    name: 'Remédios',
    id: 0,
    children: [
      {
        name: 'BENEGRIP MULTI',
        id: 1,
        location: [
          { ...postosDeSaude.novaDescoberta, quantity: 2 },
          { ...postosDeSaude.candelaria, quantity: 1 },
          { ...postosDeSaude.cidEsperanca, quantity: 0 }
        ]
      },
      {
        name: 'ETILEFRIL',
        id: 2,
        location: [
          { ...postosDeSaude.candelaria, quantity: 5 },
          { ...postosDeSaude.cidEsperanca, quantity: 22 }
        ]
      },
      {
        name: 'BIOGRIPE',
        id: 3,
        location: [
          { ...postosDeSaude.novaDescoberta, quantity: 0 },
          { ...postosDeSaude.cidEsperanca, quantity: 0 }
        ]
      },
      {
        name: 'NASOFELIN',
        id: 4,
        location: [
          { ...postosDeSaude.candelaria, quantity: 112 },
          { ...postosDeSaude.novaDescoberta, quantity: 4 }
        ]
      },
      {
        name: 'PYRISEPT',
        id: 5,
        location: [
          { ...postosDeSaude.novaDescoberta, quantity: 1 },
          { ...postosDeSaude.candelaria, quantity: 2 },
          { ...postosDeSaude.cidEsperanca, quantity: 3 },
          { ...postosDeSaude.mirassol, quantity: 0 },
          { ...postosDeSaude.pontaNegra, quantity: 5 },
          { ...postosDeSaude.pirangi, quantity: 23 }
        ]
      },
      {
        name: 'COLIRIO FENILEFRINA 10% OCULUM',
        id: 6,
        location: [
          { ...postosDeSaude.candelaria, quantity: 2 },
          { ...postosDeSaude.mirassol, quantity: 9892 },
          { ...postosDeSaude.pontaNegra, quantity: 21 },
          { ...postosDeSaude.pirangi, quantity: 233 }
        ]
      },
      {
        name: 'ZILEDON',
        id: 7,
        location: [
          { ...postosDeSaude.cidEsperanca, quantity: 233 },
          { ...postosDeSaude.mirassol, quantity: 1221 },
          { ...postosDeSaude.pontaNegra, quantity: 0 }
        ]
      },
      {
        name: 'PSIQUIAL',
        id: 8,
        location: [
          { ...postosDeSaude.candelaria, quantity: 2 },
          { ...postosDeSaude.cidEsperanca, quantity: 2 },
          { ...postosDeSaude.mirassol, quantity: 2 },
          { ...postosDeSaude.pontaNegra, quantity: 2 }
        ]
      },
      {
        name: 'CLORIDRATO DE LERCANIDIPINO',
        id: 9,
        location: [
          { ...postosDeSaude.novaDescoberta, quantity: 23 },
          { ...postosDeSaude.cidEsperanca, quantity: 8 },
          { ...postosDeSaude.pontaNegra, quantity: 10 },
          { ...postosDeSaude.pirangi, quantity: 65 }
        ]
      },
      {
        name: 'DIASEC',
        id: 10,
        location: [
          { ...postosDeSaude.novaDescoberta, quantity: 12 },
          { ...postosDeSaude.candelaria, quantity: 3232 },
          { ...postosDeSaude.cidEsperanca, quantity: 2554 },
          { ...postosDeSaude.mirassol, quantity: 2 },
          { ...postosDeSaude.pontaNegra, quantity: 0 },
          { ...postosDeSaude.pirangi, quantity: 0 }
        ]
      },
      {
        name: 'CLORIDRATO DE METFORMINA',
        id: 11,
        location: [
          { ...postosDeSaude.pontaNegra, quantity: 0 },
          { ...postosDeSaude.pirangi, quantity: 1 }
        ]
      },
      {
        name: 'CLORIDRATO DE METOCLOPRAMIDA',
        id: 12,
        location: [
          { ...postosDeSaude.novaDescoberta, quantity: 4 },
          { ...postosDeSaude.mirassol, quantity: 7 }
        ]
      },
      {
        name: 'VIGAMOX',
        id: 13,
        location: [
          { ...postosDeSaude.mirassol, quantity: 6 },
          { ...postosDeSaude.pontaNegra, quantity: 9 },
          { ...postosDeSaude.pirangi, quantity: 0 }
        ]
      },
      {
        name: 'CLORIDRATO DE OXIBUTININA',
        id: 14,
        location: [
          { ...postosDeSaude.mirassol, quantity: 1 },
          { ...postosDeSaude.pontaNegra, quantity: 0 },
          { ...postosDeSaude.pirangi, quantity: 1 }
        ]
      },
      {
        name: 'BENEGRIPE',
        id: 15,
        location: [
          { ...postosDeSaude.novaDescoberta, quantity: 4 },
          { ...postosDeSaude.cidEsperanca, quantity: 33 },
          { ...postosDeSaude.mirassol, quantity: 12 },
          { ...postosDeSaude.pirangi, quantity: 0 }
        ]
      }
    ]
  }
];
