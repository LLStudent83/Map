import ErrorRepository from '../errorRepository';

test('check code false ', () => {
  const arrEr = [[1, 'Это не функция'], [2, 'Это не объект']];
  const errorRepository = new ErrorRepository(arrEr);

  expect(errorRepository.translate(10)).toBe('Unknown error');
});

test('check code false ', () => {
  const arrEr = [[1, 'Это не функция'], [2, 'Это не объект']];
  const errorRepository = new ErrorRepository(arrEr);

  expect(errorRepository.translate(1)).toBe('Это не функция');
});
