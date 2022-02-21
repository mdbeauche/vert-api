import search from './search';

describe('search', () => {
  it('finds 1 result', () => {
    const result = search('test 1');
    expect(result.length).toEqual(1);
    expect(result[0].title).toEqual('test 1');
  });

  it('finds 2 results', () => {
    const result = search('test 2');
    expect(result.length).toEqual(2);
    expect(result[0].title).toEqual(expect.stringContaining('test 2'));
    expect(result[1].title).toEqual(expect.stringContaining('test 2'));
  });

  it('finds 0 results', () => {
    const result = search('test 3');
    expect(result.length).toEqual(0);
  });
});
