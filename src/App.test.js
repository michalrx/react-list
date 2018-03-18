import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// W testach nie łaczymy się z serwerem w celu pobrania danych, a zamiast tego, tworzymy gotowe dane
// imitujące dane pobrane z serwera wg oczekiwania.
import testData from './__mocks__/testData.js'

// Funkcje i dane do przetestowania.
import { sortComparator, ratingNames, getStats } from './utils'

// Sprawdza poprawność zamontowanie głównego komponentu
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// Testuje poprawność funckji sortującej sortComparator
it('Sorting items by title', () => {
  const sortedData = testData.sort(sortComparator)
  const sortedIDs = sortedData.map(item => item.id)

  // ponieważ tablice są obiektami, ich bezpośrednie porównanie nie przyniesie
  // oczekiwanego rezultatu. Przekształ camy więc tablicę na tekst na podstawie
  // zawartości, a nastepnie prównujemy istniejący tekst z oczekiwanym.
  expect(sortedIDs.toString()).toBe([3, 5, 10, 6, 7, 2, 1, 4, 8, 9].toString())
})

// Testuje nazwy poszczególnych ocen
it('Naming stats', () => {
  // Podobnie jak w poprzednim przypadku, porównujemy zawarty teskt, a nie tablicę bezpośrednio.
  expect(ratingNames.toString()).toBe('Not rated yet,very poor,poor,average,good,very good')
})


// Testuje obliczenia funkcji getStats, zwracającej ilość poszczególnych ocen w danych testowych.
it('Computing stats', () => {
  const stats = getStats(testData)

  expect(stats[ratingNames[5]]).toBe(1)
  expect(stats[ratingNames[4]]).toBe(3)
  expect(stats[ratingNames[3]]).toBe(1)
  expect(stats[ratingNames[2]]).toBe(1)
  expect(stats[ratingNames[1]]).toBe(2)
  expect(stats[ratingNames[0]]).toBe(2)
})
