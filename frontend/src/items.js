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
          { ...postosDeSaude.novaDescoberta },
          { ...postosDeSaude.candelaria },
          { ...postosDeSaude.cidEsperanca }
        ]
      },
      {
        name: 'ETILEFRIL',
        id: 2
      },
      {
        name: 'BIOGRIPE',
        id: 3
      },
      {
        name: 'NASOFELIN',
        id: 4
      },
      {
        name: 'PYRISEPT',
        id: 5
      },
      {
        name: 'COLIRIO FENILEFRINA 10% OCULUM',
        id: 6
      },
      {
        name: 'ZILEDON',
        id: 7
      },
      {
        name: 'PSIQUIAL',
        id: 8
      },
      {
        name: 'CLORIDRATO DE LERCANIDIPINO',
        id: 9
      },
      {
        name: 'DIASEC',
        id: 10
      },
      {
        name: 'CLORIDRATO DE METFORMINA +GLIBENCAMIDA',
        id: 11
      },
      {
        name: 'CLORIDRATO DE METOCLOPRAMIDA',
        id: 12
      },
      {
        name: 'VIGAMOX',
        id: 13
      },
      {
        name: 'CLORIDRATO DE OXIBUTININA',
        id: 14
      },
      {
        name: 'BENEGRIPE',
        id: 15
      }
    ]
  }
];
