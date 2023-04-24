import { filterDirector, filterProducer, sortDataYear, filterSpecies, functionSortAZ, genderTrivia, specieTrivia, ageTrivia, characterMovie } from '../src/data.js';


describe('Test filterDirector', () => {
  it('is a function', () => {
    expect(typeof filterDirector).toBe('function');
  });



  it('returns only movies directed by the chosen director`', () => {
    const entrada = {
      films: [
        {
          "title": "Castle in the Sky",
          "director": "Hayao Miyazaki",
        },
        {
          "title": "My Neighbors the Yamadas",
          "director": "Isao Takahata",
        }
      ]
    }

    const salida =
      [
        {
          "title": "Castle in the Sky",
          "director": "Hayao Miyazaki",
        }
      ]
      ;
    expect(filterDirector("Hayao Miyazaki", entrada)).toStrictEqual(salida);
  });
});

describe('Test filterProducer', () => {
  it('is a function', () => {
    expect(typeof filterProducer).toBe('function');
  });

  it('returns only movies directed by the chosen producer', () => {
    const entrada = [
      { title: "the castle in the sky", producer: "Isao Takahata" },
      { title: "Only Yesterday", producer: "Toshio Suzuki" }
    ]

    const salida = [
      { title: "Only Yesterday", producer: "Toshio Suzuki" }
    ]

    expect(filterProducer("Toshio Suzuki", entrada)).toStrictEqual(salida);
  });
});


describe('sortDataYear', () => {
  it('is a function', () => {
    expect(typeof sortDataYear).toBe('function');
  });

  it('returns movies sorted by release date', () => {
    const entrada = [
      { release_date: "1986" },
      { release_date: "1988" },
      { release_date: "1991" }
    ]

    const salida =
      [
        { release_date: "1991" },
        { release_date: "1988" },
        { release_date: "1986" }
      ]


    const salida2 = 
    [
      { release_date: "1986" },
      { release_date: "1988" },
      { release_date: "1991" }
    ]

    expect(sortDataYear("oldest", entrada)).toStrictEqual(salida2);

    expect(sortDataYear("newest", entrada)).toStrictEqual(salida);
  });
});

describe('Test characterMovie', () => {
  it('is a function', () => {
    expect(typeof characterMovie).toBe('function');
  });

  it('returns character filtered by movie', () => {

    const entrada = {
      films: [
        {
          title: "Castle in the Sky",
          people: [
            { name: "Pazu" },
            { name: "Dola" }
          ]
        },
        {
          title: "My Neighbor Totoro",
          people: [
            { name: "Totoro" },
            { name: "Chibi Totoro" }
          ]
        }
      ]
    };

    const salida = [
      { name: "Pazu" },
      { name: "Dola" }
    ]


    expect(characterMovie("Castle in the Sky",entrada)).toStrictEqual(salida);
  });
});



describe('Test filterSpecies', () => {
  it('is a function', () => {
    expect(typeof filterSpecies).toBe('function');
  });

  it('returns characters filtered by species', () => {
    const entrada = [
      { name: "Jiji", specie: "Cat" },
      { name: "Kiki", specie: "Witch" },
      { name: "Yakul", specie: "Red elk" },
      { name: "Okiyo", specie: "Raccoon Dog" }
    ]

    const salida = [
      { name: "Jiji", specie: "Cat" }
    ]

    const salida2 =[
      { name: "Yakul", specie: "Red elk" }
    ]

    expect(filterSpecies("Cat", entrada)).toStrictEqual(salida);
    expect(filterSpecies("Else", entrada)).toStrictEqual(salida2);
  });
});

describe('Test functionSortAZ', () => {
  it('is a function', () => {
    expect(typeof functionSortAZ).toBe('function');
  });

  it('returns characters sorted by alphabet`', () => {
    const entrada = [
      { name: "Totoro" },
      { name: "Pazu" },
      { name: "Kiki" }
    ]

    const salida = [
      { name: "Kiki" }, { name: "Pazu" }, { name: "Totoro" }
    ]

    const salida2 = [
      { name: "Totoro" }, { name: "Pazu" }, { name: "Kiki" }
    ]

    expect(functionSortAZ("AZ", entrada)).toStrictEqual(salida);

    expect(functionSortAZ("ZA", entrada)).toStrictEqual(salida2);
  });
});


describe('Test genderTrivia', () => {
  it('is a function', () => {
    expect(typeof genderTrivia).toBe('function');
  });

  it('returns gender percentajes`', () => {

    const entrada = {
      films: [
        {
          people: [
            { gender: "Female" },
            { gender: "Male" },
            { gender: "Unknown (Possible Male)" },
            { gender: "Male" }
          ]
        }
      ]
    };

    const salida = "50 % of the characters are males, 25% are females, and 25% of the characters have unknown genders.";

    expect(genderTrivia(entrada)).toStrictEqual(salida);
  });
});

describe('Test specieTrivia', () => {
  it('is a function', () => {
    expect(typeof specieTrivia).toBe('function');
  });

  it('returns cat and witch percentajes`', () => {

    const entrada = {
      films: [
        {
          people: [
            { specie: "Cat" },
            { specie: "Cat" },
            { specie: "Cat" },
            { specie: "Witch" }
          ]
        }
      ]
    };

    const salida = "Cat is the second most common specie among Ghibli characters with 75% and only 25% of them are witches.";

    expect(specieTrivia(entrada)).toStrictEqual(salida);
  });
});

describe('Test ageTrivia', () => {
  it('is a function', () => {
    expect(typeof ageTrivia).toBe('function');
  });

  it('returns age percentajes`', () => {

    const entrada = {
      films: [
        {
          people: [
            { age: "33" },
            { age: "14" },
            { age: "NA" },
            { age: "Young" }
          ]
        }
      ]
    };

    const salida = "25% of the characters are adults, 50% are under 18 and 25% are of unknown age.";

    expect(ageTrivia(entrada)).toStrictEqual(salida);
  });
});



