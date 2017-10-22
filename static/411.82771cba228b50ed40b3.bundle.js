webpackJsonp([411],{1536:function(module,exports){module.exports="/*eslint camelcase: off*/\nimport {google2address} from './google2address';\n\ndescribe('google 2 address', () => {\n  const aComponent = (long_name, short_name, ...types) => ({\n    long_name, short_name, types\n  });\n\n  const aGeometry = (lng, lat) => ({\n    location: {\n      lat: () => lng,\n      lng: () => lat\n    }\n  });\n\n  const aGoogleResponse = ({components, formatted, geometry, types}) => ({\n    geometry: geometry || aGeometry(1, 2),\n    address_components: components || [],\n    formatted_address: formatted || '',\n    types: types || []\n  });\n\n  it('should set state according to administrative_area_level_1', () => {\n    const someState = 'some-state';\n    const component = aComponent(null, someState, 'administrative_area_level_1');\n\n    expect(google2address(aGoogleResponse({components: [component]})).state).toEqual(someState);\n  });\n\n  describe('city', () => {\n    const someLocality = 'some-locality';\n    const someSublocality = 'some-sublocality';\n    const somePostalTown = 'some-postal_town';\n    const localityComponent = aComponent(someLocality, null, 'locality');\n    const subLocalityComponent = aComponent(someSublocality, null, 'sublocality');\n    const postalTownComponent = aComponent(somePostalTown, null, 'postal_town');\n\n    it('should be according to locality, ignore sublocality and postal_town', () => {\n      const components = [localityComponent, subLocalityComponent, postalTownComponent];\n      expect(google2address(aGoogleResponse({components})).city).toEqual(someLocality);\n    });\n\n    it('should be according to sublocality if locality is missing, ignore postal_town', () => {\n      const components = [subLocalityComponent, postalTownComponent];\n      expect(google2address(aGoogleResponse({components})).city).toEqual(someSublocality);\n    });\n\n    it('should be according to postal_town if locality and sublocality are missing', () => {\n      expect(google2address(aGoogleResponse({components: [postalTownComponent]})).city).toEqual(somePostalTown);\n    });\n  });\n\n  it('should set street according to route', () => {\n    const someStreet = 'some-street';\n    const component = aComponent(someStreet, null, 'route');\n\n    expect(google2address(aGoogleResponse({components: [component]})).street).toEqual(someStreet);\n  });\n\n  it('should set country according to country - long name', () => {\n    const someCountry = 'some-country';\n    const component = aComponent(someCountry, null, 'country');\n\n    expect(google2address(aGoogleResponse({components: [component]})).country).toEqual(someCountry);\n  });\n\n  it('should set country code according to country - short name', () => {\n    const someCountryCode = 'some-country-code';\n    const component = aComponent(null, someCountryCode, 'country');\n\n    expect(google2address(aGoogleResponse({components: [component]})).countryCode).toEqual(someCountryCode);\n  });\n\n  it('should set postal code according to postal_code', () => {\n    const somePostalCode = 'some-postal-code';\n    const component = aComponent(somePostalCode, null, 'postal_code');\n\n    expect(google2address(aGoogleResponse({components: [component]})).postalCode).toEqual(somePostalCode);\n  });\n\n  it('should set street number according to street_number', () => {\n    const someStreetNumber = 'some-street-number';\n    const component = aComponent(someStreetNumber, null, 'street_number');\n\n    expect(google2address(aGoogleResponse({components: [component]})).number).toEqual(someStreetNumber);\n  });\n\n  it('should set formatted according to formatted_address', () => {\n    const someFormattedAddress = 'some-formatted-address';\n    expect(google2address(aGoogleResponse({formatted: someFormattedAddress})).formatted).toEqual(someFormattedAddress);\n  });\n\n  it('should set latLng according to geometry', () => {\n    const someGeometry = aGeometry(100, 22);\n    expect(google2address(aGoogleResponse({geometry: someGeometry})).latLng).toEqual({lng: 22, lat: 100});\n  });\n\n  it('should set approximate if street_address is not in types', () => {\n    expect(google2address(aGoogleResponse({types: ['street_address']})).approximate).toBe(false);\n    expect(google2address(aGoogleResponse({types: ['anything else']})).approximate).toBe(true);\n  });\n\n  it('should set approximate if premise is not in types', () => {\n    expect(google2address(aGoogleResponse({types: ['premise']})).approximate).toBe(false);\n    expect(google2address(aGoogleResponse({types: ['anything else']})).approximate).toBe(true);\n  });\n\n  it('should omit any undefined field', () => {\n    expect(google2address(aGoogleResponse({}))).toEqual({\n      approximate: true,\n      latLng: {\n        lat: 1, lng: 2\n      },\n      formatted: ''\n    });\n  });\n});\n"}});