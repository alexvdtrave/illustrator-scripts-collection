const { reload } = require('./test-utils');

describe('Find Smaller Paths', () => {

  const mocks = {
    app: {
      redraw: jest.fn()
    },
    alert: jest.fn(),
    localize: jest.fn().mockReturnValue('msg1')
  };

  Object.assign(global, mocks);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('checks whether a document is open', () => {
    reload('../src/FindSmallerPaths');

    expect(global.alert).toBeCalledTimes(1);
    expect(global.app.redraw).not.toBeCalled();
  });

  it('checks whether a document is open', () => {
    expect(global.alert).toBeCalledTimes(12);
  });

});