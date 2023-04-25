const { reload } = require('./test-utils');

describe('Find Overlay Paths', () => {

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
    reload('../src/FindOverlayPaths');

    expect(global.alert).toBeCalledTimes(1);
    expect(global.app.redraw).not.toBeCalled();
  });

});