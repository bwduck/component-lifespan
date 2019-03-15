import React from 'react';
import { configure, mount } from 'enzyme';
import ComponentLifespan from '../src/component-lifespan';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let realDate;

describe('<ComponentLifespan />', () => {
  beforeAll(() => {
    realDate = Date.now.bind(global.Date);
  });

  afterEach(() => {
    Date.now = realDate;
    console.log(global.Date.now);
  });

  it('times how long a component is rendered', () => {
    global.Date.now = jest
      .fn()
      .mockReturnValueOnce(100)
      .mockReturnValueOnce(123);
    const updateElapsedTimeMock = jest.fn();
    const wrapper = mount(
      <ComponentLifespan updateElapsedTime={updateElapsedTimeMock}>
        Test
      </ComponentLifespan>
    );
    wrapper.unmount();
    expect(updateElapsedTimeMock).toHaveBeenCalledWith(23);
  });
});
